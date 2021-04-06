export const addStudent = function(payload) {
    return {
        type: 'schedule/add_student',
        payload
    }
}

export const deleteStudent = function(payload) {
    return {
        type: 'schedule/delete_student',
        payload
    }
}

export const transferStudent = function(payload) {
    return {
        type: 'schedule/transfer_student',
        payload
    }
}