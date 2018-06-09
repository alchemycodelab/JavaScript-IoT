const config = {
  ssid: 'alchemy',
  wifiPw: 'z0sim0s!',
  url: 'http://192.168.1.72:3000/color/'
};
const BTN = NodeMCU.D2;
const LEDS = {
  RED: NodeMCU.D3,
  GREEN: NodeMCU.D4,
  BLUE: NodeMCU.D6
};

const http = require('http');
const wifi = require('Wifi');
const options = {
  repeat: true,
  edge: 'rising',
  debounce: 50
};

function handler (e) {
  http.get(config.url, res => {
      let content = '';
      res.on('data', data => content += data);
      res.on('close', () => {
          const color = JSON.parse(content).color.toUpperCase();
          changeLED(color);
      });
  });
}

function changeLED(color) {
  digitalWrite(LEDS.RED, false);
  digitalWrite(LEDS.GREEN, false);
  digitalWrite(LEDS.BLUE, false);
  if (color) digitalWrite(LEDS[color], true);
}

function main() {
  wifi.connect(config.ssid, {password:config.wifiPw}, err => {
      if (err) {
          return console.log(`wifi connect error: ${err}`);
      }
      console.log(`Wireless network connection successful!\n * IP Address is ${wifi.getIP().ip}`);
  });
  changeLED(null);
  pinMode(BTN, 'input_pullup');
  setWatch(handler, BTN, options);
}