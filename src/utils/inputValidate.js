function inputValidate(value, type = 'default') {

    let messages = {
        default: `Field is required`,
        email: 'Email is invalid.',
        isbn: 'Value must be equal to 5 digits',
        year: 'Year must be follow this format (YYYY)',
    };

    const regExp = new RegExp(/^\s*$/);
   
    if(regExp.test(value)) {

        return {
            isValid: false,
            errorMessage: messages.default
        };

    } else if(type == 'isbn') {

        const regExp = new RegExp(/^[\d]{5}?$/);
        const test   =  regExp.test(value); // tests if the value is equal to 5 digits
     
        if(!test) {

            return {
                isValid: false,
                errorMessage: messages.isbn
            }

        }

    } else if (type == 'email') {

        const regExp = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+/);

        if(!regExp.test(value)) {

            return {
                isValid: false,
                errorMessage: messages.email
            }

        }

    } else if (type == 'year') {

        const regExp  = new RegExp(/^[\d]{4}?$/);
        
        if(!regExp.test(value)) {

            return {
                isValid: false,
                errorMessage: messages.year
            }

        }
    }

    return { isValid: true , errorMessage: ''};

}

export default inputValidate;