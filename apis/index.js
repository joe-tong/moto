import request from '@/common/js/request.js'

export const _API_Login = data => request.get('/order/list', data) // 获取单数据

export const _API_IndexDownload = data => request.downloadFile('/', data) // 下载文件接口

export const _API_IndexUpload = data => request.uploadFile('/', data) // 上次文件接口