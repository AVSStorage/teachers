export const addTheme = function(payload) {
    return {
        type: 'theme/add',
        payload
    }
  }

  export const editTheme = function(payload) {
    return {
        type: 'theme/edit',
        payload
    }
  }

  export const addMaterialToTheme = function(payload) {
    return {
        type: 'theme/materials',
        payload
    }
  }
