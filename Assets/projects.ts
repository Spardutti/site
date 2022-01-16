type Props = {
  name: string;
  img: string;
  description: string;
  descripcion: string;
  demo: string;
  github: string;
}[];

export const projects: Props = [
  {
    name: "Turistic Life",
    img: "tour.png",
    description:
      "Web app where the user can buy or make custom touristic packages",
    descripcion:
      "Aplicacion web, en la cual el usuario puede comprar paquetes turisticos",
    demo: "https://toursg10.vercel.app/",
    github: "https://github.com/No-Country/C1-G10",
  },
  {
    name: "Ecommerce",
    img: "/ecommerce.png",
    description:
      "Platform where the user can sell his own products. integrated with MercadoPago Checkout",
    descripcion: "Plataforma de ventas online",
    demo: "https://spardutti.github.io/ecommerce-client/#/",
    github: "https://github.com/Spardutti/ecommerce-client",
  },
  {
    name: "Balance",
    img: "#",
    descripcion: "Control de gastos",
    description: "Expenses tracker",
    demo: "https://spardutti.github.io/balance-client/#/",
    github: "https://github.com/Spardutti/balance-client",
  },
  {
    name: "Fakebook",
    img: "#",
    descripcion: "Clon de Facebook",
    description: "Facebook Clone",
    demo: "https://spardutti.github.io/fakebook-client/#/welcome",
    github: "https://github.com/Spardutti/fakebook-client",
  },
  {
    name: "Tic Tac Toe",
    img: "#",
    descripcion: "Te desafio a que ganes!",
    description: "Theres no way you can win!",
    demo: "https://spardutti.github.io/tic-tac-toeV2/",
    github: "https://github.com/Spardutti/tic-tac-toeV2",
  },
];
