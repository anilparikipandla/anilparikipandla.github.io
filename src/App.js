import './App.css';
import Header from './components/header/Header';
import BackgroundGrid from './components/ui/BackgroundGrid';
import Sidebar from './components/sidebar/Sidebar';
import EventModal from './components/Event/EventModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Context } from './store/Context';
function App() {
  const { modal } = useContext(Context);
  const [showCreateModal] = modal;
  return (
    <div className='mainApp'>
      <Sidebar />
      <div className='mainpage'>
        <Header>Personal Project</Header>
        <div className='Box'>
          {showCreateModal && <EventModal></EventModal>}
          <BackgroundGrid />
        </div>
      </div>
    </div>
  );
}
export default App;
