"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[63562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=l,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={},s=void 0,i={unversionedId:"predicates",id:"predicates",title:"predicates",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/predicates.md",sourceDirName:".",slug:"/predicates",permalink:"/fr/predicates/predicates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},o={},c=[{value:"bank_balances/2",id:"bank_balances2",level:2},{value:"bank_locked_balances/2",id:"bank_locked_balances2",level:2},{value:"bank_spendable_balances/2",id:"bank_spendable_balances2",level:2},{value:"bech32_address/2",id:"bech32_address2",level:2},{value:"block_height/1",id:"block_height1",level:2},{value:"block_time/1",id:"block_time1",level:2},{value:"chain_id/1",id:"chain_id1",level:2},{value:"did_components/2",id:"did_components2",level:2},{value:"ecdsa_verify/4",id:"ecdsa_verify4",level:2},{value:"eddsa_verify/4",id:"eddsa_verify4",level:2},{value:"hex_bytes/2",id:"hex_bytes2",level:2},{value:"json_prolog/2",id:"json_prolog2",level:2},{value:"open/4",id:"open4",level:2},{value:"read_string/3",id:"read_string3",level:2},{value:"sha_hash/2",id:"sha_hash2",level:2},{value:"source_file/1",id:"source_file1",level:2},{value:"uri_encoded/3",id:"uri_encoded3",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"predicates-documentation"},"Predicates documentation"),(0,l.kt)("h2",{id:"bank_balances2"},"bank_balances/2"),(0,l.kt)("p",null,"bank_balances/2 is a predicate which unifies the given terms with the list of balances ","(","coins",")"," of the given account."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"bank_balances(?Account, ?Balances)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Account represents the account address ","(","in Bech32 format",")","."),(0,l.kt)("li",{parentName:"ul"},"Balances represents the balances of the account as a list of pairs of coin denomination and amount.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the balances of the account.\n- bank_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_balances(X, Y).\n\n# Query the first balance of the given account by unifying the denomination and amount with the given terms.\n- bank_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n")),(0,l.kt)("h2",{id:"bank_locked_balances2"},"bank_locked_balances/2"),(0,l.kt)("p",null,"bank_locked_balances/2 is a predicate which unifies the given terms with the list of locked coins of the given account."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"bank_locked_balances(?Account, ?Balances)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Account represents the account address ","(","in Bech32 format",")","."),(0,l.kt)("li",{parentName:"ul"},"Balances represents the locked balances of the account as a list of pairs of coin denomination and amount.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the locked coins of the account.\n- bank_locked_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the locked balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_locked_balances(X, Y).\n\n# Query the first locked balances of the given account by unifying the denomination and amount with the given terms.\n- bank_locked_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n")),(0,l.kt)("h2",{id:"bank_spendable_balances2"},"bank_spendable_balances/2"),(0,l.kt)("p",null,"bank_spendable_balances/2 is a predicate which unifies the given terms with the list of spendable coins of the given account."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"bank_spendable_balances(?Account, ?Balances)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Account represents the account address ","(","in Bech32 format",")","."),(0,l.kt)("li",{parentName:"ul"},"Balances represents the spendable balances of the account as a list of pairs of coin denomination and amount.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the spendable balances of the account.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the spendable balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_spendable_balances(X, Y).\n\n# Query the first spendable balances of the given account by unifying the denomination and amount with the given terms.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n")),(0,l.kt)("h2",{id:"bech32_address2"},"bech32_address/2"),(0,l.kt)("p",null,"bech32_address/2 is a predicate that convert a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table"},"bech32")," encoded string into ",(0,l.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Base64"},"base64")," bytes and give the address prefix, or convert a prefix ","(","HRP",")"," and ",(0,l.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Base64"},"base64")," encoded bytes to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table"},"bech32")," encoded string."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"bech32_address(-Address, +Bech32)\nbech32_address(+Address, -Bech32)\nbech32_address(+Address, +Bech32)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Address is a pair of the HRP ","(","Human","-","Readable Part",")"," which holds the address prefix and a list of integers ranging from 0 to 255 that represent the base64 encoded bech32 address string."),(0,l.kt)("li",{parentName:"ul"},"Bech32 is an Atom or string representing the bech32 encoded string address")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Convert the given bech32 address into base64 encoded byte by unify the prefix of given address (Hrp) and the\nbase64 encoded value (Address).\n- bech32_address(-(Hrp, Address), 'okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn').\n\n# Convert the given pair of HRP and base64 encoded address byte by unify the Bech32 string encoded value.\n- bech32_address(-('okp4', [163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]), Bech32).\n")),(0,l.kt)("h2",{id:"block_height1"},"block_height/1"),(0,l.kt)("p",null,"block_height/1 is a predicate which unifies the given term with the current block height."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"block_height(?Height)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Height represents the current chain height at the time of the query.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the current block height.\n- block_height(Height).\n")),(0,l.kt)("h2",{id:"block_time1"},"block_time/1"),(0,l.kt)("p",null,"block_time/1 is a predicate which unifies the given term with the current block time."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"block_time(?Time)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Time represents the current chain time at the time of the query.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the current block time.\n- block_time(Time).\n")),(0,l.kt)("h2",{id:"chain_id1"},"chain_id/1"),(0,l.kt)("p",null,"chain_id/1 is a predicate which unifies the given term with the current chain ID. The signature is:"),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"chain_id(?chain_id/1)\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chain_id/1 represents the current chain ID at the time of the query.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query the current chain ID.\n- chain_id(chain_id/1).\n")),(0,l.kt)("h2",{id:"did_components2"},"did_components/2"),(0,l.kt)("p",null,"did_components/2 is a predicate which breaks down a DID into its components according to the ",(0,l.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core"},"W3C DID")," specification."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"did_components(+DID, -Components) is det\ndid_components(-DID, +Components) is det\n")),(0,l.kt)("p",null,"where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DID represents DID URI, given as an Atom, compliant with ",(0,l.kt)("a",{parentName:"li",href:"https://w3c.github.io/did-core"},"W3C DID")," specification."),(0,l.kt)("li",{parentName:"ul"},"Components is a compound Term in the format did","(","Method, ID, Path, Query, Fragment",")",", aligned with the ",(0,l.kt)("a",{parentName:"li",href:"https://w3c.github.io/did-core/#did-syntax"},"DID syntax"),", where: Method is The method name, ID is The method","-","specific identifier, Path is the path component, Query is the query component and Fragment is The fragment component. For any component not present, its value will be null and thus will be left as an uninstantiated variable.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Decompose a DID into its components.\n- did_components('did:example:123456?versionId=1', did(Method, ID, Path, Query, Fragment)).\n\n# Reconstruct a DID from its components.\n- did_components(DID, did('example', '123456', _, 'versionId=1', _42)).\n")),(0,l.kt)("h2",{id:"ecdsa_verify4"},"ecdsa_verify/4"),(0,l.kt)("p",null,"ecdsa_verify/4 determines if a given signature is valid as per the ECDSA algorithm for the provided data, using the specified public key."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ecdsa_verify(+PubKey, +Data, +Signature, +Options), which is semi-deterministic.\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PubKey is the 33","-","byte compressed public key, as specified in section 4.3.6 of ANSI X9.62.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data is the hash of the signed message, which can be either an atom or a list of bytes.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Signature represents the ASN.1 encoded signature corresponding to the Data.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Options are additional configurations for the verification process. Supported options include: encoding","(","+","Format",")"," which specifies the encoding used for the data, and type","(","+","Alg",")"," which chooses the algorithm within the ECDSA family ","(","see below for details",")","."))),(0,l.kt)("p",null,"For Format, the supported encodings are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hex ","(","default",")",", the hexadecimal encoding represented as an atom."),(0,l.kt)("li",{parentName:"ul"},"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255.")),(0,l.kt)("p",null,"For Alg, the supported algorithms are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"secp256r1 ","(","default",")",": Also known as P","-","256 and prime256v1."),(0,l.kt)("li",{parentName:"ul"},"secp256k1: The Koblitz elliptic curve used in Bitcoin's public","-","key cryptography.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Verify a signature for hexadecimal data using the ECDSA secp256r1 algorithm.\n- ecdsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], encoding(hex))\n\n# Verify a signature for binary data using the ECDSA secp256k1 algorithm.\n- ecdsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(secp256k1)])\n")),(0,l.kt)("h2",{id:"eddsa_verify4"},"eddsa_verify/4"),(0,l.kt)("p",null,"eddsa_verify/4 determines if a given signature is valid as per the EdDSA algorithm for the provided data, using the specified public key."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"eddsa_verify(+PubKey, +Data, +Signature, +Options) is semi-det\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PubKey is the encoded public key as a list of bytes."),(0,l.kt)("li",{parentName:"ul"},"Data is the message to verify, represented as either a hexadecimal atom or a list of bytes. It's important that the message isn't pre","-","hashed since the Ed25519 algorithm processes messages in two passes when signing."),(0,l.kt)("li",{parentName:"ul"},"Signature represents the signature corresponding to the data, provided as a list of bytes."),(0,l.kt)("li",{parentName:"ul"},"Options are additional configurations for the verification process. Supported options include: encoding","(","+","Format",")"," which specifies the encoding used for the Data, and type","(","+","Alg",")"," which chooses the algorithm within the EdDSA family ","(","see below for details",")",".")),(0,l.kt)("p",null,"For Format, the supported encodings are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hex ","(","default",")",", the hexadecimal encoding represented as an atom."),(0,l.kt)("li",{parentName:"ul"},"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255.")),(0,l.kt)("p",null,"For Alg, the supported algorithms are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ed25519 ","(","default",")",": The EdDSA signature scheme using SHA","-","512 ","(","SHA","-","2",")"," and Curve25519.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Verify a signature for a given hexadecimal data.\n- eddsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], [encoding(hex), type(ed25519)])\n\n# Verify a signature for binary data.\n- eddsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(ed25519)])\n")),(0,l.kt)("h2",{id:"hex_bytes2"},"hex_bytes/2"),(0,l.kt)("p",null,"hex_bytes/2 is a predicate that unifies hexadecimal encoded bytes to a list of bytes."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"hex_bytes(?Hex, ?Bytes) is det\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hex is an Atom, string or list of characters in hexadecimal encoding."),(0,l.kt)("li",{parentName:"ul"},"Bytes is the list of numbers between 0 and 255 that represent the sequence of bytes.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Convert hexadecimal atom to list of bytes.\n- hex_bytes('2c26b46b68ffc68ff99b453c1d3041341342d706483bfa0f98a5e886266e7ae', Bytes).\n")),(0,l.kt)("h2",{id:"json_prolog2"},"json_prolog/2"),(0,l.kt)("p",null,"json_prolog/2 is a predicate that will unify a JSON string into prolog terms and vice versa."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"json_prolog(?Json, ?Term) is det\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Json is the string representation of the json"),(0,l.kt)("li",{parentName:"ul"},"Term is an Atom that would be unified by the JSON representation as Prolog terms.")),(0,l.kt)("p",null,"In addition, when passing Json and Term, this predicate return true if both result match."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'# JSON conversion to Prolog.\n- json_prolog(\'{"foo": "bar"}\', json([foo-bar])).\n')),(0,l.kt)("h2",{id:"open4"},"open/4"),(0,l.kt)("p",null,"open/4 is a predicate that unify a stream with a source sink on a virtual file system."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"open(+SourceSink, +Mode, ?Stream, +Options)\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SourceSink is an atom representing the source or sink of the stream. The atom typically represents a resource that can be opened, such as a URI. The URI scheme determines the type of resource that is opened."),(0,l.kt)("li",{parentName:"ul"},"Mode is an atom representing the mode of the stream ","(","read, write, append",")","."),(0,l.kt)("li",{parentName:"ul"},"Stream is the stream to be opened."),(0,l.kt)("li",{parentName:"ul"},"Options is a list of options.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# open/4 a stream from a cosmwasm query.\n# The Stream should be read as a string with a read_string/3 predicate, and then closed with the close/1 predicate.\n- open('cosmwasm:okp4-objectarium:okp412kgx?query=%7B%22object_data%22%3A%7B%...4dd539e3%22%7D%7D', 'read', Stream)\n")),(0,l.kt)("h2",{id:"read_string3"},"read_string/3"),(0,l.kt)("p",null,"read_string/3 is a predicate that reads characters from the provided Stream and unifies them with String. Users can optionally specify a maximum length for reading; if the stream reaches this length, the reading stops. If Length remains unbound, the entire Stream is read, and upon completion, Length is unified with the count of characters read."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"read_string(+Stream, ?Length, -String) is det\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stream is the input stream to read from."),(0,l.kt)("li",{parentName:"ul"},"Length is the optional maximum number of characters to read from the Stream. If unbound, denotes the full length of Stream."),(0,l.kt)("li",{parentName:"ul"},"String is the resultant string after reading from the Stream.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Given a file `foo.txt` that contains `Hello World`:\n\nfile_to_string(File, String, Length) :-\n\nopen(File, read, In),\nread_string(In, Length, String),\nclose(Stream).\n\n# It gives:\n?- file_to_string('path/file/foo.txt', String, Length).\n\nString = 'Hello World'\nLength = 11\n")),(0,l.kt)("h2",{id:"sha_hash2"},"sha_hash/2"),(0,l.kt)("p",null,"sha_hash/2 is a predicate that computes the Hash of the given Data."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"sha_hash(+Data, -Hash) is det\nsha_hash(+Data, +Hash) is det\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Data represents the data to be hashed with the SHA","-","256 algorithm."),(0,l.kt)("li",{parentName:"ul"},"Hash is the variable that will contain Hashed value of Data.")),(0,l.kt)("p",null,"Note: Due to the principles of the hash algorithm ","(","pre","-","image resistance",")",", this predicate can only compute the hash value from input data, and cannot compute the original input data from the hash value."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'# Compute the hash of the given data and unify it with the given Hash.\n- sha_hash("Hello OKP4", Hash).\n')),(0,l.kt)("h2",{id:"source_file1"},"source_file/1"),(0,l.kt)("p",null,"source_file/1 is a predicate that unify the given term with the currently loaded source file."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"source_file(?File).\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File represents a loaded source file.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"# Query all the loaded source files, in alphanumeric order.\n- source_file(File).\n\n# Query the given source file is loaded.\n- source_file('foo.pl').\n")),(0,l.kt)("h2",{id:"uri_encoded3"},"uri_encoded/3"),(0,l.kt)("p",null,"uri_encoded/3 is a predicate that unifies the given URI component with the given encoded or decoded string."),(0,l.kt)("p",null,"The signature is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"uri_encoded(+Component, +Decoded, -Encoded)\n")),(0,l.kt)("p",null,"Where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Component represents the component of the URI to be escaped. It can be the atom query, fragment, path or segment."),(0,l.kt)("li",{parentName:"ul"},"Decoded represents the decoded string to be escaped."),(0,l.kt)("li",{parentName:"ul"},"Encoded represents the encoded string.")),(0,l.kt)("p",null,"For more information on URI encoding, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3986#section-2.1"},"RFC 3986"),"."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'# Escape the given string to be used in the path component.\n- uri_encoded(path, "foo/bar", Encoded).\n\n# Unescape the given string to be used in the path component.\n- uri_encoded(path, Decoded, foo%2Fbar).\n')))}p.isMDXComponent=!0}}]);