import './App.css';
import Infor from './components/Infor';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Infor />
      <Introduction />
    </div>
  );
}

export default App;
