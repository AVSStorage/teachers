export const selectFile = function(payload) {
    return {
        type: 'file/get',
        payload
    }
  }


  export const closeFile = function(payload) {
    return {
        type: 'file/close',
        payload
    }
  }



  export const addFile = function(payload) {
    return {
        type: 'file/add',
        payload
    }
  }

  export const editFile = function(payload) {
    return {
        type: 'file/edit',
        payload
    }
  }