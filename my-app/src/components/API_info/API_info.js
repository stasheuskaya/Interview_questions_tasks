import axios from 'axios';
// import {bitcoinData} from '../bitcoing_API/bitcoin_API';

export const fetchRandomData = () => {

    return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
       
        .then(({data}) => {
            console.log(data )
            return data;
        })

        .catch(err => {
            console.error(err)
        })
}

