import AssetSlot from "@/components/AssetSlot";

const caseFacts = [
  {
    label: "Client",
    text: "Tourism Corporation of Gujarat Limited (TCGL), the official tourism arm of the Government of Gujarat.",
  },
  {
    label: "Brief",
    text: "Write travel editorial copy for a print magazine double spread covering Gujarat's coastline: 8 beaches, each with its own character, history, and soul.",
  },
  {
    label: "Her Work",
    text: "Hero headline, standfirst copy, 8 individual beach descriptions, key stat callouts, closing CTA, and adaptation across 3 layout versions.",
  },
];

const beachLines = [
  "Shivrajpur Beach - where the Arabian Sea presents itself in colours most languages cannot name.",
  "Somnath Beach - a beach for standing still, with temple bells in the salt air.",
  "Pingleshwar Beach - golden sand, endless horizon, and migratory birds that arrive each season.",
  "Mandvi Beach - a port since 1580, where the sea still carries that history in its smell.",
];

export default function FeaturedProject() {
  return (
    <section className="poster-section cream-section featured-section">
      <div className="featured-heading">
        <div>
          <p className="eyebrow">Featured Project</p>
          <h2>Gujarat Tourism - Shores of Gujarat</h2>
        </div>
        <p>
          A case-study board for a government tourism brief: editorial writing,
          destination personality, and copy that lets the design breathe without
          disappearing.
        </p>
      </div>

      <div className="case-board">
        <aside className="case-rail">
          <span>Objective</span>
          <span>Big Idea</span>
          <span>Copy System</span>
        </aside>

        <div className="case-copy">
          {caseFacts.map((fact) => (
            <article key={fact.label}>
              <h3>{fact.label}</h3>
              <p>{fact.text}</p>
            </article>
          ))}
        </div>

        <div className="case-visuals">
          <AssetSlot
            src="/work/gujarat-shores.png"
            alt="Gujarat Tourism Shores case study mockup"
            label="gujarat-shores.png"
            note="featured case mockup needed"
            className="case-main-asset"
          />
          <div className="beach-lines">
            {beachLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="featured-pull">
        &ldquo;Gujarat&apos;s beaches have it all - the warm sand, the sacred
        shores, the moments that carry the scent of incense and salt together.
        Come, feel it for yourself.&rdquo;
      </blockquote>
    </section>
  );
}
