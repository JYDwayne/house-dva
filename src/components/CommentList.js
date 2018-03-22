// //评论列表页
import React, { Component } from "react";

import { List, Avatar, Icon, Spin, Layout } from 'antd';

//引入css
import style from './CommentList.css';

import { Button } from 'antd-mobile';

import { Switch } from 'antd';

// import 'antd-mobile/dist/antd-mobile.css';

import { createForm } from 'rc-form';

const { Header, Footer, Sider, Content } = Layout;



class Commentlist extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showComment: []
		}
	}

	componentWillUpdate() {

  }

  componentWillMount() {
  	// console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.data.commentsList){
    	let showState = [];
    	this.props.data.commentsList.forEach((index, ele) => {
    		showState.push(true)
    	})
    	this.setState((prevState) => {
    		return {
    			...prevState,
    			showComment: showState
    		}
    	})
    }
  }

  componentDidUpdate() {
  	// console.log(this.props);
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

		const { getFieldProps } = this.props.form;

		return (
			<div>
		    <List
		      header={<div>评论列表</div>}
		      itemLayout="vertical"
		      dataSource={this.props.data.commentsList}
		      renderItem={(item, index) => {
		      	return (
		      		<List.Item
		      			key={item.id}
		      			actions={this.state.showComment[index] ? [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />] : null}
		      		>
                <div>
                	{item.content}
                </div>
                <Switch defaultChecked onChange={ (checked) => {this.switchFunction(checked, index)}  } />
		      		</List.Item>
		      	)
		      }}
		      loadMore={loadMore}
		    />
			</div>
		)
	}

	switchFunction(checked, index) {
		this.setState((prevState) => {
			let tempStr = prevState.showComment;
			tempStr.splice(index, 1, checked)
			return {
				...prevState,
				showComment: tempStr
			}
		})

	}
}

export default createForm()(Commentlist)

// import { List, Switch } from 'antd-mobile';
// import { createForm } from 'rc-form';

// let SwitchExample = (props) => {
//   const { getFieldProps } = props.form;
//   return (
//     <List
//       renderHeader={() => 'Form switch'}
//     >
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch1', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//       >On</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch2', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//       >Off</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch3', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//           disabled
//         />}
//       >Disabled off</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch4', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//           disabled
//         />}
//       >Disabled on</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch5', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           platform="android"
//         />}
//       >Style for Android</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch6', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           platform="android"
//           color="red"
//         />}
//       >Color for Android</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch7', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           platform="ios"
//         />}
//       >Style for iOS</List.Item>
//       <List.Item
//         extra={<Switch
//           {...getFieldProps('Switch8', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           platform="ios"
//           color="red"
//         />}
//       >Color for iOS</List.Item>
//     </List>
//   );
// };

// SwitchExample = createForm()(SwitchExample);

// export default SwitchExample

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