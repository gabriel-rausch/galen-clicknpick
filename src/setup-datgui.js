
var convertRGBtoArray = function(str) {
  return str.substring(5, str.length-1).split(', ');
};

var Preferences = function() {
  this.current = '';
  this.insideParent = true;
  this.background = true;
  this.bgcolor = '#000000';
  this.backgroundAmound = 50;
  this.width = '';
  this.height = '';
  this.widthPercent = '';
  this.heightPercent = '';
  this.position = true;
  this.fontSize = true;
  this.fontFamily = true;
  this.showSpecs = function() {
    window.gcnp.overlay.parentElement.classList.toggle('open');
  }
};

var prefs = new Preferences();
var gui = new dat.GUI();
gui.add(prefs, 'current').listen();

var guiRules = gui.addFolder('Rules');
guiRules.add(prefs, 'insideParent');
guiRules.add(prefs, 'background');
guiRules.addColor(prefs, 'bgcolor').listen();
guiRules.add(prefs, 'backgroundAmound', 0, 100);
guiRules.add(prefs, 'width').listen();
guiRules.add(prefs, 'height').listen();
guiRules.add(prefs, 'widthPercent').listen();
guiRules.add(prefs, 'heightPercent').listen();
guiRules.add(prefs, 'position');
guiRules.add(prefs, 'fontSize');
guiRules.add(prefs, 'fontFamily');
gui.add(prefs, 'showSpecs');

setInterval(function() {
  prefs.current = window.gcnp.getSelector(window.gcnp.selected);
  prefs.bgcolor = window.gcnp.styleGetBackground(window.gcnp.selected);
  prefs.width = window.gcnp.styleGetSize(window.gcnp.selected).width;
  prefs.height = window.gcnp.styleGetSize(window.gcnp.selected).height;
  prefs.widthPercent = window.gcnp.styleGetSizePercent(window.gcnp.selected).width;
  prefs.heightPercent = window.gcnp.styleGetSizePercent(window.gcnp.selected).height;
}, 100)
