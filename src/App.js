import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Furniture from "./components/Furniture";
import Clients from "./components/clients";

function App() {
  return (
   <div className="App">
     <Header/>
       <Hero/>
       <Service/>
       <Furniture/>
       <Clients/>
       <Footer/>

   </div>
  )
}

export default App;
