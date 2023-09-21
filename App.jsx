

import './App.css'
import './pages.css'
import './responsive.css'
import Navigation from './components/Navigation'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TankenPage from './pages/TankenPage'
import UrtekramPage from './pages/UrtekramPage'
import HamannsPage from './pages/HamannsPage'
import NipponPage from './pages/NipponPage'
import AlbertPage from './pages/AlbertPage'
import DesignPage from './pages/DesignPage'



function App() {

  return (
  <section className='background'>
    <>
    <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/experiencepage" element={<ExperiencePage />} />
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/tankenpage" element={<TankenPage />} />
        <Route path="/urtekrampage" element={<UrtekramPage />} />
        <Route path="/nipponpage" element={<NipponPage />} />
        <Route path="/albertpage" element={<AlbertPage />} />
        <Route path="/hamannspage" element={<HamannsPage />} />
        <Route path="/designpage" element={<DesignPage />} />
      </Routes>


    </>
    </section>
  );

  
}

export default App






