import React,{Component } from 'react'
import {connect } from 'react-redux';
import * as actionCreators from './store/actionCreators.js'
import {DetailWrapper,
Header,
Content} from './style.js'
class Detail extends Component{
	render(){
		return(
				<DetailWrapper> 
				<Header>{this.props.title}
				</Header>
				<Content 
				dangerouslySetInnerHTML={{__html:this.props.content}}/>

				</DetailWrapper>
			)
	}
	componentDidMount(){
		this.props.getDetail();
	}
}
const mapState = (state) =>({
	title:state.getIn(['detail','title']),
	content:state.getIn(['detail','content'])
})
const mapDispatch =(dispatch) =>({
	getDetail(){
		dispatch(actionCreators.getDetail)
	}
})
export default connect(mapState,mapDispatch)(Detail);
