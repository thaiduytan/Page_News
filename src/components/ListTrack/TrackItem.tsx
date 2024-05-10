"use client";
import { allerta, montserrat } from "@/theme/fonts";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  GridCol,
  Group,
  Image,
  Overlay,
  rem,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

import classes from "./Tracks.module.css";
import { useHover } from "@mantine/hooks";
import { convertSecondsToTime } from "@/helpers/common";
import { TrackContext } from "@/context/TrackWrapper";

const TrackItem: React.FC<ITrackTop> = (props) => {
  const { currentTrack, setCurrentTrack } = React.useContext(
    TrackContext
  ) as ITrackContext;
  const { hovered, ref } = useHover();
  const { title, description, imgUrl, duration } = props;

  const handleClickChangeTrack = (props: ITrackTop) => {
    if (props?._id !== currentTrack?._id) {
      setCurrentTrack({
        ...props,
        isPlaying: true,
      });
    }
  };
  return (
    <GridCol
      span={{
        base: 10,
        sm: 3,
      }}
    >
      <Card padding="xs" radius="lg" className={classes.trackItem}>
        <Box
          className="image"
          ref={ref}
          pos={"relative"}
          style={{
            cursor: "pointer",
          }}
        >
          <Image src={imgUrl} w={"100%"} alt={title} fit="cover" />
          {hovered ||
          (props?._id === currentTrack?._id &&
            currentTrack?.isPlaying === true) ? (
            <>
              <Overlay
                zIndex={10}
                inset={"0"}
                color="#000"
                backgroundOpacity={0.4}
                onClick={() => handleClickChangeTrack(props)}
              />
              <Image
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%)`,
                }}
                src={"/assets/icons/icon_play.png"}
                w={rem(33)}
                h={rem(33)}
                alt={title}
              />
            </>
          ) : null}
        </Box>
        <Flex direction={"column"} gap={10} px={10} py={10}>
          <Title
            order={3}
            className={montserrat.className}
            fw={700}
            fz={rem(14)}
            c={"gray.3"}
            tt={"capitalize"}
            lineClamp={1}
          >
            {title}
          </Title>
          <Text
            className={montserrat.className}
            fw={400}
            fz={rem(12)}
            c={"rgba(255, 255, 255, 0.60)"}
            tt={"capitalize"}
            lineClamp={2}
          >
            {description}
          </Text>
          <Group gap={20} justify="space-between">
            <Box className="timmer">
              <Text
                className={allerta.className}
                fz={rem(10)}
                fw={400}
                c={"#fff"}
              >
                00:00 / {convertSecondsToTime(duration!)}
              </Text>
            </Box>
            <Button
              variant="gradient"
              gradient={{ from: "#5EFCE8 0%", to: "#736EFE 100%", deg: 135 }}
              size="xs"
            >
              View Now
            </Button>
          </Group>
        </Flex>
      </Card>
    </GridCol>
  );
};

export default TrackItem;
