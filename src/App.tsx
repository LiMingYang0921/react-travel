import React from 'react'
import styles from './App.module.css'
import { Header, Footer, SideMenu, Carousel, ProductCollection } from './components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';


// const list = [
//   {
//     "name": "双色球",
//     "code": "2023040",
//     "detailsLink": "/c/2023/04/11/536513.shtml",
//     "videoLink": "/c/2023/04/11/536512.shtml",
//     "date": "2023-04-11(二)",
//     "week": "二",
//     "red": "09,16,17,24,29,31",
//     "blue": "08",
//     "blue2": "",
//     "sales": "372777348",
//     "poolmoney": "2006881397",
//     "content": "山西1注,辽宁1注,山东1注,陕西2注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "9001506"
//       },
//       {
//         "type": 2,
//         "typenum": "165",
//         "typemoney": "151572"
//       },
//       {
//         "type": 3,
//         "typenum": "1462",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "71909",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1312767",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10145552",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023039",
//     "detailsLink": "/c/2023/04/09/536297.shtml",
//     "videoLink": "/c/2023/04/09/536296.shtml",
//     "date": "2023-04-09(日)",
//     "week": "日",
//     "red": "02,03,09,13,19,28",
//     "blue": "09",
//     "blue2": "",
//     "sales": "409186858",
//     "poolmoney": "1976860679",
//     "content": "上海1注,浙江1注,河南1注,广东1注,深圳1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "8903432"
//       },
//       {
//         "type": 2,
//         "typenum": "191",
//         "typemoney": "127730"
//       },
//       {
//         "type": 3,
//         "typenum": "2307",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "110421",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1808206",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11165699",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023038",
//     "detailsLink": "/c/2023/04/06/536174.shtml",
//     "videoLink": "/c/2023/04/06/536173.shtml",
//     "date": "2023-04-06(四)",
//     "week": "四",
//     "red": "02,09,14,17,31,33",
//     "blue": "08",
//     "blue2": "",
//     "sales": "368841578",
//     "poolmoney": "1948188487",
//     "content": "吉林1注,黑龙江1注,上海1注,安徽1注,河南1注,湖北1注,湖南1注,贵州1注,云南1注,宁夏1注,新疆1注,共11注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "6553875"
//       },
//       {
//         "type": 2,
//         "typenum": "135",
//         "typemoney": "158265"
//       },
//       {
//         "type": 3,
//         "typenum": "1478",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "70320",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1326850",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12700547",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023037",
//     "detailsLink": "/c/2023/04/04/535959.shtml",
//     "videoLink": "/c/2023/04/04/535958.shtml",
//     "date": "2023-04-04(二)",
//     "week": "二",
//     "red": "08,23,25,26,29,31",
//     "blue": "12",
//     "blue2": "",
//     "sales": "357460864",
//     "poolmoney": "1956183761",
//     "content": "河北1注,江苏1注,江西1注,河南1注,海南10注,四川1注,陕西1注,共16注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "16",
//         "typemoney": "5978413"
//       },
//       {
//         "type": 2,
//         "typenum": "115",
//         "typemoney": "170158"
//       },
//       {
//         "type": 3,
//         "typenum": "1896",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "89697",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1580931",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11489209",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023036",
//     "detailsLink": "/c/2023/04/02/535643.shtml",
//     "videoLink": "/c/2023/04/02/535642.shtml",
//     "date": "2023-04-02(日)",
//     "week": "日",
//     "red": "13,14,18,19,24,30",
//     "blue": "09",
//     "blue2": "",
//     "sales": "402105258",
//     "poolmoney": "1993133574",
//     "content": "黑龙江1注,江苏5注,浙江3注,安徽1注,山东3注,重庆1注,河南5注,广西3注,陕西1注,新疆1注,共24注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "24",
//         "typemoney": "5566068"
//       },
//       {
//         "type": 2,
//         "typenum": "271",
//         "typemoney": "62664"
//       },
//       {
//         "type": 3,
//         "typenum": "2742",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "112816",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1783939",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "16094948",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023035",
//     "detailsLink": "/c/2023/03/30/535421.shtml",
//     "videoLink": "/c/2023/03/30/535420.shtml",
//     "date": "2023-03-30(四)",
//     "week": "四",
//     "red": "01,04,09,10,20,33",
//     "blue": "06",
//     "blue2": "",
//     "sales": "376157550",
//     "poolmoney": "2075773039",
//     "content": "江苏1注,浙江1注,四川3注,深圳5注,共10注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "10",
//         "typemoney": "6874671"
//       },
//       {
//         "type": 2,
//         "typenum": "100",
//         "typemoney": "234333"
//       },
//       {
//         "type": 3,
//         "typenum": "2115",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82651",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1474150",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10593387",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023034",
//     "detailsLink": "/c/2023/03/28/535204.shtml",
//     "videoLink": "/c/2023/03/28/535203.shtml",
//     "date": "2023-03-28(二)",
//     "week": "二",
//     "red": "02,03,09,11,12,17",
//     "blue": "15",
//     "blue2": "",
//     "sales": "371464196",
//     "poolmoney": "2074219579",
//     "content": "辽宁1注,上海3注,深圳1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "9140109"
//       },
//       {
//         "type": 2,
//         "typenum": "146",
//         "typemoney": "177230"
//       },
//       {
//         "type": 3,
//         "typenum": "1255",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "69579",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1458884",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9249017",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023033",
//     "detailsLink": "/c/2023/03/26/534889.shtml",
//     "videoLink": "/c/2023/03/26/534888.shtml",
//     "date": "2023-03-26(日)",
//     "week": "日",
//     "red": "08,09,13,23,24,26",
//     "blue": "05",
//     "blue2": "",
//     "sales": "407044870",
//     "poolmoney": "2042293077",
//     "content": "湖南1注,广西1注,云南1注,青海1注,新疆1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "9565190"
//       },
//       {
//         "type": 2,
//         "typenum": "240",
//         "typemoney": "118885"
//       },
//       {
//         "type": 3,
//         "typenum": "1401",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82920",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1663336",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9580373",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023032",
//     "detailsLink": "/c/2023/03/23/534666.shtml",
//     "videoLink": "/c/2023/03/23/534665.shtml",
//     "date": "2023-03-23(四)",
//     "week": "四",
//     "red": "06,19,20,26,28,33",
//     "blue": "01",
//     "blue2": "",
//     "sales": "378271328",
//     "poolmoney": "2004521709",
//     "content": "浙江1注,安徽5注,江西3注,山东1注,河南1注,广东1注,四川3注,共15注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "15",
//         "typemoney": "6158718"
//       },
//       {
//         "type": 2,
//         "typenum": "142",
//         "typemoney": "152999"
//       },
//       {
//         "type": 3,
//         "typenum": "1957",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "91037",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1647100",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11579939",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023031",
//     "detailsLink": "/c/2023/03/21/534351.shtml",
//     "videoLink": "/c/2023/03/21/534350.shtml",
//     "date": "2023-03-21(二)",
//     "week": "二",
//     "red": "07,14,27,29,31,33",
//     "blue": "05",
//     "blue2": "",
//     "sales": "377795536",
//     "poolmoney": "2031724589",
//     "content": "湖南1注,广东2注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "309",
//         "typemoney": "83076"
//       },
//       {
//         "type": 3,
//         "typenum": "1074",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "64596",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1191554",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10876180",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023030",
//     "detailsLink": "/c/2023/03/19/534035.shtml",
//     "videoLink": "/c/2023/03/19/534034.shtml",
//     "date": "2023-03-19(日)",
//     "week": "日",
//     "red": "02,03,07,16,30,31",
//     "blue": "06",
//     "blue2": "",
//     "sales": "407635670",
//     "poolmoney": "1984712961",
//     "content": "上海1注,重庆1注,广东1注,海南1注,陕西3注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "7680189"
//       },
//       {
//         "type": 2,
//         "typenum": "78",
//         "typemoney": "300662"
//       },
//       {
//         "type": 3,
//         "typenum": "1556",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82039",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1541405",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "13888997",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023029",
//     "detailsLink": "/c/2023/03/16/533914.shtml",
//     "videoLink": "/c/2023/03/16/533913.shtml",
//     "date": "2023-03-16(四)",
//     "week": "四",
//     "red": "03,07,12,24,28,33",
//     "blue": "08",
//     "blue2": "",
//     "sales": "373970632",
//     "poolmoney": "1968119308",
//     "content": "辽宁2注,福建1注,广东1注,四川1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "8837568"
//       },
//       {
//         "type": 2,
//         "typenum": "173",
//         "typemoney": "138640"
//       },
//       {
//         "type": 3,
//         "typenum": "1473",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "81568",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1422795",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10469169",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023028",
//     "detailsLink": "/c/2023/03/14/533697.shtml",
//     "videoLink": "/c/2023/03/14/533696.shtml",
//     "date": "2023-03-14(二)",
//     "week": "二",
//     "red": "05,07,10,17,20,22",
//     "blue": "14",
//     "blue2": "",
//     "sales": "378131048",
//     "poolmoney": "1940352740",
//     "content": "北京1注,广东1注,宁夏1注,新疆1注,共4注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "4",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "151",
//         "typemoney": "205758"
//       },
//       {
//         "type": 3,
//         "typenum": "941",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "60535",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1281211",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6652747",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023027",
//     "detailsLink": "/c/2023/03/12/533482.shtml",
//     "videoLink": "/c/2023/03/12/533481.shtml",
//     "date": "2023-03-12(日)",
//     "week": "日",
//     "red": "08,10,22,27,32,33",
//     "blue": "08",
//     "blue2": "",
//     "sales": "405939502",
//     "poolmoney": "1887143965",
//     "content": "江苏1注,广东4注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "8409682"
//       },
//       {
//         "type": 2,
//         "typenum": "88",
//         "typemoney": "242164"
//       },
//       {
//         "type": 3,
//         "typenum": "1665",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "79112",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1410908",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "15748363",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023026",
//     "detailsLink": "/c/2023/03/09/533060.shtml",
//     "videoLink": "/c/2023/03/09/533059.shtml",
//     "date": "2023-03-09(四)",
//     "week": "四",
//     "red": "01,18,26,30,31,33",
//     "blue": "03",
//     "blue2": "",
//     "sales": "382398740",
//     "poolmoney": "1865260832",
//     "content": "河北1注,辽宁2注,黑龙江2注,江苏1注,浙江5注,湖南1注,共12注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "6934784"
//       },
//       {
//         "type": 2,
//         "typenum": "98",
//         "typemoney": "296140"
//       },
//       {
//         "type": 3,
//         "typenum": "1408",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "61694",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1259674",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8425756",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023025",
//     "detailsLink": "/c/2023/03/07/532843.shtml",
//     "videoLink": "/c/2023/03/07/532842.shtml",
//     "date": "2023-03-07(二)",
//     "week": "二",
//     "red": "04,16,20,21,31,32",
//     "blue": "14",
//     "blue2": "",
//     "sales": "383537242",
//     "poolmoney": "1861412948",
//     "content": "河北1注,辽宁1注,吉林1注,江苏2注,浙江1注,重庆1注,广西1注,四川2注,共10注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "10",
//         "typemoney": "6974384"
//       },
//       {
//         "type": 2,
//         "typenum": "118",
//         "typemoney": "209150"
//       },
//       {
//         "type": 3,
//         "typenum": "2098",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "89817",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1482967",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10025391",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023024",
//     "detailsLink": "/c/2023/03/05/532529.shtml",
//     "videoLink": "/c/2023/03/05/532528.shtml",
//     "date": "2023-03-05(日)",
//     "week": "日",
//     "red": "03,06,09,17,27,28",
//     "blue": "03",
//     "blue2": "",
//     "sales": "424465912",
//     "poolmoney": "1857117376",
//     "content": "河北4注,黑龙江1注,上海1注,江苏3注,浙江1注,江西1注,重庆1注,湖北1注,云南4注,陕西1注,甘肃1注,新疆1注,深圳1注,共21注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "21",
//         "typemoney": "5993974"
//       },
//       {
//         "type": 2,
//         "typenum": "487",
//         "typemoney": "53576"
//       },
//       {
//         "type": 3,
//         "typenum": "2560",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "136377",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2212602",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9307901",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023023",
//     "detailsLink": "/c/2023/03/02/532207.shtml",
//     "videoLink": "/c/2023/03/02/532206.shtml",
//     "date": "2023-03-02(四)",
//     "week": "四",
//     "red": "05,08,10,15,24,25",
//     "blue": "09",
//     "blue2": "",
//     "sales": "394377912",
//     "poolmoney": "1904715322",
//     "content": "河北1注,黑龙江1注,江苏2注,浙江2注,安徽6注,江西2注,山东7注,重庆2注,河南1注,湖北3注,广东4注,广西1注,四川2注,云南1注,陕西3注,深圳3注,共41注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "41",
//         "typemoney": "5000000"
//       },
//       {
//         "type": 2,
//         "typenum": "258",
//         "typemoney": "6000"
//       },
//       {
//         "type": 3,
//         "typenum": "7074",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "239808",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2833383",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "19477194",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023022",
//     "detailsLink": "/c/2023/02/28/531990.shtml",
//     "videoLink": "/c/2023/02/28/531989.shtml",
//     "date": "2023-02-28(二)",
//     "week": "二",
//     "red": "10,11,18,19,23,31",
//     "blue": "03",
//     "blue2": "",
//     "sales": "393991274",
//     "poolmoney": "2109715322",
//     "content": "重庆1注,共1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "1",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "112",
//         "typemoney": "229101"
//       },
//       {
//         "type": 3,
//         "typenum": "1293",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "71044",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1321007",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11824049",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023021",
//     "detailsLink": "/c/2023/02/26/531575.shtml",
//     "videoLink": "/c/2023/02/26/531574.shtml",
//     "date": "2023-02-26(日)",
//     "week": "日",
//     "red": "02,05,06,19,21,27",
//     "blue": "04",
//     "blue2": "",
//     "sales": "430229092",
//     "poolmoney": "2042737116",
//     "content": "内蒙古2注,辽宁1注,浙江5注,福建5注,山东1注,湖南2注,四川2注,云南1注,陕西2注,共21注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "21",
//         "typemoney": "6115562"
//       },
//       {
//         "type": 2,
//         "typenum": "186",
//         "typemoney": "157438"
//       },
//       {
//         "type": 3,
//         "typenum": "1705",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "91746",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1688932",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10664945",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023020",
//     "detailsLink": "/c/2023/02/23/531353.shtml",
//     "videoLink": "/c/2023/02/23/531358.shtml",
//     "date": "2023-02-23(四)",
//     "week": "四",
//     "red": "01,12,17,18,26,27",
//     "blue": "05",
//     "blue2": "",
//     "sales": "394774502",
//     "poolmoney": "2083313411",
//     "content": "黑龙江1注,山东1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "92",
//         "typemoney": "284500"
//       },
//       {
//         "type": 3,
//         "typenum": "1530",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "74178",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1466070",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10931382",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023019",
//     "detailsLink": "/c/2023/02/21/530937.shtml",
//     "videoLink": "/c/2023/02/21/530936.shtml",
//     "date": "2023-02-21(二)",
//     "week": "二",
//     "red": "06,12,26,28,29,32",
//     "blue": "15",
//     "blue2": "",
//     "sales": "399695170",
//     "poolmoney": "2024791190",
//     "content": "天津2注,内蒙古1注,江苏1注,河南1注,陕西2注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "8309157"
//       },
//       {
//         "type": 2,
//         "typenum": "110",
//         "typemoney": "263228"
//       },
//       {
//         "type": 3,
//         "typenum": "1110",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "67015",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1241666",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10176090",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023018",
//     "detailsLink": "/c/2023/02/19/530522.shtml",
//     "videoLink": "/c/2023/02/19/530521.shtml",
//     "date": "2023-02-19(日)",
//     "week": "日",
//     "red": "10,12,17,19,25,31",
//     "blue": "13",
//     "blue2": "",
//     "sales": "428078014",
//     "poolmoney": "1996089903",
//     "content": "湖南1注,共1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "1",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "380",
//         "typemoney": "81771"
//       },
//       {
//         "type": 3,
//         "typenum": "1565",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "87584",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1747337",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9155933",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023017",
//     "detailsLink": "/c/2023/02/16/530400.shtml",
//     "videoLink": "/c/2023/02/16/530399.shtml",
//     "date": "2023-02-16(四)",
//     "week": "四",
//     "red": "05,11,18,20,26,28",
//     "blue": "12",
//     "blue2": "",
//     "sales": "385010210",
//     "poolmoney": "1912869860",
//     "content": "内蒙古1注,浙江1注,福建1注,湖北1注,广东1注,广西1注,共6注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "6",
//         "typemoney": "8173990"
//       },
//       {
//         "type": 2,
//         "typenum": "195",
//         "typemoney": "122076"
//       },
//       {
//         "type": 3,
//         "typenum": "1941",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "103778",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1752753",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9865832",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023016",
//     "detailsLink": "/c/2023/02/14/530084.shtml",
//     "videoLink": "/c/2023/02/14/530083.shtml",
//     "date": "2023-02-14(二)",
//     "week": "二",
//     "red": "14,16,19,23,28,30",
//     "blue": "03",
//     "blue2": "",
//     "sales": "363237418",
//     "poolmoney": "1890499018",
//     "content": "河南1注,贵州1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "79",
//         "typemoney": "296038"
//       },
//       {
//         "type": 3,
//         "typenum": "1179",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "66102",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1303555",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10929071",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023015",
//     "detailsLink": "/c/2023/02/12/529868.shtml",
//     "videoLink": "/c/2023/02/12/529867.shtml",
//     "date": "2023-02-12(日)",
//     "week": "日",
//     "red": "02,03,14,21,29,32",
//     "blue": "08",
//     "blue2": "",
//     "sales": "392727530",
//     "poolmoney": "1840337997",
//     "content": "北京1注,上海3注,江苏1注,重庆1注,河南1注,广东1注,广西1注,四川1注,共10注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "10",
//         "typemoney": "6277056"
//       },
//       {
//         "type": 2,
//         "typenum": "195",
//         "typemoney": "81862"
//       },
//       {
//         "type": 3,
//         "typenum": "2139",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "92167",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1586131",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "17574386",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023014",
//     "detailsLink": "/c/2023/02/09/529745.shtml",
//     "videoLink": "/c/2023/02/09/529744.shtml",
//     "date": "2023-02-09(四)",
//     "week": "四",
//     "red": "06,07,18,23,27,30",
//     "blue": "05",
//     "blue2": "",
//     "sales": "354854954",
//     "poolmoney": "1855218930",
//     "content": "内蒙古1注,辽宁1注,上海1注,江西1注,山东1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "8496068"
//       },
//       {
//         "type": 2,
//         "typenum": "147",
//         "typemoney": "148642"
//       },
//       {
//         "type": 3,
//         "typenum": "1600",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "74461",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1316652",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10723699",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023013",
//     "detailsLink": "/c/2023/02/07/529429.shtml",
//     "videoLink": "/c/2023/02/07/529428.shtml",
//     "date": "2023-02-07(二)",
//     "week": "二",
//     "red": "06,10,14,22,23,33",
//     "blue": "13",
//     "blue2": "",
//     "sales": "351959204",
//     "poolmoney": "1832147989",
//     "content": "安徽1注,贵州1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "81",
//         "typemoney": "313059"
//       },
//       {
//         "type": 3,
//         "typenum": "1431",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "56683",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1100696",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8878417",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023012",
//     "detailsLink": "/c/2023/02/05/529014.shtml",
//     "videoLink": "/c/2023/02/05/529015.shtml",
//     "date": "2023-02-05(日)",
//     "week": "日",
//     "red": "03,04,07,22,26,30",
//     "blue": "06",
//     "blue2": "",
//     "sales": "377681908",
//     "poolmoney": "1776074467",
//     "content": "天津2注,吉林1注,江苏5注,福建1注,江西1注,湖北1注,四川2注,甘肃1注,共14注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "14",
//         "typemoney": "6444594"
//       },
//       {
//         "type": 2,
//         "typenum": "270",
//         "typemoney": "93631"
//       },
//       {
//         "type": 3,
//         "typenum": "1774",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "86777",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1478716",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9295591",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023011",
//     "detailsLink": "/c/2023/02/02/528793.shtml",
//     "videoLink": "/c/2023/02/02/528792.shtml",
//     "date": "2023-02-02(四)",
//     "week": "四",
//     "red": "06,07,16,17,21,22",
//     "blue": "04",
//     "blue2": "",
//     "sales": "344777252",
//     "poolmoney": "1790457577",
//     "content": "河北1注,江苏1注,安徽2注,山东1注,河南1注,广东3注,广西1注,四川1注,宁夏1注,新疆1注,共13注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "13",
//         "typemoney": "6177691"
//       },
//       {
//         "type": 2,
//         "typenum": "252",
//         "typemoney": "75942"
//       },
//       {
//         "type": 3,
//         "typenum": "2493",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "108502",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1776280",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9089746",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023010",
//     "detailsLink": "/c/2023/01/31/528376.shtml",
//     "videoLink": "/c/2023/01/31/528375.shtml",
//     "date": "2023-01-31(二)",
//     "week": "二",
//     "red": "04,05,13,18,27,29",
//     "blue": "12",
//     "blue2": "",
//     "sales": "335698884",
//     "poolmoney": "1813355120",
//     "content": "北京2注,浙江1注,安徽1注,江西1注,湖南2注,陕西1注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "6879623"
//       },
//       {
//         "type": 2,
//         "typenum": "220",
//         "typemoney": "85437"
//       },
//       {
//         "type": 3,
//         "typenum": "1778",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82148",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1376420",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10755945",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023009",
//     "detailsLink": "/c/2023/01/29/528061.shtml",
//     "videoLink": "/c/2023/01/29/528060.shtml",
//     "date": "2023-01-29(日)",
//     "week": "日",
//     "red": "03,04,19,23,30,32",
//     "blue": "06",
//     "blue2": "",
//     "sales": "370445322",
//     "poolmoney": "1812003410",
//     "content": "浙江1注,湖北1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "225",
//         "typemoney": "116912"
//       },
//       {
//         "type": 3,
//         "typenum": "1077",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "68661",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1430319",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9006142",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023008",
//     "detailsLink": "/c/2023/01/17/527544.shtml",
//     "videoLink": "/c/2023/01/17/527543.shtml",
//     "date": "2023-01-17(二)",
//     "week": "二",
//     "red": "05,13,18,20,26,28",
//     "blue": "06",
//     "blue2": "",
//     "sales": "367864780",
//     "poolmoney": "1753087580",
//     "content": "河北1注,辽宁1注,江苏3注,浙江1注,山东1注,重庆1注,甘肃1注,共9注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "9",
//         "typemoney": "7109708"
//       },
//       {
//         "type": 2,
//         "typenum": "146",
//         "typemoney": "162563"
//       },
//       {
//         "type": 3,
//         "typenum": "1625",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "83325",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1494522",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9766329",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023007",
//     "detailsLink": "/c/2023/01/15/527329.shtml",
//     "videoLink": "/c/2023/01/15/527328.shtml",
//     "date": "2023-01-15(日)",
//     "week": "日",
//     "red": "05,06,09,22,25,31",
//     "blue": "03",
//     "blue2": "",
//     "sales": "357680590",
//     "poolmoney": "1745872298",
//     "content": "北京1注,湖北1注,青海1注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "160",
//         "typemoney": "134413"
//       },
//       {
//         "type": 3,
//         "typenum": "2448",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "81291",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1449914",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10227477",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023006",
//     "detailsLink": "/c/2023/01/12/527107.shtml",
//     "videoLink": "/c/2023/01/12/527106.shtml",
//     "date": "2023-01-12(四)",
//     "week": "四",
//     "red": "02,10,12,14,24,26",
//     "blue": "05",
//     "blue2": "",
//     "sales": "341187596",
//     "poolmoney": "1711353726",
//     "content": "内蒙古3注,上海1注,安徽2注,重庆1注,新疆6注,共13注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "13",
//         "typemoney": "6407426"
//       },
//       {
//         "type": 2,
//         "typenum": "109",
//         "typemoney": "209822"
//       },
//       {
//         "type": 3,
//         "typenum": "881",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "53803",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1075091",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10308938",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023005",
//     "detailsLink": "/c/2023/01/10/526890.shtml",
//     "videoLink": "/c/2023/01/10/526889.shtml",
//     "date": "2023-01-10(二)",
//     "week": "二",
//     "red": "02,06,08,13,14,19",
//     "blue": "16",
//     "blue2": "",
//     "sales": "331127174",
//     "poolmoney": "1726038229",
//     "content": "黑龙江1注,四川1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "153",
//         "typemoney": "163847"
//       },
//       {
//         "type": 3,
//         "typenum": "1285",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "66683",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1325860",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6305496",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023004",
//     "detailsLink": "/c/2023/01/08/526675.shtml",
//     "videoLink": "/c/2023/01/08/526674.shtml",
//     "date": "2023-01-08(日)",
//     "week": "日",
//     "red": "01,07,15,16,20,25",
//     "blue": "16",
//     "blue2": "",
//     "sales": "362777504",
//     "poolmoney": "1670832253",
//     "content": "上海1注,福建2注,重庆3注,广西2注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "7480475"
//       },
//       {
//         "type": 2,
//         "typenum": "166",
//         "typemoney": "149426"
//       },
//       {
//         "type": 3,
//         "typenum": "1332",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "67658",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1237527",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9727820",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023003",
//     "detailsLink": "/c/2023/01/05/526553.shtml",
//     "videoLink": "/c/2023/01/05/526552.shtml",
//     "date": "2023-01-05(四)",
//     "week": "四",
//     "red": "05,08,18,25,30,32",
//     "blue": "06",
//     "blue2": "",
//     "sales": "332514694",
//     "poolmoney": "1656261800",
//     "content": "上海1注,浙江1注,安徽1注,山东1注,广西1注,云南2注,青海1注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "7009723"
//       },
//       {
//         "type": 2,
//         "typenum": "112",
//         "typemoney": "179439"
//       },
//       {
//         "type": 3,
//         "typenum": "1765",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "75939",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1372769",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9666556",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023002",
//     "detailsLink": "/c/2023/01/03/526436.shtml",
//     "videoLink": "/c/2023/01/03/526435.shtml",
//     "date": "2023-01-03(二)",
//     "week": "二",
//     "red": "02,06,10,16,18,22",
//     "blue": "13",
//     "blue2": "",
//     "sales": "317440920",
//     "poolmoney": "1652047889",
//     "content": "上海4注,浙江2注,共6注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "6",
//         "typemoney": "8064366"
//       },
//       {
//         "type": 2,
//         "typenum": "164",
//         "typemoney": "140138"
//       },
//       {
//         "type": 3,
//         "typenum": "918",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "47658",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "929233",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8407428",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2023001",
//     "detailsLink": "/c/2023/01/01/526220.shtml",
//     "videoLink": "/c/2023/01/01/526219.shtml",
//     "date": "2023-01-01(日)",
//     "week": "日",
//     "red": "09,16,18,22,28,32",
//     "blue": "02",
//     "blue2": "",
//     "sales": "349018800",
//     "poolmoney": "1631485850",
//     "content": "辽宁1注,黑龙江2注,江苏1注,福建1注,云南2注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "7738461"
//       },
//       {
//         "type": 2,
//         "typenum": "135",
//         "typemoney": "177492"
//       },
//       {
//         "type": 3,
//         "typenum": "1124",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "59416",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1175366",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9632838",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022150",
//     "detailsLink": "/c/2022/12/29/525899.shtml",
//     "videoLink": "/c/2022/12/29/525898.shtml",
//     "date": "2022-12-29(四)",
//     "week": "四",
//     "red": "01,07,11,12,22,28",
//     "blue": "05",
//     "blue2": "",
//     "sales": "322732470",
//     "poolmoney": "1613770461",
//     "content": "河北2注,辽宁2注,湖北1注,四川1注,云南2注,陕西1注,共9注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "9",
//         "typemoney": "6598391"
//       },
//       {
//         "type": 2,
//         "typenum": "203",
//         "typemoney": "88580"
//       },
//       {
//         "type": 3,
//         "typenum": "2229",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "91402",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1498486",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9251810",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022149",
//     "detailsLink": "/c/2022/12/27/525682.shtml",
//     "videoLink": "/c/2022/12/27/525681.shtml",
//     "date": "2022-12-27(二)",
//     "week": "二",
//     "red": "02,22,26,29,32,33",
//     "blue": "14",
//     "blue2": "",
//     "sales": "305443962",
//     "poolmoney": "1619210281",
//     "content": "河北2注,辽宁1注,江苏1注,浙江1注,云南2注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "8014411"
//       },
//       {
//         "type": 2,
//         "typenum": "94",
//         "typemoney": "280596"
//       },
//       {
//         "type": 3,
//         "typenum": "647",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "40947",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "898006",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "5010538",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022148",
//     "detailsLink": "/c/2022/12/25/525367.shtml",
//     "videoLink": "/c/2022/12/25/525366.shtml",
//     "date": "2022-12-25(日)",
//     "week": "日",
//     "red": "02,15,16,17,21,31",
//     "blue": "14",
//     "blue2": "",
//     "sales": "328466772",
//     "poolmoney": "1596182866",
//     "content": "山西1注,吉林1注,浙江2注,福建1注,江西1注,湖南1注,广东1注,深圳1注,共9注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "9",
//         "typemoney": "7166343"
//       },
//       {
//         "type": 2,
//         "typenum": "72",
//         "typemoney": "338491"
//       },
//       {
//         "type": 3,
//         "typenum": "1256",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "52274",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1002986",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7842118",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022147",
//     "detailsLink": "/c/2022/12/22/525145.shtml",
//     "videoLink": "/c/2022/12/22/525144.shtml",
//     "date": "2022-12-22(四)",
//     "week": "四",
//     "red": "02,03,07,13,20,30",
//     "blue": "10",
//     "blue2": "",
//     "sales": "308727648",
//     "poolmoney": "1587565859",
//     "content": "北京1注,河北1注,浙江1注,福建2注,河南2注,湖北2注,广东2注,广西2注,四川1注,云南1注,新疆2注,共17注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "17",
//         "typemoney": "5619498"
//       },
//       {
//         "type": 2,
//         "typenum": "148",
//         "typemoney": "88948"
//       },
//       {
//         "type": 3,
//         "typenum": "2272",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "85489",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1367592",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12205894",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022146",
//     "detailsLink": "/c/2022/12/20/524928.shtml",
//     "videoLink": "/c/2022/12/20/524927.shtml",
//     "date": "2022-12-20(二)",
//     "week": "二",
//     "red": "06,07,13,18,26,31",
//     "blue": "06",
//     "blue2": "",
//     "sales": "319241960",
//     "poolmoney": "1643604313",
//     "content": "河北1注,辽宁1注,江苏1注,广东1注,广西1注,四川3注,云南1注,共9注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "9",
//         "typemoney": "6501941"
//       },
//       {
//         "type": 2,
//         "typenum": "391",
//         "typemoney": "43214"
//       },
//       {
//         "type": 3,
//         "typenum": "2008",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "80423",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1296127",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10754261",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022145",
//     "detailsLink": "/c/2022/12/18/524712.shtml",
//     "videoLink": "/c/2022/12/18/524711.shtml",
//     "date": "2022-12-18(日)",
//     "week": "日",
//     "red": "03,21,25,30,31,33",
//     "blue": "11",
//     "blue2": "",
//     "sales": "366333090",
//     "poolmoney": "1651431252",
//     "content": "浙江2注,广西1注,陕西1注,共4注。其中一等奖特别奖为：浙江1注,广西1注,陕西1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "3",
//     "mj1": "4366395",
//     "msg": "下期一等奖特别奖派奖金额：0元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "4",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "68",
//         "typemoney": "373743"
//       },
//       {
//         "type": 3,
//         "typenum": "1103",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "54214",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1095934",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10546749",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022144",
//     "detailsLink": "/c/2022/12/15/524591.shtml",
//     "videoLink": "/c/2022/12/15/524590.shtml",
//     "date": "2022-12-15(四)",
//     "week": "四",
//     "red": "07,20,22,23,31,32",
//     "blue": "05",
//     "blue2": "",
//     "sales": "400859910",
//     "poolmoney": "1615187506",
//     "content": "江苏2注,云南6注,陕西2注,甘肃1注,共11注。其中一等奖特别奖为：甘肃1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "1",
//     "mj1": "6900814",
//     "zj6": "8368482",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：13099186元。\n下期六等奖翻番奖奖金余额：0元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "6900814"
//       },
//       {
//         "type": 2,
//         "typenum": "65",
//         "typemoney": "402095"
//       },
//       {
//         "type": 3,
//         "typenum": "1382",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "69567",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1359477",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12044481",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022143",
//     "detailsLink": "/c/2022/12/13/524375.shtml",
//     "videoLink": "/c/2022/12/13/524374.shtml",
//     "date": "2022-12-13(二)",
//     "week": "二",
//     "red": "07,08,13,29,30,33",
//     "blue": "03",
//     "blue2": "",
//     "sales": "397641696",
//     "poolmoney": "1612687877",
//     "content": "辽宁1注,浙江2注,福建3注,江西3注,山东1注,广东1注,广西1注,海南1注,四川1注,云南1注,共15注。其中一等奖特别奖为：浙江2注,江西2注,山东1注,广东1注,海南1注,四川1注,云南1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "9",
//     "mj1": "2222222",
//     "zj6": "8874839",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：18201805元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "15",
//         "typemoney": "6243187"
//       },
//       {
//         "type": 2,
//         "typenum": "149",
//         "typemoney": "156441"
//       },
//       {
//         "type": 3,
//         "typenum": "1926",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "86457",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1543365",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12620463",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022142",
//     "detailsLink": "/c/2022/12/11/524159.shtml",
//     "videoLink": "/c/2022/12/11/524158.shtml",
//     "date": "2022-12-11(日)",
//     "week": "日",
//     "red": "01,03,13,16,21,27",
//     "blue": "03",
//     "blue2": "",
//     "sales": "440572602",
//     "poolmoney": "1636406391",
//     "content": "河北2注,江苏1注,浙江4注,山东2注,湖南2注,深圳1注,共12注。其中一等奖特别奖为：河北1注,江苏1注,浙江3注,湖南2注,深圳1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "8",
//     "mj1": "2500000",
//     "zj6": "18479566",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：62576000元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "5674258"
//       },
//       {
//         "type": 2,
//         "typenum": "122",
//         "typemoney": "82900"
//       },
//       {
//         "type": 3,
//         "typenum": "2874",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "123970",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2038813",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "24324191",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022141",
//     "detailsLink": "/c/2022/12/08/524037.shtml",
//     "videoLink": "/c/2022/12/08/524036.shtml",
//     "date": "2022-12-08(四)",
//     "week": "四",
//     "red": "05,12,13,17,20,27",
//     "blue": "14",
//     "blue2": "",
//     "sales": "415110854",
//     "poolmoney": "1674155872",
//     "content": "江苏2注,山东5注,湖北1注,广东11注,宁夏1注,新疆1注,共21注。其中一等奖特别奖为：湖北1注,广东11注,宁夏1注,新疆1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "14",
//     "mj1": "1428571",
//     "zj6": "4106260",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：154973830元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "21",
//         "typemoney": "6324820"
//       },
//       {
//         "type": 2,
//         "typenum": "135",
//         "typemoney": "257603"
//       },
//       {
//         "type": 3,
//         "typenum": "1455",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "65271",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1440468",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6494856",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022140",
//     "detailsLink": "/c/2022/12/06/523821.shtml",
//     "videoLink": "/c/2022/12/06/523820.shtml",
//     "date": "2022-12-06(二)",
//     "week": "二",
//     "red": "08,09,18,19,20,27",
//     "blue": "15",
//     "blue2": "",
//     "sales": "397499610",
//     "poolmoney": "1702647485",
//     "content": "河北1注,辽宁2注,江苏2注,浙江2注,安徽1注,重庆2注,广东2注,广西1注,云南1注,宁夏5注,共19注。其中一等奖特别奖为：辽宁1注,江苏2注,浙江2注,重庆2注,广东2注,云南1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "10",
//     "mj1": "2000000",
//     "zj6": "6913050",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：175505130元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "19",
//         "typemoney": "5889308"
//       },
//       {
//         "type": 2,
//         "typenum": "673",
//         "typemoney": "31383"
//       },
//       {
//         "type": 3,
//         "typenum": "3271",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "143842",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2143884",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10054059",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022139",
//     "detailsLink": "/c/2022/12/04/523605.shtml",
//     "videoLink": "/c/2022/12/04/523604.shtml",
//     "date": "2022-12-04(日)",
//     "week": "日",
//     "red": "06,07,09,16,17,19",
//     "blue": "14",
//     "blue2": "",
//     "sales": "421220444",
//     "poolmoney": "1751181135",
//     "content": "北京1注,河北1注,内蒙古1注,上海2注,江苏1注,山东2注,湖南1注,广东1注,四川1注,云南1注,共12注。其中一等奖特别奖为：北京1注,河北1注,上海1注,江苏1注,山东2注,广东1注,四川1注,云南1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "9",
//     "mj1": "2222222",
//     "zj6": "6000315",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：210070380元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "7006326"
//       },
//       {
//         "type": 2,
//         "typenum": "443",
//         "typemoney": "67934"
//       },
//       {
//         "type": 3,
//         "typenum": "1604",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "90315",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1827915",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8972855",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022138",
//     "detailsLink": "/c/2022/12/01/523383.shtml",
//     "videoLink": "/c/2022/12/01/523382.shtml",
//     "date": "2022-12-01(四)",
//     "week": "四",
//     "red": "02,14,19,21,25,28",
//     "blue": "11",
//     "blue2": "",
//     "sales": "382295872",
//     "poolmoney": "1744972360",
//     "content": "河北1注,新疆1注,共2注。其中一等奖特别奖为：河北1注,新疆1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "2",
//     "mj1": "10000000",
//     "zj6": "9436004",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：240071955元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "67",
//         "typemoney": "341021"
//       },
//       {
//         "type": 3,
//         "typenum": "1283",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "68779",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1244688",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "13175898",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022137",
//     "detailsLink": "/c/2022/11/29/523166.shtml",
//     "videoLink": "/c/2022/11/29/523165.shtml",
//     "date": "2022-11-29(二)",
//     "week": "二",
//     "red": "08,21,23,27,28,33",
//     "blue": "01",
//     "blue2": "",
//     "sales": "380398430",
//     "poolmoney": "1696427005",
//     "content": "辽宁1注,浙江1注,福建2注,山东1注,广东2注,云南1注,共8注。其中一等奖特别奖为：辽宁1注,浙江1注,福建2注,山东1注,广东2注,云南1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "8",
//     "mj1": "2500000",
//     "zj6": "8039169",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：287251975元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "7627191"
//       },
//       {
//         "type": 2,
//         "typenum": "160",
//         "typemoney": "164199"
//       },
//       {
//         "type": 3,
//         "typenum": "1117",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "57020",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1161733",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10987045",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022136",
//     "detailsLink": "/c/2022/11/27/522951.shtml",
//     "videoLink": "/c/2022/11/27/522950.shtml",
//     "date": "2022-11-27(日)",
//     "week": "日",
//     "red": "08,10,14,15,18,22",
//     "blue": "08",
//     "blue2": "",
//     "sales": "412826960",
//     "poolmoney": "1678628784",
//     "content": "河北1注,上海2注,浙江3注,河南2注,湖南2注,广西2注,四川3注,云南1注,甘肃1注,新疆2注,共19注。其中一等奖特别奖为：上海1注,浙江3注,河南1注,湖南2注,广西2注,云南1注,新疆1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "11",
//     "mj1": "1818181",
//     "zj6": "10499479",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：327447820元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "19",
//         "typemoney": "5761544"
//       },
//       {
//         "type": 2,
//         "typenum": "122",
//         "typemoney": "148251"
//       },
//       {
//         "type": 3,
//         "typenum": "2680",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "119185",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1960690",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "15690908",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022135",
//     "detailsLink": "/c/2022/11/24/522929.shtml",
//     "videoLink": "/c/2022/11/24/522928.shtml",
//     "date": "2022-11-24(四)",
//     "week": "四",
//     "red": "09,11,13,24,28,32",
//     "blue": "06",
//     "blue2": "",
//     "sales": "402652460",
//     "poolmoney": "1733838061",
//     "content": "山西1注,江苏3注,浙江1注,安徽4注,广东2注,云南1注,共12注。其中一等奖特别奖为：山西1注,江苏2注,浙江1注,安徽4注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "8",
//     "mj1": "2500000",
//     "zj6": "6012924",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：379945215元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "6964835"
//       },
//       {
//         "type": 2,
//         "typenum": "143",
//         "typemoney": "206101"
//       },
//       {
//         "type": 3,
//         "typenum": "1388",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "70079",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1413787",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9418387",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022134",
//     "detailsLink": "/c/2022/11/22/522612.shtml",
//     "videoLink": "/c/2022/11/22/522611.shtml",
//     "date": "2022-11-22(二)",
//     "week": "二",
//     "red": "01,05,14,17,24,31",
//     "blue": "14",
//     "blue2": "",
//     "sales": "404859714",
//     "poolmoney": "1728998506",
//     "content": "北京1注,河北1注,江苏5注,浙江1注,贵州1注,深圳1注,共10注。其中一等奖特别奖为：北京1注,江苏4注,深圳1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "6",
//     "mj1": "3333333",
//     "zj6": "6666250",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：410009835元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "10",
//         "typemoney": "7386723"
//       },
//       {
//         "type": 2,
//         "typenum": "90",
//         "typemoney": "331489"
//       },
//       {
//         "type": 3,
//         "typenum": "1304",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "69062",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1326086",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9611961",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022133",
//     "detailsLink": "/c/2022/11/20/522397.shtml",
//     "videoLink": "/c/2022/11/20/522396.shtml",
//     "date": "2022-11-20(日)",
//     "week": "日",
//     "red": "05,08,16,17,21,25",
//     "blue": "12",
//     "blue2": "",
//     "sales": "457083562",
//     "poolmoney": "1713363599",
//     "content": "浙江1注,山东2注,河南1注,湖北1注,湖南2注,四川1注,云南1注,陕西1注,深圳1注,共11注。其中一等奖特别奖为：浙江1注,湖北1注,湖南1注,四川1注,云南1注,陕西1注,深圳1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "7",
//     "mj1": "2857142",
//     "zj6": "6710770",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：443341085元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "7308534"
//       },
//       {
//         "type": 2,
//         "typenum": "241",
//         "typemoney": "131711"
//       },
//       {
//         "type": 3,
//         "typenum": "2035",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "103271",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1827118",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10394229",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022132",
//     "detailsLink": "/c/2022/11/17/522176.shtml",
//     "videoLink": "/c/2022/11/17/522175.shtml",
//     "date": "2022-11-17(四)",
//     "week": "四",
//     "red": "01,03,18,26,32,33",
//     "blue": "04",
//     "blue2": "",
//     "sales": "439981994",
//     "poolmoney": "1698530418",
//     "content": "浙江2注,湖北1注,云南1注,共4注。其中一等奖特别奖为：浙江2注,湖北1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "3",
//     "mj1": "6666666",
//     "zj6": "7748628",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：476894935元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "4",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "88",
//         "typemoney": "370814"
//       },
//       {
//         "type": 3,
//         "typenum": "1119",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "62745",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1299834",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11232052",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022131",
//     "detailsLink": "/c/2022/11/15/521959.shtml",
//     "videoLink": "/c/2022/11/15/521958.shtml",
//     "date": "2022-11-15(二)",
//     "week": "二",
//     "red": "03,05,10,13,19,29",
//     "blue": "06",
//     "blue2": "",
//     "sales": "425292626",
//     "poolmoney": "1640635486",
//     "content": "内蒙古2注,吉林2注,黑龙江1注,上海1注,江苏1注,江西1注,山东1注,河南1注,湖北1注,广东1注,四川2注,青海5注,共19注。其中一等奖特别奖为：内蒙古2注,吉林1注,上海1注,江苏1注,江西1注,湖北1注,四川2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "9",
//     "mj1": "2222222",
//     "zj6": "9128204",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：515638075元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "19",
//         "typemoney": "5876981"
//       },
//       {
//         "type": 2,
//         "typenum": "251",
//         "typemoney": "82981"
//       },
//       {
//         "type": 3,
//         "typenum": "2997",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "139749",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2199357",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "13229154",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022130",
//     "detailsLink": "/c/2022/11/13/521744.shtml",
//     "videoLink": "/c/2022/11/13/521743.shtml",
//     "date": "2022-11-13(日)",
//     "week": "日",
//     "red": "02,08,15,17,26,28",
//     "blue": "12",
//     "blue2": "",
//     "sales": "446023212",
//     "poolmoney": "1689813201",
//     "content": "山西1注,黑龙江3注,江苏5注,浙江6注,福建1注,江西1注,山东7注,重庆3注,河南2注,湖南2注,广东6注,广西1注,海南1注,四川3注,云南3注,甘肃1注,青海1注,宁夏2注,新疆1注,共50注。其中一等奖特别奖为：山西1注,江苏5注,浙江5注,福建1注,江西1注,山东6注,重庆2注,河南1注,湖南2注,广东2注,广西1注,海南1注,四川1注,云南2注,青海1注,宁夏2注,新疆1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "35",
//     "mj1": "571428",
//     "zj6": "11653732",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：561279095元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "50",
//         "typemoney": "5228012"
//       },
//       {
//         "type": 2,
//         "typenum": "542",
//         "typemoney": "26293"
//       },
//       {
//         "type": 3,
//         "typenum": "4856",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "188660",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "2707122",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "16435384",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022129",
//     "detailsLink": "/c/2022/11/10/521622.shtml",
//     "videoLink": "/c/2022/11/10/521621.shtml",
//     "date": "2022-11-10(四)",
//     "week": "四",
//     "red": "10,12,14,22,24,27",
//     "blue": "07",
//     "blue2": "",
//     "sales": "430007836",
//     "poolmoney": "1908461423",
//     "content": "辽宁2注,黑龙江1注,浙江1注,福建1注,贵州1注,陕西1注,共7注。其中一等奖特别奖为：辽宁1注,黑龙江1注,浙江1注,贵州1注,陕西1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "5",
//     "mj1": "4000000",
//     "zj6": "10201697",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：619547755元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "7828409"
//       },
//       {
//         "type": 2,
//         "typenum": "102",
//         "typemoney": "242633"
//       },
//       {
//         "type": 3,
//         "typenum": "2307",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "75666",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1404099",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "15122864",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022128",
//     "detailsLink": "/c/2022/11/08/521405.shtml",
//     "videoLink": "/c/2022/11/08/521404.shtml",
//     "date": "2022-11-08(二)",
//     "week": "二",
//     "red": "03,12,18,24,27,29",
//     "blue": "01",
//     "blue2": "",
//     "sales": "420999886",
//     "poolmoney": "1889014542",
//     "content": "黑龙江1注,浙江2注,广东2注,广西5注,四川1注,共11注。其中一等奖特别奖为：浙江2注,广东2注,广西5注,四川1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "10",
//     "mj1": "2000000",
//     "zj6": "5509359",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：670556240元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "7471238"
//       },
//       {
//         "type": 2,
//         "typenum": "210",
//         "typemoney": "161807"
//       },
//       {
//         "type": 3,
//         "typenum": "988",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "63878",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1282386",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8361674",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022127",
//     "detailsLink": "/c/2022/11/06/521190.shtml",
//     "videoLink": "/c/2022/11/06/521189.shtml",
//     "date": "2022-11-06(日)",
//     "week": "日",
//     "red": "03,04,09,10,29,33",
//     "blue": "13",
//     "blue2": "",
//     "sales": "455409958",
//     "poolmoney": "1869259580",
//     "content": "内蒙古1注,辽宁1注,浙江3注,共5注。其中一等奖特别奖为：浙江2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "2",
//     "mj1": "10000000",
//     "zj6": "5181537",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：698103035元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "178",
//         "typemoney": "210151"
//       },
//       {
//         "type": 3,
//         "typenum": "1118",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "69270",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1489958",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8283087",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022126",
//     "detailsLink": "/c/2022/11/03/520868.shtml",
//     "videoLink": "/c/2022/11/03/520867.shtml",
//     "date": "2022-11-03(四)",
//     "week": "四",
//     "red": "01,13,15,17,26,33",
//     "blue": "13",
//     "blue2": "",
//     "sales": "436137344",
//     "poolmoney": "1807038683",
//     "content": "内蒙古1注,浙江1注,四川2注,陕西2注,共6注。其中一等奖特别奖为：浙江1注,四川2注,陕西2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "5",
//     "mj1": "4000000",
//     "zj6": "6612435",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：724010720元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "6",
//         "typemoney": "9507372"
//       },
//       {
//         "type": 2,
//         "typenum": "151",
//         "typemoney": "223876"
//       },
//       {
//         "type": 3,
//         "typenum": "1313",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "63365",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1314147",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9746531",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022125",
//     "detailsLink": "/c/2022/11/01/520651.shtml",
//     "videoLink": "/c/2022/11/01/520654.shtml",
//     "date": "2022-11-01(二)",
//     "week": "二",
//     "red": "02,03,07,12,20,31",
//     "blue": "16",
//     "blue2": "",
//     "sales": "429659904",
//     "poolmoney": "1762667038",
//     "content": "山西1注,山东2注,湖北1注,云南2注,陕西1注,共7注。其中一等奖特别奖为：山西1注,山东1注,云南2注,陕西1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "zj1": "5",
//     "mj1": "4000000",
//     "zj6": "8585421",
//     "mj6": "5",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n下期六等奖翻番奖奖金余额：757072895元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "7965155"
//       },
//       {
//         "type": 2,
//         "typenum": "231",
//         "typemoney": "112316"
//       },
//       {
//         "type": 3,
//         "typenum": "2009",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "107367",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1746982",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12356541",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022124",
//     "detailsLink": "/c/2022/10/30/520437.shtml",
//     "videoLink": "/c/2022/10/30/520436.shtml",
//     "date": "2022-10-30(日)",
//     "week": "日",
//     "red": "05,10,13,18,24,26",
//     "blue": "01",
//     "blue2": "",
//     "sales": "383396494",
//     "poolmoney": "1740587803",
//     "content": "北京1注,安徽1注,海南1注,四川1注,共4注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "下期一等奖特别奖派奖金额：20000000元。\n\n下期六等奖翻番奖奖金余额：800000000元。",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "4",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "124",
//         "typemoney": "234571"
//       },
//       {
//         "type": 3,
//         "typenum": "1161",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "62669",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1294124",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8511715",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022123",
//     "detailsLink": "/c/2022/10/27/520215.shtml",
//     "videoLink": "/c/2022/10/27/520214.shtml",
//     "date": "2022-10-27(四)",
//     "week": "四",
//     "red": "10,13,16,20,21,25",
//     "blue": "05",
//     "blue2": "",
//     "sales": "360850820",
//     "poolmoney": "1693327054",
//     "content": "天津1注,内蒙古1注,江苏2注,安徽1注,河南1注,广东1注,广西1注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "7557633"
//       },
//       {
//         "type": 2,
//         "typenum": "637",
//         "typemoney": "40151"
//       },
//       {
//         "type": 3,
//         "typenum": "1247",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "93856",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1669819",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7060237",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022122",
//     "detailsLink": "/c/2022/10/25/519798.shtml",
//     "videoLink": "/c/2022/10/25/519797.shtml",
//     "date": "2022-10-25(二)",
//     "week": "二",
//     "red": "06,08,17,19,24,28",
//     "blue": "05",
//     "blue2": "",
//     "sales": "350001646",
//     "poolmoney": "1677059125",
//     "content": "北京2注,河北2注,山西1注,辽宁1注,浙江3注,安徽1注,山东3注,湖北3注,湖南1注,四川8注,云南1注,共26注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "26",
//         "typemoney": "5519812"
//       },
//       {
//         "type": 2,
//         "typenum": "214",
//         "typemoney": "78943"
//       },
//       {
//         "type": 3,
//         "typenum": "2763",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "104504",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1750138",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11446800",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022121",
//     "detailsLink": "/c/2022/10/23/519279.shtml",
//     "videoLink": "/c/2022/10/23/519278.shtml",
//     "date": "2022-10-23(日)",
//     "week": "日",
//     "red": "12,17,22,27,30,31",
//     "blue": "02",
//     "blue2": "",
//     "sales": "380066114",
//     "poolmoney": "1769892531",
//     "content": "河北1注,山东1注,湖南1注,云南5注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "8069743"
//       },
//       {
//         "type": 2,
//         "typenum": "102",
//         "typemoney": "300955"
//       },
//       {
//         "type": 3,
//         "typenum": "789",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "50976",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1106522",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7963048",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022120",
//     "detailsLink": "/c/2022/10/20/518951.shtml",
//     "videoLink": "/c/2022/10/20/518950.shtml",
//     "date": "2022-10-20(四)",
//     "week": "四",
//     "red": "02,15,19,26,27,29",
//     "blue": "02",
//     "blue2": "",
//     "sales": "355500194",
//     "poolmoney": "1742358177",
//     "content": "上海1注,安徽1注,河南1注,广西40注,共43注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "43",
//         "typemoney": "5486128"
//       },
//       {
//         "type": 2,
//         "typenum": "288",
//         "typemoney": "90727"
//       },
//       {
//         "type": 3,
//         "typenum": "1042",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "58726",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1132983",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8695309",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022119",
//     "detailsLink": "/c/2022/10/18/518530.shtml",
//     "videoLink": "/c/2022/10/18/518529.shtml",
//     "date": "2022-10-18(二)",
//     "week": "二",
//     "red": "02,05,15,18,26,27",
//     "blue": "04",
//     "blue2": "",
//     "sales": "341495720",
//     "poolmoney": "1899873541",
//     "content": "山西2注,黑龙江1注,浙江1注,福建2注,湖北1注,广东2注,云南1注,甘肃1注,深圳1注,共12注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "6494901"
//       },
//       {
//         "type": 2,
//         "typenum": "309",
//         "typemoney": "72568"
//       },
//       {
//         "type": 3,
//         "typenum": "1455",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "79692",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1409223",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8648633",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022118",
//     "detailsLink": "/c/2022/10/16/518211.shtml",
//     "videoLink": "/c/2022/10/16/518210.shtml",
//     "date": "2022-10-16(日)",
//     "week": "日",
//     "red": "02,06,07,11,14,33",
//     "blue": "08",
//     "blue2": "",
//     "sales": "374309728",
//     "poolmoney": "1910541782",
//     "content": "江苏1注,福建1注,重庆2注,云南1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "7499223"
//       },
//       {
//         "type": 2,
//         "typenum": "173",
//         "typemoney": "90289"
//       },
//       {
//         "type": 3,
//         "typenum": "1730",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "81876",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1455172",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "16962851",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022117",
//     "detailsLink": "/c/2022/10/13/517782.shtml",
//     "videoLink": "/c/2022/10/13/517781.shtml",
//     "date": "2022-10-13(四)",
//     "week": "四",
//     "red": "04,13,17,18,28,29",
//     "blue": "06",
//     "blue2": "",
//     "sales": "345578024",
//     "poolmoney": "1901177457",
//     "content": "江苏2注,浙江1注,福建1注,湖南1注,广东1注,贵州1注,陕西2注,甘肃1注,宁夏1注,共11注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "6083031"
//       },
//       {
//         "type": 2,
//         "typenum": "166",
//         "typemoney": "89708"
//       },
//       {
//         "type": 3,
//         "typenum": "2284",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "112037",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1760031",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12581357",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022116",
//     "detailsLink": "/c/2022/10/11/517562.shtml",
//     "videoLink": "/c/2022/10/11/517561.shtml",
//     "date": "2022-10-11(二)",
//     "week": "二",
//     "red": "08,14,26,27,30,33",
//     "blue": "01",
//     "blue2": "",
//     "sales": "337975208",
//     "poolmoney": "1923415752",
//     "content": "江苏1注,共1注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "1",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "93",
//         "typemoney": "300121"
//       },
//       {
//         "type": 3,
//         "typenum": "977",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "45197",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "979325",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6439820",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022115",
//     "detailsLink": "/c/2022/10/09/517243.shtml",
//     "videoLink": "/c/2022/10/09/517242.shtml",
//     "date": "2022-10-09(日)",
//     "week": "日",
//     "red": "06,07,18,20,27,29",
//     "blue": "09",
//     "blue2": "",
//     "sales": "359461828",
//     "poolmoney": "1849681926",
//     "content": "辽宁1注,吉林1注,浙江2注,安徽1注,福建1注,山东1注,河南2注,广东12注,四川10注,贵州1注,云南1注,共33注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "33",
//         "typemoney": "5308918"
//       },
//       {
//         "type": 2,
//         "typenum": "169",
//         "typemoney": "75401"
//       },
//       {
//         "type": 3,
//         "typenum": "2892",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "119122",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1943075",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "14646730",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022114",
//     "detailsLink": "/c/2022/10/06/516915.shtml",
//     "videoLink": "/c/2022/10/06/516914.shtml",
//     "date": "2022-10-06(四)",
//     "week": "四",
//     "red": "01,05,15,19,26,29",
//     "blue": "13",
//     "blue2": "",
//     "sales": "347069064",
//     "poolmoney": "1986647604",
//     "content": "河北3注,黑龙江1注,上海1注,福建1注,山东1注,广东2注,云南2注,青海1注,共12注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "6667026"
//       },
//       {
//         "type": 2,
//         "typenum": "241",
//         "typemoney": "103756"
//       },
//       {
//         "type": 3,
//         "typenum": "1227",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "66692",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1292188",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8020200",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022113",
//     "detailsLink": "/c/2022/09/29/516785.shtml",
//     "videoLink": "/c/2022/09/29/516784.shtml",
//     "date": "2022-09-29(四)",
//     "week": "四",
//     "red": "13,14,20,24,27,29",
//     "blue": "02",
//     "blue2": "",
//     "sales": "363604180",
//     "poolmoney": "1991635746",
//     "content": "云南1注,甘肃1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "84",
//         "typemoney": "294642"
//       },
//       {
//         "type": 3,
//         "typenum": "1036",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "61319",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1211708",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10335443",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022112",
//     "detailsLink": "/c/2022/09/27/516364.shtml",
//     "videoLink": "/c/2022/09/27/516363.shtml",
//     "date": "2022-09-27(二)",
//     "week": "二",
//     "red": "03,05,08,17,25,31",
//     "blue": "01",
//     "blue2": "",
//     "sales": "348893862",
//     "poolmoney": "1937385782",
//     "content": "安徽1注,湖北1注,广西2注,陕西1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "9412037"
//       },
//       {
//         "type": 2,
//         "typenum": "169",
//         "typemoney": "163167"
//       },
//       {
//         "type": 3,
//         "typenum": "1073",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "65301",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1392200",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6091173",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022111",
//     "detailsLink": "/c/2022/09/25/516145.shtml",
//     "videoLink": "/c/2022/09/25/516144.shtml",
//     "date": "2022-09-25(日)",
//     "week": "日",
//     "red": "02,10,11,13,28,31",
//     "blue": "01",
//     "blue2": "",
//     "sales": "385923798",
//     "poolmoney": "1901720272",
//     "content": "上海1注,安徽1注,湖北1注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "160",
//         "typemoney": "198653"
//       },
//       {
//         "type": 3,
//         "typenum": "953",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "51921",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1075858",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7592578",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022110",
//     "detailsLink": "/c/2022/09/22/516017.shtml",
//     "videoLink": "/c/2022/09/22/516016.shtml",
//     "date": "2022-09-22(四)",
//     "week": "四",
//     "red": "09,13,15,18,20,28",
//     "blue": "15",
//     "blue2": "",
//     "sales": "352346658",
//     "poolmoney": "1836366779",
//     "content": "上海1注,浙江1注,江西2注,山东2注,贵州1注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "8127543"
//       },
//       {
//         "type": 2,
//         "typenum": "237",
//         "typemoney": "115468"
//       },
//       {
//         "type": 3,
//         "typenum": "1517",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "71846",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1358309",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6136513",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022109",
//     "detailsLink": "/c/2022/09/20/515697.shtml",
//     "videoLink": "/c/2022/09/20/515696.shtml",
//     "date": "2022-09-20(二)",
//     "week": "二",
//     "red": "04,11,13,19,22,33",
//     "blue": "11",
//     "blue2": "",
//     "sales": "349805376",
//     "poolmoney": "1811161575",
//     "content": "吉林2注,浙江2注,四川1注,共5注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "5",
//         "typemoney": "8345394"
//       },
//       {
//         "type": 2,
//         "typenum": "78",
//         "typemoney": "268060"
//       },
//       {
//         "type": 3,
//         "typenum": "1475",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "75543",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1271773",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11103687",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022108",
//     "detailsLink": "/c/2022/09/18/515477.shtml",
//     "videoLink": "/c/2022/09/18/515476.shtml",
//     "date": "2022-09-18(日)",
//     "week": "日",
//     "red": "01,07,13,17,18,31",
//     "blue": "15",
//     "blue2": "",
//     "sales": "379260702",
//     "poolmoney": "1790162397",
//     "content": "河北2注,上海1注,江苏2注,浙江1注,山东4注,广东1注,四川1注,云南1注,共13注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "13",
//         "typemoney": "6708669"
//       },
//       {
//         "type": 2,
//         "typenum": "269",
//         "typemoney": "103218"
//       },
//       {
//         "type": 3,
//         "typenum": "1547",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82351",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1534591",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7663429",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022107",
//     "detailsLink": "/c/2022/09/15/515348.shtml",
//     "videoLink": "/c/2022/09/15/515347.shtml",
//     "date": "2022-09-15(四)",
//     "week": "四",
//     "red": "03,09,11,15,19,28",
//     "blue": "16",
//     "blue2": "",
//     "sales": "342747048",
//     "poolmoney": "1794077479",
//     "content": "山西1注,内蒙古1注,浙江2注,重庆2注,河南1注,广东1注,宁夏1注,共9注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "9",
//         "typemoney": "6545730"
//       },
//       {
//         "type": 2,
//         "typenum": "139",
//         "typemoney": "125104"
//       },
//       {
//         "type": 3,
//         "typenum": "2144",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "100396",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1743516",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10888360",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022106",
//     "detailsLink": "/c/2022/09/13/514529.shtml",
//     "videoLink": "/c/2022/09/13/514528.shtml",
//     "date": "2022-09-13(二)",
//     "week": "二",
//     "red": "17,20,22,23,24,31",
//     "blue": "01",
//     "blue2": "",
//     "sales": "336123528",
//     "poolmoney": "1800820638",
//     "content": "上海1注,山东1注,湖北1注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "50",
//         "typemoney": "555486"
//       },
//       {
//         "type": 3,
//         "typenum": "769",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "42089",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "937948",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "6699781",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022105",
//     "detailsLink": "/c/2022/09/11/514309.shtml",
//     "videoLink": "/c/2022/09/11/514308.shtml",
//     "date": "2022-09-11(日)",
//     "week": "日",
//     "red": "06,12,13,15,21,23",
//     "blue": "15",
//     "blue2": "",
//     "sales": "357410590",
//     "poolmoney": "1747497631",
//     "content": "河北2注,山东1注,广东1注,共4注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "4",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "85",
//         "typemoney": "325048"
//       },
//       {
//         "type": 3,
//         "typenum": "988",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "52348",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1100730",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8034750",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022104",
//     "detailsLink": "/c/2022/09/08/514080.shtml",
//     "videoLink": "/c/2022/09/08/514079.shtml",
//     "date": "2022-09-08(四)",
//     "week": "四",
//     "red": "01,08,19,25,26,31",
//     "blue": "01",
//     "blue2": "",
//     "sales": "337087306",
//     "poolmoney": "1704610228",
//     "content": "河北1注,山西1注,黑龙江1注,上海2注,江西1注,重庆5注,河南1注,广东2注,海南1注,云南2注,陕西1注,共18注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "18",
//         "typemoney": "5821410"
//       },
//       {
//         "type": 2,
//         "typenum": "214",
//         "typemoney": "86363"
//       },
//       {
//         "type": 3,
//         "typenum": "2358",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "96467",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1546479",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9882728",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022103",
//     "detailsLink": "/c/2022/09/06/513661.shtml",
//     "videoLink": "/c/2022/09/06/513660.shtml",
//     "date": "2022-09-06(二)",
//     "week": "二",
//     "red": "06,09,12,14,20,28",
//     "blue": "10",
//     "blue2": "",
//     "sales": "331343836",
//     "poolmoney": "1753950406",
//     "content": "北京1注,河北1注,辽宁1注,上海1注,江苏2注,湖北1注,广东1注,四川1注,贵州1注,深圳2注,共12注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "12",
//         "typemoney": "6266348"
//       },
//       {
//         "type": 2,
//         "typenum": "146",
//         "typemoney": "130104"
//       },
//       {
//         "type": 3,
//         "typenum": "1688",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "82838",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1431184",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10086828",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022102",
//     "detailsLink": "/c/2022/09/04/513341.shtml",
//     "videoLink": "/c/2022/09/04/513340.shtml",
//     "date": "2022-09-04(日)",
//     "week": "日",
//     "red": "09,10,12,18,29,32",
//     "blue": "14",
//     "blue2": "",
//     "sales": "360805992",
//     "poolmoney": "1772160912",
//     "content": "辽宁2注,黑龙江1注,上海1注,四川1注,贵州1注,共6注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "6",
//         "typemoney": "8618279"
//       },
//       {
//         "type": 2,
//         "typenum": "137",
//         "typemoney": "198080"
//       },
//       {
//         "type": 3,
//         "typenum": "887",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "64340",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1413562",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7716388",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022101",
//     "detailsLink": "/c/2022/09/01/513113.shtml",
//     "videoLink": "/c/2022/09/01/513112.shtml",
//     "date": "2022-09-01(四)",
//     "week": "四",
//     "red": "04,16,18,19,27,28",
//     "blue": "04",
//     "blue2": "",
//     "sales": "342584116",
//     "poolmoney": "1742459306",
//     "content": "辽宁1注,江苏20注,福建1注,广东3注,四川6注,云南1注,新疆1注,深圳1注,共34注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "34",
//         "typemoney": "5458579"
//       },
//       {
//         "type": 2,
//         "typenum": "134",
//         "typemoney": "145444"
//       },
//       {
//         "type": 3,
//         "typenum": "1919",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "87840",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1529875",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "10256790",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022100",
//     "detailsLink": "/c/2022/08/30/512693.shtml",
//     "videoLink": "/c/2022/08/30/512692.shtml",
//     "date": "2022-08-30(二)",
//     "week": "二",
//     "red": "02,06,07,15,20,21",
//     "blue": "15",
//     "blue2": "",
//     "sales": "338953236",
//     "poolmoney": "1869582122",
//     "content": "江苏1注,福建5注,山东1注,重庆2注,湖北2注,共11注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "11",
//         "typemoney": "6875089"
//       },
//       {
//         "type": 2,
//         "typenum": "106",
//         "typemoney": "243230"
//       },
//       {
//         "type": 3,
//         "typenum": "826",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "56800",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1118203",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7587423",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022099",
//     "detailsLink": "/c/2022/08/28/512373.shtml",
//     "videoLink": "/c/2022/08/28/512372.shtml",
//     "date": "2022-08-28(日)",
//     "week": "日",
//     "red": "01,11,23,24,26,32",
//     "blue": "15",
//     "blue2": "",
//     "sales": "368635154",
//     "poolmoney": "1867860655",
//     "content": "内蒙古2注,上海1注,江苏1注,山东2注,四川1注,陕西1注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "7480623"
//       },
//       {
//         "type": 2,
//         "typenum": "256",
//         "typemoney": "96899"
//       },
//       {
//         "type": 3,
//         "typenum": "1769",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "92541",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1564632",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8388954",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022098",
//     "detailsLink": "/c/2022/08/25/512244.shtml",
//     "videoLink": "/c/2022/08/25/512243.shtml",
//     "date": "2022-08-25(四)",
//     "week": "四",
//     "red": "02,03,04,06,21,33",
//     "blue": "05",
//     "blue2": "",
//     "sales": "339839938",
//     "poolmoney": "1853286941",
//     "content": "河北1注,辽宁1注,黑龙江1注,江苏3注,浙江1注,山东3注,湖南1注,广东1注,云南1注,陕西1注,共14注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "14",
//         "typemoney": "6203690"
//       },
//       {
//         "type": 2,
//         "typenum": "34",
//         "typemoney": "619546"
//       },
//       {
//         "type": 3,
//         "typenum": "907",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "52423",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1030401",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11750727",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022097",
//     "detailsLink": "/c/2022/08/23/512025.shtml",
//     "videoLink": "/c/2022/08/23/512024.shtml",
//     "date": "2022-08-23(二)",
//     "week": "二",
//     "red": "04,05,10,13,30,31",
//     "blue": "14",
//     "blue2": "",
//     "sales": "339168020",
//     "poolmoney": "1876944863",
//     "content": "黑龙江1注,四川1注,陕西1注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "65",
//         "typemoney": "421826"
//       },
//       {
//         "type": 3,
//         "typenum": "917",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "44797",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "963509",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "7034400",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022096",
//     "detailsLink": "/c/2022/08/21/511805.shtml",
//     "videoLink": "/c/2022/08/21/511804.shtml",
//     "date": "2022-08-21(日)",
//     "week": "日",
//     "red": "03,16,17,19,25,33",
//     "blue": "07",
//     "blue2": "",
//     "sales": "374401638",
//     "poolmoney": "1824688735",
//     "content": "北京46注,浙江1注,山东1注,甘肃1注,深圳1注,共50注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "50",
//         "typemoney": "5337053"
//       },
//       {
//         "type": 2,
//         "typenum": "94",
//         "typemoney": "224104"
//       },
//       {
//         "type": 3,
//         "typenum": "1441",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "80233",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1530495",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12703794",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022095",
//     "detailsLink": "/c/2022/08/18/511476.shtml",
//     "videoLink": "/c/2022/08/18/511475.shtml",
//     "date": "2022-08-18(四)",
//     "week": "四",
//     "red": "04,13,14,18,20,28",
//     "blue": "08",
//     "blue2": "",
//     "sales": "339954958",
//     "poolmoney": "2028343930",
//     "content": "辽宁1注,黑龙江1注,上海2注,浙江1注,广东1注,云南1注,共7注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "7",
//         "typemoney": "7040114"
//       },
//       {
//         "type": 2,
//         "typenum": "71",
//         "typemoney": "251422"
//       },
//       {
//         "type": 3,
//         "typenum": "1639",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "80997",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1334307",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "12142889",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022094",
//     "detailsLink": "/c/2022/08/16/511257.shtml",
//     "videoLink": "/c/2022/08/16/511256.shtml",
//     "date": "2022-08-16(二)",
//     "week": "二",
//     "red": "06,11,13,16,19,31",
//     "blue": "02",
//     "blue2": "",
//     "sales": "333751422",
//     "poolmoney": "2024071723",
//     "content": "河北1注,广东1注,深圳1注,共3注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "3",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "186",
//         "typemoney": "111576"
//       },
//       {
//         "type": 3,
//         "typenum": "1819",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "84113",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1473833",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "8701425",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022093",
//     "detailsLink": "/c/2022/08/14/510937.shtml",
//     "videoLink": "/c/2022/08/14/510936.shtml",
//     "date": "2022-08-14(日)",
//     "week": "日",
//     "red": "21,22,24,28,29,32",
//     "blue": "14",
//     "blue2": "",
//     "sales": "363673578",
//     "poolmoney": "1991811868",
//     "content": "山西1注,福建1注,共2注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "2",
//         "typemoney": "10000000"
//       },
//       {
//         "type": 2,
//         "typenum": "58",
//         "typemoney": "481689"
//       },
//       {
//         "type": 3,
//         "typenum": "758",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "41819",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "899953",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9362155",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022092",
//     "detailsLink": "/c/2022/08/11/510808.shtml",
//     "videoLink": "/c/2022/08/11/510807.shtml",
//     "date": "2022-08-11(四)",
//     "week": "四",
//     "red": "07,10,16,20,21,27",
//     "blue": "11",
//     "blue2": "",
//     "sales": "337222664",
//     "poolmoney": "1927997908",
//     "content": "北京10注,江苏1注,福建1注,湖北5注,广东1注,四川2注,共20注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "20",
//         "typemoney": "5805294"
//       },
//       {
//         "type": 2,
//         "typenum": "245",
//         "typemoney": "82172"
//       },
//       {
//         "type": 3,
//         "typenum": "2129",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "83814",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1454503",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "9402958",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   },
//   {
//     "name": "双色球",
//     "code": "2022091",
//     "detailsLink": "/c/2022/08/09/510489.shtml",
//     "videoLink": "/c/2022/08/09/510488.shtml",
//     "date": "2022-08-09(二)",
//     "week": "二",
//     "red": "08,18,20,22,24,28",
//     "blue": "10",
//     "blue2": "",
//     "sales": "335981918",
//     "poolmoney": "1983706692",
//     "content": "北京2注,辽宁1注,江苏1注,江西1注,湖北1注,广东1注,四川1注,共8注。",
//     "addmoney": "",
//     "addmoney2": "",
//     "msg": "",
//     "z2add": "",
//     "m2add": "",
//     "prizegrades": [
//       {
//         "type": 1,
//         "typenum": "8",
//         "typemoney": "6721485"
//       },
//       {
//         "type": 2,
//         "typenum": "244",
//         "typemoney": "70552"
//       },
//       {
//         "type": 3,
//         "typenum": "2249",
//         "typemoney": "3000"
//       },
//       {
//         "type": 4,
//         "typenum": "85307",
//         "typemoney": "200"
//       },
//       {
//         "type": 5,
//         "typenum": "1436874",
//         "typemoney": "10"
//       },
//       {
//         "type": 6,
//         "typenum": "11518915",
//         "typemoney": "5"
//       },
//       {
//         "type": 7,
//         "typenum": "",
//         "typemoney": ""
//       }
//     ]
//   }
// ]




// let temp = []
// list.forEach((item) => {
//   const a = `${item.red}+${item.blue}`
//   temp.push(a)
// })
// console.log(temp)

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
