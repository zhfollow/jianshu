import  { fromJS } from 'immutable'
import * as constants from './constants.js';
const defaultState = fromJS({
	title:'多读一些经典书籍',
	content:'<img src="https://upload-images.jianshu.io/upload_images/15437753-29fd8aa3ce852db7.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/680/format/webp"/><p>写文字的女人易感动。丰富的情感只在内心沸腾，在别人看来平淡的事，却让她溢满感恩。经过的人，掠过的事。在心里搁浅多年，依然鲜明。无人的夜，缓缓揭开经年的尘封。一遍又一遍地回味着过往的时光。</p><p>写文字的女人易感动。丰富的情感只在内心沸腾，在别人看来平淡的事，却让她溢满感恩。经过的人，掠过的事。在心里搁浅多年，依然鲜明。无人的夜，缓缓揭开经年的尘封。一遍又一遍地回味着过往的时光。</p><p>写文字的女人易感动。丰富的情感只在内心沸腾，在别人看来平淡的事，却让她溢满感恩。经过的人，掠过的事。在心里搁浅多年，依然鲜明。无人的夜，缓缓揭开经年的尘封。一遍又一遍地回味着过往的时光。</p><p>写文字的女人易感动。丰富的情感只在内心沸腾，在别人看来平淡的事，却让她溢满感恩。经过的人，掠过的事。在心里搁浅多年，依然鲜明。无人的夜，缓缓揭开经年的尘封。一遍又一遍地回味着过往的时光。</p><p>写文字的女人易感动。丰富的情感只在内心沸腾，在别人看来平淡的事，却让她溢满感恩。经过的人，掠过的事。在心里搁浅多年，依然鲜明。无人的夜，缓缓揭开经年的尘封。一遍又一遍地回味着过往的时光。</p>',

});
export default (state = defaultState,action) => {
	switch(action.type){
		case constants.CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content:action.content				
			}


				)
		default:
			return state;
	}


}
