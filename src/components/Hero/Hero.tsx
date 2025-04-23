import React from "react";
import {
  Section,
  Content,
  Heading,
  Text,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  ImageWrapper,
} from "./Hero.styles";

const Hero: React.FC = () => {
  return (
    <Section>
      <Content>
        <Heading
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Explora tus Opciones Financieras
        </Heading>

        <Text
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Encuentra el producto financiero ideal para tus necesidades. Desde
          cuentas hasta seguros, todo en un solo lugar.
        </Text>

        <Buttons
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <PrimaryButton>Comenzar</PrimaryButton>
          <SecondaryButton>Saber más</SecondaryButton>
        </Buttons>
      </Content>
      <ImageWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            "url('http://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      />
    </Section>
  );
};

export default Hero;
