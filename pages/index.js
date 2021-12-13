import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseURL, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => {
  
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3x1" fontWeight="bold">{title1}<br />{title2}</Text>
        <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{desc1}<br />{desc2}</Text>
        <Button fontSize="x1">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
};

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);

  return (
    <Box>
      <Banner 
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://image.shutterstock.com/image-illustration/luxurious-villa-swimming-pool-dusk-260nw-361283462.jpg"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
      <Banner 
      purpose="BUY A HOME"
      title1="Find, Buy &amp; Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://www.mckissock.com/wp-content/uploads/2016/11/GettyImages-1151832961-1024x684.jpg"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}