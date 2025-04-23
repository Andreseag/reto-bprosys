import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const Card = styled(motion.div).attrs({
  className:
    "card border border-base-300 rounded-none h-[300px] overflow-hidden flex flex-col",
})``;

export const CardBody = styled.div.attrs({
  className: "card-body flex flex-col justify-between p-6",
})``;

export const IconWrapper = styled.div.attrs({
  className: "flex justify-center mb-4",
})``;

export const Title = styled.h2.attrs({
  className: "text-2xl mb-2 text-center",
})``;

export const Description = styled.p.attrs({
  className: "text-gray-600 mb-2 text-base text-center",
})``;

export const Actions = styled.div.attrs({
  className: "card-actions mt-4",
})``;

export const StyledLink = styled(Link).attrs({
  className:
    "btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-3 px-6 rounded-none shadow-none h-[50px] w-full text-center",
})``;
