_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("nKUr"),r=n("q1tI"),c=n("oTOh"),o=n("vRNQ"),i=n.n(o);function s(){return Object(a.jsx)(r.Fragment,{children:Object(a.jsxs)("div",{className:"".concat(i.a.container," container-fluid"),children:[Object(a.jsx)("div",{style:{minHeight:"50vh"},children:Object(a.jsxs)("h2",{className:i.a.heading,children:[Object(a.jsx)("div",{children:"I design & build"}),Object(a.jsx)("div",{children:"digital products"})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{className:i.a.subheading,children:"About"}),Object(a.jsxs)("span",{className:i.a.paragraph,children:[Object(a.jsx)("p",{children:"Hi, I'm Aakash. I am a MERN stack developer. I have experience working with a startup. I write clean and maintaiable code.  "}),Object(a.jsx)("p",{children:"I don't like to define myself by the work I have done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interseting things that matter."})]})]})]})})}function l(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(c.a,{}),Object(a.jsx)(s,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c,o=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=c||(u?c=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,a){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",c=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,i.resolveHref)(r,e.as):o||c}}),[r,e.href,e.as]),l=c.href,h=c.as,b=e.children,m=e.replace,v=e.shallow,j=e.scroll,_=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var g=o.Children.only(b),O=g&&"object"===typeof g&&g.ref,x=o.default.useRef(),y={ref:o.default.useCallback((function(e){(x.current&&(x.current(),x.current=void 0),t&&u&&e&&e.tagName&&(0,i.isLocalURL)(l))&&(d[l+"%"+h]||(x.current=f(e,(function(){p(n,l,h,{locale:"undefined"!==typeof _?_:n&&n.locale})}))));O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[t,O,l,h,n,_]),onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:s}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,h,m,v,j,_)}};return t&&(y.onMouseEnter=function(e){(0,i.isLocalURL)(l)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),p(n,l,h,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(y.href=(0,i.addBasePath)((0,i.addLocale)(h,"undefined"!==typeof _?_:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(g,y)};t.default=h},oTOh:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("nKUr"),r=n("rePB"),c=n("zLVn");var o=n("nOHt"),i=n("YFqc"),s=n.n(i),l=n("q1tI"),u=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.children,n=e.activeClassName,r=function(e,t){if(null==e)return{};var n,a,r=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["children","activeClassName"]),i=Object(o.useRouter)().asPath,d=l.Children.only(t),p=d.props.className||"",h=i===r.href||i===r.as?"".concat(p," ").concat(n).trim():p;return Object(a.jsx)(s.a,f(f({},r),{},{children:u.a.cloneElement(d,{className:h||null})}))};function h(){return Object(a.jsxs)("nav",{class:"navbar fixed-top navbar-expand-lg navbar-dark bg-black",children:[Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(p,{activeClassName:"active",href:"/",children:Object(a.jsx)("a",{className:"nav-link",children:"Home"})})}),Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(p,{activeClassName:"active",href:"/about",children:Object(a.jsx)("a",{className:"nav-link",children:"About"})})}),Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(p,{activeClassName:"active",href:"/contact",children:Object(a.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",homepageheading:"Home_homepageheading__3y8Vh",landinganimation:"Home_landinganimation__pTj7O",heading:"Home_heading__2Im17",aboutanimation:"Home_aboutanimation__2Ppc2",headingcontact:"Home_headingcontact__t9CSt",contactanimation:"Home_contactanimation__3PcF1",hoverlink:"Home_hoverlink__2Fm1D",subheading:"Home_subheading__1Ovix",paragraph:"Home_paragraph__Dkmfn",links:"Home_links__1-GKm",contactlinks:"Home_contactlinks__QVOd7",navbar:"Home_navbar__14ZRa",active:"Home_active__32w0w",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["rB5V",0,2,1]]]);