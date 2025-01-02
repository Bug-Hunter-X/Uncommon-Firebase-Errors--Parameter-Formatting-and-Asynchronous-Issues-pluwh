function handleData(dataSnapshot) {
  //This is an example that handles the asynchronous nature
  if (dataSnapshot.exists()) {
    console.log(dataSnapshot.val());
  } else {
    console.log('No data available');
  }
}

function addData(data) {
  // Check if the data is in the correct format.
  if (typeof data !== 'object' || data === null) {
    console.error('Invalid data format. Data must be a non-null object.');
    return;
  }
  //Correct way of adding data
  db.ref('/data').push(data).then(() => {
    console.log('Data added successfully');
  }).catch(error => {
    console.error('Error adding data:', error);
  });
}
//Example of incorrect data
let incorrectData = 'not an object';
addData(incorrectData);

//Example of correct data
let correctData = {
  name: "John Doe",
  age: 30
};
addData(correctData);

//Get data asynchronously
db.ref('/data').once('value', handleData).catch(error => console.error(error));