import { Login } from "../../Molecules";

const Authenticate = ({ isAuth }) => {
  const withAuth = isAuth && <div>Welcome</div>;
  return withAuth || <Login />;
};

export default Authenticate;
