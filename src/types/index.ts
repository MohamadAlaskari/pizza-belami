
export interface MenuItemOption {
  size?: string; // e.g., "24cm", "30cm", "40cm"
  price: number;
  name?: string; 
}

export interface ExtraItem {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  category: string;
  options: MenuItemOption[];
  imageUrl: string;
  aiHint: string;
  tags?: string[]; // e.g., "vegetarian", "spicy", "new"
  availableExtras?: ExtraItem[];
}

export interface CartItem {
  id: string; // Unique ID for the cart item instance (e.g., menuItemId + selectedOption.size)
  menuItemId: string;
  name: string;
  quantity: number;
  selectedOption: MenuItemOption;
  selectedExtras: ExtraItem[];
  unitPrice: number; // Calculated price for one unit with selected option and extras
  imageUrl: string;
}

export interface OpeningHoursData {
  [day: string]: string;
}
