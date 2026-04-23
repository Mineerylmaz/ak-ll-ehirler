import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";

const quizQuestions = [
    {
        question: "Akıllı şehirlerde gerçek zamanlı trafik akışını optimize etmede en kritik yapılardan biri hangisidir?",
        options: [
            "Yalnızca manuel trafik polisi yönetimi",
            "IoT sensörleri ve yapay zekâ destekli analiz",
            "Sadece sabit zamanlı trafik lambaları",
            "Kâğıt tabanlı belediye raporları",
        ],
        correct: 1,
        explanation:
            "Akıllı trafik yönetiminde sensörlerden gelen veri, yapay zekâ ile analiz edilerek akış optimize edilir.",
    },
    {
        question: "Sitedeki Türkiye örneklerine göre akıllı kavşak ve ulaşım optimizasyonu ile öne çıkan şehir hangisidir?",
        options: ["İstanbul", "Konya", "Ankara", "İzmir"],
        correct: 2,
        explanation:
            "Mevcut içerikte Ankara, akıllı kavşak ve ulaşım optimizasyonu örneği olarak veriliyor.",
    },
    {
        question: "Aşağıdakilerden hangisi geleneksel şehir yaklaşımına aittir?",
        options: [
            "Öngörüsel ve proaktif karar mekanizması",
            "Bağlantılı altyapı ve sürekli sensör takibi",
            "Sorun olduktan sonra müdahale",
            "Akıllı şebekelerle enerji optimizasyonu",
        ],
        correct: 2,
        explanation:
            "Geleneksel şehirler daha çok reaktif çalışır; yani sorun ortaya çıktıktan sonra müdahale edilir.",
    },
    {
        question: "Akıllı şehir yapısında büyük verinin temel katkısı nedir?",
        options: [
            "Veri miktarını azaltmak",
            "Karar desteği üretmek ve örüntüleri anlamlandırmak",
            "Sadece görsel tasarımı geliştirmek",
            "İnternet erişimini kapatmak",
        ],
        correct: 1,
        explanation:
            "Büyük veri, milyonlarca veri noktasından anlam çıkarıp yönetime karar desteği sağlar.",
    },
    {
        question: "Sitedeki Türkiye bölümüne göre toplu taşıma ve kent içi hareketlilikle öne çıkan şehir hangisidir?",
        options: ["Ankara", "İstanbul", "Konya", "Bursa"],
        correct: 2,
        explanation:
            "İçerikte Konya, toplu taşıma ve kent içi hareketlilik başlığıyla verilmişti.",
    },
    {
        question: "Akıllı şehirlerde 'Smart Grid' kavramı en çok hangi alanla ilişkilidir?",
        options: ["Enerji yönetimi", "Nüfus sayımı", "Turizm tanıtımı", "Arşivleme"],
        correct: 0,
        explanation:
            "Smart Grid, enerjinin daha verimli ve akıllı dağıtımını ifade eder.",
    },
];

function QuizCard({ item, index, selected, onSelect }) {
    const isAnswered = selected !== null;
    const isCorrect = selected === item.correct;

    return (
        <Card
            as={motion.article}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
        >
            <Topline>
                <QuestionNo>Soru {index + 1}</QuestionNo>
                {isAnswered && (
                    <Status $ok={isCorrect}>{isCorrect ? "Doğru" : "Yanlış"}</Status>
                )}
            </Topline>

            <Question>{item.question}</Question>

            <Options>
                {item.options.map((option, optionIndex) => {
                    let state = "";
                    if (isAnswered) {
                        if (optionIndex === item.correct) state = "correct";
                        else if (optionIndex === selected) state = "wrong";
                    }

                    return (
                        <OptionButton
                            key={option}
                            onClick={() => onSelect(index, optionIndex)}
                            disabled={isAnswered}
                            className={state}
                        >
                            <span>{String.fromCharCode(65 + optionIndex)}</span>
                            {option}
                        </OptionButton>
                    );
                })}
            </Options>

            {isAnswered && (
                <Explanation $ok={isCorrect}>
                    {isCorrect ? "Güzel." : "Bu soru kaçtı."} {item.explanation}
                </Explanation>
            )}
        </Card>
    );
}

