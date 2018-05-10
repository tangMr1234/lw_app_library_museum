import axios from 'axios';

let baseUrl = window.Api.ApiUrl; //api域名
//获取疫苗博物馆首页的侧边栏菜单
export const getMuseumIndexMenu = params => {
  return axios.get(`${baseUrl}` + window.AxiosApi.Museum_IndexMenu, {timeout: 60000}).then(res => res.data);
};
//获取疫苗博物馆首页的列表信息
export const getMuseumIndexList = params => {
  return axios.get(`${baseUrl}` + window.AxiosApi.Museum_IndexList + "?type=" + params, {timeout: 60000}).then(res => res.data);
};
