export interface Product {
  id: number;
  name: string;
  type: string;
  interestRate: string | null;
  category: string;
  riskLevel: string | null;
  description: string;
}

export enum Category {
  Todos = "Todos",
  Cuentas = "Cuentas",
  Tarjetas = "Tarjetas",
  Fondos = "Fondos",
  Seguros = "Seguros",
}
