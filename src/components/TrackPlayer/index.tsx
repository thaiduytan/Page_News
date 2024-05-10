import { Grid, GridCol, rem } from "@mantine/core";
import React from "react";
import TrackInfo from "@/components/TrackPlayer/TrackInfo";
import TrackMain from "@/components/TrackPlayer/TrackMain";

const TrackPlayer = () => {
  return (
    <Grid
      gutter={{ base: 5, md: 10 }}
      mt={{
        base: 20,
        sm: 40,
      }}
      mb={20}
      px={12}
      py={10}
      style={{
        borderRadius: rem(15),
        background: `linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(197, 197, 197, 0.20) 100%)`,
        backdropFilter: "blur(4px)",
      }}
      align="center"
    >
      <GridCol
        span={{
          base: 12,
          sm: 4,
        }}
      >
        <TrackInfo />
      </GridCol>
      <GridCol
        span={{
          base: 12,
          sm: 6,
        }}
      >
        <TrackMain />
      </GridCol>
    </Grid>
  );
};

export default TrackPlayer;
