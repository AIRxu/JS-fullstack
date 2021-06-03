import {observable, action} from 'mobx'
import axios from '_axios@0.21.1@axios'

class ArticleStore {
  // observable 相当于 state
  // es @ 装饰器
  @observable articles = {
    all:[],
    cars:[]
  }
  @action
  getArticle(tag, offset=0) {
    axios.get('/articles', {
      params: {
        tag,
        offset,
        limit: LIMIT
      }
    })
    .then(res => {
      // 修改store
      this.articles[tag] = res.articles
    })
  }
}