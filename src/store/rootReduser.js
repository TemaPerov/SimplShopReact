import { ADD_TO_BASKAT, STORE_LIST, REMOVE_CARD } from "./constats";

const initialSate = {
  productList: [
    {
      id: 1,
      name: "article 1",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 25,
    },

    {
      id: 2,
      name: "article 2",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 4,
    },

    {
      id: 3,
      name: "article 3",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 50,
    },

    {
      id: 4,
      name: "article 4",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 80,
    },

    {
      id: 5,
      name: "article 5",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 34,
    },

    {
      id: 6,
      name: "article 6",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 10,
    },

    {
      id: 7,
      name: "article 7",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 35,
    },
  ],
  basketList: [],
};
export default function root(state = initialSate, action) {
  switch (action.type) {
    case ADD_TO_BASKAT:
      const newBasKetList = [...state.basketList, action.list]
      localStorage.setItem(
        "list",
        JSON.stringify(newBasKetList)
      );
      return {
        ...state,
        basketList: newBasKetList,
      };
    case STORE_LIST:
      return {
        ...state,
        basketList: action.list,
      };
    case REMOVE_CARD:
      const newList = state.basketList.filter((el, i) => i !== action.id);
      console.log(newList);
      localStorage.setItem("list", JSON.stringify(newList));
      return {
        ...state,
        basketList: newList,
      };
    default:
      return state;
  }
}
