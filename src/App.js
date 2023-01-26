import React from "react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import ListItems from "./components/Items/ListItems";
import CartProvider from "./components/store/CardProvider";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";

const routes = createRoutesFromElements(
  <Route>
    <Route
      path="/"
      element={
        <CartProvider>
          <NavBar />
          <ListItems />
          <Footer></Footer>
        </CartProvider>
      }
    />
    <Route
      path="/About"
      element={
        <CartProvider>
          <NavBar />
          <AboutPage />
          <Footer></Footer>
        </CartProvider>
      }
    />
  </Route>
);
const router = createBrowserRouter(routes)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <CartProvider>
//         <NavBar />
//         <ListItems />
//         <Footer></Footer>
//       </CartProvider>
//     ),
//   },
//   {
//     path: "/About",
//     element: (
//       <CartProvider>
//         <NavBar />
//         <AboutPage />
//         <Footer></Footer>
//       </CartProvider>
//     ),
//   },
// ]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
