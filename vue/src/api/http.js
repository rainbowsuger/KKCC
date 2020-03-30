import axios from 'axios';
import { Toast } from 'vant';

/** axios请求封装
 *  params、isFormData、config
 *  params中method、url为固定，其他参数为用户传参，post\put\patch,delete\get
 *  请求拦截和响应拦截
  * */
const instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    common: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
  timeout: 30000,
});
const Http = {};
Http.$request = async (
  params, // 请求参数 get：url，put，post，patch（data），delete：url
  isFormData = false, // 标识是否是form-data请求
  config = {}, // 配置参数
) => {
  let newParams = null;
  const newConfig = Object.assign({}, config);

  //  content-type是否是form-data的判断
  // 处理传参params
  if (config && isFormData) {
    newParams = new FormData();
    if (typeof params.params === 'object') {
      const arr = Object.keys(params.params);
      arr.forEach((i) => {
        newParams.append(i, params.params[i]);
      });
    }
  } else {
    newParams = Object.assign({}, params.params || {});
  }

  // 不同请求的判断
  let response = {}; // 请求的返回值
  if (params.method === 'put' || params.method === 'post' || params.method === 'patch') {
    try {
      response = await instance[params.method](params.url, newParams, config);
    } catch (err) {
      response = err;
    }
  } else if (params.method === 'delete' || params.method === 'get') {
    newConfig.params = newParams;
    try {
      response = await instance[params.method](params.url, newConfig);
    } catch (err) {
      response = err;
    }
  }
  return response; // 返回响应值
};

// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use((config) => {
  // 发起请求前做些什么
  Toast.loading({
    mask: false,
    duration: 0, // 一直存在
    forbidClick: true, // 禁止点击
    message: '加载中...',
  });
  return config;
}, () => {
  // 请求错误
  Toast.clear();
  Toast('请求错误，请求稍后重试');
  // return Promise.reject(error);
});

// // 响应拦截器
instance.interceptors.response.use((res) => {
  // 请求成功
  Toast.clear();
  return res.data;
}, () => {
  Toast.clear();
  Toast('请求错误，请求稍后重试');
});

export default Http;
