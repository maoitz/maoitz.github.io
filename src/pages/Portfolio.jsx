import { useEffect } from 'react';
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import GithubProjects from '../components/portfolio/GithubProjects';
import './Portfolio.css';

function Portfolio() {
    useEffect(() => {
      document.title = "Portfolio | Karl Almstedt";
    }, []);

    return (
      <div className="portfolio-page">
        <PortfolioHeader />
        <GithubProjects 
        username="maoitz"
        filterRepos={["Chessboard", "SSM_v2", "NumbersGame"]}
        />
      </div>
    );
  };
  
  export default Portfolio;