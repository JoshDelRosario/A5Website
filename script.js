// Function to select elements
// Code taken from https://www.youtube.com/watch?v=j_Xa7Kn59Es&t=123s
const selectElement = (s) => document.querySelector(s);

// Open the menu when clicked
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

// Close the menu when clicked
selectElement('.close').addEventListener('click', () =>{
  selectElement('.nav-list').classList.remove('active');
});