export default function Quiz() {
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));

    const score = useMemo(
        () =>
            answers.reduce(
                (total, answer, i) =>
                    total + (answer === quizQuestions[i].correct ? 1 : 0),
                0
            ),
        [answers]
    );

    const answeredCount = answers.filter((x) => x !== null).length;

    const handleSelect = (questionIndex, optionIndex) => {
        setAnswers((prev) => {
            const next = [...prev];
            next[questionIndex] = optionIndex;
            return next;
        });
    };

    const resetQuiz = () => {
        setAnswers(Array(quizQuestions.length).fill(null));
    };

    return (
        <Section id="quiz">
            <Header>
                <Kicker>İnteraktif Test</Kicker>
                <Title>Akıllı şehirler bilgisini ölç</Title>
                <Subtitle>
                    Sorular mevcut sayfadaki Türkiye örnekleri ve akıllı şehir mantığına göre hazırlandı.
                </Subtitle>
            </Header>

            <ScoreBar>
                <div>
                    <strong>{score}</strong>
                    <span>Puan</span>
                </div>
                <div>
                    <strong>{answeredCount}/{quizQuestions.length}</strong>
                    <span>Cevaplanan</span>
                </div>
                <ResetButton onClick={resetQuiz}>Yeniden Başlat</ResetButton>
            </ScoreBar>

            <Grid>
                {quizQuestions.map((item, index) => (
                    <QuizCard
                        key={index}
                        item={item}
                        index={index}
                        selected={answers[index]}
                        onSelect={handleSelect}
                    />
                ))}
            </Grid>
        </Section>
    );
}

/* styled-components */

const Section = styled.section`
  padding: 110px 6vw;
  background: linear-gradient(180deg, rgba(8,13,24,.16), rgba(8,13,24,.44));
`;

const Header = styled.div`
  max-width: 860px;
  margin: 0 auto 36px;
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
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

const Subtitle = styled.p`
  margin-top: 14px;
  color: #93a3c7;
  line-height: 1.8;
`;

const ScoreBar = styled.div`
  max-width: 980px;
  margin: 0 auto 26px;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 16px;

  > div {
    padding: 18px;
    border-radius: 18px;
    background: rgba(10, 16, 32, 0.5);
    border: 1px solid rgba(137, 166, 255, 0.12);
  }

  strong {
    display: block;
    font-size: 1.2rem;
    color: #f4f8ff;
    margin-bottom: 6px;
  }

  span {
    color: #93a3c7;
    font-size: .95rem;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ResetButton = styled.button`
  padding: 0 20px;
  border-radius: 16px;
  border: 1px solid rgba(160, 184, 255, 0.18);
  background: rgba(255,255,255,.04);
  color: #eef4ff;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: rgba(255,255,255,.07);
    transform: translateY(-1px);
  }
`;

const Grid = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(10,17,32,.86), rgba(7,12,22,.96));
  border: 1px solid rgba(150, 174, 255, 0.12);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const Topline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const QuestionNo = styled.span`
  font-size: .82rem;
  color: #67e8f9;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

const Status = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: .8rem;
  font-weight: 600;
  color: ${(p) => (p.$ok ? "#b9ffe9" : "#ffb3c0")};
  background: ${(p) =>
        p.$ok ? "rgba(103,255,209,.1)" : "rgba(255,116,139,.1)"};
  border: 1px solid
    ${(p) => (p.$ok ? "rgba(103,255,209,.18)" : "rgba(255,116,139,.18)")};
`;

const Question = styled.h3`
  font-size: 1.14rem;
  line-height: 1.55;
  margin-bottom: 18px;
`;

const Options = styled.div`
  display: grid;
  gap: 12px;
`;

const OptionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(150,174,255,.12);
  background: rgba(255,255,255,.03);
  color: #eef4ff;
  cursor: pointer;
  transition: .22s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255,255,255,.06);
    color: #b9cbec;
    flex: 0 0 auto;
    font-size: .9rem;
  }

  &:hover:enabled {
    border-color: rgba(103,232,249,.3);
    background: rgba(255,255,255,.05);
  }

  &:disabled {
    cursor: default;
  }

  &.correct {
    border-color: rgba(103,255,209,.3);
    background: rgba(103,255,209,.08);
    color: #dffff4;
  }

  &.wrong {
    border-color: rgba(255,116,139,.26);
    background: rgba(255,116,139,.08);
    color: #ffe1e7;
  }
`;

const Explanation = styled.p`
  margin-top: 16px;
  line-height: 1.7;
  color: ${(p) => (p.$ok ? "#b9ffe9" : "#ffb3c0")};
`;