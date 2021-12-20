import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
});

export default instance;