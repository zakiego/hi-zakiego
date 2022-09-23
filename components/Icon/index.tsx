import { Image } from "@chakra-ui/react";

import Github from "./Github.svg";
import LinkedIn from "./LinkedIn.svg";
import Medium from "./Medium.svg";
import Spotify from "./Spotify.svg";
import Twitter from "./Twitter.svg";
import { SocialList } from "./type";
import YouTube from "./YouTube.svg";

const SocialIcon = ({ type }: { type: SocialList }) => {
  const icons: Icons = [
    {
      name: "LinkedIn",
      icon: LinkedIn,
    },
    {
      name: "Twitter",
      icon: Twitter,
    },
    {
      name: "Github",
      icon: Github,
    },
    {
      name: "Spotify",
      icon: Spotify,
    },
    {
      name: "Medium",
      icon: Medium,
    },
    {
      name: "YouTube",
      icon: YouTube,
    },
  ];
  const icon = icons.find((icon) => icon.name === type);

  return <Image boxSize="16px" src={icon?.icon.src} alt={type} />;
};

export default SocialIcon;

type Icons = {
  name: SocialList;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}[];
