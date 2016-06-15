;(function(window) {
  var self = this;
  window.gcnp = self;
  self.selected = null;
  self.outputSpec = '';
  self.overlay = null;

  self.init = function() {
    var all = document.querySelectorAll('*');

    for(var i = 0; i < all.length; i++) {
      all[i].addEventListener('mouseover', function(e) {
        if(self.selected !== null) {
        self.selected.removeAttribute('data-gcnpSelected');
        }
        self.selected = e.target;
        self.selected.setAttribute('data-gcnpSelected', '');
      });
      all[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        self.outputSpec = self.createGalenConf(e.target);
        self.overlay.innerHTML = self.outputSpec.replace(/\n\r?/g, '<br />');;
        console.debug(self.outputSpec);
      });
    }

    self.createOverlay();
  };

  self.createGalenConf = function(target) {
    var ret = '@objects    \n';
    ret += '   element       ' + self.getSelector(target) + '\n';
    ret += '   parent       .' + target.parentElement.className.replace(' ', '.') + '\n';
    ret += '   \n';
    ret += '= Element =    \n';
    ret += '   element:     \n';
    ret += '      width ~ ' + self.styleGetSize(target).width + ' \n';
    ret += '      width ~ ' + self.styleGetSizePercent(target).width + ' of parent/width \n';
    ret += '      height ~ ' + self.styleGetSize(target).height + ' \n';
    ret += '      height ~ ' + self.styleGetSizePercent(target).height + ' of parent/height \n';
    ret += '      color-scheme > 50% ' + self.styleGetBackground(target) + ' \n';
    ret += '      css font-family contains ' + self.styleGetFontFamily(target) + ' \n';
    ret += '      css font-size contains "' + getComputedStyle(target).fontSize + '" \n';

    return ret;
  };

  self.getSelector = function(target) {
    var tagSelector = target.tagName.toLowerCase();
    var classSelector = (target.className !== '') ? ('.' + target.className.replace(/ /g, '.')) : '';
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

  self.styleGetSizePercent = function(target) {
    var targetSize = self.styleGetSize(target);
    var parent = target.parentElement
    var parentSize = {
      width: getComputedStyle(parent).width,
      height: getComputedStyle(parent).height
    }
    return {
      width: Math.round(parseInt(targetSize.width) / parseInt(parentSize.width) * 100) + '%',
      height: Math.round(parseInt(targetSize.height) / parseInt(parentSize.height) * 100) + '%',
    };
  };

  self.createOverlay = function() {
    var overlay = document.createElement('div');
    overlay.id = 'overlayGcnp';
    overlay.innerHTML = '<code></code>';
    document.body.appendChild(overlay);
    self.overlay = document.querySelector('#overlayGcnp code');
  }

  self.init();

})(window);
