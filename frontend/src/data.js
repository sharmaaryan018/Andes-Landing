// Import images
import ironImage from './assets/iron.jpg';
import washFoldImage from './assets/wash_fold.jpg';
import washIronImage from './assets/wash_iron.jpg';
import blazersImage from './assets/blazers.jpeg';
import shirtPantImage from './assets/shirt_pant.jpeg';
import bedsheetSingleImage from './assets/bedsheet_single.jpeg';
import uniformImage from './assets/Uniform.jpeg';
import simpleShoesImage from './assets/simple_shoes.jpg';
import loafersSneakersImage from './assets/loafers_sneakers.jpg';
import sareeEmbroideryImage from './assets/saree_embroidery.jpg';
import sareeImage from './assets/saree.jpeg';
import bedsheetBlanketImage from './assets/bedsheet_blanket.jpg';
import blouseImage from './assets/blouse.jpg';
import Kurta from './assets/kurta.jpeg';
import sweater from './assets/sweater.jpeg';
import jacket from './assets/jacket.jpg';
import sherwani from './assets/sherwani.jpeg';   
import shorts from './assets/shorts.jpeg';
import pyjama from './assets/pyjama.jpeg';
import nightyGown from './assets/gownNighty.jpeg';  
import hoodiee from './assets/hoodiee.jpeg';
import pantTrouser from './assets/pantTrouser.jpg';
import shirtTshirt from './assets/shirtTshirt.jpg';
import jeansImage from './assets/jeans.jpg';
import blanketImage from './assets/singleBlanket.jpg';
import doubleBlanketImage from './assets/doubleBlanket.jpg';
const data = {
    serviceModes: [
      { id: 0, name: "By Piece/Pair", key: "piece" },
      { id: 1, name: "By Kg", key: "kg" }
    ],
    serviceCategories: [
      { id: 0, name: "General", key: "general", discount: 30, noteByKg: "1Kg contains approximately 4 clothes." },
      { id: 1, name: "Dry Cleaning", key: "dry_cleaning", discount: 35, noteByKg: "NOTE: Dry cleaning prices are per piece." },
      { id: 2, name: "Shoes", key: "shoes", discount: 25, noteByKg: "NOTE: Special care for all types of footwear." }, // New category
      { id: 3, name: "Others", key: "others", discount: 35, noteByKg: "NOTE: Specialized cleaning services." }
    ],
    services: [
      {
        "id": 1,
        "name": "IRON",
        "description": "Professional ironing service for wrinkle-free clothes.",
        "categories": ["general"],
        "rateByPiece": 15,
        "discountedRateByPiece": 10,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Iron",
        "customText": "₹15",
        "image": ironImage,
        "discount": 33
      },
      {
        "id": 2,
        "name": "WASH & FOLD",
        "description": "Complete washing and folding service for your clothes.",
        "categories": ["general"],
        "rateByPiece": 0,
        "discountedRateByPiece": 0,
        "rateByKg": 85,
        "discountedRateByKg": 59,
        "unit": "kg",
        "displayName": "Wash & Fold",
        "customText": "₹80",
        "image": washFoldImage,
        "discount": 30
      },
      {
        "id": 3,
        "name": "WASH & IRON",
        "description": "Complete washing and ironing service for crisp garments.",
        "categories": ["general"],
        "rateByPiece": 0,
        "discountedRateByPiece": 0,
        "rateByKg": 109,
        "discountedRateByKg": 79,
        "unit": "kg",
        "displayName": "Wash & Iron",
        "customText": "₹110",
        "image": washIronImage,
        "discount": 30
      },
      {
        "id": 4,
        "name": "BLAZERS",
        "description": "Professional dry cleaning for blazers to maintain their shape.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 165,
        "discountedRateByPiece": 110,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Blazers",
        "customText": "₹165",
        "image": blazersImage,
        "discount": 33
      },
      {
        "id": 5,
        "name": "SHIRT & PANT",
        "description": "Dry cleaning service for formal shirts and pants.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 70,
        "discountedRateByPiece": 45,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Shirt & Pant",
        "customText": "₹70",
        "image": shirtPantImage,
        "discount": 35
      },
      {
        "id": 6,
        "name": "BEDSHEET (SINGLE)",
        "description": "Dry cleaning service for single bedsheets.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 190,
        "discountedRateByPiece": 135,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Bedsheet (Single)",
        "customText": "₹190",
        "image": bedsheetSingleImage,
        "discount": 35
      },
      {
        "id": 7,
        "name": "BEDSHEET (SINGLE)",
        "description": "Wash service for single bedsheets.",
        "categories": ["general"],
        "rateByPiece": 60,
        "discountedRateByPiece": 40,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Bedsheet (Single)",
        "customText": "₹60",
        "image": bedsheetBlanketImage,
        "discount": 33
      },
      {
        "id": 8,
        "name": "UNIFORM (WASH & IRON)",
        "description": "Professional cleaning service for school and work uniforms.",
        "categories": ["general", "others"],
        "rateByPiece": 75,
        "discountedRateByPiece": 50,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Uniform",
        "customText": "₹100",
        "image": uniformImage,
        "discount": 33
      },
      {
        "id": 9,
        "name": "SIMPLE SHOES/SPORTS SHOES",
        "description": "Cleaning service for casual shoes.",
        "categories": ["others", "shoes"],
        "rateByPiece": 150,
        "discountedRateByPiece": 100,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "pair",
        "displayName": "Simple Shoes",
        "customText": "₹150",
        "image": simpleShoesImage,
        "discount": 33
      },
      {
        "id": 10,
        "name": "LOAFERS/SNEAKERS",
        "description": "Premium cleaning service for loafers and sneakers.",
        "categories": ["others","shoes"],
        "rateByPiece": 135,
        "discountedRateByPiece": 90,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "pair",
        "displayName": "Loafers/Sneakers(shoes)",
        "customText": "₹135",
        "image": loafersSneakersImage,
        "discount": 33
      },
      {
        "id": 12,
        "name": "Saree - Embroidery",
        "description": "Special dry cleaning for embroidered sarees.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 150,
        "discountedRateByPiece": 100,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Saree (Embroidery)",
        "customText": "₹100",
        "image": sareeEmbroideryImage,
        "discount": 33
      },
        {
        "id": 14,
        "name": "Saree",
        "description": "Dry cleaning service for regular sarees.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 135,
        "discountedRateByPiece": 80,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Saree",
        "customText": "₹80",
        "image": sareeImage,
        "discount": 33
      },
      {
        "id": 15,
        "name": "Silk Saree",
        "description": "Dry cleaning service for silk sarees.",
        "categories": ["general"],
        "rateByPiece": 135,
        "discountedRateByPiece": 90,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Silk Saree",
        "customText": "₹190",
        "image": sareeImage,
        "discount": 33
      },
      {
        "id": 16,
        "name": "Blouse",
        "description": "Dry cleaning service for blouses.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 45,
        "discountedRateByPiece": 30,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Blouse",
        "customText": "₹55",
        "image": blouseImage,
        "discount": 33
      },
      {
        "id": 17,
        "name": "Shirt/T-Shirt",
        "description": "Cleaning service for shirts and t-shirts.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Shirt/T-Shirt",
        "customText": "₹55",
        "image": shirtTshirt,
        "discount": 33
      },
      {
        "id": 18,
        "name": "Kurta/Kurti",
        "description": "Cleaning service for kurtas and kurtis.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Kurta/Kurti",
        "customText": "₹30",
        "image": Kurta,
        "discount": 33
      },
      {
        "id": 19,
        "name": "Jacket",
        "description": "Cleaning service for jackets.",
        "categories": ["general"],
        "rateByPiece": 38,
        "discountedRateByPiece": 25,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Jacket",
        "customText": "₹38",
        "image": jacket,
        "discount": 34
      },
      {
        "id": 20,
        "name": "Sweater",
        "description": "Cleaning service for sweaters.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Sweater",
        "customText": "₹30",
        "image": sweater,
        "discount": 33
      },
      {
        "id": 21,
        "name": "Sherwani",
        "description": "Dry cleaning service for sherwanis.",
        "categories": ["dry_cleaning"],
        "rateByPiece": 173,
        "discountedRateByPiece": 115,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Sherwani",
        "customText": "₹200",
        "image": sherwani,
        "discount": 34
      },
      {
        "id": 22,
        "name": "Shorts",
        "description": "Cleaning service for shorts.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Shorts",
        "customText": "₹20",
        "image": shorts,
        "discount": 33
      },
      {
        "id": 23,
        "name": "Pyjama",
        "description": "Cleaning service for pyjamas.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Pyjama",
        "customText": "₹60",
        "image": pyjama,
        "discount": 33
      },
      {
        "id": 24,
        "name": "Nighty/Gown",
        "description": "Cleaning service for nighties and gowns.",
        "categories": ["general"],
        "rateByPiece": 75,
        "discountedRateByPiece": 50,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Nighty/Gown",
        "customText": "₹75",
        "image": nightyGown,
        "discount": 34
      },
      {
        "id": 25,
        "name": "Hoodie",
        "description": "Cleaning service for hoodies.",
        "categories": ["general"],
        "rateByPiece": 33,
        "discountedRateByPiece": 22,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Hoodie",
        "customText": "₹33",
        "image": hoodiee,
        "discount": 33
      },
      {
        "id": 26,
        "name": "Pants",
        "description": "Cleaning service for pants.",
        "categories": ["general"],
        "rateByPiece": 30,
        "discountedRateByPiece": 20,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Pants/Trousers",
        "customText": "₹30",
        "image": pantTrouser,
        "discount": 33
      },
      {
        "id": 27,
        "name": "Jeans (Wash)",
        "description": "Washing service for jeans.",
        "categories": ["general"],
        "rateByPiece": 33,
        "discountedRateByPiece": 33,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Jeans (Wash)",
        "customText": "₹33",
        "image": jeansImage,
        "discount": 33
      },
      {
        "id": 28,
        "name": "Blanket (Single)",
        "description": "Dry cleaning service for blankets.",
        "categories": ["general"],
        "rateByPiece": 80,
        "discountedRateByPiece": 55,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Blanket (Single)",
        "customText": "₹80",
        "image": blanketImage,
        "discount": 31
      },
      {
        "id": 29,
        "name": "Blanket (Double)",
        "description": "Dry cleaning service for double blankets.",
        "categories": ["general"],
        "rateByPiece": 165,
        "discountedRateByPiece": 110,
        "rateByKg": 0,
        "discountedRateByKg": 0,
        "unit": "piece",
        "displayName": "Blanket (Double)",
        "customText": "₹165",
        "image": doubleBlanketImage,
        "discount": 33
      }


    ],
    donationService: {
      name: "Clothing Donation",
      description: "Help those in need with your old clothes",
      rate: 0,
      unit: "donation",
      icon: "♥",
      image: "donation.jpg"
    }
  };
  export default data; // Export as default
