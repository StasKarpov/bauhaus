import React from "react";
import MenuItemLink from "./MenuItemLink";
import Icon from "@mdi/react";

import { mdiMenu } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import FadeIn from "react-fade-in";

import LocationIcon from "../assets/images/location.svg";

import { useLang } from "../context/lang";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  return (
    <div className="h-20 lg:h-28 w-full fixed top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between h-full items-center">
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => navigate("/contacts")}
        >
          <Icon size={2} color="black" path={mdiMapMarker} />
        </div>
        <MenuItemLink
          className="hidden lg:block"
          to="timetable"
          text={t("Расписание")}
        />
        <MenuItemLink
          className="hidden lg:block"
          to="trainings"
          text={t("Тренировки")}
        />
        <MenuItemLink
          to="/"
          text="Baukörper"
          className="font-gothic"
          textSizeClass="text-5xl"
        />
        <MenuItemLink
          className="hidden lg:block"
          to="prices"
          text={t("Абонементы")}
        />
        <MenuItemLink
          className="hidden lg:block"
          to="team"
          text={t("Тренеры")}
        />
        <div
          className="cursor-pointer block lg:hidden"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          <Icon
            size={2}
            color="black"
            path={showMobileMenu ? mdiClose : mdiMenu}
          />
        </div>
      </div>
      <div
        className={`absolute transition-all top-[5rem] right-0 ${
          showMobileMenu ? " w-[100vw] " : "w-0"
        } z-10 bg-white `}
      >
        {showMobileMenu && (
          <FadeIn>
            <div className="text-black flex flex-col text-2xl justify-around items-center w-screen h-[calc(100vh-15rem)]">
              <MenuItemLink
                textSizeClass="text-4xl"
                to="timetable"
                text={t("Расписание")}
              />
              <MenuItemLink
                textSizeClass="text-4xl"
                to="prices"
                text={t("Абонементы")}
              />
              <MenuItemLink
                textSizeClass="text-4xl"
                to="trainings"
                text={t("Тренировки")}
              />
              <MenuItemLink
                textSizeClass="text-4xl"
                to="team"
                text={t("Тренеры")}
              />
              <MenuItemLink
                textSizeClass="text-4xl"
                to="gallery"
                text={t("Галерея")}
              />
              <MenuItemLink
                textSizeClass="text-4xl"
                to="contacts"
                text={t("Контакты")}
              />
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
};
