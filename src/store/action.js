import { ADD_TO_BASKAT, STORE_LIST, REMOVE_CARD } from "./constats";

export function AddToBasket(list) {
  return { type: ADD_TO_BASKAT, list };
}

export function BasketList() {
  let list = localStorage.getItem("list");
    list = JSON.parse(list);
    return { type: STORE_LIST, list };
}

export function removeCardId(id) {
  return { type: REMOVE_CARD, id };
}
