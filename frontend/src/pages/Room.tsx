import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";

import { mdiChevronLeft } from "@mdi/js";

import { ROOM } from "../queries/rooms";
import Query from "../components/Query";
import { toAbsoluteUrl } from "../utils";
import { Query as QueryType, RoomEntity, UploadFileEntity } from "../types";
import { useLang } from "../context/lang";
import FadeIn from "react-fade-in";

export default () => {
  let { roomId } = useParams();

  return (
    <Query query={ROOM} variables={{ roomId }}>
      {({ data: { room } }: { data: QueryType }) =>
        room?.data ? <RoomCard room={room.data} /> : null
      }
    </Query>
  );
};

const RoomCard = ({ room }: { room: RoomEntity }) => {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <FadeIn>
      <div
        className="bg-black text-white top-0 w-12 left-0 cursor-pointer inline-block"
        onClick={() => navigate(-1)}
      >
        {" "}
        <Icon size={2} color="white" path={mdiChevronLeft} />
      </div>
      <div className="flex-col lg:flex-row items-center flex justify-center">
        {room.attributes?.Photos?.data.map(
          (photo: UploadFileEntity, index: number) => (
            <img
              className="max-w-sm lg:max-w-2xl m-8"
              src={toAbsoluteUrl(photo.attributes?.url)}
            />
          )
        )}
      </div>
    </FadeIn>
  );
};
