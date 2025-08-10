    var logIn_to_docket=document.getElementById("logIn_to_docket"); 
    var Login=document.getElementById("Login");
    var Register_btn=document.getElementById("Register_btn");    

    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var container;

    window.addEventListener('load',()=>{
      if(localStorage.getItem("btn_register") != null ){
        document.getElementById("toggle_message").style.display="block";
        localStorage.removeItem("btn_register");
      setTimeout(()=>{
        document.getElementById("toggle_message").style.display="none";

      },1500);
      }
    });

    if(localStorage.getItem("person") == null){
     container=[];
    }else{
     container=JSON.parse(localStorage.getItem("person"));
    }
    function clearInputs(){ 
      email.value='';
      password.value=''; 
    }



    function searchData_to_login(){
      for(var i=0 ;i < container.length;i++){
        if(container[i].Email_per == email.value && container[i].Password_per == password.value){
            return 1;
        }
      }
      return 0;
    }
    
    logIn_to_docket.addEventListener('click',function(e){
      if(searchData_to_login()){
      window.location.href="To_Do_List_page3.html";
      localStorage.setItem("btn_login","move_to_page3");
     
      document.getElementById("warnning_inf").style.display="none";

      clearInputs();
      }else{
      document.getElementById("warnning_inf").style.display="block";
      }
   });
   Register_btn.addEventListener('click',function(e){
 
    window.location.href="To_Do_List.html";

 });

 
  //animation part 

   gsap.to(".logo",{display:"block",right:"0%",duration:2}); 
   gsap.to(".form_of_logIn",{display:"flex",left:"0%",duration:2});

   gsap.to(".logIn",{boxShadow:"-1px 2px 25px  rgba(0, 0, 0, 0.856)",delay:2}); 
