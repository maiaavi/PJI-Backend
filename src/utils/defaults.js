export const defaultErrorReturn = (err, status) => {
    const msg = err.toString ? err.toString() : err
    return {
        statusCode: status,
        error: msg
    }
}
