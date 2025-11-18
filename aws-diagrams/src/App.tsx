
import DiagramGallery from './components/DiagramGallery';
import './App.css';
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <div className="App">
      <DiagramGallery />
      <Analytics />
    </div>
  );
}

export default App;
