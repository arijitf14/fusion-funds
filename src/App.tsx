import "./App.css";
import { injectStore } from "@axiosConfig/apiConfig";
import store, { persistor } from "@redux/store";
import RouterMapping from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  injectStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterMapping />
      </PersistGate>
    </Provider>
  );
}

export default App;
