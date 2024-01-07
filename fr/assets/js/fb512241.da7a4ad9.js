"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[22770],{58230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=t(85893),s=t(11151);const o={},i=void 0,d={id:"okp4d_query_tx",title:"okp4d_query_tx",description:"okp4d query tx",source:"@site/commands/okp4d_query_tx.md",sourceDirName:".",slug:"/okp4d_query_tx",permalink:"/fr/commands/next/okp4d_query_tx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_tendermint-validator-set",permalink:"/fr/commands/next/okp4d_query_tendermint-validator-set"},next:{title:"okp4d_query_txs",permalink:"/fr/commands/next/okp4d_query_txs"}},a={},c=[{value:"okp4d query tx",id:"okp4d-query-tx",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"okp4d-query-tx",children:"okp4d query tx"}),"\n",(0,r.jsx)(n.p,{children:'Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block'}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Example:\n$ okp4d query tx <hash>\n$ okp4d query tx --type=acc_seq <addr>/<sequence>\n$ okp4d query tx --type=signature <sig1_base64>,<sig2_base64...>"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"okp4d query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for tx\n      --node string        <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --type string        The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/fr/commands/next/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);