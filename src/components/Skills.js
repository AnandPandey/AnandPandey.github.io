import { useEffect, useRef, useState } from "react";

function SkillBar({ name, level }) {

  const barRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current);

  }, []);

  return (
    <div className="skill-row" ref={barRef}>
      <div className="skill-title">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: show ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {

  const skillGroups = {
    "Programming Languages": [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 65 }
    ],

    "Web Technologies & Frameworks": [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "React.js", level: 80 },
      { name: "Flask", level: 75 },
      { name: "Django", level: 60 },
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 65 }
    ],

    "Databases": [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MongoDB", level: 65 }
    ],

    "Data & Analytics Tools": [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 70 },
      { name: "Matplotlib", level: 70 },
      { name: "Power BI", level: 65 },
      { name: "Flourish", level: 60 }
    ],

    "Tools & Platforms": [
      { name: "Linux", level: 65 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Selenium", level: 60 }
    ]
  };

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {Object.entries(skillGroups).map(([group, skills]) => (
        <div key={group} style={{ marginTop: "26px" }}>
          <h3>{group}</h3>

          <div className="skill-bars">
            {skills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
