import { motion, Variants } from "framer-motion";
import * as S from "./style";
// import "./styles.css";
interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 500,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export default function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <S.CardContainer
      // className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        // once: true,
        amount: 0.8,
      }}
    >
      <S.Splash style={{ background }} />
      <S.Card variants={cardVariants}>{emoji}</S.Card>
    </S.CardContainer>
  );
}
