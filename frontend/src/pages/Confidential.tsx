import React from "react";

import { CREATE_CONTACT } from "../queries/contact";
import { gql, useMutation } from "@apollo/client";
import { useLang } from "../context/lang";

import confidentialImg from "../assets/images/confidential.png";

export default () => {
  const { t } = useLang();

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="w-full relative">
        <div className="pt-[100%]">
          {" "}
          <div
            className="absolute h-full w-full top-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${confidentialImg})` }}
          ></div>
        </div>
      </div>
      <div className="w-full relative">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(0, 169, 157, 0.76) 0%, rgba(255, 255, 255, 0) 30.73%, rgba(255, 255, 255, 0) 100%), #F15A24",
          }}
          className="pt-[100%]"
        >
          {" "}
          <div className="absolute h-full w-full flex flex-col justify-around items-center top-0 left-0 text-xl px-40">
            <div className="text-2xl font-bold mt-20">
              {t("Политика Конфиденциальности")}
            </div>
            <div className="text-base mb-20">
              {t(
                "_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика_политика _политика _политика _политика"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
