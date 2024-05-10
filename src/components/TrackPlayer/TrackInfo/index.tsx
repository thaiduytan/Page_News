"use client"
import { TrackContext } from "@/context/TrackWrapper";
import { poppins } from "@/theme/fonts";
import { Group, Image, rem, Stack, Text } from "@mantine/core";
import React from "react";

const TrackInfo = () => {
  const { currentTrack } = React.useContext(TrackContext) as ITrackContext;
  return (
    <Group gap={15} wrap="nowrap">
      <Image
        src={currentTrack?.imgUrl}
        alt="track"
        w={rem(64)}
        h={rem(64)}
      />
      <Stack gap={5}>
        <Text
          className={poppins.className}
          fz={rem(16)}
          fw={500}
          c={"#fff"}
          lineClamp={1}
        >
          {currentTrack?.title}
        </Text>
        <Text
          className={poppins.className}
          fz={rem(16)}
          fw={400}
          c={"#fff"}
          lineClamp={1}
          opacity={0.5}
        >
          {currentTrack?.uploader?.name}
        </Text>
      </Stack>
    </Group>
  );
};

export default TrackInfo;
