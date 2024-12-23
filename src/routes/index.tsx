import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginRoute from "@routes/login";
import { ROUTES } from "@utils/Utils";
import DashboardRoute from "@routes/dashboard";
import SignupRoute from "@routes/signup";
import CreateAccountRoute from "@routes/createAccount";
import NotFoundRoute from "@routes/notFound";
import TransactionRoute from "@routes/transactions";
import CreateEcheckRoute from "@routes/createEcheck";
import ReceiveEcheckRoute from "@routes/receiveEcheck";
import ReportsRoute from "@routes/reports";
import ManageBankRoute from "@routes/manageBank";
import ManagePayeeRoute from "@routes/managePayee";
import ManageSubscriptionRoute from "@routes/manageSubscription";
import ManageProfileRoute from "@routes/manageProfile";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

const RouterMapping = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={"/"} element={<LoginRoute />} />
        <Route path={ROUTES.SIGNUP} element={<SignupRoute />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccountRoute />} />

        <Route path={ROUTES.DASHBOARD} element={<ProtectedRoute><DashboardRoute /></ProtectedRoute>} />
        <Route path={ROUTES.TRANSACTION} element={<ProtectedRoute><TransactionRoute /></ProtectedRoute>} />
        <Route path={ROUTES.CREATECHECK} element={<ProtectedRoute><CreateEcheckRoute /></ProtectedRoute>} />
        <Route path={ROUTES.RECEIVECHECK} element={<ProtectedRoute><ReceiveEcheckRoute /></ProtectedRoute>} />
        <Route path={ROUTES.CHECKDRAFT} element={<ProtectedRoute><ReceiveEcheckRoute /></ProtectedRoute>} />
        <Route path={ROUTES.REPORTS} element={<ProtectedRoute><ReportsRoute /></ProtectedRoute>} />
        <Route path={ROUTES.MANAGEBANK} element={<ProtectedRoute><ManageBankRoute /></ProtectedRoute>} />
        <Route path={ROUTES.MANAGEPAYEE} element={<ProtectedRoute><ManagePayeeRoute /></ProtectedRoute>} />
        <Route path={ROUTES.MANAGESUBSCRIPTION} element={<ProtectedRoute><ManageSubscriptionRoute /></ProtectedRoute>} />
        <Route path={ROUTES.MANAGEPROFILE} element={<ManageProfileRoute />} />
        <Route path="*" element={<ProtectedRoute><NotFoundRoute /></ProtectedRoute>} />
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default RouterMapping;
