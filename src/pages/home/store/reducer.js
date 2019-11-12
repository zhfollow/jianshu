
import  { fromJS } from 'immutable'
import * as constants from './constants.js';
const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	showScroll:false
});
export default (state = defaultState,action) => {
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
		return state.merge(
			{
				'topicList':fromJS(action.topicList),
				'articleList':fromJS(action.articleList),
				'recommendList':fromJS(action.recommendList)
			})
		case constants.ADD_ARITICLE_LIST:
			return state.set('articleList',state.get('articleList').concat(action.list));
		case constants.TOOGLE_TOP_SHOW:
			return state.set('showScroll',action.show);
		default:
			return state;
	}


}
