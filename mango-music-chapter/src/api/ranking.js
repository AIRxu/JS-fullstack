// export default 直接引入就可以 
// 不加 default就需要用{}结构
import jsonp from './jsonp';  // 走一个真正的请求 QQ音乐  跨域请求的解决方案
import { URL, PARAM, OPTION } from './config';
// 获取排行榜列表的数据
export function getRankingList() {
  const data = Object.assign({}, PARAM, {
    g_tk: 5381,
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: new Date().getTime()
  });
  // console.log(data);
  return jsonp(URL.rankingList, data, OPTION)
}

// export function getRankingInfo() {

// }