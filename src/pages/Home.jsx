import { useEffect } from 'react';
import HomeHeader from '../components/home/HomeHeader.jsx';
import ServiceCard from '../components/home/ServiceCard.jsx';
import services from '../data/services.json';
import './Home.css';


function Home() {
    useEffect(() => {
      document.title = "Home | Karl Almstedt";
    }, []);
    
    return (
      <div className="home-page">
        <HomeHeader />
        <div className='service-list'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;