import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ALL_TRAININGS_AND_DAYS_QUERY,
  TIMETABLE_FILTERS_DATA_QUERY,
} from "../queries/trainings";
import {
  Query as QueryType,
  TrainingEntity,
  TrainingTypeEntity,
  CoachEntity,
  TrainingEntityResponseCollection,
  DayEntityResponseCollection,
  DayEntity,
  Maybe,
  Scalars,
} from "../types";
import MultiSelect from "../components/MultiSelect";
import FadeIn from "react-fade-in";

import Icon from "@mdi/react";

import { mdiPlus, mdiMinus } from "@mdi/js";

import { useLang } from "../context/lang";

import Query from "../components/Query";

export default () => <TimetableContainer />;

const TimetableContainer = () => {
  return (
    <Query query={ALL_TRAININGS_AND_DAYS_QUERY}>
      {({ data: { trainings, days } }: { data: QueryType }) => (
        <Timetable trainings={trainings?.data} days={days?.data} />
      )}
    </Query>
  );
};

type TrainingsByDays = {
  [dayId: string]: Array<TrainingEntity>;
};

enum TypeOfDay {
  morning = "Утро",
  day = "День",
  evening = "Вечер",
}

interface Filters {
  coachIds: Array<string>;
  trainingIds: Array<string>;
  trainingTypeIds: Array<string>;
  timeOfDayIds: Array<string>;
  [key: string]: Array<string>;
}

const Timetable = ({
  trainings,
  days,
}: {
  trainings?: Array<TrainingEntity>;
  days?: Array<DayEntity>;
}) => {
  const [filters, setFilters] = React.useState<Filters>({
    coachIds: [],
    trainingIds: [],
    trainingTypeIds: [],
    timeOfDayIds: [],
  });

  const toogleFilter = (filterName: string, value: string) =>
    setFilters((prev: Filters) => {
      if (prev[filterName].includes(value)) {
        return {
          ...prev,
          [filterName]: prev[filterName].filter((v: string) => v != value),
        };
      }
      return { ...prev, [filterName]: [...prev[filterName], value] } as Filters;
    });

  //create empty trainings by days object
  const trainingsByDays: TrainingsByDays = days
    ? days.reduce(
        (acc: TrainingsByDays, day: DayEntity) => ({
          ...acc,
          [day.id as string]: [],
        }),
        {}
      )
    : {};

  if (trainings) {
    //filter and fill trainings by days object
    trainings
      .filter((training: TrainingEntity) => {
        //filter by filters
        let passesFilter = true;
        if (
          filters.coachIds.length > 0 &&
          !filters.coachIds.includes(
            training.attributes?.coach?.data?.id as string
          )
        ) {
          passesFilter = false;
        }
        if (
          filters.trainingIds.length > 0 &&
          !filters.trainingIds.includes(training.id as string)
        ) {
          passesFilter = false;
        }
        if (
          filters.trainingTypeIds.length > 0 &&
          !training.attributes?.training_types?.data.some(
            (trainingType: TrainingTypeEntity) =>
              filters.trainingTypeIds.includes(trainingType.id as string)
          )
        ) {
          passesFilter = false;
        }

        const trainingTimeOfDay =
          training.attributes?.Time < "12:00:00"
            ? TypeOfDay.morning
            : training.attributes?.Time > "18:00:00"
            ? TypeOfDay.evening
            : TypeOfDay.day;

        if (
          filters.timeOfDayIds.length > 0 &&
          !filters.timeOfDayIds.includes(trainingTimeOfDay)
        ) {
          passesFilter = false;
        }
        return passesFilter;
      })
      .forEach((training: TrainingEntity) => {
        // fill trainings by days list
        training.attributes?.days?.data.forEach((day: DayEntity) => {
          if (day.id) {
            trainingsByDays[day.id].push(training);
          }
        });
      });
  }

  return (
    <FadeIn>
      <TimetableFilters filters={filters} toogleFilter={toogleFilter} />
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2">
        {days?.map((day: DayEntity, index: number) => (
          <TimetableColumn
            key={index}
            day={day}
            trainings={day ? trainingsByDays[day.id as string] : []}
          />
        ))}
      </div>
    </FadeIn>
  );
};

