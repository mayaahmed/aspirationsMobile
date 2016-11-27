
 var contactNav = document.getElementById("navId2");
 var btn2 = document.getElementById("toggleButton2");
btn2.innerHTML = "&#8592";

contactNav.style.right = "-255px";

function toggleRight(){
	contactNav.style.height = window.innerHeight - 60+"px";
	if(contactNav.style.right == "-255px"){
		contactNav.style.right = "0px";
        btn2.innerHTML = "&#8594";
	} else {
		contactNav.style.right = "-255px";
        btn2.innerHTML = "&#8592";
	}
}

 var contactDiv = document.getElementById("contacts");

function address(){
  var descriptString = " The  book Aspirations  is composed of two  short novels:  'A Journey to Remember' and 'A Roof under the Indian Sky'.  The first  story is about a Malayali   Christian teenage girl who lives in cosmopolitan Mumbai.   The  second story  is about a  young woman  torn between India  and America while  pursuing a  PhD.";

var addString= " <br/> <br/> &copy; Punjiri Web and Mobile Technologies, 2016.  <br/> Mangalore, Karnataka, India  <br/>  Email: maya.ahmed@gmail.com <br/>";

var newString = descriptString + addString;
contactDiv.innerHTML= newString;
}

address();

