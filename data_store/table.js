

let user_records=[];
user_records=JSON.parse(localStorage.getItem("users")) ? user_records=JSON.parse(localStorage.getItem("users")): []

console.log(user_records)
var x=localStorage.getItem

let row=document.createElement("tr")
    let firstNameCell=document.createElement("td");
    let lastNameCell=document.createElement("td");
    let passwordCell=document.createElement("td");
    let mobile_noCell=document.createElement("td");
    let email_idCell=document.createElement("td");
    let genderCell=document.createElement("td");

      firstNameCell.innerHTML=user_records[1].fname;
      lastNameCell.innerHTML=user_records[1].lastname;
      passwordCell.innerHTML=user_records[1].passwd;
      mobile_noCell.innerHTML=user_records[1].ph_no;
      email_idCell.innerHTML=user_records[1].email;
      genderCell.innerHTML=user_records[1].gender;

    firstNameCell.innerHTML


     row.appendChild(firstNameCell);
     row.appendChild(lastNameCell);
     row.appendChild(passwordCell);
     row.appendChild(mobile_noCell);
     row.appendChild(email_idCell);
     row.appendChild(genderCell);


let x=document.getElementById("tablebody");

document.body.appendChild(row)