const TimetableFilters = ({
  filters,
  toogleFilter,
}: {
  filters: Filters;
  toogleFilter: (filterName: string, value: string) => void;
}) => {
  const { t } = useLang();
  return (
    <Query query={TIMETABLE_FILTERS_DATA_QUERY}>
      {({
        data: { trainings, coaches, trainingTypes },
      }: {
        data: QueryType;
      }) => (
        <div className="w-full flex justify-between mb-2">
          <MultiSelect
            label={t("Тренер")}
            value={filters.coachIds}
            options={
              coaches?.data.map((coach: CoachEntity) => coach.id as string) ||
              []
            }
            onChoose={(id) => toogleFilter("coachIds", id)}
            renderOption={(id: string) => {
              const coach: CoachEntity | undefined = coaches?.data.find(
                (coach: CoachEntity) => coach.id == id
              );
              if (coach) {
                return `${coach.attributes?.Name} ${coach.attributes?.FamilyName}`;
              } else {
                return "";
              }
            }}
          />
          <MultiSelect
            className="hidden lg:block"
            label={t("Тренировки")}
            value={filters.trainingIds}
            options={
              trainings?.data.map(
                (training: TrainingEntity) => training.id as string
              ) || []
            }
            onChoose={(id) => toogleFilter("trainingIds", id)}
            renderOption={(id: string) => {
              const training: TrainingEntity | undefined = trainings?.data.find(
                (training: TrainingEntity) => training.id == id
              );
              if (training) {
                return `${training.attributes?.Title}`;
              } else {
                return "";
              }
            }}
          />

          <MultiSelect
            label={t("Направление")}
            value={filters.trainingTypeIds}
            options={
              trainingTypes?.data.map(
                (trainingType: TrainingTypeEntity) => trainingType.id as string
              ) || []
            }
            onChoose={(id) => toogleFilter("trainingTypeIds", id)}
            renderOption={(id: string) => {
              const trainingType: TrainingTypeEntity | undefined =
                trainingTypes?.data.find(
                  (trainingType: TrainingTypeEntity) => trainingType.id == id
                );
              if (trainingType) {
                return `${trainingType.attributes?.Name}`;
              } else {
                return "";
              }
            }}
          />

          <MultiSelect
            label={t("Время")}
            value={filters.timeOfDayIds}
            options={[TypeOfDay.morning, TypeOfDay.day, TypeOfDay.evening]}
            onChoose={(id) => toogleFilter("timeOfDayIds", id)}
            renderOption={(id: string) => {
              return id;
            }}
          />
        </div>
      )}
    </Query>
  );
};

const TimetableColumn = ({
  day,
  trainings,
}: {
  day: DayEntity;
  trainings: Array<TrainingEntity>;
}) => {
  const { t } = useLang();
  const [trainingsVisible, setTrainingsVisible] =
    React.useState<boolean>(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setTrainingsVisible((prev) => !prev)}
        className="bg-black text-white flex justify-between lg:justify-center text-xl lg:text-sm font-bold lg:font-base text-left lg:text-center w-full px-4 py-4 mb-2"
      >
        {t(day.attributes?.Name?.toUpperCase())}
        <div className="bg-white rounded-full cursor-pointer w-6 h-6 flex lg:hidden justify-center items-center">
          <Icon
            size={1}
            color="black"
            path={trainingsVisible ? mdiMinus : mdiPlus}
          />
        </div>
      </div>
      <div className={`${trainingsVisible ? "block" : "hidden"} lg:block`}>
        {trainings.map((training: TrainingEntity, index: number) => (
          <TrainingCard key={index} training={training} />
        ))}
      </div>
    </div>
  );
};

