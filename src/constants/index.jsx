// Case Studies Images
import groceriesCase from "../assets/caseStudy/groceries-case.webp";
import retailCase from "../assets/caseStudy/retail-case.webp";
import electronicCase from "../assets/caseStudy/electronic-case.webp";

// Customers Images
import customer1 from "../assets/customers/carrefour.webp";
import customer2 from "../assets/customers/lotte.webp";
import customer3 from "../assets/customers/lenovo.webp";
import customer4 from "../assets/customers/vodafone.webp";
import customer5 from "../assets/customers/sony.webp";
import customer6 from "../assets/customers/7eleven.webp";
import customer7 from "../assets/customers/xiaomi.webp";
import customer8 from "../assets/customers/texas-instrument.webp";
import customer9 from "../assets/customers/pop-mart.webp";
import customer10 from "../assets/customers/mercedes-benz.webp";


export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Use Case", href: "/use-case" },
  { label: "About Us", href: "/about-us" },
];

export const caseStudy = [
  {
    title: "Groceries Market",
    description:
      "Discover how electronic shelf labels (ESLs) revolutionize the groceries market by providing real-time price updates, reducing manual labor, and enhancing customer satisfaction with accurate and dynamic pricing.",
    imageSrc: groceriesCase,
  },
  {
    title: "Retail",
    description:
      "See how retail stores are leveraging ESL technology to streamline pricing strategies, improve operational efficiency, and offer a seamless shopping experience with instant price changes and promotions.",
    imageSrc: retailCase,
  },
  {
    title: "Electronic Shop",
    description:
      "Explore the impact of ESLs in electronic shops, where quick and precise price adjustments are crucial. ESLs help in managing inventory, displaying product information, and creating an engaging shopping environment.",
    imageSrc: electronicCase,
  },
];

export const customers = [
  {
    name: "Carrefour",
    img: customer1,
  },
  {
    name: "Lotte",
    img: customer2,
  },
  {
    name: "Lenovo",
    img: customer3,
  },
  {
    name: "Vodafone",
    img: customer4,
  },
  {
    name: "Sony",
    img: customer5,
  },
  {
    name: "7 Eleven",
    img: customer6,
  },
  {
    name: "Xiaomi",
    img: customer7,
  },
  {
    name: "Texas Instrument",
    img: customer8,
  },
  {
    name: "Pop Mart",
    img: customer9,
  },
  {
    name: "Mercedes Benz",
    img: customer10,
  },
];

export const useCasesLink = [
  { href: "/use-case/#grocery", text: "Grocery" },
  { href: "/use-case/#retail", text: "Retail" },
  { href: "/use-case/#electronics", text: "Electronics" },
  { href: "/use-case/#warehouse", text: "Warehouse" },
  { href: "/use-case/#pharmacy", text: "Pharmacy" },
];

export const eslFunctions = [
  {
    title: "Store Management Integration",
    description:
      "Streamline your retail operations with our Electronic Shelf Label (ESL) system, seamlessly integrated with your store management software. This powerful feature ensures that all pricing and product information is automatically synchronized across all platforms. Say goodbye to manual updates and errors, and hello to a unified, efficient system that saves time and enhances accuracy. With ESL, you can focus more on providing excellent customer service and less on administrative tasks.",
  },
  {
    title: "Easy to Update",
    description:
      "Keep your product information current with minimal effort using our ESL system's easy update feature. Whether it's changing prices, updating product details, or launching promotions, our ESL allows for instant, wireless updates directly from your central database. This means no more printing and replacing paper labels. Enjoy the flexibility to make real-time changes, ensuring your shelves always display the most accurate and up-to-date information, enhancing the shopping experience for your customers.",
  },
  {
    title: "Stock & Alert Monitoring",
    description:
      "Never miss a restock or encounter an out-of-stock scenario with our advanced stock and alert monitoring feature. Our ESL system provides real-time visibility into your inventory levels, sending automatic alerts when stocks are low or when items need to be reordered. This proactive approach helps maintain optimal stock levels, prevents lost sales, and keeps your shelves fully stocked with the products your customers want. Stay ahead of demand and make data-driven inventory decisions with ease.",
  },
];


