import axios from 'axios'
import * as constants from './constants.js'


const changeLogin =() =>({
	type:constants.CHANGE_LOGIN,
	value:true
});
export const logout =() =>({
	type:constants.CHANGE_LOGOUT,
	value:false
});
export const login=(accout,password) =>{
	return (dispatch) =>{
		axios.get('/api/login.json?accout'+accout+'&password'+password).then((res) =>{
			const result = res.data;
			if(result){
				dispatch(changeLogin())
			}else{
				alert('登录失败')
			}
		})
	}
}