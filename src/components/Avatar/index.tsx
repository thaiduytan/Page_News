import type { AvatarProps } from "@mantine/core";
import { Avatar as AvatarComponent } from "@mantine/core";
import React from "react";

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size, ...props }) => {
  return src ? (
    <AvatarComponent
      src={src}
      alt={alt}
      {...(size ? { size } : null)}
      {...props}
      radius="100%"
    />
  ) : (
    <AvatarComponent
      radius="100%"
      color="cyan"
      alt={alt}
      {...(size ? { size } : null)}
      {...props}
    >
      PN
    </AvatarComponent>
  );
};
