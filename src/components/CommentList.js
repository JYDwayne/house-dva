//评论列表页
import React, { Component } from "react";

import { List, Avatar, Icon, Spin, Layout } from 'antd';

//引入css
import style from './CommentList.css';

import { Button, Switch } from 'antd-mobile';

// import 'antd-mobile/dist/antd-mobile.css';

const { Header, Footer, Sider, Content } = Layout;



class Commentlist extends Component {

	componentDidMount() {
  }

	render() {
		const IconText = ({ type, text }) => (
		  <span>
		    <Icon type={type} style={{ marginRight: 8 }} />
		    {text}
		  </span>
		);
		const loadMore = (
			<div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
				<Button className={style.title}>查看更多</Button>
			</div>
		)
		return (
			<div>
				
		    <List
		      header={<div>评论列表</div>}
		      itemLayout="vertical"
		      dataSource={this.props.data.commentsList}
		      renderItem={item => {
		      	return (
		      		<List.Item
		      		extra={
		      			<Switch
								disabled={false}
								checked={false}
								onChange={ (checked) => { checked =!checked } }
		        />
		      		}
		      			key={item.id}
		      			actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text={item.replyCount} />]}
		      		>
                <div>
                	{item.content}
                </div>
		      		</List.Item>
		      	)
		      }}
		      loadMore={loadMore}
		    />
			</div>
		)
	}
}

export default Commentlist


// import React, { Component } from "react";

// import { List, message, Avatar, Spin } from 'antd';
// import reqwest from 'reqwest';

// import InfiniteScroll from 'react-infinite-scroller';

// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

// class InfiniteListExample extends React.Component {
//   state = {
//     data: [],
//     loading: false,
//     hasMore: true,
//   }
//   getData = (callback) => {
//     reqwest({
//       url: fakeDataUrl,
//       type: 'json',
//       method: 'get',
//       contentType: 'application/json',
//       success: (res) => {
//         callback(res);
//       },
//     });
//   }
//   componentWillMount() {
//     this.getData((res) => {
//       this.setState({
//         data: res.results,
//       });
//     });
//   }
//   handleInfiniteOnLoad = () => {
//     let data = this.state.data;
//     this.setState({
//       loading: true,
//     });
//     if (data.length > 14) {
//       message.warning('Infinite List loaded all');
//       this.setState({
//         hasMore: false,
//         loading: false,
//       });
//       return;
//     }
//     this.getData((res) => {
//       data = data.concat(res.results);
//       this.setState({
//         data,
//         loading: false,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="demo-infinite-container">
//         <InfiniteScroll
//           initialLoad={false}
//           pageStart={0}
//           loadMore={this.handleInfiniteOnLoad}
//           hasMore={!this.state.loading && this.state.hasMore}
//           useWindow={false}
//         >
//           <List
//             dataSource={this.state.data}
//             renderItem={item => (
//               <List.Item key={item.id}>
//                 <List.Item.Meta
//                   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                   title={<a href="https://ant.design">{item.name.last}</a>}
//                   description={item.email}
//                 />
//                 <div>ContentContentContentContentContentContentContentContentContentContentContentContent</div>
//               </List.Item>
//             )}
//           >
//             {this.state.loading && this.state.hasMore && <Spin className="demo-loading" />}
//           </List>
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }

// export default InfiniteListExample