import React from 'react';
import { Component } from 'react';
import render from 'react-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../actions'
import NumBtn from '../compornents/NumBtn';
import PlusBtn from '../compornents/PlusBtn';
import Result from '../compornents/Result';





const CalculatorContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state)
    return (
        <div>
            <div>
                <NumBtn n={1} onClick={dispatch(actions.onNumClick(1))} />
                <NumBtn n={2} onClick={dispatch(actions.onNumClick(2))} />
                <NumBtn n={3} onClick={dispatch(actions.onNumClick(3))} />
            </div>
            <div>
                <NumBtn n={4} onClick={dispatch(actions.onNumClick(4))} />
                <NumBtn n={5} onClick={dispatch(actions.onNumClick(5))} />
                <NumBtn n={6} onClick={dispatch(actions.onNumClick(6))} />

            </div>
            <div>
                <NumBtn n={4} onClick={dispatch(actions.onNumClick(7))} />
                <NumBtn n={5} onClick={dispatch(actions.onNumClick(8))} />
                <NumBtn n={6} onClick={dispatch(actions.onNumClick(9))} />

            </div>
            <div>
                <NumBtn n={0} onClick={dispatch(actions.onNumClick(0))} />
                <PlusBtn onClick={dispatch(actions.onPlusClick())} />
            </div>

        </div>
    )
}

// const mapState = (state, ownProps) => ({
//     calculator: state.calculator,
// });

// const mapDispatch = (dispath) => {
//     return {
//         actions: bindActionCreators(actions, dispath),
//     };
// }
export default CalculatorContainer;