//別名import
//モジュール全体なら * as name
//モジュール一部なら A as B

import * as actionTypes from '../utils/actionTypes'

export const onNumclick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,

});

export const onPlusClick = () => ({
    type: actionTypes.PLUS,
})