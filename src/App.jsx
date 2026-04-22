import { motion } from "framer-motion";

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
          <a href="#vizyon">Vizyon</a>
          <a href="#karsilastirma">Karşılaştırma</a>
          <a href="#turkiye">Türkiye</a>
          <a href="#gelecek">Gelecek</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="vizyon">
          <div className="hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow"
            >
              Geleceğin Şehir Ekosistemi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1 }}
            >
              Akıllı Şehirler
              <span> Endüstri 4.0 ile yeniden şekilleniyor.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="hero-text"
            >
              Veri, sensörler, yapay zekâ ve otomasyon sayesinde şehirler artık
              sadece büyümüyor; düşünüyor, analiz ediyor ve kendini optimize ediyor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-actions"
            >
              <a href="#karsilastirma" className="btn btn-primary">
                Karşılaştırmayı Gör
              </a>
              <a href="#gelecek" className="btn btn-secondary">
                2050 Vizyonu
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="hero-metrics"
            >
              <div>
                <strong>IoT</strong>
                <span>Gerçek zamanlı veri akışı</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Öngörüsel şehir yönetimi</span>
              </div>
              <div>
                <strong>Cloud</strong>
                <span>Ölçeklenebilir dijital altyapı</span>
              </div>
            </motion.div>
          </div>

          <div className="hero-visual">
            <div className="city-frame">
              <div className="scan-line"></div>
              <div className="city-silhouette city-back"></div>
              <div className="city-silhouette city-front"></div>

              <div className="signal-node n1"></div>
              <div className="signal-node n2"></div>
              <div className="signal-node n3"></div>
              <div className="signal-node n4"></div>

              <div className="signal-line l1"></div>
              <div className="signal-line l2"></div>
              <div className="signal-line l3"></div>
            </div>
          </div>
        </section>

        <section className="section technologies">
          <motion.div {...revealUp} className="section-heading">
            <span className="section-kicker">Temel Yapı Taşları</span>
            <h2>Akıllı şehirleri mümkün kılan Endüstri 4.0 teknolojileri</h2>
          </motion.div>

          <div className="tech-strip">
            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">01</div>
              <h3>Nesnelerin İnterneti</h3>
              <p>
                Şehirdeki sensörler; trafik, enerji, su ve çevre verilerini anlık toplar.
              </p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">02</div>
              <h3>Yapay Zekâ</h3>
              <p>
                Trafik yoğunluğunu öngörür, kaynak kullanımını optimize eder.
              </p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">03</div>
              <h3>Büyük Veri</h3>
              <p>
                Milyonlarca veri noktasından anlam çıkararak karar desteği sağlar.
              </p>
            </motion.article>

            <motion.article {...revealUp} className="tech-item">
              <div className="tech-index">04</div>
              <h3>Bulut Altyapısı</h3>
              <p>
                Şehir ölçeğinde verilerin esnek, hızlı ve güvenli şekilde işlenmesini sağlar.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="section compare" id="karsilastirma">
          <motion.div {...revealUp} className="section-heading left">
            <span className="section-kicker">Dönüşüm</span>
            <h2>Geleneksel şehirden akıllı şehre geçiş</h2>
          </motion.div>

          <div className="compare-stage">
            <motion.div {...revealUp} className="compare-side legacy">
              <div className="compare-label">Geleneksel Şehir</div>
              <ul>
                <li>Manuel ve gecikmeli trafik yönetimi</li>
                <li>Yüksek enerji kaybı ve düşük verim</li>
                <li>Parçalı altyapı ve sınırlı izleme</li>
                <li>Sorun olduktan sonra müdahale</li>
              </ul>
            </motion.div>

            <motion.div {...revealUp} className="compare-divider">
              <span>DİJİTAL DÖNÜŞÜM</span>
            </motion.div>

            <motion.div {...revealUp} className="compare-side smart">
              <div className="compare-label">Akıllı Şehir</div>
              <ul>
                <li>Gerçek zamanlı veriyle adaptif trafik akışı</li>
                <li>Akıllı şebekelerle enerji optimizasyonu</li>
                <li>Bağlantılı altyapı ve sürekli sensör takibi</li>
                <li>Öngörüsel ve proaktif karar mekanizması</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="section showcase" id="turkiye">
          <motion.div {...revealUp} className="section-heading">
            <span className="section-kicker">Yerel Bakış</span>
            <h2>Türkiye’de akıllı şehir uygulamalarının yükselişi</h2>
          </motion.div>

          <div className="city-panels">
            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">İstanbul</span>
              <h3>Yoğun metropolde veri temelli yönetim</h3>
              <p>
                Trafik, mobilite ve belediye veri sistemleriyle çok katmanlı şehir yönetimi.
              </p>
            </motion.article>

            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">Ankara</span>
              <h3>Akıllı kavşak ve ulaşım optimizasyonu</h3>
              <p>
                Sinyalizasyon ve yol akışını daha verimli hale getiren sistemler.
              </p>
            </motion.article>

            <motion.article {...revealUp} className="city-panel">
              <span className="city-badge">Konya</span>
              <h3>Toplu taşıma ve kent içi hareketlilik</h3>
              <p>
                Ulaşım altyapısını dijitalleştiren örnek şehirlerden biri.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="section future-zone" id="gelecek">
          <motion.div {...revealUp} className="future-box">
            <span className="section-kicker">2050 Perspektifi</span>
            <h2>Şehirler sadece akıllı değil, öngörülü olacak.</h2>
            <p>
              Dijital ikizler, otonom ulaşım, sıfır karbon sistemleri ve insan odaklı
              Endüstri 5.0 yaklaşımlarıyla kent yaşamı yeniden tanımlanacak.
            </p>

            <div className="future-tags">
              <span>Dijital İkiz</span>
              <span>Otonom Mobilite</span>
              <span>Sıfır Karbon</span>
              <span>AI Yönetim</span>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}