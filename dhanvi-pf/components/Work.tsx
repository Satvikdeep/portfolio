import AssetSlot from "@/components/AssetSlot";

type WorkItem = {
  title: string;
  client: string;
  format: string;
  src: string;
  quote: string;
  body: string;
  wide?: boolean;
};

const workItems: WorkItem[] = [
  {
    title: "Gujarat's Most Beautiful Shores",
    client: "Gujarat Tourism / TCGL",
    format: "Print magazine double spread",
    src: "/work/gujarat-shores.png",
    quote:
      "Gujarat's coast is one of India's great natural inheritances, vast, varied, and gleaming by the light that makes every hour on its shores feel like the golden one.",
    body: "8 beaches. 8 distinct personalities. One consistent voice for the Government of Gujarat's flagship tourism campaign. Published in 3 layout versions.",
    wide: true,
  },
  {
    title: "Rann Utsav - White Rann Festival",
    client: "Gujarat Tourism",
    format: "Event poster / 3 languages",
    src: "/work/rann-utsav.png",
    quote: "Witness the Serene Beauty of White Rann with Handicraft and Culture",
    body: "Written in English, Hindi, and Gujarati for India's iconic winter desert festival. Dhordo - UNWTO Best Tourism Village 2023.",
  },
  {
    title: "Madhavpur Fair 2026",
    client: "Government of Gujarat",
    format: "Cultural event poster",
    src: "/work/madhavpur-fair.png",
    quote:
      "The Madhavpur Fair is a vibrant expression of India's living legacy. This festival symbolises devotion, tradition, and unity.",
    body: "Event and ceremonial copy for a large-format public cultural communication.",
  },
  {
    title: "Sehra by The HUB",
    client: "The HUB Store",
    format: "Instagram reels / captions",
    src: "/work/hub-store-sehra.png",
    quote:
      "When the varmala is exchanged, the celebration pauses for a breath. Two lives meet in front of everyone they love.",
    body: "Video scripts and captions for a luxury groom wear brand. Emotion-first storytelling for life's most charged moments.",
  },
  {
    title: "HCG Hospitals Awareness",
    client: "HCG Hospitals Ahmedabad",
    format: "Healthcare social campaign",
    src: "/work/hcg-hospitals.png",
    quote:
      "Online searches can create confusion and unnecessary worry, especially when symptoms need proper medical evaluation.",
    body: "Instagram reel scripts for an oncology hospital: preventive health, HPV vaccination, doctor-first messaging, and warm credible care.",
  },
  {
    title: "ABGD Healthcare VC Fund",
    client: "ABGD Fund",
    format: "Investor one-pager",
    src: "/work/abgd-fund.png",
    quote:
      "To make India the backbone of global healthcare delivery. By scaling innovation where it is built best - and monetizing it where it is valued most.",
    body: "Investor-facing copy for a $100M healthcare VC fund: fund overview, leadership bios, and portfolio company descriptions.",
  },
  {
    title: "Akshar Travels",
    client: "Akshar Travels",
    format: "Brand copy / brochure / flyer",
    src: "/work/akshar-travels.png",
    quote: "Curated Journeys Designed for Ease, Care, and Memorable Experiences.",
    body: "Brand voice, trifold brochure, Europe package flyer, and 15+ tour names and descriptions.",
  },
  {
    title: "White Rann - The Tent City",
    client: "White Rann Tent City",
    format: "Instagram captions / reel copy",
    src: "/work/white-rann.png",
    quote: "Welcome to a land shaped by the Harappan legacy.",
    body: "Luxury desert hospitality copy where heritage tourism meets experiential comfort: starlit evenings, culture, and Dholavira history.",
  },
  {
    title: "Easy Cater App Campaigns",
    client: "Easy Cater / McDonald's / Jagdish",
    format: "Digital campaign creatives",
    src: "/work/easy-cater.png",
    quote: "Fall in love with the food. We'll take care of the repeat.",
    body: "Current-role app marketing campaigns in English and Hinglish, built for restaurant partners and repeat ordering behavior.",
    wide: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="poster-section cream-section work-section">
      <div className="work-intro">
        <div>
          <p className="eyebrow">My work</p>
          <h2 className="display-title">Writing & Planning</h2>
        </div>
        <p>
          Each piece keeps the words close to the visual format they lived in:
          print spreads, social frames, investor documents, reels, and campaign
          boards.
        </p>
      </div>

      <div className="work-marquee" aria-hidden="true">
        Social Post / Short Video / PR Content / SEO Website Content /
      </div>

      <div className="work-grid">
        {workItems.map((item) => (
          <article
            key={item.title}
            className={`work-card ${item.wide ? "work-card--wide" : ""}`}
          >
            <div className="mock-frame">
              <div className="mock-frame__bar">
                <span>{item.client}</span>
                <span>{item.format}</span>
              </div>
              <AssetSlot
                src={item.src}
                alt={`${item.title} visual mockup`}
                label={item.src.replace("/work/", "")}
                note="mockup screenshot needed"
                className="work-asset"
              />
              <div className="mock-frame__actions" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="work-copy">
              <div className="project-meta">
                <span>{item.format}</span>
                <span>{item.client}</span>
              </div>
              <h3>{item.title}</h3>
              <blockquote>{item.quote}</blockquote>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
