export const initialState = {
  basket: [],
  user: null,
};

// export const getBasketTotal = (basket) => {
//   return basket?.reduce((amount, item) => item.price + amount, 0);
// };
export const getBasketTotal = (basket) => {
  // Calculate the total price of items in the cart
  return basket?.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price) * item.quantity,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (index === -1) {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      } else {
        return state;
      }

    case "add":
      const updatedBasket = state.basket.map((item) => {
        if (item.id === action.id) {
          // Update the quantity of the item based on the action type
          const newQuantity1 = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity1,
          };
        }
        return item;
      });
      return {
        ...state,
        basket: updatedBasket,
      };

    case "remove":
      const updatedBasket2 = state.basket
        .map((item) => {
          if (item.id === action.id) {
            // Update the quantity of the item based on the action type
            const newQuantity = item.quantity - 1;
            if (newQuantity < 1) {
              // Remove the item from the cart if the quantity becomes less than 1
              return null;
            }
            return {
              ...item,
              quantity: newQuantity,
            };
          }
          return item;
        })
        .filter((item) => item !== null); // Filter out the null values from the updated cart
      return {
        ...state,
        basket: updatedBasket2,
      };

    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
