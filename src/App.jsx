import { Header, Main, Footer } from './SectionLayout/index';
import { Tidio, ScrollToTop, Toastify } from './Components/index';

const App = () => (
    <main className='font-Nunito'>
        <Header />
        <Toastify />
        <Main />
        <ScrollToTop />
        <Tidio />
        <Footer />
    </main>
);

export default App;
