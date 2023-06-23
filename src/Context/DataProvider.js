import { createContext, useContext, useReducer, useState } from "react";
import { snacks } from "../Database/snacks";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ascending, setAscending] = useState(true);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_BY":
        return {
          ...state,
          search: action.payload,
          filteredData: state.snacks.filter(({ product_name, ingredients }) => {
            console.log(
              ingredients.includes(
                ingredients.filter((ingredient) =>
                  ingredient.includes(action.payload)
                )
              )
            );
            return product_name
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };

      case "SORT_BY_ID":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) =>
            ascending ? b.id - a.id : a.id - b.id
          ),
        };
      case "SORT_BY_PRODUCT_NAME":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) => {
            if (ascending) {
              if (a.product_name < b.product_name) {
                return -1;
              } else if (a.product_name > b.product_name) {
                return 1;
              } else {
                return 0;
              }
            } else {
              if (b.product_name < a.product_name) {
                return -1;
              } else if (b.product_name > a.product_name) {
                return 1;
              } else {
                return 0;
              }
            }
          }),
        };
      case "SORT_BY_PRODUCT_WEIGHT":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) =>
            ascending
              ? b.product_weight.slice(0, -1) - a.product_weight.slice(0, -1)
              : a.product_weight.slice(0, -1) - b.product_weight.slice(0, -1)
          ),
        };
      case "SORT_BY_PRICE":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) =>
            ascending ? b.price - a.price : a.price - b.price
          ),
        };
      case "SORT_BY_CALORIES":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) =>
            ascending ? b.calories - a.calories : a.calories - b.calories
          ),
        };
      case "SORT_BY_INGREDIENTS":
        return {
          ...state,
          filteredData: state?.filteredData?.sort((a, b) => {
            if (ascending) {
              if (a.ingredients[0] < b.ingredients[0]) {
                return -1;
              } else if (a.ingredients[0] > b.ingredients[0]) {
                return 1;
              } else {
                return 0;
              }
            } else {
              if (b.ingredients[0] < a.ingredients[0]) {
                return -1;
              } else if (b.ingredients[0] > a.ingredients[0]) {
                return 1;
              } else {
                return 0;
              }
            }
          }),
        };
      default:
        return state;
    }
  };
  const initialState = {
    snacks: snacks,
    filteredData: snacks,
    search: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider
      value={{
        dispatch,
        state,
        ascending,
        setAscending,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
