 //sotre data of register
 var Pname=document.getElementById("name");
 var email=document.getElementById("email");
 var password=document.getElementById("password");
 var age=document.getElementById("age");
 var phone=document.getElementById("phone");


 var container;
 if(localStorage.getItem("person") == null){
  container=[];
 }else{
  container=JSON.parse(localStorage.getItem("person"));
 }
 
 
 function Register_function(){
  var person_info={
    Name_per:Pname.value,
    Email_per:email.value,
    Password_per:password.value,
    Age_per:age.value,
    Phone_per:phone.value
  };
  container.push(person_info);
  localStorage.setItem("person",JSON.stringify(container));
  console.log(container);
 }



 Pname.addEventListener('focusout',function(){
  var regex=/^[a-z]/i;
  if(regex.test(Pname.value)){
    document.getElementById("warnning_name").style.display="none";
    Pname.blur();

    console.log("true");

  }else{
    document.getElementById("warnning_name").style.display="block";
      Pname.focus();
   
    console.log("false");
  }
 });

 email.addEventListener('focusout',function(){
  var regex=/(@gmail.com)$/;
  if(regex.test(email.value)){
    document.getElementById("warnning_email").style.display="none";
    email.blur();
    
    console.log("true");

  }else{
    document.getElementById("warnning_email").style.display="block";
    email.focus();
   
    console.log("false");
  }
 });

 phone.addEventListener('focusout',function(){
  var regex=/^(01)[0125]{1}[0-9]{8}$/;
  if(regex.test(phone.value)){
    document.getElementById("warnning_phone").style.display="none";
    phone.blur();
    
    console.log("true");

  }else{
    document.getElementById("warnning_phone").style.display="block";
    phone.focus();
   
    console.log("false");
  }
 });

 function  check_validate_all__inputs(){
  var temp=0
  if(document.getElementById("warnning_phone").style.display == "none"){
    temp++; 
  }
  if(document.getElementById("warnning_email").style.display == "none"){
    temp++;  
  }

 if(document.getElementById("warnning_name").style.display == "none"){
 
  temp++;
 }
 if(age.value != "" && password.value != ""){
  temp++;
 }
 return temp;

}



function clearInputs(){
  Pname.value='';
  email.value='';
  password.value='';
  age.value='';
  phone.value='';

}
 //////////////////////////////////////////////
  var Register=document.getElementById("Register"); 
  var Login=document.getElementById("Login");
  var Register_btn=document.getElementById("Register_btn");    
  

  Register.addEventListener('click',function(){
     if(check_validate_all__inputs() == 4){
      window.location.href="To_Do_List_page2.html";
      localStorage.setItem("btn_register","move_to_page2");
       Register_function();
      clearInputs()
     }
  });

  Login.addEventListener('click',function(){
    Login.classList.add('changeStyle');
    Register_btn.classList.remove('changeStyle');
    window.location.href="To_Do_List_page2.html";
 });
    
