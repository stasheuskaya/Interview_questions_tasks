import { useEffect, useState } from "react";
import React from "react";
import { fetchRandomData } from '../API_info/API_info';
import BitcoinItem from "./bitcoin_API_item";
import './bitcoin.css';
// import CurrencyItem from "./currency_item";

export default function BitcoinPrice(props) {
    const [bitcoinData, setBitcoinData] = useState(null);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        fetchRandomData().then(randomData => {
            setBitcoinData(randomData)
        });
    }, []);

    return (
        <div className="bitcoin">
            <div>
                
                <button onClick={ () => {
                    setHidden(!hidden)
                }}>
                    Fetch Bitcoin currency rate
                </button>
                <div>
                    {!hidden && bitcoinData && <BitcoinItem 
                        chartName = {bitcoinData.chartName}
                        disclaimer = {bitcoinData.disclaimer}
                        time = {bitcoinData.time}
                        description = {bitcoinData.bpi.USD.description}
                        rate = {bitcoinData.bpi.USD.rate}
                    />}
                </div>
            </div>
        </div>
    )
}
