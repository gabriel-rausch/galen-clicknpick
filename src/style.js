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
}  \
\
#overlayGcnp {  \
  position: fixed;  \
  bottom: 0;  \
  left: 0;  \
  width: 100%;  \
  height: 0;  \
  max-height: 300px;  \
  padding: 0 30px;  \
  background: rgba(0, 0, 0, 0.9);  \
  z-index: 99999999999;  \
  box-sizing: border-box;  \
  color: white;  \
  transition: all .2s;  \
  font-size: 11px;  \
  line-height: 1.3;  \
} \
\
#overlayGcnp.open {  \
  height: auto; \
  padding: 30px;  \
}';
document.getElementsByTagName('head')[0].appendChild(style);
