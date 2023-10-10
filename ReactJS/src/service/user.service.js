import { BASE_URL, environment } from "./common/apiConstant";
import { handler } from "../service/index";

function insertUserData(data) {
  var url = BASE_URL + environment.INSERT_DATA;
  return handler.Post(url, data).then((res) => {
    return res?.data || [];
  });
}
function fetchUserData(data) {
  var url = BASE_URL + environment.FETCH_DATA;
  return handler.Post(url, data).then((res) => {
    return res?.data || [];
  });
}

export const UserService = {
  insertUserData,
  fetchUserData,
};
