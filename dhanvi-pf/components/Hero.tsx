export default function Hero() {
  return (
    <section id="hero" className="poster-section hero-section dark-section">
      <div className="poster-rule poster-rule--top">
        <span>Dhanvi Vora</span>
        <span>Copywriter / Marketing Creative</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="pill-row">
            <span className="pill pill--orange">2022 - 2025</span>
            <span className="pill pill--cream">Copywriter</span>
            <span className="pill pill--outline-light">Marketing Creative</span>
          </div>

          <p className="eyebrow">Creative</p>
          <h1 className="display-title hero-title">
            Port
            <span className="flower-word">
              folio
              <span className="flower-mark" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
            </span>
          </h1>

          <div className="hero-tags">
            <span>Dhanvi Vora</span>
            <span>Social / Campaign / Brand Copy</span>
          </div>
        </div>

        <div className="hero-graphic" aria-hidden="true">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <svg viewBox="0 0 260 260" role="img">
            <path
              d="M43 150c32-62 106-83 169-52M63 189c44-54 115-59 153-25M101 57c-17 38-4 72 29 83 29 10 61-8 72-40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="M86 92c-9-25 8-48 34-42 5-27 39-36 55-13 20-15 48 2 43 28 27 4 35 38 11 54 13 22-8 48-34 38-10 24-45 25-57 2-24 10-48-14-35-37-22-9-24-40-1-52"
              fill="#4548b8"
              stroke="#f25a05"
              strokeWidth="5"
            />
            <circle cx="141" cy="92" r="11" fill="#fbf7ee" />
            <circle cx="181" cy="93" r="11" fill="#fbf7ee" />
            <circle cx="145" cy="91" r="4" fill="#f25a05" />
            <circle cx="185" cy="91" r="4" fill="#f25a05" />
            <path
              d="M142 121c14 13 31 13 45 0"
              fill="none"
              stroke="#f25a05"
              strokeLinecap="round"
              strokeWidth="6"
            />
          </svg>
          <span className="scribble-label">words with feeling</span>
        </div>
      </div>

      <div className="hero-bottom poster-rule">
        <p>
          Words that make people feel something, remember something, and do
          something. Across travel, tourism, food, healthcare, weddings, and
          more.
        </p>
        <span>India-based / Available for marketing roles</span>
      </div>
    </section>
  );
}
