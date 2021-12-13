import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data }  = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7fa8fe36camshc5460c9bfb45c69p120a25jsnb962f8e4ad4a'
        }
    })

    return data;
}