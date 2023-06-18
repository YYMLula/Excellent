//axiosInstance.js
//导入axios
import axios from 'axios'
const API = axios.create({
	baseUrl:'http://localhost:8080', //请求后端数据的基本地址，自定义
	timeout: 2000                   //请求超时设置，单位ms
})

// 相应拦截
axios.interceptors.response.use(res => {//拦截响应的方法
    return res;
}, err => {
//响应失败时返回一个 Promise，该 Promise 会被拒绝并传递错误对象。这个错误对象可以在后续的代码中被处理，例如显示错误信息给用户或记录错误日志。 
    return Promise.reject(err);
})

// 请求拦截
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
});
//这段代码是使用 Axios 库来设置请求拦截器。拦截器是在发送请求之前对请求进行处理的函数。
//在这里，我们定义了一个请求拦截器，它接受一个配置对象作为参数，并返回该对象。
//如果发生错误，它将返回一个被拒绝的 Promise 对象。
//这个拦截器的作用是在请求发送之前对请求进行一些处理，例如添加请求头或修改请求参数等。
export default API
