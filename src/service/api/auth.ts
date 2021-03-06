import { mockRequest, request } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return mockRequest.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  const form = new FormData();
  form.append('username', userName);
  form.append('password', password);
  return request.form<ApiAuth.UserInfo>('/login/userLogin', form);
}

/** 刷新token */
export function fetchRefresh() {
  return request.get<ApiAuth.UserInfo>('/login/refresh');
}
/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/admin/user/profiles');
}
/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes() {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutes');
}
