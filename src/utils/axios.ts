import Axios from "axios";
import { ElMessage } from "element-plus";

let baseURL = process.env.VUE_APP_URL
console.log(process.env)

const axios = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (request: any) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response: { data: any; }) => {
    const resp = response.data;
    if (!resp.success) {
      ElMessage.error(`ID: ${resp.id}, Message: ${resp.message}`);
    }
    return Promise.resolve(resp);
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`ID: ${code}, Message:  ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
