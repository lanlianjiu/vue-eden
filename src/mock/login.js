import queryString from 'query-string'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: 'i am admin',
    avatar: '',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: 'i am editor',
    avatar: '',
    name: 'Normal Editor'
  }
}

export default {
  loginbyUser: config => {
    let { username } = JSON.parse(config.body)
    let response = {}
    if (username in userMap) {
      response = {
        code: 200,
        data: userMap[username],
        message: 'Login success, Welcome'
      }
    } else {
      response = {
        code: 200,
        data: null,
        message: 'Login failed, User does not exist'
      }
    }
    return response
  },
  logout: () => {
    return {
      code: 200,
      data: {
        state: 1
      },
      message: 'Logout success'
    }
  },
  info: config => {
    let params = queryString.parse(config.url.replace(/^\S+(?=\?)/, ''))
    let response = {
      code: 200,
      data: userMap[params.username],
      message: 'Login success, Welcome'
    }
    return response
  }
}
