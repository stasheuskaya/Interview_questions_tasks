import { useEffect, useState } from "react";
import React from "react";
import { fetchRandomData } from '../api/api';
import BitcoinItem from "./bitcoin_rate_item";
import './bitcoin_rate.css';
// import CurrencyItem from "./currency_item";

export default function BitcoinRate(props) {
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
