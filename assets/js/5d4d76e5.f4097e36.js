"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[1313],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(d,s(s({ref:t},l),{},{components:n})):a.createElement(d,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={},p="README",c={unversionedId:"README",id:"README",title:"README",description:"Top-level Schemas",source:"@site/contracts/README.md",sourceDirName:".",slug:"/",permalink:"/contracts/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",next:{title:"BreakStone Schema",permalink:"/contracts/cw-law-stone-executemsg-oneof-breakstone"}},l={},m=[{value:"Top-level Schemas",id:"top-level-schemas",level:2},{value:"Other Schemas",id:"other-schemas",level:2},{value:"Objects",id:"objects",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Version Note",id:"version-note",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"readme"},"README"),(0,i.kt)("h2",{id:"top-level-schemas"},"Top-level Schemas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone",title:"CW Law StoneOverviewThe cw-law-stone smart contract aims to provide GaaS (i"},"cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"-"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample",title:"CW Logic SampleSample contract to query the OKP4 logic module"},"cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"-"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage",title:"CW StorageOverviewThe cw-storage smart contract enables the storage of arbitrary objects in any Cosmos blockchains using the CosmWasm framework"},"cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"-"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template",title:"CW TemplateBase smart contract to start coding into the blockchain \ud83d\ude80"},"cw-template")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"-")))),(0,i.kt)("h2",{id:"other-schemas"},"Other Schemas"),(0,i.kt)("h3",{id:"objects"},"Objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-querymsg-oneof-ask",title:"If not broken, ask the logic module the provided query with the law program loaded"},"Ask")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-querymsg-oneof-ask",title:"Ask returns the evaluation of the query using the program context through the logic module"},"Ask")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse"},"AskResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse"},"AskResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-bucket",title:"Bucket returns the bucket information"},"Bucket")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-bucketresponse",title:"BucketResponse is the response of the Bucket query"},"BucketResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/bucket"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-forgetobject",title:"ForgetObject first unpin the object from the bucket for the considered sender, then remove it from the storage if it is not pinned anymore"},"ForgetObject")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-querymsg-oneof-getcount",title:"GetCount returns the current count as a json-encoded number"},"GetCount")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-responses-getcountresponse",title:"We define a custom struct for each query response"},"GetCountResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/get_count"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-executemsg-oneof-increment",title:"Execute an increment message"},"Increment")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-instantiatemsg",title:"Instantiate message"},"InstantiateMsg")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-instantiatemsg",title:"Instantiate messages"},"InstantiateMsg")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-instantiatemsg",title:"Instantiate messages"},"InstantiateMsg")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-instantiatemsg",title:"Instantiate messages"},"InstantiateMsg")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-object",title:"Object returns the object information with the given id"},"Object")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objectdata",title:"ObjectData returns the content of the object with the given id"},"ObjectData")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objectpins",title:"ObjectPins returns the list of addresses that pinned the object with the given id with support for pagination"},"ObjectPins")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectpinsresponse",title:"ObjectPinsResponse is the response of the GetObjectPins query"},"ObjectPinsResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/object_pins"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectresponse",title:"ObjectResponse is the response of the Object query"},"ObjectResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-objectresponse",title:"ObjectResponse is the response of the Object query"},"ObjectResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/objects/definitions/ObjectResponse"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objects",title:"Objects returns the list of objects in the bucket with support for pagination"},"Objects")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse",title:"ObjectsResponse is the response of the Objects query"},"ObjectsResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/objects"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectpinsresponse-definitions-pageinfo",title:"PageInfo is the page information returned for paginated queries"},"PageInfo")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/object_pins/definitions/PageInfo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-definitions-pageinfo",title:"PageInfo is the page information returned for paginated queries"},"PageInfo")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/objects/definitions/PageInfo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-pinobject",title:"PinObject pins the object in the bucket for the considered sender"},"PinObject")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-programresponse",title:"ProgramResponse carry elements to locate the program in a cw-storage contract"},"ProgramResponse")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/program"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-executemsg-oneof-reset",title:"Reset counter to the specified value"},"Reset")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject",title:"StoreObject store an object to the bucket and make the sender the owner of the object"},"StoreObject")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-unpinobject",title:"UnpinObject unpins the object in the bucket for the considered sender"},"UnpinObject")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-querymsg-oneof-ask-properties-ask"},"Untitled object in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0/properties/ask"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-answer"},"Untitled object in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-result"},"Untitled object in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Result"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-substitution"},"Untitled object in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Substitution"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-term"},"Untitled object in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Term"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-querymsg-oneof-ask-properties-ask"},"Untitled object in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0/properties/ask"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-answer"},"Untitled object in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-result"},"Untitled object in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Result"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-substitution"},"Untitled object in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Substitution"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-term"},"Untitled object in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Term"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-instantiatemsg-definitions-bucketlimits",title:"BucketLimits is the type of the limits of a bucket"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate/definitions/BucketLimits"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-instantiatemsg-definitions-paginationconfig",title:"PaginationConfig is the type carrying configuration for paginated queries"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/instantiate/definitions/PaginationConfig"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/0/properties/store_object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-forgetobject-properties-forget_object"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/1/properties/forget_object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-pinobject-properties-pin_object"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/2/properties/pin_object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-unpinobject-properties-unpin_object"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/3/properties/unpin_object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-bucket-properties-bucket"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0/properties/bucket"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-object-properties-object"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/1/properties/object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objects-properties-objects"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/2/properties/objects"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objectdata-properties-object_data"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/3/properties/object_data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-querymsg-oneof-objectpins-properties-object_pins"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/4/properties/object_pins"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-bucketresponse-definitions-bucketlimits",title:"BucketLimits is the type of the limits of a bucket"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/bucket/definitions/BucketLimits"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-bucketresponse-definitions-paginationconfig",title:"PaginationConfig is the type carrying configuration for paginated queries"},"Untitled object in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/bucket/definitions/PaginationConfig"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-executemsg-oneof-increment-properties-increment"},"Untitled object in cw-template")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/0/properties/increment"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-executemsg-oneof-reset-properties-reset"},"Untitled object in cw-template")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/execute/oneOf/1/properties/reset"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-template-querymsg-oneof-getcount-properties-get_count"},"Untitled object in cw-template")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/query/oneOf/0/properties/get_count")))),(0,i.kt)("h3",{id:"arrays"},"Arrays"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-answer-properties-results"},"Untitled array in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer/properties/results"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-answer-properties-variables"},"Untitled array in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer/properties/variables"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-result-properties-substitutions"},"Untitled array in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Result/properties/substitutions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-law-stone-responses-askresponse-definitions-term-properties-arguments"},"Untitled array in cw-law-stone")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Term/properties/arguments"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-answer-properties-results"},"Untitled array in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer/properties/results"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-answer-properties-variables"},"Untitled array in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Answer/properties/variables"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-result-properties-substitutions"},"Untitled array in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Result/properties/substitutions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-logic-sample-responses-askresponse-definitions-term-properties-arguments"},"Untitled array in cw-logic-sample")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/ask/definitions/Term/properties/arguments"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectpinsresponse-properties-data",title:"The list of addresses that pinned the object"},"Untitled array in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/object_pins/properties/data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/cw-storage-responses-objectsresponse-properties-data",title:"The list of objects in the bucket"},"Untitled array in cw-storage")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined#/responses/objects/properties/data")))),(0,i.kt)("h2",{id:"version-note"},"Version Note"),(0,i.kt)("p",null,"The schemas linked above follow the JSON Schema Spec version: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://json-schema.org/draft-07/schema#")))}k.isMDXComponent=!0}}]);