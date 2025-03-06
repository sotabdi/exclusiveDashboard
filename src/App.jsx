import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, // Make sure to import RouterProvider
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout"; // Ensure the correct path to RootLayout
import Banner from "./Pages/Banner";
import BestSelling from "./Pages/BestSelling";
import Category from "./Pages/Category";
import FlashSale from "./Pages/FlashSale";
import Overview from "./Pages/Overview";
import Products from "./Pages/Products";
import SubCategory from "./Pages/SubCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Overview/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/subcategory" element={<SubCategory/>}/>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/bestselling" element={<BestSelling/>}/>
      <Route path="/flashsale" element={<FlashSale/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;