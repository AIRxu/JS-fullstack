window.onload = function() {
  const tabLinks = document.querySelectorAll('.tabbar a')
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // console.log(link);
      event.preventDefault();
      // 1. 取消默认给的selected
      // 2. 点哪个a标签 就给他加上selected
      document.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected')
    }, false);
  })

  // 先拿到 swiper 的数据
  // bannerList数据
  // 真的数据
  // XMLHttpRequest 太难了  现代版就用fetch吧
  fetch('http://localhost:3000/banner')
    .then(data => data.json())    //  拿到数据之后先json格式化一下
    .then(data => {
      console.log(data);
    })
}