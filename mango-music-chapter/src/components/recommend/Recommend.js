import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import 'swiper/swiper.min.css'

// 1. 轮播图  swiper
// 2. 加入 swiper 功能
// 数据 {src, ilink}

class Recommend extends React.Component {
  constructor () {
    super()
    // 这个组件的 state ，就属于这个组件，不属于其他组件，如果这里的数据其他组件也需要用到，就需要放到redux里面
    // 1. 用假数据将页面做出来
    // 2. 未来再改成接口
    this.state = {
      sliderList: [{
        id:1,
        picUrl:'https://inews.gtimg.com/newsapp_bt/0/13466201568/641',
        linkUrl:'https://xw.qq.com/cmsid/20210428A04I7K00'
      },
      {
        id:2,
        picUrl:'https://inews.gtimg.com/newsapp_bt/0/13527685926/641',
        linkUrl:'https://xw.qq.com/cmsid/20210428A04I7K00'
      },
      {
        id:3,
        picUrl:'https://inews.gtimg.com/newsapp_bt/0/13527685921/641',
        linkUrl:'https://xw.qq.com/cmsid/20210428A04I7K00'
      }
    ]  // 轮播图的数据 没必要去redux
    }
  }
  componentDidMount () {
    new Swiper(".slider-container", {
      loop:true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })
  }
  render() {
    return (
      <div className="music-recommend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a href={slider.linkUrl} className="slider-nav">
                      <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pangination"></div>
        </div>
      </div>
    )
  }
}

export default Recommend;