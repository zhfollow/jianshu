import React, {
	Component
} from 'react'
import { CSSTransition } from 'react-transition-group';
import * as actionCreators  from './store/actionCreators.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as loginActionCreators from '../../pages/login/store/actionCreators.js';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style.js'

class Header extends Component {
	constructor(props){
		super(props);
		this.getListArea = this.getListArea.bind(this);
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav >
					<NavItem className='left active'> 首页</NavItem>
					<NavItem className='left'> 下载APP</NavItem>
					{
						this.props.login ? (<NavItem onClick={this.props.logout} className='right'> 退出</NavItem>) :
							(<Link to={'/login/'}>
								<NavItem className='right'> 登录</NavItem>
							</Link>)
					}
					
					<NavItem className='right'> 
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
							 className ={this.props.focused ? 'focused' : ''}
							 onFocus ={this.props.handleInputFocus}
							 onBlur = {this.props.handleInputBlur}
							>							
							</NavSearch>
						</CSSTransition>
						<span className ={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<span className="iconfont">&#xe678;</span>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
				
			</HeaderWrapper>
		)
	}
	getListArea(){
		const pageList=[];
		const jsList = this.props.list.toJS();
		if(jsList.length){
			for (let i = ((this.props.page-1) * 4);i<this.props.page*4;i++){
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
		}	
		}

		if (this.props.focused || this.props.mouseIn){
			return(
					<SearchInfo 
					onMouseEnter={this.props.handleMouseEnter}
					onMouseLeave={this.props.handleMouseLeave}
					>
						<SearchInfoTitle>
						热门搜索
							<SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page,this.props.totalPage,this.spinIcon)}>
							<span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe852;</span>
							换一批
							</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{pageList}
						</SearchInfoList>
					</SearchInfo>

				)

		}else{
			return null;
		}
	}

}
const mapStateToProps=(state) =>{
	return{
	 focused:state.get('header').get('focused') ,
	 list:state.get('header').get('list'),
	 page:state.get('header').get('page'),
	 mouseIn:state.get('header').get('mouseIN'),
	 totalPage:state.get('header').get('totalPage'),
	 login:state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		handleInputFocus(){
			dispatch(actionCreators.getList());
			const action = actionCreators.searchFocus();
			dispatch(action);
		},
		handleInputBlur(){
			const action = actionCreators.searchBlur();
			dispatch(action);
		},
		handleMouseEnter(){
			const action =actionCreators.MouseEnter();
			dispatch(action);
		},
		handleMouseLeave(){
			const action = actionCreators.MouseLeave();
			dispatch(action);
		},
		handleChangePage(page,totalPage,spin){
			let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle){
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle =0;
			}
			spin.style.transform='rotate('+(originAngle + 360)+'deg)';
			if(page < totalPage){
				const action = actionCreators.ChangePage(page+1);
				dispatch(action);
			}else{
				const action = actionCreators.ChangePage(1);
				dispatch(action);
			}
			
		},
		logout(){
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);