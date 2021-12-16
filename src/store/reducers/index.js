import { combineReducers } from "redux";
import userLogin from "./user/user-login-reducer";
import userProfile from "./user/user-profile-reducer";
import profileWo from "./organizer/profile-wo-reducer.js";
import route from "./route/route.js";
import loading from "./loading-reduce.js";
import getAllPackage from "./package/all-package-reducer.js";
import getDetailPackage from "./package/detail-package-reduce.js";

const rootReducers = combineReducers({
  loading,
  route,
  //login user reducer
  userLogin,
  //profile user
  userProfile,
  //profile wo
  profileWo,
  //get all package
  getAllPackage,
  //getDetailPackage
  getDetailPackage,
});

export default rootReducers;
