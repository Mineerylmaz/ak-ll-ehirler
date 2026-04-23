import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: .95; }
  50% { transform: scale(1.18); opacity: .72; }
`;

const rotateSlow = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const rotateReverse = keyframes`
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
`;

const scan = keyframes`
  0% { transform: translateY(-120%); opacity: 0; }
  20% { opacity: .9; }
  100% { transform: translateY(520%); opacity: 0; }
`;

const glowShift = keyframes`
  0%, 100% { opacity: .22; }
  50% { opacity: .4; }
`;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 44px;
  padding: 88px 6vw 40px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, rgba(103, 232, 249, 0.10), transparent 24%),
    radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.12), transparent 28%),
    radial-gradient(circle at 50% 82%, rgba(103, 232, 249, 0.07), transparent 26%),
    linear-gradient(180deg, #060a16 0%, #050814 45%, #070d1a 100%);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 28px;
    padding: 96px 20px 34px;
  }

  @media (max-width: 560px) {
    padding: 92px 16px 28px;
  }
`;

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, rgba(255,255,255,.95), rgba(255,255,255,.2));
  pointer-events: none;
`;

const AmbientGlow = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  animation: ${glowShift} 6s ease-in-out infinite;
  pointer-events: none;

  &.g1 {
    width: 320px;
    height: 320px;
    left: -80px;
    top: 70px;
    background: rgba(103, 232, 249, 0.16);
  }

  &.g2 {
    width: 380px;
    height: 380px;
    right: -120px;
    top: 120px;
    background: rgba(139, 92, 246, 0.16);
  }

  @media (max-width: 680px) {
    &.g1 {
      width: 220px;
      height: 220px;
      left: -70px;
    }

    &.g2 {
      width: 240px;
      height: 240px;
      right: -90px;
    }
  }
`;

const Content = styled.div`
  max-width: 720px;
  position: relative;
  z-index: 2;

  @media (max-width: 980px) {
    max-width: 100%;
    order: 2;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(10, 18, 35, 0.56);
  border: 1px solid rgba(103, 232, 249, 0.14);
  color: #bdd0ee;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 22px;

  @media (max-width: 560px) {
    font-size: 10px;
    padding: 8px 12px;
    margin-bottom: 16px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.3rem, 8vw, 6.6rem);
  line-height: 0.96;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: #f5f8ff;

  span {
    display: block;
    margin-top: 10px;
    background: linear-gradient(90deg, #67e8f9 0%, #8b5cf6 52%, #d8f5ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 560px) {
    line-height: 1;
    span {
      margin-top: 8px;
    }
  }
`;

const Text = styled.p`
  margin-top: 22px;
  max-width: 620px;
  color: #93a3c7;
  line-height: 1.8;
  font-size: 1.02rem;

  @media (max-width: 980px) {
    max-width: 100%;
  }

  @media (max-width: 560px) {
    margin-top: 16px;
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const Buttons = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    margin-top: 22px;
    flex-direction: column;
    gap: 10px;
  }
`;

const Btn = styled.a`
  padding: 15px 24px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.28s ease;
  border: 1px solid transparent;
  min-width: 180px;
  text-align: center;

  &.primary {
    background: linear-gradient(90deg, #67e8f9, #8b5cf6);
    color: #06101d;
    box-shadow: 0 12px 32px rgba(103, 232, 249, 0.18);
  }

  &.secondary {
    border: 1px solid rgba(255,255,255,0.16);
    color: white;
    background: rgba(255,255,255,0.04);
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 560px) {
    width: 100%;
    min-width: 100%;
    padding: 14px 18px;
  }
`;

const Stats = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 14px;
  max-width: 720px;

  @media (max-width: 980px) {
    max-width: 100%;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 560px) {
    margin-top: 24px;
    gap: 10px;
  }
`;

const Stat = styled.div`
  padding: 18px;
  border-radius: 18px;
  background: rgba(10, 16, 32, 0.48);
  border: 1px solid rgba(137, 166, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,.22);

  strong {
    display: block;
    color: #f4f8ff;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  span {
    color: #93a3c7;
    line-height: 1.5;
    font-size: 0.94rem;
  }

  @media (max-width: 560px) {
    padding: 14px 15px;

    strong {
      font-size: 0.95rem;
      margin-bottom: 6px;
    }

    span {
      font-size: 0.88rem;
    }
  }
`;

const Visual = styled.div`
  position: relative;
  height: 680px;
  z-index: 2;

  @media (max-width: 980px) {
    height: 500px;
    order: 1;
  }

  @media (max-width: 680px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 340px;
  }
`;

const Scene = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(145, 178, 255, 0.14);
  background:
    radial-gradient(circle at 50% 32%, rgba(103, 232, 249, 0.08), transparent 20%),
    linear-gradient(180deg, rgba(10, 18, 36, 0.96), rgba(6, 12, 24, 0.98));
  box-shadow: 0 24px 80px rgba(0,0,0,.42);

  @media (max-width: 560px) {
    border-radius: 22px;
  }
`;

const SceneGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
`;

const ScanLine = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 16%;
  background: linear-gradient(
    180deg,
    rgba(103,232,249,0),
    rgba(103,232,249,0.16),
    rgba(103,232,249,0)
  );
  animation: ${scan} 5s linear infinite;
`;

const Orbit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(103, 232, 249, 0.12);
  transform: translate(-50%, -50%);

  &.o1 {
    width: 500px;
    height: 500px;
    animation: ${rotateSlow} 28s linear infinite;
  }

  &.o2 {
    width: 340px;
    height: 340px;
    animation: ${rotateReverse} 20s linear infinite;
  }

  &.o3 {
    width: 190px;
    height: 190px;
    animation: ${rotateSlow} 12s linear infinite;
  }

  @media (max-width: 980px) {
    &.o1 { width: 380px; height: 380px; }
    &.o2 { width: 260px; height: 260px; }
    &.o3 { width: 150px; height: 150px; }
  }

  @media (max-width: 480px) {
    &.o1 { width: 260px; height: 260px; }
    &.o2 { width: 180px; height: 180px; }
    &.o3 { width: 100px; height: 100px; }
  }
`;

const Core = styled.div`
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background:
    radial-gradient(circle at center, rgba(103,232,249,0.22), rgba(103,232,249,0.05) 40%, transparent 72%);
  filter: blur(1px);

  @media (max-width: 980px) {
    width: 210px;
    height: 210px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

const CoreCard = styled.div`
  position: absolute;
  width: 280px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 22px;
  border-radius: 26px;
  text-align: center;
  background: rgba(9, 18, 34, 0.72);
  border: 1px solid rgba(150, 174, 255, 0.14);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 50px rgba(0,0,0,.34);

  strong {
    display: block;
    color: #67e8f9;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-size: .8rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.8rem;
    color: #f5f8ff;
    margin-bottom: 10px;
    letter-spacing: -0.04em;
  }

  p {
    color: #93a3c7;
    line-height: 1.7;
    font-size: .96rem;
  }

  @media (max-width: 980px) {
    width: 230px;
    padding: 18px 16px;

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: .88rem;
    }
  }

  @media (max-width: 480px) {
    width: 180px;
    padding: 14px 12px;
    border-radius: 20px;

    strong {
      font-size: .62rem;
      margin-bottom: 6px;
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 6px;
    }

    p {
      font-size: .72rem;
      line-height: 1.45;
    }
  }
`;

const Skyline = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 36%;
`;

const Building = styled.div`
  position: absolute;
  bottom: 0;
  width: 72px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(180deg, #173d67, #10243e);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,0.04),
    0 0 18px rgba(103,232,249,0.06);

  &.b1 { left: 8%; height: 110px; }
  &.b2 { left: 20%; height: 170px; width: 82px; }
  &.b3 { left: 35%; height: 130px; }
  &.b4 { left: 50%; height: 190px; width: 88px; }
  &.b5 { left: 68%; height: 145px; width: 76px; }
  &.b6 { right: 8%; height: 118px; }

  @media (max-width: 980px) {
    width: 52px;

    &.b1 { height: 74px; }
    &.b2 { height: 108px; width: 60px; }
    &.b3 { height: 84px; }
    &.b4 { height: 118px; width: 64px; }
    &.b5 { height: 92px; width: 56px; }
    &.b6 { height: 72px; }
  }

  @media (max-width: 480px) {
    width: 34px;
    border-radius: 8px 8px 0 0;

    &.b1 { height: 44px; }
    &.b2 { height: 62px; width: 40px; }
    &.b3 { height: 50px; }
    &.b4 { height: 70px; width: 42px; }
    &.b5 { height: 56px; width: 38px; }
    &.b6 { height: 42px; }
  }
`;

const RoadGlow = styled.div`
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 20px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(103,232,249,0.6), transparent);
`;

const Node = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  background: #67e8f9;
  border-radius: 50%;
  box-shadow:
    0 0 0 8px rgba(103,232,249,0.08),
    0 0 18px rgba(103,232,249,0.46);
  animation: ${pulse} 2s infinite;

  &.n1 { top: 18%; left: 20%; }
  &.n2 { top: 24%; right: 18%; animation-delay: .3s; }
  &.n3 { top: 44%; left: 24%; animation-delay: .6s; }
  &.n4 { top: 48%; right: 23%; animation-delay: .9s; }
  &.n5 { bottom: 27%; left: 33%; animation-delay: 1.2s; }
  &.n6 { bottom: 22%; right: 30%; animation-delay: 1.5s; }

  @media (max-width: 980px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
    box-shadow:
      0 0 0 5px rgba(103,232,249,0.08),
      0 0 12px rgba(103,232,249,0.4);
  }
`;

const Line = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #67e8f9, transparent);
  transform-origin: left center;
  opacity: .82;

  &.l1 { top: 20%; left: 21%; width: 220px; transform: rotate(16deg); }
  &.l2 { top: 28%; right: 18%; width: 170px; transform: rotate(138deg); }
  &.l3 { top: 47%; left: 25%; width: 180px; transform: rotate(-8deg); }
  &.l4 { bottom: 24%; left: 34%; width: 160px; transform: rotate(-18deg); }

  @media (max-width: 980px) {
    &.l1 { width: 140px; }
    &.l2 { width: 110px; }
    &.l3 { width: 120px; }
    &.l4 { width: 110px; }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(11, 22, 40, 0.72);
  border: 1px solid rgba(145, 178, 255, 0.14);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 30px rgba(0,0,0,.24);
  animation: ${floatY} 4.5s ease-in-out infinite;
  z-index: 3;

  span {
    display: block;
    font-size: .74rem;
    color: #67e8f9;
    letter-spacing: .14em;
    margin-bottom: 8px;
  }

  strong {
    display: block;
    color: #f4f8ff;
    font-size: 1.02rem;
    margin-bottom: 6px;
  }

  p {
    color: #93a3c7;
    font-size: .9rem;
    line-height: 1.45;
  }

  &.c1 {
    top: 28px;
    left: 24px;
    width: 170px;
  }

  &.c2 {
    top: 62px;
    right: 24px;
    width: 185px;
    animation-delay: .6s;
  }

  &.c3 {
    bottom: 30px;
    left: 34px;
    width: 180px;
    animation-delay: 1s;
  }

  @media (max-width: 980px) {
    padding: 12px 14px;

    span { font-size: .62rem; margin-bottom: 6px; }
    strong { font-size: .9rem; margin-bottom: 4px; }
    p { font-size: .78rem; }

    &.c1 { width: 140px; }
    &.c2 { width: 150px; }
    &.c3 { width: 150px; }
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export default function Hero() {
    return (
        <Wrapper>
            <BackgroundGrid />
            <AmbientGlow className="g1" />
            <AmbientGlow className="g2" />

            <Content>
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85 }}
                >
                    <Eyebrow>Akıllı Şehir Ekosistemi</Eyebrow>

                    <Title>
                        Akıllı Şehirler
                        <span>Veriyle Yönetiliyor</span>
                    </Title>

                    <Text>
                        Trafik, enerji, güvenlik ve altyapı artık yalnızca izlenmiyor.
                        Sensörler, yapay zekâ ve bağlantılı sistemlerle şehirler anlık veri
                        üreten, karar veren ve kendini optimize eden canlı yapılara dönüşüyor.
                    </Text>

                    <Buttons>
                        <Btn className="primary" href="#karsilastirma">
                            Keşfet
                        </Btn>
                        <Btn className="secondary" href="#quiz">
                            Test Et
                        </Btn>
                    </Buttons>

                    <Stats>
                        <Stat>
                            <strong>IoT</strong>
                            <span>Gerçek zamanlı sensör ağı</span>
                        </Stat>
                        <Stat>
                            <strong>AI</strong>
                            <span>Öngörüsel analiz ve karar desteği</span>
                        </Stat>
                        <Stat>
                            <strong>Smart Grid</strong>
                            <span>Akıllı enerji ve kaynak yönetimi</span>
                        </Stat>
                    </Stats>
                </motion.div>
            </Content>

            <Visual>
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ height: "100%" }}
                >
                    <Scene>
                        <SceneGrid />
                        <ScanLine />

                        <FloatingCard className="c1">
                            <span>TRAFİK</span>
                            <strong>%84 Akış</strong>
                            <p>Adaptif sinyalizasyon aktif</p>
                        </FloatingCard>

                        <FloatingCard className="c2">
                            <span>ENERJİ</span>
                            <strong>Smart Grid</strong>
                            <p>Dağıtım verimliliği optimize edildi</p>
                        </FloatingCard>

                        <FloatingCard className="c3">
                            <span>GÜVENLİK</span>
                            <strong>24/7 İzleme</strong>
                            <p>AI destekli şehir takibi</p>
                        </FloatingCard>

                        <Orbit className="o1" />
                        <Orbit className="o2" />
                        <Orbit className="o3" />

                        <Core />
                        <CoreCard>
                            <strong>2050 CITY CORE</strong>
                            <h3>Connected Urban Intelligence</h3>
                            <p>
                                Ulaşım, enerji ve güvenliği tek merkezde senkronize eden akıllı şehir çekirdeği
                            </p>
                        </CoreCard>

                        <Node className="n1" />
                        <Node className="n2" />
                        <Node className="n3" />
                        <Node className="n4" />
                        <Node className="n5" />
                        <Node className="n6" />

                        <Line className="l1" />
                        <Line className="l2" />
                        <Line className="l3" />
                        <Line className="l4" />

                        <Skyline>
                            <Building className="b1" />
                            <Building className="b2" />
                            <Building className="b3" />
                            <Building className="b4" />
                            <Building className="b5" />
                            <Building className="b6" />
                            <RoadGlow />
                        </Skyline>
                    </Scene>
                </motion.div>
            </Visual>
        </Wrapper>
    );
}