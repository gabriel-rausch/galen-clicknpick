;(function() {
  var self = this;
  self.selected = null;

  self.init = function() {
    var all = document.querySelectorAll('*');
    for(var i = 0; i < all.length; i++) {
      all[i].addEventListener('mouseover', function(e) {
        if(self.selected !== null) {
        self.selected.style.outline = 'none';
        }
        self.selected = e.target;
        self.selected.style.outline = '2px red solid';
      });
      all[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.debug(self.createGalenConf(e.target));
      });
    }
  };

  self.createGalenConf = function(target) {
    var ret = '@objects    \n';
    ret += '   element       ' + self.getSelector(target) + '\n';
    ret += '   parent       .' + target.parentElement.className.replace(' ', '.') + '\n';
    ret += '   \n';
    ret += '= Element =    \n';
    ret += '   element:     \n';
    ret += '      width ~ ' + self.styleGetSize(target).width + ' \n';
    ret += '      height ~ ' + self.styleGetSize(target).height + ' \n';
    ret += '      color-scheme > 50% ' + self.styleGetBackground(target) + ' \n';
    ret += '      css font-family contains ' + self.styleGetFontFamily(target) + ' \n';
    ret += '      css font-size contains "' + getComputedStyle(target).fontSize + '" \n';

    return ret;
  };

  self.getSelector = function(target) {
    var tagSelector = target.tagName.toLowerCase();
    var classSelector = (target.className !== '') ? ('.' + target.className.replace(' ', '.')) : '';
    return tagSelector + classSelector;
  };

  self.styleGetFontFamily = function(target) {
    return '"' + getComputedStyle(target).fontFamily + '"';
  };

  self.styleGetBackground = function(target) {
    var element = target;
    var bg = '';
    while(bg === '' && element) {
      if (getComputedStyle(element).backgroundColor !== 'rgba(0, 0, 0, 0)') {
        bg = getComputedStyle(element).backgroundColor;
      }
      element = element.parentElement;
    }
    return bg;
  };

  self.styleGetSize = function(target) {
    return {
      width: getComputedStyle(target).width,
      height: getComputedStyle(target).height
    };
  };

  self.init();

})();
