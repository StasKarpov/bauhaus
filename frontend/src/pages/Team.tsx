import React from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";

import { COACHES } from "../queries/coaches";
import Query from "../components/Query";
import { Query as QueryType, TrainingEntity, CoachEntity } from "../types";
import FadeIn from "react-fade-in";

import { useLang } from "../context/lang";
import { toAbsoluteUrl } from "../utils";

export default () => {
  return (
    <>
      <Query query={COACHES}>
        {({ data: { coaches, trainings } }: { data: QueryType }) => (
          <Coaches coaches={coaches?.data} trainings={trainings?.data} />
        )}
      </Query>
    </>
  );
};

type CoachTrainings = {
  id: string;
  name: string;
  trainings: Array<TrainingEntity>;
  imageUrl: string;
};

const Coaches = ({
  coaches,
  trainings,
}: {
  coaches?: Array<CoachEntity>;
  trainings?: Array<TrainingEntity>;
}) => {
  const { t } = useLang();
  const { coachId } = useParams();

  const coachesTrainings: Array<CoachTrainings> = coaches
    ? coaches.map(
        (coach: CoachEntity) =>
          ({
            id: coach.id,
            name: coach.attributes?.Name,
            imageUrl: coach.attributes?.Image?.data?.attributes?.url,
            trainings: trainings?.filter(
              (training: TrainingEntity) =>
                training.attributes?.coach?.data?.id == coach.id
            ),
          } as CoachTrainings)
      )
    : [];

  return coachId ? (
    <Outlet />
  ) : (
    <FadeIn className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {coachesTrainings.map((coachTrainings: CoachTrainings, index: number) => (
        <CoachCard key={index} coachTrainings={coachTrainings} />
      ))}
    </FadeIn>
  );
};

const CoachCard = ({ coachTrainings }: { coachTrainings: CoachTrainings }) => {
  const navigate = useNavigate();
  const { t } = useLang();
  const coverColor: string =
    coachTrainings.trainings[0]?.attributes?.room?.data?.attributes
      ?.TimetableColorCss ||
    "linear-gradient(180deg, rgba(122, 39, 136, 0.81) 0%, rgba(255, 255, 255, 0.81) 100%)";

  return (
    <div className="relative group">
      <div
        onClick={() => navigate(`${coachTrainings.id}`)}
        className="w-full pt-[100%] bg-no-repeat bg-cover bg-center border border-white border-solid"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(coachTrainings.imageUrl)}')`,
        }}
      ></div>
      <div
        className="w-full h-full absolute top-0 rotate-180 flex lg:hidden lg:group-hover:flex flex-col justify-around"
        style={{ background: coverColor }}
        onClick={() => navigate(`${coachTrainings.id}`)}
      >
        <div className="w-full h-full flex flex-col justify-around items-center rotate-180">
          <div className="text-4xl lg:text-3xl text-black font-bold mt-10">
            {coachTrainings.name}
          </div>
          <div className="text-2xl lg:text-xl text-black">
            {coachTrainings.trainings.map((training: TrainingEntity) => (
              <div>{training.attributes?.Title}</div>
            ))}
          </div>
          <div className="bg-black cursor-pointer text-xl lg:text-base text-white text-center py-4 px-6 lg:py-2 lg:px-4 mb-6">
            {t("Познакомится")}
          </div>
        </div>
      </div>
    </div>
  );
};
