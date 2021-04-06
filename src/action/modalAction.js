export const showModal = function(payload) {
    return {
        type: 'modal/show',
        payload
    }
}

export const hideModal = function() {
    return {
        type: 'modal/hide',
    }
}