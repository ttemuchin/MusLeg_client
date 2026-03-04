import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, adminRoutes, superRoutes, publicRoutes } from '../routes';
import PrivateRoute from './PrivateRoute';
import { useContext } from "react";
import { Context } from "../main";
import { withObserver } from '../hooks/withObserver';

const AppRouterComponent: React.FC = () => {
  const {user} = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {user.isAuth && authRoutes.map(({ path, Component, roles }) => (
        <Route 
          key={path} 
          path={path} 
          element={
            <PrivateRoute roles={roles}>
              <Component />
            </PrivateRoute>
          } 
        />
      ))}

      {user.isAuth && (user.role === 'admin' || user.role === 'super') && 
        adminRoutes.map(({ path, Component, roles }) => (
          <Route 
            key={path} 
            path={path} 
            element={
              <PrivateRoute roles={roles}>
                <Component />
              </PrivateRoute>
            } 
          />
      ))}

      {user.isAuth && user.role === 'super' && 
        superRoutes.map(({ path, Component, roles }) => (
          <Route 
            key={path} 
            path={path} 
            element={
              <PrivateRoute roles={roles}>
                <Component />
              </PrivateRoute>
            } 
          />
      ))}

      <Route path="*" element={<Navigate to="/error" replace />} /> {/* 404 */}
    </Routes>
  );
};

// глупо но это hoc
// в целом можно убрать обсёрвер
// роуты рендерятся один раз при загрузке, уже есть защита в PrivateRoute
// +если при смене пользователя страница перезагрузится
const AppRouter = withObserver(AppRouterComponent);
export default AppRouter;