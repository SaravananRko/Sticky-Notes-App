function Autologin() {
  
	var mail = JSON.parse(localStorage.getItem("login"));
	console.log(mail);
	
	if (JSON.parse(localStorage.getItem(mail)) != null) {
	
	
	 window.location.href = "Sticky.html";
	
	  }else{
		console.log("helo");
	  }
	
}
	

function personaldetails(){

	/*var store7 = getElementsByClassName(one3);*/

	/*store7.style.display = 'block';*/

	document.getElementById("button2").disabled = true;
	

	let ei = document.querySelector(".text");

	ei.style.visibility = "visible";

	var username=JSON.parse(localStorage.getItem('login'));

	var store1 = JSON.parse(localStorage.getItem(username))["FirstName"];

	document.getElementById("per1").innerHTML += store1;
		
	// 	var store2 = localStorage.getItem("Last Name");

	// document.getElementById("per2").innerHTML += store2;
		
		var store3 = JSON.parse(localStorage.getItem("login"));

	document.getElementById("per3").innerHTML += store3;

		var store4 =  JSON.parse(localStorage.getItem(username))["Email"];

	document.getElementById("per4").innerHTML += store4;

		

	/*	var store6 = localStorage.getItem("Password");*/

	/*document.getElementById("per6").innerHTML += store6;*/

	

}


function passworddiv(){

	
	let e = document.querySelector(".change"); 

	e.style.visibility = "visible";

	
}


function data(){

	/*var store8 = document.getElementById("per1").value;*/

	 var store = JSON.parse(localStorage.getItem("login"));

	 var store1 = JSON.parse(localStorage.getItem(store))["FirstName"];

	 document.getElementById("one1").innerHTML += store;	

	//document.getElementById("store8").style.display = 'hidden';



	 let e2 = document.querySelector(".text");

	let e1 = document.querySelector(".change");

  	e2.style.visibility = "hidden";
	
    e1.style.visibility = "hidden";

    //document.getElementById("#chgepwd").style.visibility = "hidden";


	/*store8.style.display = 'none';*/

/*  document.getElementsById('store8').style.visibility = 'hidden';
*/
}


function label(){

	var store = document.getElementById('usename').value;
    
    var pass = document.getElementById('Pass').value;

    

		if(JSON.parse(localStorage.getItem(store)) != null){
			
		if(pass === JSON.parse(localStorage.getItem(store))["Password"]){

			console.log("testok");

		
			localStorage.setItem("login", JSON.stringify(store));

			document.write("");

			location.href = "Sticky.html";
			
			
		}else{
			alert("Invalid Password");

		}
		
	}else{
		alert("Invalid Users Name");
	}
}


	
	// //var store1 = document.box.usename.value;

	// //var pass1 = document.box.Pass.value;

	// //var store = store1;

	// //var pass = pass1;

    // var store = document.getElementById("usename").value;
    
    // var pass = document.getElementById("Pass").value;

    // //var store = store1;

    // //var pass = pass1;
    
    // document.write(store+""+pass);

	// var x = localStorage.getItem("User Name");

	// var y = localStorage.getItem("Password");

	
	// //

	// var length =  JSON.parse(localStorage.getItem("users"));

	// var length1= length.length;

	// for(let i =0;i <= length1  ;i++){

	// user_records = JSON.parse(localStorage.getItem("users"))[i];

	// }
	// if ( x == store && y == pass) {

	// 	location.href="root2.html";
	// }
	// else {
	
	// 	//user_records = JSON.parse(localStorage.getItem("users"))[0];

	//   // let formData = JSON.parse(localStorage.getItem('users')) || [];
		
	// 	// console.log(user_records.first_name);


		

		

	// console.log(length.length);

		
	// }

function loginuser(){

	Document.location.href="root2.html";	
}


function passwordchange(){

	var username=JSON.parse(localStorage.getItem('login'));

    var oldpass =JSON.parse(localStorage.getItem(username))["Password"];

    var oldpassword = document.getElementById("oldpass").value;

	var newpassword1 = document.getElementById("newpass").value;

	var newpassword2 = document.getElementById("newpass1").value;

	console.log(oldpass);

    if(oldpass == oldpassword){

        if(newpassword1 == newpassword2)
		{
			var testok = JSON.parse(localStorage.getIteme(username))["Password"];
			
			JSON.parse(localStorage.removeItem(testok));

			console.log(testok);

			 var user = JSON.parse(localStorage.getItem(username));

			var json = { 
				
				"Password" : newpassword1 
				
			};

			localStorage.setItem(user, JSON.stringify(json));

			alert("password change successfully");
		}
		else{
			alert("New Password does not Match");
		}
    }
    else{
        alert("Invalid Old Password");
    }
    
}


