import polotees from "../images/gqjignesh.png";
import denimjean from "../images/denimjean.png";
import jeans from "../images/jeans.jpg";
import shirt from "../images/shirt.jpg";
import trouser from "../images/trousers.jpg";
import jogger from "../images/joggers.jpg";
import shorts from "../images/shorts.jpg";
import shadow from "../images/shadow.png";
import tees from "../images/tees.jpg";
import order from "../images/orders.png";

export const collection = [
  {
    id: 1,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 2,
    imgurl: polotees,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 3,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 4,
    imgurl: polotees,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 5,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  }
];

export const breadcrumpmap = {
  "1": "Home | My Profile",
  "2": " Home | My Orders",
  "3": "Home | My Address"
};

export const tabs = [
  { id: "1", name: "MY PROFILE" },
  { id: "2", name: "MY WISHLIST" },
  { id: "3", name: "MY ORDERS" },
  { id: "4", name: "MY ADDRESSES" }
];

export const homemenuitem = [
  { id: 11, name: "THE BRAND" },
  { id: 12, name: "THE MADEUP STORY" },
  { id: 13, name: "FRANCHISE AND SUPPLIEDS" },
  { id: 14, name: "STORE LOCATOR" }
];

export const storiesdataset = [
  {
    id: "1",
    imgurl: shadow,
    active: true,
    desc: "For me"
  },
  {
    id: "2",
    imgurl: jeans,
    active: true,
    desc: "Jeans"
  },
  {
    id: "3",
    imgurl: shirt,
    active: true,
    desc: "Shirts"
  },
  {
    id: "4",
    imgurl: tees,
    active: true,
    desc: "T-Shirts"
  },
  {
    id: "5",
    imgurl: jogger,
    active: true,
    desc: "jogger"
  },
  {
    id: "6",
    imgurl: shorts,
    active: false,
    desc: "shorts"
  },
  {
    id: "7",
    imgurl: trouser,
    active: false,
    desc: "Phant"
  }
];

export const orderDetails = [
  {
    id: 1,
    imgurl: order,
    orderid: 1234566668,
    price: 1899,
    desc: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    delivery: "Sat, Aug 30",
    pending: true
  },
  {
    id: 2,
    imgurl: order,
    orderid: 1234566668,
    price: 1899,
    desc: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    delivery: "Sun, Aug 31",
    pending: true
  },
  {
    id: 3,
    imgurl: order,
    orderid: 1234566668,
    price: 1899,
    desc: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    delivery: "Sat, Aug 15",
    pending: false
  },
  {
    id: 4,
    imgurl: order,
    orderid: 1234566668,
    price: 1899,
    desc: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    delivery: "Sat, Aug 16",
    pending: false
  }
];

export const tabMap = {
  "1": "profile",
  "2": "wishlist",
  "3": "orders",
  "4": "address"
};
