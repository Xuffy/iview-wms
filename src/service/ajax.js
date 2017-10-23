import axios from 'axios'
import {Message} from 'iview';
import env_config from './config'

// 创建axios实例
const ajax = axios.create({
  baseURL: env_config.env.api,    // api的base_url
  timeout: 10000,          // 请求超时时间
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    // console.log(data)
    return data;
  }]
});

// request拦截器
ajax.interceptors.request.use(config => {
  return config
}, error => {
  Message.warning(response.data.msg || '请求异常，请重试！');
  Promise.reject(error)
});


// respone拦截器
ajax.interceptors.response.use(
  response => {
    if (_.isEmpty(response.data)) {
      throw new Error('api data is undefined');
    }

    if (_.isString(response.data)) {
      response.data = JSON.parse(response.data);
    }

    if (response.data.code !== '200') {
      Message.warning(response.data.msg || '数据返回异常，请重试！');
      throw new Error(`[code - ${response.data.code}] ${response.data.msg || 'api request data unsuccessful'}`);
    }

    return response.data;
  },
  error => {
    Message.error('网络异常，请稍后重试！');
    return Promise.reject(error)
  }
);

export default ajax
