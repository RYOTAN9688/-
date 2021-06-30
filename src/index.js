import { react } from '@babel/types';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalcularContainer from './containers/CalcularContainer'
import reducer from './reducers';

const store = createStore(reducer);//データの状態を表すstoreを作成
//reducerによって変更された状態(store)をcontainerに渡す動作が行われている
render(
    <Provider store={store}>
        <CalcularContainer />,
    </Provider>,
    document.getElementById('root')
)