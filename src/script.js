var selectedRow = null

export function onFormSubmit(e) {
	e.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		} else {
            updateRecord(formData);
		}
        resetForm();    
}



//Retrieve the data
export function readFormData() {

  var formData = {};
    formData["date"] = document.getElementById("date").value;
    var flavorDropDown = document.getElementById("flavor");
    if (flavorDropDown.value === "newFlavor") {
        formData["flavor"] = document.getElementById("newFlavorInput").value;
    } else {
        formData["flavor"] = flavorDropDown.value;
    }
    formData["productPrice"] = document.getElementById("productPrice").value;
    formData["quantityPurchased"] = document.getElementById("quantityPurchased").value;
    formData["quantityRemaining"] = document.getElementById("quantityRemaining").value;
    formData["order"] = document.getElementById("order").checked ? "yes" : "no";
;
    return formData;
}

//Insert the data
export function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.date;
    
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.flavor;
    
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.productPrice;
    
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantityPurchased;
    
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.quantityRemaining;
    
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.order;
    
    var cell7 = newRow.insertCell(6);
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      onEdit(this);
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      onDelete(this);
    });
  
    cell7.appendChild(editButton);
    cell7.appendChild(deleteButton);
  }
  
//Edit the data
export function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("flavor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantityPurchased").value = selectedRow.cells[3].innerHTML;
    document.getElementById("quantityRemaining").value = selectedRow.cells[4].innerHTML;
    document.getElementById("order").value = selectedRow.cells[5].innerHTML;


}
export function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.date;
    selectedRow.cells[1].innerHTML = formData.flavor;
    selectedRow.cells[2].innerHTML = formData.productPrice;
    selectedRow.cells[3].innerHTML = formData.quantityPurchased;
    selectedRow.cells[4].innerHTML = formData.quantityRemaining;
    selectedRow.cells[5].innerHTML = formData.order;
}

//Delete the data

    function onDelete(td) {
        if (window.confirm('Do you want to delete this record?')) {
          var row = td.parentElement.parentElement;
          var table = document.getElementById('storeList');
          table.deleteRow(row.rowIndex);
          resetForm();
        }
      }

//Reset the data
export function resetForm() {
    document.getElementById("date").value = '';
    document.getElementById("flavor").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("quantityPurchased").value = '';
    document.getElementById("quantityRemaining").value = '';
    document.getElementById("order").checked = false;
    selectedRow = null;
}

// Program to check the radio button automatically
export function radioChecked() {
  const quantityRemaining = parseInt(document.getElementById("quantityRemaining").value);
  if (quantityRemaining < 5) {
      document.getElementById("order").checked = true;
  } else {
      document.getElementById("noorder").checked = true;
  }
}

export function toggleNewFlavorInput() {
  const flavorDropDown = document.getElementById("flavor");
  const newFlavorInput = document.getElementById("newFlavorInput");
  if (flavorDropDown.value === "Flavor not listed") {
      newFlavorInput.style.display = "none";
  } else {
      newFlavorInput.style.display = "block";
  }
}