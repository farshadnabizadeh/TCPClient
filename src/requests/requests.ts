import axios from 'axios';

export const postData = async (host: any, body: any) => {
    const url = host
    const data = body;

    try {
        const response = await axios.post(url, data);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};