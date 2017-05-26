import { ajax } from 'utils'

export const UserList = ajax.fetchJSONByPost('/api/demo')
export const houseDetail = ajax.fetchJSONByPost('/house/detail')
