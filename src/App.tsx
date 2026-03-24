import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Dish } from "./pages/Dish/Dish";
import { Routes, Route } from "react-router-dom";
import { AddDish } from "./pages/AddDish/AddDish";
import { EditDish } from "./pages/EditDish/EditDish";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dish/create' element={<AddDish />} />
        <Route path='/dish/:id' element={<Dish />} />
        <Route path='/dish/:id/edit' element={<EditDish />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;