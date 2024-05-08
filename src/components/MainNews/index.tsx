import { Box, Grid, GridCol, Group, Text } from "@mantine/core";
import React from "react";
import Authentication from "@/components/MainNews/Authentication";
import TrackPlayer from "@/components/TrackPlayer";
import ListTrack from "@/components/ListTrack";
import { sendRequestJS } from "@/utils/api";
import Pagination from "@/components/Pagination";

const MainNews = async () => {
  const tracks = await sendRequestJS<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_URL}/api`,
    method: "POST",
  });
  // const tracks: {
  //   data: ITrackTop[];
  //   error?: string | string[];
  //   message: string;
  //   statusCode: number | string;
  // } = {
  //   data: [
  //     {
  //       _id: "1",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-1.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "2",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-2.png",
  //       duration: 340,
  //     },
  //     {
  //       _id: "3",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-3.png",
  //       duration: 300,
  //     },
  //     {
  //       _id: "4",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-4.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "5",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-5.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "6",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-6.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "7",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-7.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "8",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-8.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "9",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-9.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "10",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-10.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "11",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-11.png",
  //       duration: 342,
  //     },
  //     {
  //       _id: "12",
  //       title: "Dorem ipsum dolor sit amet",
  //       description: "Thanks for everyone viewing and downloading.",
  //       imgUrl: "/assets/tracks/track-12.png",
  //       duration: 342,
  //     },
  //   ],
  //   message: "Fetch tracks successfully",
  //   statusCode: 200,
  // };

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
