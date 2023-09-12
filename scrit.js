// for(var i=1; i <6; i++){
//     document.write(i+"hello world <br>")
// }


// for(var i=1; i<11; i++){
//     document.write(i+"<br>")
// }

// var userinput = prompt("enter table")

// for(var i=1; i<=10; i++){
//     document.write(userinput+ " x "+i+" = " +userinput*i,"<br>")

// }

// var arr=["nokia" , "hawa" , "sumsang" , "sony","Apple" ]

// for(var i=0; i<arr.length; i++){
//     document.write(arr[i],"<br>")
// }

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i],"<br>")
// }

// var userinput = prompt ("Welcome to shajee bakery !")

// var arr =['cake', 'apple pie', 'cookie', 'chips', 'patties']

// var match = false

// for(var i=0; i<=arr.length; i++){
//     if(userinput == arr[i]){
//         match=true
//      document.write("Yes available in just $50")
//      break
//     }
// }

// if(match==false){
//     document.write("sorry this item currently unavailable")
// }

// // Sample data
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// // Get the table container element from the HTML document
// var tableContainer = document.getElementById("table-container");

// // Create a table element
// var table = document.createElement("table");

// // Create a table header (thead) and table row (tr) for headers
// var thead = document.createElement("thead");
// var headerRow = document.createElement("tr");

// // Add headers for Name and Score
// var nameHeader = document.createElement("th");
// nameHeader.textContent = "Name";
// var scoreHeader = document.createElement("th");
// scoreHeader.textContent = "Score";

// // Append headers to the header row
// headerRow.appendChild(nameHeader);
// headerRow.appendChild(scoreHeader);

// // Append the header row to the table header
// thead.appendChild(headerRow);

// // Append the table header to the table
// table.appendChild(thead);

// // Create a table body (tbody) to hold the data rows
// var tbody = document.createElement("tbody");

// // Loop through the students and scores arrays to create table rows and data cells
// for (var i = 0; i < students.length; i++) {
//   var studentName = students[i];
//   var studentScore = scores[i];

//   // Create a table row (tr) for each student
//   var dataRow = document.createElement("tr");

//   // Create data cells (td) for name and score
//   var nameCell = document.createElement("td");
//   nameCell.textContent = studentName;
//   var scoreCell = document.createElement("td");
//   scoreCell.textContent = studentScore;

//   // Append data cells to the data row
//   dataRow.appendChild(nameCell);
//   dataRow.appendChild(scoreCell);

//   // Append the data row to the table body
//   tbody.appendChild(dataRow);
// }

// // Append the table body to the table
// table.appendChild(tbody);

// // Append the table to the table container in the HTML document
// tableContainer.appendChild(table);

// for(var i=1; i<=9; i=i+3){
//     for(var j=i; j <i+3; j++){
//     document.write(j+" ")
// }
//     document.write("<br>")
// }












































   