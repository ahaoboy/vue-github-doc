import axios from "axios";

import { Loading, Message } from "element-ui";

// 全局变量 保存 loading实例
let loading;

function startLoading() {
  // console.log("startLoading");
  loading = Loading.service({
    lock: true,
    text: "加载中...",
    background: "deepgray"
  });
}

function endLoading() {
  // console.log("endLoading");
  loading.close();
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    startLoading();
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    endLoading();
    return response.data;
  },
  error => {
    endLoading();
    Message.error("加载错误");
    return Promise.reject(error);
  }
);
export default axios;
