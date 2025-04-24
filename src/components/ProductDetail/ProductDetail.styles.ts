"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div.attrs({
  className: "min-h-screen bg-base-100 px-10 py-10",
})``;

export const Content = styled.div.attrs({
  className: "mx-auto p-8",
})``;

export const IconWrapper = styled.div.attrs({
  className: "mb-6",
})``;

export const Title = styled.h1.attrs({
  className: "text-5xl mb-4",
})``;

export const Section = styled.div.attrs({
  className: "mt-4 mb-4",
})``;

export const SectionTitle = styled.h2.attrs({
  className: "text-2xl font-semibold mb-2",
})``;

export const Text = styled.p.attrs({
  className: "text-lg",
})``;

export const BoldText = styled.strong``;

export const InfoText = styled.p.attrs({
  className: "text-lg mb-4",
})``;

export const ButtonWrapper = styled.div.attrs({
  className: "mt-6",
})``;

export const StyledLink = styled(Link).attrs({
  className:
    "btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-4 px-8 rounded-none shadow-none h-[50px]",
})``;
