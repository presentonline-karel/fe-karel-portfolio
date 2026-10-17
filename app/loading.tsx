"use client";

import dynamic from "next/dynamic";
import loading from "@/public/loading.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pt-20">
      <Player
        autoplay
        loop
        src={loading}
        speed={2}
        className="w-24 h-24 / md:w-60 md:h-60"
      />
    </div>
  );
}