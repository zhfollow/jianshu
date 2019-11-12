import * as constants from './constants.js';
import { fromJS } from 'immutable'
import axios from 'axios';
export const searchFocus =() =>({
	type:constants.SEARCH_FOCUS,
});
export const MouseEnter =() =>({
	type:constants.MOUSE_ENTER,
});

export const MouseLeave =() =>({
	type:constants.MOUSE_LEAVE,
});
export const searchBlur =() =>({
	type:constants.SEARCH_BLUR,
});

export const ChangePage =(page) =>({
	type:constants.CHANGE_PAGE,
	page
});
const chageList=(data) => ({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length / 4),
})
export const getList =() =>{
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res)=>
		{
			const data = res.data;
			dispatch(chageList(data.data));
		}).catch(() =>{
			console.log('error');
		})
	}
}