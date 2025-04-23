import styled from "styled-components";

export const Section = styled.section.attrs({
  className: "servies-section px-20 mt-20",
})``;

export const Title = styled.h2.attrs({
  className: "text-5xl mb-4",
})``;

export const Tabs = styled.div.attrs({
  className: "tabs tabs-boxed mb-6",
})``;

export const Tab = styled.a.attrs<{ active?: boolean }>(({ active }) => ({
  className: `tab ${active ? "tab-active" : ""}`,
}))``;

export const Grid = styled.div.attrs({
  className:
    "grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
})``;
