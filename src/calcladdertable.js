import React, {Component} from 'react';
import './styles/stockcalc.css';

class CalcLadderTable extends Component {

    constructor() {
        super();
        this.state = {
            userPrice: null,
            userShare: null,
            total: null,
            data: []
        }

        this.handleGetPriceCalc = this.handleGetPriceCalc.bind(this);
        this.getPriceFromUser = this.getPriceFromUser.bind(this);
        this.getShareFromUser = this.getShareFromUser.bind(this);
    }

    handleGetPriceCalc(e) {
        e.preventDefault();
        console.log("data length doc = " + this.state.data.length);
        // if(document.getElementsByClassName("spc-first-sec-table-body")[0].outerHTML !== undefined) {
        //     document.getElementsByClassName("spc-first-sec-table-body")[0].outerHTML = "";
        // }
        
        console.log("you have submitted: price=" + this.state.userPrice + " and share=" + this.state.userShare);
        // this.setState({
        //         data: [
        //             {
        //                 pandl: "+"+(((Number(this.state.userPrice)+(0.01))*this.state.userShare)-this.state.total).toFixed(2), 
        //                 price: Number(this.state.userPrice) + 0.01, 
        //                 value: (Number(this.state.userPrice)+0.01)*this.state.userShare
        //             }, 
        //             {
        //                 pandl: 0.00, 
        //                 price: this.state.userPrice, 
        //                 value: this.state.total
        //             },
        //             {
        //                 pandl: (((this.state.userPrice-0.01)*this.state.userShare)-this.state.total).toFixed(2), 
        //                 price: this.state.userPrice - 0.01, 
        //                 value: (this.state.userPrice-0.01)*this.state.userShare
        //             }
        //         ]     
        // })
        //row size must be even number
        const rowSize = 100; //actual row will be 11 since i<12
        const evenPriceRow = (rowSize/2);
        // const halfRowSize = (evenPriceRow-1);
        
        this.setState({
            data: []
        })

        for(let i=1; i<rowSize; i++) {
            if(i < evenPriceRow) { //positive profits, 1st half
                const total = Number(this.state.userPrice) * this.state.userShare;
                const iprice = Number(this.state.userPrice)+((evenPriceRow-i)/100);
                const ivalue = (iprice * this.state.userShare).toFixed(2);
                const ipandl = (ivalue - total).toFixed(2);
                
                this.setState(prevState => {
                    return {
                        data: [
                            ...prevState.data,
                            {
                                pandl: ipandl, 
                                price: iprice, 
                                value: ivalue
                            }
                        ]
                    }
                })
            } else if(i === evenPriceRow) { //even or avg price, 0 profit, just one row
                this.setState(prevState => {
                    return {
                        data: [
                            ...prevState.data,
                            {
                                pandl: 0.00, 
                                price: this.state.userPrice, 
                                value: this.state.total
                            }
                        ]
                    }
                })
            } else { //negative profits, 2nd half
                const total = Number(this.state.userPrice) * this.state.userShare;
                const iprice = Number(this.state.userPrice)-((i-evenPriceRow)/100); //ex: i=7 - evenprice=6 = 1 /100=0.01
                const ivalue = (iprice * this.state.userShare).toFixed(2);
                const ipandl = (ivalue - total).toFixed(2);
                this.setState(prevState => {
                    return {
                        data: [
                            ...prevState.data,
                            {
                                pandl: ipandl, 
                                price: iprice, 
                                value: ivalue
                            }
                        ]
                    }
                })
            }
        }

    }

    getPriceFromUser(e) {
        console.log("users price: " + this.state.userPrice)
        this.setState({
            userPrice: e.target.value,
            total: this.state.userShare * e.target.value
        })
    }

    getShareFromUser(e) {
        console.log("users shares: " + this.state.userShare)
        this.setState({
            userShare: e.target.value,
            total: this.state.userPrice * e.target.value
        })
    }

    render() {
        // const data = [
        //     {pandl: 4.55, price: 12.45, value: 293.5}, 
        //     {pandl: 4.45, price: 12.44, value: 283.5},
        //     {pandl: 4.35, price: 12.43, value: 273.5}
        // ]
        const data = this.state.data;

        return(
            <div className='spc-price-calc-body'>
                <div className='spc-price-calc-container'>
                    <form onSubmit={this.handleGetPriceCalc}>
                        <div id='spc-entersharesprice-div'>
                            <div id='spc-enterprice-div'>
                                <br></br>
                                <input 
                                    type="number" step="0.001" 
                                    className='spc-all-inputs' id="spc-enterprice-id" 
                                    placeholder="PRICE" name="enterprice"
                                    onChange={this.getPriceFromUser}
                                    ></input>
                                <br></br>
                            </div>
                            <div id='spc-entershares-div'>
                                <br></br>
                                <input 
                                    type="number" className='spc-all-inputs' 
                                    id="spc-entershares-id" placeholder="SHARES" 
                                    name="entershares" onChange={this.getShareFromUser}
                                ></input>
                                <br></br>
                            </div>
                        </div>
                        <input 
                            type="submit" value="get" 
                            className='spc-button' onClick={this.handleGetPriceCalc}
                        ></input>
                    </form>
                </div>
                <div className='spc-ui-sharesprice-column'>
                    <span className='spc-ui-stats'>Avg Price:</span> 
                    <span className='spc-all-result'>12.45</span>
                    &nbsp; &nbsp;
                    <span className='spc-ui-stats'>Shares:</span> 
                    <span className='spc-all-result'>50</span>
                </div>
                <div className='spc-div-3-bottomtable'>
                    <table>
                        <tr>
                            <th className="spc-first-sec-table-header">P&L</th>
                            <th className="spc-first-sec-table-header">PRICE</th>
                            <th className="spc-first-sec-table-header" id="spc-third-table-header">VALUE</th>
                        </tr>
                        {/* <td className="spc-first-sec-table-body">00</td>
                        <td className="spc-first-sec-table-body">00</td>
                        <td className="spc-first-sec-table-body" id="spc-third-table-col">00</td> */}
                        {data.map((x, y) => {
                            return (
                                <tr key={y}>
                                    {(Number(x.pandl) < 0) ? 
                                    <td id='pand1-alt-red' className="spc-first-sec-table-body">{x.pandl}</td> 
                                    : (Number(x.pandl) > 0) ?
                                    <td id='pand1-alt-grn' className="spc-first-sec-table-body">{x.pandl}</td>
                                    : 
                                    <td className="spc-first-sec-table-body">{x.pandl}</td>
                                    }
                                    <td className="spc-first-sec-table-body">{x.price}</td>
                                    <td className="spc-first-sec-table-body" id="spc-third-table-col">{x.value}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td className='spc-empty-table-body'></td>
                            <td className='spc-empty-table-body'></td>
                            <td className='spc-empty-third-table-body'></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default CalcLadderTable;
