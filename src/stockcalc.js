import React, {Component} from 'react';
import './styles/stockcalc.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSymbolName } from './actions/symbolNameAction';
import CalcLadderTable from './calcladdertable';

class StockPriceCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {stockQuotes: {}}

        //bind all the method, since we are using "this" inside the method
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let symbolName = this.props.symbolName;
        let {getSymbolNamee} = this.props;

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
                                value={symbolName} 
                                onChange={getSymbolNamee} placeholder="SYMBOL"
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

// retrieve all the states from store
const mapStateToProps = state => {
    const symbolName = state.symbolName;

    return {
        symbolName
    };
};

// retrieve actions and send them to the store
const mapDispatchToProps = dispatch => ({
    getSymbolNamee: (e) => dispatch(getSymbolName(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPriceCalculator);

