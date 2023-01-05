import './App.css';
import Header from "./components/header/Header";
import BackgroundGrid from "./components/ui/BackgroundGrid";
import Sidebar from "./components/sidebar/Sidebar";
import Event from "./components/Event/Event";
function App() {
  return (
    <div className="container">
        <Sidebar/>
        <div className="mainpage">
            <Header>
                Personal Project
            </Header>
            <div className="Box">
                {/*<Sidebar/>*/}
                <BackgroundGrid/>
                <Event/>
            </div>
        </div>
    </div>
  );
}
export default App;
