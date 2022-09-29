import React, {useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListItems from "./pages/ListItems";


function App() {
const [dark, setDark] = useState(false)

const darkMode = {
  backgroundColor: '#2b3945',
  color: 'white'
}


const lightMode = {
  backgroundColor : 'white',
  color: 'black'
}


function handleChange() {
  setDark(!dark)
}

  return (
    <div className="text-[16px]">
      <Header dark={dark} handleChange={handleChange} darkMode={darkMode} lightMode={lightMode}/>
      <SearchBar />
      <ListItems />
    </div>
  );
}

export default App;
