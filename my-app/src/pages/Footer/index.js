import React from 'react';
import "./index.css";
import axios from "axios";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrList: [],
            booList: [],
            footrig: [],
            logo: [],
            fooList: [],
            folList: [],
            imgList: [],
        }
    }
    componentDidMount() {
        // console.log('componentDidMount-----------组件挂在完成的时刻')
        axios.get('http://localhost:3000/123')
            .then(
                (res) => {
                    this.setState({
                        arrList: res.data.arrList,
                        booList: res.data.booList,
                        footrig: res.data.footrig,
                        logo: res.data.logo,
                        fooList: res.data.fooList,
                        folList: res.data.folList,
                        imgList: res.data.imgList,
                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })
    }
    render() {
        return <div className="allfooter">
            <div className="foot_top">
                <div className="foot_center">
                    {this.state.arrList.map((item, index) => {
                        return <li key={item + index}>{item.name}</li>
                    })}
                </div>
                <div className="foot_link">
                    {this.state.booList.map((lis, index) => {
                        return <div key={lis + index} className="dl">
                            <p>{lis.name}</p>
                            {lis.list.map((son, sonIndex) => {
                                    return <a key={son + sonIndex} href="##">{son.name}<br /></a>
                                })}
                        </div>
                    })}
                    <div className="dl_right">
                        <p className="dl_phone">{this.state.footrig.phone}</p>
                        <p className="time">{this.state.footrig.time}</p>
                        <div className="people">{this.state.footrig.people}</div>
                        <p className="time">
                            <span>{this.state.footrig.prefer}</span>
                            <span>
                                <img src={this.state.footrig.picwx} alt="hh" />
                                <img src={this.state.footrig.picwb} alt="hh" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="foot_bot">
                <div className="bot_centain">
                    <div className="logo_mi">
                        <img src={this.state.logo} alt="" />
                    </div>
                    <div className="logo_r">
                        {this.state.fooList.map((item, index) => {
                            return <p key={item + index}>
                                {item.list.map((son, index) => {
                                    return <a href="##" className="small" key={son + index}>{son.name}</a>
                                })}
                            </p>
                        })}
                        {this.state.folList.map((item, index) => {
                            return <p key={item + index}>
                                {item.list.map((son, index) => {
                                    return <a href="##" className="jing" key={son + index}>{son.name}</a>
                                })}
                            </p>
                        })}
                        {/* 图片 */}
                        {this.state.imgList.map((item, index) => {
                            return <img key={item + index} src={item.src} alt="hh" />
                        })}
                    </div><br />

                </div>
                {/* 最下面一句话图片 */}
                <div className="tt">
                </div>
            </div>
        </div>
    }
}