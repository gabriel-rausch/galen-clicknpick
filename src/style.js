var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.dg.main .button, .dg.main button, .dg.main select, .dg.main input, .dg.main textarea {  \
  margin: auto; \
  height: auto; \
  font-size: inherit; \
} \
.dg.main * {  \
  outline: none !important; \
  box-shadow: none !important;  \
} \
  \
*[data-gcnpSelected] {  \
  outline: 2px red solid; \
  box-shadow: 0 0 0 200px rgba(80,0,0,.5) inset;  \
}';
document.getElementsByTagName('head')[0].appendChild(style);
