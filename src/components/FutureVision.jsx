import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const revealUp = {
    initial: { opacity: 0, y: 44 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.75, ease: "easeOut" },
};

const tags = [
    "Dijital İkiz",
    "Otonom Mobilite",
    "Sıfır Karbon",
    "AI Yönetim",
];

const cards = [
    {
        title: "Dijital İkiz Şehirler",
        text: "Şehirlerin sanal kopyaları ile trafik, enerji ve afet senaryoları önceden simüle edilecek.",
    },
    {
        title: "Otonom Ulaşım Ağları",
        text: "Toplu taşıma, araç akışı ve lojistik sistemleri merkezi yapay zekâ ile dinamik biçimde yönetilecek.",
    },
    {
        title: "Sıfır Karbon Altyapı",
        text: "Enerji üretimi, tüketimi ve dağıtımı sürdürülebilir hedeflere göre gerçek zamanlı optimize edilecek.",
    },
    {
        title: "İnsan Odaklı Endüstri 5.0",
        text: "Teknoloji sadece verimlilik için değil, yaşam kalitesi, güvenlik ve dayanıklılık için çalışacak.",
    },
];

export default function FutureVision() {
    return (
        <Section id="gelecek">
            <BackgroundGlow className="g1" />
            <BackgroundGlow className="g2" />
            <GridLayer />

            <Header
                as={motion.div}
                {...revealUp}
            >
                <Kicker>2050 Perspektifi</Kicker>
                <Title>Şehirler sadece akıllı değil, öngörülü olacak.</Title>
                <Subtitle>
                    Dijital ikizler, otonom ulaşım, sıfır karbon sistemleri ve insan odaklı
                    Endüstri 5.0 yaklaşımıyla kent yaşamı tamamen yeniden tasarlanacak.
                </Subtitle>
            </Header>

            <VisionStage
                as={motion.div}
                {...revealUp}
            >
                <OrbitalScene>
                    <CoreGlow />
                    <Core>
                        <CoreSmallText>2050</CoreSmallText>
                        <CoreTitle>Future City Core</CoreTitle>
                        <CoreDesc>
                            Veri, enerji, ulaşım ve karar mekanizmasının tek merkezde senkronize olduğu akıllı kent çekirdeği.
                        </CoreDesc>
                    </Core>

                    <Orbit className="o1" />
                    <Orbit className="o2" />
                    <Orbit className="o3" />

                    <TagBubble className="t1">Dijital İkiz</TagBubble>
                    <TagBubble className="t2">AI Yönetim</TagBubble>
                    <TagBubble className="t3">Otonom Mobilite</TagBubble>
                    <TagBubble className="t4">Sıfır Karbon</TagBubble>

                    <PulseNode className="n1" />
                    <PulseNode className="n2" />
                    <PulseNode className="n3" />
                    <PulseNode className="n4" />

                    <Beam className="b1" />
                    <Beam className="b2" />
                    <Beam className="b3" />
                    <Beam className="b4" />
                </OrbitalScene>

                <SidePanel>
                    <PanelTitle>Gelecek Vizyonu</PanelTitle>
                    <PanelText>
                        Şehirler artık sadece yaşayan alanlar değil; kendini izleyen,
                        riskleri önceden gören ve kaynaklarını anlık optimize eden bağlı sistemler olacak.
                    </PanelText>

                    <TagRow>
                        {tags.map((tag, i) => (
                            <FutureTag key={i}>{tag}</FutureTag>
                        ))}
                    </TagRow>

                    <StatsGrid>
                        <StatBox>
                            <strong>24/7</strong>
                            <span>Sürekli veri akışı</span>
                        </StatBox>
                        <StatBox>
                            <strong>AI</strong>
                            <span>Öngörüsel karar</span>
                        </StatBox>
                        <StatBox>
                            <strong>Net Zero</strong>
                            <span>Sürdürülebilir altyapı</span>
                        </StatBox>
                        <StatBox>
                            <strong>Digital Twin</strong>
                            <span>Simülasyon tabanlı şehir</span>
                        </StatBox>
                    </StatsGrid>
                </SidePanel>
            </VisionStage>

            <CardsGrid>
                {cards.map((card, i) => (
                    <VisionCard
                        as={motion.article}
                        key={i}
                        {...revealUp}
                        transition={{ duration: 0.7, delay: i * 0.08 }}
                    >
                        <CardIndex>0{i + 1}</CardIndex>
                        <CardTitle>{card.title}</CardTitle>
                        <CardText>{card.text}</CardText>
                    </VisionCard>
                ))}
            </CardsGrid>
        </Section>
    );
}

/* animations */
const spinSlow = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const spinReverse = keyframes`
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: .95; }
  50% { transform: scale(1.18); opacity: .68; }
`;

const floatSoft = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

/* styled */
const Section = styled.section`
  position: relative;
  padding: 130px 6vw 120px;
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.22;
  pointer-events: none;

  &.g1 {
    width: 340px;
    height: 340px;
    left: -80px;
    top: 80px;
    background: rgba(103, 232, 249, 0.34);
  }

  &.g2 {
    width: 420px;
    height: 420px;
    right: -120px;
    bottom: 60px;
    background: rgba(139, 92, 246, 0.3);
  }
`;

const GridLayer = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,.25));
  pointer-events: none;
`;

const Header = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto 56px;
  text-align: center;
`;

const Kicker = styled.span`
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(8, 17, 32, 0.5);
  border: 1px solid rgba(103, 232, 249, 0.16);
  color: #b9cbec;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 4.4vw, 4.8rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  color: #eef4ff;
`;

const Subtitle = styled.p`
  margin: 16px auto 0;
  max-width: 760px;
  color: #93a3c7;
  line-height: 1.9;
  font-size: 1.04rem;
`;

