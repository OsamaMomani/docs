"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[97961],{67735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(85893),o=t(11151);const i={},s=void 0,a={id:"okp4d_query_logic_ask",title:"okp4d_query_logic_ask",description:"okp4d query logic ask",source:"@site/commands/okp4d_query_logic_ask.md",sourceDirName:".",slug:"/okp4d_query_logic_ask",permalink:"/fr/commands/next/okp4d_query_logic_ask",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_logic",permalink:"/fr/commands/next/okp4d_query_logic"},next:{title:"okp4d_query_logic_params",permalink:"/fr/commands/next/okp4d_query_logic_params"}},c={},d=[{value:"okp4d query logic ask",id:"okp4d-query-logic-ask",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"okp4d-query-logic-ask",children:"okp4d query logic ask"}),"\n",(0,r.jsx)(n.p,{children:"executes a logic query and returns the solutions found."}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Executes the [query] and return the solution(s) found."}),"\n",(0,r.jsx)(n.p,{children:"Optionally, a program can be transmitted, which will be interpreted before the query is processed."}),"\n",(0,r.jsx)(n.p,{children:"Since the query is without any side-effect, the query is not executed in the context of a transaction and no fee\nis charged for this, but the execution is constrained by the current limits configured in the module (that you can\nquery)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"okp4d query logic ask [query] [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ okp4d query logic ask "chain_id(X)." # returns the chain-id\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --grpc-addr string      the gRPC endpoint to use for this chain\n      --grpc-insecure         allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int            Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                  help for ask\n      --node string           <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string         Output format (text|json) (default "text")\n      --program string        reads the program from the given string.\n      --program-file string   reads the program from the given filename or from stdin if "-" is passed as the filename.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/fr/commands/next/okp4d_query_logic",children:"okp4d query logic"}),"\t - Querying commands for the logic module"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);