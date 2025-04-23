import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Cuenta Corriente",
    type: "Cuenta",
    interestRate: "0%",
    category: "Cuentas",
    riskLevel: null,
    description:
      "Una cuenta corriente ideal para manejar tus finanzas diarias sin generar intereses.",
  },
  {
    id: 2,
    name: "Tarjeta de Crédito Oro",
    type: "Tarjeta",
    interestRate: "25%",
    category: "Tarjetas",
    riskLevel: "Medio",
    description:
      "Una tarjeta de crédito con beneficios exclusivos y una tasa competitiva.",
  },
  {
    id: 3,
    name: "Fondo Mutuo Conservador",
    type: "Fondo",
    interestRate: "3%",
    category: "Fondos",
    riskLevel: "Bajo",
    description:
      "Un fondo mutuo diseñado para quienes buscan estabilidad y bajo riesgo.",
  },
  {
    id: 4,
    name: "Seguro de Vida",
    type: "Seguro",
    interestRate: null,
    category: "Seguros",
    riskLevel: "Bajo",
    description:
      "Protege a tus seres queridos con un seguro de vida confiable y accesible.",
  },
  {
    id: 5,
    name: "Fondo de Alto Riesgo",
    type: "Fondo",
    interestRate: "10%",
    category: "Fondos",
    riskLevel: "Alto",
    description:
      "Un fondo para inversores que buscan altos rendimientos y están dispuestos a asumir riesgos.",
  },
];
