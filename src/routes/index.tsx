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
import SignupRoute from "@routes/signup";
import CreateAccountRoute from "@routes/createAccount";
import NotFoundRoute from "@routes/notFound";

const RouterMapping = () => {
  //   const accessToken = useAccessToken();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={"/"} element={<LoginRoute />} />
        <Route path={ROUTES.TwoFA} element={<TwoFARoute />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardRoute />} />
        <Route path={ROUTES.SIGNUP} element={<SignupRoute />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccountRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default RouterMapping;
