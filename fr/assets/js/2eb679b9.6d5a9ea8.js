"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[18407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),k=s(r),u=o,y=k["".concat(p,".").concat(u)]||k[u]||c[u]||i;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},59709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},l=void 0,a={unversionedId:"okp4d_keys_delete",id:"version-v5.0.0/okp4d_keys_delete",title:"okp4d_keys_delete",description:"okp4d keys delete",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_keys_delete.md",sourceDirName:".",slug:"/okp4d_keys_delete",permalink:"/fr/commands/okp4d_keys_delete",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys_add",permalink:"/fr/commands/okp4d_keys_add"},next:{title:"okp4d_keys_export",permalink:"/fr/commands/okp4d_keys_export"}},p={},s=[{value:"okp4d keys delete",id:"okp4d-keys-delete",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-keys-delete"},"okp4d keys delete"),(0,o.kt)("p",null,"Delete the given keys"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Delete keys from the Keybase backend."),(0,o.kt)("p",null,"Note that removing offline or ledger keys will remove\nonly the public key references stored locally, i.e.\nprivate keys stored in a ledger device cannot be deleted with the CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"okp4d keys delete &lt;name&gt;... [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -f, --force   Remove the key unconditionally without asking for the passphrase. Deprecated.\n  -h, --help    help for delete\n  -y, --yes     Skip confirmation prompt when deleting offline or ledger key references\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --home string              The application home directory (default "/home/john/.okp4d")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys"},"okp4d keys"),"\t - Manage your application's keys")))}c.isMDXComponent=!0}}]);