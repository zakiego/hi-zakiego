import { Box, Image } from "@chakra-ui/react";

import config from "~/config";

const Avatar = () => {
  const circlePadding = 3;
  return (
    <Box border="1px" borderColor="#F7FAFC" rounded="full" p={circlePadding}>
      <Box border="1px" borderColor="#F7FAFC" rounded="full" p={circlePadding}>
        <Box
          border="1px"
          borderColor="#EDF2F7"
          rounded="full"
          p={circlePadding}
        >
          <Image
            boxSize="100px"
            src="https://zakiego.my.id/avatar.jpg"
            rounded="full"
            alt={config.name}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Avatar;
