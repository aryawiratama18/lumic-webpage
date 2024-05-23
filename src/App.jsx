import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import UseCase from "./pages/UseCasePage";
import AboutUs from "./pages/AboutUsPage";
import RootLayout from "./layout/RootLayout";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="use-case" element={<UseCase/>} />
      <Route path="about-us" element={<AboutUs/>} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
