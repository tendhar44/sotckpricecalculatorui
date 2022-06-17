import React from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux';
import './styles/reduxtest.css';
// import allActions from './actions';
import { increment, decrement } from './actions/counterActions';
import { signIn, signOff } from './actions/isloggedAction';
import axios from 'axios'

// let counter = 0;
// let isLogged = false;
// let dispatch;
let api;


class ReduxTest extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {symbolName: ''}
        // this.state = {
        //     counter: 0, 
        //     isLogged: true
        // }

        //bind all the method, since we are using "this" inside the method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //install react-autobind, import autoBind from 'react-autobind'
        //autoBind(this, 'addTask', 'secondMethod', 'thirdMethod')
        //or this way (both way inside the constructor)
        //autobind(this);

        //import autobind from 'autobind-decorator'
        //above "class ReduxTest .."" -> @autobind
        //or
        //above each method -> @autobind
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
            // baseURL: `http://127.0.0.1:5000/stockinformation/${this.state.symbolName}`
            baseURL: 'http://127.0.0.1:5000/stockinformation/' + this.state.symbolName
        })
        api.get('').then(res => {
            console.log(res.data)
        })
        e.preventDefault();
    }

    render(){
        let counter = this.props.counter;
        let isLogged = this.props.isLogged;
        let {incrementtt} = this.props;
        let {decrementtt} = this.props;
        let {signInnn} = this.props;
        let {signOuttt} = this.props;
        // allActions.counterActions.increment();

        return (
            <div className="reduxTest">
                <h1>Counter {counter}</h1>
                <button onClick={incrementtt}>+</button>
                <button onClick={decrementtt}>-</button>
                <br />
                <br />
                <button onClick={signInnn}>login</button>
                <br />
                {
                    isLogged ? 
                    <div>
                        <h3>you are logged in!!</h3>
                        <br />
                        <button onClick={signOuttt}>log off</button>
                    </div> :
                    <div>
                        <h3>Not logged in..</h3>
                    </div>
                }
                <div className='spc-symbol-quotes-container'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="SYMBOL" value={this.state.symbolName}
                            onChange={this.handleChange}
                        ></input>
                        <br></br>
                        <input type="submit" value="get"></input>
                    </form>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     const counter = state.counter;
//     const isLogged = state.isLogged;
//     return {
//         counter,
//         isLogged
//     };
// };

const mapStateToProps = state => {
    const counter = state.counter;
    const isLogged = state.isLogged;

    return {
        counter,
        isLogged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementtt(){dispatch(increment())},
        decrementtt(){dispatch(decrement())},
        signInnn(){dispatch(signIn())},
        signOuttt(){dispatch(signOff())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
