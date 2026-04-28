const contactItems = [
  { label: "Email", value: "dhanvi.vora@email.com" },
  { label: "Location", value: "India / Available remotely" },
  { label: "LinkedIn", value: "linkedin.com/in/dhanvivora" },
  { label: "Open to", value: "Marketing roles / Freelance / Contracts" },
];

export default function Contact() {
  return (
    <section id="contact" className="poster-section contact-section dark-section">
      <div className="poster-rule">
        <span>Say hi</span>
        <span>Made by Dhanvi / Portfolio</span>
      </div>
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="display-title">
            Let&apos;s Work
            <br />
            Together.
          </h2>
          <p>
            Looking for a writer who can go from &ldquo;a beach for standing
            still&rdquo; to &ldquo;Dil Maange More?&rdquo; without blinking?
            That&apos;s the job. Let&apos;s talk.
          </p>
        </div>

        <div className="contact-list">
          {contactItems.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
