# Alchemy Code Lab, JavaScript and the Internet of Things, Spring 2018



### Our tools:
* NodeMCU module
* ThingsSDK-cli
* Flasher.js
* the Espruino runtime
* JavaScript and electronics
* Node.js and npm
* our awesome brains & each other


## Basic tool setup

#### NodeMCU module

This is a microcontroller that is quite versatile.  It contains a wifi radio and 4MB of RAM, and can be used with a variety of different languages.  They come with a scripting languaged called Lua on the, but can be used in an Arduino environment, or flashed with Python or JavaScript interpreters.  Today, we'll be using a JavaScript runtime called Espruino with a tool called ThingsSDK-cli

#### ThingsSDK-cli

This was written by [Andrew Chalkley]() and [Craig Dennis](), with a fair bit of community contribution along the way.

#### flasher.js

Go to [Flasher.js download site](https://github.com/thingsSDK/flasher.js/releases), download and install the app for your operating system.

If you're on MacOSX or Linux, you will need to run this command as well:
```
sudo usermod -a -G dialout $USER
```


#### ThingsSDK-cli

From your terminal, run this command:
``` 
npm i thingssdk-cli -g
```

If you have Node v10, there may be some issues.  See Andrew during break for assistance

#### NodeMCU module

