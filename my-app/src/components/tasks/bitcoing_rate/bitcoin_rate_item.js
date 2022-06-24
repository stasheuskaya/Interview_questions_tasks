export default function BitcoinItem (props) {
    return (
        <div className="bitcoinItem">
            <h2>
                {props.chartName} daily rate
            </h2>
            <div>
                <h2>Disclaimer</h2>
                {props.disclaimer}
            </div>
            <div>
                {props.data}
            </div>
            <div>
                <h2>Date</h2>
                {props.time.updated}
            </div>
            <div>
                <h2>Currency</h2>
                {props.description}
            </div>
            <div>
                <h2>BPI USD rate:</h2>
                {props.rate}
            </div>
        </div>
    )
}
