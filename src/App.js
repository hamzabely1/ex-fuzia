import './App.css';

import { BrowserRouter , Route ,Routes } from 'react-router-dom';

import Heder from './component/Heder';
import Home from './Home';
import Reg from './Reg';
import Article from './Article';
import Okay from './component/Okay';
function App() {
  return (
    <div className="App">
   






<BrowserRouter>



<Routes>

<Route path="connexion" element={<Reg/>} />
<Route path="home" element={<Home/>} />
<Route path="article" element={<Article/>} />
<Route path="/okay" element={<Okay/>} />

</Routes>
</BrowserRouter>

   
    </div>
  );
}

export default App;
