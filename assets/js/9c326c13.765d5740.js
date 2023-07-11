(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[69037],{38719:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=a(29420),s=["components"],c={sidebar_position:4},l="Architecture",d={unversionedId:"whitepaper/architecture",id:"whitepaper/architecture",title:"Architecture",description:"General overview",source:"@site/docs/whitepaper/architecture.mdx",sourceDirName:"whitepaper",slug:"/whitepaper/architecture",permalink:"/whitepaper/architecture",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/architecture.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"whitepaper",previous:{title:"Solution",permalink:"/whitepaper/solution"},next:{title:"Token model",permalink:"/whitepaper/token-model"}},h={},u=[{value:"General overview",id:"general-overview",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Distributed network",id:"distributed-network",level:3},{value:"Shared state",id:"shared-state",level:3},{value:"Built on Cosmos",id:"built-on-cosmos",level:3},{value:"Modules",id:"modules",level:2},{value:"Logic",id:"logic",level:3},{value:"Mint, Vesting and other Cosmos SDK modules",id:"mint-vesting-and-other-cosmos-sdk-modules",level:3},{value:"WASM",id:"wasm",level:3},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Smart contract overview",id:"smart-contract-overview",level:3},{value:"Objectarium: unstructured data storage",id:"objectarium-unstructured-data-storage",level:3},{value:"Cognitarium: semantic data storage",id:"cognitarium-semantic-data-storage",level:3},{value:"Law-stone: source of rules",id:"law-stone-source-of-rules",level:3},{value:"Pactum: managing agreements",id:"pactum-managing-agreements",level:3},{value:"Zone hub: entry point",id:"zone-hub-entry-point",level:3},{value:"Orchestration",id:"orchestration",level:2},{value:"Identification and Authentication",id:"identification-and-authentication",level:3},{value:"Access authorization with Secret Management Services",id:"access-authorization-with-secret-management-services",level:3},{value:"Jobs executions",id:"jobs-executions",level:3},{value:"Trusted parties considerations",id:"trusted-parties-considerations",level:3},{value:"Dataverse",id:"dataverse",level:2},{value:"Ontology: Framework and Interoperability",id:"ontology-framework-and-interoperability",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Beyond the protocol: user interfaces, applications",id:"beyond-the-protocol-user-interfaces-applications",level:2},{value:"Blocks indexers, transactions explorer",id:"blocks-indexers-transactions-explorer",level:3},{value:"Administration clients",id:"administration-clients",level:3},{value:"End-user interfaces",id:"end-user-interfaces",level:3},{value:"Connect&#39;em all",id:"connectem-all",level:2}],p={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("h2",{id:"general-overview"},"General overview"),(0,r.kt)("p",null,"The protocol provides a disruptive access control mechanism. Whereas a central gateway usually safekeeps a specific set of resources, OKP4 protocol acts as a global source of trust for any operation:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OKP4 Basic Architecture Overview",src:a(4824).Z,width:"3624",height:"1212"})),(0,r.kt)("p",null,"In a user interface, providers indicate the rules for consuming their resources. The interface interacts with the blockchain, which stores the resources descriptions, revenue conditions, restrictions and execution instructions.\nA consumer asks the blockchain through an app to execute a request using multiple resources. If the rules set by the providers are met, the protocol emits an event to validate the request.\nAn orchestration service, the guard on a resource relying solely on blockchain validation events, processes the request from the consumer. This request creates new knowledge as it leverages multiple resources from different providers with no required trust on a third party.\nThe orchestration service reports the execution status to the blockchain to ensure reliable logging and payment."),(0,r.kt)("p",null,"Smart contracts carry all these interactions with the blockchain. Nodes validate smart contracts execution and persistent storage through a consensus. A distributed database, the so-called blockchain, commits to every change. The OKP4 blockchain is built with custom modules enabling the protocol governance and validation rules capabilities, among other functionalities."),(0,r.kt)("p",null,"The diagram above provides a simplified explanation of the system's overall operation. More precisely, the entire solution architecture is structured as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OKP4 Architecture Schema",src:a(46783).Z,width:"3872",height:"3334"})),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("h3",{id:"distributed-network"},"Distributed network"),(0,r.kt)("p",null,"Multiple nodes execute and validate all actions submitted to the blockchain thanks to the Tendermint consensus.\nTendermint is a partially synchronous Byzantine fault-tolerant (BFT) consensus protocol. The protocol requires a fixed, known set of validators, where their public key identifies each validator. Validators attempt to reach a consensus on one block at a time, where a block is a list of transactions. Voting for consensus on a block proceeds in rounds. Each round has a round leader, or proposer, who proposes a block. The validators then vote, in stages, on whether to accept the proposed block or move on to the next round. The proposer for a round is chosen deterministically from the ordered list of validators in proportion to their voting power. Tendermint's security is derived from optimal Byzantine fault tolerance through super-majority voting and a locking mechanism."),(0,r.kt)("h3",{id:"shared-state"},"Shared state"),(0,r.kt)("p",null,"When a user wants to update the blockchain state, he submits a transaction with cryptographic keys authentication. Users interacting with the network pay fees to these validators for every transaction. These fees are paid with the OKP4 blockchain native coin, $KNOW."),(0,r.kt)("p",null,"Validators guarantee the reliability of the blockchain. As they all share the same on-chain data and process the same transactions, if a node acts maliciously (e.g., the purpose of updating a state for its benefit without required permissions), the rest of the network will reject it. The economic incentive with $KNOW fees makes virtuous behavior more profitable than unwise conduct."),(0,r.kt)("h3",{id:"built-on-cosmos"},"Built on Cosmos"),(0,r.kt)("p",null,"The OKP4 blockchain is built with the Cosmos SDK to benefit from advanced implementation options without reinventing the wheel. Cosmos's modular architecture enables customized application-specific chains with ease. This unique flexibility fits the project's requirements, ensuring optimal performance and resource allocation."),(0,r.kt)("p",null,"Moreover, with Cosmos's Inter-Blockchain Communication (IBC) protocol, the OKP4 blockchain can communicate and transact seamlessly with other chains within the Cosmos ecosystem and external networks. This interchain compatibility expands the reach and potential user base and opens avenues for collaboration and synergy with other innovative projects in the Cosmos ecosystem and beyond."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The modules implement core functions particular to the OKP4 blockchain. They provide features for protocol governance, rules interpretation regarding resources, and more."),(0,r.kt)("h3",{id:"logic"},"Logic"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logic")," module is designed to primarily address logical queries based on facts sourced from the ontology or the state of the chain, along with inference rules. It's main use in the protocol is the management of governance rules, written in Prolog. Thus, any smart contract deployed on the OKP4 blockchain can use the logic module to evaluate queries written in Prolog."),(0,r.kt)("p",null,"Prolog is a powerful declarative programming language to manage from simple restrictions to complex rules. This language is not natively operable on-chain; the logic module adds Prolog interpretation capability.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"logic")," module is not strongly coupled to the OKP4 blockchain. It's designed to be reusable and can be integrated with any Cosmos appchain. Because it's open and interoperable, the support of Prolog programs is a significant gain for the Cosmos ecosystem. Using this open-source ",(0,r.kt)("inlineCode",{parentName:"p"},"logic")," module implementation, any appchain can quickly adopt complex Prolog governance rules."),(0,r.kt)("h3",{id:"mint-vesting-and-other-cosmos-sdk-modules"},"Mint, Vesting and other Cosmos SDK modules"),(0,r.kt)("p",null,"The OKP4 blockchain uses production-grade modules from the Cosmos SDK. These generic modules facilitate the implementation of protocol governance, token operation management, validator punishment mechanisms, and authentication of accounts and transactions."),(0,r.kt)("p",null,"Two of them have a custom implementation: the mint and the vesting modules.\n\u201cMint\u201d, used for creating new $KNOW units, applies specific tokenomics parameters. It determines the inflation rate for validators' and stackers' earnings.\n\u201cVesting\u201d refers to distributing tokens over a specified period rather than all at once. This approach allows for controlled token distribution over time, promoting responsible token management and preventing immediate sell-offs that could negatively impact the OKP4 ecosystem."),(0,r.kt)("h3",{id:"wasm"},"WASM"),(0,r.kt)("p",null,"OKP4 incorporates the ",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," smart contracting platform built for the Cosmos Ecosystem. The primary programming language used in this module is ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," for building secure and multi-chain smart contracts. Yet, any language compiled into WASM can be supported as they become available."),(0,r.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("h3",{id:"smart-contract-overview"},"Smart contract overview"),(0,r.kt)("p",null,"Smart contracts handle all interactions with external parties, whether to provide a digital resource with condition rules to use it, to consume this resource, or to send payments. These decentralized programs are centered around three fundamental pillars:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ontology"),": models all the different resources (e. g. datasets, computation services, infrastructure, orchestration engines, \u2026), their descriptive properties and relations with each other.",(0,r.kt)("br",{parentName:"li"}),"It also includes access rules and execution instructions linked to resources. The ontology is a whole of objects, a way to store a semantic representation of the Dataverse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance"),": statutes the definition and the validation of resource permissions.",(0,r.kt)("br",{parentName:"li"}),"Rules (i.e. the conditions to give access to resources) can be applied at one among multiple levels: for everyone, for a set of resources, for a specific resource or between selected parties only."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Orchestration"),": ensures the smooth coordination and execution of services.",(0,r.kt)("br",{parentName:"li"}),"It enforces the rules and policies that govern resource (datasets and services) authorizations.")),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/content/whitepaper/arch-3pillars.webp"})),(0,r.kt)("h3",{id:"objectarium-unstructured-data-storage"},"Objectarium: unstructured data storage"),(0,r.kt)("p",null,"The main goal of ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," is to provide the protocol with a versatile mechanism for storing unstructured data, ensuring that the stored data remains immutable."),(0,r.kt)("p",null,"Any user or smart contract can \u201dpin\u201d a stored object. Object deletion is impossible as long as it contains at least one \u201cpin\u201d. The user (or smart contract) should use the \u201cunpin\u201d function from ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," to remove a pin."),(0,r.kt)("p",null,"A specific use case is the storing governance rules as a Prolog program. Prolog code defines governance rules, the \u201claw\u201d. These pieces of logic programming (usually from ",(0,r.kt)("inlineCode",{parentName:"p"},".pl")," files) are stored in raw with an ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," smart contract."),(0,r.kt)("h3",{id:"cognitarium-semantic-data-storage"},"Cognitarium: semantic data storage"),(0,r.kt)("p",null,"The external resources description, usage rules and execution instructions are defined with an ontology, specifying metadata and relationships."),(0,r.kt)("p",null,"There is no restriction on the structure to allow ample expressiveness. But the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," serves as a fundamental and essential structure that defines concepts and their relationships, forming the basis upon which additional extensions can be integrated."),(0,r.kt)("p",null,"Once inserted via the ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," smart contract, one can fetch the data from a \u201cselect\u201d or a \u201cdescribe\u201d query. In the first case, it returns resources matching the criteria defined by the provided query. The second case returns the raw part of the ontology, the resource description identified by an Internationalized Resource Identifier (IRI)."),(0,r.kt)("h3",{id:"law-stone-source-of-rules"},"Law-stone: source of rules"),(0,r.kt)("p",null,"To create a governance rule, one should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," smart contract and instantiate it with a Prolog code."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," instance stores the Prolog code using ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," smart-contract, pins it, and checks the dependencies to pin. Indeed, if the provided Prolog code depends on another Prolog program (already stored with ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium"),"), it's necessary to ensure its availability."),(0,r.kt)("p",null,"The rule cannot be changed; what is stored on-chain is immutable. The one who instantiates the governance rule is the administrator, the only one able to destroy it. When a law is deleted, the main Prolog code stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," is unpinned. All object with no other pin is deleted."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," has an \u201cask\u201d method to execute Prolog queries from stored rules. It loads them from ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium"),", and uses the logic module to get the answer with eventual substitutions for results."),(0,r.kt)("h3",{id:"pactum-managing-agreements"},"Pactum: managing agreements"),(0,r.kt)("p",null,"This smart contract guarantees the orchestration, the respect of the law and the value allocations. It can also handle more aspects regarding agreements, such as escrow mechanisms."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"pactum")," instantiation defines an agreement between at least two parties and details the prerequisites that fulfil its enforcement and the actions to proceed accordingly. These conditions to execute contractual obligations are materialized as a set of terms previously stored with the ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," smart contract."),(0,r.kt)("p",null,"Service execution states are recorded in the ontology, forming the knowledge graph in ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium"),'. The evaluation of conditions that must be met within the agreement changes over time based on the "facts" are also recorded in the ontology. Thus, a ',(0,r.kt)("inlineCode",{parentName:"p"},"pactum")," instance applies token revenue-sharing distribution if conditions are met. It can also flag invalid service execution and block escrow in consequence."),(0,r.kt)("h3",{id:"zone-hub-entry-point"},"Zone hub: entry point"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," is the single entry point to any mutation in the protocol. This smart contract operates external requests and calls the other smart contracts methods. It checks errors and ensures authorization for protected operations."),(0,r.kt)("p",null,"When a service provider submits an entry to add new resources policies, ",(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," stores the Prolog code with an instantiation of a ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," smart contract."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," populates the ontology with ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," addresses as rules references, service execution instructions and all relevant resource metadata via an ",(0,r.kt)("inlineCode",{parentName:"p"},"InsertData")," message of a ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," contract. This process applies to an agreement between parties, a resource consent or a zone (resources categorization) definition."),(0,r.kt)("p",null,"When a consumer submits an execution request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," instance evaluates the required resources with a query to ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium"),". It extracts the governance rules, and, to evaluate resource access, it asks the related ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," instance of the Prolog interpretation. If the response back is positive, ",(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," validates the user transaction and emits an event. This event triggers a service execution to (off-chain) orchestration services."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zone-hub")," also handles state reportings from orchestration executions. It stores messages in a ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," instances, before an evaluation by a ",(0,r.kt)("inlineCode",{parentName:"p"},"pactum")," instance."),(0,r.kt)("h2",{id:"orchestration"},"Orchestration"),(0,r.kt)("p",null,"Orchestration services have access to off-chain resources. They only trust the OKP4 blockchain to execute jobs."),(0,r.kt)("h3",{id:"identification-and-authentication"},"Identification and Authentication"),(0,r.kt)("p",null,"An orchestration service can be authenticated using the concept of self-sovereign identity (SSI) and a decentralized identity management system.\nSelf-sovereign identity is an approach that empowers individuals with control over their own digital identities. It allows individuals to own and manage their identity information, granting them the ability to selectively disclose it to various parties as needed.\nSSI allows individuals or entities to control their own digital identities, while DIDs provide a unique and persistent identifier for these entities."),(0,r.kt)("h3",{id:"access-authorization-with-secret-management-services"},"Access authorization with Secret Management Services"),(0,r.kt)("p",null,"Service providers should submit API keys (or private access instructions) to a secure storage solution and grant a read operation for an orchestration service. By utilizing SSI and DIDs, a Secret Management Service relies on the cryptographic integrity of the DIDs and verifiable credentials."),(0,r.kt)("p",null,"Service providers must add service execution instructions regarding secret keys alongside the governance rules when referencing a resource to the on-chain ontology."),(0,r.kt)("h3",{id:"jobs-executions"},"Jobs executions"),(0,r.kt)("p",null,"An orchestration service starts a new job when the OKP4 blockchain validates a user execution request.\nIt fetches data, requests services, and performs various computes from one or several off-chain resources according to the necessary tasks to satisfy the user execution request."),(0,r.kt)("p",null,"An orchestration service has to report to the protocol the processes status to ensure service agreement enforcements."),(0,r.kt)("p",null,"The execution result is defined in the workflow, it may be integrated as a new dataset in the protocol or sent elsewhere outside the control of the protocol if the rules allow it. End users can visualize the final result of the execution through BI components, for example."),(0,r.kt)("h3",{id:"trusted-parties-considerations"},"Trusted parties considerations"),(0,r.kt)("p",null,"This part of the architecture involves trust in a party. However, a service provider can also deploy its own orchestration and secret services to remove this problematic point. The initial central workflow engine is a way to connect to any external resource without specific service deployment to wrap a protected entity."),(0,r.kt)("p",null,"To ensure decentralization, several external parties should propose their proper orchestration implementation."),(0,r.kt)("h2",{id:"dataverse"},"Dataverse"),(0,r.kt)("p",null,"The \u201cdataverse\u201d represents all resources referenced via the OKP4 protocol."),(0,r.kt)("h3",{id:"ontology-framework-and-interoperability"},"Ontology: Framework and Interoperability"),(0,r.kt)("p",null,"The ontology is the way to formalize it on-chain, with a graph modelization. Using standards like RDF schema and Web Ontology Language (OWL) enables interoperability and avoids any expression restrictions."),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Unless there is minimal schema when providing a resource (to indicate service execution instructions and governance rules), users are free to specify the metadata they want. The more descriptive fields, the better."),(0,r.kt)("p",null,"Metadata profiles enable composability. Whereas they can be original and specific, they should respect existing industry standards. For example, AgMES (Agricultural Metadata Element Set) is an initiative to develop a standardized set of metadata elements specifically designed for agricultural information and data management systems.\nStandards are not limited to those of the industry: they are specifications like the E-Government Metadata Standard (e-GMS). Thus the UK public sector has a metadata standard for making data handling consistent in order to promote the efficient use of Web pages and documents."),(0,r.kt)("h3",{id:"connectors"},"Connectors"),(0,r.kt)("p",null,"Although resources can be of any form, they are served via technological stacks that are more or less common and standardized. An OKP4 connector defines a specification for resource access and processing for a given solution (e.g. S3). It is then necessary to have an execution service that the orchestration service could use (e. g. Docker container image for an Argo Workflows engine), which understands how to interpret the instructions and returns the expected processing result."),(0,r.kt)("h2",{id:"beyond-the-protocol-user-interfaces-applications"},"Beyond the protocol: user interfaces, applications"),(0,r.kt)("p",null,"OKP4 team builds user interfaces on the OKP4 protocol, but anyone can publish an alternative of the following applications."),(0,r.kt)("h3",{id:"blocks-indexers-transactions-explorer"},"Blocks indexers, transactions explorer"),(0,r.kt)("p",null,"A blockchain explorer is designed to present blockchain data in a user-friendly and intuitive manner, making it easier for technical and non-technical users to navigate and understand the information stored on the blockchain.\nThe UI provides transparency and visibility into the OKP4 blockchain's activity. It allows users to search and retrieve specific transaction information, such as sender and recipient addresses, transaction amounts, timestamps, and transaction statuses. Users can also view details about each block in the blockchain and the transactions it contains."),(0,r.kt)("p",null,"For greater efficiency, dapps may use indexers, databases replicating the blockchain state, especially for a block explorer interface."),(0,r.kt)("h3",{id:"administration-clients"},"Administration clients"),(0,r.kt)("p",null,"Portal is an example of administration UI, the main OKP4 protocol web interface. It's the user gateway to parameter the addition of datasets and services, build workflows and create new knowledge from the shared resources. Portal offers an exploration view with advanced filters to get information like governance rules."),(0,r.kt)("h3",{id:"end-user-interfaces"},"End-user interfaces"),(0,r.kt)("p",null,"Newly generated knowledge could be presented with customized dashboards from any business intelligence component.\nWhite-label data platforms graph the results obtained by running workflows with the OKP4 protocol."),(0,r.kt)("p",null,"Since some companies cannot have a wallet to use the protocol, front-end interfaces might also provide a layer of abstraction to bring data on request without any blockchain interaction."),(0,r.kt)("h2",{id:"connectem-all"},"Connect'em all"),(0,r.kt)("p",null,"Let's recap with a concrete example applied to the AI industry."),(0,r.kt)("p",null,"Two companies (Corp A and Corp B) grant access to their databases, while a third company (Corp C) provides a machine-learning training workflow using the data. A data scientist (Individual D) wants to get new knowledge and invokes an orchestration service that uses resources from Corp A, Corp B and Corp C."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The OKP4 solution orchestrates the training process without exposing raw data, ensuring privacy, sovereignty and security. Moreover, the protocol provides revenue-sharing conditions and immutable records of the ML model's training sources.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each on their own, Corp A and Corp B indicate through an administration portal the underlying technology of their respective database. They store access tokens with a Secret Management Service, with authorization for orchestration service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Corp A and Corp B continue on the administration portal and define the rules, with access restrictions and payment conditions (a fixed $KNOW fee per request, for example). A raw Prolog file is accepted, but the interface provides an ergonomic form for a better UX.\nCorp A and Corp B inform a maximum of metadata, especially to describe the different available datasets, their structures and the nature of their contents. The portal combines the service execution instructions, the governance rules and the descriptive pieces of information in a Turtle file. Then a transaction adds it to the on-chain ontology.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Metadata indicate that resources shared by Corp A and Corp B are compatible with a ML job from Corp C. Corp C also uses the administration portal to submit its training model algorithm, governance rules, and service execution instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Individual D parameters its cloud environment with the portal, setting up how an orchestration service should store the execution request results.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Individual D uses the portal to request service execution with the ML Workflow from Corp C, using data from Corp A and Corp B. He submits a transaction with a Keplr wallet and pays with $KNOW tokens. The blockchain validates the execution request (access and execution authorizations).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The orchestration service listens to the event from the blockchain. It recovers access keys, and then executes the workflow training algorithm from Corp C, using Corp A & Corp B data it fetches.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The orchestration service tracks the progress and state changes of all jobs within the workflow and reports this information to the blockchain. If all works well, service agreement rules are applied, $KNOW tokens from Individual D are unlocked to Corp A, Corp B et Corp C.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The orchestration service stores the result in the provided Individual D's storage solution. Optionally, this new knowledge can also be referenced as a data source for other workflows.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Individual D can have access to the newly generated knowledge via a BI interface."))),(0,r.kt)(i.G,{chart:"\nsequenceDiagram\n\n    actor DataProv as A/B\n    actor ServProv as C\n    actor IndD as D\n    participant OKP4\n    participant Secret\n    participant Db A/B\n    participant ML Workflow\n    participant Orchestrator\n    participant Storage\n\nNote right of DataProv: 1.\nDataProv->> Secret: Database keys store\n\nNote right of DataProv: 2.\nDataProv->> OKP4: Database reference\n\nNote right of ServProv: 3.\nServProv->> OKP4: Check workflow compatibilities\nOKP4->> ServProv: Possible ML workflow (Db A + Db B)\nServProv->> OKP4: ML Workflow reference\n\nNote right of IndD: 4.\nIndD->> Secret: Cloud storage keys for results\n\nNote right of IndD: 5.\nIndD->> OKP4: Knowledge request(ML Workflow(DbA + Db B)) - $KNOW payment\nOKP4->>OKP4: Valid knowledge request\n\nNote right of OKP4: 6.\nOKP4--\x3e>Orchestrator: Chain event triggering\nOrchestrator->> Secret: Get resources access (Db A, Db B, algo C, storage D)\nSecret->> Orchestrator: Resources secret keys\nloop Db A, Db B\nOrchestrator->> Db A/B: Resource request\nDb A/B->> Orchestrator: Resource result\nend\nOrchestrator->> ML Workflow: Compute(DataA, DataB)\nML Workflow->> Orchestrator: Knowledge result\n\nNote right of Orchestrator: 7.\nOrchestrator->> OKP4: Workflow state report\nOKP4->>OKP4: Service agreement exec ($KNOW rev share, ...)\n\nNote right of Orchestrator: 8.\nOrchestrator->> Storage: Store result\nOrchestrator->> OKP4: Result reference\n\nNote right of IndD: 9.\nIndD->> Storage: Get result\nStorage->>IndD: Newly generated knowledge\n",mdxType:"Mermaid"}))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=11748},4824:function(e,t,a){"use strict";t.Z=a.p+"assets/images/arch-basic-abec985936300d8799709a7222468efd.webp"},46783:function(e,t,a){"use strict";t.Z=a.p+"assets/images/arch-overview-f2cdf85c28a10b6a4168c4885c7baf83.webp"}}]);