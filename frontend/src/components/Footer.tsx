import React from "react";

import MenuItemLink from "./MenuItemLink";
import LanguagePicker from "./LanguagePicker";
import instagramIcon from "../assets/images/instagram.svg";
import callIcon from "../assets/images/call.svg";
import telegramIcon from "../assets/images/telegram.svg";
import { useLang } from "../context/lang";

export default () => {
  const { t } = useLang();

  return (
    <div className="h-28 w-full fixed bottom-0 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <div className="flex cursor-pointer">
          <img className="m-3" style={{ width: "1.8rem" }} src={telegramIcon} />
          <img
            className="m-3"
            style={{ width: "1.8rem" }}
            src={instagramIcon}
          />
          <img className="m-3" style={{ width: "1.8rem" }} src={callIcon} />
        </div>
        <MenuItemLink
          className="hidden lg:block"
          fontWeightClass="font-normal"
          textSizeClass="text-2xl"
          to="gallery"
          text={t("Галерея")}
        />
        <MenuItemLink
          className="hidden lg:block"
          fontWeightClass="font-normal"
          textSizeClass="text-2xl"
          to="contacts"
          text={t("Контакты")}
        />
        <LanguagePicker />
      </div>
    </div>
  );
};
