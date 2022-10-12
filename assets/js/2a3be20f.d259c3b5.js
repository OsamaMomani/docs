"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[234],{8068:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),r=(a(1839),["components"]),s={sidebar_position:8},l="Roles",d={unversionedId:"whitepaper/roles",id:"whitepaper/roles",title:"Roles",description:"Overview",source:"@site/docs/whitepaper/roles.md",sourceDirName:"whitepaper",slug:"/whitepaper/roles",permalink:"/docs/whitepaper/roles",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/roles.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"whitepaperSidebar",previous:{title:"Dataverse Gateway",permalink:"/docs/whitepaper/dataverse-gateway"},next:{title:"Token Model",permalink:"/docs/whitepaper/token-model"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"Blockchain Participants",id:"blockchain-participants",level:3},{value:"Dataverse &amp; Data Space Participants",id:"dataverse--data-space-participants",level:3},{value:"Application Participants",id:"application-participants",level:3},{value:"Validators",id:"validators",level:2},{value:"Delegators",id:"delegators",level:2},{value:"DAO Participants",id:"dao-participants",level:2},{value:"Data Providers",id:"data-providers",level:2},{value:"Service Providers",id:"service-providers",level:2},{value:"Consumers",id:"consumers",level:2},{value:"Curators",id:"curators",level:2},{value:"Curation Markets",id:"curation-markets",level:3},{value:"Curators",id:"curators-1",level:3},{value:"Auto-Curation Priority",id:"auto-curation-priority",level:3},{value:"Governors",id:"governors",level:2},{value:"Builders",id:"builders",level:2},{value:"End-users",id:"end-users",level:2}],p={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roles"},"Roles"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Across the vibrant Ecosystem of OKP4, participants can choose from several different functional roles in the protocol - depending on their technical skills, risk tolerance, desired activity level and resources at their disposal. In this section we will quickly introduce you to the various roles in just a few words, for more details please select the following sections."),(0,n.kt)("h3",{id:"blockchain-participants"},"Blockchain Participants"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Validators")," run nodes and participate in consensus by broadcasting votes. They can self-bond $KNOW to increase their probability to validate a block and get rewards. They also have an obligation to vote on the DAO's proposals."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Delegators")," are token holders who can delegate their $KNOW tokens to Validators in order to collect rewards. Their voting power associated with the tokens are automatically delegated to Validators."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DAO Participants")," are anyone with staked $KNOW tokens can participate in on-chain governance. It is possible to make a proposal and vote on a proposal."),(0,n.kt)("h3",{id:"dataverse--data-space-participants"},"Dataverse & Data Space Participants"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data providers")," are users who deposit/registers one or more datasets into one or more Data Spaces. They are retributed with tokens when their datasets are used according to the Data Space business model of the workflow in which it is used."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Service providers")," are users who provides an algorithm, a software, a storage system, or any other processing or calculation resource that requires a working time. It is thanks to them that datasets can be assembled and processed to create knowledge."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consumers")," are users/bots who pay tokens to initiate workflows and create an output. They design and/or execute workflows using digital resources provided by Data & Service providers within a Data Space."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Curators")," can stake $KNOW tokens on data and services to increase visibility and trust, as well as to obtain a portion of the income generated by this asset, if enabled by a specific Data Space."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Governors")," each Data Space can have its own governance mechanisms. Governors are the ones who enforce them. The ability to become a governor depends on the Data Space, some will have a specific governance token (fungible or non fungible), some will have multisigs, some will have single self-designated entities defining the rules."),(0,n.kt)("h3",{id:"application-participants"},"Application Participants"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Builders")," are the ones who develop and update applications which consume knowledge (any web or mobile application that consume data). These applications are external to the Protocol."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"End-users")," are the ones using Applications. Some applications may be completely off-chain, these applications just leverage outputs from OKP4 with invisible end-users from the protocol. Some may need users to have on-chain identity and/or perform on-chain actions. These 2 kinds of end-users will coexist."),(0,n.kt)("h2",{id:"validators"},"Validators"),(0,n.kt)("p",null,"Our Validator network is based on the Tendermint consensus system which relies on a group of Validators in charge of committing new blocks to our blockchain. They participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by the private key of each Validator. Applicants to this group can have $KNOW tokens delegated to them by the token holders (Delegators)."),(0,n.kt)("p",null,"Anyone can become Validator at any time, except when the size of the current Validator set is greater than the maximum number of Validators allowed. Validators will be automatically selected according to their voting power, which is determined by the number of $KNOW tokens staked by the Validator plus those delegated. Our network will initially contain a set of 100 Validators (which may increase over time based on governance votes). The 100 best candidates with more voting power will then be the approved Validators of our network; the other candidates are on a waiting list. If a Validator is replaced by a new Validator, the existing Validator becomes inactive (back on the waiting list) and all his $KNOW and delegated $KNOW enter the unbounding state."),(0,n.kt)("p",null,"Validators (and their delegates) earn $KNOW tokens as a reward for running the Tendermint consensus protocol. These rewards come from inflation and transaction fees. Validators can choose to set a small commission percentage on the rewards received by their Delegators as an additional incentive."),(0,n.kt)("p",null,"There must be some penalty imposed if Validators do not respect the protocol rules whether intentional or unintentional (double sign, offline too long...). This will cause the Validator to lose his good reputation and his proportional share of bonded token that will get slashed. The penalty depends on the severity of the violation."),(0,n.kt)("h2",{id:"delegators"},"Delegators"),(0,n.kt)("p",null,"Delegators are $KNOW holders who cannot, or do not want to, run a Validator node themselves. They can delegate $KNOW to a Validator and obtain a part of their revenue in exchange."),(0,n.kt)("p",null,"Delegators share revenue with their Validators, but they also share risks. If a Validator does not respect the described rules, he and each of his Delegators will be partially deducted in proportion to their delegated stake. This is why each Delegator must be careful about which Validator they choose before deciding to delegate. It is possible to dilute the level of risk by delegating to several Validators."),(0,n.kt)("p",null,"Delegators play an essential role in the system since they are responsible for the selection of Validators; they therefore play an active role in the Ecosystem. They must actively monitor the actions of their Validators and participate in governance."),(0,n.kt)("p",null,'About the governance of the DAO, the Delegators give their voting power automatically to the Validators to whom they delegate their tokens. However, if they wish to vote by themselves, they can manually "retrieve" the right to vote on their share of tokens and vote normally.'),(0,n.kt)("h2",{id:"dao-participants"},"DAO Participants"),(0,n.kt)("p",null,"Anyone with staked $KNOW tokens can participate in governance. It is possible to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a proposal: costs $KNOW tokens"),(0,n.kt)("li",{parentName:"ul"},"Vote on a proposal: doesn't cost $KNOW tokens, but each token gives a vote right on each proposal, and each $KNOW gives 1 voting power")),(0,n.kt)("p",null,"For more information on governance please click ",(0,n.kt)("a",{parentName:"p",href:"okp4-blockchain#governance--dao"},"here"),"."),(0,n.kt)("h2",{id:"data-providers"},"Data Providers"),(0,n.kt)("p",null,"Data providers are users who deposit one or more datasets in the catalog and/or in one or more Data Spaces. Their role is to offer datasets to be used by services and applications to create valuable knowledge."),(0,n.kt)("p",null,"They are paid by the Consumers each time their data is used or bought, depending on governance rules of the Data Space."),(0,n.kt)("h2",{id:"service-providers"},"Service Providers"),(0,n.kt)("p",null,"Service providers are users who deposits and are able to run what is called a service. A service can be an algorithm, a processing software, a tool... requiring a processing time. They are paid by the Consumers based on a fixed query fee or an hourly rate or that they define themselves according to the duration of use."),(0,n.kt)("p",null,"The Provider will be able to create a descriptive page for his repository at any time. However, in order for a Consumer to be able to invoke and use this service, he will have to stake $KNOW in proportion to the hourly fee that he will define himself."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"It is particularly recommended to deposit quality datasets and services because:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"It will be much more likely to be used many times and to be well curated"),(0,n.kt)("li",{parentName:"ul"},"It will give the Provider a well known reputation that can be profitable on other deposits"),(0,n.kt)("li",{parentName:"ul"},"The Provider will have the possibility to be the first to curate hence maximizing the profits"))),(0,n.kt)("h2",{id:"consumers"},"Consumers"),(0,n.kt)("p",null,"Consumers are users who will sign the transactions and pay the network in order to create knowledge and process workflows. They spend $KNOW to pay transaction fees, and possibly Data Providers, Service Providers, Curator fees and Data Space taxes if applicable."),(0,n.kt)("p",null,"Consumers can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"People, sending transactions to the blockchain to initiate specific actions & workflows directly"),(0,n.kt)("li",{parentName:"ul"},"Applications, sending transactions on behalf of their users and serving as a middleman between OKP4 outputs and the end-user. This is pretty useful for applications willing to use a SaaS model for example")),(0,n.kt)("h2",{id:"curators"},"Curators"),(0,n.kt)("h3",{id:"curation-markets"},"Curation Markets"),(0,n.kt)("p",null,"With the establishment of curation markets in OKP4 Ecosystem, a whole new world of possibilities will be opening up. The new opportunity to participate in the network as a Curator comes with many exciting adventures but also with potential risks."),(0,n.kt)("p",null,"What are curation markets?"),(0,n.kt)("p",null,"A curation market is a model allowing actors in a network to effectively coordinate around shared goals, this is accomplished by coordinating the work around a token that is minted to incentivize specific results (they earn from the value they co-create). Curation markets are specifically designed to reduce information asymmetries and to curate valuable information."),(0,n.kt)("p",null,"Decentralized Coordination of Labor and Capital: the establishment of curation markets allows network participants to mint and burn tokens (named shares) in accordance with predefined rules without involving a centralized third party. The process of creating these tokens of value is not controlled by a specific entity. Instead, the bonding curve contract of the curation market is responsible for distributing (minting) the shares."),(0,n.kt)("p",null,"Core Components of Curation Markets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Continuous: shares (tokens) can be minted and burned any time without time constraints"),(0,n.kt)("li",{parentName:"ul"},"Autonomous: bonding curve contracts calculate token prizes autonomously"),(0,n.kt)("li",{parentName:"ul"},"Communal: a communal deposit is created to keep the amount paid for minted tokens"),(0,n.kt)("li",{parentName:"ul"},"Proportional: Curators curate information with their proportional backing of tokens bonded to them")),(0,n.kt)("h3",{id:"curators-1"},"Curators"),(0,n.kt)("p",null,"Curators do not need to possess complex technical skills or knowledge. All it takes is the ability to do transactions via Keplr. Similarly, Curators are not required to stake a minimum amount of $KNOW. Depending on the individual's risk tolerance, curation may be especially attractive for those who are able to accurately evaluate items and have a good understanding of Web3 and of the underlying mechanics of bonding curves."),(0,n.kt)("p",null,"In order for Consumers and Data Spaces to simply find an item, it must first be ranked. Ranking is a process in which items are put in competition with each other so that they can be found more quickly and it's easier to place trust in them."),(0,n.kt)("p",null,"Thus, if users had to guess which items to use, they would be less likely to find quality items on the first try. This is where Curators come in."),(0,n.kt)("p",null,"Curators are essential to the decentralized economy on our protocol. They use their knowledge and common sense to analyze items to identify which ones are of the highest quality and which ones are likely to be used the most. Through the catalog, Curators can visualize the entirety of what is available in order to make signaling decisions and invest in it."),(0,n.kt)("p",null,"These people will be rewarded by earning a portion of the rewards that digital resources generate. Curation is about identifying valuable pieces of information in a data stream (or in a service) and presenting it to the target audience in a way that adds value (mainly visibility and trust)."),(0,n.kt)("p",null,"OKP4 uses curation as an incentive mechanism to encourage network participants to identify items of a high-quality and to foster information sharing in the Ecosystem.\nThe Curator role is ideal for all those that wish to become more active in the network than just being a Delegator. They can be community members, data consumers, developers, item providers..."),(0,n.kt)("p",null,"When signaling, Curators can decide to signal a specific version of a dataset/service, or they can decide to use automatic migration through updates to new versions. If you decide to signal on a specific version, despite the update, your shares will always remain on that specific version."),(0,n.kt)("p",null,"Curation is risky. Do your due diligence to ensure that you only curate datasets and services that you trust. A detailed list of the different risks is available in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/whitepaper/token-model#risks"},"Token Model section"),"."),(0,n.kt)("h3",{id:"auto-curation-priority"},"Auto-Curation Priority"),(0,n.kt)("p",null,"Any Provider can stake $KNOW tokens on their data/service as a curation to oneself. It follows the same rules as any Curator. The only change is that the Provider will always have the first hand before the others."),(0,n.kt)("p",null,"Data & Service Operation: When the Provider will deposit his dataset/service, he will have to choose if he accepts or not the Curators. If he has accepted them, when he makes his dataset/service available for use, the Provider can, if he wants, buy shares before anyone else."),(0,n.kt)("p",null,"Once the first purchase is made, the burn & mint system opens to the whole community. The Provider who curates will of course receive the associated rewards, in proportion to his number of shares (at the very beginning if he is alone, he will receive 100% of the curation royalties)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The first address to signal a particular item is considered the first Curator and will have to do much more gas-intensive work than the rest of the following Curators because the first Curator initializes the curation share tokens, initializes the bonding curve, and also transfers tokens into OKP4 proxy.")),(0,n.kt)("h2",{id:"governors"},"Governors"),(0,n.kt)("p",null,"The ideal we imagine and wish for, is a Dataverse filled with Data Spaces, each with its own operating model (rules) and each with its own governance token. However, we know that in some cases, especially in the context of a small restricted Data Space or in a private Data Space for example, this solution is not the most adequate for the participants."),(0,n.kt)("p",null,"This is why we have decided to let each Data Space choose between different governance options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Governance via a newly created token. This token will have value, a market..."),(0,n.kt)("li",{parentName:"ul"},"Governance via whitelist. The creators of the Data Space will be able to choose themselves which wallet will have the right to vote, what is the voting weight per wallet, if there is the possibility to add/remove people from the list or if they don't want the list to change..."),(0,n.kt)("li",{parentName:"ul"},"Governance via the $KNOW token"),(0,n.kt)("li",{parentName:"ul"},"Under development, the possibility to have a governance token from other chains (ETH, BNB...)")),(0,n.kt)("p",null,"As an example, it will be able to add fees for the use of its Data Space in order to create or develop a treasury; because each Data Space can have its own treasury if needed."),(0,n.kt)("p",null,"For more informations about the rules, please click ",(0,n.kt)("a",{parentName:"p",href:"/docs/whitepaper/data-spaces#ds-governance"},"here"),"."),(0,n.kt)("h2",{id:"builders"},"Builders"),(0,n.kt)("p",null,"Builders are essential to the proper functioning of our ecosystem. Indeed, they develop, update, and improve applications external to the protocol with the aim of consuming the knowledge created."),(0,n.kt)("p",null,"Consumers, after having received the desired knowledge, can call upon the Builders' applications in order, for example, to better visualize different elements of this knowledge in graphical form (Data Visualization service)."),(0,n.kt)("p",null,"The end-users have the possibility to go directly through an external application developed by a Builder to create the desired knowledge without going through the protocol. The Builder's application will therefore play an intermediary role (the application becomes a Consumer) to create the knowledge required by the end user. Then the application consumes the knowledge in order to provide its service to the client."),(0,n.kt)("h2",{id:"end-users"},"End-users"),(0,n.kt)("p",null,"They are the ones using Applications."),(0,n.kt)("p",null,"There is 2 kind of end-users:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Off-chain end-users in applications which only leverage outputs from OKP4. These applications can have web2-like UX and business models such as a subscription-based one like mainstream SaaS platforms. In this case, companies or individuals operating the Application are responsible to handle operations in a way that is sustainable for them and for the users.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On-chain end-users where they can leverage their on-chain identity and perform on-chain actions. This is mandatory to benefit from personal data that may be shared in a Data Space to access some personalized features in an Application for example."))),(0,n.kt)("p",null,"These 2 kinds of end-users will coexist."))}u.isMDXComponent=!0}}]);