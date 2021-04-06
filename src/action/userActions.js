export const authUser = function(payload) {
    return {
        type: 'user/auth',
        payload
    }
  }