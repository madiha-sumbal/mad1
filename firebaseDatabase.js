// firebaseDatabase.js
import { database } from './firebaseConfig';  // Import the database instance from firebaseConfig
import { ref, set, get } from 'firebase/database';

// Function to write data to the database
const writeData = (path, data) => {
  const reference = ref(database, path);
  set(reference, data)
    .then(() => {
      console.log('Data written successfully!');
    })
    .catch((error) => {
      console.error('Error writing data:', error);
    });
};

// Function to read data from the database
const readData = (path) => {
  const reference = ref(database, path);
  get(reference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log('Data:', snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error('Error reading data:', error);
    });
};

export { writeData, readData };  // Export functions for use in components
