import type { MenuItem, ExtraItem } from '@/types';

export const categories = ["Pizza", "Spezialpizzen", "Calzone", "Salate", "Burger", "Baguettes", "Rollos", "Snackys", "Desserts", "Getränke"];

export const availableExtrasList: ExtraItem[] = [
  { id: "extra-1", name: "Käse", price: 1.50 },
  { id: "extra-2", name: "Salami", price: 2.00 },
  { id: "extra-3", name: "Champignons", price: 1.00 },
  { id: "extra-4", name: "Oliven", price: 1.00 },
  { id: "extra-5", name: "Peperoni", price: 1.50 },
];

export const menuData: MenuItem[] = [
  // Pizza
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    description: "Tomatensauce, Käse und Oregano.",
    category: "Pizza",
    options: [
      { size: "24cm", price: 7.00 },
      { size: "30cm", price: 9.00 },
      { size: "40cm", price: 13.00 },
    ],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "margherita pizza",
    tags: ["vegetarian"],
    availableExtras: availableExtrasList,
  },
  {
    id: "pizza-salami",
    name: "Pizza Salami",
    description: "Tomatensauce, Käse und Salami.",
    category: "Pizza",
    options: [
      { size: "24cm", price: 8.50 },
      { size: "30cm", price: 10.50 },
      { size: "40cm", price: 15.50 },
    ],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "salami pizza",
    availableExtras: availableExtrasList,
  },
  {
    id: "pizza-hawaii",
    name: "Pizza Hawaii",
    description: "Tomatensauce, Käse, Schinken und Ananas.",
    category: "Pizza",
    options: [
      { size: "24cm", price: 9.00 },
      { size: "30cm", price: 11.50 },
      { size: "40cm", price: 16.50 },
    ],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "hawaiian pizza",
    availableExtras: availableExtrasList,
  },
  // Spezialpizzen
  {
    id: "spezial-belami",
    name: "Pizza Belami Spezial",
    description: "Tomatensauce, Käse, Salami, Schinken, Champignons, Paprika, Zwiebeln.",
    category: "Spezialpizzen",
    options: [
      { size: "24cm", price: 10.50 },
      { size: "30cm", price: 13.50 },
      { size: "40cm", price: 19.50 },
    ],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "specialty pizza",
    availableExtras: availableExtrasList,
  },
  // Calzone
  {
    id: "calzone-classic",
    name: "Calzone Classico",
    description: "Gefüllt mit Tomatensauce, Käse, Schinken, Salami und Champignons.",
    category: "Calzone",
    options: [{ price: 11.00 }], // Single price/size for Calzone often
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "calzone",
    availableExtras: availableExtrasList,
  },
  // Salate
  {
    id: "salat-mista",
    name: "Salat Mista",
    description: "Gemischter Salat mit Tomaten, Gurken, Mais und Dressing nach Wahl.",
    category: "Salate",
    options: [{ price: 7.50 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "mixed salad",
    tags: ["vegetarian"],
  },
  // Burger
  {
    id: "burger-classic",
    name: "Classic Burger",
    description: "Rindfleisch-Patty, Salat, Tomate, Zwiebeln, Sauce.",
    category: "Burger",
    options: [{ price: 9.50 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "classic burger",
  },
  // Baguettes
  {
    id: "baguette-salami",
    name: "Baguette Salami",
    description: "Mit Salami, Käse, Salat und Remoulade.",
    category: "Baguettes",
    options: [{ price: 8.00 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "salami baguette",
  },
  // Rollos
  {
    id: "rollo-chicken",
    name: "Rollo Chicken",
    description: "Gefüllt mit Hähnchenfleisch, Salat, Zwiebeln und Sauce.",
    category: "Rollos",
    options: [{ price: 9.00 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "chicken wrap",
  },
  // Snackys
  {
    id: "snacky-pommes",
    name: "Pommes Frites",
    description: "Knusprige Pommes mit Ketchup oder Mayo.",
    category: "Snackys",
    options: [{ price: 4.00 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "french fries",
    tags: ["vegetarian"],
  },
  // Desserts
  {
    id: "dessert-benjerry",
    name: "Ben & Jerry's Cookie Dough",
    description: "Eiscreme mit Keksteigstückchen.",
    category: "Desserts",
    options: [{ name: "100ml", price: 3.50 }, { name: "465ml", price: 8.50 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "ice cream",
  },
  // Getränke
  {
    id: "getraenk-cola",
    name: "Coca-Cola",
    description: "Erfrischende Coca-Cola",
    category: "Getränke",
    options: [{ name: "0,33l Dose", price: 2.00 }, { name: "1l Flasche", price: 3.50 }],
    imageUrl: "https://placehold.co/300x200.png",
    aiHint: "coca cola",
  }
];

export const openingHoursData: Record<string, string> = {
  "Montag": "11:00 - 22:00",
  "Dienstag": "11:00 - 22:00",
  "Mittwoch": "11:00 - 22:00",
  "Donnerstag": "11:00 - 22:00",
  "Freitag": "11:00 - 23:00",
  "Samstag": "12:00 - 23:00",
  "Sonntag": "12:00 - 22:00",
  "Feiertage": "12:00 - 22:00"
};
