_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=a.props[u],l=r[u]||new Set;l.has(d)?o=!1:(l.add(d),r[u]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var v=p;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},G98f:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),a=n("vRNQ"),o=n.n(a),i=n("q1tI");function c(){var e=Object(i.useState)(""),t=e[0],n=e[1];return Object(r.jsx)(i.Fragment,{children:Object(r.jsxs)("div",{className:"".concat(o.a.container," container-fluid ").concat("tapchange"==t?o.a.tapchange:""),onClick:function(){n(""===t?"tapchange":"")},children:[Object(r.jsx)("div",{children:Object(r.jsxs)("h1",{className:o.a.homepageheading,children:[Object(r.jsxs)("div",{className:o.a.hoverlink,id:o.a.homehead1,children:[Object(r.jsx)("div",{children:"Hello."}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"/about",children:"About"})})]}),Object(r.jsxs)("div",{style:{color:"red"},className:o.a.hoverlink,id:o.a.homehead2,children:[Object(r.jsx)("div",{children:"I am"}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"#",children:"Work"})})]}),Object(r.jsxs)("div",{style:{color:"red"},className:o.a.hoverlink,id:o.a.homehead3,children:[Object(r.jsx)("div",{children:"Aakash"}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"/contact",children:"Contact"})})]})]})}),Object(r.jsx)("div",{className:o.a.tapindicaton,children:"Tap anywhere"})]})})}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("nKUr"),a=n("q1tI"),o=n("oTOh"),i=n("vRNQ"),c=n.n(i);function s(){return Object(r.jsx)(a.Fragment,{children:Object(r.jsxs)("div",{className:"".concat(c.a.container," container-fluid"),children:[Object(r.jsx)("div",{style:{minHeight:"50vh"},children:Object(r.jsxs)("h2",{className:c.a.heading,children:[Object(r.jsx)("div",{children:"I design & build"}),Object(r.jsx)("div",{children:"digital products"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{className:c.a.subheading,children:"About"}),Object(r.jsxs)("span",{className:c.a.paragraph,children:[Object(r.jsx)("p",{children:"Hi, I'm Aakash. I am a MERN stack developer. I have experience working with a startup. I write clean and maintaiable code.  "}),Object(r.jsx)("p",{children:"I don't like to define myself by the work I have done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interseting things that matter."})]})]})]})})}function u(){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(s,{})]})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("nKUr"),a=n("q1tI"),o=(n("8Kt/"),n("oTOh")),i=n("G98f");n("Juyh"),n("ALdH");function c(){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(i.a,{})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,4,1,3]]]);