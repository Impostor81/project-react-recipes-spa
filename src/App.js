import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router basename="/project-react-recipes-spa">
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/category/:name" element={<Category />}/>
            <Route path="/meal/:id" element={<Recipe />}/>
            <Route path="*" element={<NotFound />}/> {/*отработает когда, будет любой другой адрес введен*/}
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
