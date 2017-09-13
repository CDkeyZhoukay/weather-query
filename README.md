# weather-query
Weather query 1.0 for Paytm software challege 

![weather-query](./readme.img/Login.jpg?raw=true)

###A basic system for weather query with login function built in Node.js, following features included:

* New User Account Creation
* Secure Password Reset via Email
* Ability to Update / Delete Account
* Session Tracking for Logged-In Users
* Blowfish-based Scheme Password Encryption
* Openweather API for world city temperature enquiry


###Node-Login is built on top of the following libraries :

* [Node.js](http://nodejs.org/) - Application Server
* [Express.js](http://expressjs.com/) - Node.js Web Framework
* [MongoDb](http://mongodb.org/) - Database Storage
* [Jade](http://jade-lang.com/) - HTML Templating Engine
* [Stylus](http://stylus-lang.com/) - CSS Preprocessor
* [EmailJS](http://github.com/eleith/emailjs) - Node.js > SMTP Server Middleware
* [Moment.js](http://momentjs.com/) - Lightweight Date Library
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - UI Component & Layout Library


##Installation & Setup
1. Install [Node.js](https://nodejs.org/) & [MongoDB](https://www.mongodb.org/) if you don't have yet.
2. Clone this repository and install its dependencies.
		
		> git clone git://github.com/braitsch/node-login.git
		> cd weather-query
		> npm install
		
3. In a separate command window start the MongoDB daemon.

		> mongod

4. From within the weather-query directory, start the server.

		> node app.js
		
5. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000)

##Password Retrieval

To enable the password retrieval feature it is recommended that you create environment variables for your credentials instead of hard coding them into the [email dispatcher module](https://github.com/CDkeyZhoukay/weather-query.git/weather-query/app/server/modules/email-dispatcher.js).

	export EMAIL_HOST='smtp.gmail.com'
	export EMAIL_USER='your.email@gmail.com'
	export EMAIL_PASS='1234'

![weather-query](./readme.img/Retrieve Password.jpg?raw=true)
