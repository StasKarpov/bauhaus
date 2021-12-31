import React from "react";
import { toAbsoluteUrl } from "../utils";

interface ICardProps {
  className?: string;
  gradientCss?: string;
  backgroundUrl?: string;
  children?: React.ReactNode;
  onClick?: Function;
}

const Card = ({ className, backgroundUrl, children, onClick }: ICardProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(
    backgroundUrl ? false : true
  );

  return (
    <div
      onClick={onClick ? (e) => onClick() : undefined}
      className={`${className} bg-contain relative`}
      style={loaded ? {} : { display: "none" }}
    >
      <div className="absolute w-full h-full">{children}</div>
      {backgroundUrl && (
        <img
          width="100%"
          src={toAbsoluteUrl(backgroundUrl)}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};
export default Card;
