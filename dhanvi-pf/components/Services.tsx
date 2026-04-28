const offers = [
  "Content Marketing",
  "Marketing Strategy",
  "Digital Marketing",
];

const technicalSkills = [
  { label: "Copywriting", icon: "pen" },
  { label: "Researching", icon: "laptop" },
  { label: "Ideation", icon: "bulb" },
  { label: "Presentation", icon: "board" },
];

const softSkills = [
  { label: "Brand Voice", icon: "check" },
  { label: "Problem-solving", icon: "puzzle" },
  { label: "Bilingual Copy", icon: "book" },
  { label: "Campaign Strategy", icon: "spark" },
];

function LineIcon({ icon }: { icon: string }) {
  return (
    <svg className="line-icon" viewBox="0 0 64 64" aria-hidden="true">
      {icon === "pen" && (
        <path d="M15 49l8-3 27-27-5-5-27 27-3 8zm26-31l5 5" />
      )}
      {icon === "laptop" && (
        <path d="M14 42h36M19 18h26v20H19zM10 46h44" />
      )}
      {icon === "bulb" && (
        <path d="M25 48h14M27 54h10M23 29c0-6 4-11 9-11s9 5 9 11c0 4-2 7-5 10v5h-8v-5c-3-3-5-6-5-10zM32 8v5M47 16l-4 4M17 16l4 4" />
      )}
      {icon === "board" && (
        <path d="M15 16h34v24H15zM32 40v12M24 52h16M44 25l-7 6-5-4-8 7" />
      )}
      {icon === "check" && (
        <path d="M20 34l8 8 17-21M32 8a24 24 0 1024 24" />
      )}
      {icon === "puzzle" && (
        <path d="M18 18h11c0-5 6-7 9-3 2 3 0 7-4 7v10h10c0-4 4-6 7-4 4 3 2 9-3 9v11H18V37c5 0 7-6 3-9-3-2-7 0-7 4V18z" />
      )}
      {icon === "book" && (
        <path d="M14 14h18v38H14c0-5 3-8 8-8h10M50 14H32v38h18c0-5-3-8-8-8H32" />
      )}
      {icon === "spark" && (
        <path d="M32 8l5 17 17 7-17 7-5 17-5-17-17-7 17-7z" />
      )}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="poster-section cream-section services-section">
      <div className="ghost-title" aria-hidden="true">
        WHAT DO YOU NEED
      </div>
      <h2 className="section-title">What Do I Offer</h2>

      <div className="offer-line">
        {offers.map((offer) => (
          <div key={offer} className="offer-node">
            <span className="scribble-dot" />
            <strong>{offer}</strong>
          </div>
        ))}
      </div>

      <div className="skills-board">
        <div className="skill-group">
          <h3>Technical Skills</h3>
          <div className="skill-grid">
            {technicalSkills.map((skill) => (
              <div key={skill.label} className="skill-item">
                <LineIcon icon={skill.icon} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3>Soft Skills</h3>
          <div className="skill-grid">
            {softSkills.map((skill) => (
              <div key={skill.label} className="skill-item">
                <LineIcon icon={skill.icon} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
