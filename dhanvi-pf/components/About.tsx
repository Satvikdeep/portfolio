import AssetSlot from "@/components/AssetSlot";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="poster-rule poster-rule--light">
        <span>A little about me</span>
        <span>Dhanvi / 2025</span>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="about-hi">Hi,</p>
          <h2>
            My name is <span>Dhanvi Vora,</span>
          </h2>
          <p className="about-role">Copywriter | Marketing Creative</p>

          <div className="body-stack">
            <p>
              I started writing for a living at an agency, where I discovered
              that good copy isn&apos;t about sounding clever - it&apos;s about
              sounding like the brand, and making the reader feel seen.
            </p>
            <p>
              I&apos;ve written for the Government of Gujarat and McDonald&apos;s.
              For a cancer hospital and a luxury wedding brand. For VC
              investors and food delivery apps. At one point, all in the same
              week. The brief changes. The craft doesn&apos;t.
            </p>
            <p>
              Right now I&apos;m at Easy Cater, writing campaigns for brands
              like McDonald&apos;s and building from scratch. If there&apos;s
              work I haven&apos;t done yet, I haven&apos;t had the right brief.
              Give it to me.
            </p>
          </div>
        </div>

        <div className="about-photo-wrap">
          <AssetSlot
            src="/dhanvi-headshot.jpg"
            alt="Dhanvi Vora portrait"
            label="dhanvi-headshot.jpg"
            note="headshot needed"
            className="about-photo"
            priority
          />
          <div className="about-doodles" aria-hidden="true">
            <span>✶</span>
            <span>✧</span>
            <span>✶</span>
          </div>
          <p className="about-quote">
            &ldquo;I wrote &lsquo;Fall in love with the food&rsquo; for
            McDonald&apos;s and &lsquo;a beach for standing still&rsquo; for
            the Government of Gujarat. Same writer. Different worlds.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
