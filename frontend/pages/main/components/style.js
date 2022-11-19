import styled, { keyframes, css } from "styled-components";
import { motion, Variants } from "framer-motion";
export const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  /* margin-bottom: -120px; */
`;
export const Card = styled(motion.div)`
  font-size: 164px;
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;
export const Splash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  clip-path: path(
    "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
  );
`;
