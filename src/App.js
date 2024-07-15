import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import CommonRoute from "./components/CommonRoute";
import Spinner from "./components/Spinner";

export let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CommonRoute />
          <Spinner />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
