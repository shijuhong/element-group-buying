import axios, { AxiosResponse } from "axios";

export const post = (url: string, data = {}): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/",
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
