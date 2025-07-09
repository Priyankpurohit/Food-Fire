import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/pages/About";
import Error from "./Components/pages/Error";
import Contact from "./Components/pages/Contact";
import Basic from "./Components/pages/LoginPage";
import RestaurantMenu from "./Components/pages/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      { path: "/restaurant/:Id", element: <RestaurantMenu /> },
      {
        path: "/login",
        element: <Basic />,
      },
    ],
  },
]);

export default AppProvider;
