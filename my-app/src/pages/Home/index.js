import React from 'react';
import "./index.css";
import axios from "axios";
import { Carousel } from 'react-bootstrap';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import Side from "../../components/Nav/aside";
import { Tabs } from 'antd';
// 导入路由
import { Route } from 'react-router-dom'
// 导入组件
import Video from '../Video';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      asidelist: [],
      pagelist: [],
      prolist: [],
      piclists: [],
      onelist: [],
      cenlist: [],
      videolist: [],
      fixrig: [],
      top: [],
    }
  }
  componentDidMount() {
    // console.log('componentDidMount-----------组件挂在完成的时刻')
    axios.get('http://localhost:3000/123')
      .then(
        (res) => {

          this.setState({
            playlist: res.data.playlist,
            asidelist: res.data.asidelist,
            pagelist: res.data.pagelist,
            prolist: res.data.prolist,
            piclists: res.data.piclists,
            onelist: res.data.onelist,
            cenlist: res.data.cenlist,
            videolist: res.data.videolist,
            fixrig: res.data.fixrig,
            top: res.data.top,
          })
        })
      .catch((error) => { console.log("获取数据失败" + error) })

  }

  render() {
    return <div className="all">
      <div className="allhome">
        <div className="homecen">
          {/* 轮播 */}
          <Carousel>
            {this.state.playlist.map((item, index) => {
              return <Carousel.Item key={item + index}>
                <img className="playpic" alt="900x500" src={item.src} />
              </Carousel.Item>
            })}
          </Carousel>
          <div>
            {/* 侧边导航选项卡 */}
            <Side></Side>
          </div>
          {/* 下方四个图第一个 */}
          <div className="home_pro">
            <div className="proli">
              {this.state.prolist.map((item, index) => {
                return <li key={item + index}>
                  <a href="##">
                    <img src={item.pic} className="proli_img" alt="hh" />
                    <p>{item.txt}</p>
                  </a>
                </li>
              })}
            </div>
            {/* 四个图其余三个图片 */}
            {this.state.piclists.map((item, index) => {
              return <img key={item + index} src={item.ol} className="pro_pic" alt="hh" />
            })}
          </div>
        </div>
        <div className="main">
          <div className="main_centain">
            {/* 主体第一部分 */}
            {this.state.onelist.map((item, index) => {
              return <div key={item + index}>
                <img src={item.src} alt="hh" className="long_pic" />
                {item.list.map((son, index) => {
                  return <div key={son + index} className="title">{son.name}
                    <div className="more list_active">{son.more}</div></div>
                })}
                {/* 左边 */}
                {item.listleft.map((sun, index) => {
                  return <div className="main_left" key={sun + index}>
                    <img src={sun.src} alt="hh" />
                  </div>
                })}
                {/* 右边 */}
                <div className="main_right">
                  {item.listright.map((sin, index) => {
                    return <div className="right_list" key={sin + index}>
                      <img src={sin.pic} className="phone" alt="hh" />
                      <p className="phone_title">{sin.name}</p>
                      <p className="phone_desc">{sin.tet}</p>
                      <p className="phone_price">{sin.price}
                        <span className="old_price">{sin.old}</span>
                      </p>
                    </div>
                  })}
                </div>
              </div>
            })}
            {/* 中间四个部分 */}
            {this.state.cenlist.map((item, index) => {
              return <div key={item + index}>
                <div className="title">{item.namelist.name}
                  <div className="more">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab={item.namelist.names} key="1">
                        <div className="main_right">
                          {item.right.first.map((son, index) => {
                            return <div key={son + index} className="right_list">
                              <img src={son.pic} className="phone" alt="" />
                              <p className="phone_title">{son.name}</p>
                              <p className="phone_desc">{son.tet}</p>
                              <p className="phone_price">{son.price}<span className="old_price">{son.old}</span></p>
                            </div>
                          })}
                          {item.right.one.map((small, index) => {
                            return <div key={small + index} className="right_list li_top">
                              <div className="little">
                                <div className="little_tit">{small.tet}</div>
                                <div className="little_price">{small.price}</div>
                                <p>{small.txt}</p>
                                <span>{small.des}</span>
                              </div>
                              <img src={small.pic} className="little_pic" alt="hh" /></div>
                          })}
                        </div>
                        {/* 商品选项卡实现 */}
                      </TabPane>
                      <TabPane tab={item.namelist.names1} key="2">
                        <div className="main_right">
                          {item.right1.first.map((son, index) => {
                            return <div key={son + index} className="right_list">
                              <img src={son.pic} className="phone" alt="" />
                              <p className="phone_title">{son.name}</p>
                              <p className="phone_desc">{son.tet}</p>
                              <p className="phone_price">{son.price}<span className="old_price">{son.old}</span></p>
                            </div>

                          })}
                          {item.right1.one.map((small, index) => {
                            return <div key={small + index} className="right_list li_top">
                              <div className="little">
                                <div className="little_tit">{small.tet}</div>
                                <div className="little_price">{small.price}</div>
                                <p>{small.txt}</p>
                                <span>{small.des}</span>
                              </div>
                              <img src={small.pic} className="little_pic" alt="hh" /></div>
                          })}
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
                <div className="main_left">
                  {item.left.map((left, index) => {
                    return <img key={left + index} src={left.src} alt="hh" />
                  })}
                </div>
              </div>
            })}
            {/* 视频 */}
            {this.state.videolist.map((item, index) => {
              return <div key={item + index}>
                <img src={item.src} alt="hh" className="long_pic" />
                {item.list.map((son, index) => {
                  return <div key={son + index} className="title">{son.name}
                    <div className="more list_active">{son.more}</div></div>
                })}
                {item.video.map((sun, index) => {
                  return <div key={sun + index} className="vido_list">
                    <Link to='/video'>
                      <img src={sun.src} alt="" />

                      <div className="btn">
                        <div className="san"></div>
                      </div>
                    </Link>
                    <p className="phone_title">{sun.name}</p>
                    <p className="phone_desc">{sun.txt}</p>
                  </div>
                })}
                <Route Route path="/news/home/video" component={Video}></Route>
              </div>
            })}
          </div>
        </div>
        {/* 右侧导航 */}
        <div className="right_nav">
          {this.state.fixrig.map((so, index) => {
            return <div key={so + index} className="items">
              <div className="erwei">
                <div><img src="img/img1/ia_200000356.png" alt="" /></div>
                <span>扫码领取新人百元礼包</span>
              </div>
              <img src={so.src} className="first" alt="hh" />
              <p>{so.txt}</p>
            </div>
          })}
          {/* 返回顶部 */}
          <BackTop>
            <div className="items top">
              <img src={this.state.top.src} className="first" alt="hh" />
              <p>{this.state.top.txt}</p>
            </div>
          </BackTop>
        </div>
      </div>
    </div>
  }
}
