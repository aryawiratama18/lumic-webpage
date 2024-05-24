// Product Images
// ESL
// Valley Series
import zkc15v from "../assets/products/esl/zkc15v.png"
import zkc18v from "../assets/products/esl/zkc18v.png"

// Blade Series
import zkc18b from "../assets/products/esl/zkc18b.png"
import zkc21b from "../assets/products/esl/zkc21b.png"

// Shield Series
import zkc15s from "../assets/products/esl/zkc15s.png"
import zkc21s from "../assets/products/esl/zkc21s.png"

// Essence Series
import zkc15ve4 from "../assets/products/esl/zkc15ve4.png"
import zkc21be4 from "../assets/products/esl/zkc21be4.png"

// Dual Screen Series
import zkc58vd from "../assets/products/esl/zkc58vd.png"
import zkc58vdn from "../assets/products/esl/zkc58vdn.png"


// Accessories


// Feature Icons
// import threeColors from "../assets/products/feature-icon/feature-3color.png"
// import battery5Year from "../assets/products/feature-icon/feature-battery-5-year.png"
// import cloud from "../assets/products/feature-icon/feature-cloud.png"
// import hdDisplay from "../assets/products/feature-icon/feature-hd-display.png"
// import ip6x from "../assets/products/feature-icon/feature-ip6x.png"
import led from "../assets/products/feature-icon/feature-led.png"
import nfc from "../assets/products/feature-icon/feature-nfc.png"
import removableBattery from "../assets/products/feature-icon/feature-removable-battery.png"
import ultraslim from "../assets/products/feature-icon/feature-ultraslim.png"

export const eslProducts = [
  {
    id: 1,
    category: "Valley Series",
    types: [
      {
        id: 1,
        shortName: "ZKC15V",
        fullName: "ZKC15V | 1.54\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc15v,
        spec: {
          featureIcon: [nfc, removableBattery, ultraslim, led],
          size: "44.2*35.9*12.1 mm",
          screen: "27*27 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 2,
        shortName: "ZKC18V",
        fullName: "ZKC18V | 1.8\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc18v,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "52.5*35.9*12.1 mm",
          screen: "36.06*27.05 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
    ],
  },
  {
    id: 2,
    category: "Blade Series",
    types: [
      {
        id: 1,
        shortName: "ZKC18B",
        fullName: "ZKC18B | 1.8\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc18b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "54.2*36.9*9.5 mm",
          screen: "36.06*27.05 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 2,
        shortName: "ZKC21B",
        fullName: "ZKC21B | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "71*34.7*9.5 mm",
          screen: "48.55*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
    ],
  },
  {
    id: 3,
    category: "Shield Series",
    types: [
      {
        id: 1,
        shortName: "ZKC15S",
        fullName: "ZKC15S | 1.54\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc15s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "44.5*35.9*13.7 mm",
          screen: "27*27 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 2,
        shortName: "ZKC21S",
        fullName: "ZKC21S | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "70*36*14.3 mm",
          screen: "48.6*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
    ],
  },
  {
    id: 4,
    category: "Essence Series",
    types: [
      {
        id: 1,
        shortName: "ZKC15V-E4",
        fullName: "ZKC15V-E4 | 1.54\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc15ve4,
        spec: {
          featureIcon: [nfc, led],
          size: "44.5*35.9*12.1 mm",
          screen: "27.51*27.51 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 2,
        shortName: "ZKC21B-E4",
        fullName: "ZKC21B-E4 | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "71*34.7*9.5 mm",
          screen: "48.55*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
    ],
  },
  {
    id: 5,
    category: "Dual Screen Series",
    types: [
      {
        id: 1,
        shortName: "ZKC58V-D",
        fullName: "ZKC58V-D | 5.8\" Dual Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc58vd,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "135.4*109.5*13 mm",
          screen: "118.8*88.2 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh",
        },
      },
      {
        id: 2,
        shortName: "ZKC58V-DN",
        fullName: "ZKC58V-DN | 5.8\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc58vdn,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "135.4*109.5*13 mm",
          screen: "118.8*88.2 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh",
        },
      },
    ],
  },
];
