// 先把所有的工具函数导出的模块在这里导入，整合在一起再统一导出
import request from './request';
import { setToken, getToken, removeToken } from './token';

export { request, setToken, getToken, removeToken };
