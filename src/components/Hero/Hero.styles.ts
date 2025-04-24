// File: components/Hero.styles.ts
import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section.attrs({
  className:
    "flex flex-col flex-row items-center justify-between gap-8 bg-[#0D131B] text-white min-h-[650px]",
})``;

export const Content = styled.div.attrs({
  className: "w-full lg:w-3/5 text-center md:text-left md:px-20",
})``;

export const Heading = styled(motion.h1).attrs({
  className: "text-7xl mb-4",
})``;

export const Text = styled(motion.p).attrs({
  className: "text-lg mb-6 text-gray-300",
})``;

export const Buttons = styled(motion.div).attrs({
  className: "flex justify-center md:justify-start gap-4",
})``;

export const PrimaryButton = styled.button.attrs({
  className:
    "btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-4 px-8 rounded-none shadow-none h-[50px]",
})``;

export const SecondaryButton = styled.button.attrs({
  className: "btn btn-outline py-4 px-8 rounded-none shadow-none h-[50px]",
})``;

export const ImageWrapper = styled(motion.div).attrs({
  className: "w-full md:w-2/5 h-[650px] hidden lg:flex bg-cover bg-center",
})``;
