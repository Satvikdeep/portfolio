const lines = [
  {
    headline: "Fall in love with the food.",
    sub: "We'll take care of the repeat.",
    brand: "McDonald's x Easy Cater",
  },
  {
    headline: "You're going to want this again.",
    sub: "Easy it home.",
    brand: "McDonald's x Easy Cater",
  },
  {
    headline: "Dil Maange More?",
    sub: "Order at home at the same menu price.",
    brand: "Jagdish x Easy Cater",
  },
  {
    headline: "Download Karo,",
    sub: "Life Easy Karo.",
    brand: "Easy Cater brand CTA",
  },
];

export default function EasyCaterSpotlight() {
  return (
    <section className="easy-section">
      <div className="easy-copy">
        <p className="eyebrow">Currently here</p>
        <h2>At Easy Cater.</h2>
        <p>
          Writing app marketing campaigns for McDonald&apos;s and Jagdish.
          Figuring out how to say the same thing in English and Hinglish and
          make both feel completely native. Video commercial scripts and website
          copy also in the works.
        </p>
      </div>

      <div className="easy-lines">
        {lines.map((line) => (
          <article key={line.headline}>
            <h3>{line.headline}</h3>
            <p>{line.sub}</p>
            <span>{line.brand}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
