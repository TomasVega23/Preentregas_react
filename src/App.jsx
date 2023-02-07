import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <PromoApp />
      <Footer/>
    </div>
  );
}

export default App;
