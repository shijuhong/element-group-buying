import axios from "axios";

declare module "axios" {
  interface IAxios<D = null> {
    errno: number;
  }
  export interface AxiosResponse<T = any> extends IAxios<D> {}
}
