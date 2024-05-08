const listTracks: {
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
      duration: 342,
    },
    {
      _id: "2",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-2.png",
      duration: 340,
    },
    {
      _id: "3",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-3.png",
      duration: 300,
    },
    {
      _id: "4",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-4.png",
      duration: 342,
    },
    {
      _id: "5",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-5.png",
      duration: 342,
    },
    {
      _id: "6",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-6.png",
      duration: 342,
    },
    {
      _id: "7",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-7.png",
      duration: 342,
    },
    {
      _id: "8",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-8.png",
      duration: 342,
    },
    {
      _id: "9",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-9.png",
      duration: 342,
    },
    {
      _id: "10",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-10.png",
      duration: 342,
    },
    {
      _id: "11",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-11.png",
      duration: 342,
    },
    {
      _id: "12",
      title: "Dorem ipsum dolor sit amet",
      description: "Thanks for everyone viewing and downloading.",
      imgUrl: "/assets/tracks/track-12.png",
      duration: 342,
    },
  ],
  message: "Fetch tracks successfully",
  statusCode: 200,
};

export async function GET(_request: Request, _response: Response) {
  return Response.json(listTracks);
}
