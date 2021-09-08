const axios = require('axios');

const helphubRequest = function(options) {
  return axios({...options, url: process.env.HELPHUB_API_URL + options.url});
}

const signedHelphubRequest = function(options) {
  return helphubRequest({
    ...options, headers: authHeaders(options.token)
  });
}

const authHeaders = function(token) {
  return {
    "Authorization": "Bearer " + token
  }
}

const PathHelper = {
  auth: "api/v1/login",
  helpRequests: "api/v1/help_requests",
  assignHelpRequest: function(id) {
    return `api/v1/help_requests/${id}/assign`
  },
  submitHelpRequest: function(id) {
    return `api/v1/help_requests/${id}/submit`
  },
  refuseHelpRequest: function(id) {
    return `api/v1/help_requests/${id}/refuse`
  }
}

const HelphubAPI = {
  auth: function(email, password){
    return helphubRequest({
      url: PathHelper.auth,
      method: 'post',
      data: {
        email: email,
        password: password
      }
    })
  },
  helpRequests: function(filterParams, token, options = {}){
    return signedHelphubRequest({
      url: PathHelper.help_requests,
      params: filterParams,
      method: 'get',
      token: token,
      ...options
    })
  },
  assignHelpRequest: function(id, token, options = {}){
    return signedHelphubRequest({
      method: 'post',
      url: PathHelper.assignHelpRequest(id),
      token: token,
      ...options
    })
  },
  submitHelpRequest: function(id, token, options = {}){
    return signedHelphubRequest({
      method: 'post',
      url: PathHelper.submitHelpRequest(id),
      token: token,
      ...options
    })
  },
  refuseHelpRequest: function(id, token, options){
    return signedHelphubRequest({
      method: 'post',
      url: PathHelper.refuseHelpRequest(id),
      token: token,
      ...options
    })
  },
}

export default  HelphubAPI;
