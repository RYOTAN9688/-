import * as actionTypes from '../utils/actionTypes'


//管理しておくべきデータの状態　intiakAppStateは初期状態
const initialAppstate = {
    inputValue: 0,//押されたボタンの値
    resultValue: 0,//合計値
    showingResult: false,//計算結果を表示するかどうか
}

const calculator = (state = initialAppstate, action) => {
    if (action.Type === actionTypes.INPUT_NUMBER) {
        return {
            ...state, //スプレッド構文を使用しオブジェクト内にstateを展開する
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
        }
    } else if (action.Type === actionTypes.PLUS) {
        return {
            ...state,
            inputValue: 0,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
        };
    } else {
        return state;
    }
};

export default calculator;