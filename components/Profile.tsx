import { Heading, Text, VStack } from "@chakra-ui/react";

import config from "~/config";

const Profile = () => {
  return (
    <VStack>
      <Heading pt="2" fontSize="md">
        {config.name}
      </Heading>
      <Text pt="2" fontSize="xs" textAlign="center" maxW="sm">
        {config.bio}
      </Text>
    </VStack>
  );
};

export default Profile;
