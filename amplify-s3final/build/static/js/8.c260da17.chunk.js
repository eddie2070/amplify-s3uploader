(this["webpackJsonpamplify-s3final"]=this["webpackJsonpamplify-s3final"]||[]).push([[8],{615:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_radio_button",(function(){return v})),r.d(e,"amplify_totp_setup",(function(){return Kt}));var n=r(10),o=r(28),i=r(6),a=r(25),u=r(46),s=r(5),f=r(16),c=r(81),h=r(654),l=r(7),d=r.n(l),g=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(e){i(e)}}function u(t){try{s(n.throw(t))}catch(e){i(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},p=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},v=function(){function t(t){Object(n.k)(this,t),this.placeholder="",this.checked=!1,this.disabled=!1}return t.prototype.render=function(){return Object(n.i)("span",{class:"radio-button"},Object(n.i)("input",Object.assign({type:"radio",name:this.name,value:this.value,onInput:this.handleInputChange,placeholder:this.placeholder,id:this.fieldId,checked:this.checked,disabled:this.disabled},this.inputProps)),Object(n.i)("amplify-label",{htmlFor:this.fieldId},this.label))},t}();v.style=":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";var y=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then},m={}.toString,w=Array.isArray||function(t){return"[object Array]"==m.call(t)};E.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(e){return!1}}();var b=E.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function E(t,e,r){return E.TYPED_ARRAY_SUPPORT||this instanceof E?"number"===typeof t?A(this,t):function(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer)return function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);E.TYPED_ARRAY_SUPPORT?o.__proto__=E.prototype:o=R(t,o);return o}(t,e,r,n);if("string"===typeof e)return function(t,e){var r=0|I(e),n=P(t,r),o=n.write(e);o!==r&&(n=n.slice(0,o));return n}(t,e);return function(t,e){if(E.isBuffer(e)){var r=0|T(e.length),n=P(t,r);return 0===n.length||e.copy(n,0,0,r),n}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||(o=e.length)!==o?P(t,0):R(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return R(t,e.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,r):new E(t,e,r)}function T(t){if(t>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return 0|t}function P(t,e){var r;return E.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e)).__proto__=E.prototype:(null===(r=t)&&(r=new E(e)),r.length=e),r}function A(t,e){var r=P(t,e<0?0:0|T(e));if(!E.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)r[n]=0;return r}function R(t,e){for(var r=e.length<0?0:0|T(e.length),n=P(t,r),o=0;o<r;o+=1)n[o]=255&e[o];return n}function C(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function I(t){return E.isBuffer(t)?t.length:"undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!==typeof t&&(t=""+t),0===t.length?0:C(t).length)}E.TYPED_ARRAY_SUPPORT&&(E.prototype.__proto__=Uint8Array.prototype,E.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&E[Symbol.species]===E&&Object.defineProperty(E,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),E.prototype.write=function(t,e,r){void 0===e||void 0===r&&"string"===typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,r,n){return function(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}(C(e,t.length-r),t,r,n)}(this,t,e,r)},E.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),E.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=E.prototype;else{var o=e-t;r=new E(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},E.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!E.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},E.prototype.fill=function(t,e,r){if("string"===typeof t){if("string"===typeof e?(e=0,r=this.length):"string"===typeof r&&(r=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var i=E.isBuffer(t)?t:new E(t),a=i.length;for(o=0;o<r-e;++o)this[o+e]=i[o%a]}return this},E.concat=function(t,e){if(!w(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return P(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=A(null,e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(!E.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},E.byteLength=I,E.prototype._isBuffer=!0,E.isBuffer=function(t){return!(null==t||!t._isBuffer)};var B,_=function(t){var e=new E(t);return e.fill(0),e},M=function(t){return new E(t)},N=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],S=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},x=function(t){return N[t]},L=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},O=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');B=t},U=function(){return"undefined"!==typeof B},k=function(t){return B(t)};function Y(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var F=Y((function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!==typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return r}}}));function D(){this.buffer=[],this.length=0}D.prototype={get:function(t){var e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1===(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var j=D;function q(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=_(t*t),this.reservedBit=_(t*t)}q.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},q.prototype.get=function(t,e){return this.data[t*this.size+e]},q.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},q.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var z=q,H=Y((function(t,e){var r=S;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}})),J=S,K=function(t){var e=J(t);return[[0,0],[e-7,0],[0,e-7]]},Q=Y((function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r=3,n=3,o=40,i=10;function a(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?o++:(o>=5&&(n+=r+(o-5)),a=c,o=1),(c=t.get(f,s))===u?i++:(i>=5&&(n+=r+(i-5)),u=c,i=1)}o>=5&&(n+=r+(o-5)),i>=5&&(n+=r+(i-5))}return n},e.getPenaltyN2=function(t){for(var e=t.size,r=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||r++}return r*n},e.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,i=0,a=0;a<e;a++){n=i=0;for(var u=0;u<e;u++)n=n<<1&2047|t.get(a,u),u>=10&&(1488===n||93===n)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*o},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*i},e.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,a(t,o,n))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}})),V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],$=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],X=function(t,e){switch(e){case F.L:return V[4*(t-1)+0];case F.M:return V[4*(t-1)+1];case F.Q:return V[4*(t-1)+2];case F.H:return V[4*(t-1)+3];default:return}},G=function(t,e){switch(e){case F.L:return $[4*(t-1)+0];case F.M:return $[4*(t-1)+1];case F.Q:return $[4*(t-1)+2];case F.H:return $[4*(t-1)+3];default:return}},W=_(512),Z=_(256);!function(){for(var t=1,e=0;e<255;e++)W[e]=t,Z[t]=e,256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)W[e]=W[e-255]}();var tt=function(t){return W[t]},et=function(t,e){return 0===t||0===e?0:W[Z[t]+Z[e]]},rt=Y((function(t,e){e.mul=function(t,e){for(var r=_(t.length+e.length-1),n=0;n<t.length;n++)for(var o=0;o<e.length;o++)r[n+o]^=et(t[n],e[o]);return r},e.mod=function(t,e){for(var r=M(t);r.length-e.length>=0;){for(var n=r[0],o=0;o<e.length;o++)r[o]^=et(e[o],n);for(var i=0;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(t){for(var r=M([1]),n=0;n<t;n++)r=e.mul(r,[1,tt(n)]);return r}})),nt=d.a.Buffer;function ot(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ot.prototype.initialize=function(t){this.degree=t,this.genPoly=rt.generateECPolynomial(this.degree)},ot.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=_(this.degree),r=nt.concat([t,e],t.length+this.degree),n=rt.mod(r,this.genPoly),o=this.degree-n.length;if(o>0){var i=_(this.degree);return n.copy(i,o),i}return n};var it=ot,at=function(t){return!isNaN(t)&&t>=1&&t<=40},ut="[0-9]+",st="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",ft="(?:(?![A-Z0-9 $%*+\\-./:]|"+(st=st.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+",ct=new RegExp(st,"g"),ht=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),lt=new RegExp(ft,"g"),dt=new RegExp(ut,"g"),gt=new RegExp("[A-Z $%*+\\-./:]+","g"),pt=new RegExp("^"+st+"$"),vt=new RegExp("^[0-9]+$"),yt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),mt={KANJI:ct,BYTE_KANJI:ht,BYTE:lt,NUMERIC:dt,ALPHANUMERIC:gt,testKanji:function(t){return pt.test(t)},testNumeric:function(t){return vt.test(t)},testAlphanumeric:function(t){return yt.test(t)}},wt=Y((function(t,e){e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!at(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return mt.testNumeric(t)?e.NUMERIC:mt.testAlphanumeric(t)?e.ALPHANUMERIC:mt.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!==typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(n){return r}}})),bt=Y((function(t,e){var r=L(7973);function n(t,e){return wt.getCharCountIndicator(t,e)+4}function o(t,e){var r=0;return t.forEach((function(t){var o=n(t.mode,e);r+=o+t.getBitsLength()})),r}e.from=function(t,e){return at(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!at(t))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=wt.BYTE);var o=8*(x(t)-G(t,e));if(r===wt.MIXED)return o;var i=o-n(r,t);switch(r){case wt.NUMERIC:return Math.floor(i/10*3);case wt.ALPHANUMERIC:return Math.floor(i/11*2);case wt.KANJI:return Math.floor(i/13);case wt.BYTE:default:return Math.floor(i/8)}},e.getBestVersionForData=function(t,r){var n,i=F.from(r,F.M);if(w(t)){if(t.length>1)return function(t,r){for(var n=1;n<=40;n++)if(o(t,n)<=e.getCapacity(n,r,wt.MIXED))return n}(t,i);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),i)},e.getEncodedBits=function(t){if(!at(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;L(e)-r>=0;)e^=7973<<L(e)-r;return t<<12|e}})),Et=L(1335),Tt=function(t,e){for(var r=t.bit<<3|e,n=r<<10;L(n)-Et>=0;)n^=1335<<L(n)-Et;return 21522^(r<<10|n)};function Pt(t){this.mode=wt.NUMERIC,this.data=t.toString()}Pt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Pt.prototype.getLength=function(){return this.data.length},Pt.prototype.getBitsLength=function(){return Pt.getBitsLength(this.data.length)},Pt.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var At=Pt,Rt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ct(t){this.mode=wt.ALPHANUMERIC,this.data=t}Ct.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Ct.prototype.getLength=function(){return this.data.length},Ct.prototype.getBitsLength=function(){return Ct.getBitsLength(this.data.length)},Ct.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*Rt.indexOf(this.data[e]);r+=Rt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Rt.indexOf(this.data[e]),6)};var It=Ct;function Bt(t){this.mode=wt.BYTE,this.data=M(t)}Bt.getBitsLength=function(t){return 8*t},Bt.prototype.getLength=function(){return this.data.length},Bt.prototype.getBitsLength=function(){return Bt.getBitsLength(this.data.length)},Bt.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var _t=Bt;function Mt(t){this.mode=wt.KANJI,this.data=t}Mt.getBitsLength=function(t){return 13*t},Mt.prototype.getLength=function(){return this.data.length},Mt.prototype.getBitsLength=function(){return Mt.getBitsLength(this.data.length)},Mt.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=k(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var Nt=Mt,St=Y((function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,s,f,c,h,l,d=e.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(s in u=(a=d.pop()).value,f=a.cost,c=t[u]||{})c.hasOwnProperty(s)&&(h=f+c[s],l=i[s],("undefined"===typeof i[s]||l>h)&&(i[s]=h,d.push(s,h),o[s]=u));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e})),xt=Y((function(t,e){function r(t){return unescape(encodeURIComponent(t)).length}function n(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function o(t){var e,r,o=n(mt.NUMERIC,wt.NUMERIC,t),i=n(mt.ALPHANUMERIC,wt.ALPHANUMERIC,t);return U()?(e=n(mt.BYTE,wt.BYTE,t),r=n(mt.KANJI,wt.KANJI,t)):(e=n(mt.BYTE_KANJI,wt.BYTE,t),r=[]),o.concat(i,e,r).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function i(t,e){switch(e){case wt.NUMERIC:return At.getBitsLength(t);case wt.ALPHANUMERIC:return It.getBitsLength(t);case wt.KANJI:return Nt.getBitsLength(t);case wt.BYTE:return _t.getBitsLength(t)}}function a(t,e){var r,n=wt.getBestModeForData(t);if((r=wt.from(e,n))!==wt.BYTE&&r.bit<n.bit)throw new Error('"'+t+'" cannot be encoded with mode '+wt.toString(r)+".\n Suggested mode is: "+wt.toString(n));switch(r!==wt.KANJI||U()||(r=wt.BYTE),r){case wt.NUMERIC:return new At(t);case wt.ALPHANUMERIC:return new It(t);case wt.KANJI:return new Nt(t);case wt.BYTE:return new _t(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(a(e,null)):e.data&&t.push(a(e.data,e.mode)),t}),[])},e.fromString=function(t,n){for(var a=function(t,e){for(var r={},n={start:{}},o=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var c=u[f],h=""+a+f;s.push(h),r[h]={node:c,lastCount:0},n[h]={};for(var l=0;l<o.length;l++){var d=o[l];r[d]&&r[d].node.mode===c.mode?(n[d][h]=i(r[d].lastCount+c.length,c.mode)-i(r[d].lastCount,c.mode),r[d].lastCount+=c.length):(r[d]&&(r[d].lastCount=c.length),n[d][h]=i(c.length,c.mode)+4+wt.getCharCountIndicator(c.mode,e))}}o=s}for(l=0;l<o.length;l++)n[o[l]].end=0;return{map:n,table:r}}(function(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case wt.NUMERIC:e.push([o,{data:o.data,mode:wt.ALPHANUMERIC,length:o.length},{data:o.data,mode:wt.BYTE,length:o.length}]);break;case wt.ALPHANUMERIC:e.push([o,{data:o.data,mode:wt.BYTE,length:o.length}]);break;case wt.KANJI:e.push([o,{data:o.data,mode:wt.BYTE,length:r(o.data)}]);break;case wt.BYTE:e.push([{data:o.data,mode:wt.BYTE,length:r(o.data)}])}}return e}(o(t,U())),n),u=St.find_path(a.map,"start","end"),s=[],f=1;f<u.length-1;f++)s.push(a.table[u[f]].node);return e.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(s))},e.rawSplit=function(t){return e.fromArray(o(t,U()))}}));function Lt(t,e,r){var n,o,i=t.size,a=Tt(e,r);for(n=0;n<15;n++)o=1===(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function Ot(t,e,r){var n=new j;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),wt.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(x(t)-G(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,e,r){for(var n=x(e),o=G(e,r),i=n-o,a=X(e,r),u=a-n%a,s=Math.floor(n/a),f=Math.floor(i/a),c=f+1,h=s-f,l=new it(h),d=0,g=new Array(a),p=new Array(a),v=0,y=M(t.buffer),m=0;m<a;m++){var w=m<u?f:c;g[m]=y.slice(d,d+w),p[m]=l.encode(g[m]),d+=w,v=Math.max(v,w)}var b,E,T=_(n),P=0;for(b=0;b<v;b++)for(E=0;E<a;E++)b<g[E].length&&(T[P++]=g[E][b]);for(b=0;b<h;b++)for(E=0;E<a;E++)T[P++]=p[E][b];return T}(n,t,e)}function Ut(t,e,r,n){var o;if(w(t))o=xt.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=xt.rawSplit(t);i=bt.getBestVersionForData(a,r)}o=xt.fromString(t,i||40)}var u=bt.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var s=Ot(e,r,o),f=S(e),c=new z(f);return function(t,e){for(var r=t.size,n=K(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}(c,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(c),function(t,e){for(var r=H.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(c,e),Lt(c,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=bt.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1===(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(c,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1===(e[a]>>>i&1)),t.set(o,u-s,f),-1===--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(c,s),isNaN(n)&&(n=Q.getBestMask(c,Lt.bind(null,c,r))),Q.applyMask(n,c),Lt(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}var kt=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");var r,n,o=F.M;return"undefined"!==typeof e&&(o=F.from(e.errorCorrectionLevel,F.M),r=bt.from(e.version),n=Q.from(e.maskPattern),e.toSJISFunc&&O(e.toSJISFunc)),Ut(t,r,o,n)},Yt=Y((function(t,e){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var h=0;h<u;h++){var l=4*(c*u+h),d=n.color.light;if(c>=s&&h>=s&&c<u-s&&h<u-s)d=f[i[Math.floor((c-s)/a)*o+Math.floor((h-s)/a)]?1:0];t[l++]=d.r,t[l++]=d.g,t[l++]=d.b,t[l]=d.a}}})),Ft=Y((function(t,e){e.render=function(t,e,r){var n=r,o=e;"undefined"!==typeof n||e&&e.getContext||(n=e,e=void 0),e||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),n=Yt.getOptions(n);var i=Yt.getImageWidth(t.modules.size,n),a=o.getContext("2d"),u=a.createImageData(i,i);return Yt.qrToImageData(u.data,t,n),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(a,o,i),a.putImageData(u,0,0),o},e.renderToDataURL=function(t,r,n){var o=n;"undefined"!==typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}));function Dt(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function jt(t,e,r){var n=t+e;return"undefined"!==typeof r&&(n+=" "+r),n}var qt=function(t,e,r){var n=Yt.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Dt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",s="<path "+Dt(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var s=Math.floor(u%e),f=Math.floor(u/e);s||i||(i=!0),t[u]?(a++,u>0&&s>0&&t[u-1]||(n+=i?jt("M",s+r,.5+f+r):jt("m",o,0),o=0,i=!1),s+1<e&&t[u+1]||(n+=jt("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',f='viewBox="0 0 '+a+" "+a+'"',c='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+f+' shape-rendering="crispEdges">'+u+s+"</svg>\n";return"function"===typeof r&&r(null,c),c};function zt(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"===typeof i[a-1];if(!u&&!y())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=kt(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&"undefined"===typeof o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var s=kt(r,n);o(null,t(s,e,n))}catch(f){o(f)}}var Ht={create:kt,toCanvas:zt.bind(null,Ft.render),toDataURL:zt.bind(null,Ft.renderToDataURL),toString:zt.bind(null,(function(t,e,r){return qt(t,r)}))},Jt=new o.a("TOTP"),Kt=function(){function t(t){Object(n.k)(this,t),this.inputProps={autoFocus:!0},this.handleAuthStateChange=c.d,this.headerText=s.a.TOTP_HEADER_TEXT,this.issuer=s.a.TOTP_ISSUER,this.code=null,this.setupMessage=null,this.qrCodeInput=null,this.loading=!1}return t.prototype.componentWillLoad=function(){return g(this,void 0,void 0,(function(){var t=this;return p(this,(function(e){switch(e.label){case 0:return this.removeHubListener=Object(c.i)((function(e){e===a.a.TOTPSetup&&t.setup()})),[4,this.setup()];case 1:return e.sent(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.removeHubListener&&this.removeHubListener()},t.prototype.buildOtpAuthPath=function(t,e,r){return"otpauth://totp/"+e+":"+t.username+"?secret="+r+"&issuer="+e},t.prototype.onTOTPEvent=function(t,e,r){return g(this,void 0,void 0,(function(){return p(this,(function(n){switch(n.label){case 0:return Jt.debug("on totp event",t,e),t!==f.g||e!==f.r?[3,2]:[4,Object(h.a)(r,this.handleAuthStateChange)];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},t.prototype.handleTotpInputChange=function(t){this.setupMessage=null,this.qrCodeInput=t.target.value},t.prototype.generateQRCode=function(t){return g(this,void 0,void 0,(function(){var e,r;return p(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,Ht.toDataURL(t)];case 1:return e.qrCodeImageSource=n.sent(),[3,3];case 2:return r=n.sent(),Object(c.a)(r),[3,3];case 3:return[2]}}))}))},t.prototype.setup=function(){return g(this,void 0,void 0,(function(){var t,e,r;return p(this,(function(n){switch(n.label){case 0:if(!this.user||"MFA_SETUP"!==this.user.challengeName||this.loading)return[2];if(this.setupMessage=null,t=encodeURI(i.a.get(this.issuer)),!u.a||"function"!==typeof u.a.setupTOTP)throw new Error(f.d);this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,u.a.setupTOTP(this.user)];case 2:return e=n.sent(),Jt.debug("secret key",e),this.code=this.buildOtpAuthPath(this.user,t,e),this.generateQRCode(this.code),[3,5];case 3:return r=n.sent(),Object(c.a)(r),Jt.debug(i.a.get(s.a.TOTP_SETUP_FAILURE),r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},t.prototype.verifyTotpToken=function(t){return g(this,void 0,void 0,(function(){var e,r;return p(this,(function(n){switch(n.label){case 0:if(t&&t.preventDefault(),!this.qrCodeInput)return Jt.debug("No TOTP Code provided"),[2];if(e=this.user,!u.a||"function"!==typeof u.a.verifyTotpToken||"function"!==typeof u.a.setPreferredMFA)throw new Error(f.d);n.label=1;case 1:return n.trys.push([1,5,,6]),[4,u.a.verifyTotpToken(e,this.qrCodeInput)];case 2:return n.sent(),[4,u.a.setPreferredMFA(e,a.c.TOTP)];case 3:return n.sent(),this.setupMessage=i.a.get(s.a.TOTP_SUCCESS_MESSAGE),Jt.debug(i.a.get(s.a.TOTP_SUCCESS_MESSAGE)),[4,this.onTOTPEvent(f.g,f.r,e)];case 4:return n.sent(),[3,6];case 5:return r=n.sent(),this.setupMessage=i.a.get(s.a.TOTP_SETUP_FAILURE),Jt.error(r),[3,6];case 6:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(n.i)(n.b,null,Object(n.i)("amplify-form-section",{headerText:i.a.get(this.headerText),submitButtonText:i.a.get(s.a.TOTP_SUBMIT_BUTTON_TEXT),handleSubmit:function(e){return t.verifyTotpToken(e)},loading:this.loading},Object(n.i)("div",{class:"totp-setup"},this.qrCodeImageSource&&Object(n.i)("img",{src:this.qrCodeImageSource,alt:i.a.get(s.a.QR_CODE_ALT)}),Object(n.i)("amplify-form-field",{label:i.a.get(s.a.TOTP_LABEL),inputProps:this.inputProps,fieldId:"totpCode",name:"totpCode",handleInputChange:function(e){return t.handleTotpInputChange(e)}}))))},t}();Kt.style=".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}"},654:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return p}));var n=r(28),o=r(22),i=r(25),a=r(46),u=r(14),s=r(5),f=r(16),c=r(81),h=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(e){i(e)}}function u(t){try{s(n.throw(t))}catch(e){i(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},l=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},d=new n.a("auth-helpers");function g(t,e){return h(this,void 0,void 0,(function(){var r,n,u;return l(this,(function(s){switch(s.label){case 0:if(!a.a||"function"!==typeof a.a.verifiedContact)throw new Error(f.d);if(!v(t))return e(i.a.SignedIn,t),[2];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,a.a.verifiedContact(t)];case 2:return r=s.sent(),!Object(o.d)(r.verified)||Object(o.d)(r.unverified)?e(i.a.SignedIn,t):(n=Object.assign(t,r),e(i.a.VerifyContact,n)),[3,4];case 3:return u=s.sent(),Object(c.a)(u),[3,4];case 4:return[2]}}))}))}var p=function(t,e,r){return h(void 0,void 0,void 0,(function(){var n,o;return l(this,(function(u){switch(u.label){case 0:if(!a.a||"function"!==typeof a.a.signIn)throw new Error(f.d);u.label=1;case 1:return u.trys.push([1,9,,10]),[4,a.a.signIn(t,e)];case 2:return n=u.sent(),d.debug(n),n.challengeName!==i.b.SMSMFA&&n.challengeName!==i.b.SoftwareTokenMFA?[3,3]:(d.debug("confirm user with "+n.challengeName),r(i.a.ConfirmSignIn,n),[3,8]);case 3:return n.challengeName!==i.b.NewPasswordRequired?[3,4]:(d.debug("require new password",n.challengeParam),r(i.a.ResetPassword,n),[3,8]);case 4:return n.challengeName!==i.b.MFASetup?[3,5]:(d.debug("TOTP setup",n.challengeParam),r(i.a.TOTPSetup,n),[3,8]);case 5:return n.challengeName===i.b.CustomChallenge&&n.challengeParam&&"true"===n.challengeParam.trigger?(d.debug("custom challenge",n.challengeParam),r(i.a.CustomConfirmSignIn,n),[3,8]):[3,6];case 6:return[4,g(n,r)];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:return"UserNotConfirmedException"===(o=u.sent()).code?(d.debug("the user is not confirmed"),r(i.a.ConfirmSignUp,{username:t})):"PasswordResetRequiredException"===o.code?(d.debug("the user requires a new password"),r(i.a.ForgotPassword,{username:t})):"InvalidParameterException"===o.code&&""===e&&(d.debug("Password cannot be empty"),o.message=s.a.EMPTY_PASSWORD),Object(c.a)(o),[3,10];case 10:return[2]}}))}))},v=function(t){return t instanceof u.e}}}]);
//# sourceMappingURL=8.c260da17.chunk.js.map