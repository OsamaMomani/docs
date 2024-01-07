"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[54257],{1685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={},o=void 0,a={id:"okp4d_keys_add",title:"okp4d_keys_add",description:"okp4d keys add",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_keys_add.md",sourceDirName:".",slug:"/okp4d_keys_add",permalink:"/fr/commands/okp4d_keys_add",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys",permalink:"/fr/commands/okp4d_keys"},next:{title:"okp4d_keys_delete",permalink:"/fr/commands/okp4d_keys_delete"}},d={},l=[{value:"okp4d keys add",id:"okp4d-keys-add",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"okp4d-keys-add",children:"okp4d keys add"}),"\n",(0,r.jsx)(n.p,{children:"Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file"}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Derive a new private key and encrypt to disk.\nOptionally specify a BIP39 mnemonic, a BIP39 passphrase to further secure the mnemonic,\nand a bip32 HD path to derive a specific account. The key will be stored under the given name\nand encrypted with the given password. The only input that is required is the encryption password."}),"\n",(0,r.jsx)(n.p,{children:"If run with -i, it will prompt the user for BIP44 path, BIP39 mnemonic, and passphrase.\nThe flag --recover allows one to recover a key from a seed passphrase.\nIf run with --dry-run, a key would be generated (or recovered) but not stored to the\nlocal keystore.\nUse the --pubkey flag to add arbitrary public keys to the keystore for constructing\nmultisig transactions."}),"\n",(0,r.jsx)(n.p,{children:"You can create and store a multisig key by passing the list of key names stored in a keyring\nand the minimum number of signatures required through --multisig-threshold. The keys are\nsorted by address, unless the flag --nosort is set.\nExample:"}),"\n",(0,r.jsx)(n.p,{children:'keys add mymultisig --multisig "keyname1,keyname2,keyname3" --multisig-threshold 2'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"okp4d keys add <name> [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"      --account uint32           Account number for HD derivation (less than equal 2147483647)\n      --coin-type uint32         coin type number for HD derivation (default 118)\n      --dry-run                  Perform action, but don't add key to local keystore\n      --hd-path string           Manual HD Path derivation (overrides BIP44 config)\n  -h, --help                     help for add\n      --index uint32             Address index number for HD derivation (less than equal 2147483647)\n  -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic\n      --key-type string          Key signing algorithm to generate keys for (default \"secp256k1\")\n      --ledger                   Store a local reference to a private key on a Ledger device\n      --multisig strings         List of key names stored in keyring to construct a public legacy multisig key\n      --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)\n      --no-backup                Don't print out seed phrase (if others are watching the terminal)\n      --nosort                   Keys passed to --multisig are taken in the order they're supplied\n      --pubkey string            Parse a public key in JSON format and saves key info to <name> file.\n      --recover                  Provide seed phrase to recover existing key instead of creating\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --home string              The application home directory (default "/home/john/.okp4d")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/fr/commands/next/okp4d_keys",children:"okp4d keys"}),"\t - Manage your application's keys"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);