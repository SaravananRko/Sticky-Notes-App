const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");
var data =  JSON.parse(localStorage.getItem("login"));

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem(data+"stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem(data+"stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });
  move(element);
  return element;

  
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}


function Logout(){

	localStorage.removeItem("login");

  location.href='index.html';
}

function Profile(){

  location.href='Profile.html';
}

function Details(){

  var username=JSON.parse(localStorage.getItem('login'));

	var store1 = JSON.parse(localStorage.getItem(username))["FirstName"];

	document.getElementById("Name").innerHTML += store1;
		
		var store3 = JSON.parse(localStorage.getItem("login"));

	document.getElementById("User_Name").innerHTML += store3;

		var store4 =  JSON.parse(localStorage.getItem(username))["Email"];

	document.getElementById("Email_ID").innerHTML += store4;
}
function ChangePasswordTab(){

    location.href = "ChangePassword.html";
}

var DragValue;

function move(element){

  element.style.position = "absolute";
  element.onmousedown = function(){
    DragValue = element;
  }

}
document.onmouseup = function(e){
  DragValue = null;
}

document.onmousemove = function(e){
  var x = e.pageX;
  var y = e.pageY;

  DragValue.style.left = x + "px";
  DragValue.style.top = y + "px";
}


function ChangePassword_Submit(){

	var username=JSON.parse(localStorage.getItem('login'));

    var oldpass =JSON.parse(localStorage.getItem(username))["Password"];

    var oldpassword = document.getElementById("OldPassword").value;

	var newpassword1 = document.getElementById("NewPassword").value;

	var newpassword2 = document.getElementById("ConfirmPassword").value;


  var Mail=JSON.parse(localStorage.getItem('login'));

  console.log(Mail);
  
  var jsonObject=JSON.parse(localStorage.getItem(Mail));
 
   
  var Name=JSON.parse(localStorage.getItem(Mail))["FirstName"];
  
  var Email=JSON.parse(localStorage.getItem(Mail))["Email"];

  
  var Username=JSON.parse(localStorage.getItem(Mail))["username"];

  
  
 



    if(oldpass == oldpassword){

      if(newpassword1 == newpassword2)
	  	{
			

      var pattern = /\w\W\d/g; 
      var result = pattern.test(newpassword1);
      if(result){


        if(newpassword1===newpassword2){

     var newJson={
                   "FirstName":Name,
                   "username":Username,
                   "Email":Email,
                   "Password":newpassword1 
                  };

localStorage.setItem(Mail, JSON.stringify(newJson));

			

			alert("password change successfully");
		}
		else{
			alert("New Password does not Match");
		}
    }
    else{
        alert("Invalid Old Password");
    }
  }else{
      alert("Invalid Old Password");
    }
    
  } 

}
