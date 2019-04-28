import { connect } from "react-redux";
import Login from "../Components/Auth/LogIn";
import {
  login,
  signUp,
  getAllUsers,
  setLoggedIn,
  setUserName,
  setPassword,
  setPlayerOneName,
  setBadges
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user)),
    signUp: user => dispatch(signUp(user)),
    getAllUsers: () => dispatch(getAllUsers()),
    setLoggedIn: isLoggedIn => dispatch(setLoggedIn(isLoggedIn)),
    setUserName: username => dispatch(setUserName(username)),
    setPassword: password => dispatch(setPassword(password)),
    setPlayerOneName: name => dispatch(setPlayerOneName(name)),
    setBadges: num => dispatch(setBadges(num))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);