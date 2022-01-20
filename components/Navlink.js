import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function NavLink({ link, ...rest }) {
  const router = useRouter();
  const { label, icon, href } = link;
  return (
    <NextLink href={href} passHref>
      <a>
        <Flex
          bg={router.pathname == href ? "#e3e7eb" : "#f5f7f9"}
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
                fontWeight: "semibold",
              }}
              color={router.pathname == href ? "#6c6d6f" : "#717477"}
              as={icon}
            />
          )}
          <Text
            color="#676869"
            fontWeight={router.pathname == href ? "semibold" : "normal"}
            fontSize={router.pathname == href ? "md" : "1.0em"}
            _groupHover={{
              color: "#434549",
              fontSize: "md",
              fontWeight: "semibold",
            }}
          >
            {label}
          </Text>
        </Flex>
      </a>
    </NextLink>
  );
}
