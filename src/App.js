import React from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProducts from "./SingleProduct";
import {GlobalStyle} from "./GlobalStyle";
import {ThemeProvider} from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import {AppProvider} from "./context/ProductContext";
import {FilterProductProvider} from "./context/FilterContext";
import {CartContextProvider} from "./context/CartContext";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",

    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/singleProduct/:keyId",
          element: <SingleProducts />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <AppProvider>
        <FilterProductProvider>
          <CartContextProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <div>
                <RouterProvider router={appRouter} />
              </div>
            </ThemeProvider>
          </CartContextProvider>
        </FilterProductProvider>
      </AppProvider>
    </div>
  );
};

export default App;
