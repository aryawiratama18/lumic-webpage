// Product Images
// ESL
// Valley Series
import zkc15v from "../assets/products/esl/zkc15v.png"
import zkc18v from "../assets/products/esl/zkc18v.png"
import zkc21v from "../assets/products/esl/zkc21v.png"
import zkc26v from "../assets/products/esl/zkc26v.png"
import zkc29v from "../assets/products/esl/zkc29v.png"
import zkc37v from "../assets/products/esl/zkc37v.png"
import zkc42v from "../assets/products/esl/zkc42v.png"
import zkc58v from "../assets/products/esl/zkc58v.png"
import zkc75v from "../assets/products/esl/zkc75v.png"
import zkc102v from "../assets/products/esl/zkc102v.png"
import zkc116v from "../assets/products/esl/zkc116v.png"
import zkc133v from "../assets/products/esl/zkc133v.png"

// Blade Series
import zkc18b from "../assets/products/esl/zkc18b.png"
import zkc21b from "../assets/products/esl/zkc21b.png"
import zkc21bp from "../assets/products/esl/zkc21bp.png"
import zkc22b from "../assets/products/esl/zkc22b.png"
import zkc26b from "../assets/products/esl/zkc26b.png"
import zkc26bp from "../assets/products/esl/zkc26bp.png"
import zkc29b from "../assets/products/esl/zkc29b.png"
import zkc29bp from "../assets/products/esl/zkc29bp.png"
import zkc35b from "../assets/products/esl/zkc35b.png"
import zkc42b from "../assets/products/esl/zkc42b.png"
import zkc43b from "../assets/products/esl/zkc43b.png"
import zkc58b from "../assets/products/esl/zkc58b.png"
import zkc75b from "../assets/products/esl/zkc75b.png"
import zkc97b from "../assets/products/esl/zkc97b.png"


// Shield Series
import zkc15s from "../assets/products/esl/zkc15s.gif"
import zkc21s from "../assets/products/esl/zkc21s.gif"
import zk21sf from "../assets/products/esl/zk21sf.gif"
import zkc26s from "../assets/products/esl/zkc26s.gif"
import zk26sf from "../assets/products/esl/zk26sf.gif"
import zkc27s from "../assets/products/esl/zkc27s.gif"
import zkc29s from "../assets/products/esl/zkc29s.gif"
import zkc37s from "../assets/products/esl/zkc37s.gif"
import zkd77 from "../assets/products/esl/zkd77.png"

// Essence Series
import zkc15ve4 from "../assets/products/esl/zkc15ve4.png"
import zkc21be4 from "../assets/products/esl/zkc21be4.png"
import zkc21ve4 from "../assets/products/esl/zkc21ve4.png"
import zkc24be4 from "../assets/products/esl/zkc24be4.png"
import zkc26ve4 from "../assets/products/esl/zkc26ve4.png"
import zkc26be4 from "../assets/products/esl/zkc26be4.png"
import zkc29ve4 from "../assets/products/esl/zkc29ve4.png"
import zkc29be4 from "../assets/products/esl/zkc29be4.png"
import zkc30be4 from "../assets/products/esl/zkc30be4.png"
import zkc44be4 from "../assets/products/esl/zkc44be4.png"
import zkc58ve7 from "../assets/products/esl/zkc58ve7.png"
import zkc73be4 from "../assets/products/esl/zkc73be4.png"
import zkc82be4 from "../assets/products/esl/zkc82be4.png"
import zkc133ve from "../assets/products/esl/zkc133ve.png"

// Dual Screen Series
import zkc58vd from "../assets/products/esl/zkc58vd.png"
import zkc58vdn from "../assets/products/esl/zkc58vdn.png"
import zkc75vd from "../assets/products/esl/zkc75vd.png"
import zkc75vdn from "../assets/products/esl/zkc75vdn.png"


// Accessories
import zapc from "../assets/products/accessories/zapc.png"
import zapcpro from "../assets/products/accessories/zapcpro.png"


