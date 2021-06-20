import {observable, action} from 'mobx'
import axios from 'axios'
const LIMIT = 10;

class ArticleStore {
  // observable 相当于 state
  // es @ 装饰器
  LIMIT = LIMIT;
  @observable articles = {
    all:[],
    tag1:[],
    tag2:[]
  }
  @observable total = 0;
  @observable tags = [];
  @action
  getArticle(tag, offset=0) {
    axios.get('/articles', {
      params: {
        tag: tag === 'all' ? null : tag,
        offset,
        limit: LIMIT
      }
    })
    .then((res) => {
      // 修改store
      console.log(res.articles);
      this.articles[tag] = res.articles;
      this.total = res.articlesCount;
    })
  }
  handleTabChange = (key) => {
    // console.log(key);
    this.getArticle(key);
  }
  @action
  getTags() {
    axios.get('/tags').then(res => {
      console.log(res);
      this.tags = res.tags;
    })
  }
}

export default new ArticleStore();