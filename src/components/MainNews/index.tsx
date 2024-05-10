import { Box, Grid, GridCol, Group, Text } from "@mantine/core";
import React from "react";
import Authentication from "@/components/MainNews/Authentication";
import TrackPlayer from "@/components/TrackPlayer";
import ListTrack from "@/components/ListTrack";
import { sendRequestJS } from "@/utils/api";
import Pagination from "@/components/Pagination";

export const tracks: {
  data: ITrackTop[];
  error?: string | string[];
  message: string;
  statusCode: number | string;
} = {
  data: [
    {
      _id: "1",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-1.png",
      trackUrl: "/assets/audio/ayden.mp3",
      duration: 342,
      uploader: {
        _id: "11",
        name: "J.K. Rowling",
      },
    },
    {
      _id: "2",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-2.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 340,
      uploader: {
        _id: "22",
        name: "Jimmy Phong",
      },
    },
    {
      _id: "3",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-3.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 300,
      uploader: {
        _id: "33",
        name: "Alex Nguyen",
      },
    },
    {
      _id: "4",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-4.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 250,
      uploader: {
        _id: "44",
        name: "Alex Nguyen",
      },
    },
    {
      _id: "5",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-5.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "55",
        name: "Tony Thai",
      },
    },
    {
      _id: "6",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-6.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "66",
        name: "Tony Thai",
      },
    },
    {
      _id: "7",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-7.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "77",
        name: "Tony Thai",
      },
    },
    {
      _id: "8",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-8.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "88",
        name: "Tony Thai",
      },
    },
    {
      _id: "9",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-9.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "99",
        name: "Tony Thai",
      },
    },
    {
      _id: "10",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-10.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "1010",
        name: "Tony Thai",
      },
    },
    {
      _id: "11",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-11.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "1111",
        name: "Tony Thai",
      },
    },
    {
      _id: "12",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-12.png",
      trackUrl: "/assets/audio/ay.mp3",
      duration: 342,
      uploader: {
        _id: "1212",
        name: "Tony Thai",
      },
    },
  ],
  message: "Fetch tracks successfully",
  statusCode: 200,
};

const MainNews = async () => {
  // failled to deploy vercel
  // const tracks = await sendRequestJS<IBackendRes<ITrackTop[]>>({
  //   url: `${process.env.NEXT_PUBLIC_URL}/api`,
  //   method: "POST",
  // });
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
