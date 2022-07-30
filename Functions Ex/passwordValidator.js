function passwordValidator(password) {
    let passAsString = password.toString()

    if (!lengthCheck(password)){
        console.log("Password must be between 6 and 10 characters")
    }
    if (!onlyLettersAndDigits(password)){
        console.log("Password must consist only of letters and digits")
    }
    if (!digits(password)){
        console.log("Password must have at least 2 digits")
    }
    if (lengthCheck(password && onlyLettersAndDigits(password) && digits(password))){
        console.log("Password is valid")
    }

    function digits() {
        let counter = 0;
        for (let element of passAsString) {
            let currentChar = element.charCodeAt(0)
            if (currentChar >= 48 && currentChar <= 57){
                counter++;
            }
        }
        return counter >= 2 ? true : false;
    }

    function lengthCheck() {
        let passwordLength = passAsString.length;
        if (passwordLength >= 6 && passwordLength <= 10){
            return true;
        } else {
            return false;
        }
    }

    function onlyLettersAndDigits(password) {
        return /^[A-Za-z0-9]*$/.test(password)
    }

}
passwordValidator('myPass123')