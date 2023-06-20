// src/mock/index.js
import Mock from 'mockjs'  //导入mockjs

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据

//这段代码使用了一个名为Mock的JavaScript库，它可以模拟HTTP请求和响应。
//在这里，我们使用Mock.mock()方法来模拟两个GET请求：/loginIn和/register。
//每个请求都有一个响应对象，其中包含一个状态码和一条消息。
//如果请求成功，状态码将为200，消息将为“登录成功”或“注册成功”。
//这段代码的作用是为这两个请求提供模拟响应，以便在开发和测试过程中使用。 
Mock.mock('/loginIn', 'get', {
    status:200, //请求成功状态码
    message: '登录成功',
});

Mock.mock('/register', 'get', {
    status: 200,
    message: '注册成功',
})
Mock.mock('/api/getRandomText', 'get', {
    'randomText': '@cword(5, 10)',
  })
  Mock.mock('/api/getTodaysHoroscope', 'get', {
    'score|80-100': 1,
    'description': '@sentence(10, 15)',
  })
  
