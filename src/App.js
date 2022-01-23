import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Components/Layouts/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './Components/Pages/Error404';
import AddContact from './Components/Pages/Contact/AddContact';
import EditContact from './Components/Pages/Contact/EditContact';
import ViewContact from './Components/Pages/Contact/ViewContact';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/contact/new" element={<AddContact />} />
          <Route path="/contact/edit/:contactId" element={<EditContact />} />
          <Route path="/contact/view/:contactId" element={<ViewContact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
