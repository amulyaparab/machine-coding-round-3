import "./App.css";
import { snacks } from "./Database/snacks";

function App() {
  return (
    <div className="App">
      <h1>Snack Table</h1>
      <input placeholder="Search with Products or Ingredients..." />
      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Weight</th>
          <th>Price (INR)</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>

        {snacks.map(
          ({
            id,
            product_name,
            product_weight,
            price,
            calories,
            ingredients,
          }) => (
            <tr>
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
