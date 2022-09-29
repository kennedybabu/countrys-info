import React, {useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListItems from "./pages/ListItems";


function App() {
const [dark, setDark] = useState(false)

const darkMode = {
  backgroundColor: '#202c37',  
  color: 'white'
}


const lightMode = {
  backgroundColor : '#fafafa',
  color: 'black'
}


function handleChange() {
  setDark(!dark)
}

  return (
    <div className="text-[16px]" style={dark? darkMode : lightMode}>
      <Header handleChange={handleChange} dark={dark} darkMode={darkMode} lightMode={lightMode}/>
      <SearchBar dark={dark} darkMode={darkMode} lightMode={lightMode}/>
      <ListItems dark={dark} darkMode={darkMode} lightMode={lightMode}/>
    </div>
  );
}

export default App;
