//封装本地存储数据与读取数据方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('Token', token)
}

export const GET_TOKEN = () => {
  return localStorage.GetItem('Token')
}
