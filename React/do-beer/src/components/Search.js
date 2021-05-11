import React from 'react';
import propTypes from 'prop-types';


class Search extends React.Component {
  // StatefulComponent StatelesComponent
  static contextTypes = {  // 静态属性
    router: propTypes.object.isRequired
  }
  // public 属性  react里面不能做DOM查询queryselector
  searchRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    // 使用箭头函数，this会指向当前的类而不会丢失
    const searchTerm = this.searchRef.current.value;  // 1. 获取用户在输入框中的值 ref
    // console.log(searchTerm, '--------');
    // context上下文对象  router路由  history历史对象 push跳转到/search/${searchTerm}去
    this.context.router.history.push(`/search/${searchTerm}`);
  }
  render() {
    // console.log(this.searchRef);
    return(
      // 表单
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Hoppy, Malt, Angry, New" />
        </form>
      </div>
    )
  }
}

export default Search;