// Feature Icons
import threeColors from "../assets/products/feature-icon/feature-3color.png"
import battery5Year from "../assets/products/feature-icon/feature-battery-5-year.png"
import cloud from "../assets/products/feature-icon/feature-cloud.png"
import hdDisplay from "../assets/products/feature-icon/feature-hd-display.png"
import ip6x from "../assets/products/feature-icon/feature-ip6x.png"
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
      {
        id: 3,
        shortName: "ZKC21V",
        fullName: "ZKC21V | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21v,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "70*34.5*12.1 mm",
          screen: "48.55*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 4,
        shortName: "ZKC26V",
        fullName: "ZKC26V | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26v,
        spec: {
          featureIcon: [nfc, threeColors, led],
          size: "83*41*12.1 mm",
          screen: "60.09*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 5,
        shortName: "ZKC29V",
        fullName: "ZKC29V | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29v,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "90*41*12.1 mm",
          screen: "66.9*29.1 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 6,
        shortName: "ZKC37V",
        fullName: "ZKC37V | 3.7\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc37v,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "103.6*57*11.2 mm",
          screen: "81.54*47.04 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 7,
        shortName: "ZKC42V",
        fullName: "ZKC42V | 4.2\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc42v,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "104.8*87*12.8 mm",
          screen: "84.8*63.6 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 8,
        shortName: "ZKC58V",
        fullName: "ZKC58V | 5.8\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc58v,
        spec: {
          featureIcon: [nfc, led],
          size: "135.4*110*9 mm",
          screen: "118.8*88.2 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh",
        },
      },
      {
        id: 9,
        shortName: "ZKC75V",
        fullName: "ZKC75V | 7.5\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc75v,
        spec: {
          featureIcon: [nfc, led],
          size: "180.8*121.8*9 mm",
          screen: "163.2*97.9 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh",
        },
      },
      {
        id: 10,
        shortName: "ZKC102V",
        fullName: "ZKC102V | 10.2\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc102v,
        spec: {
          featureIcon: [nfc, led],
          size: "215.5*173*9.5 mm",
          screen: "215.52*143.68 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
        },
      },
      {
        id: 11,
        shortName: "ZKC116V",
        fullName: "ZKC116V | 11.6\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc116v,
        spec: {
          featureIcon: [nfc, led],
          size: "266.3*190*9 mm",
          screen: "244*164 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
        },
      },
      {
        id: 12,
        shortName: "ZKC133V",
        fullName: "ZKC133V | 13.3\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc133v,
        spec: {
          featureIcon: [nfc, led],
          size: "298.3*225.5*10.3 mm",
          screen: "275.52*195.16 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
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
      {
        id: 3,
        shortName: "ZKC21BP",
        fullName: "ZKC21BP | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21bp,
        spec: {
          featureIcon: [nfc, ultraslim, led],
          size: "71*34.7*6.6 mm",
          screen: "48.55*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 4,
        shortName: "ZKC22B",
        fullName: "ZKC22B | 2.2\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc22b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "67.9*37*10 mm",
          screen: "48.1*26 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 5,
        shortName: "ZKC26B",
        fullName: "ZKC26B | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "84.2*40.5*7.5 mm",
          screen: "60.09*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 6,
        shortName: "ZKC26BP",
        fullName: "ZKC26BP | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26bp,
        spec: {
          featureIcon: [nfc, ultraslim, led],
          size: "84.2*40.5*7.5 mm",
          screen: "60.09*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 7,
        shortName: "ZKC29B",
        fullName: "ZKC29B | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "92*41.5*7.5 mm",
          screen: "66.9*29.1 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 8,
        shortName: "ZKC29BP",
        fullName: "ZKC29BP | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29bp,
        spec: {
          featureIcon: [nfc, ultraslim, led],
          size: "92*41.5*7.5 mm",
          screen: "66.9*29.1 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 9,
        shortName: "ZKC35B",
        fullName: "ZKC35B | 3.5\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc35b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "101.5*50*11.8 mm",
          screen: "79.68*38.18 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 10,
        shortName: "ZKC42B",
        fullName: "ZKC42B | 4.2\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc42b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "103.6*87*10.3 mm",
          screen: "84.8*63.6 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 11,
        shortName: "ZKC43B",
        fullName: "ZKC43B | 4.3\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc43b,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "129.7*41.3*9 mm",
          screen: "105.44*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 12,
        shortName: "ZKC58B",
        fullName: "ZKC58B | 5.8\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc58b,
        spec: {
          featureIcon: [nfc, threeColors, removableBattery, ultraslim, cloud, hdDisplay, ip6x],
          size: "132*109*13 mm",
          screen: "118.78*88.22 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh (1*4CR2450)",
        },
      },
      {
        id: 13,
        shortName: "ZKC75B",
        fullName: "ZKC75B | 7.5\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc75b,
        spec: {
          featureIcon: [nfc, threeColors, removableBattery, ultraslim, cloud, hdDisplay, battery5Year, led, ip6x],
          size: "176.8*124.3*13 mm",
          screen: "163.2*97.92 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh (1*4CR2450) 10-year battery life",
        },
      },
      {
        id: 14,
        shortName: "ZKC97B",
        fullName: "ZKC97B | 9.7\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc97b,
        spec: {
          featureIcon: [nfc, threeColors, removableBattery, cloud, hdDisplay],
          size: "217*169.7*13.5 mm",
          screen: "201.6*141.12 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh (1*6CR2450) 10-year battery life",
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
      {
        id: 3,
        shortName: "ZK21SF",
        fullName: "ZK21SF | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White",
        image: zk21sf,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "70*36*14.3 mm",
          screen: "48.6*23.7 mm",
          temperature: "-25° ~ 25°C",
          battery: "1000 mAh",
        },
      },
      {
        id: 4,
        shortName: "ZKC26S",
        fullName: "ZKC26S | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "83*41*14.3 mm",
          screen: "60.1*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 5,
        shortName: "ZK26SF",
        fullName: "ZK26SF | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White",
        image: zk26sf,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "83*41*14.3 mm",
          screen: "60.1*30.7 mm",
          temperature: "-25° ~ 25°C",
          battery: "1000 mAh",
        },
      },
      {
        id: 6,
        shortName: "ZKC27S",
        fullName: "ZKC27S | 2.7\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc27s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "77.71*50*14.3 mm",
          screen: "57.3*38.2 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 7,
        shortName: "ZKC29S",
        fullName: "ZKC29S | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "90.41*41*14.3 mm",
          screen: "66.9*29.1 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 8,
        shortName: "ZKC37S",
        fullName: "ZKC37S | 3.7\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc37s,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "104*56.4*11.2 mm",
          screen: "81.54*47.04 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 9,
        shortName: "ZKD77",
        fullName: "ZKD77 | 7.7\" Screen",
        description: "Segment Code Screen Black/White",
        image: zkd77,
        spec: {
          featureIcon: [],
          size: "215.7*206.8*15 mm",
          screen: "179.4*81.54 mm",
          temperature: "0° ~ 40°C",
          battery: "4800 mAh",
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
      {
        id: 3,
        shortName: "ZKC21V-E4",
        fullName: "ZKC21V-E4 | 2.13\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc21ve4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "70*34.5*12.1 mm",
          screen: "48.55*23.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 4,
        shortName: "ZKC24B-E4",
        fullName: "ZKC24B-E4 | 2.4\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc24be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "77.9*42.3*11.8 mm",
          screen: "52.1*29.6 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 5,
        shortName: "ZKC26V-E4",
        fullName: "ZKC26V-E4 | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26ve4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "83*41*12.1 mm",
          screen: "60.09*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 6,
        shortName: "ZKC26B-E4",
        fullName: "ZKC26B-E4 | 2.66\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc26be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "85*41*7.5 mm",
          screen: "60.09*30.7 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 7,
        shortName: "ZKC29V-E4",
        fullName: "ZKC29V-E4 | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29ve4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "90*41*12.1 mm",
          screen: "66.9×29.06 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 8,
        shortName: "ZKC29B-E4",
        fullName: "ZKC29B-E4 | 2.9\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc29be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "92*41.5*7.5 mm",
          screen: "66.9×29.06 mm",
          temperature: "0° ~ 40°C",
          battery: "600 mAh",
        },
      },
      {
        id: 9,
        shortName: "ZKC30B-E4",
        fullName: "ZKC30B-E4 | 3.0\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc30be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "102*44*8.5 mm",
          screen: "70.4*29.568 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 10,
        shortName: "ZKC44B-E4",
        fullName: "ZKC4B-E4 | 4.4\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc44be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "109*89.1*10.4 mm",
          screen: "90.112*64.768 mm",
          temperature: "0° ~ 40°C",
          battery: "1200 mAh",
        },
      },
      {
        id: 11,
        shortName: "ZKC58V-E7",
        fullName: "ZKC58V-E7 | 5.8\" Screen",
        description: "Dot Matrix Multi-color Screen",
        image: zkc58ve7,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "135.4*110*9 mm",
          screen: "114.9*85.8 mm",
          temperature: "0° ~ 40°C",
          battery: "2400 mAh",
        },
      },
      {
        id: 12,
        shortName: "ZKC73B-E4",
        fullName: "ZKC73B-E4 | 7.3\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc73be4,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "176.8*124.3*13 mm",
          screen: "160*96 mm",
          temperature: "0° ~ 40°C",
          battery: "1800 mAh",
        },
      },
      {
        id: 13,
        shortName: "ZKC82B-E4",
        fullName: "ZKC82B-E4 | 8.2\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc82be4,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "200.1*137.1*9.5 mm",
          screen: "180.224*101.376 mm",
          temperature: "0° ~ 40°C",
          battery: "1800 mAh",
        },
      },
      {
        id: 14,
        shortName: "ZKC113V-E",
        fullName: "ZKC113V-E | 13.3\" Screen",
        description: "Dot Matrix Multi-color Screen",
        image: zkc133ve,
        spec: {
          featureIcon: [nfc, removableBattery, led],
          size: "298.3*228*9 mm",
          screen: "270*203 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
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
      {
        id: 3,
        shortName: "ZKC75V-D",
        fullName: "ZKC75V-D | 7.5\" Dual Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc75vd,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "180.2*121.2*13 mm",
          screen: "163.2*98 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
        },
      },
      {
        id: 4,
        shortName: "ZKC75V-DN",
        fullName: "ZKC75V-DN | 7.5\" Screen",
        description: "Dot Matrix EPD Black/White/Red/Yellow",
        image: zkc75vdn,
        spec: {
          featureIcon: [nfc, removableBattery],
          size: "180.2*121.2*13 mm",
          screen: "163.2*98 mm",
          temperature: "0° ~ 40°C",
          battery: "3600 mAh",
        },
      },
    ],
  },
];

export const accessoriesProducts = [
  {
    id: 1,
    category: "Wireless Base Station",
    types: [
      {
        id: 1,
        shortName: "ZAP-C",
        fullName: "ZAP-C (Ceiling)",
        description: "Electronic shelf label transmission system equipment",
        image: zapc,
        spec: {
          size: "180*180*33 mm",
          temperature: "-10° ~ 60°C",
          power: "48V POE",
          weight: "500 gr",
          frequency: "2.4GHz + 5 GHz",
          wifiSpeed: "1167 Mbps",
          coverage: "Indoor 30m radius"
        }
      },
      {
        id: 2,
        shortName: "ZAP-C Pro",
        fullName: "ZAP-C Pro (Ceiling)",
        description: "BLE / Wi-Fi dual module wireless base station",
        image: zapcpro,
        spec: {
          size: "215*215*39 mm",
          temperature: "-10° ~ 60°C",
          power: "48V POE",
          weight: "500 gr",
          frequency: "2.4GHz + 5 GHz",
          wifiSpeed: "1167 Mbps",
          coverage: "Indoor 30m radius"
        }
      }
    ]
  }
]