function register(){

	

 	var pwd = document.getElementById("Pwd").value;

	var usename = document.getElementById("username").value;

	var firstname = document.getElementById("Uname").value;

	console.log(pwd);
	var pattern1 = /\w\W\d/g; 
	var result1 = pattern1.test(pwd);

  //mail id validation

	var mail = document.getElementById('Email').value;
	var pattern2=  /\S+@\S+\.\S+/; 
	var result2 = mail.match(pattern2);

	console.log(mail);

	//variable declare for retype password
  
  if(result1 && result2){

  //local storage checking if already mail exists or not

  console.log("test1");
  
  if (JSON.parse(localStorage.getItem(usename)) != null) {
  
	console.log("test2");
	  
	  alert(" This Email address  already exists");
  
  } else {
  
	  console.log(`Email address not found`); 
  
  
  
  
  
  
  var json={ 
			"FirstName":firstname,
	  		"username":usename,
			"Email":mail,

  			"Password":pwd 
			
		};
  
   localStorage.setItem(usename, JSON.stringify(json));

	 
  
   window.location.href = "root.html";
   
  }

  }
  else{
  
	console.log("password not matched");
	alert("password not matched");
	 
  }

}


function check(){

	if(document.getElementById("Pwd").value == document.getElementById("ConPwd").value)
	{
		document.getElementById("ConPwd").style.color = "#008000";

		document.getElementById("Pwd").style.color = "#008000";

	}
	else{
		document.getElementById("ConPwd").style.color = "#FF0000";

		document.getElementById("Pwd").style.color = "#FF0000";
	}

}
 

function Logout(){

	localStorage.removeItem("login");
}

  	// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 	// var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  	// if (email.match(validRegex) && pwd.match(regularExpression)) {

	// /*var firstname = document.box1.fname.value;*/

	// if(JSON.parse(localStorage.getItem(usename)) != null)
	// {
	// 	alert("Duplicate Values");
	// }
	// else{
	// 	var user_records = { 

	// 		"User_Name":usename,
	// 		"Email":email,
	// 		"Password":pwd
						
	// 	};
	// 	localStorage.setItem(usename,JSON.stringify(user_records));

	// 	window.location.href = "root.html";
	// }
	// }
	// else {

	// 	alert("Invalid email address!");
		
	//   }
	

	//var lastname = localStorage.getItem("key");

	//localStorage.setItem("First Name",firname); 

	//localStorage.setItem("Last Name",lasname);

	//localStorage.setItem("User Name",usename);

	//sessionStorage.setItem("User Name",usename);

	//localStorage.setItem("DOB",dob);

	//localStorage.setItem("Email ID",email);

	//localStorage.setItem("Password",pwd);

	  

   
	

	/*	var address = 'C:\Users\P3 Tech-08\Downloads\main.html';*/


/*	window.location=(address);*/

/*function alert(){

	

	//window.location='E:\jpro\html\19-11-2021\main.html';

	/*redirect();
}
/*function redirect(){

	location.href("main.html");

}
*/



// const notesContainer = document.getElementById("app");

// const addNoteButton = notesContainer.querySelector(".add-note");

// var data =  localStorage.getItem("login");



// getNotes().forEach((note) => {
//   const noteElement = createNoteElement(note.id, note.content);
//   notesContainer.insertBefore(noteElement, addNoteButton);
// });

// addNoteButton.addEventListener("click", () => addNote());

// function getNotes() {
	
//   return JSON.parse(localStorage.getItem(data+"Notes") || "[]");

// }

// function saveNotes(notes) {
 
//   localStorage.setItem("Notes", JSON.stringify(notes));
// }

// function createNoteElement(id, content) {

//   const element = document.createElement("textarea");

//   element.classList.add("note");
//   element.value = content;
//   element.placeholder = "Empty Sticky Note";

//   element.addEventListener("change", () => {
//     updateNote(id, element.value);
//   });

//   element.addEventListener("dblclick", () => {
//     const doDelete = confirm(
//       "Are you sure you wish to delete this sticky note?"
//     );

//     if (doDelete) {
//       deleteNote(id, element);
//     }
//   });

//   return element;
// }

// function addNote() {
//   const notes = getNotes();
//   const noteObject = {
//     id: Math.floor(Math.random() * 100000),
//     content: ""
//   };

//   const noteElement = createNoteElement(noteObject.id, noteObject.content);
//   notesContainer.insertBefore(noteElement, addNoteButton);

//   notes.push(noteObject);
//   saveNotes(notes);
// }

// function updateNote(id, newContent) {
//   const notes = getNotes();
//   const targetNote = notes.filter((note) => note.id == id)[0];

//   targetNote.content = newContent;
//   saveNotes(notes);
// }

// function deleteNote(id, element) {
//   const notes = getNotes().filter((note) => note.id != id);

//   saveNotes(notes);
//   notesContainer.removeChild(element);
// }


