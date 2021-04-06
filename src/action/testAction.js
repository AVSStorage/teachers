export const addTest = function(payload) {
    return {
        type: 'test/add',
        payload
    }
  }

export const editTest= function(payload) {
    return {
        type: 'test/edit',
        payload
    }
}