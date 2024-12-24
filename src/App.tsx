import "./App.css";
import { injectStore } from "@axiosConfig/apiConfig";
import store, { persistor, RootState } from "@redux/store";
import RouterMapping from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoaderSpinner from "@components/core/LoaderSpinner/Loader";
import { useEffect, useState } from "react";

function App() {
  injectStore(store);
  const [loaderParam, setLoaderParam] = useState<boolean>(false)
  const loader=store.getState().loaderSpin.showLoader
  console.log("sariqqqqqqq",loader)

  useEffect(() => {
    setLoaderParam(loader)
  }, [loader])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* {loaderParam&& <LoaderSpinner /> } */}
        <RouterMapping />
      </PersistGate>
    </Provider>
  );
}

export default App;
