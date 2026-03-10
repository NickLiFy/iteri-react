import { Header } from '../layout/Header';
import { Hero } from '../features/Hero';
import { About } from '../features/About';
import { References } from '../features/References';
import { Services } from '../features/Services';
import { Projects } from '../features/Projects';
import { Contact } from '../features/Contact';

export const Home = () => {
 return (
 <>
 <Header />
 <Hero />
 <About />
 <References />
 <Services />
 <Projects />
 <Contact />
 </>
 );
};