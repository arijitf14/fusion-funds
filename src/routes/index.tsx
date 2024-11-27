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
import TransactionRoute from "@routes/transactions";
import CreateEcheckRoute from "@routes/createEcheck";
import ReceiveEcheckRoute from "./receiveEcheck";
import ReportsRoute from "./reports";
import ManageBankRoute from "./manageBank";
import ManagePayeeRoute from "./managePayee";
import ManageSubscriptionRoute from "./manageSubscription";

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
        <Route path={ROUTES.TRANSACTION} element={<TransactionRoute />} />
        <Route path={ROUTES.CREATECHECK} element={<CreateEcheckRoute />} />
        <Route path={ROUTES.RECEIVECHECK} element={<ReceiveEcheckRoute />} />
        <Route path={ROUTES.CHECKDRAFT} element={<ReceiveEcheckRoute />} />
        <Route path={ROUTES.REPORTS} element={<ReportsRoute />} />
        <Route path={ROUTES.MANAGEBANK} element={<ManageBankRoute />} />
        <Route path={ROUTES.MANAGEPAYEE} element={<ManagePayeeRoute />} />
        <Route path={ROUTES.MANAGESUBSCRIPTION} element={<ManageSubscriptionRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default RouterMapping;
