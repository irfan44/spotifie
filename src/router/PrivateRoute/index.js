// private route react-router-dom
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import IsLogin from "../../utils/isLogin";

const PrivateRoute = ({ ...props }) => {
  const token = useSelector((state) => state.token.token);
  console.log(IsLogin(token));
  return (
    <Route path={props.path}>
      {IsLogin(token) ? props.children : <Redirect to={props.redirect} />}
    </Route>
  );
};

export default PrivateRoute;
