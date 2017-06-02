// { "framework": "Vue" }

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(){var t={};return"undefined"!=typeof weex?(t.platform=weex.config.env.platform,"Web"!==t.platform&&(t.appName=weex.config.env.appName)):"function"==typeof callNative?(t.platform=navigator.platform,t.appName=navigator.appName):t.platform="Web","Web"===t.platform?t.isDingtalk=/DingTalk/.test(navigator.userAgent):t.isDingtalk="DingTalk"===t.appName,t}function o(){var t=function(t){var e="@weex-module/"+t;return __weex_require__(e)};return"undefined"!=typeof weex&&(t=weex.requireModule),t}function i(t,e){var n=e.body,r=e.onSuccess,o=e.onFail,i=e.context;t&&"function"==typeof t?t(n,function(t){if(void 0!==t&&t.__status__){var e=t.__status__,n=t.__message__;C===e?r&&r.call(i,n):R===e&&o&&o.call(i,n)}else o&&o.call("-1","")}):o&&o.call("-1","")}function a(t,e){var n=e.body,r=e.onSuccess,o=e.onFail,i=e.context;t&&"function"==typeof t?t(n,function(t){void 0!==t?"0"===t.errorCode?r&&r.call(i,t.result):o&&o.call(i,t.result):o&&o.call("-1","")}):o&&o.call("-1","")}function u(t){var e=window._WebViewJavascriptBridge;if(!e)throw"runtime and bridge are not ready";var n=t.body,r=t.onSuccess,o=t.onFail,i=t.context;e.callHandler("exec",n,function(t){void 0!==t&&("0"===t.errorCode?"function"==typeof r&&r.call(i,t.result):"function"==typeof o&&o.call(i,t.result)),"function"==typeof o&&o.call("-1","")})}function c(t){var e=t.body,n=t.onSuccess,r=t.onFail,o=t.context,i=e.plugin,a=e.action,u=e.args;(0,window.WebViewJavascriptBridgeAndroid)(i,a,u,n,r,o)}function s(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function f(t){if(j)window._WebViewJavascriptBridge?u(t):document.addEventListener("_WebViewJavascriptBridgeReady",function(){u(t)},!1);else if(N){var e=window;e.nuva&&(void 0===e.nuva.isReady||e.nuva.isReady)?(S||s(),c(t)):document.addEventListener("runtimeready",function(){S||s(),c(t)},!1)}}function p(t){var e=V||function(){};"iOS"===D?a(e,t):"android"===D?i(e,t):f(t)}function l(t,e){for(var n=e||0,r=t.length-n,o=new Array(r);r--;)o[r]=t[r+n];return o}function d(t,e){return function(n){n||(n={});var r=n.onSuccess,o=n.onFail;delete n.onSuccess,delete n.onFail,delete n.onCancel,p({body:{plugin:t,action:e,args:n},onSuccess:r,onFail:o})}}function h(t,e){var n=Object.create(null);return e.forEach(function(e){n[e]=d(t,e)}),n}function v(t){var e=Object.create(null);for(var n in t)for(var r=n.split("."),o=t[n],i=null,a=0,u=r.length;;)if(i){if(u-1===a){i[r[a]]=h(n,o);break}if(i[r[a]])a++;else if(i[r[a]]={},i=i[r[a]],++a>u)break}else{if(1===u){var c=!1,s=e[r[a]],f=h(n,o);for(var p in s)if(s.hasOwnProperty(p)){c=!0;break}if(c)for(var l in f)s[l]=f[l];else e[r[a]]=h(n,o);break}if(e[r[a]]){i=e[r[a]],a++;continue}e[r[a]]={},i=e[r[a]],a++}return e}function y(t){return function(e){p({body:{plugin:"runtime",action:t,args:{}},onSuccess:function(t){"function"==typeof e&&e(t)},onFail:function(){},context:null})}}function m(t){y("getModules")(t)}function g(t){var e=Object.keys(t);F.map(function(t){0===e.filter(function(e){return t===e}).length&&P.warn("configure : "+t+"is empty")})}function b(t,e,n){if(!e)return void I.ready(function(){t(null)});I.ready(function(){var r=I.apis.runtime.permission,o=e||{},i=n||null;o.onSuccess=function(e){t(null,e)},o.onFail=function(e){"function"==typeof i?i(e):t(e,null)},r.requestJsApis(o)})}function w(){W&&W.length>0&&(W.forEach(function(t){t()}),W.length=0)}function _(){var t={apis:{},config:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){if(!t)return void P.warn("config is undefined,you must configure Dingtalk parameters");"production"!=="production".NODE_ENV&&g(t),B=t}),init:function(){W=[],I.init(),I.ready(function(){z=I.isReady,t.apis=I.apis?I.apis:{},w()})},ready:function(t){if(!t||"function"!=typeof t)return void P.warn("callback is undefined");z?b(t,B,U):W&&W.push(function(t){return function(){b(t,B,U)}}(t))},error:function(t){"function"==typeof t&&(U=t)},EventEmitter:I.EventEmitter};return t}function x(t){t.on=function(t,e,n){document.addEventListener(t,e,n)},t.off=function(t,e,n){document.removeEventListener(t,e,n)}}function E(t){t.on=I.on,t.off=I.off}var k=void 0;k||(k=function(){return{env:r(),requireModule:o()}}());var O=k,C="1",R="2",A=O.env.platform,N=null,j=null,S=!1;if("Web"===A){var T=window.navigator.userAgent.toLowerCase();N=T&&T.indexOf("android")>-1,j=T&&/iphone|ipad|ipod|ios/.test(T)}var D=O.env.platform,V=null;"Web"!==D&&(V=O.requireModule("nuvajs-exec").exec);var $={},L={on:function(t,e){var n=$[t];n?n.push(e):$[t]=[],n||$[t].push(e)},off:function(t,e){var n=$[t];if(!n)return!1;if(!t&&!e)return $={},!0;if(t&&!e)return $[t]=null,!0;for(var r=void 0,o=n.length;o--;)if((r=n[o])===e||r.fun===e){n.splice(o,1);break}return!0},once:function(t,e){function n(){L.off(t,n),e.apply(this,arguments)}n.fun=e,L.on(t,n)},emit:function(t){if("string"==typeof t){var e=$[t],n=l(arguments,1);if(e)for(var r=0,o=e.length;r<o;r++){var i=e[r];i.apply(this,n)}}}},q=O.env.platform,M={};"Web"!==q&&(M=O.requireModule("globalEvent"));var I={getModules:null,isReady:!1,runtime:{info:y("info"),_interceptBackButton:y("interceptBackButton"),_interceptNavTitle:y("interceptNavTitle"),_recoverNavTitle:y("recoverNavTitle"),_getModules:y("getModules")},init:function(){m(function(t){t&&(I.isReady=!0,I.apis=v(t),L.emit("__ship_ready__"))})},ready:function(t){I.isReady?"function"==typeof t&&t():"function"==typeof t&&L.once("__ship_ready__",function(){t()})},on:function(t,e){M.addEventListener(t,function(t){var n={preventDefault:function(){console.warn("当前环境不支持 preventDefault")},detail:t};e.call(this,n)})},off:M.removeEventListener,EventEmitter:L},P={warn:function(t,e){if(console.warn("[DINGTALK JS SDK Warning]:",t),e)throw e;var n=new Error("WARNING STACK TRACE");console.warn(n.stack)},info:function(t){console.info("[DINGTALK JS SDK INFO]:",t)},error:function(t){console.error("[DINGTALK JS SDK ERROR]:",t)}},F=["agentId","corpId","timeStamp","nonceStr","signature","jsApiList"],B=null,W=null,U=null,z=!1,J=!0,H=O.env.platform,K=O.env.isDingtalk,G={};if(K||P.warn("can only open the page be Dingtalk Container"),J){switch(J=!1,H){case"Web":G=function(){var t=_();return x(t),t}();break;default:G=function(){var t=_();return E(t),t}()}G.init()}var Q=G;t.exports=Q},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return t.use(a.default),{router:new a.default({routes:p})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(4),a=r(i),u=n(6),c=r(u),s=n(5),f=r(s),p=[{path:"/",name:"home",component:c.default},{path:"/dingtalk",name:"dingtalk",component:f.default}]},function(t,e,n){var r,o,i=[];i.push(n(12)),r=n(7);var a=n(15);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-431ac325",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o),a=n(1),u=r(a),c=(0,u.default)(Vue),s=c.router;new Vue(Vue.util.extend({el:"#root",router:s},i.default)),s.push("/")},function(t,e,n){"use strict";/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){"production"==="production".NODE_ENV||t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:"production"!=="production".NODE_ENV&&o(!1,'props in "'+t.path+'" is a '+typeof e+", expecting an object, function or boolean.")}}function a(t,e,n){void 0===e&&(e={});var r,i=n||u;try{r=i(t||"")}catch(t){"production"!=="production".NODE_ENV&&o(!1,t.message),r={}}for(var a in e){var c=e[a];r[a]=Array.isArray(c)?c.slice():c}return r}function u(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=$t(n.shift()),o=n.length>0?$t(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Vt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(Vt(e)):r.push(Vt(e)+"="+Vt(t)))}),r.join("&")}return Vt(e)+"="+Vt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function s(t,e,n,r){var o=r&&r.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:p(e,o),matched:t?f(t):[]};return n&&(i.redirectedFrom=p(n,o)),Object.freeze(i)}function f(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function p(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(n||"/")+i(r)+o}function l(t,e){return e===qt?t===e:!!e&&(t.path&&e.path?t.path.replace(Lt,"")===e.path.replace(Lt,"")&&t.hash===e.hash&&d(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&d(t.query,e.query)&&d(t.params,e.params)))}function d(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function h(t,e){return 0===t.path.replace(Lt,"/").indexOf(e.path.replace(Lt,"/"))&&(!e.hash||t.hash===e.hash)&&v(t.query,e.query)}function v(t,e){for(var n in e)if(!(n in t))return!1;return!0}function y(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function m(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=m(e.children)))return e}}function g(t){if(!g.installed){g.installed=!0,Nt=t,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}});var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)),n(this,this)},destroyed:function(){n(this)}}),t.component("router-view",jt),t.component("router-link",Pt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.created}}function b(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function w(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function _(t){return t.replace(/\/\//g,"/")}function x(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Kt.exec(t));){var c=n[0],s=n[1],f=n.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var p=t[i],l=n[2],d=n[3],h=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=l&&null!=p&&p!==l,b="+"===y||"*"===y,w="?"===y||"*"===y,_=n[2]||u,x=h||v;r.push({name:d||o++,prefix:l||"",delimiter:_,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:x?A(x):m?".*":"[^"+R(_)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function E(t,e){return C(x(t,e))}function k(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?k:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var f,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Bt(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(f=u(p[l]),!e[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===l?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?O(p):u(p),!e[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function N(t,e){return t.keys=e,t}function j(t){return t.sensitive?"":"i"}function S(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return N(t,e)}function T(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push($(t[o],e,n).source);return N(new RegExp("(?:"+r.join("|")+")",j(n)),e)}function D(t,e,n){return V(x(t,n),e,n)}function V(t,e,n){Bt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=R(u);else{var c=R(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=R(n.delimiter||"/"),p=i.slice(-f.length)===f;return r||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&p?"":"(?="+f+"|$)",N(new RegExp("^"+i,j(n)),e)}function $(t,e,n){return Bt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?S(t,e):Bt(t)?T(t,e,n):D(t,e,n)}function L(t,e,n){try{return(Gt[t]||(Gt[t]=Wt.compile(t)))(e||{},{pretty:!0})}catch(t){return"production"!=="production".NODE_ENV&&o(!1,"missing param for "+n+": "+t.message),""}}function q(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){M(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function M(t,e,n,i,a,u){var c=i.path,s=i.name;"production"!=="production".NODE_ENV&&(r(null!=c,'"path" is required in a route configuration.'),r("string"!=typeof i.component,'route config "component" for path: '+String(c||s)+" cannot be a string id. Use an actual component instead."));var f=P(c,a),p={path:f,regex:I(f),components:i.components||{default:i.component},instances:{},name:s,parent:a,matchAs:u,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&("production"!=="production".NODE_ENV&&i.name&&i.children.some(function(t){return/^\/?$/.test(t.path)})&&o(!1,"Named Route '"+i.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+i.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),i.children.forEach(function(r){var o=u?_(u+"/"+r.path):void 0;M(t,e,n,r,p,o)})),void 0!==i.alias)if(Array.isArray(i.alias))i.alias.forEach(function(r){var o={path:r,children:i.children};M(t,e,n,o,a,p.path)});else{var l={path:i.alias,children:i.children};M(t,e,n,l,a,p.path)}e[p.path]||(t.push(p.path),e[p.path]=p),s&&(n[s]?"production"==="production".NODE_ENV||u||o(!1,'Duplicate named routes definition: { name: "'+s+'", path: "'+p.path+'" }'):n[s]=p)}function I(t){var e=Wt(t);if("production"!=="production".NODE_ENV){var n={};e.keys.forEach(function(e){o(!n[e.name],'Duplicate param keys in route with path: "'+t+'"'),n[e.name]=!0})}return e}function P(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:_(e.path+"/"+t)}function F(t,e,n,r){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){i=B({},i),i._normalized=!0;var u=B(B({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched){var c=e.matched[e.matched.length-1].path;i.path=L(c,u,"path "+e.path)}else"production"!=="production".NODE_ENV&&o(!1,"relative params navigation requires a current route.");return i}var s=w(i.path||""),f=e&&e.path||"/",p=s.path?b(s.path,f,n||i.append):f,l=a(s.query,i.query,r&&r.options.parseQuery),d=i.hash||s.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:p,query:l,hash:d}}function B(t,e){for(var n in e)t[n]=e[n];return t}function W(t,e){function n(t){q(t,p,l,d)}function i(t,n,r){var i=F(t,n,!1,e),a=i.name;if(a){var u=d[a];"production"!=="production".NODE_ENV&&o(u,"Route with name '"+a+"' does not exist");var s=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof i.params&&(i.params={}),n&&"object"==typeof n.params)for(var f in n.params)!(f in i.params)&&s.indexOf(f)>-1&&(i.params[f]=n.params[f]);if(u)return i.path=L(u.path,i.params,'named route "'+a+'"'),c(u,i,r)}else if(i.path){i.params={};for(var h=0;h<p.length;h++){var v=p[h],y=l[v];if(U(y.regex,i.path,i.params))return c(y,i,r)}}return c(null,i)}function a(t,n){var a=t.redirect,u="function"==typeof a?a(s(t,n,null,e)):a;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return"production"!=="production".NODE_ENV&&o(!1,"invalid redirect option: "+JSON.stringify(u)),c(null,n);var f=u,p=f.name,l=f.path,h=n.query,v=n.hash,y=n.params;if(h=f.hasOwnProperty("query")?f.query:h,v=f.hasOwnProperty("hash")?f.hash:v,y=f.hasOwnProperty("params")?f.params:y,p){var m=d[p];return"production"!=="production".NODE_ENV&&r(m,'redirect failed: named route "'+p+'" not found.'),i({_normalized:!0,name:p,query:h,hash:v,params:y},void 0,n)}if(l){var g=z(l,t);return i({_normalized:!0,path:L(g,y,'redirect route with path "'+g+'"'),query:h,hash:v},void 0,n)}return"production"!=="production".NODE_ENV&&o(!1,"invalid redirect option: "+JSON.stringify(u)),c(null,n)}function u(t,e,n){var r=L(n,e.params,'aliased route with path "'+n+'"'),o=i({_normalized:!0,path:r});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,c(u,e)}return c(null,e)}function c(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?u(t,n,t.matchAs):s(t,n,r,e)}var f=q(t),p=f.pathList,l=f.pathMap,d=f.nameMap;return{match:i,addRoutes:n}}function U(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=u)}return!0}function z(t,e){return b(t,e.parent?e.parent.path:"/",!0)}function J(){window.addEventListener("popstate",function(t){K(),t.state&&t.state.key&&nt(t.state.key)})}function H(t,e,n,o){if(t.app){var i=t.options.scrollBehavior;i&&("production"!=="production".NODE_ENV&&r("function"==typeof i,"scrollBehavior must be a function"),t.app.$nextTick(function(){var t=G(),r=i(e,n,o?t:null);if(r){var a="object"==typeof r;if(a&&"string"==typeof r.selector){var u=document.querySelector(r.selector);u?t=Q(u):X(r)&&(t=Y(r))}else a&&X(r)&&(t=Y(r));t&&window.scrollTo(t.x,t.y)}}))}}function K(){var t=et();t&&(Qt[t]={x:window.pageXOffset,y:window.pageYOffset})}function G(){var t=et();if(t)return Qt[t]}function Q(t){var e=document.documentElement,n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left,y:r.top-n.top}}function X(t){return Z(t.x)||Z(t.y)}function Y(t){return{x:Z(t.x)?t.x:window.pageXOffset,y:Z(t.y)?t.y:window.pageYOffset}}function Z(t){return"number"==typeof t}function tt(){return Yt.now().toFixed(3)}function et(){return Zt}function nt(t){Zt=t}function rt(t,e){K();var n=window.history;try{e?n.replaceState({key:Zt},"",t):(Zt=tt(),n.pushState({key:Zt},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function ot(t){rt(t,!0)}function it(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function at(t){if(!t)if(Ft){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ut(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ct(t,e,n,r){var o=mt(t,function(t,r,o,i){var a=st(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return gt(r?o.reverse():o)}function st(t,e){return"function"!=typeof t&&(t=Nt.extend(t)),t.options[e]}function ft(t){return ct(t,"beforeRouteLeave",lt,!0)}function pt(t){return ct(t,"beforeRouteUpdate",lt)}function lt(t,e){if(e)return function(){return t.apply(e,arguments)}}function dt(t,e,n){return ct(t,"beforeRouteEnter",function(t,r,o,i){return ht(t,o,i,e,n)})}function ht(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){vt(t,e.instances,n,o)})})}}function vt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){vt(t,e,n,r)},16)}function yt(t){return function(e,n,r){var i=!1,a=0,u=null;mt(t,function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,f=bt(function(e){t.resolved="function"==typeof e?e:Nt.extend(e),n.components[c]=e,--a<=0&&r()}),p=bt(function(t){var e="Failed to resolve async component "+c+": "+t;"production"!=="production".NODE_ENV&&o(!1,e),u||(u=wt(t)?t:new Error(e),r(u))});try{s=t(f,p)}catch(t){p(t)}if(s)if("function"==typeof s.then)s.then(f,p);else{var l=s.component;l&&"function"==typeof l.then&&l.then(f,p)}}}),i||r()}}function mt(t,e){return gt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function gt(t){return Array.prototype.concat.apply([],t)}function bt(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}function wt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function _t(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function xt(t){var e=_t(t);if(!/^\/#/.test(e))return window.location.replace(_(t+"/#"+e)),!0}function Et(){var t=kt();return"/"===t.charAt(0)||(Ct("/"+t),!1)}function kt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ot(t){window.location.hash=t}function Ct(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}function Rt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function At(t,e,n){var r="hash"===n?"#"+e:e;return t?_(t+"/"+r):r}Object.defineProperty(e,"__esModule",{value:!0});var Nt,jt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var u=o.$createElement,c=n.name,s=o.$route,f=o._routerViewCache||(o._routerViewCache={}),p=0,l=!1;o;)o.$vnode&&o.$vnode.data.routerView&&p++,o._inactive&&(l=!0),o=o.$parent;if(a.routerViewDepth=p,l)return u(f[c],a,r);var d=s.matched[p];if(!d)return f[c]=null,u();var h=f[c]=d.components[c];return a.registerRouteInstance=function(t,e){var n=d.instances[c];(e&&n!==t||!e&&n===t)&&(d.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){d.instances[c]=e.componentInstance},a.props=i(s,d.props&&d.props[c]),u(h,a,r)}},St=/[!'()*]/g,Tt=function(t){return"%"+t.charCodeAt(0).toString(16)},Dt=/%2C/g,Vt=function(t){return encodeURIComponent(t).replace(St,Tt).replace(Dt,",")},$t=decodeURIComponent,Lt=/\/?$/,qt=s(null,{path:"/"}),Mt=[String,Object],It=[String,Array],Pt={name:"router-link",props:{to:{type:Mt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:It,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,u=o.href,c={},f=n.options.linkActiveClass,p=n.options.linkExactActiveClass,d=null==f?"router-link-active":f,v=null==p?"router-link-exact-active":p,g=null==this.activeClass?d:this.activeClass,b=null==this.exactActiveClass?v:this.exactActiveClass,w=i.path?s(null,i,null,n):a;c[b]=l(r,w),c[g]=this.exact?c[b]:h(r,w);var _=function(t){y(t)&&(e.replace?n.replace(i):n.push(i))},x={click:y};Array.isArray(this.event)?this.event.forEach(function(t){x[t]=_}):x[this.event]=_;var E={class:c};if("a"===this.tag)E.on=x,E.attrs={href:u};else{var k=m(this.$slots.default);if(k){k.isStatic=!1;var O=Nt.util.extend;(k.data=O({},k.data)).on=x;(k.data.attrs=O({},k.data.attrs)).href=u}else E.on=x}return t(this.tag,E,this.$slots.default)}},Ft="undefined"!=typeof window,Bt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Wt=$,Ut=x,zt=E,Jt=C,Ht=V,Kt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Wt.parse=Ut,Wt.compile=zt,Wt.tokensToFunction=Jt,Wt.tokensToRegExp=Ht;var Gt=Object.create(null),Qt=Object.create(null),Xt=Ft&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Yt=Ft&&window.performance&&window.performance.now?window.performance:Date,Zt=tt(),te=function(t,e){this.router=t,this.base=at(e),this.current=qt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current,a=function(t){wt(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):(o(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if(l(t,i)&&t.matched.length===i.matched.length)return this.ensureURL(),a();var u=ut(this.current.matched,t.matched),c=u.updated,s=u.deactivated,f=u.activated,p=[].concat(ft(s),this.router.beforeHooks,pt(c),f.map(function(t){return t.beforeEnter}),yt(f));this.pending=t;var d=function(e,n){if(r.pending!==t)return a();try{e(t,i,function(t){!1===t||wt(t)?(r.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(t){a(t)}};it(p,d,function(){var n=[];it(dt(f,n,function(){return r.current===t}).concat(r.router.resolveHooks),d,function(){if(r.pending!==t)return a();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},te.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var ee=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&J(),window.addEventListener("popstate",function(t){r.transitionTo(_t(r.base),function(t){o&&H(e,t,r.current,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){rt(_(r.base+t.fullPath)),H(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){ot(_(r.base+t.fullPath)),H(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(_t(this.base)!==this.current.fullPath){var e=_(this.base+this.current.fullPath);t?rt(e):ot(e)}},e.prototype.getCurrentLocation=function(){return _t(this.base)},e}(te),ne=function(t){function e(e,n,r){t.call(this,e,n),r&&xt(this.base)||Et()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){Et()&&t.transitionTo(kt(),function(t){Ct(t.fullPath)})})},e.prototype.push=function(t,e,n){this.transitionTo(t,function(t){Ot(t.fullPath),e&&e(t)},n)},e.prototype.replace=function(t,e,n){this.transitionTo(t,function(t){Ct(t.fullPath),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;kt()!==e&&(t?Ot(e):Ct(e))},e.prototype.getCurrentLocation=function(){return kt()},e}(te),re=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),oe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Xt,this.fallback&&(e="hash"),Ft||(e="abstract"),this.mode=e,e){case"history":this.history=new ee(this,t.base);break;case"hash":this.history=new ne(this,t.base,this.fallback);break;case"abstract":this.history=new re(this,t.base);break;default:"production"!=="production".NODE_ENV&&r(!1,"invalid mode: "+e)}},ie={currentRoute:{}};oe.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},ie.currentRoute.get=function(){return this.history&&this.history.current},oe.prototype.init=function(t){var e=this;if("production"!=="production".NODE_ENV&&r(g.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof ee)n.transitionTo(n.getCurrentLocation());else if(n instanceof ne){var o=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},oe.prototype.beforeEach=function(t){return Rt(this.beforeHooks,t)},oe.prototype.beforeResolve=function(t){return Rt(this.resolveHooks,t)},oe.prototype.afterEach=function(t){return Rt(this.afterHooks,t)},oe.prototype.onReady=function(t,e){this.history.onReady(t,e)},oe.prototype.onError=function(t){this.history.onError(t)},oe.prototype.push=function(t,e,n){this.history.push(t,e,n)},oe.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},oe.prototype.go=function(t){this.history.go(t)},oe.prototype.back=function(){this.go(-1)},oe.prototype.forward=function(){this.go(1)},oe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},oe.prototype.resolve=function(t,e,n){var r=F(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:At(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},oe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==qt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(oe.prototype,ie),oe.install=g,oe.version="2.5.3",Ft&&window.Vue&&window.Vue.use(oe),e.default=oe},function(t,e,n){var r,o,i=[];i.push(n(11)),r=n(8);var a=n(14);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3fc59cd4",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e,n){var r,o,i=[];i.push(n(10)),r=n(9);var a=n(13);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3a62e60b",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"root"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);!function(t){t&&t.__esModule}(r);e.default={name:"bind-vue",data:function(){return{vueImage:"https://cn.vuejs.org/images/logo.png"}},mounted:function(){},methods:{bindForvue:function(){this.$router.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r);weex.requireModule("modal");e.default={name:"home",data:function(){return{link:"DingTalk"}},mounted:function(){o.default.ready(function(){o.default.apis.biz.navigation.setTitle({title:"Dingtalk"})})},methods:{getClick:function(){this.$router.push("dingtalk")}}}},function(t,e){t.exports={wrapper:{display:"flex",flexDirection:"column",justifyContent:"center",width:750},title:{fontSize:60,color:"#505050",textAlign:"center"},subtitle:{display:"block",fontSize:30,color:"#AAAAAA",textAlign:"center",marginTop:20}}},function(t,e){t.exports={wrapper:{flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#f8f8f8"},"bind-vue-prompt":{width:514,justifyContent:"center",alignItems:"center",marginBottom:112},"bind-vue-image":{width:514,height:243,marginBottom:73},image:{width:514,height:243},"bind-vue-text":{width:388,height:108},"text-control":{textAlign:"center",fontSize:34,color:"#000000"},"bind-vue-container":{width:702,height:88,justifyContent:"center",alignItems:"center",borderRadius:6,backgroundColor:"#4fc08d"},"bind-vue":{fontSize:34,color:"#ffffff",textAlign:"center"}}},function(t,e){t.exports={"app-container":{backgroundColor:"#f8f8f8"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["title"]},[t._v("Hello icepy")]),n("text",{staticClass:["subtitle"],on:{click:t.getClick}},[t._v(t._s(t.link))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("div",{staticClass:["bind-vue-prompt"]},[n("div",{staticClass:["bind-vue-image"]},[n("image",{staticClass:["image"],attrs:{src:t.vueImage}})]),t._m(0)]),n("div",{staticClass:["bind-vue-container"],on:{click:t.bindForvue}},[n("text",{staticClass:["bind-vue"]},[t._v("确定")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["bind-vue-text"]},[n("text",{staticClass:["text-control"]},[t._v("钉钉Weex小程序")]),n("text",{staticClass:["text-control"]},[t._v("快来使用Vue.js开发你的小程序吧")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app-container"]},[n("router-view",{staticStyle:{flex:"1"}})],1)},staticRenderFns:[]}}]);