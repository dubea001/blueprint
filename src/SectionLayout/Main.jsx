import {
    About,
    ContactUs,
    CoreValues,
    Faq,
    Services,
    Testimonials,
    Professional,
} from '../Sections/index';

const Main = () => {
    return (
        <div>
            <About />
            <Services />
            <CoreValues />
            <Testimonials />
            <Faq />
            <Professional />
            <ContactUs />
        </div>
    );
};

export default Main;
