_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("nKUr"),r=n("q1tI"),o=n("oTOh"),c=n("vRNQ"),i=n.n(c);function s(){return Object(a.jsx)(r.Fragment,{children:Object(a.jsxs)("div",{className:"".concat(i.a.container," container-fluid"),children:[Object(a.jsx)("div",{style:{minHeight:"50vh"},children:Object(a.jsxs)("h2",{className:i.a.heading,children:[Object(a.jsx)("div",{children:"I design & build"}),Object(a.jsx)("div",{children:"digital products"})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{className:i.a.subheading,children:"About"}),Object(a.jsxs)("span",{className:i.a.paragraph,children:[Object(a.jsx)("p",{children:"Hi, I'm Aakash. I am a MERN stack developer. I have experience working with a startup. I write clean and maintaiable code.  "}),Object(a.jsx)("p",{children:"I don't like to define myself by the work I have done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interseting things that matter."})]})]})]})})}function l(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(o.a,{}),Object(a.jsx)(s,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,c=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,a){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",o=c.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):c||o}}),[r,e.href,e.as]),l=o.href,p=o.as,m=e.children,b=e.replace,_=e.shallow,v=e.scroll,j=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var g=c.Children.only(m),O=g&&"object"===typeof g&&g.ref,y=c.default.useRef(),x={ref:c.default.useCallback((function(e){(y.current&&(y.current(),y.current=void 0),t&&u&&e&&e.tagName&&(0,i.isLocalURL)(l))&&(d[l+"%"+p]||(y.current=f(e,(function(){h(n,l,p,{locale:"undefined"!==typeof j?j:n&&n.locale})}))));O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[t,O,l,p,n,j]),onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,b,_,v,j)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(l)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),h(n,l,p,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(x.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof j?j:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(g,x)};t.default=p},oTOh:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("nKUr"),r=n("rePB"),o=n("zLVn");var c=n("nOHt"),i=n("YFqc"),s=n.n(i),l=n("q1tI"),u=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.activeClassName,r=function(e,t){if(null==e)return{};var n,a,r=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["children","activeClassName"]),i=Object(c.useRouter)().asPath,d=l.Children.only(t),h=d.props.className||"",p=i===r.href||i===r.as?"".concat(h," ").concat(n).trim():h;return Object(a.jsx)(s.a,f(f({},r),{},{children:u.a.cloneElement(d,{className:p||null})}))};function p(){return Object(a.jsxs)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-black",children:[Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(h,{activeClassName:"active",href:"/",children:Object(a.jsx)("a",{className:"nav-link",children:"Home"})})}),Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(h,{activeClassName:"active",href:"/about",children:Object(a.jsx)("a",{className:"nav-link",children:"About"})})}),Object(a.jsx)("li",{className:"nav-item mx-2 px-2",children:Object(a.jsx)(h,{activeClassName:"active",href:"/contact",children:Object(a.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",homepageheading:"Home_homepageheading__3y8Vh",homehead1:"Home_homehead1__3uoCK",landinganimation:"Home_landinganimation__pTj7O",homehead2:"Home_homehead2__JdzR8",homehead3:"Home_homehead3__2y1pX",heading:"Home_heading__2Im17",aboutanimation:"Home_aboutanimation__2Ppc2",headingcontact:"Home_headingcontact__t9CSt",contactanimation:"Home_contactanimation__3PcF1",hoverlink:"Home_hoverlink__2Fm1D",subheading:"Home_subheading__1Ovix",paragraph:"Home_paragraph__Dkmfn",links:"Home_links__1-GKm",contactlinks:"Home_contactlinks__QVOd7",navbar:"Home_navbar__14ZRa",active:"Home_active__32w0w",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["rB5V",0,2,1]]]);