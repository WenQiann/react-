var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/123', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    navLists: [
      {
        id: 1,
        name: "小米商城",
      },
      {
        id: 2,
        name: "MIUI",
      },
      {
        id: 3,
        name: "LOT",
      },
      {
        id: 4,
        name: "云服务",
      },
      {
        id: 5,
        name: "天星数科",
      },
      {
        id: 6,
        name: "有品",
      },
      {
        id: 7,
        name: "小爱开发平台",
      },
      {
        id: 8,
        name: "企业团购",
      },
      {
        id: 9,
        name: "资质证照",
      },
      {
        id: 10,
        name: "协议规则",
      },
      {
        id: 11,
        name: "下载app",
      },
      {
        id: 12,
        name: "智能生活",
      },
      {
        id: 13,
        name: "Select Location",
      },
    ],
    navrList: [
      { id: 1, name: "登录" },
      { id: 2, name: "注册" },
      { id: 3, name: "消息通知" },
    ],
    car: "购物车",
    ers: "小米商城APP",
    arrLists: [
      {
        id: 1,
        name: "小米手机",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 2,
        name: "Redmi红米",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 3,
        name: "电视",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 4,
        name: "笔记本",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 5,
        name: "家电",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 6,
        name: "路由器",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 7,
        name: "智能服务",
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
    ],
    fooLists: [
      {
        id: 1,
        name: "服务",
      },
      {
        id: 2,
        name: "社区",
      },
    ],
    arr1: [
      {
        num: 1,
        name: "全部商品",
      },
      {
        num: 2,
        name: "电脑",
      },
      {
        num: 3,
        name: "手机",
      },
      {
        num: 4,
        name: "家电",
      },
      {
        num: 5,
        name: "鲨鱼",
      },
      {
        num: 6,
        name: "智能",
      },
      {
        num: 7,
        name: "耳机",
      },
    ],
    arr2: [
      {
        id: 1,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 2,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 3,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 4,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 5,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 6,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
      {
        id: 1,
        list: [
          {
            id: 1,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 2,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 3,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 4,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
          {
            id: 5,
            src: "../../static/img/img1/ia_200002956.png",
            name: "小米MIX FLOD",
            price: "9999元起",
          },
        ],
      },
    ],
    listarr: [
      {
        id: 1,
        src: "../../static/img/img1/ia_200002956.png",
        name: "小米MIX FLOD",
        price: "9999元起",
      },
      {
        id: 2,
        src: "../../static/img/img1/ia_200002956.png",
        name: "小米MIX FLOD",
        price: "9999元起",
      },
      {
        id: 3,
        src: "../../static/img/img1/ia_200002956.png",
        name: "小米MIX FLOD",
        price: "9999元起",
      },
      {
        id: 4,
        src: "../../static/img/img1/ia_200002956.png",
        name: "小米MIX FLOD",
        price: "9999元起",
      },
      {
        id: 5,
        src: "../../static/img/img1/ia_200002956.png",
        name: "小米MIX FLOD",
        price: "9999元起",
      },
    ],
    playlist: [
      { play: 1, src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b59d2e454866906384b427a5ed92082.jpeg?w=2452&h=920" },
      { play: 2, src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/527f28ff20aa102b0463704b244db01f.jpg?thumb=1&w=1226&h=460&f=webp&q=90" },
      { play: 3, src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793eebbee1dd569fe56a8aaf58f62452.jpg?thumb=1&w=1226&h=460&f=webp&q=90" },

    ],
    asidelist: [
      {
        title: "手机 电话卡",
        id: "1",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "电视 盒子", id: "2",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "笔记本 显示器", id: "3",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "家电 插线板", id: "4",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "出行 穿戴", id: "5",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "智能 路由器", id: "6",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "电源 配件", id: "7",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "健康 儿童", id: "8",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "耳机 音箱", id: "9",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX1111111111　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX22222222222　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
      {
        title: "生活 箱包", id: "10",
        list: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
        list2: [
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
            text: "小米MIX　FLOD",
          },
          {

            src: "http://localhost:3000/images/ia_200002955.png",
            text: "小米MIXdcd　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
          {

            src: "../../static/img/img1/ia_200002955.png",
            text: "小米MIX　FLOD",
          },
        ],
      },
    ],
    pagelist: [
      {
        sum: 1,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 2,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 3,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 4,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 5,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 6,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 7,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 8,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 9,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
      {
        sum: 10,
        list: [
          {
            id: 1,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 2,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 3,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
          {
            id: 4,
            list2: [
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
              {
                src: "../../static/img/img1/ia_200002955.png",
                text: "小米MIX　FLOD",
              },
            ],
          },
        ],
      },
    ],
    prolist: [
      { pic: "http://localhost:3000/images/ia_200000228.png", txt: "小米秒杀" },
      { pic: "http://localhost:3000/images/ia_200000229.png", txt: "企业团购" },
      { pic: "http://localhost:3000/images/ia_200000230.png", txt: "F码通道" },
      { pic: "http://localhost:3000/images/ia_200000231.png", txt: "米粉卡" },
      { pic: "http://localhost:3000/images/ia_200000232.png", txt: "以旧换新" },
      { pic: "http://localhost:3000/images/ia_200000233.png", txt: "话费充值" },
    ],
    piclists: [
      { ol: "http://localhost:3000/images/ia_200000234.jpg" },
      { ol: "http://localhost:3000/images/ia_200000235.jpg" },
      { ol: "http://localhost:3000/images/ia_200000236.png" },
    ],
    onelist: [
      {
        long: 1,
        src: "http://localhost:3000/images/ia_200000247.webp",
        list: [{ name: "手机", more: "查看更多 >>" }],
        listleft: [{ src: "http://localhost:3000/images/ia_200000238.webp" }],
        listright: [
          {
            pic: "http://localhost:3000/images/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
          {
            pic: "http://localhost:3000/images/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
        ],
      },
    ],
    // cenlist: [
    //   {
    //     first: 21,
    //     src: "../../static/img/img1/ia_200000266.webp",
    //     namelist: [
    //       {
    //         ids: 1,
    //         name: "智能",
    //         names: [
    //           { se: 11, name: "安防" },
    //           { se: 21, name: "安防" },
    //         ],
    //       },
    //     ],
    //     left: [
    //       { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
    //       { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
    //     ],
    //     right: [
    //       {
    //         rs: 1,
    //         first: [
    //           {
    //             lis: 0,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //           {
    //             lis: 1,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 2,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 3,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 4,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 5,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 6,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //         ],
    //         one: [
    //           {
    //             nu: 10,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //           },
    //           {
    //             nu: 20,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             txt: "浏览更多",
    //             des: "热门",
    //           },
    //         ],
    //       },


    //     ],
    //   },
    //   {
    //     first: 22,
    //     src: "../../static/img/img1/ia_200000266.webp",
    //     namelist: [
    //       {
    //         ids: 1,
    //         name: "智能",
    //         names: [
    //           { se: 11, name: "安1防" },
    //           { se: 21, name: "安防" },
    //         ],
    //       },
    //     ],
    //     left: [
    //       { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
    //       { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
    //     ],
    //     right: [
    //       {
    //         rs: 0,
    //         first: [
    //           {
    //             lis: 0,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //           {
    //             lis: 1,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 2,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 3,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 4,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 5,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 6,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //         ],
    //         one: [
    //           {
    //             nu: 10,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //           },
    //           {
    //             nu: 20,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             txt: "浏览更多",
    //             des: "热门",
    //           },
    //         ],
    //       },

    //     ],
    //   },
    //   {
    //     first: 23,
    //     src: "../../static/img/img1/ia_200000266.webp",
    //     namelist: [
    //       {
    //         ids: 1,
    //         name: "智能",
    //         names: [
    //           { se: 11, name: "安防" },
    //           { se: 21, name: "安防" },
    //         ],
    //       },
    //     ],
    //     left: [
    //       { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
    //       { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
    //     ],
    //     right: [
    //       {
    //         rs: 0,
    //         first: [
    //           {
    //             lis: 0,
    //             pic: "http://localhost:3000/images/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //           {
    //             lis: 1,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 2,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 3,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 4,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 5,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 6,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //         ],
    //         one: [
    //           {
    //             nu: 10,
    //             pic: "http://localhost:3000/images//ia_200002983.png",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //           },
    //           {
    //             nu: 20,
    //             pic: "http://localhost:3000/images/ia_200002983.png",
    //             txt: "浏览更多",
    //             des: "热门",
    //           },
    //         ],
    //       },

    //     ],
    //   },
    //   {
    //     first: 24,
    //     src: "../../static/img/img1/ia_200000266.webp",
    //     namelist: [
    //       {
    //         ids: 1,
    //         name: "智能",
    //         names: [
    //           { se: 11, name: "安防" },
    //           { se: 21, name: "安防" },
    //         ],
    //       },
    //     ],
    //     left: [
    //       { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
    //       { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
    //     ],
    //     right: [
    //       {
    //         rs: 0,
    //         first: [
    //           {
    //             lis: 0,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //           {
    //             lis: 1,
    //             pic: "http://localhost:3000/images/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 2,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 3,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 4,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 5,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 6,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //         ],
    //         one: [
    //           {
    //             nu: 10,
    //             pic: "http://localhost:3000/images/ia_200002983.png",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //           },
    //           {
    //             nu: 20,
    //             pic: "http://localhost:3000/images/ia_200002983.png",
    //             txt: "浏览更多",
    //             des: "热门",
    //           },
    //         ],
    //       },

    //     ],
    //   },
    //   {
    //     first: 25,
    //     src: "../../static/img/img1/ia_200000266.webp",
    //     namelist: [
    //       {
    //         ids: 1,
    //         name: "智能",
    //         names: [
    //           { se: 11, name: "安防" },
    //           { se: 21, name: "安防" },
    //         ],
    //       },
    //     ],
    //     left: [
    //       { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
    //       { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
    //     ],
    //     right: [
    //       {
    //         rs: 0,
    //         first: [
    //           {
    //             lis: 0,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //           {
    //             lis: 1,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 2,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 3,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 4,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 5,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },

    //           {
    //             lis: 6,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             name: "Note 10 Pro",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //             old: "5999元",
    //           },
    //         ],
    //         one: [
    //           {
    //             nu: 10,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             tet: "天玑1100年度旗舰芯，VC液冷散热",
    //             price: "1699元起",
    //           },
    //           {
    //             nu: 20,
    //             pic: "../../static/img/img1/ia_200002983.png",
    //             txt: "浏览更多",
    //             des: "热门",
    //           },
    //         ],
    //       },

    //     ],
    //   },
    // ],
    cenlist: [
      {
        first: 21,
        src: "../../static/img/img1/ia_200000266.webp",
        namelist:
        {
          ids: 1,
          name: "智能",
          names: "安防",
          names1: "安防",

        },

        left: [
          { short: 10, src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da9d09f961ec1c9ead8c907a5d700a29.jpeg?thumb=1&w=234&h=300&f=webp&q=90" },
          { short: 20, src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da9d09f961ec1c9ead8c907a5d700a29.jpeg?thumb=1&w=234&h=300&f=webp&q=90" },
        ],
        right:
        {
          rs: 0,
          first: [
            {
              lis: 0,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
        right1: {
          rs: 100,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 111110 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "http://localhost:3000/images/ia_200002983.png",
              tet: "天玑1101110年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },

      },
      {
        first: 22,
        src: "../../static/img/img1/ia_200000266.webp",
        namelist:
        {
          ids: 1,
          name: "智能",
          names: "安防",
          names1: "安防",
        },


        left: [
          { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
          { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
        ],
        right:
        {
          rs: 0,
          first: [
            {
              lis: 0,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "http://localhost:3000/images/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "http://localhost:3000/images/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
        right1: {
          rs: 100,
          first: [
            {
              lis: 0,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },

      },
      {
        first: 23,
        src: "../../static/img/img1/ia_200000266.webp",
        namelist: {
          ids: 1,
          name: "智能",
          names: "安防",
          names1: "安防",
        },
        left: [
          { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
          { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
        ],
        right:
        {
          rs: 0,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
        right1: {
          rs: 100,
          first: [
            {
              lis: 0,
              pic: "http://localhost:3000/images/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },

      },
      {
        first: 24,
        src: "../../static/img/img1/ia_200000266.webp",
        namelist:
        {
          ids: 1,
          name: "智能",
          names: "安防",
          names1: "安防",
        },

        left: [
          { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
          { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
        ],
        right:
        {
          rs: 0,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
        right1: {
          rs: 100,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },

      },
      {
        first: 25,
        src: "../../static/img/img1/ia_200000266.webp",
        namelist:
        {
          ids: 1,
          name: "智能",
          names: "安防",
          names1: "安防",
        },

        left: [
          { short: 10, src: "http://localhost:3000/images/ia_200000267.webp" },
          { short: 20, src: "http://localhost:3000/images/ia_200000267.webp" },
        ],
        right:
        {
          rs: 0,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
        right1: {
          rs: 100,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },

      },
    ],
    hidelist: [
      {
        rss: 200,
        first: [
          {
            lis: 0,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
          {
            lis: 1,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 2,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 3,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 4,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 5,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 6,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
        ],
      },
      {
        rss: 1,
        first: [
          {
            lis: 0,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
          {
            lis: 1,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 2,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 3,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 4,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 5,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },

          {
            lis: 6,
            pic: "../../static/img/img1/ia_200002983.png",
            name: "Note 10 Pro",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
            old: "5999元",
          },
        ],
        one: [
          {
            nu: 10,
            pic: "../../static/img/img1/ia_200002983.png",
            tet: "天玑1100年度旗舰芯，VC液冷散热",
            price: "1699元起",
          },
          {
            nu: 20,
            pic: "../../static/img/img1/ia_200002983.png",
            txt: "浏览更多",
            des: "热门",
          },
        ],
      },
    ],
    videolist: [
      {
        long: 1,
        src: "http://localhost:3000/images/ia_200000247.webp",
        list: [{ name: "视频", more: "查看全部 >>" }],
        video: [
          {
            src: "http://localhost:3000/images/ia_200000247.webp",
            name: "2021年春季发布会第一场",
            txt: "",
            vdo: "http://localhost:3000/images/vid.mp4",
          },
          {
            src: "http://localhost:3000/images/ia_100003332.webp",
            name: "2021年春季发布会第一场",
            txt: "Redmi 10x系列发布会",
            vdo: "http://localhost:3000/images/vid.mp4",
          },
          {
            src: "http://localhost:3000/images/ia_100003333.webp",
            name: "2021年春季发布会第一场",
            txt: "",
            vdo: "http://localhost:3000/images/vid.mp4",
          },
          {
            src: "http://localhost:3000/images/ia_100003334.webp",
            name: "2021年春季发布会第一场",
            txt: "",
            vdo: "http://localhost:3000/images/vid.mp4",
          },
        ]
      }
    ],
    arrList: [
      {
        id: 1,
        name: "预约维修服务",
      },
      {
        id: 2,
        name: "7天无理由退货",
      },
      {
        id: 3,
        name: "15天免费换货",
      },
      {
        id: 4,
        name: "满69包邮",
      },
      {
        id: 5,
        name: "520余家售后网点",
      },
    ],
    booList: [
      {
        id: 1,
        name: "帮助中心",
        list: [
          { id: 1, name: "账户管理" },
          { id: 2, name: "购物指南" },
          { id: 3, name: "订单操作" },
        ],
      },
      {
        id: 2,
        name: "服务支持",
        list: [
          { id: 1, name: "售后政策" },
          { id: 2, name: "自助服务" },
          { id: 3, name: "相关下载" },
        ],
      },
      {
        id: 3,
        name: "授权体验店",
        list: [
          { id: 1, name: "小米之家" },
          { id: 2, name: "服务网点" },
          { id: 3, name: "授权体验店" },
        ],
      },
      {
        id: 4,
        name: "关于小米",
        list: [
          { id: 1, name: "了解小米" },
          { id: 2, name: "加入小米" },
          { id: 3, name: "投资者关系" },
          { id: 4, name: "企业社会责任" },
          { id: 5, name: "廉洁举报" },
        ],
      },
      {
        id: 5,
        name: "关注我们",
        list: [
          { id: 1, name: "新浪微博" },
          { id: 2, name: "官方微信" },
          { id: 3, name: "联系我们" },
          { id: 4, name: "公益基金会" },
        ],
      },
      {
        id: 6,
        name: "特色服务",
        list: [
          { id: 1, name: "F 码通道" },
          { id: 2, name: "礼物码" },
          { id: 3, name: "防伪查询" },
        ],
      },
    ],
    footrig: {
      phone: "400-100-5678",
      time: "8:00-18:00（仅收市话费）",
      people: "人工客服",
      prefer: "关注小米:",
      picwb: 'https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wb.png',
      picwx: 'https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx.png'

    },
    logo: "//s02.mifile.cn/assets/static/image/logo-mi2.png",
    fooList: [
      {
        id: 1,
        name: "",
        list: [
          { id: 1, name: "小米商城" },
          { id: 2, name: "MIUI" },
          { id: 3, name: "米家" },
          { id: 4, name: "米聊" },
          { id: 5, name: "多看" },
          { id: 6, name: "游戏" },
          { id: 7, name: "政企服务" },
          { id: 8, name: "小米天猫店" },
          { id: 9, name: "小米集团隐私政策" },
          { id: 10, name: "小米公司儿童信息保护规则" },
          { id: 11, name: "小米商城隐私政策" },
          { id: 12, name: "小米商城用户协议" },
          { id: 13, name: "问题反馈" },
          { id: 14, name: "Select Location" },
        ],
      },
      {
        id: 2,
        name: "",
        list: [
          { id: 1, name: "售后政策" },
          { id: 2, name: "自助服务" },
          { id: 3, name: "相关下载" },
        ],
      },
    ],
    folList: [
      {
        id: 1,
        name: "",
        list: [
          { id: 1, name: "©" },
          { id: 2, name: " mi.com" },
          { id: 3, name: "京ICP证110507号" },
          { id: 4, name: "京ICP备10046444号" },
          { id: 5, name: " 京公网安备11010802020134号" },
        ],
      },
      {
        id: 2,
        name: "",
        list: [
          { id: 1, name: "了解小米" },
          { id: 2, name: "加入小米" },
          { id: 3, name: "投资者关系" },
          { id: 4, name: "企业社会责任" },
          { id: 5, name: "廉洁举报" },
        ],
      },
      {
        id: 3,
        name: "",
        list: [
          { id: 1, name: "新浪微博" },
          { id: 2, name: "官方微信" },
          { id: 3, name: "联系我们" },
          { id: 4, name: "公益基金会" },
        ],
      },
      {
        id: 4,
        name: "",
        list: [
          { id: 1, name: "F 码通道" },
          { id: 2, name: "礼物码" },
          { id: 3, name: "防伪查询" },
        ],
      },
    ],
    imgList: [
      {
        id: 1,
        src: "//i1.mifile.cn/f/i/17/site/truste.png"
      },
      {
        id: 2,
        src: "//s01.mifile.cn/i/v-logo-2.png"
      },
      {
        id: 3,
        src: "//xyt.xinchacha.com/img/icon/icon3.png"
      },
      {
        id: 4,
        src: "//i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png"
      },
      {
        id: 5,
        src: "https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png"
      },
    ],
    fixrig: [
      { src: "https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png", txt: "手机App" },
      { src: "https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png", txt: "个人中心" },
      { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png", txt: "售后服务" },
      { src: "https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png", txt: "人工客服" },
      { src: "https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png", txt: "购物车" },

    ],
    top: { src: "https://i1.mifile.cn/f/i/2018/home/totop.png", txt: "返回顶部" },
  })

});

module.exports = router;
