//別名import
//モジュール全体なら * as name
//モジュール一部なら A as B

import * as actionTypes from '../utils/actionTypes'//actionTypesをインポート

export const onNumClick = (number) => ({//数字ボタンを押したときに
    type: actionTypes.INPUT_NUMBER,//文字列としてオブジェクトに入っている
    number,

});

export const onPlusClick = () => ({
    type: actionTypes.PLUS,
})