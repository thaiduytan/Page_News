import { Box, Grid, GridCol, Group, Text } from "@mantine/core";
import React from "react";
import Authentication from "@/components/MainNews/Authentication";
import TrackPlayer from "@/components/TrackPlayer";
import ListTrack from "@/components/ListTrack";
import { sendRequestJS } from "@/utils/api";
import Pagination from "@/components/Pagination";

const MainNews = async () => {
  const tracks = await sendRequestJS<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:3000/api",
  });
  return (
    <Grid
      gutter={{
        base: 5,
        md: 12,
      }}
      px={50}
    >
      <GridCol span={12}>
        <Authentication />
      </GridCol>
      <GridCol span={12}>
        <TrackPlayer />
      </GridCol>
      <GridCol span={12}>
        {tracks.statusCode === 200 ? (
          <ListTrack data={tracks.data ?? []} />
        ) : (
          <Box>
            <Text c={"gray"}>{tracks.error}</Text>
          </Box>
        )}
      </GridCol>
      <GridCol span={12}>
        <Group justify="center" mb={5} pt={10}>
          <Pagination />
        </Group>
      </GridCol>
    </Grid>
  );
};

export default MainNews;
