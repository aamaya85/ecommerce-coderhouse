import NavBar from "./components/layout/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{textAlign: "center"}}>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default App;
