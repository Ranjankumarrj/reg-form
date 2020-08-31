function previouspagereg() {
	document.location.href="registration.html";
}

function previouspagecmpy() {
	document.location.href="company.html";
}

function thqfn() {
	alert("Thank you for applying Squash Apps Private Limited")
}

// ----------------------location redirection-------------------------------------


function regformValidation() {
	var username = document.getElementById("uname"); 
	// var gender = document.getElementById("male");
	// alert(gender);
	// // var female = document.getElementById("female");
	// // var other = document.getElementById("other");
	var countryname = document.getElementById("country");
	var statename = document.getElementById("state");
	var phonenumber = document.getElementById("number");

	if (username.value == "") {
		// window.alert("Please enter your name."); 
        username.focus(); 
        username.style.border="solid 1px red";
		return false;
	}

	// if (male.value.checked == "") {
	// 	male.focus(); 
	// 	// female.focus();
	// 	// other.focus();
 //        male.style.border="solid 1px red";
 //        // female.style.border="solid 1px red";
 //        // other.style.border="solid 1px red";
	// 	return false;
	// }

	if (countryname.selectedIndex < 1) {
		countryname.focus();
		countryname.style.border="solid 1px red";
		return false;
	}

	if (statename.selectedIndex < 1) {
		statename.focus();
		statename.style.border="solid 1px red";
		return false;
	}

	if (phonenumber.value =="" || isNaN(phonenumber.value) || phonenumber.value.length > 10 || phonenumber.value.length < 10) {
		phonenumber.focus();
		phonenumber.style.border="solid 1px red";
		return false;
	}

	return true;
}

 var cansubmit = false;

function cmpyformValidation() {

	var companyname = document.getElementById("companyname");
	var email = document.getElementById("email");
	var jobtitle = document.getElementById("jobtitle");
	var yearofexp = document.getElementById("yearofexp");


	if (companyname.value == "") {
		companyname.focus(); 
        companyname.style.border="solid 1px red";
		return false;
	}

	if (email.value == "") {
		email.focus(); 
        email.style.border="solid 1px red";
		return false;
	}

	if (jobtitle.value == "") {
		jobtitle.focus(); 
        jobtitle.style.border="solid 1px red";
		return false;
	}

	if (yearofexp.value == "" || isNaN(yearofexp.value)) {
		yearofexp.focus(); 
        yearofexp.style.border="solid 1px red";

		return false;
	}

	this.cansubmit= true;

	if (cansubmit == true) {
            document.getElementById('submitbutton').enable;
        }
}

function localstoragereg() {

	var fullname = document.getElementById("uname").value;
	// var gender = document.getElementById("gender").value;
	// var genderf = document.getElementById("female").value;
	// var gendero = document.getElementById("other").value;
	var country = document.getElementById("country").value;
	var state = document.getElementById("state").value;
	var number = document.getElementById("number").value;


	if (document.getElementById('male').checked) {
		rate_value = document.getElementById('male').value;
	} else if (document.getElementById('female').checked) {
		rate_value = document.getElementById('female').value;
	}else if (document.getElementById('other').checked) {
		rate_value = document.getElementById('other').value;
	}
	// var details = {
	// 	uname : document.getElementById("uname").value,
	// 	// country : country,
	// 	// state : state,
	// 	// number : number,
	// };

	// alert(uname);

	// let a ;
	// 		a = JSON.parse(localStorage.getItem('personaldetails')) || [];

	// 		a.push(details);
	// 		console.log(details);
	// 			localStorage.setItem('personaldetails', JSON.stringify(details));

	localStorage.setItem("Fullname",fullname);
	localStorage.setItem("Gender",rate_value);
	localStorage.setItem("Country",country);
	localStorage.setItem("State",state);
	localStorage.setItem("Number",number);
}

function localstoragecmpy() {

	var companyname = document.getElementById("companyname").value;
	var emailid = document.getElementById("email").value;
	var jobtitle = document.getElementById("jobtitle").value;
	var yearofexp = document.getElementById("yearofexp").value;

	localStorage.setItem("cmpyname", companyname);
	localStorage.setItem("emailId", emailid);
	localStorage.setItem("Jobtitle", jobtitle);
	localStorage.setItem("Yearofexp", yearofexp);
	return false;
}


function emailformValidation() {
	document.getElementById("emailidvalue").innerHTML=localStorage.getItem("emailId");
	document.getElementById("emailidvalue1").innerHTML=localStorage.getItem("emailId");
	console.log(localStorage.getItem("emailId"));

}

// (function() {
//     $('form > input').keyup(function() {

//         var empty = false;
//         $('form > input').each(function() {
//             if ($(this).val() == '') {
//                 empty = true;
//             }
//         });

//         if (empty) {
//             $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//         } else {
//             $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//         }
//     });
// })()



























      // function validateEmail() {
      //    var emailID = document.myForm.EMail.value;
      //    atpos = emailID.indexOf("@");
      //    dotpos = emailID.lastIndexOf(".");
         
      //    if (atpos < 1 || ( dotpos - atpos < 2 )) {
      //       alert("Please enter correct email ID")
      //       document.myForm.EMail.focus() ;
      //       return false;
      //    }
      //    return( true );
      // }
