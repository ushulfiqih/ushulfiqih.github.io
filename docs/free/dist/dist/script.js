$(function(){
  //make a variable to keep track of data coming from firebase
  var data= [];
  
  //create new connection to firebase
	var ref= new Firebase('https://data-application1.firebaseio.com/activities');
  

  //listen to data updates from firebase
	ref.on("value", function (snapshot){
    console.log(snapshot.val());
   //when the data updates at firebase, put it in the data variable
    data= snapshot.val();
  })
//Entire Form (handler)
$('#newActivity').submit(function(event) {
  
  var $form = $(this);
  console.log("Submit to Firebase");
  
  //disable submit button
  $form.find("#saveForm").prop('disabled', true);
  
  //get values to send to Firebase
  var titleToSend = $('#activityTitle').val();
  console.log(titleToSend);
  
  var descriptionToSend = $('#activityDescription').val();
  console.log(descriptionToSend);
  
  var categoryToSend= $('#activityCategory').val();
  console.log(categoryToSend);
  
  //take the values from the form, and put them in an object
  var newActivity= {
    "description": descriptionToSend,
    "title": titleToSend,
    "type": categoryToSend
  }
  //put new object in data array
  data.push(newActivity);
  console.log(data);
  
    //send the new data to Firebase
		ref.set(data, function(err){
      if(err){
        alert("Data no go");
      }
    });

    return false;
  })
  ///Make a login form submission handler
  $('#login').submit(function(event){
    var $form = $(this);
    $form.find('#registerForm').prop('disabled', true);
    
    //get the value of the login email
		var login = $("#loginInput").val();
    //get the value of the password
    var password = $("#passwordInput").val();
     
    console.log(login, password);
    register(login, password);
    
    return false;
  })

  ////Detect the authication state
  var reg = new Firebase("https://data-application1.firebaseio.com");
  reg.onAuth(function(authData){
    console.log("info on authentication");
    if(authData){
      //you are logged in
      
    }else{
      //you are not logged in
      
    }
  })
  //////Let a user Register in Firebase
  //////with password/email
  function register(email, password){
    reg.createUser({
      email: email,
      password: password
    }, function(error, userData){
      if(error){
        alert("You did not register");
      }else{
        alert("You registered"+userData.uid);
      }
    })
  }
})