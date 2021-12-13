import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../components/Filter'

const Search = () => {
    const {filter, setFilter} = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex cursor="pointer" bg="gray.100" borderBottom="1px" borderColor="gray.200" p="2" fontWeight="black" fontSize="lg" justifyContent="center" alignItems="center" onClick={() => setFilter((prevFilter) => !prevFilter)}>
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {filter && <SearchFilter />}
        </Box>
    )
}