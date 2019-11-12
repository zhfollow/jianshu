import axios from 'axios';
import * as constants from './constants.js'
import  { fromJS } from 'immutable'
const changeHomeData=(result)=>({
	type:constants.CHANGE_HOME_DATA,
	topicList:result.topicList,
	articleList:result.articleList,
	recommendList:result.recommendList

})

export const getHomeInfo =() =>{
	return (dispatch) =>{
		axios.get('/api/home.json').then((res) =>{
		const result = res.data.data;
		const action = changeHomeData(result);
		dispatch(action);

	}).catch(() =>{
			console.log('error');
		})	
	}

};


const addHomeList = (list) =>({
	type:constants.ADD_ARITICLE_LIST,
	list:fromJS(list)
})
export const getMoreList = () =>{
	return(dispatch) =>{
		axios.get('/api/homeList.json').then((res) =>{
		const result = res.data.data;
		dispatch(addHomeList(result));
		})	
	}
}


export const toogleTopShow = (show) =>({
	type:constants.TOOGLE_TOP_SHOW,
	show
})
