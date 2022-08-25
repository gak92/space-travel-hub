import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/home/Missions';
import MyProfile from './components/home/MyProfile';
import Rockets from './components/home/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="horizontal-line" />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
