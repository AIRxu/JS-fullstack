// 给专辑建一个模型   Album
// 要做那些事？ 图片没有
// 歌手显示应该有函数来处理

export class Album {
  constructor(id, mId, name, img, singer, publicTime) {
    this.id = id;
    this.mId = mId;
    this.name = name;
    this.img = img;
    this.singer = singer;
    this.publicTime = publicTime;
  }
}

// 工具函数
// 将请求到的数据使用设计好的类来实例化一个对象，提供我们需要的数据格式
// 这里面的img使用了拼接的方法
// singer使用私有函数filterSinger()来处理，如果有一首歌曲有多个
// 歌手名，通过这个方法返回一个数组
export function createAlbumByList(data) {
  return new Album(
    data.album_id,
    data.album_mid,
    data.album_name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,
    filterSinger(data.singers),
    data.public_time
  )
}

function filterSinger(singers) {
  let singerArray = singers.map(singer => {
    return singer.singer_name
  })
  return singerArray.join("/")
}