import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import Loading from '../../common/loading/Loading';
import LazyLoad, { forceCheck } from 'react-lazyload';  //图片延迟加载，适用于页面中图片较多
import Scroll from '@/common/scroll/Scroll'

// 1. 路由
// 2. redux
// 3. 切页面 + js
// 4. 生命周期 + api请求
// 5. 公共组件

// 所有的数据请求都放到api目录下
import { getNewAlbum } from '../../api/recommend';

// 1. 轮播图  swiper
// 2. 加入 swiper 功能
// 数据 {src, ilink}

class Recommend extends React.Component {
  constructor() {
    super()
    // 这个组件的 state ，就属于这个组件，不属于其他组件，如果这里的数据其他组件也需要用到，就需要放到redux里面
    // 1. 用假数据将页面做出来
    // 2. 未来再改成接口
    this.state = {
      refreshScroll: false,
      newAlbums: [],  // 数据驱动的界面
      loading: true,
      title: '正在加载',
      sliderList: [{
        id: 1,
        picUrl: 'https://inews.gtimg.com/newsapp_bt/0/13466201568/641',
        linkUrl: 'https://xw.qq.com/cmsid/20210428A04I7K00'
      },
      {
        id: 2,
        picUrl: 'https://inews.gtimg.com/newsapp_bt/0/13527685926/641',
        linkUrl: 'https://xw.qq.com/cmsid/20210428A04I7K00'
      },
      {
        id: 3,
        picUrl: 'https://inews.gtimg.com/newsapp_bt/0/13527685921/641',
        linkUrl: 'https://xw.qq.com/cmsid/20210428A04I7K00'
      }
      ]  // 轮播图的数据 没必要去redux
    }
  }
  componentDidUpdate() {
    //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
        this.bScroll.refresh();
    }
  }
  componentDidMount() {
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })
    // 获取最新专辑 功能的封装
    getNewAlbum()  //promise
      .then(res => {
        this.setState({
          loading: false,
          newAlbums: res.albumlib.data.list
        }), () => {
          this.setState({
            refreshScroll: true
          })
        }
        console.log(res);
      })
    // setTimeout(() => {
    //   this.setState({
    //     loading:false
    //   })
    // }, 3000)
  }
  render() {
    // 切页面
    // console.log(this.state.newAlbums);
    let albums = this.state.newAlbums.map(item => (
      <div className="album-wrapper" key={item.album_id}>
        <div className="left">
          <LazyLoad height={60}>
            <img src={item.img} alt={item.name} width="100%" height="100%" />
          </LazyLoad>
        </div>
        <div className="right">
          <div className="album-name">
            {item.album_name}
          </div>
          <div className="singer-name">
            {item.singers[0].singer_name}
          </div>
          <div className="public-time">
            {item.public_time}
          </div>
        </div>
      </div>
    ))
    return (
      <div className="music-recommend">
        <Scroll refresh={this.state.refreshScroll}
        onScroll= {(e) => {
          console.log(e);
          forceCheck();
        }}
        >
          <div className="slider-container">
            <div className="swiper-wrapper">
              {
                this.state.sliderList.map(slider => {
                  return (
                    <div className="swiper-slide" key={slider.id}>
                      <a href={slider.linkUrl} className="slider-nav">
                        <img src={slider.picUrl} alt="" width="100%" height="100%" />
                      </a>
                    </div>
                  );
                })
              }
            </div>
            <div className="swiper-pangination"></div>
          </div>

          <div className="album-container">
            <h1 className="title">最新专辑</h1>
            <div className="album-list">
              {albums}
            </div>
          </div>
        </Scroll>
        <Loading show={this.state.loading} title={this.state.title} />
      </div>
    )
  }
}

export default Recommend;