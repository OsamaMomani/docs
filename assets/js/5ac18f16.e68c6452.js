"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[96895],{37668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),i=n(11151);const o={},s=void 0,r={id:"okp4d_tx_staking_create-validator",title:"okp4d_tx_staking_create-validator",description:"okp4d tx staking create-validator",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_staking_create-validator.md",sourceDirName:".",slug:"/okp4d_tx_staking_create-validator",permalink:"/commands/okp4d_tx_staking_create-validator",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_staking_cancel-unbond",permalink:"/commands/okp4d_tx_staking_cancel-unbond"},next:{title:"okp4d_tx_staking_delegate",permalink:"/commands/okp4d_tx_staking_delegate"}},d={},c=[{value:"okp4d tx staking create-validator",id:"okp4d-tx-staking-create-validator",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-staking-create-validator",children:"okp4d tx staking create-validator"}),"\n",(0,a.jsx)(t.p,{children:"create new validator initialized with a self-delegation to it"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx staking create-validator [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string                     The network chain ID (default "okp4d")\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for create-validator\n      --identity string                     The optional identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public IP. It takes effect only when used in combination with --generate-only\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s name\n      --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s ID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n  -o, --output string                       Output format (text|json) (default "json")\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/commands/next/okp4d_tx_staking",children:"okp4d tx staking"}),"\t - Staking transaction subcommands"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);