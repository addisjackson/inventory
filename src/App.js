import React from 'react';
import './App.css';
import { onFormSubmit, readFormData, resetForm, insertNewRecord, updateRecord, onEdit, onDelete, radioChecked, toggleNewFlavorInput } from './script.js'
function App() {
  // Define your React component logic here

  return (
    <div>
      <div className="storename">
        <div className="header">
          <h1>Addis' Ice-Cream Confections</h1>
        </div>
      </div>
      <div className="slogan">
        <h2>~ giving your rest face a giggle ~</h2>
      </div>
      <div className="tel">
        <p>Tel: 212-330-2435</p>
      </div>
      <div className="address">
        <div className="address-hours">
          <h4>Address:</h4>
          <p>123 Main Street,</p>
          <p>Suite 330,</p>
          <p>New York, NY 10012.</p>
        </div>
        <div className="address-hours">
          <h4>Hours:</h4>
          <p>Mondays to Fridays: 9 am to 5 pm</p>
          <p>Saturdays: 9 am to 9 pm</p>
          <p>Sundays: 11 am to 5 pm</p>
        </div>
      </div>
      <div className="title">
        <h2>Ice-Cream Inventory</h2>
      </div>
      <table>
        <tr>
          <td>
            <td>
              <form autoComplete="off" onSubmit={onFormSubmit}>
                <div className="datename">
                  <label htmlFor="date">Date</label>
                  <input type="date" name="date" id="date" />
                </div>
                <div className="datename">
                  <label htmlFor="flavor">Flavor:</label>
                  <select id="flavor" onchange={readFormData}>
                                <option value="Vanilla">Vanilla</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Strawberry">Strawberry</option>
                                <option value="Cookies and Cream">Cookies [&] Cream</option>
                                <option value="Cookie Dough">Cookie Dough</option>
                                <option value="Butter Pecan">Butter Pecan</option>
                                <option value="Birthday Cake">Birthday Cake</option>
                                <option value="Rocky Road">Rocky Road</option>
                                <option value="Coffee">Coffee</option>
                                <option value="Pistachio">Pistachio</option>
                                <option value="Chocolate Chip">Chocolate Chip</option>
                                <option value="Chocolate Chip Cookie Dough">Chocolate Chip Cookie Dough</option>
                                <option value="Chocolate Peanut Butter">Chocolate Butter Pecan</option>
                                <option value="Chocolate Marshmallow">Chocolate Marshmallow</option>
                                <option value="Chocolate Chip Mint">Chocolate Chip Mint</option>
                                <option value="Chocolate Fudge Brownie">Chocolate Fudge Brownie</option>
                                <option value="newFlavor" onFocus={toggleNewFlavorInput}>Flavor not listed</option>
                            </select>
                  <input type="text" id="newFlavorInput" name="newFlavor" placeholder="Enter new flavor" style={{ display: 'none' }} />
                </div>
                <div>
                  <label htmlFor="productPrice">Product Price</label>
                  <input type="text" name="productPrice" id="productPrice" />
                </div>
                <div>
                  <label htmlFor="quantityPurchased">Quantity Purchased</label>
                  <input type="number" name="quantityPurchased" id="quantityPurchased" />
                </div>
                <div>
                  <label htmlFor="quantityRemaining">Quantity Remaining</label>
                  <input type="number" name="quantityRemaining" id="quantityRemaining" onInput={radioChecked} />
                </div>
                <div>
                <label htmlFor="order">Yes</label>
                  <input type="radio" name="order" id="order" value="yes" />

                <label htmlFor="noorder">No</label>
                  <input type="radio" name="order" id="noorder" value="no" />

                </div>
                <div className="form_action--button">
                  <button type="submit" value="Submit">Submit</button>
                  <button type="reset" value="Reset" onClick={resetForm}>Reset</button>
                </div>
              </form>
            </td>
          </td>
        </tr>
      </table>
      <table className="list" id="storeList">
        <thead>
          <tr>
            <th>Date</th>
            <th>Flavor</th>
            <th>Product Price</th>
            <th>Quantity Purchased</th>
            <th>Quantity Remaining</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
