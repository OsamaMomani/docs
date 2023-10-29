"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[16141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),c=a,y=m["".concat(p,".").concat(c)]||m[c]||k[c]||o;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"okp4d_keys",id:"version-v5.0.0/okp4d_keys",title:"okp4d_keys",description:"okp4d keys",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_keys.md",sourceDirName:".",slug:"/okp4d_keys",permalink:"/fr/commands/okp4d_keys",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_init",permalink:"/fr/commands/okp4d_init"},next:{title:"okp4d_keys_add",permalink:"/fr/commands/okp4d_keys_add"}},p={},l=[{value:"okp4d keys",id:"okp4d-keys",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:l};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-keys"},"okp4d keys"),(0,a.kt)("p",null,"Manage your application's keys"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Keyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key."),(0,a.kt)("p",null,"The keyring supports the following backends:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"os          Uses the operating system's default credentials store.\nfile        Uses encrypted file-based keystore within the app's configuration directory.\n            This keyring will request a password each time it is accessed, which may occur\n            multiple times in a single command resulting in repeated password prompts.\nkwallet     Uses KDE Wallet Manager as a credentials management application.\npass        Uses the pass command line utility to store and retrieve keys.\ntest        Stores keys insecurely to disk. It does not prompt for a password to be unlocked\n            and it should be use only for testing purposes.\n")),(0,a.kt)("p",null,"kwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:\nKWallet     ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KDE/kwallet"},"https://github.com/KDE/kwallet"),"\npass        ",(0,a.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"https://www.passwordstore.org/")),(0,a.kt)("p",null,"The pass backend requires GnuPG: ",(0,a.kt)("a",{parentName:"p",href:"https://gnupg.org/"},"https://gnupg.org/")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -h, --help                     help for keys\n      --home string              The application home directory (default "/home/john/.okp4d")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d"},"okp4d"),"\t - OKP4 Daemon \ud83d\udc79"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_add"},"okp4d keys add"),"\t - Add an encrypted private key (either newly generated or recovered), encrypt it, and save to ","<","name",">"," file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_delete"},"okp4d keys delete"),"\t - Delete the given keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_export"},"okp4d keys export"),"\t - Export private keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_import"},"okp4d keys import"),"\t - Import private keys into the local keybase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_list"},"okp4d keys list"),"\t - List all keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_list-key-types"},"okp4d keys list-key-types"),"\t - List all key types"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_migrate"},"okp4d keys migrate"),"\t - Migrate keys from amino to proto serialization format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_mnemonic"},"okp4d keys mnemonic"),"\t - Compute the bip39 mnemonic for some input entropy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_parse"},"okp4d keys parse"),"\t - Parse address from hex to bech32 and vice versa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_rename"},"okp4d keys rename"),"\t - Rename an existing key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_keys_show"},"okp4d keys show"),"\t - Retrieve key information by name or address")))}k.isMDXComponent=!0}}]);