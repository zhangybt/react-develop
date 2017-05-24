import { ajax } from '../utils'

export const houseCheckList = ajax.fetchJSONByPost('/user/userList')
export const houseDetail = ajax.fetchJSONByPost('/user/userList')
