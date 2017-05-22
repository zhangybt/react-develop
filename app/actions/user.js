import {
  createAction,
} from 'redux-actions'
import {
  user,
} from 'api'
import {
  createAjaxAction,
} from 'utils'


export const requestUserList = createAction('request user list');
export const recevieUserList = createAction('receive user list');
export const fetchHouseCheckList = createAjaxAction(
	user.houseCheckList,
    requestUserList,
    recevieUserList
);

export const updateHouseCheckListQuery = createAction('update houseCheck search query', payload => payload);
export const resetHouseCheckListQuery = createAction('reset houseCheck search query');

export const requestUserDetail = createAction('request house detail')
export const recevieUserDetail = createAction('receive house detail')
export const fetchHouseDetail = createAjaxAction(house.houseDetail, requestUserDetail, recevieUserDetail)
