import React,{Component } from 'react'
import { connect } from 'react-redux';
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Write from './components/Write.js'
import Topic from './components/Topic.js'
import * as actionCreators from './store/actionCreators.js'
import { HomeWrapper,
HomeLeft,
HomeRight,
BackTop
 } from './style.js'

class Home extends Component{
	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className='banner-img'
					src="https://upload-images.jianshu.io/upload_images/11438996-fe5f4084a4c947ce?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Write/>
				</HomeRight>
				
				{this.props.showScroll ? (<BackTop onClick={this.handleScrollTop}> 
				顶部
				</BackTop>)
				: null}

			</HomeWrapper>
			)
	}

	componentDidMount(){
		this.props.changeHomeData()
		this.bindEvents();
	}	
	componentsWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}
const mapState =(state) => ({
	showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) =>({
	changeHomeData(){
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow(e){
		if(document.documentElement.scrollTop >200){
			dispatch(actionCreators.toogleTopShow(true))
		}else{
			dispatch(actionCreators.toogleTopShow(false))
		}
	}
})
export default connect(mapState,mapDispatch)(Home);
