import { Routes, Route, Navigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import { publicRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {/* {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )} */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
