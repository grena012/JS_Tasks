function validation(){
        

    var fname=document.demoform.fname.value;
    var lastname=document.demoform.lastname.value;
    var password=document.demoform.password.value;
    var Address=document.demoform.Address.value;
    var city=document.demoform.city.value;
    var state=document.demoform.state.value;
    var code=document.demoform.code.value;
    var ph_no=document.demoform.ph_no.value;
    var email=document.demoform.email.value;
    var gender=document.demoform.gender.value;
    var checkbox=document.demoform.checkbox.value;
    var dropdown=document.demoform.dropdown.value;
    
    if(fname===""){
        alert("please enter first name")
        return false;
    }
    else{
        let regex=/^[a-zA-Z\s]+$/;
        if(regex.test(fname) === false){
            alert('please enter valid first name')
            return false;
        }
    }
    
    if(lastname===""){
        alert('please enter your last name')
        return false;
    }
    else{
        let regex=/^[a-zA-Z\s]+$/;
        if(regex.test(lastname) === false){
            alert('please enter valid last name')
            return false;
        }
    }
    if(password===""){
        alert('please enter your password')
        return false;
    }
    else{
        let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
        if(regex.test(password) === false){
        alert('password must be eight to sixteen characters including one uppercase letter,one special character and alphanumeric characters')
        return false;
        }
    }
    if(Address==""){
        alert('please enter your Address')
        return false;
    }
    
    if(city==""){
        alert('please enter your city')
        return false;
    }
    else{
        let regex=/^[a-zA-Z\s]+$/;
        if(regex.test(city) === false){
        alert('please enter valid city')
        return false;
        }
    }
    
    
    if(state===""){
        alert('please enter your state')
        return false;
    }
    else{
        let regex=/^[a-zA-Z\s]+$/;
        if(regex.test(state) === false){
        alert('please enter valid state name')
        return false;
        }
    }
    if(code===""){
        alert('please enter your pincode/zipcode')
        return false;
    }
    else{
        let regex= /^[1-9][0-9]{5}$/;
        if(regex.test(code) === false){
            alert('please enter valid pincode/zipcode')
            return false;
        }
    }
    
    
    if(ph_no===""){
        alert('please enter your phone number')
        return false;
    }
    else{
        let regex= /^[1-9]\d{9}$/;
        if(regex.test(ph_no) === false){
            alert('please enter valid phone number')
            return false;
        }
    }
    
    
    if(email===""){
        alert('please enter your E-mail Address')
        return false;
    }
    else{
        let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false){
            alert('please enter valid E-mail Address')
            return false;
        }
    }
    if(dropdown == "select") {
        alert("Please select source");
        return false;
    } 
    if(gender == "") {
        alert("Please select your gender");
        return false;
    } 
    if(demoform.checkbox.checked==false){
        alert('please complete the check box')
    }

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    user_records.push
    (
     {
        fname: fname,
        lastname:lastname,
        password:password,
        mobileno:ph_no,
        Email:email,
        Gender:gender


     }
    )
    localStorage.setItem("users",JSON.stringify(user_records));
    
    
    window.location.replace('table.html')

   
    
}
function deldata()
{
    localStorage.clear();
}

