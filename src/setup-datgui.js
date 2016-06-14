
var convertRGBtoArray = function(str) {
  return str.substring(5, str.length-1).split(', ');
};

var Preferences = function() {
  this.current = '';
  this.insideParent = true;
  this.background = true;
  this.bgcolor = '#000000';
  this.backgroundAmound = 50;
  this.size = true;
  this.position = true;
  this.fontSize = true;
  this.fontFamily = true;
};

window.onload = function() {
  var prefs = new Preferences();
  var gui = new dat.GUI();
  gui.add(prefs, 'current').listen();
  gui.add(prefs, 'insideParent');
  gui.add(prefs, 'background');
  gui.addColor(prefs, 'bgcolor').listen();
  gui.add(prefs, 'backgroundAmound', 0, 100);
  gui.add(prefs, 'size');
  gui.add(prefs, 'position');
  gui.add(prefs, 'fontSize');
  gui.add(prefs, 'fontFamily');

  setInterval(function() {
    prefs.current = window.gcnp.getSelector(window.gcnp.selected);
    prefs.bgcolor = window.gcnp.styleGetBackground(window.gcnp.selected);
  }, 100)
};
