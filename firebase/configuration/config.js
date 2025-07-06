import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4GvdAWhMxZ2It7KNUxas_WtcTi5vurnw",
  authDomain: "mobilepaluwagan.firebaseapp.com",
  databaseURL: "https://mobilepaluwagan-default-rtdb.firebaseio.com",
  projectId: "mobilepaluwagan",
  storageBucket: "mobilepaluwagan.firebasestorage.app",
  messagingSenderId: "130536525058",
  appId: "1:130536525058:web:af26a65f9807830ed6c61b"
};

// Initialize Firebase App and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth to use in other files
export { auth };
