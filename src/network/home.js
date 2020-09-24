//再封装一层,为所有对首页的请求
import {request} from "@/network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
