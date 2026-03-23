export interface MenuItem {
  name: string;
  price: number;
  tag?: 'veg' | 'non-veg';
}

export interface MenuCategory {
  icon: string;
  title: string;
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    icon: '🥤',
    title: 'Smoothies',
    items: [
      { name: 'Banana Honey Smoothie', price: 275 },
      { name: 'Mix Berry Smoothie', price: 275 },
      { name: 'Apple Mint Smoothie', price: 275 },
    ],
  },
  {
    icon: '🍲',
    title: 'Soups',
    items: [
      { name: 'Broccoli Cream Soup', price: 249, tag: 'veg' },
      { name: 'Mushroom Cream Soup', price: 249, tag: 'veg' },
      { name: 'Tomato & Basil Soup', price: 249, tag: 'veg' },
      { name: 'Barbecue Chicken Soup', price: 299, tag: 'non-veg' },
      { name: 'Herb Chicken Delight Soup', price: 299, tag: 'non-veg' },
    ],
  },
  {
    icon: '🥚',
    title: 'Eggs',
    items: [
      { name: 'Plain Omelette', price: 119 },
      { name: 'Masala Omelette', price: 129 },
      { name: 'Cheese Omelette', price: 139 },
      { name: 'Chicken Stuffed Omelette', price: 159, tag: 'non-veg' },
      { name: 'Egg Benedict', price: 399 },
    ],
  },
  {
    icon: '☕',
    title: 'Hot Beverages',
    items: [
      { name: 'Cappuccino', price: 205 },
      { name: 'Latte', price: 205 },
      { name: 'Café Mocha', price: 215 },
      { name: 'Americano', price: 160 },
      { name: 'Espresso / Cortado', price: 125 },
      { name: 'Macchiato', price: 145 },
      { name: 'Flat White', price: 205 },
      { name: 'Affogato / Doppio', price: 195 },
      { name: 'Hot Chocolate', price: 205 },
    ],
  },
  {
    icon: '🧊',
    title: 'Iced Coffee',
    items: [
      { name: 'Iced Latte', price: 200 },
      { name: 'Iced Americano', price: 175 },
      { name: 'Iced Mocha', price: 275 },
      { name: 'Cold Coffee', price: 250 },
      { name: 'Frappe', price: 275 },
    ],
  },
  {
    icon: '🍵',
    title: 'Tea',
    items: [
      { name: 'Masala Tea', price: 125 },
      { name: 'Honey Lemon Tea', price: 130 },
      { name: 'Green Tea', price: 100 },
      { name: 'Flavoured Tea', price: 135 },
      { name: 'Chocolate Tea', price: 135 },
    ],
  },
  {
    icon: '🧋',
    title: 'Iced Tea',
    items: [
      { name: 'Green Apple', price: 125 },
      { name: 'Lemon', price: 125 },
      { name: 'Peach', price: 125 },
    ],
  },
  {
    icon: '🍝',
    title: 'Pasta',
    note: 'Add Chicken – ₹70',
    items: [
      { name: 'Creamy Mushroom Pasta', price: 399, tag: 'veg' },
      { name: 'Spaghetti Aglio e Olio', price: 399, tag: 'veg' },
      { name: 'Penne in Creamy Tomato Sauce', price: 449, tag: 'veg' },
      { name: 'Fettuccine Alfredo', price: 449, tag: 'veg' },
    ],
  },
  {
    icon: '🥪',
    title: 'Sandwiches',
    items: [
      { name: 'Fresh Veg Club', price: 349, tag: 'veg' },
      { name: 'Grilled Cottage Cheese BBQ', price: 349, tag: 'veg' },
      { name: 'Mediterranean Falafel', price: 399, tag: 'veg' },
      { name: 'Cottage Cheese & Pesto', price: 329, tag: 'veg' },
      { name: 'Grilled Chicken & Sun-dried Tomato', price: 399, tag: 'non-veg' },
      { name: 'Classic Hawaiian Chicken', price: 399, tag: 'non-veg' },
      { name: 'Ham & Chicken', price: 399, tag: 'non-veg' },
      { name: 'Chicken Mayo Club', price: 399, tag: 'non-veg' },
    ],
  },
  {
    icon: '🍔',
    title: 'Burgers',
    items: [
      { name: 'Crispy Cottage Cheese', price: 299, tag: 'veg' },
      { name: 'Crunchy Veg Mayo', price: 279, tag: 'veg' },
      { name: 'Barbeque Veg Burger', price: 279, tag: 'veg' },
      { name: 'Bacon & Ham Cheese', price: 399, tag: 'non-veg' },
      { name: 'Grilled Chicken & Cheese', price: 399, tag: 'non-veg' },
      { name: 'Classic Lamb Burger', price: 449, tag: 'non-veg' },
    ],
  },
  {
    icon: '🥗',
    title: 'Salads',
    items: [
      { name: 'Greek / Fattoush / Caesar / Russian', price: 285, tag: 'veg' },
      { name: 'Orange Almond Salad', price: 305, tag: 'veg' },
      { name: 'Greek Chicken / Fattoush', price: 335, tag: 'non-veg' },
      { name: 'Chicken n Egg Caesar', price: 345, tag: 'non-veg' },
      { name: 'Chicken Russian', price: 335, tag: 'non-veg' },
      { name: 'Orange Almond Chicken', price: 365, tag: 'non-veg' },
    ],
  },
  {
    icon: '🍕',
    title: 'Pizza',
    items: [
      { name: 'Margherita', price: 299, tag: 'veg' },
      { name: 'Veg Extravaganza', price: 399, tag: 'veg' },
      { name: 'Cheese & Corn', price: 329, tag: 'veg' },
      { name: 'Bacon & Ham', price: 399, tag: 'non-veg' },
      { name: 'Barbecue Chicken', price: 359, tag: 'non-veg' },
      { name: 'Chicken Sausage', price: 379, tag: 'non-veg' },
    ],
  },
  {
    icon: '🍟',
    title: 'Munchies',
    items: [
      { name: 'French Fries / Smileys', price: 195, tag: 'veg' },
      { name: 'Corn Cheese Balls', price: 205, tag: 'veg' },
      { name: 'Nachos', price: 125, tag: 'veg' },
      { name: 'Fish & Chips', price: 449, tag: 'non-veg' },
      { name: 'Chicken Nuggets', price: 235, tag: 'non-veg' },
    ],
  },
  {
    icon: '🍰',
    title: 'Desserts',
    items: [
      { name: 'Ice Cream', price: 80 },
      { name: 'Pancakes', price: 169 },
      { name: 'Waffle', price: 179 },
      { name: 'Waffle with Ice Cream', price: 225 },
      { name: 'Overloaded Waffle', price: 225 },
    ],
  },
  {
    icon: '🥤',
    title: 'Shakes',
    items: [
      { name: 'Vanilla', price: 255 },
      { name: 'Oreo / Berry Oreo / Choco Brownie / Strawberry', price: 265 },
      { name: 'Nutella / Hazelnut Mocha', price: 265 },
      { name: 'Banana Peanut Butter', price: 275 },
    ],
  },
];