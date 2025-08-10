var input_title = document.getElementById("Title");
var input_note = document.getElementById("note");
var notes_book;
var idexOfUpdate=0;


window.addEventListener('load',()=>{
  if(localStorage.getItem("btn_login") != null ){
    document.getElementById("toggle_message").style.display="block";
    localStorage.removeItem("btn_login");
  setTimeout(()=>{
    document.getElementById("toggle_message").style.display="none";

  },1500);
  }
  console.log("hhhhhhhhhhhhhhhhhhhhhh");
});




if (localStorage.getItem("notes_b") == null) {
  notes_book = [];
} else {
  notes_book = JSON.parse(localStorage.getItem("notes_b"));
  displayNote(notes_book);
}




function addNote() {///    btn_info_note..add_note_btn add N  btn_add_note


  if(document.getElementById("add_note_btn").innerHTML == "Add Note"){
    var con_note = {
      title_note: input_title.value,
      desc_note: input_note.value
    };
    notes_book.push(con_note);

  } else{
    notes_book[idexOfUpdate].title_note=input_title.value;
    notes_book[idexOfUpdate].desc_note= input_note.value;
   
    document.getElementById("add_note_btn").innerHTML="Add Note";
  }
  
  displayNote(notes_book);
  localStorage.setItem("notes_b", JSON.stringify(notes_book));
  clear_input();
  document.getElementById('write_note').style.display = 'none';

}

function displayNote(new_array) {
  if (new_array.length == 0) {
    document.querySelector('.empty_body').style.display = 'flex';
  } else {
    document.querySelector('.empty_body').style.display = 'none';
  }
 
  var cartona= ``;

  for(var i=0;i<new_array.length;i++){
    
    cartona += `
   <div class="box">
      <h2>${new_array[i].title_note}</h2>
    <p>${new_array[i].desc_note}</p>          
    <button class="option-btn" onclick="show_info(this)">...</button>
      <div class="info_note">
        <p onclick="updateNote(${i})">Update</p>
        <p onclick="deleteNote(${i})">Delete</p>
      </div>
    </div>
  `;
   
  }
  document.getElementById("container_of_notes").innerHTML=cartona;

}

document.getElementById("add_note_btn").addEventListener('click', function () {


  document.getElementById("write_note").style.display = "none";
  addNote();
});


document.getElementById("btn_add_note").addEventListener('click', function () {
  var temp=document.getElementById("write_note");

  temp.style.display=(temp.style.display == "flex")? "none":"flex";
  document.body.classList.toggle("backChange");
  document.getElementById("setting").classList.toggle("hidediplay")

});



var term = document.getElementById("search");

term.addEventListener('keyup', function () {
  var new_container = [];
  for (var i = 0; i < notes_book.length; i++) {
    if (notes_book[i].title_note.toLowerCase().includes(term.value.toLowerCase())) {
      new_container.push(notes_book[i]);
    }
  }
  displayNote(new_container);
});


function updateNote(i){
    
  document.getElementById("write_note").style.display = "flex";
  input_title.value=notes_book[i].title_note;
  input_note.value=notes_book[i].desc_note;  
  document.getElementById("add_note_btn").innerHTML="Update Note";
  idexOfUpdate=i; 
 }
 function deleteNote(x){
  notes_book.splice(x,1);
  localStorage.setItem("notes_b",JSON.stringify(notes_book));
  displayNote(notes_book);
  clear_input();

}

function clear_input(){
  input_title.value="";
  input_note.value="";
}
var logOut = document.getElementById("logOut");
logOut.addEventListener('click', function () {
  localStorage.removeItem("person");
  localStorage.removeItem("notes_b");
  displayNote(notes_book);

});
function show_info(button){

  const menu = button.nextElementSibling;
  menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';
}
 