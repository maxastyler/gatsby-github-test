(self.webpackChunkgatsby_github_test=self.webpackChunkgatsby_github_test||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function u(t,r,c){return n()?(e.exports=u=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.default=e.exports,e.exports.__esModule=!0),u.apply(null,arguments)}e.exports=u,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),u=r(379),c=r(8206);e.exports=function(e){return o(e)||n(e)||u(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1274:function(e,t,r){var o=r(1048);e.exports={MDXRenderer:o}},1048:function(e,t,r){var o=r(9100),n=r(319),u=r(9713),c=r(7316),s=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=r(7294),f=r(4983).mdx,i=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,s),p=i(t),x=a.useMemo((function(){if(!r)return null;var e=l({React:a,mdx:f},p),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return a.createElement(x,l({},u))}},8917:function(e,t,r){"use strict";r.r(t);var o=r(5444),n=r(1274),u=r(7294);t.default=function(e){var t=e.data;return u.createElement("div",null,u.createElement(o.rU,{to:"/blog"},"blog"),u.createElement("h1",null,t.mdx.frontmatter.title),u.createElement(n.MDXRenderer,null,t.mdx.body))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-88d21c09c6d63745cb05.js.map