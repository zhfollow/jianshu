import styled from 'styled-components';


export const HomeWrapper = styled.div`
 	overflow:hidden;
	width:960px;
	margin:0 auto;
`
export const HomeLeft = styled.div`
	float:left;
	margin-left:15px;
	padding-top:30px;
	width:625px;
	.banner-img {
		width:625px;
		height:270px
	}


`

export const TopicWrapper =styled.div`
	padding:20px 0 10px 0;
	margin-left:-18px;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
`

export const TopicItem =styled.div`
	float:left;
	background:red;
	height:32px;
	margin-left:18px;
	margin-bottom:18px;
	line-height:32px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block;
		float:left;
		width:32px;
		height:32px;
		padding-left:10px;
	}

`
export const ListItem = styled.div`
padding:20px 0;
overflow:hidden;
margin-bottom :1px solid #dcdcdc;
.pic{
	display:block;
	width:125px;
	height:100px;
	float:right;
}
`
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		line-height:24px;
		font-size:12px;
		color:#999;
	}
`
export const HomeRight = styled.div`
	width:280px;
	float:right;
`
export const RecommendWrapper = styled.div`
	margin:30px 0;
	width:240px;
`

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	background:url(${(props)=> props.imgUrl});
	background-size:contain;
`

export const LoadMore = styled.div`
	width:100%;
	height:40px;
	margin:30px 0;
	line-height:40px;
	background:#a5a5a5;
	text-align:center;
	border-radius:20px;
	cursor: pointer;
`

export const BackTop = styled.div`
	position:fixed;
	right:100px;
	bottom:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	font-size:14px;
`
export const WriteWarpper = styled.div`
	width:278px;
	border:1px solid #dcdcdc;
	height:400px;
	border-radius:3px;

`