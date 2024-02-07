"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[84480],{81362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(85893),o=n(11151);const s={},i=void 0,r={id:"okp4d_tx_authz_grant",title:"okp4d_tx_authz_grant",description:"okp4d tx authz grant",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_authz_grant.md",sourceDirName:".",slug:"/okp4d_tx_authz_grant",permalink:"/fr/commands/okp4d_tx_authz_grant",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_authz_exec",permalink:"/fr/commands/okp4d_tx_authz_exec"},next:{title:"okp4d_tx_authz_revoke",permalink:"/fr/commands/okp4d_tx_authz_revoke"}},d={},l=[{value:"okp4d tx authz grant",id:"okp4d-tx-authz-grant",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-authz-grant",children:"okp4d tx authz grant"}),"\n",(0,a.jsx)(t.p,{children:"Grant authorization to an address"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:"create a new grant authorization to an address to execute a transaction on your behalf:"}),"\n",(0,a.jsx)(t.p,{children:"Examples:\n$ okp4d tx authz grant cosmos1skjw.. send --spend-limit=1000stake --from=cosmos1skl..\n$ okp4d tx authz grant cosmos1skjw.. generic --msg-type=/cosmos.gov.v1.MsgVote --from=cosmos1sk.."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'okp4d tx authz grant <grantee> <authorization_type="send"|"generic"|"delegate"|"unbond"|"redelegate"> --from <granter> [flags]\n'})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint          The account number of the signing account (offline mode only)\n      --allow-list strings           Allowed addresses grantee is allowed to send funds separated by ,\n      --allowed-validators strings   Allowed validators addresses separated by ,\n      --aux                          Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string        Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string              The network chain ID (default "okp4d")\n      --deny-validators strings      Deny validators addresses separated by ,\n      --dry-run                      ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration int               Expire time as Unix timestamp. Set zero (0) for no expiry. Default is 0.\n      --fee-granter string           Fee granter grants fees for the transaction\n      --fee-payer string             Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                  Fees to pay along with transaction; eg: 10uatom\n      --from string                  Name or address of private key with which to sign\n      --gas string                   gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float         adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string            Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                         help for grant\n      --keyring-backend string       Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string           The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                       Use a connected Ledger device\n      --msg-type string              The Msg method name for which we are creating a GenericAuthorization\n      --node string                  <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                  Note to add a description to the transaction (previously --memo)\n      --offline                      Offline mode (does not allow any online functionality)\n  -o, --output string                Output format (text|json) (default "json")\n  -s, --sequence uint                The sequence number of the signing account (offline mode only)\n      --sign-mode string             Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --spend-limit string           SpendLimit for Send Authorization, an array of Coins allowed spend\n      --timeout-height uint          Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                   Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                          Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/fr/commands/next/okp4d_tx_authz",children:"okp4d tx authz"}),"\t - Authorization transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);