import { useEffect } from 'react';
import SkillsHeader from '../components/skills/SkillsHeader';
import './Skills.css';

function Skills() {
    useEffect(() => {
      document.title = "Skills | Karl Almstedt";
    }, []);

    return (
      <div className="skills-page">
        <SkillsHeader />
      </div>
    );
  };

export default Skills;