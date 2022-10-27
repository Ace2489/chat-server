
<h1 align="center">
  Django To-do App
</h1>

<h4 align="center">A chat server built using the Socket.io framework in Node.js</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation-and-setup">Installation and Setup</a> •
</p>

## Key Features

* Realtime communication between clients.
* Up to 5 simultaeneous clients.

  <a href="https://chat-server-l23v.onrender.com/">Live Demo</a> •
Note: The site might need a few refreshes on the first try. This is because the server automatically goes to sleep after a certain period of time without connections. 


## Installation and Setup
You need to have [Node.js](https://nodejs.org/en/) installed on your machine to get the site running.

```bash
# Clone this repository into 
$ git clone https://github.com/Ace2489/chat-server.git 

# Go into the repository
$ cd chat-server

#Activate the environment(Linux and Mac)
$ source env/bin/activate

#Activate the environment(Windows)
$ env/scripts/activatesource env/bin/activate

#Install the requirements
$ pip install -r requirements.txt

#Run the migrations
$ python3 manage.py migrate

#Run the server
$ python3 manage.py runserver
```
That's it! All you have to do is open up your browser and go to "localhost:8000" to see the website ☻




