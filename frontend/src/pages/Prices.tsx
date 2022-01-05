import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

import { mdiPlus, mdiMinus } from "@mdi/js";
import { toAbsoluteUrl } from "../utils";

import { useLang } from "../context/lang";
import Query from "../components/Query";
import { PRICES_QUERY, PRICES_TYPES_QUERY } from "../queries/prices";
import { Query as QueryType, PriceTypeEntity, PriceEntity } from "../types";
import FadeIn from "react-fade-in";

enum TextPosition {
  BottomVertical = "left-[8.5rem] bottom-0 origin-bottom-left rotate-[-90deg]",
  Top = "top-0",
  Bottom = "bottom-0",
}

const TEXT_POSITIONS = [
  TextPosition.BottomVertical,
  TextPosition.Top,
  TextPosition.Bottom,
];

const BACKGROUNDS = [
  {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(251, 119, 45, 0.74) 54.69%, #F15A24 100%)",
    mixBlendMode: "multiply",
    opacity: "0.9",
    transform: "rotate(-90deg)",
  },
  {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(55, 231, 218, 0.83) 47.92%, #00A99D 100%)",
    mixBlendMode: "multiply",
    opacity: "0.9",
  },
  {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(222, 172, 231, 0.400781) 34.38%, rgba(182, 76, 199, 0.81) 70.83%, rgba(122, 39, 136, 0.81) 100%)",
    mixBlendMode: "multiply",
    opacity: "0.9",
    transform: "rotate(180deg)",
  },
];

export default () => (
  <Query query={PRICES_TYPES_QUERY}>
    {({ data: { priceTypes } }: { data: QueryType }) => (
      <PricesTypes priceTypes={priceTypes?.data || []} />
    )}
  </Query>
);

const PricesTypes = ({
  priceTypes,
}: {
  priceTypes: Array<PriceTypeEntity>;
}) => {
  const [currentPriceTypeId, setCurrentPriceTypeId] =
    React.useState<number>(-1);

  const handleClick = (id: number) => {
    if (id == currentPriceTypeId) {
      setCurrentPriceTypeId(-1);
    } else {
      setCurrentPriceTypeId(id);

      setTimeout(() => {
        document
          .getElementById(`prices_${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }
  };

  return (
    <div className="my-10">
      <FadeIn className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {priceTypes?.map((priceType: PriceTypeEntity, index: number) => (
          <PriceTypeCard
            key={index}
            priceType={priceType}
            index={index}
            onClick={handleClick}
            isClicked={"" + currentPriceTypeId == priceType.id}
            currentPriceTypeId={currentPriceTypeId}
          />
        ))}
      </FadeIn>
      <Prices
        className="hidden lg:grid"
        currentPriceTypeId={currentPriceTypeId}
      />
    </div>
  );
};

const PriceTypeCard = ({
  priceType,
  onClick,
  index,
  isClicked,
  currentPriceTypeId,
}: {
  priceType: PriceTypeEntity;
  onClick: Function;
  index: number;
  isClicked: boolean;
  currentPriceTypeId?: number;
}) => {
  const backgroundUrl = priceType.attributes?.Image?.data?.attributes?.url;
  const [loaded, setLoaded] = React.useState<boolean>(
    backgroundUrl ? false : true
  );
  const textPosition = TEXT_POSITIONS[index % TEXT_POSITIONS.length];

  return (
    <div id={`prices_${priceType.id}`}>
      <div
        onClick={(e) => onClick(priceType.id)}
        className="w-full cursor-pointer bg-contain relative group"
        style={loaded ? {} : { display: "none" }}
      >
        <div className="absolute w-full h-full">
          <div
            className={`p-12 font-bold text-4xl lg:text-2xl text-gray-900 absolute ${textPosition}`}
          >
            {priceType.attributes?.Name}
          </div>
          <div className="bg-black rounded-full inline-block m-8 absolute bottom-0 right-0">
            <Icon
              size={1}
              color="white"
              path={isClicked ? mdiMinus : mdiPlus}
            />
          </div>
        </div>
        <div
          className={`absolute w-full h-full ${
            isClicked ? "" : "hidden"
          } group-hover:block`}
          style={BACKGROUNDS[index % BACKGROUNDS.length] as CSSProperties}
        ></div>
        {backgroundUrl && (
          <img
            width="100%"
            src={toAbsoluteUrl(backgroundUrl)}
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
      {isClicked && (
        <Prices className="lg:hidden" currentPriceTypeId={currentPriceTypeId} />
      )}
    </div>
  );
};

const Prices = ({
  className,
  currentPriceTypeId,
}: {
  className?: string;
  currentPriceTypeId?: number;
}) =>
  currentPriceTypeId !== undefined ? (
    <Query query={PRICES_QUERY} variables={{ priceTypeId: currentPriceTypeId }}>
      {({ data: { prices } }: { data: QueryType }) => (
        <FadeIn
          className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mt-8`}
        >
          {prices?.data.map((price: PriceEntity, index: number) => (
            <PriceCard key={index} price={price} />
          ))}
        </FadeIn>
      )}
    </Query>
  ) : null;

const PriceCard = ({ price }: { price: PriceEntity }) => {
  const { t } = useLang();
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full cursor-pointer group bg-contain relative disable-tap-highlight"
      onClick={() =>
        setTimeout(() => {
          //nice press effect
          navigate("/contacts");
        }, 30)
      }
    >
      <div className="text-center lg:text-left bg-black hover-bg-orange-gradient p-6 lg:p-10">
        <span className="hidden lg:block font-bold text-xl text-white group-hover:text-black">
          {price.attributes?.Name}
        </span>
        <span className="block lg:hidden font-bold text-2xl text-white group-hover:text-black">
          {price.attributes?.Name}/{price.attributes?.Price}
        </span>
        <div className="hidden lg:flex justify-between mt-4 mb-2">
          <span className="font-bold text-xl text-white group-hover:text-black">
            {price.attributes?.Price}
          </span>
          <div className="px-5 py-2 bg-white group-hover:bg-black group-hover:text-white text-lg text-bold">
            {t("Купить")}
          </div>
        </div>
        <span className="text-xl lg:text-lg text-white group-hover:text-black">
          {price.attributes?.Description}
        </span>
      </div>
    </div>
  );
};
