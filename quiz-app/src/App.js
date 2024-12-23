import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './redux/store.js'
import HomePage from '../src/routes/HomePage'
import QuizPage from '../src/routes/QuizPage'
import ErrorPage from '../src/routes/ErrorPage'
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header className='w-full flex justify-center items-center'>
          <h1 className='text-4xl font-bold'>Quiz App &#128203;</h1>
        </header>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizPage" element={<QuizPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
