// console.log('hello member!');
var members = [
    {
        id: 1314,
        name: '小黄',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607098350489&di=f3e002a4656384dc0fd35e4b36df0d38&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F11%2F20160211123613_Ln3G2.jpeg'
    },
    {
        id: 520,
        name: '小绿',
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2166842467,4230343025&fm=26&gp=0.jpg'
    },
    {
        id: 10000,
        name: '小蓝',
        avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1877723695,4232318851&fm=26&gp=0.jpg'
    }
];
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML = 
// 从JSON数组变成了 HTML数组 这就是tbody想要的
// console.log(members.map((member => {
//   return  `
//     <tr>
//       <td>${member.id}</td>
//       <td>${member.name}</td>
//     </td>
//   `
// })))
tbody.innerHTML = members.map((function (member) {
    return "\n    <tr>\n      <td>" + member.id + "</td>\n      <td>" + member.name + "</td>\n      <td>\n      <img src=\"" + member.avatar + "\">\n      </td>\n    </td>\n  ";
})).join("");
