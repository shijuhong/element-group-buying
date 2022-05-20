import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/",
  timeout: 10000,
});

/**
 * 发送 GET 请求给服务器
 * @param url get 请求地址
 * @param params get 请求参数
 * @returns 成功或失败信息
 */
export const get = (url: string, params = {}): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * 发送 POST 请求给服务器
 * @param url post 请求地址
 * @param data post 请求参数
 * @returns 成功或失败信息
 */
export const post = (url: string, data = {}): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
