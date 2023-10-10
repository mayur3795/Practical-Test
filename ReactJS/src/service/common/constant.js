import { BASE_URL } from '../../../environment/environment'
export const Constant = {
    BASE_API_URL: BASE_URL,
    GOOGLE_CLIENT_ID: "468221156927-fejj5kkak1d627lp7v13ljs671gojlcs.apps.googleusercontent.com",
    FACEBOOK_CLIENT_ID: "2958559367792209",
    LINKDIN_CLIENT_ID: "77coaccjxoaum7",
    LINKDIN_CLIENT_SECRET: "fTVy94VHm6PRA2nE",
    SUCCESS: 'success',
    FAIL: 'fail',
    ERROR: 'error',
    JWT_TOKEN: "jwt_token",
    SESSION_DATA: 'user-data',
    EMAIL_REGEX:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    MESSAGE:{

    },
    FORM_VALIDATION:{
        EMAIL_REQUIRED:'Email is required...!!',
        PASSWORD_REQUIRED:"Password is required...!!"
    }
};