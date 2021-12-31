import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

import { mdiChevronLeft, mdiPlus, mdiMinus } from "@mdi/js";

import { COACH_AND_TRAININGS } from "../queries/coaches";
import Query from "../components/Query";
import { toAbsoluteUrl } from "../utils";
import {
  Query as QueryType,
  TrainingEntity,
  TrainingTypeEntity,
  CoachEntity,
  DayEntity,
} from "../types";
import { useLang } from "../context/lang";
import FadeIn from "react-fade-in";

export default () => {
  let { coachId } = useParams();
  const [trainingsVisible, setTrainingsVisible] =
    React.useState<boolean>(false);

  const onToogleTrainings = () => {
    setTrainingsVisible((prev) => !prev);
    setTimeout(() => {
      document
        .getElementById("trainings-table")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Query query={COACH_AND_TRAININGS} variables={{ coachId }}>
      {({ data: { coach, trainings } }: { data: QueryType }) => (
        <FadeIn>
          {coach?.data ? (
            <CoachCard
              coach={coach?.data}
              trainingsVisible={trainingsVisible}
              onToogleTrainings={onToogleTrainings}
              trainings={trainings ? trainings?.data : []}
              color={
                trainings?.data && trainings?.data?.length > 0
                  ? (trainings?.data[0]?.attributes?.room?.data?.attributes
                      ?.CardColorCss as string)
                  : "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 1) 100%), linear-gradient(180deg, rgba(0, 169, 157, 0.76) 0%, rgba(255, 255, 255, 0) 30.73%, rgba(255, 255, 255, 0) 100%), #662D91"
              }
            />
          ) : null}
          {trainingsVisible && (
            <>
              <TrainingsTable trainings={trainings?.data || []} />
              <TrainingsTableMobile trainings={trainings?.data || []} />
            </>
          )}
        </FadeIn>
      )}
    </Query>
  );
};

const CoachCard = ({
  coach,
  trainingsVisible,
  onToogleTrainings,
  color,
  trainings,
}: {
  coach: CoachEntity;
  trainingsVisible: boolean;
  onToogleTrainings: Function;
  color: string;
  trainings: Array<TrainingEntity>;
}) => {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-4 mt-4">
      <div className="w-full relative">
        <div
          style={{
            background: color,
          }}
          className="pt-[80%] lg:pt-[90%]"
        >
          {" "}
          <div className="absolute h-full w-full pb-10 lg:pb-40 flex flex-col justify-between top-0 left-0">
            <div
              className="bg-black text-white top-0 w-12 left-0 cursor-pointer inline-block"
              onClick={() => navigate(-1)}
            >
              {" "}
              <Icon size={2} color="white" path={mdiChevronLeft} />
            </div>
            <div>
              <div className="font-bold text-3xl mb-6 w-full text-center">
                {`${coach.attributes?.Name} ${coach.attributes?.FamilyName}`}
              </div>
              <div className="text-lg  w-full text-center">
                {trainings
                  .map((training: TrainingEntity) => training.attributes?.Title)
                  .join(",")}
              </div>
            </div>
            <div className="text-base  w-full px-10 lg:px-20 text-center">
              {coach.attributes?.Description}
            </div>
            <div className="font-semibold text-2xl w-full text-center mb-6">
              {coach.attributes?.BottomText}
            </div>
          </div>
          <div className="hidden lg:flex w-full absolute bottom-0">
            <div
              className="text-white bg-black w-full flex justify-between px-8 text-2xl py-7 font-semibold"
              onClick={() => onToogleTrainings()}
            >
              {`${t("Тренировки с")} ${coach.attributes?.NameInstrumental}`}
              <div className="bg-white rounded-full cursor-pointer w-8 h-8 flex justify-center items-center">
                <Icon
                  size={1}
                  color="black"
                  path={trainingsVisible ? mdiMinus : mdiPlus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <div
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                coach.attributes?.Image?.data?.attributes?.url
              )}')`,
            }}
            className="absolute top-0 w-full h-full bg-no-repeat bg-cover bg-center"
          />
          <div className="pt-[90%]" />
        </div>
      </div>
      <div className="flex lg:hidden w-full mt-2">
        <div
          className="text-white bg-black w-full flex justify-between px-8 text-2xl py-4 font-semibold"
          onClick={() => onToogleTrainings()}
        >
          {`${t("Тренировки с")} ${coach.attributes?.NameInstrumental}`}
          <div className="bg-white rounded-full cursor-pointer w-8 h-8 flex justify-center items-center">
            <Icon
              size={1}
              color="black"
              path={trainingsVisible ? mdiMinus : mdiPlus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainingsTable = ({
  trainings,
}: {
  trainings: Array<TrainingEntity>;
}) => {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <FadeIn>
      <table className="hidden lg:table w-full text-xl mt-10">
        <tr id="trainings-table" className="font-bold text-left h-20">
          <th>{t("Тренировка")}</th>
          <th>{t("День")}</th>
          <th>{t("Направление")}</th>
          <th>{t("Длительность")}</th>
          <th>{t("Зал")}</th>
          <th></th>
        </tr>
        {trainings.map((training: TrainingEntity, index: number) => (
          <tr key={index} className="h-10">
            <td
              className="cursor-pointer"
              onClick={() => navigate(`/trainings/${training.id}`)}
            >
              {training.attributes?.Title}
            </td>
            <td>
              {training.attributes?.days?.data
                .map((day: DayEntity) => day.attributes?.Name)
                .join("/")}
            </td>
            <td>
              {training.attributes?.training_types?.data
                .map(
                  (trainingType: TrainingTypeEntity) =>
                    trainingType.attributes?.Name
                )
                .join(",")}
            </td>
            <td>{training.attributes?.Length}</td>
            <td>{training.attributes?.room?.data?.attributes?.Name}</td>
            <td>
              <div
                className="bg-black text-white cursor-pointer text-center py-4 text-base"
                onClick={() => navigate("/contacts")}
              >
                {t("Забронировать")}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </FadeIn>
  );
};

const TrainingsTableMobile = ({
  trainings,
}: {
  trainings: Array<TrainingEntity>;
}) => {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden">
      <div id="trainings-table" className="group mt-[-0.6rem]">
        {trainings.map((training: TrainingEntity, index: number) => (
          <>
            {/* normal */}
            <div
              key={index}
              className="w-full p-4 text-sm mb-1 cursor-pointer disable-tap-highlight justify-between items-center flex group-hover:hidden "
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
              <div className="flex text-xl">
                <div className="font-bold">
                  {training.attributes?.Title?.toUpperCase()}
                </div>
              </div>
              <div className="text-base">
                {training.attributes?.training_types?.data
                  .map(
                    (trainingType: TrainingTypeEntity) =>
                      trainingType.attributes?.Name
                  )
                  .join(",")}
              </div>
              <div className="text-xl font-bold">
                {training.attributes?.days?.data
                  .map((day: DayEntity) => day.attributes?.ShortName)
                  .join("/")}
              </div>
            </div>
            {/* hovered */}
            <div
              key={index}
              className="w-full p-4 text-sm mb-1 cursor-pointer disable-tap-highlight justify-between items-center hidden group-hover:flex bg-black"
              onClick={() =>
                setTimeout(() => navigate(`/trainings/${training.id}`), 30)
              }
            >
              <div className="flex text-xl text-white">
                <div className="font-bold">
                  {training.attributes?.Title?.toUpperCase()}
                </div>
              </div>
              <div className="text-base text-white">
                {training.attributes?.training_types?.data
                  .map(
                    (trainingType: TrainingTypeEntity) =>
                      trainingType.attributes?.Name
                  )
                  .join(",")}
              </div>
              <div className="text-xl font-bold text-white">
                {training.attributes?.days?.data
                  .map((day: DayEntity) => day.attributes?.ShortName)
                  .join("/")}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
