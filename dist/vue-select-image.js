/*!
 * vue-select-image v.1.0.1
 * Irfan Maulana (https://github.com/mazipan)
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueSelectImage",[],t):"object"==typeof exports?exports.VueSelectImage=t():e.VueSelectImage=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i={install:function(e){e.component(a.default.name,a.default)}};a.default.install=i.install,t.default=a.default},function(e,t,n){"use strict";function r(e){n(2)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),i=n.n(a),o=n(9),s=n(7),l=r,u=s(i.a,o.a,l,null,null);t.default=u.exports},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(5)("151e7811",r,!0)},function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".VueSelectImage__wrapper{overflow:auto;list-style-image:none;list-style-position:outside;list-style-type:none;padding:0;margin:0}.VueSelectImage__item{margin:0 12px 12px 0;float:left}.VueSelectImage__thumbnail{padding:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;display:block;padding:4px;line-height:20px;border:1px solid #ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.055);-moz-box-shadow:0 1px 3px rgba(0,0,0,.055);box-shadow:0 1px 3px rgba(0,0,0,.055);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.VueSelectImage__thumbnail--selected{background:#08c}.VueSelectImage__img{-webkit-user-drag:none;display:block;max-width:100%;margin-right:auto;margin-left:auto}@media only screen and (min-width:1200px){.VueSelectImage__item{margin-left:30px}}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return g;r.parentNode.removeChild(r)}if(h){var i=p++;r=f||(f=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(6),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var a=u(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=c[o.id];s.refs--,n.push(s)}t?(a=u(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+a,css:s,media:l,sourceMap:u};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,a){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(e,t){return u.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:o,options:l}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-select-image",props:{dataImages:{type:Array,default:[]},isMultiple:{type:Boolean,default:!1}},data:function(){return{dataImagesLocal:[],singleSelected:{id:""},multipleSelected:[]}},created:function(){this.dataImagesLocal=this.dataImages},methods:{onSelectImage:function(e){this.singleSelected=Object.assign({},this.singleSelected,e),this.$emit("onSelectImage",e)},onSelectMultipleImage:function(e){this.dataImagesLocal=this.dataImagesLocal.map(function(t){return e.id===t.id&&(t.selected=!t.selected),t}),this.multipleSelected=this.dataImagesLocal.filter(function(e){return!!e.selected}),this.$emit("onSelectMultipleImage",this.multipleSelected)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueSelectImage"},[n("ul",{staticClass:"VueSelectImage__wrapper"},e._l(e.dataImagesLocal,function(t,r){return n("li",{key:r,staticClass:"VueSelectImage__item"},[e.isMultiple?e._e():n("div",{staticClass:"VueSelectImage__thumbnail",class:{"VueSelectImage__thumbnail--selected":e.singleSelected.id===t.id},on:{click:function(n){e.onSelectImage(t)}}},[n("img",{staticClass:"VueSelectImage__img",attrs:{src:t.src,alt:t.alt}})]),e._v(" "),e.isMultiple?n("div",{staticClass:"VueSelectImage__thumbnail is--multiple",class:{"VueSelectImage__thumbnail--selected":t.selected},on:{click:function(n){e.onSelectMultipleImage(t)}}},[n("img",{staticClass:"VueSelectImage__img",attrs:{src:t.src,alt:t.alt}})]):e._e()])}))])},a=[],i={render:r,staticRenderFns:a};t.a=i}])});
//# sourceMappingURL=vue-select-image.js.map