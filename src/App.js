import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes >
        <Route path='/overview'  element={<Overview/>} exact/>
        <Route path='/reports'  element={<Reports/>} exact/>
        <Route path='/reports/reports1'  element={<ReportsOne/>} exact/>
        <Route path='/reports/reports2'  element={<ReportsTwo/>} exact/>
        <Route path='/reports/reports3'  element={<ReportsThree/>} exact/>
        <Route path='/team'  element={<Team/>} exact />
      </Routes >
    </Router>
    
  );
}

export default App;
