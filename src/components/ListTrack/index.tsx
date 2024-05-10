import React from "react";
import TrackItem from "./TrackItem";
import { Grid } from "@mantine/core";

const ListTrack = ({ data }: { data: ITrackTop[] | undefined }) => {
  return (
    <Grid
      gutter={{ base: 30, md: 25 }}
      style={{
        // mixBlendMode: "lighten",
        overflow: "hidden",
      }}
      justify="center"
    >
      {data &&
        data?.map((item, i) => (
          <TrackItem key={`${item._id}-${i}`} {...item} />
        ))}
    </Grid>
  );
};

export default ListTrack;
