import { motion } from "framer-motion";
import styled from "styled-components";

const revealUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" },
};

const leftItems = [
    "Manuel ve gecikmeli trafik yönetimi",
    "Yüksek enerji kaybı ve düşük verim",
    "Parçalı altyapı ve sınırlı izleme",
    "Sorun olduktan sonra müdahale",
];

const rightItems = [
    "Gerçek zamanlı veriyle adaptif trafik akışı",
    "Akıllı şebekelerle enerji optimizasyonu",
    "Bağlantılı altyapı ve sürekli sensör takibi",
    "Öngörüsel ve proaktif karar mekanizması",
];

export default function CompareSection() {
    return (
        <Section id="karsilastirma">
            <Header
                as={motion.div}
                {...revealUp}
            >
                <Kicker>Dönüşüm</Kicker>
                <Title>Geleneksel şehirden akıllı şehre geçiş</Title>
                <Subtitle>
                    Aynı şehir, iki farklı yaklaşım: biri gecikmeli ve parçalı,
                    diğeri veriyle çalışan, bağlantılı ve öngörülü.
                </Subtitle>
            </Header>

            <Stage>
                <Panel
                    as={motion.div}
                    {...revealUp}
                    className="legacy"
                >
                    <PanelGlow className="legacy-glow" />
                    <PanelTop>
                        <PanelBadge className="legacy-badge">Geleneksel Şehir</PanelBadge>
                        <PanelHint>Reaktif Sistem</PanelHint>
                    </PanelTop>

                    <CityVisual className="legacy-visual">
                        <Building className="b1 dull" />
                        <Building className="b2 dull" />
                        <Building className="b3 dull" />
                        <SignalLight className="legacy-light" />
                        <RoadLine className="legacy-road" />
                        <Smog />
                    </CityVisual>

                    <FeatureList>
                        {leftItems.map((item, i) => (
                            <FeatureItem key={i} className="legacy-item">
                                <Dot className="legacy-dot" />
                                <span>{item}</span>
                            </FeatureItem>
                        ))}
                    </FeatureList>
                </Panel>

                <CenterLine
                    as={motion.div}
                    {...revealUp}
                >
                    <CenterCore />
                    <CenterText>DİJİTAL DÖNÜŞÜM</CenterText>
                    <CenterBeam />
                </CenterLine>

                <Panel
                    as={motion.div}
                    {...revealUp}
                    className="smart"
                >
                    <PanelGlow className="smart-glow" />
                    <PanelTop>
                        <PanelBadge className="smart-badge">Akıllı Şehir</PanelBadge>
                        <PanelHint>Proaktif Sistem</PanelHint>
                    </PanelTop>

                    <CityVisual className="smart-visual">
                        <Building className="b1 live" />
                        <Building className="b2 live" />
                        <Building className="b3 live" />
                        <Node className="n1" />
                        <Node className="n2" />
                        <Node className="n3" />
                        <Node className="n4" />
                        <Link className="l1" />
                        <Link className="l2" />
                        <Link className="l3" />
                    </CityVisual>

                    <FeatureList>
                        {rightItems.map((item, i) => (
                            <FeatureItem key={i} className="smart-item">
                                <Dot className="smart-dot" />
                                <span>{item}</span>
                            </FeatureItem>
                        ))}
                    </FeatureList>
                </Panel>
            </Stage>
        </Section>
    );
}

/* styled */

const Section = styled.section`
  padding: 120px 6vw;
  position: relative;
`;

const Header = styled.div`
  max-width: 900px;
  margin: 0 auto 52px;
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
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
`;

const Subtitle = styled.p`
  margin-top: 16px;
  color: #93a3c7;
  line-height: 1.8;
  max-width: 760px;
  margin-inline: auto;
`;

const Stage = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 1fr;
  gap: 24px;
  align-items: stretch;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  padding: 28px;
  min-height: 620px;
  border: 1px solid rgba(150, 174, 255, 0.12);
  background: linear-gradient(180deg, rgba(10, 17, 32, 0.9), rgba(7, 12, 22, 0.98));
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.32);

  &.legacy {
    background: linear-gradient(180deg, rgba(28, 14, 22, 0.88), rgba(13, 10, 18, 0.98));
  }

  &.smart {
    background: linear-gradient(180deg, rgba(9, 18, 35, 0.88), rgba(8, 14, 24, 0.98));
  }

  @media (max-width: 760px) {
    min-height: auto;
    padding: 22px;
  }
`;

const PanelGlow = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.25;
  pointer-events: none;

  &.legacy-glow {
    background: rgba(255, 116, 139, 0.38);
    top: -40px;
    right: -50px;
  }

  &.smart-glow {
    background: rgba(103, 232, 249, 0.34);
    top: -40px;
    right: -50px;
  }
`;

const PanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  position: relative;
  z-index: 2;
