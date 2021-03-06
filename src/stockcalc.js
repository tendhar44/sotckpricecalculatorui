import React, {Component} from 'react';
import './styles/stockcalc.css';
import axios from 'axios'
import CalcLadderTable from './calcladdertable'

class StockPriceCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {symbolName: '', stockQuotes: {}}

        //bind all the method, since we are using "this" inside the method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //can bind also by changing the function to arrow, funcEx = () => {}
        //that way you don't even need constructor and bind
    }

    handleChange(e) {
        this.setState({
            symbolName: e.target.value
        });
        console.log('state name: ' + this.state.symbolName);
    }

    handleSubmit(e) {
        console.log('symbol name submitted and = ' + this.state.symbolName);
        const api = axios.create({
            baseURL: 'http://127.0.0.1:5000/stockinformation/' + this.state.symbolName
        })
        api.get('').then(res => {
            this.setState({
                stockQuotes: res.data
            });
            console.log('updated stock quotes state = ' + this.state.stockQuotes)
        })
        e.preventDefault();
    }

    render() {
        /*{
            "assetType": "EQUITY", "assetMainType": "EQUITY", "cusip": "69608A108", 
            "assetSubType": "", "symbol": "PLTR", 
            "description": "Palantir Technologies Inc. Class A Common Stock", 
            "bidPrice": 8.21, "bidSize": 7200, "bidId": "K", "askPrice": 8.24, 
            "askSize": 1900, "askId": "P", "lastPrice": 8.21, "lastSize": 0, 
            "lastId": "K", "openPrice": 7.7, "highPrice": 8.33, "lowPrice": 7.69, 
            "bidTick": " ", "closePrice": 7.67, "netChange": 0.54, 
            "totalVolume": 45225918, "quoteTimeInLong": 1655501587400, 
            "tradeTimeInLong": 1655501574691, "mark": 8.24, "exchange": "n", 
            "exchangeName": "NYSE", "marginable": true, "shortable": true, 
            "volatility": 0.039, "digits": 2, "52WkHigh": 29.29, "52WkLow": 6.44, 
            "nAV": 0.0, "peRatio": 0.0, "divAmount": 0.0, "divYield": 0.0, 
            "divDate": "", "securityStatus": "Normal", 
            "regularMarketLastPrice": 8.24, "regularMarketLastSize": 56138, 
            "regularMarketNetChange": 0.57, 
            "regularMarketTradeTimeInLong": 1655496600002, 
            "netPercentChangeInDouble": 7.0404, "markChangeInDouble": 0.57, 
            "markPercentChangeInDouble": 7.4316, 
            "regularMarketPercentChangeInDouble": 7.4316, "delayed": false, 
            "realtimeEntitled": true
        }*/
            const symbolData = [
            {
                //name
                description: this.state.stockQuotes.description, 
                symbol: this.state.stockQuotes.symbol, 
                lastPrice: this.state.stockQuotes.lastPrice,
                assetType: this.state.stockQuotes.assetType,
                divDate: this.state.stockQuotes.divDate,
                //volume
                totalVolume: this.state.stockQuotes.totalVolume,
                peRatio: this.state.stockQuotes.peRatio,
                shortable: this.state.stockQuotes.shortable
            }
        ]

        return (
            <div className='spc-main-body'>
                <div className='spc-symbol-quotes-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='spc-symbol-input'>
                            <input 
                                type="text" className='spc-all-inputs' id="spc-entersymbol-id" 
                                value={this.state.symbolName} 
                                onChange={this.handleChange} placeholder="SYMBOL"
                            ></input>
                            <br></br>
                        </div>
                        <input className='spc-button' type="submit" value="get"></input>
                    </form>
                </div>
                <br></br>
                <div className='spc-quotes-column-higher'>
                    <div className='spc-quotes-column-lower-1'>
                        <div>
                            <span className='spc-ui-stats'>Name:</span> 
                            <span className='spc-all-result'>{symbolData[0].description}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>Symbol:</span>
                            <span className='spc-all-result'>{symbolData[0].symbol}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>Price:</span>
                            <span className='spc-all-result'>{symbolData[0].lastPrice}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>Asset Type:</span>
                            <span className='spc-all-result'>{symbolData[0].assetType}</span>
                        </div>
                    </div>
                    <div className='spc-quotes-column-lower-2'>
                        <div>
                            <span className='spc-ui-stats'>Dividend Date:</span>  
                            <span className='spc-all-result'>{symbolData[0].divDate}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>Volume:</span> 
                            <span className='spc-all-result'>{symbolData[0].totalVolume}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>P/E Ratio:</span> 
                            <span className='spc-all-result'>{symbolData[0].peRatio}</span>
                        </div>
                        <div>
                            <span className='spc-ui-stats'>Shortable(*tdameritrade):</span> 
                            <span className='spc-all-result'>{symbolData[0].shortable ? 'true' : 'false'}</span>
                        </div>
                    </div>
                </div>
                <br></br>
                <CalcLadderTable />
            </div>
        );
    }
}

export default StockPriceCalculator;
