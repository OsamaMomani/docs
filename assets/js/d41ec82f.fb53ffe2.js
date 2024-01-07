"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[98470],{33180:(o,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(85893),r=s(11151);const t={},p=void 0,i={id:"okp4d_query_gov_proposals",title:"okp4d_query_gov_proposals",description:"okp4d query gov proposals",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_gov_proposals.md",sourceDirName:".",slug:"/okp4d_query_gov_proposals",permalink:"/commands/okp4d_query_gov_proposals",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_gov_proposal",permalink:"/commands/okp4d_query_gov_proposal"},next:{title:"okp4d_query_gov_proposer",permalink:"/commands/okp4d_query_gov_proposer"}},a={},l=[{value:"okp4d query gov proposals",id:"okp4d-query-gov-proposals",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"okp4d-query-gov-proposals",children:"okp4d query gov proposals"}),"\n",(0,n.jsx)(e.p,{children:"Query proposals with optional filters"}),"\n",(0,n.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(e.p,{children:"Query for a all paginated proposals that match optional filters:"}),"\n",(0,n.jsx)(e.p,{children:"Example:\n$ okp4d query gov proposals --depositor cosmos1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk\n$ okp4d query gov proposals --voter cosmos1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk\n$ okp4d query gov proposals --status (DepositPeriod|VotingPeriod|Passed|Rejected)\n$ okp4d query gov proposals --page=2 --limit=100"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"okp4d query gov proposals [flags]\n"})}),"\n",(0,n.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'      --count-total        count total number of records in proposals to query for\n      --depositor string   (optional) filter by proposals deposited on by depositor\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for proposals\n      --limit uint         pagination limit of proposals to query for (default 100)\n      --node string        <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of proposals to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of proposals to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of proposals to query for\n      --reverse            results are sorted in descending order\n      --status string      (optional) filter proposals by proposal status, status: deposit_period/voting_period/passed/rejected\n      --voter string       (optional) filter by proposals voted on by voted\n'})}),"\n",(0,n.jsx)(e.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,n.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"/commands/next/okp4d_query_gov",children:"okp4d query gov"}),"\t - Querying commands for the governance module"]}),"\n"]})]})}function u(o={}){const{wrapper:e}={...(0,r.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},11151:(o,e,s)=>{s.d(e,{Z:()=>i,a:()=>p});var n=s(67294);const r={},t=n.createContext(r);function p(o){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:p(o.components),n.createElement(t.Provider,{value:e},o.children)}}}]);