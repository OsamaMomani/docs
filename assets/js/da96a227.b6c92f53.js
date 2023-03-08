"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[80029],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={},s="PageInfo Schema",l={unversionedId:"cw-storage-responses-objectsresponse-definitions-pageinfo",id:"cw-storage-responses-objectsresponse-definitions-pageinfo",title:"PageInfo Schema",description:"PageInfo is the page information returned for paginated queries.",source:"@site/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo.md",sourceDirName:".",slug:"/cw-storage-responses-objectsresponse-definitions-pageinfo",permalink:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-start_cursor"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/cw-storage-responses-objectsresponse-definitions-uint128"}},c={},d=[{value:"PageInfo Type",id:"pageinfo-type",level:2},{value:"end_cursor",id:"end_cursor",level:2},{value:"end_cursor Type",id:"end_cursor-type",level:3},{value:"has_next_page",id:"has_next_page",level:2},{value:"has_next_page Type",id:"has_next_page-type",level:3},{value:"has_previous_page",id:"has_previous_page",level:2},{value:"has_previous_page Type",id:"has_previous_page-type",level:3},{value:"start_cursor",id:"start_cursor",level:2},{value:"start_cursor Type",id:"start_cursor-type",level:3}],u={toc:d};function f(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pageinfo-schema"},"PageInfo Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/objects/definitions/PageInfo\n")),(0,i.kt)("p",null,"PageInfo is the page information returned for paginated queries."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(55804).Z,title:"open original schema"},"cw-storage.json*"))))),(0,i.kt)("h2",{id:"pageinfo-type"},"PageInfo Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo"},"PageInfo"),")"),(0,i.kt)("h1",{id:"pageinfo-properties"},"PageInfo Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#end_cursor"},"end","_","cursor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-end_cursor",title:"undefined#/responses/objects/definitions/PageInfo/properties/end_cursor"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#has_next_page"},"has","_","next","_","page")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-has_next_page",title:"undefined#/responses/objects/definitions/PageInfo/properties/has_next_page"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#has_previous_page"},"has","_","previous","_","page")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-has_previous_page",title:"undefined#/responses/objects/definitions/PageInfo/properties/has_previous_page"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#start_cursor"},"start","_","cursor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-start_cursor",title:"undefined#/responses/objects/definitions/PageInfo/properties/start_cursor"},"cw-storage"))))),(0,i.kt)("h2",{id:"end_cursor"},"end","_","cursor"),(0,i.kt)("p",null,"The cursor to the previous page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"end_cursor")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-end_cursor",title:"undefined#/responses/objects/definitions/PageInfo/properties/end_cursor"},"cw-storage")))),(0,i.kt)("h3",{id:"end_cursor-type"},"end","_","cursor Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h2",{id:"has_next_page"},"has","_","next","_","page"),(0,i.kt)("p",null,"Tells if there is a next page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"has_next_page")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-has_next_page",title:"undefined#/responses/objects/definitions/PageInfo/properties/has_next_page"},"cw-storage")))),(0,i.kt)("h3",{id:"has_next_page-type"},"has","_","next","_","page Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h2",{id:"has_previous_page"},"has","_","previous","_","page"),(0,i.kt)("p",null,"Tells if there is a previous page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"has_previous_page")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-has_previous_page",title:"undefined#/responses/objects/definitions/PageInfo/properties/has_previous_page"},"cw-storage")))),(0,i.kt)("h3",{id:"has_previous_page-type"},"has","_","previous","_","page Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h2",{id:"start_cursor"},"start","_","cursor"),(0,i.kt)("p",null,"The cursor to the next page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"start_cursor")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-start_cursor",title:"undefined#/responses/objects/definitions/PageInfo/properties/start_cursor"},"cw-storage")))),(0,i.kt)("h3",{id:"start_cursor-type"},"start","_","cursor Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")))}f.isMDXComponent=!0},55804:function(e,t,n){t.Z=n.p+"assets/files/cw-storage-821bbbe12acf8425e218c68e57f61d3d.json"}}]);