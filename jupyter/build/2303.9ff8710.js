"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2303],{33468:(o,r,e)=>{e.d(r,{Z:()=>m});var c=e(34663),n=e.n(c),t=e(7638),a=e.n(t)()(n());a.push([o.id,"/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/mbo.css"],names:[],mappings:"AAAA,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;;AAEjE,uBAAuB,mBAAmB,EAAE,cAAc,EAAE;AAC5D,oCAAoC,mBAAmB,EAAE;AACzD,2IAA2I,mCAAmC,EAAE;AAChL,0JAA0J,mCAAmC,EAAE;AAC/L,gCAAgC,mBAAmB,EAAE,iBAAiB,EAAE;AACxE,qCAAqC,YAAY,EAAE;AACnD,4CAA4C,WAAW,EAAE;AACzD,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,8BAA8B,EAAE;;AAE/D,4BAA4B,cAAc,EAAE;AAC5C,yBAAyB,cAAc,EAAE;AACzC,2BAA2B,cAAc,EAAE;;AAE3C,0DAA0D,cAAc,EAAE;AAC1E,4BAA4B,cAAc,EAAE;AAC5C,2BAA2B,cAAc,EAAE;AAC3C,uCAAuC,cAAc,EAAE;;AAEvD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,wBAAwB,cAAc,EAAE;AACxC,4BAA4B,cAAc,EAAE,iBAAiB,EAAE;AAC/D,wBAAwB,cAAc,EAAE;AACxC,yBAAyB,cAAc,EAAE;AACzC,0BAA0B,sBAAsB,EAAE,cAAc,EAAE;AAClE,8BAA8B,cAAc,EAAE;;AAE9C,8CAA8C,mBAAmB,EAAE;AACnE,wCAAwC,yBAAyB,EAAE;AACnE,oCAAoC,oCAAoC,EAAE",sourcesContent:["/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n"],sourceRoot:""}]);const m=a},7638:o=>{o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var e="",c=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),c&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=o(r),c&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(o,e,c,n,t){"string"==typeof o&&(o=[[null,o,void 0]]);var a={};if(c)for(var m=0;m<this.length;m++){var s=this[m][0];null!=s&&(a[s]=!0)}for(var A=0;A<o.length;A++){var i=[].concat(o[A]);c&&a[i[0]]||(void 0!==t&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=t),e&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=e):i[2]=e),n&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=n):i[4]="".concat(n)),r.push(i))}},r}},34663:o=>{o.exports=function(o){var r=o[1],e=o[3];if(!e)return r;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),t="/*# ".concat(n," */"),a=e.sources.map((function(o){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(o," */")}));return[r].concat(a).concat([t]).join("\n")}return[r].join("\n")}},2303:(o,r,e)=>{e.r(r),e.d(r,{default:()=>C});var c=e(1892),n=e.n(c),t=e(95760),a=e.n(t),m=e(38311),s=e.n(m),A=e(58192),i=e.n(A),l=e(38060),f=e.n(l),b=e(54865),d=e.n(b),p=e(33468),u={};u.styleTagTransform=d(),u.setAttributes=i(),u.insert=s().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=f(),n()(p.Z,u);const C=p.Z&&p.Z.locals?p.Z.locals:void 0},1892:o=>{var r=[];function e(o){for(var e=-1,c=0;c<r.length;c++)if(r[c].identifier===o){e=c;break}return e}function c(o,c){for(var t={},a=[],m=0;m<o.length;m++){var s=o[m],A=c.base?s[0]+c.base:s[0],i=t[A]||0,l="".concat(A," ").concat(i);t[A]=i+1;var f=e(l),b={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)r[f].references++,r[f].updater(b);else{var d=n(b,c);c.byIndex=m,r.splice(m,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function n(o,r){var e=r.domAPI(r);return e.update(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap&&r.supports===o.supports&&r.layer===o.layer)return;e.update(o=r)}else e.remove()}}o.exports=function(o,n){var t=c(o=o||[],n=n||{});return function(o){o=o||[];for(var a=0;a<t.length;a++){var m=e(t[a]);r[m].references--}for(var s=c(o,n),A=0;A<t.length;A++){var i=e(t[A]);0===r[i].references&&(r[i].updater(),r.splice(i,1))}t=s}}},38311:o=>{var r={};o.exports=function(o,e){var c=function(o){if(void 0===r[o]){var e=document.querySelector(o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(o){e=null}r[o]=e}return r[o]}(o);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}},38060:o=>{o.exports=function(o){var r=document.createElement("style");return o.setAttributes(r,o.attributes),o.insert(r,o.options),r}},58192:(o,r,e)=>{o.exports=function(o){var r=e.nc;r&&o.setAttribute("nonce",r)}},95760:o=>{o.exports=function(o){var r=o.insertStyleElement(o);return{update:function(e){!function(o,r,e){var c="";e.supports&&(c+="@supports (".concat(e.supports,") {")),e.media&&(c+="@media ".concat(e.media," {"));var n=void 0!==e.layer;n&&(c+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),c+=e.css,n&&(c+="}"),e.media&&(c+="}"),e.supports&&(c+="}");var t=e.sourceMap;t&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(c,o,r.options)}(r,o,e)},remove:function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(r)}}}},54865:o=>{o.exports=function(o,r){if(r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}}}]);
//# sourceMappingURL=2303.9ff8710.js.map