import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {
    const form = useRef();

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const country = selectedCountry || form.current['user_country'].value;
        const service = selectedService || form.current['service_needed'].value;

        const formData = new FormData(form.current);
        formData.set('user_country', country);
        formData.set('service_needed', service);

        emailjs
            .sendForm('service_upfk25a', 'template_1vorr8o', form.current, {
                publicKey: 'hVWcm20quWog5gpuk',
            })
            .then(
                () => {
                    form.current.reset();
                    setSelectedCountry('');
                    setSelectedService('');
                    toast.success('Message Sent Successfully');
                },
                (err) => {
                    toast.error(err);
                }
            );
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    return (
        <div className='md:w-[80%] mx-auto rounded-lg shadow-2xl shadow-gray p-4'>
            <form onSubmit={sendEmail} className='space-y-6' ref={form}>
                <div>
                    <label
                        htmlFor='name'
                        className='block text-sm font-normal text-gray'
                    >
                        Name <span className='text-red font-bold'>*</span>
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='from_name'
                        placeholder='Name'
                        required
                        className='mt-1 p-2 border border-gray w-full focus:outline-primary'
                    />
                </div>
                <div>
                    <label
                        htmlFor='email'
                        className='block text-sm font-normal text-gray'
                    >
                        Email <span className='text-red font-bold'>*</span>
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='reply_to'
                        placeholder='Email'
                        required
                        className='mt-1 p-2 border border-gray w-full focus:outline-primary'
                    />
                </div>
                <div>
                    <label
                        htmlFor='country'
                        className='block text-sm font-normal text-gray'
                    >
                        Country <span className='text-red font-bold'>*</span>
                    </label>
                    <select
                        id='country'
                        name='user_country'
                        required='required'
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className='mt-1 p-2 border border-gray w-full focus:outline-primary'
                    >
                        <option value='0' data-id='0'>
                            Select Country
                        </option>
                        <option
                            className='iws_country'
                            value='Afghanistan'
                            data-id='1'
                        >
                            Afghanistan
                        </option>
                        <option
                            className='iws_country'
                            value='Aland Islands'
                            data-id='2'
                        >
                            Aland Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Albania'
                            data-id='3'
                        >
                            Albania
                        </option>
                        <option
                            className='iws_country'
                            value='Algeria'
                            data-id='4'
                        >
                            Algeria
                        </option>
                        <option
                            className='iws_country'
                            value='American Samoa'
                            data-id='5'
                        >
                            American Samoa
                        </option>
                        <option
                            className='iws_country'
                            value='Andorra'
                            data-id='6'
                        >
                            Andorra
                        </option>
                        <option
                            className='iws_country'
                            value='Angola'
                            data-id='7'
                        >
                            Angola
                        </option>
                        <option
                            className='iws_country'
                            value='Anguilla'
                            data-id='8'
                        >
                            Anguilla
                        </option>
                        <option
                            className='iws_country'
                            value='Antarctica'
                            data-id='9'
                        >
                            Antarctica
                        </option>
                        <option
                            className='iws_country'
                            value='Antigua And Barbuda'
                            data-id='10'
                        >
                            Antigua And Barbuda
                        </option>
                        <option
                            className='iws_country'
                            value='Argentina'
                            data-id='11'
                        >
                            Argentina
                        </option>
                        <option
                            className='iws_country'
                            value='Armenia'
                            data-id='12'
                        >
                            Armenia
                        </option>
                        <option
                            className='iws_country'
                            value='Aruba'
                            data-id='13'
                        >
                            Aruba
                        </option>
                        <option
                            className='iws_country'
                            value='Australia'
                            data-id='14'
                        >
                            Australia
                        </option>
                        <option
                            className='iws_country'
                            value='Austria'
                            data-id='15'
                        >
                            Austria
                        </option>
                        <option
                            className='iws_country'
                            value='Azerbaijan'
                            data-id='16'
                        >
                            Azerbaijan
                        </option>
                        <option
                            className='iws_country'
                            value='Bahamas The'
                            data-id='17'
                        >
                            Bahamas The
                        </option>
                        <option
                            className='iws_country'
                            value='Bahrain'
                            data-id='18'
                        >
                            Bahrain
                        </option>
                        <option
                            className='iws_country'
                            value='Bangladesh'
                            data-id='19'
                        >
                            Bangladesh
                        </option>
                        <option
                            className='iws_country'
                            value='Barbados'
                            data-id='20'
                        >
                            Barbados
                        </option>
                        <option
                            className='iws_country'
                            value='Belarus'
                            data-id='21'
                        >
                            Belarus
                        </option>
                        <option
                            className='iws_country'
                            value='Belgium'
                            data-id='22'
                        >
                            Belgium
                        </option>
                        <option
                            className='iws_country'
                            value='Belize'
                            data-id='23'
                        >
                            Belize
                        </option>
                        <option
                            className='iws_country'
                            value='Benin'
                            data-id='24'
                        >
                            Benin
                        </option>
                        <option
                            className='iws_country'
                            value='Bermuda'
                            data-id='25'
                        >
                            Bermuda
                        </option>
                        <option
                            className='iws_country'
                            value='Bhutan'
                            data-id='26'
                        >
                            Bhutan
                        </option>
                        <option
                            className='iws_country'
                            value='Bolivia'
                            data-id='27'
                        >
                            Bolivia
                        </option>
                        <option
                            className='iws_country'
                            value='Bonaire, Sint Eustatius and Saba'
                            data-id='155'
                        >
                            Bonaire, Sint Eustatius and Saba
                        </option>
                        <option
                            className='iws_country'
                            value='Bosnia and Herzegovina'
                            data-id='28'
                        >
                            Bosnia and Herzegovina
                        </option>
                        <option
                            className='iws_country'
                            value='Botswana'
                            data-id='29'
                        >
                            Botswana
                        </option>
                        <option
                            className='iws_country'
                            value='Bouvet Island'
                            data-id='30'
                        >
                            Bouvet Island
                        </option>
                        <option
                            className='iws_country'
                            value='Brazil'
                            data-id='31'
                        >
                            Brazil
                        </option>
                        <option
                            className='iws_country'
                            value='British Indian Ocean Territory'
                            data-id='32'
                        >
                            British Indian Ocean Territory
                        </option>
                        <option
                            className='iws_country'
                            value='Brunei'
                            data-id='33'
                        >
                            Brunei
                        </option>
                        <option
                            className='iws_country'
                            value='Bulgaria'
                            data-id='34'
                        >
                            Bulgaria
                        </option>
                        <option
                            className='iws_country'
                            value='Burkina Faso'
                            data-id='35'
                        >
                            Burkina Faso
                        </option>
                        <option
                            className='iws_country'
                            value='Burundi'
                            data-id='36'
                        >
                            Burundi
                        </option>
                        <option
                            className='iws_country'
                            value='Cambodia'
                            data-id='37'
                        >
                            Cambodia
                        </option>
                        <option
                            className='iws_country'
                            value='Cameroon'
                            data-id='38'
                        >
                            Cameroon
                        </option>
                        <option
                            className='iws_country'
                            value='Canada'
                            data-id='39'
                        >
                            Canada
                        </option>
                        <option
                            className='iws_country'
                            value='Cape Verde'
                            data-id='40'
                        >
                            Cape Verde
                        </option>
                        <option
                            className='iws_country'
                            value='Cayman Islands'
                            data-id='41'
                        >
                            Cayman Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Central African Republic'
                            data-id='42'
                        >
                            Central African Republic
                        </option>
                        <option
                            className='iws_country'
                            value='Chad'
                            data-id='43'
                        >
                            Chad
                        </option>
                        <option
                            className='iws_country'
                            value='Chile'
                            data-id='44'
                        >
                            Chile
                        </option>
                        <option
                            className='iws_country'
                            value='China'
                            data-id='45'
                        >
                            China
                        </option>
                        <option
                            className='iws_country'
                            value='Christmas Island'
                            data-id='46'
                        >
                            Christmas Island
                        </option>
                        <option
                            className='iws_country'
                            value='Cocos (Keeling) Islands'
                            data-id='47'
                        >
                            Cocos (Keeling) Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Colombia'
                            data-id='48'
                        >
                            Colombia
                        </option>
                        <option
                            className='iws_country'
                            value='Comoros'
                            data-id='49'
                        >
                            Comoros
                        </option>
                        <option
                            className='iws_country'
                            value='Congo'
                            data-id='50'
                        >
                            Congo
                        </option>
                        <option
                            className='iws_country'
                            value='Cook Islands'
                            data-id='52'
                        >
                            Cook Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Costa Rica'
                            data-id='53'
                        >
                            Costa Rica
                        </option>
                        <option
                            className='iws_country'
                            value="Cote D'Ivoire (Ivory Coast)"
                            data-id='54'
                        >
                            Cote D'Ivoire (Ivory Coast)
                        </option>
                        <option
                            className='iws_country'
                            value='Croatia'
                            data-id='55'
                        >
                            Croatia
                        </option>
                        <option
                            className='iws_country'
                            value='Cuba'
                            data-id='56'
                        >
                            Cuba
                        </option>
                        <option
                            className='iws_country'
                            value='Curaçao'
                            data-id='249'
                        >
                            Curaçao
                        </option>
                        <option
                            className='iws_country'
                            value='Cyprus'
                            data-id='57'
                        >
                            Cyprus
                        </option>
                        <option
                            className='iws_country'
                            value='Czech Republic'
                            data-id='58'
                        >
                            Czech Republic
                        </option>
                        <option
                            className='iws_country'
                            value='Democratic Republic of the Congo'
                            data-id='51'
                        >
                            Democratic Republic of the Congo
                        </option>
                        <option
                            className='iws_country'
                            value='Denmark'
                            data-id='59'
                        >
                            Denmark
                        </option>
                        <option
                            className='iws_country'
                            value='Djibouti'
                            data-id='60'
                        >
                            Djibouti
                        </option>
                        <option
                            className='iws_country'
                            value='Dominica'
                            data-id='61'
                        >
                            Dominica
                        </option>
                        <option
                            className='iws_country'
                            value='Dominican Republic'
                            data-id='62'
                        >
                            Dominican Republic
                        </option>
                        <option
                            className='iws_country'
                            value='East Timor'
                            data-id='63'
                        >
                            East Timor
                        </option>
                        <option
                            className='iws_country'
                            value='Ecuador'
                            data-id='64'
                        >
                            Ecuador
                        </option>
                        <option
                            className='iws_country'
                            value='Egypt'
                            data-id='65'
                        >
                            Egypt
                        </option>
                        <option
                            className='iws_country'
                            value='El Salvador'
                            data-id='66'
                        >
                            El Salvador
                        </option>
                        <option
                            className='iws_country'
                            value='Equatorial Guinea'
                            data-id='67'
                        >
                            Equatorial Guinea
                        </option>
                        <option
                            className='iws_country'
                            value='Eritrea'
                            data-id='68'
                        >
                            Eritrea
                        </option>
                        <option
                            className='iws_country'
                            value='Estonia'
                            data-id='69'
                        >
                            Estonia
                        </option>
                        <option
                            className='iws_country'
                            value='Ethiopia'
                            data-id='70'
                        >
                            Ethiopia
                        </option>
                        <option
                            className='iws_country'
                            value='Falkland Islands'
                            data-id='71'
                        >
                            Falkland Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Faroe Islands'
                            data-id='72'
                        >
                            Faroe Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Fiji Islands'
                            data-id='73'
                        >
                            Fiji Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Finland'
                            data-id='74'
                        >
                            Finland
                        </option>
                        <option
                            className='iws_country'
                            value='France'
                            data-id='75'
                        >
                            France
                        </option>
                        <option
                            className='iws_country'
                            value='French Guiana'
                            data-id='76'
                        >
                            French Guiana
                        </option>
                        <option
                            className='iws_country'
                            value='French Polynesia'
                            data-id='77'
                        >
                            French Polynesia
                        </option>
                        <option
                            className='iws_country'
                            value='French Southern Territories'
                            data-id='78'
                        >
                            French Southern Territories
                        </option>
                        <option
                            className='iws_country'
                            value='Gabon'
                            data-id='79'
                        >
                            Gabon
                        </option>
                        <option
                            className='iws_country'
                            value='Gambia The'
                            data-id='80'
                        >
                            Gambia The
                        </option>
                        <option
                            className='iws_country'
                            value='Georgia'
                            data-id='81'
                        >
                            Georgia
                        </option>
                        <option
                            className='iws_country'
                            value='Germany'
                            data-id='82'
                        >
                            Germany
                        </option>
                        <option
                            className='iws_country'
                            value='Ghana'
                            data-id='83'
                        >
                            Ghana
                        </option>
                        <option
                            className='iws_country'
                            value='Gibraltar'
                            data-id='84'
                        >
                            Gibraltar
                        </option>
                        <option
                            className='iws_country'
                            value='Greece'
                            data-id='85'
                        >
                            Greece
                        </option>
                        <option
                            className='iws_country'
                            value='Greenland'
                            data-id='86'
                        >
                            Greenland
                        </option>
                        <option
                            className='iws_country'
                            value='Grenada'
                            data-id='87'
                        >
                            Grenada
                        </option>
                        <option
                            className='iws_country'
                            value='Guadeloupe'
                            data-id='88'
                        >
                            Guadeloupe
                        </option>
                        <option
                            className='iws_country'
                            value='Guam'
                            data-id='89'
                        >
                            Guam
                        </option>
                        <option
                            className='iws_country'
                            value='Guatemala'
                            data-id='90'
                        >
                            Guatemala
                        </option>
                        <option
                            className='iws_country'
                            value='Guernsey and Alderney'
                            data-id='91'
                        >
                            Guernsey and Alderney
                        </option>
                        <option
                            className='iws_country'
                            value='Guinea'
                            data-id='92'
                        >
                            Guinea
                        </option>
                        <option
                            className='iws_country'
                            value='Guinea-Bissau'
                            data-id='93'
                        >
                            Guinea-Bissau
                        </option>
                        <option
                            className='iws_country'
                            value='Guyana'
                            data-id='94'
                        >
                            Guyana
                        </option>
                        <option
                            className='iws_country'
                            value='Haiti'
                            data-id='95'
                        >
                            Haiti
                        </option>
                        <option
                            className='iws_country'
                            value='Heard Island and McDonald Islands'
                            data-id='96'
                        >
                            Heard Island and McDonald Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Honduras'
                            data-id='97'
                        >
                            Honduras
                        </option>
                        <option
                            className='iws_country'
                            value='Hong Kong S.A.R.'
                            data-id='98'
                        >
                            Hong Kong S.A.R.
                        </option>
                        <option
                            className='iws_country'
                            value='Hungary'
                            data-id='99'
                        >
                            Hungary
                        </option>
                        <option
                            className='iws_country'
                            value='Iceland'
                            data-id='100'
                        >
                            Iceland
                        </option>
                        <option
                            className='iws_country'
                            value='India'
                            data-id='101'
                        >
                            India
                        </option>
                        <option
                            className='iws_country'
                            value='Indonesia'
                            data-id='102'
                        >
                            Indonesia
                        </option>
                        <option
                            className='iws_country'
                            value='Iran'
                            data-id='103'
                        >
                            Iran
                        </option>
                        <option
                            className='iws_country'
                            value='Iraq'
                            data-id='104'
                        >
                            Iraq
                        </option>
                        <option
                            className='iws_country'
                            value='Ireland'
                            data-id='105'
                        >
                            Ireland
                        </option>
                        <option
                            className='iws_country'
                            value='Israel'
                            data-id='106'
                        >
                            Israel
                        </option>
                        <option
                            className='iws_country'
                            value='Italy'
                            data-id='107'
                        >
                            Italy
                        </option>
                        <option
                            className='iws_country'
                            value='Jamaica'
                            data-id='108'
                        >
                            Jamaica
                        </option>
                        <option
                            className='iws_country'
                            value='Japan'
                            data-id='109'
                        >
                            Japan
                        </option>
                        <option
                            className='iws_country'
                            value='Jersey'
                            data-id='110'
                        >
                            Jersey
                        </option>
                        <option
                            className='iws_country'
                            value='Jordan'
                            data-id='111'
                        >
                            Jordan
                        </option>
                        <option
                            className='iws_country'
                            value='Kazakhstan'
                            data-id='112'
                        >
                            Kazakhstan
                        </option>
                        <option
                            className='iws_country'
                            value='Kenya'
                            data-id='113'
                        >
                            Kenya
                        </option>
                        <option
                            className='iws_country'
                            value='Kiribati'
                            data-id='114'
                        >
                            Kiribati
                        </option>
                        <option
                            className='iws_country'
                            value='Kosovo'
                            data-id='248'
                        >
                            Kosovo
                        </option>
                        <option
                            className='iws_country'
                            value='Kuwait'
                            data-id='117'
                        >
                            Kuwait
                        </option>
                        <option
                            className='iws_country'
                            value='Kyrgyzstan'
                            data-id='118'
                        >
                            Kyrgyzstan
                        </option>
                        <option
                            className='iws_country'
                            value='Laos'
                            data-id='119'
                        >
                            Laos
                        </option>
                        <option
                            className='iws_country'
                            value='Latvia'
                            data-id='120'
                        >
                            Latvia
                        </option>
                        <option
                            className='iws_country'
                            value='Lebanon'
                            data-id='121'
                        >
                            Lebanon
                        </option>
                        <option
                            className='iws_country'
                            value='Lesotho'
                            data-id='122'
                        >
                            Lesotho
                        </option>
                        <option
                            className='iws_country'
                            value='Liberia'
                            data-id='123'
                        >
                            Liberia
                        </option>
                        <option
                            className='iws_country'
                            value='Libya'
                            data-id='124'
                        >
                            Libya
                        </option>
                        <option
                            className='iws_country'
                            value='Liechtenstein'
                            data-id='125'
                        >
                            Liechtenstein
                        </option>
                        <option
                            className='iws_country'
                            value='Lithuania'
                            data-id='126'
                        >
                            Lithuania
                        </option>
                        <option
                            className='iws_country'
                            value='Luxembourg'
                            data-id='127'
                        >
                            Luxembourg
                        </option>
                        <option
                            className='iws_country'
                            value='Macau S.A.R.'
                            data-id='128'
                        >
                            Macau S.A.R.
                        </option>
                        <option
                            className='iws_country'
                            value='Macedonia'
                            data-id='129'
                        >
                            Macedonia
                        </option>
                        <option
                            className='iws_country'
                            value='Madagascar'
                            data-id='130'
                        >
                            Madagascar
                        </option>
                        <option
                            className='iws_country'
                            value='Malawi'
                            data-id='131'
                        >
                            Malawi
                        </option>
                        <option
                            className='iws_country'
                            value='Malaysia'
                            data-id='132'
                        >
                            Malaysia
                        </option>
                        <option
                            className='iws_country'
                            value='Maldives'
                            data-id='133'
                        >
                            Maldives
                        </option>
                        <option
                            className='iws_country'
                            value='Mali'
                            data-id='134'
                        >
                            Mali
                        </option>
                        <option
                            className='iws_country'
                            value='Malta'
                            data-id='135'
                        >
                            Malta
                        </option>
                        <option
                            className='iws_country'
                            value='Man (Isle of)'
                            data-id='136'
                        >
                            Man (Isle of)
                        </option>
                        <option
                            className='iws_country'
                            value='Marshall Islands'
                            data-id='137'
                        >
                            Marshall Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Martinique'
                            data-id='138'
                        >
                            Martinique
                        </option>
                        <option
                            className='iws_country'
                            value='Mauritania'
                            data-id='139'
                        >
                            Mauritania
                        </option>
                        <option
                            className='iws_country'
                            value='Mauritius'
                            data-id='140'
                        >
                            Mauritius
                        </option>
                        <option
                            className='iws_country'
                            value='Mayotte'
                            data-id='141'
                        >
                            Mayotte
                        </option>
                        <option
                            className='iws_country'
                            value='Mexico'
                            data-id='142'
                        >
                            Mexico
                        </option>
                        <option
                            className='iws_country'
                            value='Micronesia'
                            data-id='143'
                        >
                            Micronesia
                        </option>
                        <option
                            className='iws_country'
                            value='Moldova'
                            data-id='144'
                        >
                            Moldova
                        </option>
                        <option
                            className='iws_country'
                            value='Monaco'
                            data-id='145'
                        >
                            Monaco
                        </option>
                        <option
                            className='iws_country'
                            value='Mongolia'
                            data-id='146'
                        >
                            Mongolia
                        </option>
                        <option
                            className='iws_country'
                            value='Montenegro'
                            data-id='147'
                        >
                            Montenegro
                        </option>
                        <option
                            className='iws_country'
                            value='Montserrat'
                            data-id='148'
                        >
                            Montserrat
                        </option>
                        <option
                            className='iws_country'
                            value='Morocco'
                            data-id='149'
                        >
                            Morocco
                        </option>
                        <option
                            className='iws_country'
                            value='Mozambique'
                            data-id='150'
                        >
                            Mozambique
                        </option>
                        <option
                            className='iws_country'
                            value='Myanmar'
                            data-id='151'
                        >
                            Myanmar
                        </option>
                        <option
                            className='iws_country'
                            value='Namibia'
                            data-id='152'
                        >
                            Namibia
                        </option>
                        <option
                            className='iws_country'
                            value='Nauru'
                            data-id='153'
                        >
                            Nauru
                        </option>
                        <option
                            className='iws_country'
                            value='Nepal'
                            data-id='154'
                        >
                            Nepal
                        </option>
                        <option
                            className='iws_country'
                            value='Netherlands'
                            data-id='156'
                        >
                            Netherlands
                        </option>
                        <option
                            className='iws_country'
                            value='New Caledonia'
                            data-id='157'
                        >
                            New Caledonia
                        </option>
                        <option
                            className='iws_country'
                            value='New Zealand'
                            data-id='158'
                        >
                            New Zealand
                        </option>
                        <option
                            className='iws_country'
                            value='Nicaragua'
                            data-id='159'
                        >
                            Nicaragua
                        </option>
                        <option
                            className='iws_country'
                            value='Niger'
                            data-id='160'
                        >
                            Niger
                        </option>
                        <option
                            className='iws_country'
                            value='Nigeria'
                            data-id='161'
                        >
                            Nigeria
                        </option>
                        <option
                            className='iws_country'
                            value='Niue'
                            data-id='162'
                        >
                            Niue
                        </option>
                        <option
                            className='iws_country'
                            value='Norfolk Island'
                            data-id='163'
                        >
                            Norfolk Island
                        </option>
                        <option
                            className='iws_country'
                            value='North Korea'
                            data-id='115'
                        >
                            North Korea
                        </option>
                        <option
                            className='iws_country'
                            value='Northern Mariana Islands'
                            data-id='164'
                        >
                            Northern Mariana Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Norway'
                            data-id='165'
                        >
                            Norway
                        </option>
                        <option
                            className='iws_country'
                            value='Oman'
                            data-id='166'
                        >
                            Oman
                        </option>
                        <option
                            className='iws_country'
                            value='Pakistan'
                            data-id='167'
                        >
                            Pakistan
                        </option>
                        <option
                            className='iws_country'
                            value='Palau'
                            data-id='168'
                        >
                            Palau
                        </option>
                        <option
                            className='iws_country'
                            value='Palestinian Territory Occupied'
                            data-id='169'
                        >
                            Palestinian Territory Occupied
                        </option>
                        <option
                            className='iws_country'
                            value='Panama'
                            data-id='170'
                        >
                            Panama
                        </option>
                        <option
                            className='iws_country'
                            value='Papua new Guinea'
                            data-id='171'
                        >
                            Papua new Guinea
                        </option>
                        <option
                            className='iws_country'
                            value='Paraguay'
                            data-id='172'
                        >
                            Paraguay
                        </option>
                        <option
                            className='iws_country'
                            value='Peru'
                            data-id='173'
                        >
                            Peru
                        </option>
                        <option
                            className='iws_country'
                            value='Philippines'
                            data-id='174'
                        >
                            Philippines
                        </option>
                        <option
                            className='iws_country'
                            value='Pitcairn Island'
                            data-id='175'
                        >
                            Pitcairn Island
                        </option>
                        <option
                            className='iws_country'
                            value='Poland'
                            data-id='176'
                        >
                            Poland
                        </option>
                        <option
                            className='iws_country'
                            value='Portugal'
                            data-id='177'
                        >
                            Portugal
                        </option>
                        <option
                            className='iws_country'
                            value='Puerto Rico'
                            data-id='178'
                        >
                            Puerto Rico
                        </option>
                        <option
                            className='iws_country'
                            value='Qatar'
                            data-id='179'
                        >
                            Qatar
                        </option>
                        <option
                            className='iws_country'
                            value='Reunion'
                            data-id='180'
                        >
                            Reunion
                        </option>
                        <option
                            className='iws_country'
                            value='Romania'
                            data-id='181'
                        >
                            Romania
                        </option>
                        <option
                            className='iws_country'
                            value='Russia'
                            data-id='182'
                        >
                            Russia
                        </option>
                        <option
                            className='iws_country'
                            value='Rwanda'
                            data-id='183'
                        >
                            Rwanda
                        </option>
                        <option
                            className='iws_country'
                            value='Saint Helena'
                            data-id='184'
                        >
                            Saint Helena
                        </option>
                        <option
                            className='iws_country'
                            value='Saint Kitts And Nevis'
                            data-id='185'
                        >
                            Saint Kitts And Nevis
                        </option>
                        <option
                            className='iws_country'
                            value='Saint Lucia'
                            data-id='186'
                        >
                            Saint Lucia
                        </option>
                        <option
                            className='iws_country'
                            value='Saint Pierre and Miquelon'
                            data-id='187'
                        >
                            Saint Pierre and Miquelon
                        </option>
                        <option
                            className='iws_country'
                            value='Saint Vincent And The Grenadines'
                            data-id='188'
                        >
                            Saint Vincent And The Grenadines
                        </option>
                        <option
                            className='iws_country'
                            value='Saint-Barthelemy'
                            data-id='189'
                        >
                            Saint-Barthelemy
                        </option>
                        <option
                            className='iws_country'
                            value='Saint-Martin (French part)'
                            data-id='190'
                        >
                            Saint-Martin (French part)
                        </option>
                        <option
                            className='iws_country'
                            value='Samoa'
                            data-id='191'
                        >
                            Samoa
                        </option>
                        <option
                            className='iws_country'
                            value='San Marino'
                            data-id='192'
                        >
                            San Marino
                        </option>
                        <option
                            className='iws_country'
                            value='Sao Tome and Principe'
                            data-id='193'
                        >
                            Sao Tome and Principe
                        </option>
                        <option
                            className='iws_country'
                            value='Saudi Arabia'
                            data-id='194'
                        >
                            Saudi Arabia
                        </option>
                        <option
                            className='iws_country'
                            value='Senegal'
                            data-id='195'
                        >
                            Senegal
                        </option>
                        <option
                            className='iws_country'
                            value='Serbia'
                            data-id='196'
                        >
                            Serbia
                        </option>
                        <option
                            className='iws_country'
                            value='Seychelles'
                            data-id='197'
                        >
                            Seychelles
                        </option>
                        <option
                            className='iws_country'
                            value='Sierra Leone'
                            data-id='198'
                        >
                            Sierra Leone
                        </option>
                        <option
                            className='iws_country'
                            value='Singapore'
                            data-id='199'
                        >
                            Singapore
                        </option>
                        <option
                            className='iws_country'
                            value='Sint Maarten (Dutch part)'
                            data-id='250'
                        >
                            Sint Maarten (Dutch part)
                        </option>
                        <option
                            className='iws_country'
                            value='Slovakia'
                            data-id='200'
                        >
                            Slovakia
                        </option>
                        <option
                            className='iws_country'
                            value='Slovenia'
                            data-id='201'
                        >
                            Slovenia
                        </option>
                        <option
                            className='iws_country'
                            value='Solomon Islands'
                            data-id='202'
                        >
                            Solomon Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Somalia'
                            data-id='203'
                        >
                            Somalia
                        </option>
                        <option
                            className='iws_country'
                            value='South Africa'
                            data-id='204'
                        >
                            South Africa
                        </option>
                        <option
                            className='iws_country'
                            value='South Georgia'
                            data-id='205'
                        >
                            South Georgia
                        </option>
                        <option
                            className='iws_country'
                            value='South Korea'
                            data-id='116'
                        >
                            South Korea
                        </option>
                        <option
                            className='iws_country'
                            value='South Sudan'
                            data-id='206'
                        >
                            South Sudan
                        </option>
                        <option
                            className='iws_country'
                            value='Spain'
                            data-id='207'
                        >
                            Spain
                        </option>
                        <option
                            className='iws_country'
                            value='Sri Lanka'
                            data-id='208'
                        >
                            Sri Lanka
                        </option>
                        <option
                            className='iws_country'
                            value='Sudan'
                            data-id='209'
                        >
                            Sudan
                        </option>
                        <option
                            className='iws_country'
                            value='Suriname'
                            data-id='210'
                        >
                            Suriname
                        </option>
                        <option
                            className='iws_country'
                            value='Svalbard And Jan Mayen Islands'
                            data-id='211'
                        >
                            Svalbard And Jan Mayen Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Swaziland'
                            data-id='212'
                        >
                            Swaziland
                        </option>
                        <option
                            className='iws_country'
                            value='Sweden'
                            data-id='213'
                        >
                            Sweden
                        </option>
                        <option
                            className='iws_country'
                            value='Switzerland'
                            data-id='214'
                        >
                            Switzerland
                        </option>
                        <option
                            className='iws_country'
                            value='Syria'
                            data-id='215'
                        >
                            Syria
                        </option>
                        <option
                            className='iws_country'
                            value='Taiwan'
                            data-id='216'
                        >
                            Taiwan
                        </option>
                        <option
                            className='iws_country'
                            value='Tajikistan'
                            data-id='217'
                        >
                            Tajikistan
                        </option>
                        <option
                            className='iws_country'
                            value='Tanzania'
                            data-id='218'
                        >
                            Tanzania
                        </option>
                        <option
                            className='iws_country'
                            value='Thailand'
                            data-id='219'
                        >
                            Thailand
                        </option>
                        <option
                            className='iws_country'
                            value='Togo'
                            data-id='220'
                        >
                            Togo
                        </option>
                        <option
                            className='iws_country'
                            value='Tokelau'
                            data-id='221'
                        >
                            Tokelau
                        </option>
                        <option
                            className='iws_country'
                            value='Tonga'
                            data-id='222'
                        >
                            Tonga
                        </option>
                        <option
                            className='iws_country'
                            value='Trinidad And Tobago'
                            data-id='223'
                        >
                            Trinidad And Tobago
                        </option>
                        <option
                            className='iws_country'
                            value='Tunisia'
                            data-id='224'
                        >
                            Tunisia
                        </option>
                        <option
                            className='iws_country'
                            value='Turkey'
                            data-id='225'
                        >
                            Turkey
                        </option>
                        <option
                            className='iws_country'
                            value='Turkmenistan'
                            data-id='226'
                        >
                            Turkmenistan
                        </option>
                        <option
                            className='iws_country'
                            value='Turks And Caicos Islands'
                            data-id='227'
                        >
                            Turks And Caicos Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Tuvalu'
                            data-id='228'
                        >
                            Tuvalu
                        </option>
                        <option
                            className='iws_country'
                            value='Uganda'
                            data-id='229'
                        >
                            Uganda
                        </option>
                        <option
                            className='iws_country'
                            value='Ukraine'
                            data-id='230'
                        >
                            Ukraine
                        </option>
                        <option
                            className='iws_country'
                            value='United Arab Emirates'
                            data-id='231'
                        >
                            United Arab Emirates
                        </option>
                        <option
                            className='iws_country'
                            value='United Kingdom'
                            data-id='232'
                        >
                            United Kingdom
                        </option>
                        <option
                            className='iws_country'
                            value='United States'
                            data-id='233'
                        >
                            United States
                        </option>
                        <option
                            className='iws_country'
                            value='United States Minor Outlying Islands'
                            data-id='234'
                        >
                            United States Minor Outlying Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Uruguay'
                            data-id='235'
                        >
                            Uruguay
                        </option>
                        <option
                            className='iws_country'
                            value='Uzbekistan'
                            data-id='236'
                        >
                            Uzbekistan
                        </option>
                        <option
                            className='iws_country'
                            value='Vanuatu'
                            data-id='237'
                        >
                            Vanuatu
                        </option>
                        <option
                            className='iws_country'
                            value='Vatican City State (Holy See)'
                            data-id='238'
                        >
                            Vatican City State (Holy See)
                        </option>
                        <option
                            className='iws_country'
                            value='Venezuela'
                            data-id='239'
                        >
                            Venezuela
                        </option>
                        <option
                            className='iws_country'
                            value='Vietnam'
                            data-id='240'
                        >
                            Vietnam
                        </option>
                        <option
                            className='iws_country'
                            value='Virgin Islands (British)'
                            data-id='241'
                        >
                            Virgin Islands (British)
                        </option>
                        <option
                            className='iws_country'
                            value='Virgin Islands (US)'
                            data-id='242'
                        >
                            Virgin Islands (US)
                        </option>
                        <option
                            className='iws_country'
                            value='Wallis And Futuna Islands'
                            data-id='243'
                        >
                            Wallis And Futuna Islands
                        </option>
                        <option
                            className='iws_country'
                            value='Western Sahara'
                            data-id='244'
                        >
                            Western Sahara
                        </option>
                        <option
                            className='iws_country'
                            value='Yemen'
                            data-id='245'
                        >
                            Yemen
                        </option>
                        <option
                            className='iws_country'
                            value='Zambia'
                            data-id='246'
                        >
                            Zambia
                        </option>
                        <option
                            className='iws_country'
                            value='Zimbabwe'
                            data-id='247'
                        >
                            Zimbabwe
                        </option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor='country'
                        className='block text-sm font-normal text-gray'
                    >
                        What is the service needed{' '}
                        <span className='text-red font-bold'>*</span>
                    </label>
                    <select
                        id='service'
                        name='service_needed'
                        required='required'
                        value={selectedService}
                        onChange={handleServiceChange}
                        className='mt-1 p-2 border border-gray w-full focus:outline-primary'
                    >
                        <option value='usdt_rec'>USDT Recovery/Hack</option>
                        <option value='btc_rec'>Bitcoin Recovery/Hack</option>
                        <option value='tox_rec'>Toxic Relationship Help</option>
                        <option value='romance_rec'>
                            Romance Scam Recovery
                        </option>
                        <option value='inv_rec'>
                            Investment Scam Recovery
                        </option>
                        <option value='bank'>
                            Bank Transfer Scam/Money Laundering
                        </option>
                        <option value='mo_rec'>Money Recovery</option>
                        <option value='Crypto Tracing'>Crypto Tracing</option>
                        <option value='WhatsApp Hack/Spy'>
                            WhatsApp Hack/Spy
                        </option>
                        <option value='Phone Unlock'>Phone Unlock</option>
                        <option value='GPS Tracking/Hacking'>
                            GPS Tracking/Hacking
                        </option>
                        <option value='Smartphone Hacking/Spy'>
                            Smartphone Hacking/Spy
                        </option>
                        <option value='Background Check Removal'>
                            Background Check Removal
                        </option>
                        <option value='Social Media Hack/Recovery'>
                            Social Media Hack/Recovery
                        </option>
                        <option value='Sextortion/Blackmail Victim Help'>
                            Sextortion/Blackmail Victim Help
                        </option>
                        <option value='File Accessing'>File Accessing</option>
                        <option value='Game Recovery and Activation'>
                            Game Recovery and Activation
                        </option>
                        <option value='G-mail Recovery'>G-mail Recovery</option>
                        <option value='Password Recovery'>
                            Password Recovery
                        </option>
                        <option value='Narcissistic Victims Support Helpline'>
                            Narcissistic Victims Support Helpline
                        </option>
                        <option value='Others'>Others</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor='message'
                        className='block text-sm font-normal text-gray'
                    >
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Message'
                        rows='4'
                        className='mt-1 p-2 border border-gray w-full focus:outline-primary'
                    ></textarea>
                </div>
                <div>
                    <button
                        type='submit'
                        value='send'
                        className='w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-xl font-semibold text-white bg-primaryDark hover:bg-primary hover:transition hover:duration-300 hover:ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
