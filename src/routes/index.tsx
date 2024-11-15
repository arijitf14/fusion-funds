import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginRoute from "@routes/login";
import TwoFARoute from "@routes/twoFA";
import { ROUTES } from "@utils/Utils";
import DashboardRoute from "@routes/dashboard";

const RouterMapping = () => {
  //   const accessToken = useAccessToken();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTES.LOGIN} element={<LoginRoute />} />
        <Route path={ROUTES.TwoFA} element={<TwoFARoute />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardRoute />} />
        {/* <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <LoginRoute />} />
        <Route path="*" element={<ProtectedRoute><NotFoundRoute /></ProtectedRoute>} />
        <Route path="/" element={<CommonLayoutRoute />}>
          <Route index element={<ProtectedRoute><HomeRoute /></ProtectedRoute>} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/settings" element={<ProtectedRoute><SettingsRoute /></ProtectedRoute>} />
        </Route> */}
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default RouterMapping;
