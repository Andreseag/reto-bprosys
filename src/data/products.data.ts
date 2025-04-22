import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Cuenta Corriente",
    type: "Cuenta",
    interestRate: "0%",
    category: "Cuentas",
    riskLevel: null,
  },
  {
    id: 2,
    name: "Tarjeta de Crédito Oro",
    type: "Tarjeta",
    interestRate: "25%",
    category: "Tarjetas",
    riskLevel: "Medio",
  },
  {
    id: 3,
    name: "Fondo Mutuo Conservador",
    type: "Fondo",
    interestRate: "3%",
    category: "Fondos",
    riskLevel: "Bajo",
  },
  {
    id: 4,
    name: "Seguro de Vida",
    type: "Seguro",
    interestRate: null,
    category: "Seguros",
    riskLevel: "Bajo",
  },
  {
    id: 5,
    name: "Fondo de Alto Riesgo",
    type: "Fondo",
    interestRate: "10%",
    category: "Fondos",
    riskLevel: "Alto",
  },
];
