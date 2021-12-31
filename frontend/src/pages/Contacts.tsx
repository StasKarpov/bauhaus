import React from "react";

import { CREATE_CONTACT } from "../queries/contact";
import { useMutation } from "@apollo/client";
import { useLang } from "../context/lang";
import FadeIn from "react-fade-in";

import mapIcon from "../assets/images/map.png";

export default () => {
  const { t } = useLang();
  const [createContact, { data: isMessageSent, loading, error }] =
    useMutation(CREATE_CONTACT);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      lastName: { value: string };
      email: { value: string };
      number: { value: string };
      message: { value: string };
    };
    createContact({
      variables: {
        name: target.name.value,
        lastName: target.lastName.value,
        email: target.email.value,
        number: target.number.value,
        message: target.message.value,
      },
    });
  };

  return (
    <FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-4">
        <div className="order-2 lg:order-1 w-full relative">
          <div className="pt-[100%]">
            {" "}
            <div
              className="absolute h-full w-full top-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${mapIcon})` }}
            ></div>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full relative">
          <div
            style={{
              background:
                " linear-gradient(180deg, rgba(0, 169, 157, 0.6) 0%, rgba(255, 255, 255, 0) 43.29%), rgba(241, 90, 36, 0.7)",
            }}
            className="pt-[100%]"
          >
            {" "}
            <div className="absolute h-full w-full flex flex-col justify-between items-center top-0 left-0 text-xl px-10 lg:px-40">
              <div className="text-2xl font-bold mt-8 lg:mt-20">
                {t("Адрес")}
              </div>
              <div>{t("_адрес")}</div>
              <div>{t("_телефон")}</div>
              <div>{t("_почта")}</div>

              <form
                className="w-full grid grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <div className="text-2xl font-bold text-center col-span-2">
                  {t("Свяжитесь с нами")}
                </div>
                <input
                  className="py-2 px-4"
                  name="name"
                  placeholder={t("Имя")}
                  disabled={isMessageSent}
                />
                <input
                  className="py-2 px-4"
                  name="lastName"
                  placeholder={t("Фамилия")}
                  disabled={isMessageSent}
                />
                <input
                  className="py-2 px-4"
                  name="email"
                  placeholder={t("E-mail")}
                  disabled={isMessageSent}
                />
                <input
                  className="py-2 px-4"
                  name="number"
                  placeholder={t("Номер телефона")}
                  disabled={isMessageSent}
                />
                <textarea
                  className="py-2 px-4 col-span-2 h-20 lg:h-40"
                  name="message"
                  placeholder={t("Ваше сообщение...")}
                  disabled={isMessageSent}
                />
                <div className="col-span-2">
                  {isMessageSent ? (
                    <div className="h-14 mt-1 text-center mb-20">
                      {t("Сообщение отправлено!")}
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full mb-20 bg-black text-white p-4"
                    >
                      {t("Отправить")}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
