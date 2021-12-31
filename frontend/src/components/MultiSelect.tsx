import React from "react";
import Icon from "@mdi/react";

import { mdiChevronDown } from "@mdi/js";

function useOutsideAlerter(ref: any, ref2: any, action: Function) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        ref2.current &&
        !ref2.current.contains(event.target)
      ) {
        action();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default ({
  label,
  value,
  options,
  onChoose,
  renderOption,
  className,
}: {
  label: string;
  value: Array<string>;
  options: Array<string>;
  onChoose: (id: string) => void;
  renderOption: (id: string) => string;
  className?: string;
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  const [isOpened, setOpened] = React.useState<boolean>(false);

  const toogleOpened = () => setOpened((prev) => !prev);

  useOutsideAlerter(wrapperRef, buttonRef, toogleOpened);

  return (
    <div
      className={`${
        className ? className : ""
      } relative bg-white font-semibold text-xl`}
    >
      <div
        ref={buttonRef}
        onClick={toogleOpened}
        className="flex justify-center items-center px-4 lg:px-14 cursor-pointer"
      >
        <div>{label}</div>
        <Icon size={1} color="black" path={mdiChevronDown} />
      </div>
      {isOpened && (
        <div
          className="absolute top-0 bg-white w-72 text-xl px-8 py-2 my-8 max-h-96 overflow-auto"
          ref={wrapperRef}
        >
          {options.map((option: string, index: number) => (
            <div
              className="cursor-pointer my-4"
              onClick={() => onChoose(option)}
            >
              <input
                type="checkbox"
                id={option}
                name={option}
                checked={value.includes(option)}
              />
              <label
                className=" m-4 cursor-pointer"
                onClick={() => onChoose(option)}
                htmlFor={option}
              >
                {renderOption(option)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
