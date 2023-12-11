import { Route, Routes } from "react-router-dom";
import { AppMenu, Footer } from "./layout";
import {
  AboutCompany,
  Blogs,
  Calculator,
  Contact,
  Katalog,
  KatalogItem,
  Main,
} from "./pages";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Routes>
        <Route Component={Main} path="/" />
        <Route Component={Katalog} path="/katalog" />
        <Route Component={KatalogItem} path="/katalog-item/:id" />
        <Route Component={AboutCompany} path="/about-us" />
        <Route Component={Blogs} path="/blogs" />
        <Route Component={Calculator} path="/calculator" />
        <Route Component={Contact} path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
