let BTN = NodeMCU.D3;
let LED = NodeMCU.D2;
let isOn = false;
let options = {
  repeat: true,
  edge: 'rising',
  debounce: 50
}

function main() {
  pinMode(BTN, 'input');
  setWatch(function(e) {
    console.log(isOn);
    isOn = !isOn;
  },BTN, options);
  
  setInterval(function() {
    digitalWrite(LED, isOn);
  }, 50);
}