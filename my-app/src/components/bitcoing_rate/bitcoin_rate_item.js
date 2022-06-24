export default function BitcoinItem (props) {
    return (
        <div className="bitcoinItem">
            <h1>
                {props.chartName} daily rate
            </h1>
            <div>
                <h1>Disclaimer</h1>
                {props.disclaimer}
            </div>
            <div>
                {props.data}
            </div>
            <div>
                <h1>Date</h1>
                {props.time.updated}
            </div>
            <div>
                <h1>Currency</h1>
                {props.description}
            </div>
            <div>
                <h1>BPI USD rate:</h1>
                {props.rate}
            </div>
        </div>
    )
}
