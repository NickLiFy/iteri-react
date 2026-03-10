import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ServiceGallery } from './pages/ServiceGallery';

function App() {
 return (
 /* basename поможет роутеру понимать, что мы работаем внутри папки /iteri-react */
 <Router>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/sluzby/:category" element={<ServiceGallery />} />
 <Route path='/projekty/:category' element={<ServiceGallery />} />
 </Routes>
 </Router>
 );
}

export default App;