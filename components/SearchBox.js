import { Flex, Icon, IconButton, Input, Spacer, Text } from "@chakra-ui/react";
import { BsSliders,BsSlash } from "react-icons/bs";
export default function SearchBox() {
  return (
    <Flex alignItems="center" justify="center" height="9" w="80%" borderRadius={4} bg="#f0f0f0">
      <Flex justifyContent="center" alignItems="center" direction="row">
          <Flex alignItems="center" ml={1} mr={2} justifyContent="center" width={20} bg="white" borderRadius={4}>
            <Icon as={BsSliders} w={4} mr={2} color="#919191"/>
            <Text fontSize="1.em" color="#919191">
                Filters
            </Text>
          </Flex>
      </Flex>
      <Spacer/>
      <Flex>
          <Input variant="unstyled" placeholder="Search knowledge" _placeholder={{color:'black'}}/>
      </Flex>
      <Spacer/>
      <Flex mr={2}>
         <IconButton size="xs" bg="white" icon={<Icon as={BsSlash} color="black" size="lg"/>}/>
      </Flex>
    </Flex>
  );
}
