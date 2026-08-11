import { skills } from "../../data/skills";
import "./Skills.css";

const Skills = () => {

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-7px)
      scale(1.02)
    `;
  };


  const handleMouseLeave = (e) => {
    const card = e.currentTarget;

    card.style.transform = "";
  };


  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <h2>Skills</h2>
        </div>


        {/* Skills Grid */}
        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* Icon + Skill Name */}
              <div className="skill-card-top">

                <i
                  className={`skill-icon ${skill.icon}`}
                  aria-hidden="true"
                ></i>

                <div className="skill-name">
                  {skill.name}
                </div>

              </div>


              {/* Skill Level */}
              <div className="skill-stars">
                {"★".repeat(skill.level)}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;