import { Container, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Avatar from "~/components/Avatar";
import Links from "~/components/Links";
import Profile from "~/components/Profile";
import config from "~/config";

export default function Index() {
  return (
    <>
      <NextSeo
        title={config.name}
        description={`Hi, I'm ${config.name}. I'm a ${config.bio}.`}
      />
      <Container maxWidth="xs" pt="10">
        <VStack>
          <Avatar />
          <Profile />
          <Links />
        </VStack>
      </Container>
    </>
  );
}
