import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'
import commonStore from './stores/commonStore'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'https://conduit.productionready.io/api'

const responseBody = (res) => res.body

const handleErrors = (error) => error

const tokenPlugin = (req) => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`)
  }
}

const requests = {
  del: (url) => 
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url) => 
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
}

const Auth = {
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } })
}

export default {Auth}