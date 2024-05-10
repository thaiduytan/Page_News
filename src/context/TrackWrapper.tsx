"use client";
import { tracks } from "@/components/MainNews";
import React from "react";

export const TrackContext = React.createContext<ITrackContext | null>(null);

const TrackContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = React.useState<IPlayTrack>({
    ...tracks.data[0],
    isPlaying: true,
  });
  return (
    <TrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContextProvider;
