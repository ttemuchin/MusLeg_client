import { Navigate } from 'react-router-dom';
import { JSX, useContext } from 'react';
import { Context } from '../main';

type PrivateRouteProps = {
  children: JSX.Element;
  roles?: ('user' | 'admin' | 'super')[];
}

const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { user } = useContext(Context);
  
  if (!user.isAuth) {
    return <Navigate to="/login" replace />;
  }

  const userRole = user.role;
  
  // if (roles && !roles.includes(user.role)) {
  // roles == undefined || !roles.includes(userRole) ====> !roles?.includes
  if (userRole === 'guest'|| !roles?.includes(userRole)) {
    return <Navigate to="/error" replace />; //потом укажем что 403 ошибка
  }
  
  return children;
};

export default PrivateRoute;