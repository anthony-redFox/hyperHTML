/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){return e.join(ee).replace(he,o).replace(fe,r)}function r(e,t,n,r){return"<"+t+n.replace(de,i)+r}function i(e,t,n){return t+(n||'"')+Y+(n||'"')}function o(e,t,n){return ae.test(t)?e:"<"+t+n+"></"+t+">"}function a(e,t,n){return{type:e,name:n,node:t,path:u(t)}}function u(e){var t,n=[];switch(e.nodeType){case re:case ne:t=e;break;case te:t=e.parentNode,f(n,t,e);break;default:t=e.ownerElement}for(;t=(e=t).parentNode;)f(n,t,e);return n}function c(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function l(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;){var u=r[o++];switch(u.nodeType){case re:s(u,t,n),l(u,t,n);break;case te:u.textContent===Y&&(n.shift(),t.push(oe.test(e.nodeName)?a("text",e):a("any",u)));break;case ie:oe.test(e.nodeName)&&ve.call(u.textContent)===ee&&(n.shift(),t.push(a("text",e)))}}}function s(t,n,r){for(var i=new C,o=t.attributes,u=[],c=u.slice.call(o,0),l=c.length,s=0;s<l;){var f=c[s++];if(f.value===Y){var h=f.name;if(!i.has(h)){var d=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=o[d]||o[d.toLowerCase()];i.set(h,v),n.push(a("attr",v,d))}u.push(f)}}for(l=u.length,s=0;s<l;){var p=u[s++];/^id$/i.test(p.name)?t.removeAttribute(p.name):t.removeAttributeNode(p)}var m=t.nodeName;if(/^script$/i.test(m)){var g=e.createElement(m);for(l=o.length,s=0;s<l;)g.setAttributeNode(o[s++].cloneNode(!0));g.textContent=t.textContent,t.parentNode.replaceChild(g,t)}}function f(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))}function h(e,t){var r=n(t),i=e.transform;i&&(r=i(r));var o=Q(r,e.type),a=[];l(o,a,t.slice(0));var u={content:o,updates:function(n){for(var r=[],i=a.length,o=0;o<i;){var u=a[o++],l=c(n,u.path);switch(u.type){case"any":r.push(e.any(l,[]));break;case"attr":r.push(e.attribute(l,u.name,u.node));break;case"text":r.push(e.text(l)),l.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return pe.set(t,u),u}function d(t,n){var r=pe.get(n)||h(t,n),i=U.call(e,r.content,!0),o={content:i,template:n,updates:r.updates(i)};return me.set(t,o),o}function v(e){return function(t){var n=me.get(e);return null!=n&&n.template===t||(n=d(e,t)),n.updates.apply(null,arguments),n.content}}function p(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}function m(e){return this.type=e,v(this)}function g(){var e=Re.get(this),t=Ce.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):b.apply(this,t),this}function b(){var e=Ce.apply(null,arguments),t=we in this?"svg":"html",n=new m(t);Re.set(this,{tagger:n,template:e[0]}),this.textContent="",this.appendChild(n.apply(null,e))}function w(e){return arguments.length<2?null==e?$e("html"):"string"==typeof e?w.wire(null,e):"raw"in e?$e("html")(e):"nodeType"in e?w.bind(e):De(e,"html"):("raw"in e?$e("html"):w.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */
var y={};try{y.WeakMap=WeakMap}catch(WeakMap){y.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this)}function r(e){this.set(e[0],e[1])}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a["delete"]=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object)}var N=y.WeakMap,x={};try{x.WeakSet=WeakSet}catch(WeakSet){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++})}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r["delete"]=function(e){return this.has(e)&&delete e[this._]},x.WeakSet=n}(Math.random(),Object.defineProperty)}var E=x.WeakSet,k={};try{k.Map=Map}catch(Map){k.Map=function(){function e(e){return-1<(t=n.indexOf(e))}var t=0,n=[],r=[];return{"delete":function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}}}var C=k.Map,A=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},S=function(e,t){return e==t},_=function(e){return e},M=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<o&&a(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},j=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},O=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},T=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},L=function(e,t,n,r,i,o,a,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=a;for(var d=new C,v=o;v<a;v++)d.set(i[v],v);for(var p=t;p<n;p++){var m=d.get(e[p]);null!=m&&-1<(c=$(f,l,m))&&(f[c]=m,s[c]={newi:p,oldi:m,prev:s[c-1]})}for(c=--l,--a;f[c]>a;)--c;l=u+r-c;var g=Array(l),b=s[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)g[--l]=1,--n;for(;a>N;)g[--l]=-1,--a;g[--l]=0,--n,--a,b=b.prev}for(;n>=t;)g[--l]=1,--n;for(;a>=o;)g[--l]=-1,--a;return g},P=function(e,t,n,r,i,o,a){var u=n+o,c=[],l=void 0,s=void 0,f=void 0,h=void 0,d=void 0,v=void 0,p=void 0;e:for(l=0;l<=u;l++){if(l>50)return null;for(p=l-1,d=l?c[l-1]:[0,0],v=c[l]=[],s=-l;s<=l;s+=2){for(h=s===-l||s!==l&&d[p+s-1]<d[p+s+1]?d[p+s+1]:d[p+s-1]+1,f=h-s;h<o&&f<n&&a(r[i+h],e[t+f]);)h++,f++;if(h===o&&f===n)break e;v[l+s]=h}}var m=Array(l/2+u/2),g=m.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&f>0&&a(r[i+h-1],e[t+f-1]);)m[g--]=0,h--,f--;if(!l)break;p=l-1,d=l?c[l-1]:[0,0],s=h-f,s===-l||s!==l&&d[p+s-1]<d[p+s+1]?(f--,m[g--]=1):(h--,m[g--]=-1)}return m},W=function(e,t,n,r,i,o,a,u,c){for(var l=new C,s=e.length,f=a,h=0;h<s;)switch(e[h++]){case 0:i++,f++;break;case 1:l.set(r[i],1),A(t,n,r,i++,i,f<u?t(o[f],1):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:a++;break;case-1:l.has(o[a])?a++:T(t,n,o,a++,a)}},$=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},D=function(e,t,n,r,i,o,a,u,c,l,s,f,h){W(P(n,r,o,a,u,l,f)||L(n,r,i,o,a,u,c,l),e,t,n,r,a,u,s,h)},F=function(e,t,n,r){r||(r={});for(var i=r.compare||S,o=r.node||_,a=null==r.before?null:o(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&i(t[c-1],n[s-1]);)c--,s--;var h=l===c,d=f===s;if(h&&d)return n;if(h&&f<s)return A(o,e,n,f,s,O(o,t,l,u,a)),n;if(d&&l<c)return T(o,e,t,l,c),n;var v=c-l,p=s-f,m=-1;if(v<p){if(-1<(m=M(n,f,s,t,l,c,i)))return A(o,e,n,f,m,o(t[l],0)),A(o,e,n,m+v,s,O(o,t,c,u,a)),n}else if(p<v&&-1<(m=M(t,l,c,n,f,s,i)))return T(o,e,t,l,m),T(o,e,t,m+p,c),n;return v<2||p<2?(A(o,e,n,f,s,o(t[l],0)),T(o,e,t,l,c),n):v===p&&j(n,s,t,l,c,i)?(A(o,e,n,f,s,O(o,t,c,u,a)),n):(D(o,e,n,f,s,p,t,l,c,v,u,i,a),n)},R={};try{R.CustomEvent=new CustomEvent(".").constructor}catch(CustomEvent){R.CustomEvent=function(t,n){n||(n={});var r=e.createEvent("Event"),i=!!n.bubbles,o=!!n.cancelable;return r.initEvent(t,i,o),r.bubbles=i,r.cancelable=o,r.detail=n.detail,r}}var H=R.CustomEvent,z=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||B(this,n,t.call(this,e))},set:function(e){B(this,n,e)}}},B=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},V={},Z={},G=[],I=Z.hasOwnProperty,q=0,J={attributes:V,define:function(e,t){e.indexOf("-")<0?(e in Z||(q=G.push(e)),Z[e]=t):V[e]=t},invoke:function(e,t){for(var n=0;n<q;n++){var r=G[n];if(I.call(e,r))return Z[r](e[r],t)}}},K=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),Q=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElement(t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template"),a=o?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(u)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:a)(e)}}(e),U=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function u(e,t){for(var n=e.cloneNode(),r=e.childNodes||[],i=r.length,o=0;t&&o<i;o++)n.appendChild(u(r[o],t));return n}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),X="content"in e.createElement("template"),Y=(X?"-":"_dt: ")+Math.random().toFixed(6)+(X?"%":";"),ee="\x3c!--"+Y+"--\x3e",te=8,ne=11,re=1,ie=3,oe=/^(?:style|textarea)$/i,ae=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,ue=" \\f\\n\\r\\t",ce="[ "+ue+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",le="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",se="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",fe=new RegExp(le+ce+se+"+)([ "+ue+"]*/?>)","g"),he=new RegExp(le+ce+se+"*)([ "+ue+"]*/>)","g"),de=new RegExp("("+ce+"\\s*=\\s*)(['\"]?)"+ee+"\\2","gi"),ve="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},pe=new N,me=new N,ge=function(){function e(e,t,n){return t+"-"+n.toLowerCase()}function t(e){return e.setAttribute("style",""),r(e.getAttributeNode("style"),!0)}function n(t){var n,r=[];for(n in t)r.push(n.replace(o,e),":",t[n],";");return r.join("")}function r(e,t){var r,o;return function(a){var u,c,l,s;switch(typeof a){case"object":if(a){if("object"===r){if(!t&&o!==a)for(c in o)c in a||(e[c]="")}else t?e.value="":e.cssText="";u=t?{}:e;for(c in a)s=a[c],l="number"!=typeof s||i.test(c)?s:s+"px",!t&&/^--/.test(c)?u.setProperty(c,l):u[c]=l;r="object",t?e.value=n(o=u):o=a;break}default:o!=a&&(r="string",o=a,t?e.value=a||"":e.cssText=a||"")}}}var i=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,o=/([^A-Z])([A-Z]+)/g;return function(e){return"ownerSVGElement"in e?t(e):r(e.style,!1)}}(),be=e.defaultView,we="ownerSVGElement",ye=function(){var t=!1,n=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var i={};return(n=function(e){var t="raw"+e.join("raw");return i[t]||(i[t]=e)})(r)}return t=!0,r};return function(e){return t?e:n(e)}}(),Ne=function(e){return e.ownerDocument||e},xe=function(e){return Ne(e).createDocumentFragment()},Ee=function(e,t){return Ne(e).createTextNode(t)},ke="append"in xe(e)?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Ce=function(e){for(var t=[ye(e)],n=1,r=arguments.length;n<r;n++)t[n]=arguments[n];return t},Ae=[].slice;p.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=xe(this.first)),(t||e)&&ke(this._,this.childNodes),this._},p.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=Ne(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var Se=/*! (c) Andrea Giammarchi */
function(e){function t(e){function t(e){s=new l;for(var t,i=e.length,o=0;o<i;o++)t=e[o],a(t.removedNodes,r,n),a(t.addedNodes,n,r);s=null}function a(e,t,n){for(var r,o=new i(t),a=e.length,u=0;u<a;1===(r=e[u++]).nodeType&&c(r,o,t,n));}function c(e,t,n,r){u.has(e)&&!s[n].has(e)&&(s[r]["delete"](e),s[n].add(e),e.dispatchEvent(t));for(var i=e.children,o=i.length,a=0;a<o;c(i[a++],t,n,r));}function l(){this[n]=new o,this[r]=new o}var s=null;try{new MutationObserver(t).observe(e,{subtree:!0,childList:!0})}catch(v){var f=0,h=[],d=function(e){h.push(e),clearTimeout(f),f=setTimeout(function(){t(h.splice(f=0,h.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){d({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){d({addedNodes:[e.target],removedNodes:[]})},!0)}}var n="connected",r="dis"+n,i=e.Event,o=e.WeakSet,a=!0,u=new o;return function(e){return a&&(a=!a,t(e.ownerDocument)),u.add(e),e}}({Event:H,WeakSet:E}),_e=function(e){return{html:e}},Me=function Be(e,t){return"ELEMENT_NODE"in e?e:e.constructor===p?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:Be(e.render(),t)},je=function(e){return"ELEMENT_NODE"in e||e instanceof p||e instanceof t},Oe=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(_e).then(t):Promise.resolve(J.invoke(e,t)).then(t)},Te=function(e){return null!=e&&"then"in e},Le=/^(?:form|list)$/i;m.prototype={attribute:function(e,t,n){var r=we in e,i=void 0;if("style"===t)return ge(e);if(/^on/.test(t)){var o=t.slice(2);return"connected"===o||"disconnected"===o?Se(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(o,i,!1),i=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!r&&t in e&&!Le.test(t))return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in J.attributes)return function(n){i=J.attributes[t](e,n),e.setAttribute(t,null==i?"":i)};var a=!1,u=n.cloneNode(!0);return function(t){i!==t&&(i=t,u.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,a||(a=!0,e.setAttributeNode(u)))))}},any:function(e,t){var n={node:Me,before:e},r=we in e?"svg":"html",i=!1,o=void 0;return function a(u){switch(typeof u){case"string":case"number":case"boolean":i?o!==u&&(o=u,t[0].textContent=u):(i=!0,o=u,t=F(e.parentNode,t,[Ee(e,u)],n));break;case"function":a(u(e));break;case"object":case"undefined":if(null==u){i=!1,t=F(e.parentNode,t,[],n);break}default:if(i=!1,o=u,K(u))if(0===u.length)t.length&&(t=F(e.parentNode,t,[],n));else switch(typeof u[0]){case"string":case"number":case"boolean":a({html:u});break;case"object":if(K(u[0])&&(u=u.concat.apply([],u)),Te(u[0])){Promise.all(u).then(a);break}default:t=F(e.parentNode,t,u,n)}else je(u)?t=F(e.parentNode,t,11===u.nodeType?Ae.call(u.childNodes):[u],n):Te(u)?u.then(a):"placeholder"in u?Oe(u,a):"text"in u?a(String(u.text)):"any"in u?a(u.any):"html"in u?t=F(e.parentNode,t,Ae.call(Q([].concat(u.html).join(""),r).childNodes),n):a("length"in u?Ae.call(u):J.invoke(u,a))}}},text:function(e){var t=void 0;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?Te(r)?r.then(n):"placeholder"in r?Oe(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?Ae.call(r).join(""):J.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};var Pe=new N,We=function(e,t){return null==e?$e(t||"html"):De(e,t||"html")},$e=function(e){var t=void 0,n=void 0,r=void 0;return function(){var i=Ce.apply(null,arguments);return r!==i[0]?(r=i[0],n=new m(e),t=Fe(n.apply(n,i))):n.apply(n,i),t}},De=function(e,t){var n=t.indexOf(":"),r=Pe.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Pe.set(e,r={}),r[i]||(r[i]=$e(t))},Fe=function(e){for(var t=e.childNodes,n=t.length,r=[],i=0;i<n;i++){var o=t[i];1!==o.nodeType&&0===ve.call(o.textContent).length||r.push(o)}return 1===r.length?r[0]:new p(r)},Re=new N,He=function(e){return g.bind(e)},ze=J.define;return w.Component=t,w.bind=He,w.define=ze,w.diff=F,w.hyper=w,w.observe=Se,w.wire=We,w._={global:be,WeakMap:N,WeakSet:E},function(e){var n=new N,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new N);return c.get(o)||i(c,o,new e(n));default:var l=u.p||(u.p=r(null));return l[o]||(l[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new C;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:z("html",e),svg:z("svg",e),state:z("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new H(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}($e),w}(document);
