import { observable, action } from 'mobx'

class CommonStore {
  @observable token = window.localStorage.getItem('jwt')

  @action setToken(token) {
    window.localStorage.setItem('jwt', token)
  }
}

export default new CommonStore()