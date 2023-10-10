import { Constant } from "./constant" 

const isUndefinedOrNull = (value) => {
    if (value === "undefined" || value === null || value === "") {
        return true;
    } else {
        return false;
    }
    }

/*
Email Validation function
*/
const  isValidateEmail = (email) => {
    const regex = Constant.EMAIL_REGEX;
    return regex.test(String(email).toLowerCase());
}

/*
TYPE:GET
To value is undefined or null.
*/
const  isObjEmpty = (obj) => {
    return obj == null || !Object.keys(obj).length;
}

const  setCurrentUserData = (data) => {
    localStorage.setItem(Constant.SESSION_DATA, JSON.stringify(data.data));
    localStorage.setItem(Constant.JWT_TOKEN, data.token);
}

const  getCurrentUserData = (session) => {
    var val = localStorage.getItem(session);
    var data = JSON.parse(val);
    return (data);
};
const  removeCurrentUserData = () => {
    localStorage.removeItem(Constant.SESSION_DATA);
    localStorage.removeItem(Constant.JWT_TOKEN);
};

const  numericValue = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode === 46) {
        return true;
    } else if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        (charCode < 48 || charCode > 57)
    ) {
        return false;
    }
    return true;
}

export {
    isUndefinedOrNull,
    isValidateEmail,
    isObjEmpty,
    setCurrentUserData,
    getCurrentUserData,
    removeCurrentUserData,
    numericValue
  }