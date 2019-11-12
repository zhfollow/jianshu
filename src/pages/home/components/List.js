import React,{Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators.js'
import { ListItem,
ListInfo,
LoadMore } from '../style.js';
import { Link } from 'react-router-dom';
class List extends Component{
	render(){
		return(
			<div>
				{this.props.list.map((item,index) =>{
					return(
					<Link key={index} to={'/detail/'}>	
					<ListItem >
						<img alt='' className='pic' src={item.get('imgUrl')}/>
						<ListInfo>
						<h3 className='title'>{item.get('title')}
						</h3>
						<p className='desc'>
							{item.get('desc')}
						</p>
						</ListInfo>
					</ListItem>
					</Link>
						)
				})}
				<LoadMore onClick={() =>this.props.getMoreList()}>更多文字
				</LoadMore>
			</div>
			)
	}
}
const mapState=(state) =>({
	list:state.get('home').get('articleList')
});
const mapDispatch =(dispatch) =>({
	getMoreList() {
	dispatch(actionCreators.getMoreList());
	}
	
})
export default connect(mapState,mapDispatch)(List);
