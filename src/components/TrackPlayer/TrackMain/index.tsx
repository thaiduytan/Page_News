"use client";
import React, { useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { Box, Group, rem } from "@mantine/core";

import "react-h5-audio-player/lib/styles.css";
import "./TrackMain.css";

import { IconDownload } from "@tabler/icons-react";
import { useHasMounted } from "@/utils/CustomHook";
import { TrackContext } from "@/context/TrackWrapper";

const TrackMain = () => {
  const { currentTrack } = React.useContext(TrackContext) as ITrackContext;
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  return (
    <Group h={"100%"} flex={1} align="center">
      <AudioPlayer
        customControlsSection={[
          RHAP_UI.ADDITIONAL_CONTROLS,
          RHAP_UI.MAIN_CONTROLS,
          <Box
            key={"download"}
            style={{ cursor: "pointer", flex: 0, marginLeft: rem(15) }}
          >
            <IconDownload size={"1.5rem"} color="#fff" />
          </Box>,
          //   RHAP_UI.VOLUME,
        ]}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
        ]}
        customVolumeControls={[]}
        src={currentTrack?.trackUrl}
        layout="stacked-reverse"
        onVolumeChange={(e) => console.log(e)}
      />
    </Group>
  );
};

export default TrackMain;
