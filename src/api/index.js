import axios from '../utils/request';

//这段代码定义了一个名为 userLoginIn 的函数，该函数接受一个参数 params。
//函数体内部使用了 axios 库发送了一个 GET 请求，请求的 URL 是 /loginIn，
//并将 params 作为请求参数传递给了服务器。这段代码的作用是实现用户登录功能。
export const userLoginIn = (params) => {
    return axios.get('/loginIn', params);
}

//这段代码定义了一个名为userRegist的函数，该函数接受一个参数params。
//函数体内部使用了axios库发送了一个GET请求，请求的URL为/register，
//并将params作为请求参数传递。因此，这段代码的作用是向服务器发送一个注册请求，
//并将请求参数params作为GET请求的参数传递。 
export const userRegist = (params) => {
    return axios.get('/register', params);
}