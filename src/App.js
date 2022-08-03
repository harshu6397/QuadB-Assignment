import './App.css';
import Content from './components/UserCardContainer/UserCardContainer';
import Navbar from './components/Navbar/Navbar';
import Summary from './components/Summary/Summary';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form from './components/Form/Form';


function App() {
  
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path='/' element={<Content/>} />
        <Route exact path='/summary/:id' element={<Summary/>} />
        <Route exact path='/book-ticket/form' element={<Form/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
