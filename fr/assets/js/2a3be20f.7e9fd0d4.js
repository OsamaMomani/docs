"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[38234],{68068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));n(8209);const o={sidebar_position:6},r="Roles",s={unversionedId:"whitepaper/roles",id:"whitepaper/roles",title:"Roles",description:"Blockchain Participants",source:"@site/docs/whitepaper/roles.md",sourceDirName:"whitepaper",slug:"/whitepaper/roles",permalink:"/fr/whitepaper/roles",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/roles.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"whitepaper",previous:{title:"Token model",permalink:"/fr/whitepaper/token-model"},next:{title:"Use cases",permalink:"/fr/whitepaper/use-cases"}},p={},l=[{value:"Blockchain Participants",id:"blockchain-participants",level:2},{value:"Validators",id:"validators",level:3},{value:"Delegators",id:"delegators",level:3},{value:"DAO Participants",id:"dao-participants",level:3},{value:"Dataverse &amp; Zone Participants",id:"dataverse--zone-participants",level:2},{value:"Data Providers",id:"data-providers",level:3},{value:"Service Providers",id:"service-providers",level:3},{value:"Consumers",id:"consumers",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roles"},"Roles"),(0,i.kt)("h2",{id:"blockchain-participants"},"Blockchain Participants"),(0,i.kt)("h3",{id:"validators"},"Validators"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"Validators build, verify and add new blocks to the blockchain, while maintaining the network's security and integrity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"They are accountable for validating new blocks, propagating votes as part of the consensus protocol, and stake tokens to encourage network rule adherence."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"Validators engage with the protocol via a client that manages the block validation process and consensus voting. This client also facilitates their participation in DAO governance, both in voting and proposal submission, through specific transactions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"Validators typically operate as entities or individuals running network nodes."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To maintain balance and security in the network, a limit has been set on the number of Validators. This number is subject to changes as the network matures.\nTo maintain the integrity of our network, any inappropriate or malicious behavior from Validators is met with slashing. This disciplinary action serves to uphold the network's standards and security, keeping it robust and reliable for all participants.\nMore information about ",(0,i.kt)("a",{parentName:"p",href:"https://tendermint.com/core/"},"Tendermint BFT mechanism"))),(0,i.kt)("h3",{id:"delegators"},"Delegators"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"Delegators primarily delegate their $KNOW tokens and voting power to Validators to accumulate rewards."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"They are responsible for choosing whom to delegate their tokens and voting power to. Furthermore, they need to be aware of the risks of delegating their tokens, as they can be slashed and lost if delegated to a malfunctioning or malicious validator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"Delegators engage with the protocol by delegating their tokens to Validators. However, they can manually \u201cretrieve\u201d their voting rights and directly participate in governance through a transaction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"Delegators are typically individuals or entities staking $KNOW tokens."),(0,i.kt)("h3",{id:"dao-participants"},"DAO Participants"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"The principal role of DAO Participants is to participate in the on-chain governance of the protocol. They have the power to propose and vote on protocol improvement propositions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"DAO Participants are responsible for issuing improvement proposals, voting on these proposals, and staking $KNOW tokens to participate in governance. As protocol holders, they also have a direct stake in its direction and success."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"DAO Participants interact with the protocol by making and voting on proposals, facilitated by staking $KNOW. Each $KNOW token provides a voting right."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"DAO Participants can only be delegators or Validators for voting. Nevertheless, note that it is necessary to deposit $KNOW to make a proposal and therefore not necessarily need to be a Delegator."),(0,i.kt)("h2",{id:"dataverse--zone-participants"},"Dataverse & Zone Participants"),(0,i.kt)("h3",{id:"data-providers"},"Data Providers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"Data Providers reference datasets within the protocol."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"They are responsible for describing dataset characteristics (metadata) and establishing consent rules for the use of this resource. They are the only ones authorized to modify these rules unless they decide otherwise through these rules of consent. They may also receive compensation from Consumers each time their data is used or purchased, according to the associated governance rules."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"They interact with the protocol via dedicated smart contracts to register datasets, define their consent rules and metadata, and make the dataset available and accessible. In addition, retribution fees may be distributed to data providers when their datasets are used, in accordance with established consent rules and zone rules."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"Data Providers can be individuals, applications, companies, or organizations owning and/or managing datasets."),(0,i.kt)("h3",{id:"service-providers"},"Service Providers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"Service Providers provide resources such as algorithms, software, storage systems, or any other digital resource requiring processing time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"Service Providers are responsible for providing services, defining consent rules, describing services metadata, and setting up remuneration models based on the nature and usage of their resources.\xa0Depending on consent rules and Zone rules, Service Providers may be required to stake tokens on services to ensure service availability and integrity. This stake can be slashed and provide further incentives for Service Providers to guarantee off-chain service execution when invoked."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"Service Providers interact with the protocol by referencing their services and consent rules via smart contracts, ensuring the availability and functioning of their service in accordance with on-chain registered specifications.\xa0Furthermore, retribution fees may be distributed to Service Providers, according to established consent rules and zone rules."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"Service Providers can be individuals, entities, or applications offering computing or processing resources."),(0,i.kt)("h3",{id:"consumers"},"Consumers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Purpose"))),(0,i.kt)("p",null,"The main role of Consumers is to initiate workflows on shared resources from providers to access or create knowledge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Responsibilities"))),(0,i.kt)("p",null,"Consumers are accountable for initiating workflow executions and providing payment for data and service access. These workflows can be simple, like downloading a dataset, or more complex, involving the interaction of tens or hundreds of datasets and services."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interaction"))),(0,i.kt)("p",null,"Consumers interact with the protocol by initiating on-chain transactions calling smart contracts to request workflow execution. They have to pay required fees and retributions to initiate the workflow execution."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Entity"))),(0,i.kt)("p",null,"Consumers can be individuals or bots initiating transactions to access resources within the dataverse."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h3",{parentName:"admonition",id:"application-participants"},"Application Participants"),(0,i.kt)("p",{parentName:"admonition"},"It is important to note that Application participants, such as builders and end-users do not have a role in the protocol. They do not interact directly with the protocol itself. As we previously mentioned, the applications can act as a Consumers when it needs new or updated knowledge, and link the protocol and the end-user."),(0,i.kt)("p",{parentName:"admonition"},"Builders are also essential to the proper functioning of our ecosystem. They leverage the Dataverse to build, update, and improve applications on top of the protocol with the aim of consuming the knowledge created. This includes UI (User Interface) developers who design and build interfaces for these applications. The Builder's application will therefore play an intermediary role (the application becomes a Consumer) to create the knowledge required by the end user. Then the application consumes the knowledge in order to provide its service to the client."),(0,i.kt)("p",{parentName:"admonition"},"They are the ones using Applications. Some applications may be completely off-chain, these applications just leverage outputs from OKP4 with end-users invisible for the protocol. Some may need users to have on-chain identity and/or perform on-chain actions. These 2 kinds of end-users will coexist.")))}d.isMDXComponent=!0}}]);