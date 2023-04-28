"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[26067],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73940:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),p=["components"],o={},l="DescribeQuery Schema",u={unversionedId:"okp4-cognitarium-querymsg-definitions-describequery",id:"okp4-cognitarium-querymsg-definitions-describequery",title:"DescribeQuery Schema",description:"Represents a DESCRIBE query over the triple store, allowing to retrieve a description of a resource as a set of triples serialized in a specific format.",source:"@site/contracts/okp4-cognitarium-querymsg-definitions-describequery.md",sourceDirName:".",slug:"/okp4-cognitarium-querymsg-definitions-describequery",permalink:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled array in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-where"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-querymsg-definitions-iri-oneof-full-properties-full"}},s={},c=[{value:"DescribeQuery Type",id:"describequery-type",level:2},{value:"prefixes",id:"prefixes",level:2},{value:"prefixes Type",id:"prefixes-type",level:3},{value:"resource",id:"resource",level:2},{value:"resource Type",id:"resource-type",level:3},{value:"where",id:"where",level:2},{value:"where Type",id:"where-type",level:3}],d={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"describequery-schema"},"DescribeQuery Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/query/definitions/DescribeQuery\n")),(0,a.kt)("p",null,"Represents a DESCRIBE query over the triple store, allowing to retrieve a description of a resource as a set of triples serialized in a specific format."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:r(38426).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,a.kt)("h2",{id:"describequery-type"},"DescribeQuery Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery"},"DescribeQuery"),")"),(0,a.kt)("h1",{id:"describequery-properties"},"DescribeQuery Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#prefixes"},"prefixes")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-prefixes",title:"undefined#/query/definitions/DescribeQuery/properties/prefixes"},"okp4-cognitarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#resource"},"resource")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-resource",title:"undefined#/query/definitions/DescribeQuery/properties/resource"},"okp4-cognitarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#where"},"where")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-where",title:"undefined#/query/definitions/DescribeQuery/properties/where"},"okp4-cognitarium"))))),(0,a.kt)("h2",{id:"prefixes"},"prefixes"),(0,a.kt)("p",null,"The prefixes used in the query."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prefixes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: unknown","[","]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-prefixes",title:"undefined#/query/definitions/DescribeQuery/properties/prefixes"},"okp4-cognitarium")))),(0,a.kt)("h3",{id:"prefixes-type"},"prefixes Type"),(0,a.kt)("p",null,"unknown","[","]"),(0,a.kt)("h2",{id:"resource"},"resource"),(0,a.kt)("p",null,"The resource to describe given as a variable or a node."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resource")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-resource"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-resource",title:"undefined#/query/definitions/DescribeQuery/properties/resource"},"okp4-cognitarium")))),(0,a.kt)("h3",{id:"resource-type"},"resource Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-resource"},"Details"),")"),(0,a.kt)("p",null,"all of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-resource-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,a.kt)("h2",{id:"where"},"where"),(0,a.kt)("p",null,"The WHERE clause. This clause is used to specify the resource identifier to describe using variable bindings."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"where")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: unknown","[","]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-describequery-properties-where",title:"undefined#/query/definitions/DescribeQuery/properties/where"},"okp4-cognitarium")))),(0,a.kt)("h3",{id:"where-type"},"where Type"),(0,a.kt)("p",null,"unknown","[","]"))}m.isMDXComponent=!0},38426:function(e,t,r){t.Z=r.p+"assets/files/okp4-cognitarium-1c6ce27ffd6a7376fe8b061a79d3192d.json"}}]);