`;

const PanelBadge = styled.span`
  display: inline-flex;
  padding: 10px 15px;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;

  &.legacy-badge {
    background: rgba(255, 116, 139, 0.1);
    color: #ffb3c0;
    border: 1px solid rgba(255, 116, 139, 0.18);
  }

  &.smart-badge {
    background: rgba(103, 255, 209, 0.08);
    color: #b9ffe9;
    border: 1px solid rgba(103, 255, 209, 0.16);
  }
`;

const PanelHint = styled.span`
  color: #93a3c7;
  font-size: 0.92rem;
`;

const CityVisual = styled.div`
  position: relative;
  height: 250px;
  border-radius: 24px;
  margin-bottom: 26px;
  overflow: hidden;
  border: 1px solid rgba(150, 174, 255, 0.1);
  background: linear-gradient(180deg, rgba(8, 14, 28, 0.8), rgba(10, 12, 18, 0.98));

  &.legacy-visual {
    background: linear-gradient(180deg, rgba(27, 17, 25, 0.85), rgba(15, 10, 14, 0.98));
  }

  &.smart-visual {
    background: linear-gradient(180deg, rgba(8, 18, 34, 0.85), rgba(7, 11, 20, 0.98));
  }
`;

const Building = styled.div`
  position: absolute;
  bottom: 0;
  width: 72px;
  border-radius: 14px 14px 0 0;

  &.b1 { left: 12%; height: 120px; }
  &.b2 { left: 38%; height: 165px; width: 86px; }
  &.b3 { right: 14%; height: 138px; }

  &.dull {
    background: linear-gradient(180deg, #39242f, #21151d);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
  }

  &.live {
    background: linear-gradient(180deg, #173d67, #10243e);
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.04),
      0 0 18px rgba(103, 232, 249, 0.08);
  }
`;

const SignalLight = styled.div`
  position: absolute;
  left: 20%;
  top: 28%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ff748b;
  box-shadow: 0 0 20px rgba(255, 116, 139, 0.45);
`;

const RoadLine = styled.div`
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 30px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
`;

const Smog = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 35%, rgba(255,255,255,0.04), transparent 18%),
    radial-gradient(circle at 62% 22%, rgba(255,255,255,0.04), transparent 22%),
    radial-gradient(circle at 72% 48%, rgba(255,255,255,0.03), transparent 18%);
  filter: blur(8px);
  opacity: 0.45;
`;

const Node = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #67e8f9;
  box-shadow:
    0 0 0 7px rgba(103, 232, 249, 0.07),
    0 0 18px rgba(103, 232, 249, 0.45);
  animation: pulseNode 2.2s infinite ease-in-out;

  &.n1 { top: 25%; left: 18%; }
  &.n2 { top: 32%; right: 20%; animation-delay: 0.3s; }
  &.n3 { top: 52%; left: 48%; animation-delay: 0.6s; }
  &.n4 { bottom: 22%; right: 28%; animation-delay: 0.9s; }

  @keyframes pulseNode {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.18); opacity: 0.72; }
  }
`;

const Link = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(103, 232, 249, 0),
    rgba(103, 232, 249, 0.95),
    rgba(103, 232, 249, 0)
  );
  transform-origin: left center;

  &.l1 {
    top: 28%;
    left: 19%;
    width: 180px;
    transform: rotate(18deg);
  }

  &.l2 {
    top: 36%;
    right: 20%;
    width: 130px;
    transform: rotate(136deg);
  }

  &.l3 {
    bottom: 24%;
    left: 48%;
    width: 120px;
    transform: rotate(-28deg);
  }
`;

const FeatureList = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 14px;
`;

const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 14px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);

  span {
    color: #dbe7ff;
    line-height: 1.65;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 8px;

  &.legacy-dot {
    background: #ff748b;
    box-shadow: 0 0 14px rgba(255, 116, 139, 0.42);
  }

  &.smart-dot {
    background: #67ffd1;
    box-shadow: 0 0 14px rgba(103, 255, 209, 0.42);
  }
`;

const CenterLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    min-height: 100px;
  }
`;

const CenterCore = styled.div`
  position: absolute;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(103, 232, 249, 0.9), rgba(139, 92, 246, 0.25), transparent 75%);
  filter: blur(3px);
`;

const CenterText = styled.span`
  position: relative;
  z-index: 2;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #dbe7ff;
  letter-spacing: 0.16em;
  font-size: 0.82rem;
  text-transform: uppercase;
  padding: 20px 0;

  @media (max-width: 1100px) {
    writing-mode: initial;
    transform: none;
  }
`;

const CenterBeam = styled.div`
  position: absolute;
  width: 2px;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(103, 232, 249, 0),
    rgba(103, 232, 249, 0.7),
    rgba(139, 92, 246, 0.7),
    rgba(103, 232, 249, 0)
  );

  @media (max-width: 1100px) {
    height: 2px;
    width: 100%;
    top: auto;
    bottom: auto;
    left: 0;
    right: 0;
  }
`;