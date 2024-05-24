// Case Studies Images
import groceriesCase from "../assets/caseStudy/groceries-case.jpeg"
import retailCase from "../assets/caseStudy/retail-case.jpg"
import electronicCase from "../assets/caseStudy/electronic-case.jpg"

// Customers Images
import customer1 from "../assets/customers/carrefour.png"
import customer2 from "../assets/customers/lotte.png"
import customer3 from "../assets/customers/lenovo.png"
import customer4 from "../assets/customers/vodafone.png"
import customer5 from "../assets/customers/sony.png"
import customer6 from "../assets/customers/7eleven.png"
import customer7 from "../assets/customers/xiaomi.png"
import customer8 from "../assets/customers/texas-instrument.png"
import customer9 from "../assets/customers/pop-mart.png"
import customer10 from "../assets/customers/mercedes-benz.png"

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Use Case", href: "/use-case" },
  { label: "About Us", href: "/about-us" },
];

export const caseStudy = [
  {
    title: "Groceries Market",
    description: "Discover how electronic shelf labels (ESLs) revolutionize the groceries market by providing real-time price updates, reducing manual labor, and enhancing customer satisfaction with accurate and dynamic pricing.",
    imageSrc: groceriesCase
  },
  {
    title: "Retail",
    description: "See how retail stores are leveraging ESL technology to streamline pricing strategies, improve operational efficiency, and offer a seamless shopping experience with instant price changes and promotions.",
    imageSrc: retailCase
  },
  {
    title: "Electronic Shop",
    description: "Explore the impact of ESLs in electronic shops, where quick and precise price adjustments are crucial. ESLs help in managing inventory, displaying product information, and creating an engaging shopping environment.",
    imageSrc: electronicCase
  },
];

export const customers = [
  {
    name: "Carrefour",
    img: customer1
  },
  {
    name: "Lotte",
    img: customer2
  },
  {
    name: "Lenovo",
    img: customer3
  },
  {
    name: "Vodafone",
    img: customer4
  },
  {
    name: "Sony",
    img: customer5
  },
  {
    name: "7 Eleven",
    img: customer6
  },
  {
    name: "Xiaomi",
    img: customer7
  },
  {
    name: "Texas Instrument",
    img: customer8
  },
  {
    name: "Pop Mart",
    img: customer9
  },
  {
    name: "Mercedes Benz",
    img: customer10
  },
]

export const useCasesLink = [
  { href: "/use-case/#fresh-food", text: "Fresh Food" },
  { href: "/use-case/#grocery", text: "Grocery" },
  { href: "/use-case/#electronics", text: "Electronics" },
  { href: "/use-case/#pharmacy", text: "Pharmacy" },
  { href: "/use-case/#warehouse", text: "Warehouse" },
];

