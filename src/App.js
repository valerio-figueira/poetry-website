import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// STATICS
import Header from './static/Header';

// PAGES
import Home from './pages/Home';
import Author from './pages/Author';
import Poem from './pages/Poem';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
        <main className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Authors' element={<Home />} />
              <Route path='/Author/:name' element={<Author />} />
              <Route path='/Author/:name/:title' element={<Poem />} />
            </Routes>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
