(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(16),c=t.n(o),r=(t(26),t(3)),s=(t(28),t(8));function i(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:function(){e.toggleMode(null)},type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Toggle Mode")))))}function m(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#062655"}},n.a.createElement("h1",{className:"mb-4"},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#062655"},id:"myBox",rows:"8"})),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){c(""),e.showAlert("Text cleared","success")}},"Clear"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Copied to clipboard","success")}},"Copy"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra spaces removed","success")}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#062655"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,o.split(/\s + /).filter(function(e){return 0!==e.length}).length," words, ",o.length," characters"),n.a.createElement("p",null,.008*o.split(/\s + /).filter(function(e){return 0!==e.length}).length," minutes used"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Nothing to preview!")))}function d(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type))," : ",e.alert.msg)))}function u(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",null,n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyze Your text"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free to use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Browser Compatible"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))))}i.defaultProps={title:"Set title here",aboutText:"About"};var h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(i,{title:"TextUtils",mode:t,toggleMode:function(e){"light"===t?(o("dark"),document.body.style.backgroundColor="#062655",E("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))}}),n.a.createElement(d,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(u,{mode:t})}),n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(m,{heading:"Try TextUtils - Word Counter, Character Counter, Remove extra spaces",showAlert:E,mode:t})})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()}},[[17,3,2]]]);
//# sourceMappingURL=main.0fd72f55.chunk.js.map