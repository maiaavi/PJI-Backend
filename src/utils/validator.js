export const isEmptyString = string => {
    if (typeof string !== 'string') return false
    if (!string || string.trim() === '') return true
    return false
}

export const validateIdParam = id => {
    if (!id || isNaN(Number(id))) return false
    return true
}
