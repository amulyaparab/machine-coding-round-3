import "./App.css";
import { useData } from "./Context/DataProvider";
import { snacks } from "./Database/snacks";

function App() {
  const { state, dispatch, ascending, setAscending } = useData();
  return (
    <div className="App">
      <h1>Snack Table</h1>
      <input
        placeholder="Search with Products or Ingredients..."
        value={state?.search}
        onChange={(event) =>
          dispatch({ type: "SEARCH_BY", payload: event.target.value })
        }
      />
      <table>
        <tr>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_ID" });
              setAscending(!ascending);
            }}
          >
            ID
          </th>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_PRODUCT_NAME" });
              setAscending(!ascending);
            }}
          >
            Product Name
          </th>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_PRODUCT_WEIGHT" });
              setAscending(!ascending);
            }}
          >
            Product Weight
          </th>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_PRICE" });
              setAscending(!ascending);
            }}
          >
            Price (INR)
          </th>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_CALORIES" });
              setAscending(!ascending);
            }}
          >
            Calories
          </th>
          <th
            onClick={() => {
              dispatch({ type: "SORT_BY_INGREDIENTS" });
              setAscending(!ascending);
            }}
          >
            Ingredients
          </th>
        </tr>

        {state.filteredData.map(
          ({
            id,
            product_name,
            product_weight,
            price,
            calories,
            ingredients,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{product_name}</td>
              <td>{product_weight}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>{`${ingredients}  `}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default App;
