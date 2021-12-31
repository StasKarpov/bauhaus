import React from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";

import { TRAININGS } from "../queries/trainings";
import Query from "../components/Query";
import {
  Query as QueryType,
  TrainingEntity,
  TrainingTypeEntity,
} from "../types";

import { useLang } from "../context/lang";
import FadeIn from "react-fade-in";

export default () => {
  return (
    <>
      <Query query={TRAININGS}>
        {({ data: { trainings, trainingTypes } }: { data: QueryType }) => (
          <Trainings
            trainings={trainings?.data}
            trainingTypes={trainingTypes?.data}
          />
        )}
      </Query>
    </>
  );
};

const Trainings = ({
  trainings,
  trainingTypes,
}: {
  trainings?: Array<TrainingEntity>;
  trainingTypes?: Array<TrainingTypeEntity>;
}) => {
  const { t } = useLang();
  const { trainingId } = useParams();

  const [trainingTypeFilter, setTrainingTypeFilter] = React.useState<
    TrainingTypeEntity | ""
  >("");

  return trainingId ? (
    <Outlet />
  ) : (
    <FadeIn className="w-full">
      <div className="w-full flex justify-between text-lg">
        <div
          className={`m-4 cursor-pointer ${
            trainingTypeFilter == "" ? "font-bold" : ""
          }`}
          onClick={() => setTrainingTypeFilter("")}
        >
          {t("Все")}
        </div>
        {trainingTypes?.map(
          (trainingType: TrainingTypeEntity, index: number) => (
            <div
              className={`m-4 cursor-pointer ${
                trainingTypeFilter == trainingType ? "font-bold" : ""
              }`}
              onClick={() => setTrainingTypeFilter(trainingType)}
              key={index}
            >
              {trainingType.attributes?.Name}
            </div>
          )
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {trainings
          ?.filter((training: TrainingEntity) =>
            training.attributes?.training_types?.data.some(
              (trainingType: TrainingTypeEntity) =>
                trainingTypeFilter == ""
                  ? true
                  : trainingType.id == trainingTypeFilter.id
            )
          )
          .map((training: TrainingEntity, index: number) => (
            <TrainingTitleCard key={index} training={training} />
          ))}
      </div>
    </FadeIn>
  );
};

const TrainingTitleCard = ({ training }: { training: TrainingEntity }) => {
  const navigate = useNavigate();

  const hoverBackgroundColor =
    training.attributes?.room?.data?.attributes?.CardColorCss;

  return (
    <div
      onClick={() => setTimeout(() => navigate(`${training.id}`), 30)}
      className={`relative bg-black text-white text-center text-xl font-bold cursor-pointer group disable-tap-highlight`}
    >
      <div
        className="w-full h-full py-8 text-black hidden group-hover:block"
        style={{ background: hoverBackgroundColor as string }}
      >
        {training.attributes?.Title?.toUpperCase()}
      </div>
      <div className="w-full h-full py-8 group-hover:hidden">
        {training.attributes?.Title?.toUpperCase()}
      </div>
    </div>
  );
};
