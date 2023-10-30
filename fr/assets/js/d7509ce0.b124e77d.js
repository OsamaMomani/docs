"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[64530],{40439:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(87462),a=(o(67294),o(3905));o(8209);const s={sidebar_position:4},i="Upgrade",r={unversionedId:"nodes/upgrade",id:"nodes/upgrade",title:"Upgrade",description:"For public networks, it is recommended to use Cosmovisor to run your node.",source:"@site/docs/nodes/upgrade.md",sourceDirName:"nodes",slug:"/nodes/upgrade",permalink:"/fr/nodes/upgrade",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/nodes/upgrade.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"nodes",previous:{title:"Running a node",permalink:"/fr/nodes/run-node"},next:{title:"Validator Security Checklist",permalink:"/fr/nodes/security"}},l={},d=[{value:"Setup Cosmovisor",id:"setup-cosmovisor",level:2},{value:"Install",id:"install",level:3},{value:"GitHub Releases",id:"github-releases",level:4},{value:"Build from source",id:"build-from-source",level:4},{value:"\u2699\ufe0f Init",id:"\ufe0f-init",level:3},{value:"Create Service",id:"create-service",level:3},{value:"\ud83d\ude80 Start Service",id:"-start-service",level:3},{value:"Download binaries",id:"download-binaries",level:4},{value:"Start",id:"start",level:4}],u={toc:d};function c(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade"},"Upgrade"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For public networks, it is recommended to use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/cosmovisor"},"Cosmovisor")," to run your node.")),(0,a.kt)("p",null,"Cosmovisor is a tool to automate Cosmos SDK node binaries upgrade tasks. By monitoring the governance module it'll be able to download the new binaries ahead of time for chain upgrades, by avoiding manual operations it can be a precious help on stressful ops tasks."),(0,a.kt)("h2",{id:"setup-cosmovisor"},"Setup Cosmovisor"),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("h4",{id:"github-releases"},"GitHub Releases"),(0,a.kt)("p",null,"The recommended way to install Cosmovisor is by downloading it from an official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/releases?q=cosmovisor&expanded=true"},"GitHub release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --fail --progress-bar -L https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.2.0/cosmovisor-v1.2.0-${OS}-${ARCH}.tar.gz \\\n    | tar -zxf - -C /usr/local/bin\n")),(0,a.kt)("p",null,"To find out the binary that'll fit your platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# find OS\ncase `uname -s` in\nDarwin) OS="darwin";;\nLinux) OS="linux";;\n*) echo "Error: unknown os: $(uname -s)";;\nesac\n\n# find ARCH\ncase `uname -m` in\narm64) ARCH="arm64";;\nx86_64) ARCH="amd64";;\n*) echo "Error: unknown arch: $(uname -m)";;\nesac\n')),(0,a.kt)("h4",{id:"build-from-source"},"Build from source"),(0,a.kt)("p",null,"You can also build from source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,a.kt)("h3",{id:"\ufe0f-init"},"\u2699\ufe0f Init"),(0,a.kt)("p",null,"The following environment variables will simply indicate its home and the daemon name to Cosmovisor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF >> ~/.profile\n# Cosmovisor\nexport DAEMON_NAME=okp4d\nexport DAEMON_HOME=$HOME/.okp4d\nEOF\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It could be relevant to create a dedicated user to cosmovisor.")),(0,a.kt)("p",null,"We can now initialize Cosmovisor with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor init $(which okp4d)\n")),(0,a.kt)("h3",{id:"create-service"},"Create Service"),(0,a.kt)("p",null,"You'll need to keep the process always running in background, on Linux you can create a service as follow:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A description of the different environment variables can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/run-node/cosmovisor.html#command-line-arguments-and-environment-variables"},"here"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF >> /etc/systemd/system/okp4d.service\n[Unit]\nDescription=OKP4 Daemon (cosmovisor)\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\nEnvironment="DAEMON_NAME=okp4d"\nEnvironment="$HOME/.okp4d"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,a.kt)("admonition",{title:"Auto-download",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DAEMON_ALLOW_DOWNLOAD_BINARIES")," variable is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disable auto-download."),(0,a.kt)("p",{parentName:"admonition"},"Cosmovisor doesn't verify in advance if a binary is available before downloading, and if there is any issue downloading a binary, cosmovisor will stop and won't restart, which could lead to a halt.")),(0,a.kt)("h3",{id:"-start-service"},"\ud83d\ude80 Start Service"),(0,a.kt)("h4",{id:"download-binaries"},"Download binaries"),(0,a.kt)("p",null,"If the auto-download of binary updates is disabled, which is recommended, all the binaries shall be manually downloaded uphill by node operators, and placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$DAEMON_HOME")," respecting the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor/\n\u251c\u2500\u2500 current/\n\u251c\u2500\u2500 genesis\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 okp4d\n\u2514\u2500\u2500 upgrades\n    \u2514\u2500\u2500 v3.0.0\n        \u251c\u2500\u2500 bin\n        \u2502   \u2514\u2500\u2500 okp4d\n        \u2514\u2500\u2500 upgrade-info.json\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The network's upgrades can be found in their respective sections (i.e. ",(0,a.kt)("a",{parentName:"p",href:"/fr/nodes/join-testnet#upgrades"},"Join Testnet")," & ",(0,a.kt)("a",{parentName:"p",href:"/fr/nodes/join-mainnet#upgrades"},"Join Mainnet"),").")),(0,a.kt)("h4",{id:"start"},"Start"),(0,a.kt)("p",null,"Now that everything is setup and ready to go, you can start the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable okp4d\nsudo systemctl start okp4d\n")),(0,a.kt)("p",null,"You can check the service status with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status okp4d\n")),(0,a.kt)("p",null,"To monitor the running service, you can inspect the logs with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu okp4d\n")))}c.isMDXComponent=!0}}]);