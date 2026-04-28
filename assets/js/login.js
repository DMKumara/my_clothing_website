// DOM Elements required for toggling between Sign In and Sign Up panels
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// DOM Elements for handling the login submission
const signInBtnSubmit = document.getElementById('signInBtnSubmit');
const emailInput = document.getElementById('email');

// Event listener to slide the overlay and show the Sign Up panel
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Event listener to slide the overlay back and show the Sign In panel
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Handle the sign-in process
signInBtnSubmit.addEventListener('click', () => {
    const email = emailInput.value;
    
    // Note: This is a placeholder mock login for demonstration purposes.
    // In a real-world scenario, you would validate credentials against a backend server here.
    
    // Redirect the user to the home page upon clicking sign in
    window.location.href = 'index.html';
});
