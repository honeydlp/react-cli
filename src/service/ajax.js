import axios from 'axios';
import { Message } from 'element-ui';
import { getItem,remobeItem } from '../util/localStore'
import { doLogin } from '../util/localStore'
import { message } from 'antd';
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // timeout: 5000,                  // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let i in data) {
      if(typeof data[i] == 'object'){
        let listData = data[i]
        for(let k = 0; k < listData.length; k++ ){
          ret += encodeURIComponent(i) + '=' + encodeURIComponent(listData[k]) + '&'
        }
      }else{
        ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
      }
    }
    ret = ret.substring(0,ret.length-1)
    return ret
  }],
});
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (getItem('token')) {
    config.headers['token'] = getItem('token');
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})
// respone拦截器
service.interceptors.response.use(
  response => {
    if(response.data.err_code){
      message.error(response.data.err_msg);
      if(response.data.err_code == '12000'){
        remobeItem('token');
        doLogin();
      }
      return Promise.reject(response.data.err_msg)
    }else{
      return response
    }
  },
  error => {
    console.log('err' + error);// for debug
    message.error(error.message);
    return Promise.reject(error);
  }
)

export default service;