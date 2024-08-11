import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store/configureStore";
import ToDo from "./components/ToDo";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import TermsAndConditions from "./components/TermsAndConditions";

// const store = storeWithPersistReducer();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ToDo />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route
                path="termsandcondition"
                element={<TermsAndConditions />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <ToDo /> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
