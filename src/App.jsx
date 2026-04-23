import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "./components/Hero";
import Quiz from "./components/Quiz";
import CompareSection from "./components/CompareSection";
import FutureVision from "./components/FutureVision";

const revealUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};





export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-grid"></div>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="noise"></div>

      <header className="topbar">
        <div className="brand">SMART CITY / INDUSTRY 4.0</div>
        <nav>
          <a href="#gelecek">Gelecek</a>
          <a href="#karsilastirma">Karşılaştırma</a>
          <a href="#turkiye">Türkiye</a>
          <a href="#quiz">Quiz</a>

        </nav>
      </header>

      <main>
        <Hero></Hero>
        <FutureVision></FutureVision>

        <section className="section technologies">
          <motion.div {...revealUp} className="section-heading">
            <span className="section-kicker">Temel Yapı Taşları</span>
            <h2>Akıllı şehirleri mümkün kılan Endüstri 4.0 teknolojileri</h2>
          </motion.div>

          <div className="tech-strip">
            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">01</div>
              <h3>Nesnelerin İnterneti</h3>
              <p>Şehirdeki sensörler trafik, enerji, su ve çevre verilerini anlık toplar.</p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">02</div>
              <h3>Yapay Zekâ</h3>
              <p>Trafik yoğunluğunu öngörür, kaynak kullanımını optimize eder.</p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">03</div>
              <h3>Büyük Veri</h3>
              <p>Milyonlarca veri noktasından anlam çıkararak karar desteği sağlar.</p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">04</div>
              <h3>Bulut Altyapısı</h3>
              <p>Şehir ölçeğinde verilerin esnek, hızlı ve güvenli şekilde işlenmesini sağlar.</p>
            </motion.article>
          </div>
        </section>

        <CompareSection></CompareSection>
        <section className="section showcase" id="turkiye">
          <motion.div {...revealUp} className="section-heading">
            <span className="section-kicker">Yerel Bakış</span>
            <h2>Türkiye’de akıllı şehir uygulamalarının yükselişi</h2>
          </motion.div>

          <div className="city-panels">
            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">İstanbul</span>
              <h3>Yoğun metropolde veri temelli yönetim</h3>
              <p>Trafik, mobilite ve belediye veri sistemleriyle çok katmanlı şehir yönetimi.</p>
            </motion.article>

            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">Ankara</span>
              <h3>Akıllı kavşak ve ulaşım optimizasyonu</h3>
              <p>Sinyalizasyon ve yol akışını daha verimli hale getiren sistemler.</p>
            </motion.article>

            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">Konya</span>
              <h3>Toplu taşıma ve kent içi hareketlilik</h3>
              <p>Ulaşım altyapısını dijitalleştiren örnek şehirlerden biri.</p>
            </motion.article>
          </div>
        </section>

        <Quiz></Quiz>


      </main>
    </div>
  );
}