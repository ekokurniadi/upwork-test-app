import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;
  return (
    <NextLink href={href} passHref>
      <a>
        <Flex
          align="center"
          p="2"
          mx="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#e3e7eb",
            color: "#717477",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "#6c6d71",
                fontWeight:'semibold'
              }}
              color="#717477"
              as={icon}
            />
          )}
          <Text fontSize="1.0rem" color="#676869" _groupHover={{ color:'#434549',fontSize:'md',fontWeight:'semibold'}}>{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
} 