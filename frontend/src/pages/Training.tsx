import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

import { mdiChevronLeft } from "@mdi/js";

import { TRAINING } from "../queries/trainings";
import Query from "../components/Query";
import { toAbsoluteUrl } from "../utils";
import { Query as QueryType, TrainingEntity } from "../types";
import { useLang } from "../context/lang";
import FadeIn from "react-fade-in";

export default () => {
  let { trainingId } = useParams();

  return (
    <Query query={TRAINING} variables={{ trainingId }}>
      {({ data: { training } }: { data: QueryType }) =>
        training?.data ? <TrainingCard training={training?.data} /> : null
      }
    </Query>
  );
};

const TrainingCard = ({ training }: { training: TrainingEntity }) => {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-4">
      <div className="w-full relative">
        <div
          style={{
            background: training.attributes?.room?.data?.attributes
              ?.CardColorCss as string,
          }}
          className="pt-[80%] lg:pt-[90%]"
        >
          {" "}
          <div className="absolute h-full pb-10 lg:pb-40 flex flex-col justify-between top-0 left-0">
            <div
              className="bg-black text-white top-0 w-12 left-0 cursor-pointer inline-block"
              onClick={() => navigate(-1)}
            >
              {" "}
              <Icon size={2} color="white" path={mdiChevronLeft} />
            </div>
            <div>
              <div className="font-bold text-3xl mb-6 w-full text-center">
                {training.attributes?.Title}
              </div>
              <div className="text-lg  w-full text-center">
                {training.attributes?.Subtitle}
              </div>
            </div>
            <div className="text-base  w-full px-10 lg:px-20 text-center">
              {training.attributes?.Description}
            </div>
            <div className="font-semibold text-2xl w-full text-center">
              {training.attributes?.BottomText}
            </div>
          </div>
          <div className="hidden lg:flex w-full absolute bottom-0">
            <div
              onClick={() => navigate("/contacts")}
              className="text-white bg-black w-2/4 text-2xl py-7 text-center font-semibold cursor-pointer"
            >
              {t("Забронировать")}
            </div>
            <div
              onClick={() => navigate("/timetable")}
              className="text-black bg-white w-2/4 text-2xl border border-solid border-black py-7 text-center font-semibold cursor-pointer"
            >
              {t("Расписание")}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <div
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                training.attributes?.Media?.data[0]?.attributes?.url
              )}')`,
            }}
            className="absolute top-0 w-full h-[calc(100%-0.25rem)] bg-no-repeat bg-cover bg-center"
          />
          <div className="pt-[45%]" />
        </div>
        <div className="relative flex w-full">
          <div
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                training.attributes?.Media?.data[1]?.attributes?.url
              )}')`,
            }}
            className="absolute w-[calc(50%-0.25rem)] top-[0.25rem] h-[calc(100%-0.25rem)] bg-no-repeat bg-cover bg-center"
          />
          <div
            style={{
              backgroundImage: `url('${toAbsoluteUrl(
                training.attributes?.Media?.data[2]?.attributes?.url
              )}')`,
            }}
            className="absolute right-0 w-[calc(50%-0.25rem)] top-[0.25rem] h-[calc(100%-0.25rem)] bg-no-repeat bg-cover bg-center"
          />
          <div className="pt-[calc(45%)]" />
        </div>
        <div />
      </div>
      <div className="w-full flex lg:hidden">
        <div
          onClick={() => navigate("/contacts")}
          className="text-white bg-black w-2/4 text-xl py-2 text-center font-semibold cursor-pointer"
        >
          {t("Забронировать")}
        </div>
        <div
          onClick={() => navigate("/timetable")}
          className="text-black bg-white w-2/4 text-xl border border-solid border-black py-2 text-center font-semibold cursor-pointer"
        >
          {t("Расписание")}
        </div>
      </div>
    </FadeIn>
  );
};
