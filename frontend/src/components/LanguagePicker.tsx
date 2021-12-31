import React from "react";
import { useLang } from "../context/lang";

export default () => {
  const { getAvailableLangs, setLang, lang } = useLang();

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <select
      className="text-3xl lg:text-2xl"
      value={lang}
      onChange={handleChangeLang}
    >
      {getAvailableLangs().map((languageCode: string, index: number) => (
        <option key={index} value={languageCode}>
          {languageCode.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
