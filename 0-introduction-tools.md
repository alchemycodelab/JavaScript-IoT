# Alchemy Code Lab, JavaScript and the Internet of Things, Spring 2018

## Internet of Things?

In a very simplistic definition, we attach internet connectivity to small devices.  This lets them receive commands and report information.  

Would you like a notification when your dryer is done?  How about a text message when there's water in the basement?  Or how about building your own monitoring service for your house alarm?


## Our tools:
* NodeMCU module
* ThingsSDK-cli
* Flasher.js
* the Espruino runtime
* JavaScript and electronics
* Node.js and npm
* our awesome brains & each other


# Basic tool setup

## NodeMCU module

This is a microcontroller that is quite versatile.  It contains a wifi radio and 4MB of RAM, and can be used with a variety of different languages.  They come with a scripting languaged called Lua on the, but can be used in an Arduino environment, or flashed with Python or JavaScript interpreters.  Today, we'll be using a JavaScript runtime called Espruino with a tool called ThingsSDK-cli

## ThingsSDK

[ThingsSDK](http://thingssdk.com/) was written by [Andrew Chalkley](https://github.com/chalkers) and [Craig Dennis](https://github.com/craigsdennis), with a fair bit of community contribution along the way.  Its purpose is to allow developers to write JavaScript in their own dev environments and use standard tools to update devices.  Standard npm tools are used to push code.

## flasher.js

Go to the [Flasher.js download site](https://github.com/thingsSDK/flasher.js/releases), download and install the app for your operating system.
Serial driver is [here.](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

If you're on MacOSX or Linux, you will need to run this command as well:
```
sudo usermod -a -G dialout $USER
```
and reboot when this is completed.  This allows the user to have programmatic access to the USB devices.

## Espruino / JavaScript

There are some notable differences in using Espruino vs. node/browser JavaScript.  The [FAQ](https://www.espruino.com/FAQ) covers that topic.  For our purposes, we won't run into them.

## Electronics

We'll be using LEDs and resistors, as well as some buttons and jump wires on a solderless breadboard.  

## ThingsSDK-cli

From your terminal, run this command:
``` 
npm i thingssdk-cli -g
```

If you have Node v10, there may be some issues.  See Andrew during break for assistance


