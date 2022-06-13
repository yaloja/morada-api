const responseOK = (response)  => {
    return {
        statusHttp: 200,
        response
    }
}

module.exports = responseOK;