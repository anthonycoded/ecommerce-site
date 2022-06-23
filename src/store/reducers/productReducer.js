const blueShirt = require("../../../assets/blueShirt.png");
const yellowShirt = require("../../../assets/yellowHoodie.png");
const red = require("../../../assets/red.jpg");

const initialState = {
  status: false,
  error: undefined,
  products: {
    shirts: [
      {
        id: 1,
        title: "Bumbaawt Shirt 1",
        featured: true,
        price: 9.99,
        description:
          "lorem ipsum fnior  vrheibe ihevrev rei feiverir  vhfeire feu vreir ihe",

        colors: [
          {
            color: "blue",
            images: [blueShirt, blueShirt, yellowShirt],
            sizes: [
              { size: "xs", quantity: 10 },
              { size: "sm", quantity: 8 },
            ],
          },

          {
            color: "red",
            images: [red.jpg, blueShirt, red.jpg],
            sizes: [
              { size: "md", quantity: 4 },
              { size: "lg", quantity: 7 },
              { size: "xl", quantity: 4 },
            ],
          },
          {
            color: "yellow",
            images: [yellowShirt, blueShirt, red.jpg],
            sizes: [
              { size: "sm", quantity: 5 },
              { size: "lg", quantity: 5 },
              { size: "xl", quantity: 5 },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Bumbaawt Shirt 1",
        featured: true,
        price: 9.99,
        description:
          "lorem ipsum fnior  vrheibe ihevrev rei feiverir  vhfeire feu vreir ihe",

        colors: [
          {
            color: "blue",
            images: [blueShirt, blueShirt, yellowShirt],
            sizes: [
              { size: "xs", quantity: 10 },
              { size: "sm", quantity: 8 },
            ],
          },

          {
            color: "red",
            images: [red.jpg, blueShirt, red.jpg],
            sizes: [
              { size: "md", quantity: 4 },
              { size: "lg", quantity: 7 },
              { size: "xl", quantity: 4 },
            ],
          },
          {
            color: "yellow",
            images: [yellowShirt, blueShirt, red.jpg],
            sizes: [
              { size: "sm", quantity: 5 },
              { size: "lg", quantity: 5 },
              { size: "xl", quantity: 5 },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Bumbaawt Shirt 1",
        featured: true,
        price: 9.99,
        description:
          "lorem ipsum fnior  vrheibe ihevrev rei feiverir  vhfeire feu vreir ihe",

        colors: [
          {
            color: "blue",
            images: [blueShirt, blueShirt, yellowShirt],
            sizes: [
              { size: "xs", quantity: 10 },
              { size: "sm", quantity: 8 },
            ],
          },

          {
            color: "red",
            images: [red.jpg, blueShirt, red.jpg],
            sizes: [
              { size: "md", quantity: 4 },
              { size: "lg", quantity: 7 },
              { size: "xl", quantity: 4 },
            ],
          },
          {
            color: "yellow",
            images: [yellowShirt, blueShirt, red.jpg],
            sizes: [
              { size: "sm", quantity: 5 },
              { size: "lg", quantity: 5 },
              { size: "xl", quantity: 5 },
            ],
          },
        ],
      },
    ],
    hoodies: [
      {
        id: 7,
        title: "Bumbaawt Shirt 1",
        price: 9.99,
        description:
          "lorem ipsum fnior  vrheibe ihevrev rei feiverir  vhfeire feu vreir ihe",

        colors: [
          {
            color: "yellow",
            images: [yellowShirt, blueShirt, red.jpg],
            sizes: [
              { size: "xs", quantity: 10 },
              { size: "sm", quantity: 5 },
              { size: "md", quantity: 7 },
              { size: "lg", quantity: 12 },
              { size: "xl", quantity: 10 },
            ],
          },
          {
            color: "blue",
            images: [yellowShirt, blueShirt, red.jpg],
            sizes: [
              { size: "xs", quantity: 10 },
              { size: "sm", quantity: 5 },
              { size: "md", quantity: 7 },
              { size: "lg", quantity: 12 },
              { size: "xl", quantity: 10 },
            ],
          },
        ],
      },
    ],
    mugs: [
      {
        id: 9,
        title: "Bumbaawt Shirt 1",
        price: 9.99,
        description:
          "lorem ipsum fnior  vrheibe ihevrev rei feiverir  vhfeire feu vreir ihe",

        colors: ["blue", "red", "green"],
      },
    ],
  },
};

const Get_Products = "Get_Products";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_Products:
      return state;

    default:
      return state;
  }
};
