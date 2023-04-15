// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavigationMenu from "Components/Nav"
import Header from 'Pages/HomePage/Header';


function App() {
  return (
    <div  fluid className="App">
      <NavigationMenu/>
      <Header/>
      <h1 className="text-3xl text-red-500 font-bold underline text-center">Hello world!</h1> 
    </div>
  );
}

export default App;
