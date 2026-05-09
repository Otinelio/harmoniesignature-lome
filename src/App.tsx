import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Public Pages
import DepartementsHub from './pages/DepartementsHub';
import Piscine from './pages/Piscine';
import Bowling from './pages/Bowling';
import Spa from './pages/Spa';
import Gym from './pages/Gym';
import Sports from './pages/Sports';
import Restauration from './pages/Restauration';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';

// Admin
import AdminLogin from './pages/Admin/AdminLogin';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminDepartements from './pages/Admin/AdminDepartements';
import AdminRestauration from './pages/Admin/AdminRestauration';
import AdminMedias from './pages/Admin/AdminMedias';
import AdminParametres from './pages/Admin/AdminParametres';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="departements" element={<DepartementsHub />} />
          <Route path="piscine" element={<Piscine />} />
          <Route path="bowling" element={<Bowling />} />
          <Route path="spa" element={<Spa />} />
          <Route path="gym" element={<Gym />} />
          <Route path="sports" element={<Sports />} />
          <Route path="restauration" element={<Restauration />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="admin-hs-2025" element={<AdminLogin />} />
          <Route path="admin-hs-2025" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="departements" element={<AdminDepartements />} />
            <Route path="restauration" element={<AdminRestauration />} />
            <Route path="medias" element={<AdminMedias />} />
            <Route path="parametres" element={<AdminParametres />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
