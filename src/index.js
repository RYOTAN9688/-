import { react } from '@babel/types';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import * as actions from './actions'
import calculator from './reducers/calculator';
import CalculatorContainer from './containers/CalculatorContainer'

const store = createStore(reducer);//データの状態を表すstoreを作成
//reducerによって変更された状態(store)をcontainerに渡す動作が行われている
render(
    <Provider store={store}>
        <CalculatorContainer actions={actions} calculator={calculator} />,
    </Provider>,
    document.getElementById('root')
)