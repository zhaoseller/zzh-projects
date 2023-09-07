const constants = require('../constants')
const errorHandler = (err, req, res, next) => {
    const code = res.statusCode ? res.statusCode : 500;
    switch (code) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation failed',message: err.message, stakeTrace: err.stack
            })
            break;
        case constants.NOT_FOUND: 
            res.json({
                title: 'Not Found',message: err.message, stakeTrace: err.stack
            })
        case constants.UNAUTHORIZED: 
            res.json({
                title: 'unauthorized',message: err.message, stakeTrace: err.stack
            })
        case constants.FORBIDDEN: 
            res.json({
                title: 'forbidden',message: err.message, stakeTrace: err.stack
            })
        case constants.SERVER_ERROR: 
            res.json({
                title: 'Server error',message: err.message, stakeTrace: err.stack
            })
        default: 
        res.json({
            title: 'Server error',message: err.message, stakeTrace: err.stack
        })
            break;
    }
}

module.exports = errorHandler