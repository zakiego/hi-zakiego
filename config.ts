import { SocialList } from "./components/Icon/type";

const config: Config = {
  name: "M. Zakiyuddin Munziri",
  bio: "Generalist. Software engineer. Social science student. Warga Kalimantan Selatan, Indonesia.",
  links: [
    {
      type: "LinkedIn",
      display: "M. Zakiyuddin Munziri",
      url: "https://www.linkedin.com/in/mzakiyuddin",
    },
    {
      type: "Github",
      display: "M. Zakiyuddin Munziri",
      url: "https://twitter.com/zakiego",
    },
    {
      type: "Medium",
      display: "M. Zakiyuddin Munziri",
      url: "https://mzakiyuddin.medium.com/",
    },
    {
      type: "Twitter",
      display: "@prasastipagi",
      url: "https://twitter.com/prasastipagi",
    },
    {
      type: "Twitter",
      display: "@zakiego",
      url: "https://twitter.com/zakiego",
    },
    {
      type: "YouTube",
      display: "Zakiego",
      url: "https://www.youtube.com/channel/UCta8ym2O2mWFsgnzzIC7TUg",
    },
    {
      type: "Spotify",
      display: "Prasasti Pagi",
      url: "https://open.spotify.com/show/4H3wqTA5e4YGCbcBF4RX7i",
    },
  ],
};

export default config;

interface Config {
  name: string;
  bio: string;
  links: {
    type: SocialList;
    url: string;
    display: string;
  }[];
}
