import React from 'react';
import './index.css';
import axios from "axios";
import er from "../../assets/img/img1/ia_200000000.png";
import Topnav from '../../components/Nav/top';
import { BrowserRouter as Link } from 'react-router-dom';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftname: [],
            rightname: [],
            car: [],
            ers: [],
            arrlist: [],
            playlist: [],
            fooList: [],
            isToggleOn: true,
            dispaly: 'block',
            border: '1px solid #b0b0b0',
            arr1: [],
            arr2: [],
            listarr: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        // console.log('componentDidMount-----------组件挂在完成的时刻')
        axios.get('http://localhost:3000/123')
            .then(
                (res) => {
                    this.setState({
                        leftname: res.data.navLists,
                        rightname: res.data.navrList,
                        car: res.data.car,
                        ers: res.data.ers,
                        arrlist: res.data.arrLists,
                        playlist: res.data.playlist,
                        fooList: res.data.fooLists,
                        arr1: res.data.arr1,
                        arr2: res.data.arr2,
                        listarr: res.data.listarr,
                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'block' : 'none',
            border: prevState.isToggleOn ? '1px solid #ff6700' : '1px solid #b0b0b0'
        }));
    }
    render() {
        return <div className="all">
            <div className="header">
                <div className="heacen">
                    {/* 顶部导航 */}
                    <div className="leftbar">
                        {this.state.leftname.map((item, index) => {
                            return <li className="lis" key={item + index}><a href="##">{item.name}</a>
                                <div className="hide">
                                    <div className="triangle"></div>
                                    <div className="erweima">
                                        <img src={er} className="ers" alt="no" />
                                        <p>{this.state.ers}</p>
                                    </div>
                                </div></li>
                        })}
                    </div>
                    {/* 登录部分 */}
                    <div className="rightbar">
                        {this.state.rightname.map((item, index) => {
                            return <li className="lis" key={item + index}><a href="##">{item.name}</a></li>
                        })}
                        <div className="car">
                            <Link to="/car">
                                <span className="caricon"></span>
                                <div className="cars">{this.state.car}</div>
                                <div className="shopping" >
                                    购物车还没有商品，赶紧选购吧！
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* logo部分导航 */}
            <div className="nav">
                <div className="navcon">
                    <div className="logo"></div>
                    <ul className="nav_list">
                        <Topnav></Topnav>
                        <div className="search_img" style={{ border: this.state.border }}>Search</div>
                        <input type="text" placeholder="手机" className="search" style={{ border: this.state.border }} onClick={this.handleClick} />
                        <div className="search_box" style={{ display: this.state.display }}>
                            {this.state.arr1.map((item, index) => {
                                return <p key={item + index} className="search_text">{item.name}</p>
                            })}
                        </div>
                    </ul>
                </div>
            </div>

        </div >
    }

}


