 // Initialize Firebase
var config = {
	apiKey: "AIzaSyC2jMKydlt6G2C6CFdV6O-RzZGTv9AkhEI",
	authDomain: "traindb-3f4f7.firebaseapp.com",
	databaseURL: "https://traindb-3f4f7.firebaseio.com",
	storageBucket: "traindb-3f4f7.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

//add on click listener
$('#trainSubmit').on('click', function(e){
	//prevent page restart
	e.preventDefault();

    //variable to hold user input
    var trainName = $('#trainName').val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    //create a new object train
    var newTrain = {
        name: trainName,
        dest: destination,
        first: firstTrain,
        freq: frequency,
    }

    //push new train to firebase
    database.ref().push(newTrain);

	return false;
});