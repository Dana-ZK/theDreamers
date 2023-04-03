import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Tour from "./pages/Tour/Tour";
import Store from "./pages/Store/Store";
import Video from "./pages/Video/Video";
import About from "./pages/About/About";
import Music from "./pages/Music/Music";
import ErrorBoundary from "./components/ErrorBoundary";
import NavigatorMenu from "components/header/NavigatorMenu/NavigatorMenu";
import StoreCard from "components/store/StoreCard";
import TourCard from "components/tour/TourCard";
import CartPage from "pages/CartPage/CartPage";
import Login from "pages/Login/Login";
import Registration from "pages/RegistrationPage/Registration";
import "./index.css";
import Account from "pages/Account/Account";
import { AuthContextProvider } from "components/authContext/authContext";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />}>
              {" "}
            </Route>
            <Route
              path="/login"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Login /> <Footer />
                </>
              }
            />
            <Route
              path="/registration"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Registration /> <Footer />
                </>
              }
            />
            <Route
              path="/account"
              element={
                <>
                  <NavigatorMenu />
                  <Account />
                  <Footer />
                </>
              }
            />
            <Route
              path="/tour"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Tour /> <Footer />
                </>
              }
            />
            <Route
              path="/store"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Store />
                  <Footer />
                </>
              }
            />
            <Route
              path="/video"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Video />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/music"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <Music />
                  <Footer />
                </>
              }
            />
            <Route
              path="/store/:name"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <StoreCard />
                  <Footer />
                </>
              }
            />
            <Route
              path="/tour/:name"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <TourCard />
                  <Footer />
                </>
              }
            />
            <Route
              path="/order"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <CartPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <>
                  {" "}
                  <NavigatorMenu />
                  <ForgotPassword />
                  <Footer />
                </>
              }
            />
          </Routes>
        </AuthContextProvider>
      </Router>
    </Provider>
  </ErrorBoundary>
);

reportWebVitals();
