import React from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";

import { ROOMS } from "../queries/rooms";
import Query from "../components/Query";
import {
  Query as QueryType,
  TrainingEntity,
  CoachEntity,
  TrainingEntityResponse,
  Room,
  RoomEntity,
} from "../types";
import FadeIn from "react-fade-in";

import { useLang } from "../context/lang";
import { toAbsoluteUrl } from "../utils";

export default () => {
  const { roomId } = useParams();

  return roomId ? (
    <Outlet />
  ) : (
    <>
      <Query query={ROOMS}>
        {({ data: { rooms } }: { data: QueryType }) => (
          <FadeIn className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {rooms?.data.map((room: RoomEntity, index: number) => (
              <RoomCard key={index} room={room} />
            ))}
          </FadeIn>
        )}
      </Query>
    </>
  );
};

const RoomCard = ({ room }: { room: RoomEntity }) => {
  const navigate = useNavigate();
  return (
    <div className="relative group cursor-pointer">
      <div
        onClick={() => navigate(`${room.id}`)}
        className="w-full pt-[100%] bg-no-repeat bg-cover bg-center border border-white border-solid"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            room.attributes?.Photos?.data[0]?.attributes?.url
          )}')`,
        }}
      ></div>
      <div
        className="w-full h-full absolute top-0 rotate-180 flex lg:hidden lg:group-hover:flex flex-col justify-around"
        style={{ background: room.attributes?.TimetableColorCss as string }}
        onClick={() => navigate(`${room.id}`)}
      >
        <div className="w-full h-full flex flex-col justify-around items-center rotate-180">
          <div className="text-3xl text-black font-bold">
            {room.attributes?.Name?.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
