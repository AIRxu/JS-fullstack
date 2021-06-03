import axios from 'axios';

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 这里是响应错误
  if (response.status !== 200) {
    alert('ERROR')
  } else {
    return response.data;
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  // 这里是超时错误
  alert('ERROR1')
  return Promise.reject(error);
});

axios.defaults.baseURL = 'http://localhost:3000';