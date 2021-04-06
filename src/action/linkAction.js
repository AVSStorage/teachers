export const selectLinks = function() {
    return {
        type: 'link/get'
    }
  }

  export const editLink = function(payload) {
    return {
        type: 'link/edit',
        payload
    }
  }

  export const addLink = function(payload) {
    return {
        type: 'link/add',
        payload
    }
  }
