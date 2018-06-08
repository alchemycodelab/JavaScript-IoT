var BTN = NodeMCU.D3;
var LED = NodeMCU.D2;
var isOn = false;
var options = {
  repeat: true,
  edge: 'rising'
}
pinMode(BTN, 'input');
setWatch(function(e) {
  isOn = !isOn;
},BTN, options);

setInterval(function() {
  digitalWrite(LED, isOn);
}, 50);
