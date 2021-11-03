After cloning:
1. create a .env.local in the CLIENT directory and add REACT_APP_PUBLIC_KEY, REACT_APP_EMAILJS, REACT_APP_FIREBASE_API, REACT_APP_AXIOS_BASEURL and add in your own details
2. create a .env file which contains REACT_APP_STRIPE_KEY={your_secret_key_of_stripe}
3. depending on your country change currency to that of your own country in stripe-checkout-button page as well as server.js.
4. copy paste your own firebase config into var config = {} in firebase.utils
6. on localhost, run the app using "npm run dev" to start off both server.js and the frontend



For deployment to heroku:
1. after deploying remember to add env variables to heroku

