import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const portrait = '/krishna-red-crop.jpeg';

function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 58 }, (_, index) => ({
        id: index,
        left: `${(index * 17) % 100}%`,
        delay: `${-(index * 0.47).toFixed(2)}s`,
        duration: `${8 + (index % 9)}s`,
        size: `${8 + (index % 6) * 3}px`,
        sway: `${index % 2 === 0 ? 42 : -42}px`,
        hue: index % 4,
      })),
    [],
  );

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal) => (
        <span
          className="petal"
          key={petal.id}
          style={{
            '--left': petal.left,
            '--delay': petal.delay,
            '--duration': petal.duration,
            '--size': petal.size,
            '--sway': petal.sway,
          }}
          data-hue={petal.hue}
        />
      ))}
    </div>
  );
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}

function CelebrationBits() {
  return (
    <div className="celebration-bits" aria-hidden="true">
      <span className="balloon balloon-one" />
      <span className="balloon balloon-two" />
      <span className="balloon balloon-three" />
      <span className="twirl twirl-one" />
      <span className="twirl twirl-two" />
      <span className="twirl twirl-three" />
      <span className="star star-one" />
      <span className="star star-two" />
      <span className="star star-three" />
    </div>
  );
}

function FloralSpray({ side }) {
  return (
    <div className={`floral-spray floral-spray-${side}`} aria-hidden="true">
      <span className="leaf leaf-one" />
      <span className="leaf leaf-two" />
      <span className="leaf leaf-three" />
      <span className="flower flower-one" />
      <span className="flower flower-two" />
      <span className="flower flower-three" />
      <span className="vine" />
    </div>
  );
}

function EnvelopeIntro({ isOpen, onOpen }) {
  return (
    <section className={`intro ${isOpen ? 'intro-open' : ''}`} aria-label="Invitation envelope">
      <Sparkles />
      <CelebrationBits />
      <div className="ribbon ribbon-top" aria-hidden="true" />
      <div className="ribbon ribbon-bottom" aria-hidden="true" />
      <FloralSpray side="left" />
      <FloralSpray side="right" />

      <button className="envelope-button" type="button" onClick={onOpen} aria-label="Open invitation">
        <span className="envelope">
          <span className="envelope-back" />
          <span className="letter-peek">
            <span>You're invited</span>
          </span>
          <span className="envelope-flap" />
          <span className="envelope-front" />
          <span className="heart">
            <span>♥</span>
          </span>
        </span>
        <span className="tap-text">Tap the heart</span>
      </button>
    </section>
  );
}

function Invitation() {
  return (
    <main className="invitation" aria-label="Krishna birthday invitation">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Birthday Invitation</p>
          <h1>Krishna</h1>
          <p className="invite-line">A rosy evening of love, laughter, blessings, and celebration</p>
          <div className="date-card" aria-label="Birthday date">
            <small>Friday</small>
            <span>26 June</span>
            <em>6:00 PM Evening</em>
          </div>
        </div>

        <div className="photo-column">
          <div className="portrait-wrap">
            <div className="portrait-halo" aria-hidden="true" />
            <img src={portrait} alt="Krishna smiling in a red saree with roses" />
            <span className="portrait-flower flower-a" aria-hidden="true" />
            <span className="portrait-flower flower-b" aria-hidden="true" />
          </div>
          <p className="birthday-wish">Happy Birthday to Krishna</p>
        </div>
      </section>

      <section className="message-band">
        <p>
          With hearts full of joy ❤️, we request your gracious presence to celebrate the birthday of
          Krishna 🌹. Please join us with family and friends for an evening of smiles 😊, music 🎶,
          blessings 🙏, delicious food 🍰, and memories we will cherish together ✨.
        </p>
      </section>

      <section className="details" aria-label="Event details">
        <article>
          <span className="detail-label">Venue</span>
          <strong>DyoMore</strong>
        </article>
        <article>
          <span className="detail-label">Time</span>
          <strong>6:00 PM Evening</strong>
        </article>
        <article className="address-detail">
          <span className="detail-label">Address</span>
          <strong>Ashiyana Colony, Ram Ganga Vihar Phase 2, Moradabad</strong>
        </article>
      </section>

      <section className="closing">
        <p>Come shower your blessings and share the happiness of this special day.</p>
      </section>
    </main>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <FloatingPetals />
      <EnvelopeIntro isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <div className={`invitation-shell ${isOpen ? 'visible' : ''}`}>
        <Invitation />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
