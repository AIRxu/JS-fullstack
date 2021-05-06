import React from 'react';
import ReactDOM from 'react-dom';
class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true,
    title: null
  }
  open = ({title}) => {
    this.setState({
      visiable:true,
      title
    })
  }
  close = () => {
    this.setState({
      visiable:false
    })
  }
  render() {
    const { visiable,title } = this.state;
    return(
      <div className={visiable? 'show': 'hidden'}>
        { title }
      </div>
    )
  }
}
function createNotification () {
  const div = document.createElement('div');
  const ref = React.createRef();
  // ref = { current: }
  // ref属性：拿到类上面的实例
  // 就不用我们去 new Notification() 
  // 这一步已经由react封装好了，直接通过ref就可以拿到实例化后的类
  // ref.current = new Notification();
  // ref.current.open
  // ref.current.close
  // 我认为实例化后的对象需要加current属性的原因是ref管理的是
  // 最新的对象，因此current属性表示当前实例化的对象

  // 由于我们要让notification与App位于并列层级，所以需要将其放在和root平级的div中
  ReactDOM.render(<Notification ref={ref} />, div)
  document.body.appendChild(div);
  return {
    open: ref.current.open,
    close: ref.current.close
  }
}
let notification = null;
if(!notification) {
  const { open,close } = createNotification();
  notification = {
    open,
    close
  }
}
export default notification;
// export default Notification;