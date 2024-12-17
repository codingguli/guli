import http from '@/apis'

// 登录
export const loginApi = {
  getData: (data) => http.post('/api/admin/auths/login', data)
}