export const ROUTES = {
    LOGIN: "/",
    TwoFA: "/twoFA",
    CREATE_ACCOUNT: "/create-account",
    DASHBOARD: '/dashboard',
    SIGNUP: '/signup',
    TRANSACTION: '/transactions',
    CREATECHECK: '/create-echeck',
    RECEIVECHECK: '/receive-echeck',
    CHECKDRAFT: '/echeck-drafts',
    REPORTS: '/reports',
    MANAGEBANK: '/manage-bank',
    MANAGEPAYEE: '/manage-payee',
    MANAGESUBSCRIPTION: '/manage-subscription',
    MANAGEPROFILE: '/manage-profile',
    LOGOUT: '/logout'
  }

export const isBuildMode = import.meta.env.PROD
