const boom = require('@happi/boom');

function  validate() {
    return false;
    
}

function validateHandler(schema, check = 'body' ) {
    return function(req, res, next) {
        const error = validate(req[check],shema);

        error ? next(boom.badRequest(error)) : next();
        
    };
    
}

module.exports = validateHandler;