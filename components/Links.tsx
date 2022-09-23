import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Spacer, Text, VStack } from "@chakra-ui/react";

import config from "~/config";

import SocialIcon from "./Icon";

const Links = () => {
  return (
    <VStack w="full" pt="4" spacing="0">
      {config.links.map((social) => {
        return (
          <VStack
            as="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            w="full"
            key={social.display + social.url}
            borderBottom="1px"
            borderBottomColor="gray.100"
            py="2"
          >
            <VStack
              w="full"
              rounded="md"
              _hover={{
                bg: "gray.50",
              }}
              py="2"
            >
              <HStack w="full" maxWidth="2xs">
                <SocialIcon type={social.type} />
                <Spacer />
                <Text
                  fontWeight="semibold"
                  fontSize="xs"
                  color="blackAlpha.900"
                >
                  {social.display}
                </Text>
                <Spacer />
                <ChevronRightIcon color="gray.300" />
              </HStack>
            </VStack>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default Links;
