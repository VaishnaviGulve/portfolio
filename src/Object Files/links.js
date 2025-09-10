import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: "https://github.com/VaishnaviGulve",
    icons: "fa-brands fa-github class-purple",
    label: "connect with me on github ",
  },
  {
    id: uuid(),
    links: "https://www.linkedin.com/in/vaishnavigulve4342/",
    icons: "fa-brands fa-linkedin class-purple",
    label: "connect with me on linkedin ",
  },
  {
    id: uuid(),
    links: "https://x.com/gulvevaishu2546",
    icons: "fa-brands fa-x-twitter class-purple",
    label: "connect with me on X ",
  },
  {
    id: uuid(),
    links: "mailto:vaishnavi2546@gmail.com",
    icons: "fa-solid fa-envelope class-purple",
    label: "Send me an email ",
  },
  {
    id: uuid(),
    links: "tel:9326125785",
    icons: "fa-solid fa-phone class-purple",
    label: "Call me on my cellphone number ",
  },
 
];

export default myLinks;