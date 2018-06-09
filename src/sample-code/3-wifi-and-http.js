const config = {
  ssid: 'alchemy',
  wifiPw: 'z0sim0s!',
  url: 'http://192.168.1.72:3000/button/',
  myName: 'David'  // Change this to your name!
};
const BTN = NodeMCU.D3;
const http = require('http');
const wifi = require('Wifi');
const options = {
  repeat: true,
  edge: 'rising',
  debounce: 50
};

function handler (e) {
  http.get(`${config.url}${config.myName}`, res => {
    var content = '';
    res.on('data', data => content += data);
    res.on('close', () => console.log(content));
  });
}

function main() {
  wifi.connect(config.ssid, {password:config.wifiPw}, err => {
    if (err) {
      return console.log(`wifi connect error: ${err}`);
    }
    console.log(`Wireless network connection successful!\n * IP Address is ${wifi.getIP().ip}`);
  });

  pinMode(BTN, 'input_pullup');
  setWatch(handler, BTN, options);
};