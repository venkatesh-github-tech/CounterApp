import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from './actions';
import { decrementAction } from './actions';
const App = (props) => {
    //console.log(props);
    return (
        <div>
            <button onClick={props.incrementAction}>Increment</button>
            <button onClick={props.decrementAction}>Decrement</button>
            Counter:<span> {props.counter}</span>
        </div>
    )

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter
    };
}
export default connect(mapStateToProps, { incrementAction, decrementAction })(App);