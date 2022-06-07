import React from 'react';
import './styles/stockcalc.css';

class StockPriceCalculator extends React.Component {
    render() {
        return (
            <div className='spc-main-body'>
                <div className='spc-div-1-topleft'>
                    <button className='spc-button'>
                        Reset
                    </button>
                    <ul className='spc-ui-1-topleft'>
                        <li className='spc-li-first-topleft'>
                            Average Price: 
                            <span className='spc-li-avgprice-result'>test1</span>
                        </li>
                        <li className='spc-li-second-topleft'>
                            Shares: 
                            <span className='spc-li-shares-result'>test2</span>
                        </li>
                    </ul>
                </div>
                <div className='spc-div-2-topright'>
                    <h2 className='spc-header-topright'>
                        Stock Price Calculator
                    </h2>
                    <div className='spc-entersharesprice-div'>
                        <div className='spc-enterprice-div'>
                            <label className='spc-enterprice-label'>Enter Price</label>
                            <br></br>
                            <input type="number" step="0.001" id="spc-enterprice-id" name="enterprice"></input>
                        </div>
                        <div className='spc-entershares-div'>
                            <label className='spc-entershares-label'>Enter Shares</label>
                            <br></br>
                            <input type="number" id="spc-entershares-id" name="entershares"></input>
                        </div>
                    </div>
                    <input type="submit" value="Add" className='spc-button'></input>
                </div>
                <div className='spc-div-3-bottomtable'>

                </div>
            </div>
        );
    }
}

export default StockPriceCalculator;