const VisionStage = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1320px;
  margin: 0 auto 38px;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const OrbitalScene = styled.div`
  position: relative;
  min-height: 620px;
  border-radius: 34px;
  overflow: hidden;
  border: 1px solid rgba(145, 178, 255, 0.14);
  background:
    radial-gradient(circle at center, rgba(103, 232, 249, 0.08), transparent 18%),
    linear-gradient(180deg, rgba(10, 18, 36, 0.96), rgba(6, 12, 24, 0.98));
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.42);

  @media (max-width: 760px) {
    min-height: 500px;
  }
`;

const CoreGlow = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(103,232,249,.22), transparent 70%);
  filter: blur(20px);
`;

const Core = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(360px, 72%);
  padding: 34px 28px;
  border-radius: 28px;
  text-align: center;
  background: rgba(9, 18, 34, 0.72);
  border: 1px solid rgba(150, 174, 255, 0.14);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.34);
  z-index: 3;
`;

const CoreSmallText = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: #67e8f9;
  font-size: .84rem;
  letter-spacing: .16em;
  text-transform: uppercase;
`;

const CoreTitle = styled.h3`
  font-size: clamp(1.6rem, 2.8vw, 2.5rem);
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  color: #f5f8ff;
`;

const CoreDesc = styled.p`
  color: #93a3c7;
  line-height: 1.8;
`;

const Orbit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(103, 232, 249, 0.12);
  transform: translate(-50%, -50%);

  &.o1 {
    width: 520px;
    height: 520px;
    animation: ${spinSlow} 28s linear infinite;
  }

  &.o2 {
    width: 380px;
    height: 380px;
    animation: ${spinReverse} 22s linear infinite;
  }

  &.o3 {
    width: 240px;
    height: 240px;
    animation: ${spinSlow} 14s linear infinite;
  }

  @media (max-width: 760px) {
    &.o1 { width: 380px; height: 380px; }
    &.o2 { width: 280px; height: 280px; }
    &.o3 { width: 180px; height: 180px; }
  }
`;

const TagBubble = styled.div`
  position: absolute;
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(11, 22, 40, 0.78);
  border: 1px solid rgba(145, 178, 255, 0.15);
  color: #eaf4ff;
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
  animation: ${floatSoft} 4.5s ease-in-out infinite;
  z-index: 4;

  &.t1 { top: 12%; left: 11%; }
  &.t2 { top: 16%; right: 10%; animation-delay: .6s; }
  &.t3 { bottom: 14%; left: 12%; animation-delay: 1s; }
  &.t4 { bottom: 12%; right: 12%; animation-delay: 1.4s; }

  @media (max-width: 760px) {
    font-size: .88rem;
    padding: 10px 13px;
  }
`;

const PulseNode = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #67e8f9;
  box-shadow:
    0 0 0 7px rgba(103, 232, 249, 0.08),
    0 0 20px rgba(103, 232, 249, 0.45);
  animation: ${pulse} 2.4s infinite ease-in-out;
  z-index: 2;

  &.n1 { top: 24%; left: 26%; }
  &.n2 { top: 30%; right: 24%; animation-delay: .3s; }
  &.n3 { bottom: 28%; left: 32%; animation-delay: .6s; }
  &.n4 { bottom: 24%; right: 28%; animation-delay: .9s; }
`;

const Beam = styled.div`
  position: absolute;
  height: 2px;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    rgba(103, 232, 249, 0),
    rgba(103, 232, 249, 0.95),
    rgba(103, 232, 249, 0)
  );
  opacity: 0.82;
  z-index: 1;

  &.b1 {
    top: 27%;
    left: 27%;
    width: 210px;
    transform: rotate(18deg);
  }

  &.b2 {
    top: 32%;
    right: 24%;
    width: 180px;
    transform: rotate(144deg);
  }

  &.b3 {
    bottom: 29%;
    left: 33%;
    width: 170px;
    transform: rotate(-16deg);
  }

  &.b4 {
    bottom: 25%;
    right: 29%;
    width: 150px;
    transform: rotate(-144deg);
  }
`;

const SidePanel = styled.div`
  position: relative;
  min-height: 620px;
  padding: 34px;
  border-radius: 34px;
  border: 1px solid rgba(145, 178, 255, 0.14);
  background:
    linear-gradient(180deg, rgba(12, 20, 38, 0.92), rgba(9, 14, 26, 0.98));
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.36);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 760px) {
    min-height: auto;
    padding: 24px;
  }
`;

const PanelTitle = styled.h3`
  font-size: clamp(1.7rem, 3vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
`;

const PanelText = styled.p`
  color: #93a3c7;
  line-height: 1.9;
  font-size: 1rem;
`;

const TagRow = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FutureTag = styled.span`
  padding: 11px 15px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(150, 174, 255, 0.14);
  color: #eaf3ff;
`;

const StatsGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const StatBox = styled.div`
  padding: 18px;
  border-radius: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(150, 174, 255, 0.1);

  strong {
    display: block;
    font-size: 1.08rem;
    color: #f5f8ff;
    margin-bottom: 8px;
  }

  span {
    color: #93a3c7;
    line-height: 1.6;
    font-size: .96rem;
  }
`;

const CardsGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const VisionCard = styled.article`
  padding: 26px 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(10,17,32,.86), rgba(7,12,22,.96));
  border: 1px solid rgba(150, 174, 255, 0.12);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.28);
`;

const CardIndex = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  color: #67e8f9;
  font-size: .82rem;
  letter-spacing: .14em;
`;

const CardTitle = styled.h4`
  font-size: 1.24rem;
  line-height: 1.3;
  margin-bottom: 12px;
  color: #f5f8ff;
`;

const CardText = styled.p`
  color: #93a3c7;
  line-height: 1.8;
`;