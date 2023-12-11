import { Route, Routes } from "react-router-dom";
import { AppMenu, Footer } from "./layout";
import { Katalog, KatalogItem, Main } from "./pages";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Routes>
        <Route Component={Main} path="/" />
        <Route Component={Katalog} path="/katalog" />
        <Route Component={KatalogItem} path="/katalog-item/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
