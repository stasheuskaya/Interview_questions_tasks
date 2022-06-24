import { useEffect, useState } from "react";
import React from "react";
// import { fetchRandomData } from '../API_info/API_info';
import axios from 'axios';
import BitcoinItem from "./bitcoin_API_item";
import './bitcoin.css';

export const fetchRandomData = () => {

    return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
       
        .then(({data}) => {
            console.log(data)
            return data;
        })

        .catch(err => {
            console.error(err)
        })
}


export default function BitcoinPrice(props) {
    const [bitcoinData, setBitcoinData] = useState([]);
    // const [hidden, setHidden] = useState();

    useEffect(() => {
        fetchRandomData().then(randomData => {
            console.log(randomData.disclaimer)
            setBitcoinData(randomData)
        });
    }, [])

    return (
        <div className="bitcoin">
            <div>
                
                <button onClick={ () => {
                    fetchRandomData();
                }}>
                    Fetch Bitcoin currency rate
                </button>
                <div>
                </div>
                <div>
                    <BitcoinItem 
                        chartName = {bitcoinData.chartName}
                        disclaimer = {bitcoinData.disclaimer}
                        // time = {bitcoinData.time}
                        // description = {bitcoinData.bpi.USD.description}
                        // rate = {bitcoinData.bpi.USD.rate}
                    />
                </div>
            </div>
        </div>
    )
}
