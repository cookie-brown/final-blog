import axios from 'axios';

/**
 * 针对请求url的判断处理
 */
//获取当前的URL中的地址
let projectAddrass = window.location.host;
//返回当前的URL协议
let protocol = document.location.protocol;
//封装请求接口的地址（需按照nginx配置路径配置）
export const requestUrl = `${protocol}//${projectAddrass}`;

console.log(process.env.NODE_ENV)

//对外提供的服务地址
export const publicUrl = process.env.NODE_ENV === 'development'
 ? 'http://127.0.0.1:8000' 
 : requestUrl


 /**
  * 请求方法封装
  * @param {string} method GET | POST
  * @param {string} api 请求url
  * @param {object} configObj 传参
  */
 export function requestData(method, api, configObj) {
    let {
        params = {}, // 针对get请求
        data = {}, // 针对post请求
        timeout = 5000
    } = configObj

    return new Promise(function(resolve, reject) {
        axios({
            url: `${publicUrl}${api}`,
            method: method,
            params: params,
            data: data,
            timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                // 'token': window.sessionStorage.getItem('token') || ''
            }
        })
        .then(function(response) {
            if (response) {
                if (response.data && response.data.code) {
                    resolve(response);
                } else {
                    console.log('%c请求结果格式有误', 'background:orange;color:#fff', `接口${api}返回错误`)
                    resolve(response);
                }
            } else {
                console.log('%c请求错误', 'background:red;color:#fff', `接口${api}服务异常`)
                resolve(response);
            }
        })
        .catch(function (error) {
            console.log('%c网络异常', 'background:red;color:#fff', `接口${api}服务异常`)
            reject(error);
        })
    })
 }
