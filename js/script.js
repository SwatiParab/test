$(document).ready(function(){
	function WriteCookie()
  {
     if( document.myform.customer.value == "" ){
        alert("Enter some value!");
        return;
     }
     cookievalue= escape(document.myform.customer.value) + ";";
     document.cookie="name=" + cookievalue;
     document.write ("Setting Cookies : " + "name=" + cookievalue );
  }

	// readcookie
	function ReadCookie(){
     var allcookies = document.cookie;
     document.write ("All Cookies : " + allcookies );
     
     // Get all the cookies pairs in an array
     cookiearray = allcookies.split(';');
     
     // Now take key value pair out of this array
     for(var i=0; i<cookiearray.length; i++){
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        document.write ("Key is : " + name + " and Value is : " + value);
     }
  }  

	function WriteCookie() {
     var now = new Date();
     now.setMonth( now.getMonth() + 1 );
     cookievalue = escape(document.myform.customer.value) + ";"
     
     document.cookie="name=" + cookievalue;
     document.cookie = "expires=" + now.toUTCString() + ";"
     document.write ("Setting Cookies : " + "name=" + cookievalue );
  }
  //todo app
  // add and store data
  $('#addlist').click(function(){
  	var text = document.getElementById('textlist').value;
  	var textInput = '';
  	var li   = document.createElement("li");
  	for (var i = 0; i < li.length; i++) { 
	     textInput += li[i].value;
	  }
  	var node = document.createTextNode(text);
	  li.appendChild(node);
	  document.getElementById("list").appendChild(li);
	  $('#textlist').val('');
	  var span 					= document.createElement("span");
	  var div 					= document.createElement("div");
	  var divTag 				= document.createElement("span");

	  var txt 					= document.createTextNode("\u00D7");
	  var edit 					= document.createTextNode("\u270E");
	  var save 					= document.createTextNode("\u2713");

	  var inputTag 			= document.createTextNode("<input type='text'>");
	  span.className 		= "close";
	  div.className 		= "edit";
	  divTag.className 	= "save";

	  span.appendChild(txt);
	  div.appendChild(edit);
	  divTag.appendChild(save);

	  li.appendChild(span);
	  li.appendChild(div);
	  li.appendChild(divTag);
		
		$('span.save').hide();
		$('span.close').click(function(){
	  	$(this).parent().remove();
	  });
	  $('div.edit').click(function(){
	  	$(this).parent().attr('contenteditable','true');
	  	$('span.close').hide();
	  	$('span.save').show();
	  	$(this).hide();
	  	$('span.save').click(function(){
	  		$(this).parent().attr('contenteditable','false');
	  		$(this).hide();
	  		$('span.close').show().css("top", "10px");
	  	});
	  });
  })

  //add fuction
  




 //  var myarr = [];
 
	// function addTo() {
	//    myarr.push(document.getElementById("addlist").value);
	//    console.log(myarr); //to confirm it has been added to the array
	// }
	// 	var yourArray = [];
	// 	var inputText = document.getElementById('textlist').value;
	// 	yourArray.push(inputText);

	// // show it

	// for(var i=0; i<yourArray.length; i++) {
	//     // alert(yourArray[i]);
	//     console.log('inputText', inputText);
	// }
})  

var inputData  = [];

var titleInput  = document.getElementById("textlist");

function insert ( ) {
 inputData.push( titleInput.value );  
 clearAndShow();
}

function clearAndShow () {
  inputData.value = "";  
  console.log('inputData');
}



var titles  = [];
var names   = [];
var tickets = [];

var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("name");
var ticketInput = document.getElementById("tickets");

var messageBox  = document.getElementById("display");

function insert ( ) {
 titles.push( titleInput.value );
 names.push( nameInput.value );
 tickets.push( ticketInput.value );
  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  titleInput.value = "";
  nameInput.value = "";
  ticketInput.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
  
  messageBox.innerHTML += "Titles: " + titles.join(", ") + "<br/>";
  messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
  messageBox.innerHTML += "Tickets: " + tickets.join(", ");
}
localStorage.setItem("titles", "Smith");
document.getElementById("textlist").innerHTML = localStorage.getItem("lastname");

	