const TrainingCard = ({ training }: { training: TrainingEntity }) => {
  const navigate = useNavigate();

  //TODO: change this!!
  //we have four almost identical elements, one is for hover and another one is normal state  third one for mobile and the last for mobile hover
  //this could be done more elegant, but I couldn't pass background color for hover throught css
  return (
    <div className="group">
      {/* normal */}
      <div
        className="w-full py-6 px-1  text-sm leading-5 mb-2 cursor-pointer hidden lg:flex lg:group-hover:hidden"
        onClick={() => navigate(`/trainings/${training.id}`)}
        style={{
          background: training
            ? (training.attributes?.room?.data?.attributes
                ?.TimetableColorCss as string)
            : "black",
        }}
      >
        <div className="font-semibold mx-3 text-lg leading-5">
          <div>{training.attributes?.Time?.split(":")[0]}:</div>
          <div>{training.attributes?.Time?.split(":")[1]}</div>
        </div>
        <div>
          <div className="font-bold">
            {training.attributes?.Title?.toUpperCase()}
          </div>
          <div className="font-normal">
            {training.attributes?.coach?.data?.attributes?.Name +
              " " +
              training.attributes?.coach?.data?.attributes?.FamilyName}
          </div>
        </div>
      </div>
      {/* hovered */}
      <div
        className="w-full py-6 px-1 flex text-sm leading-5 mb-2 cursor-pointer bg-black text-white hidden lg:group-hover:flex"
        onClick={() => navigate(`/trainings/${training.id}`)}
      >
        <div className="font-semibold mx-3 text-lg leading-5">
          <div>{training.attributes?.Time?.split(":")[0]}:</div>
          <div>{training.attributes?.Time?.split(":")[1]}</div>
        </div>
        <div>
          <div className="font-bold">
            {training.attributes?.Title?.toUpperCase()}
          </div>
          <div className="font-normal">
            {training.attributes?.coach?.data?.attributes?.Name +
              " " +
              training.attributes?.coach?.data?.attributes?.FamilyName}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className="w-full py-4 lg:py-6 px-1 text-sm leading-5 mb-2 cursor-pointer disable-tap-highlight justify-between flex group-hover:hidden lg:hidden"
        onClick={() =>
          setTimeout(() => navigate(`/trainings/${training.id}`), 30)
        }
        style={{
          background: training
            ? (training.attributes?.room?.data?.attributes
                ?.TimetableColorCss as string)
            : "black",
        }}
      >
        <div className="font-semibold mx-3 text-xl leading-5 flex items-center">
          {training.attributes?.Time?.split(":")[0]}:
          {training.attributes?.Time?.split(":")[1]}
        </div>
        <div className="flex text-xl">
          <div className="font-normal mx-4">
            {training.attributes?.coach?.data?.attributes?.Name}
          </div>
          <div className="font-bold mx-4">
            {training.attributes?.Title?.toUpperCase()}
          </div>
        </div>
      </div>
      {/* mobile hover */}
      <div
        className="w-full py-4 lg:py-6 px-1 text-sm leading-5 mb-2 cursor-pointer disable-tap-highlight bg-black justify-between hidden group-hover:flex lg:group-hover:hidden lg:hidden"
        onClick={() =>
          setTimeout(() => navigate(`/trainings/${training.id}`), 30)
        }
      >
        <div className="font-semibold text-white mx-3 text-xl leading-5 flex items-center">
          {training.attributes?.Time?.split(":")[0]}:
          {training.attributes?.Time?.split(":")[1]}
        </div>
        <div className="flex text-white text-xl">
          <div className="font-normal mx-4">
            {training.attributes?.coach?.data?.attributes?.Name}
          </div>
          <div className="font-bold mx-4">
            {training.attributes?.Title?.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
