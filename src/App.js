import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListItems from "./pages/ListItems";

function App() {

  return (
    <div className="text-[16px]">
      <Header />
      <SearchBar />
      <ListItems />
    </div>
  );
}

export default App;
