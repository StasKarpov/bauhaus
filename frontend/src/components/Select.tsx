import React from "react";
import { useLang } from "../context/lang";

export default ({
  value,
  className,
  onChange,
  label,
  options,
}: {
  value: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: Array<any>;
}) => {
  const { t } = useLang();
  return (
    <select className={className} value={value} onChange={onChange}>
      <option hidden selected value="">
        {label}
      </option>
      <option value="">{t("Все")}</option>
      {options.map((item: any, index: number) => (
        <option key={index} value={item.id as string}>
          {item.attributes?.Name}
        </option>
      ))}
    </select>
  );
};
