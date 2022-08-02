function validation(){

    var fname=document.demoform.fname.value;
    var lastname=document.demoform.lastname.value;
    var password=document.demoform.password.value;
    
    if(fname===""){
        alert('please enter your name')
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
        fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                firstName: fname,
                lastName: lastname,
                password: password,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((postDemo) => postDemo.json())
              .then((entries) => console.log(entries))
              
              .catch((error) => {
                console.log(error);
              })

        fetch('https://jsonplaceholder.typicode.com/posts')
              .then(apiDemo => apiDemo.json())
              .then(myData => console.log(myData))
            
              .catch((error) => {
                console.log(error);
              })
}
   

          