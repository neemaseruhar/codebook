
import './App.css';
import { MyRoutes } from './routes/MyRoutes.js';
import { Header , Footer} from './components';

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
