"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9103],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,b=m["".concat(u,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1262:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),a=n(2389);function i(e){var t=e.children,n=e.fallback;return(0,a.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=n?n:null}},3973:function(e,t,n){var r=n(1262),a=n(7294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(r),c=i(a);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var u=function(e){var t=e.content,n=a.useState("loading..."),r=n[0],i=n[1],o=a.useRef(null),u=window.GraphViewer;return a.useEffect((function(){if(u)if(t){var e={editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:t},n=JSON.stringify(e);o.current.dataset.mxgraph=n,i(""),setTimeout((function(){u.createViewerForElement(o.current)}),0)}else i("drawio file is empty");else i("GraphViewer is not loaded")}),[]),c.default.createElement("div",{className:"docusaurus-plugin-drawio"},c.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:o},r))},l=a.memo((function(e){var t=e.content;return c.default.createElement(o.default,{fallback:c.default.createElement(c.default.Fragment,null,"loading...")},(function(){return c.default.createElement(u,{content:t})}))}));e.exports=l},6547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(3973),c=n.n(o),u=["components"],l={sidebar_position:1},s="Overview",d={unversionedId:"whitepaper/okp4-blockchain-architecture/okp4-services/overview",id:"whitepaper/okp4-blockchain-architecture/okp4-services/overview",title:"Overview",description:"The functionalities of the OKP4 blockchain are divided by nature according to their responsibility and functional scope.",source:"@site/docs/whitepaper/okp4-blockchain-architecture/okp4-services/overview.mdx",sourceDirName:"whitepaper/okp4-blockchain-architecture/okp4-services",slug:"/whitepaper/okp4-blockchain-architecture/okp4-services/overview",permalink:"/docs/whitepaper/okp4-blockchain-architecture/okp4-services/overview",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/okp4-blockchain-architecture/okp4-services/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Canonical Services",permalink:"/docs/whitepaper/okp4-blockchain-architecture/canonical-services"},next:{title:"Dataspace",permalink:"/docs/whitepaper/okp4-blockchain-architecture/okp4-services/dataspace"}},m={},f=[{value:"The question of implementation",id:"the-question-of-implementation",level:2}],b={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The functionalities of the OKP4 blockchain are divided by nature according to their responsibility and functional scope."),(0,i.kt)("p",null,"The following diagram shows the different specific parts of the OKP4 blockchain, which are detailed in the following sections."),(0,i.kt)(c(),{content:'<mxfile host="app.diagrams.net" modified="2022-06-10T12:53:12.929Z" agent="5.0 (Macintosh)" etag="DY7WdVkuI06Dr2uXJdmx" version="19.0.3" type="device"><diagram name="Blockchain - focus" id="NW_T9YAUL8UgIvDY673Z">7LzXsqvKtiX6NeuxIkAgBI+J9x5h3hBOSCC8EV9fmRpjrr332adMRFXUuXFDc605hwbCpOmmtZ5J+4vg2l0a0/5udHnR/HXC8v0vgv/rdMIpioI/0JH3zxH6hP0cqMY6/z3pHwe8+ih+D/45banzYvqXE+eua+a6/9eDWfd6Fdn8L8fScey2fz2t7Jp/fWqfVr9PxP5xwMvSpvi308I6n++/R3GK+ccXclFX9/lP/y4/X9zS7FmN3fL6fd5fJ6L8/Pn5uk3/3Ov3udM9zbvtnw4Rwl8EN3bd/POp3bmiQWP7Z9h+rhP/B9/+3e6xeM3/OxcQPxesabMUf1pMNfBSdurTF2rg/P4dFGpYUKvYsnvN/236TBmAJ+B0D6ed/Ywy/GL7HRX01asb27T5fPnnYvip+vzkiL8YWrPJP4+DTfx54u/3P6Pz98NPnzEtUKtx+PV2r+fC69MMfbtBG4TH7nPb/H6NWiKmbd0g85OLZi3mOkt/v/B+b4pOnOaxe/49xXD02bUY0bkNaOrqBY/NHbp3k96Kxu6meq47dDSDw1uM/3S6/h9OuHXz3LXwhPT3Pn9fAXuZ1a+K/T2Bx/5xDP723wj0e1k3Ddc13fjpOyFe0H/oZmP26ytndNWzmLP7P3X59zuc/nsA/9kQfm0DtbjY/+nQr2FIRdcW8/iGp/x+e2F+jfTXiQn69PP79g+XOBO/59z/yRtwhv51xV83rP6+9z9MEX74tcb/3DLJf7PMPJ3T6TPn/9E4oBf16GPdfvya/fwEU/8TGtCIpn9+KesdWdH/euL+c0P4F8viumWs4aSeMLPY/jwWHkcNhR7w8+tJ7OHMnrj6ylruhmlS1QH4x/SCuxBU8BP6CxTAgRj+5LHC9Cl0hJVNzrs6CgcqpQT3Z40OgmbzxOaAH/QCXscRHdvipJd8Lmgw93rHghPT5nJ+z9oA5ERO6G2zpIT5iCO20VvmnZzXxWZhGzgAvMBlr3KdXXKcaLnrdS7L/bIPkq7Atl0dQ+N6VnB99sE3uXgVHSd409W9WKwreV29uyTa4dCCmuNcIaCPAHiN4orAFZ2r5wm1Y7Vl9NeJDcJ8k6W0HeBYrNPwGF7UOp9fr7OUDLcoet2Il41dFmo8PaZdeNaO+b68F+kMnl6BHUCoPVMAEhBaj50qoAgvD7BPoArPVAEW+skngHNUqQU84DwVnBwQcF4PhPf/q2vPrzKvzO4qONLEDZs1muxunRWMT0l5nEaDvWJE0KjPZM6YQeOUhTW3FQvg2FyqeWK1XTWLVwmuOTyiSs/lVqULGEgBDljVZnyyqS8+opgYfp0UV5O4ZCcLhLzmZg61aRa7kxv8Sq5Y4f7GVazhc17dkIdJPpZFexvN+exh8wuod064CSzNqZV6Yv2XDZrU1XOgbkrJGqTOGyt1q8vyZICWVdzJG7dIYl+kLpEPjlGhr7NOS/IrqDKWMOAD7PaxTjscLqoWK/cETFK7sKcdnocrz+mGvJMFILbhqcaqvUe12uDJXX1uhJm+0LdFKOVLUHvvcQrhqby/kdmbHiyC5R3ga5xWsMuu5xFePmd3NTeuRJkiWeiDZAEN5yiu56rM+Ae8eKBErPGoNykTlUvbzRK/AIZmsjYr/wTOl/zmwaQBfci2ee3g3493IBiAPem1kXH3zRzz/KSrUlMTwKONwyZuIfQTjJOVRb1uQr57p0TFepXhonuSNOdyGQH0JMOd/GNbaTAuy1l8Pvzdr9KiSZ5R894HIN0TV9t0GQh0t8yFKjQ+SRxVC2+QDi13qW9R191JwWb1l7013s06QMkftVnDPl0FgXeEqY6rYrCOdSVewfocvH4G/VYIPp2TTR1VaucEDi0ic0nluXt43vh406y+X55nDPDOpNxJTgbZNdLH94QHBcaUpj2Qhe2PVXW+wDuKZnUtMDnwN40AagbETQn1UtvB7Ljwvjgjy+wEcmvp9yCnweuxRn5sGACctFqfwErxVBW+fOvqyz5B6hZYSJM319vtKXtJ78IRYF9Az2AMYMP7E/474ig0PKpQ61X4AEqjevjDFXerD5yQ5UmuCaRLC88Sr51NaxeDkKfldapAKtyFUTjwA6IFURe7RCfFPID3FEmiZUjG61WtVirwgLOAz5pjbjIc/Ix1T1F7TwPtgR4H/94APiHDHONJ9GfJ8zbnFBdGPtsmnPXY9nhavFZ3MpWXThxsUmaM1eLuE7QhTanJBQ/UM3m65CVwSXZNYHfiqx7vsittrI36NFh20ep7nnGnt9/e4An54WUJtBlHKGiOmOVK0DNwx9kZuXoLU3rh9kIi7KoFLow+Yac7PA5yUiq11tyIMFQ5feH1TS/YdosUk385+dQkbYSvmAAw9g69+4Hnp8T3n1ohzu1rflWSqgctbDDLhBf6EdykRSs3eWEfp7LlnZNpeJNLB3wFaNaX9qMNYXBro8YfE9IAVmiYa3cWrnVflahTrEhlrZedAnHxwrsAJxa1nd0vnmO3YoNFxDuD/i+aDfLUGyvtMkxfpCCYfCn3h/lmrjUtVTJs0ONRPZ0TDIPig9oCfI3GGg6tK+9WOja0qaNoM16vl+G9VER2V5bEjdy4mwbZFpZ30aIhLyaH5h32CXvwHhbUEnTZm98SNHSP5+HPyqI0G5ulmozRtHqgsCVk/Ay9VvBnt/RxbdzHkpPeaRtma0Zs/GZXdfx4VbmF4hebzQV72WjjwgSTFj9zT6kvzxp36Sa9B1PJ6dvbONFTpGdXoRS24bVcLs2bZAB90NgLtadaCvbKS+93dUFOTQu2oasRrtmr0r6R5cKj82ZNB01FvrXCzGLd1E2wWGwbonJROwmZU5NV18qHI6rNgVksU6SNT1BIbouMuHfs4DXg0j3CeRqmlGxYYnagz+sqDmO05GJG36OKciIdhYkTWZ6SYqEc+EsOrlWpwRY0hOWVG3e2EGhRqXNzCtCt3z7VtR3xPFAs10xoBOyrCU5vLcoeZXUE68XBM7DfgUvhao69B/zNmChKo3R14ebQ642zuNun/tILw+y8rJddoJtssZv5xTDmRKRf/be28EsbvRoS+XXFTSxJPNvzu6Q3lWBU++asZw86kahQ91Ag+nHW15Fp/JfYe5u1coNanlgYZg5T6Pvzph/c2blw0cPorT1Wg2fjGt7pqq6ooza4xebSRBm83dKSj5j36yrQG72S5+f5FaIxGuIRyDYRTz2ymEfG64T8bhiXv7yZ4Lwzn7HZjHhV5DdMFoA3l3Nj+9bE6ygSM+Z141uNQ9PPme+XozV2UsQFW/QKNkETspFdFCPF3I38de5oHU+6FPovjZcYaPegy9/n7YUFthspYgzImrxLQVu+V3aNl0AoPHXCR24OzkVX+zbNd4H6mcMJOZQH/2bc3BCYuW0gu5hj54/r65LO2vvaq3dpV0quA8N16XJoZyoEdsQKjDjSLje9K/cKJG2D1YZ5cL1HAbNeHRZX24dzAbhUHZ1QlA4VcJhwgaOqcR8LFnnAsxd+uy1XjbdOO8K+Cm55RatFLSTAovZgE8cOO6bQ7LkaGbcznXTjDZj5xS5jYzs9aTj/kCYW0myxjnD/6dAvOO6eBUO3m4WDaUQ3KqRUXltkFwVU6KrgogYKQAZ3TD60kzIywCNYWP/sdMJ5Tay4rBRDa+Q+c4ETAylulCYGciNVV3g0frs99njfHQX7xPDblS1G7MgEMR028wY6qTJfKSvem4PtCJDTPaZMTz/xlFBZB3toENiBKe4dkECvZ+dMiBVQ6xke3cOOzo1GzrrK80+bXNi2ds74fY+6PoIwZ0+rnWsVCCHOGiuAR707zllpg/jVoBRlHDTKKVxejkO4XQebVQygm1el4ulJgAwi6YVwTzsyWZ5JObGZZcVmnkLLCuB5xnGrWIWU6Ebqpafna9SEfBnd8ZwklYRa3cA5hi7AujZ39tM3AJtFZCX9AWtSQcy60DDZUUor9oIJkz1RznVaXTbs4CgmPeOjyE9g2Kza0XWvrsNL1Kr9ztPjkzNR/zuQdgMcbL7Z3/sDqHxwfQfcBgIxrQ7Wda4DYWQgMJnhc0/Ox/FbHXmGHL31btEb9iE7JigLAwV2ErkhoerUQHs3VcxAen/MamQzrXQNjY0PcjLjzBK6gxI/fU8vVf06EmIAIE6cdLGo7v1886xhzK4ZGKfV0MgeM6rjQVTFtlRStdZ3h2RizvRgEu6wGxBRxHvteATEPiDbufn0AB4zC3UNPKrYM2u5vcZDQx7HrnwMsZartMo1lmSQT5y5AZSRsIt6sBN1C3beLM5NgICde0yXmCafbMeTfMV3kVBa4LyZl6A4Xda1Rh12p5p8PSrn/DpDIHV5Hg6zAtd5bSJ4xa1y9tQaJQ4wkcIK8Ho7bxqj5Ln/yt923ezy/mBvt4Z3kWPiksMHS1fH8i6sbEkC2TgmvlkTYb2HrrqlQkYnch7XXgzYmE+0Uju9HYCZjuBNAitdQASzVoXCSkHuML9qFpBJH151i4LUMWUYA1jB9F8xyQ4RvEZixQuQaQ7iipMu3hHYQ5Fw3CyYqx0N9tmd1ooPzu8AmnJcXztKQQFVt9iSiqj2ce0fG+RZG6m91RMEwF6L7zACKVJldwaA3FtpUrM2M7bcEDHi5nezF/LqEddyc+maHAKXvJos1kFibXUH0CBX0O+8q7/VdEEBXtDZArWLyGAkZzsUjg9G2iU47oEmr8F9qB34sMqCuS12B6wUys38wWPyaJq7R67p0xp+rhN3Fl4X6jI8AV75BD9Xnuutvtwdt8BNdCkM06PZzC49YyY1XgSDUmsdq+MhhHxXDSBW+1yV1FiNQ88pY/6o5IxLCf+GpUcm5lWJiJ4pQFurr0tLKcGrkQA/ZDsNcDd2KQw5JUs9P5ggd8/DgY3zhgIbD8mEfH+4yn6hlOXJhQAMBsMA3nvAcTlc+R2nC0J4cBpYq4QYRMWrqODPWyQgbmbW0tMyc72CljTQuwaauoN961xE9uwcL5m0Qy6qn8OJvVCCBqDXskottdTIif0O2I/lzrvh5iT6xt/0V6ASjkk5t/MCbViZBoilLkp9O+/PRK0PASabDGASVpM96dJuO+jRTPTHIN6ox8Lp71yratp86+Fl7O6ebxzAdF+ABW6Geow6AqmtuQIttlsrJPXhPKvqYoiYWYAZDkcFdmm/zZnpQfOD+JmBsZiFwPQCmXVU5TSE2kIb52vG6iR742UUBUHqC44bsvkZiI5/gmfjywmS/QVLgDUeMKCxdVfJkDxHlW+x4ib5mcxbY8bfNytNlghvX48bBbl/LNsVhdCfdMwPfZMWPqttaGrmG6fIGH0RTyg+lGB/O5DETkpFyn4F4T2PUMWYb1oJotjkrbI5twhoimRkrDYGUTZb7gRjbegm2XtiC1yfdfsBre1+wTeYybstmsPXXYXeDrkSxMiqQvJ+tSSOWi4WxfpVUEhse+m9JKEvGJe8zpB0Z0JeIftiNZ++WYQCceiTgL9rtQE9hz9dbs8qNSoYs50UyNBF79hNmEnRr6Rsl1zEtg7IEBlkAKJBlNbx8Yr5ybavPkz0zV944u1qzx27Ra8KJstEiMQKjsiLItOn4isfi6A0STlxcb3CeMRmPP+eKeIs3SoEYoH0ztrb3J4R/pf1pE4SyHP0iZc2QQzIVB1pSBernJF3NnuQLzJn3oZZfzzPBA/oPx2Mni7N75tqUZe2fKoLd2wydtCnMCmCSw98/fBhTBYWyHDYzcrlmEhmK+1uOrR/1qg5eG9gfcYC/D0WtXLx9BpyqzjWF+uEvzoWYhR433d2KQ0bpRB4Z/sgjJ22IrYcZrBzgQgBaWA2VA5JkeBO11fEBw2TVFx3bGDb4R09SJltGzxIUcwZOPF2CdShQwDiAelHykxmYiXn9va8ZYiQVRjNmbey2FhBxAFC6D0c4acrHW4emJ68PwH1MsqKewYCCth6rVqQ/Ni33CTstxyhhDZxjPGy7YN/I5hCxm8a+UWy+POGMBl6zHCNm+WeBObJK4S7KEPnDSM/ezIxyngXAiSVF0QNyjxcyc5kambMw9uAXR2ZcZjlK3lGeU445EM/kKkctI/uXGxG0V3rZ7vlFhvBuWLeek1eMQKljhC6JuqRvonGYsoInODvIUFQ0u7Nrsh3NQPEBk48OKIzajEKpihadknzPHchihlXFODtWLIDDU99RXmBdy7sNozvHJrRNE2qz0P+1LGekfBovAtzxyzfGM0YzxBlxDWGJBg/aS5eHlgHqgV92NA4xDokw+xonc59l0EsiEWCD+1tQn3AsMdvDFKFXdYhObKu9oqVexs3RimPlX/qohFlGOZmrLo/3qf02kbIgw4+d9hYQK0efEWXAWqFWqsoL1kUarf6T+1WYLtLwaPu1vmxCFT/OnkQ40x8ed2Ri54O/U2TBKVBiKobq2luShIM+xzlzOreXJL9YP3a795KT/j5g3fMH4QBWgcaKXfexflqF7203YvjteULKNqyXeBda+jFadO3UVIkNzQW9sReiSjBWhQPYaxA1oyMCjbZS5Of+ZQ3ewoFj+b8OnwnL1LfosJbQ6s8I8t4qa468dAzo6Zd76dP48AyNKHjlWAbpkyOGBVXGO1pILRxgrAlHpTzJq8d053mdkXnm2fBLOW1Pbf+VB1FC8G58rCJvuncApTbgZG3YdiM0kwugHIahDbP7xA8nr4QNi4KvM3pIslVjl8JRqYfhnd7PspWfZ77j1X5TOAUkOFL0Kgn972JWR2PIeTZ7Bm0j9/Yk+OkNprj/VNy4Ebqli7hx0DFQzyc2GN8xbfW93QQQRWyM87m+vLS2gksckyuvufwjoxJlUXRnWbuxwbpsEXlbTm/zoM73R8GbqxWeshbeXVZUmGi5vmm6AWe28dNA7SHDUwuLyAsJRrUBjutEIp4Ms/P9ccCr7fTw94qvCzf+dWLAqbHLueb/Hynxc9cAQzICACTCjnzUVZM7Hqlonf5nnYYR9r1eqiHE94Wl4jCTVvYeTrzIW/U1/bc69JzQFjG2FgsJoNwf1QyqnMFnyE0H+aatrLhZKtBwbuUVFdNXL45zsqP84OTTB3SHjgvB4liVGnKMQzzJIyBTnsriE84qM5WgsNsoFJ1SNkZOm9Odo9Rqx8MhTqAFikqZuLNDX6iN/qkoEGAsP3snFA76nbwezzjUOxoSTV9Ecj2C6dBuajH1AtwaIM37CPbb0t7RoHpTR43+jAAyZkV5C3oSgpe2RI/XsO1OIpGEP1LNxirI2O2142ESUadICu3QZm+TlXEig43GkDkShCylJxIyf1UtAzMN8haYfCxWXAZlnvR3yDjZ1y0UtEysfPJFJVXdCaKLXYVd//Z56jSHNUOJZAiHD/dmJDogsVLugCGa2pf8RTV2s7l8+Hsv77+9G74/WM1HKtSFfaxPiA03m2vAHVfCXRJYFaq9qxDAQyohJWVDpuBBDx9Z4Pn4wXoAcwJ8Q8L4rze/J+0na1YNWjp+IOyAvQZ+f/lMrBaoT4qdghqseIL4G+xxB6kOFZXi482W4JZe5EvKcqJc9cq9WVe4m6Y7JZkf/quO7HgC/wEXpUcoCUryszd8acsZ9Rq0fbNazaXpGj3c6yflnavPH2Tg2RjnQuM4LJn1xTNR4tNPFeqnivRqMk1mnMu7U2AEEAMmGsvEKxMghvLHAGTgPJeufx7X1LyaWYBCFSadfQT/rZ8lGL5BpH/NnvEY8TpQTO0v4yiaF/GG5Xkq8sEbm8ieA4O9sOJrCEHPQrgTkd3mEI9xfvzMxNGwBMgZwXNf5zBaXOFAhWfpLMcKAifpCQY+ExDzz07dmLSDabhKh+tn29R2wOFR+U/GCgzVmSLWU3ntEeWwQMuLSrc/FTsXkkaIwzK6Bj0RKOqRBBQBPvT2jtIBq/tJfDMbh8+Jt0H0z/O0famV1Kinn2/x1Ja3ACada4acn87o5CyFaekIBp29sJrzo+bWoK+Mh+bFYrW6559ioXGRg+DnD6njhKJe500pAZbl9D8vfKTIFRXmq98LB3qUz9yFqtD52qU8IOXZcBET9XRr+IuwqBHomHHK0RqOOiQL1VKICffyvuChodeGBqnxci50as1tUXtsTR1XzAe2w2aQTUujo5/eycJN+E08YjTVkNENyW0iRohyDdvw3lI9yF/Ji+bGgdVgcn44z0c7rvSZr+MyFMRrgZ8LJWugbCPcBNrABMRcqpl2J0fNuXtgdtuIoRQ6UIzBbvG3MPrUiDWqFJaEfy7IUb+EzUCVhdZWQdbxr9RiecdnGmj5GDsrR+Os//2D1VENeQCKJYm0EmxcdMKE2TIrop+Y+XHHYBXiTXHxz8RVwSz798e5evsb5klU9jzUAZ/pbzzJ+NuA2iW+M6GHf3EW9jHHFVLCmP7cDWTn13DSzd7EN8rJtNmQCkpJ75LpnrZ7yZ6GD8cUNVp4VK3sY6/AFo5smotWrBc9s428zNWPfEbO3J+SdqMXbm+zOX14T2fGniiuvszqH7OmHlUH00HvuUntGYiZ9vMbHSfB89fBg5bzG8weuEyVmTSXdAhIdapJ3Zs2p8+B15ShCJkrcnQMoeX3w+mQAtb6acubG9ZU0r3PULRypIg2wzjgmUPN7CfeRrd3iXZ+uvh0MiLVuBV7Q0Vi1jhAmHym3teaCwGfxBbOEC8p8oDv17WPMd1PkDdwSYYSX9trY2ePH6zaeTXNdWcIlL5dBlbfs+R3QfVUoWshCDZEITEiWD1Pus5sVmw/nr2mYsBI9HzE4k6do3Eod7DTkins5bguDlfyvUxT3lxb1tU2hVmmsdWWv87UvNOBTORdLsPB6+OCELcG8hrD2vo+fJ1Sfey1tvipso0sk25IdE8Nq1nSgoYPjX2Sp+PU1KXMN24+hJXxp47cplfbmLGGPbJt0kUhGz3IBLsMXxqgzB25VKZoUjNWNcKhFIXgv6zJkWdeNI5v9ByEIpAKP/sZAo0X/yDMhJmiy5EqOe8JB36FhZcv5XKysvVQEPQ+ud5vgM8Zdo/9mo9rHNo/sCytXMN54ngfKVlnKo7R9TSzWdF5cLdWyuUyvzlWV3+g+r5JUL10aeh4+z9BmOUabNPcsnEe/Gwz4/TgTphl1VjV8nzNYofr03BBSKUznAFFnDgQM7I2u93VarMZ23mftjFsiPe6eDcJFVsV8fzTsgnACShUOub1m+E36q8tbIqqbxEbYNAFUMzoMkGqlJf1EkLTROCJztEjI8fz5LFZy9HzMxTao6eWnevS4EmyNBI8AKDE2lMpL9lMlozxwb5reIUk7BcHav8BxsBvsNg4GtmXtYJ0JBXRTzV02iUm2YnFzSi5TahsI2vWs5f3bm6hdLFltKQ5FTzBJEkVwgN/QI0S3r1cbcHBjwKBWIhbRBs/mZFO/V6oyhSsZiOy/w5wjsOIs/PGCPH7uH5GMycTy6PR/0wFnBJUTkAJiQEbxj78Y4Y7B2mMhiuiHlbu7KGBrRCGGl0zHvQp5k73pSj4lJipU1bNkIsl1XbRjReWuAC8wcenfLPSmLBQsvuBMp/4LsWnNCQ4htucNA690M/LsqDtG/83mphgZLB++kIi/nOdtulPaIyctd2UGwVtB7Q1uoi+pPL7Tbi0c86wAHx9/wUqWfNxBvX7ZD3Sw4pE49z+3BzaVdn2WQYczTe9NP60N2nBUFRoAuR8CKFQPReJ8YBp765bEKg0GzMK1k08NIwgZFjXHfCzypzw9IG5pOw6niHxxq5MjGIVfakuPWbReuN2R1KE3eBkJmSjK9MvTtUfxiyXe7BL5JdgLJZAbzrsNmrzgLZjx73xEPYNmMIxFqV98fzHNZ43BUWWDz+vMRHJ50vDFpzxO9ZlwDNbWgQbnJlgzt7z9lHfTjaUwYaDZ+eoxFB6XC40CfymBrj9QPTomYSwKd3ukrPIpeXQUK0p4lzDTfdeEp8L3g5KJcg3FJQwJiKQnXgkBYtUsNmrtoM5CTc+QvbVv4QARw9rRxMOIu2kwIu0RJzA6WOuwtD3slYE9N2sJSC57YQ3vwF8X26rVfotzr0W3vfRPv1pDn1enmeN0P2LdizwHCEbOJflGysF3vU3Mzqr+QBTP+RZcBPRs9HiSzTmnwKC7m4h/3AMJt4EwfIOCRUW+lwMA95Bn31SnIheJeO0+XZ5RK+9ZqLr8OQprBN43Z66s2tQu4caXWIyzAyyBAhssanREtzpS46iwOjWVxd4AC8pMAX2Ill2QDZr+kjiwx1rsCl3ytVexwz9noPh5kjjuQWazdxF0ZwpUW87oOskrf9qeG9IKC8/gDq3YE5aU9S5O72FpOQzXDtbrg0Ka0gnwLdXoufClLMn3rmk7sroM6rrMmmggm6zTpkFwr0Q3BlUGXg4PqYQcuMd2eLRk9hIct4CMBHm5bAixxptYn22PXrsSndnQwKKR33F0z1Yi+ivB9VGa1Ax2Vpzt0DVJu+DMqnQh0BOo6EbJZ3rmCvn+/E8rO9Sbzd21n5YYfOtbLGd0i16faEsbvk6Nprd9fCKnfyLlt84oltuK6dfWgPSNdhCoXomPUVHo0lb+8vQIUlsLdaeSR9J6erm7nhxr2Ask8dgt6jYesLu/w+D3lJnW20wNdklesE+6SMWsRug4ldgvzpwygUd4pwX3steZ2Ganz8eSbvJ2hZv8o3mOIdc4sFJzOvY4jfVWE3T6yMC8zrJnoAszL/1vIV5bMIqcHoEit9ewZmDe0kE/UMORuQcmHXjXRAW6xwZdHFzXoBcu9S8tVXd/pNLwPEfO1nlQXtBEvgrOr0o8j1sMtJo1YsroKU61FZonFX5tSsNaub1yRfIbBiYF6A5hRHO7QxGMFlOEl3OEk1zb2k/dLuEMcplNbnl83X31oBzjs7+7rXKzDcXQzz8RbMe4VMlOZfDQRS48Wj2TvBEiR0XzijRmc+jmBXWs2s+UqwFHVwU1d1N21N5cpIr+DXl1gtKdJ5My7A3KdC6zimEk35cbngp+XRnU2rX8fks6pJwblOQ2vtE6FKwQJtKzhtWOZviNhLgr4xmG1xQk3cMfd9ybZomOq4Dz+rEf4Gzv15lZh93/gbqiekph5vDR93cPJIflOd28VFJT1dG19YP51korpkoirYGifS184VHFr2B4saRb2e5rvhQ34MeUQ0+1xo8tWPt/LY1j7rgu8PB+vZG9DgHErTI24RqR2DSODu0o7KVuCINSu8r1hDq76xamlDpz7b5l3UJ3EC5L5m7IMkSbDOvP/0Jk6uEkbYlXh+XBvDlXbJ/Gw/kcLHGGguXwX569wH88PLTISlZVRTP/ktn7zOxjA0F3VOpfXmXhVaX4d3Q2exBz0Pcq+lQ1szRDO8j6dkGNEOgCg/na7M8Pqd38sgI5/k/Gs68WW4928IXA8hEjFXOyKsrw8RYvnAI4h1z+Muvd4RpGvVZ3kLn3RaopkOSTCzPsznB9oQp+NdxiwNzAnN+lnGiI0d2qwNW3pfGXm+1BgEduHp1vr4lAV7R/+gDFC86U0fFGok3ILs4ZPwDVU75Lsku5OT6vHpfGWlHeTho0xocG2b/iQu/aVjyOITx/s02NUY+/EZ282SmYrbkBblp4ifmv0WVXVmz33c72h3oX3tH+eZWdkXyUvIaMrRVc6DF7bxB7MYLJcUrr7FGiRBLZHPF4GlFQtZnOAKsx0tLXmP1fdnfcTduFl/avS1qSb6oEM4lV4zGBBpFoDmAMQ73GG+fepO7BE+peZQF96jmpUxWUqdQ/UsClCbVSY+WnbFa2UB/Slqb49LqRORjbIfCDlgrLZ8RWcDOffrCSYX+7PqB6nS3kSsQPACdEgNEql4jiI6Wat+evav8haJhpfNFdAeMrQ7WXtY62G8o0DCHr+Lk+G9wayCW7eafMS96Lu1WaFaKkdcBTiSiwuN2jeJwzj0cN8jrNo+Pi7bPEiKmKic3JMj4tZUMLiQg2KS7wO1aGQ3V94Qg0KhbuzIMaF5psKM84SONS9PRjlnFbzKeBjeYR9LxukVBy36lYgksMHkivvIIOaTPR36YQ2oQv3A+zNEDmdPujQOAAisNKoriEElLajaeC4SnyYMDo51wCgTWl01HL4z++Ys6UDFI/u4RU+BVhflpBFWRFLK2TNrGZVoSVKnzHy9rWV1nl59W6Zo9CLzM3pAQyTleX5GcE7RsiGbwmcw1QUAV96J+B6XJxTh08gv0W5hFsyMXACfJADaHfK0Jv9FqDep4R3pY/cVJL2fWqw01xnV46fwfObmJNrovWSOuI6hG6+sfBbzkgHhnizncmUP239Fauf95sN0mDaaJaoA99dqfqV4uNuk93Rpy9MXkZUJtiN54sngBAZutwryGJcK27DATC19OtUPSphhlinCuS3vfPxcIAC6zifWIIWyMqcT8mMy2exbstxuxsWalXPQiKEDPaV8VGKkUyqxbSTC4p0/lmuFE2yTzGm6CXZF0hpv2re2MTwH2xAy4zp2eNNvSMCNHIZscLmsS0+hHU8AbbRSDh2DmWhY2rOAoWhnOzE4rj0Kir0+xJpkGys2OiD3b8V4kBR5e1496eNtJP/hZQd9RECh+WNZyNft9bO8Mh0mJBFom+q03Bv17P6gnZSDPXeO6xZo5eVSX09+rVEVV3aXfnFF9fwzyiANT0nxSp4reyatyNxxm543teTrQ95Pn1Up3/LaVvhEj06C3OqYURRE2aGYi2bh5atZUmgRqaWE4GUifECeLKDV3aHTqwEx7SVwT8npEo2VfuouK8omIVOanjSgtYDiuvFBbYrukkwAxdbT9kis/rWgIF9IcXrVwk+NKd5YJ4Y8qZt2WhrBDb9K1O32RHvZkBUOcklYt5eYea4NPrEl4EzYXDt4YH0mbvp2xlibdw7ibCXzxdleg6P+8CSuurZ++yJlyPJofmyZqhYXlse1nHjlqLQiBo3vPBHfkYB+bXOdd8oJhFehvDQvZaGth1FKZju/rkOXOmri/NwVb6M2zHi+umGIbZ24O5xJE8a7F1rVjpvBpWG8CWJgeuoB22cwjJhnetVGEFV58tYYO52E0IAvMZwIG9X0UdCBbQ7Or3NK9TpAa0B12T9oY76GK4z8Iy+qAT0hhjMCq0f5woH5AswVyjsTiXB0AfMdDu/thCjDTGdiUYUT+njFYHiB/F7t4u5kSa+ddFtcE6v4BMQYjQMY8vZcNTlT5711/7U0S32eFwharwShhE+qcFqYzS2gak30WQEAnxWA+hNp0ArAPUAjiaJSff/97bSgtyiKKfgwM0fVA+0P+xrcAkY5hDnRuoOGOP90Y6y2aP5pxaDMxrONDKa+qgL9H+4y3XKW5psSe3kuLwDcMjS0gnD9wyRQXar68GW0gnD9iWCsGgz0L1L9T1r22ozgz+dmY5+cj79X9C5KheJXUyv38wbD84orNZML1zZqGByDvxyoSmmAUNiFG7hBogPpH3uP59ySeqPBM8yneRh7EERIWnlucAdCKNiKNwT/aKkXtKRIgGmGQ01ifBHz7acOHd07F6bry2dveUPc0qYrjeKD8ARW0NHU0aJZySrB9OMYy0cHycUNRgLDbD/zIrJnVPbilbFfnKJlc1LjUS3Mh6aJSgv34VRuwAO1/FSugPOuk0OgV0kG6obJqHLY7/LGkmpOHkoPYwqTmaleIes2yioAJ10f2cEpTjWo8WWhOOfko5l0nALUYqWeNH+0B684DePIPlwDRSf2joHKvKK1Nojt3n2fm/AYii+oiFWBp4oYPeAu3fJZUeuJS547Rqqi2BobFuBQqYAaYViOsxCyE5yIPentsM5jE0A5szjAFUS5vOq4feLXT6tAIW+WAD31sZzOHNVLI82LIM8qgB4sVtcNvGk8HTaCDnPzreFssR4T8qt8Pgn3afo9D2wsSFZSPQGSRCRyLnquOfElyicwBoDxvroT+/z40EPyWy/j+MqGufeAwOTcteaGbsPyN/0wGIyIj+fEEMibQoTiQfqpbZsZx1BlqkYsDwFF5CzDw6PaoltfJoU4iGWywk+MUZMqR6QYXLC4fA5OT9bh/8DDQMFs0t+fYX//M//9rOCN+08M8FSV2j8jK4Ln7Iw/2QU6mUjuKDfG5D8+cx185DX7aRXnqmuofLKLIrwG0fnJi95VW3+5rfJb4UTx3PtULuURmao/niUNPNP04x9JvkP0jFrq2p+zm//Y6j46R34GadMGarJF6DAD4SbeQDNx0gOBpN614OiRYgnSDKinsr260M02Qap06EfKotQg49jNsKlbF6VB//NOCI51j9j2ka0R7ZMQGpIbjAkibcUtcIl5or3gp2S9FfxW23cPMpAg943U/EUACqcVnLXZo3nHdUaDBLEhfSY34Qkf70G48FHVevWg7RaZ0Zmlzmbg0lm9tAy7IRSYuTQo+NPm5Lnp8dibZ+qVescYNBIgBa5QpwzEqzowG4xQ7Mip3moN08cNgzAXSDECQgA4QiDjb5RNn9MS8/zHuT8eEbJttdEAthFI6A5lhPDMbV4cw3wCtU6AAxZ2uMxL1fY9DQFGJZjPTaySzrCB2pxR4ZQfxxVGlglVV9FmBcgj4H3V21lCN6NjRWbf+AYdMnJbiDvy3EWebINDGKcbKgVftQ08ZEpPMXz3LLQkt6DnNJ/noNFnAee0ES0zS03xVCOvPZcQf/w6Qk9jO849+C0rOJpB3Ih+5EX12qSFuj11Pqm4uHXESoAM1FzAvunPfH6rZrdF4DXxD9tN4qg0SFJ9JhCe+i2qLuq1cQKXmJsr7sTyXnOspB+Y54xbKYVyS+sFIz8qBaCipVIBqYIuDgSINuaMI1yUvb2eez3UmEt+V8pRRSypw2i2l41HPiE4cBTEnxwDU0OVVMg/dOgfbAvbjPzU+vQO5ayFRjuuW6Ci1XKSjaX446cXtE9/SR4oYxLQXw9ju/59HHLD//N7I4oH/u/e/W+EgPGbsX92A/zbc/+nd4+QWUgREweOMPF9c+m88jpM10EXNVfb3U65BCaTP88TDgO5YGIFxjmCn7FMJRbsYwsMTk2Jt5wzJ2BqQugavrrZMgiS5uyhvaCB4bYlQ7k8VkcVS7cPfS3qa2+2JCQu5XRJR8AorYJB1Le/7/vt06e+QdsvpBPFTC59lStDPWg1uj4stO9HebrT9RYdwZ0xN7pS+s9mdrGU16DyNvUGXOheMMpfClfahZVTx/vi9kI0yaxow1ynDmhdtg1yYss/a08sxCTScy+OW+6Y3ovG+HmBfh00afXEHvEUQj7CU+n9spEadAPNaVrATKdX4AcI5JvggDChatSw6ssX5UkHMLO4N7DhehuWSurHY9MdOO/AV2AWUDAHwFlIFOkNIJrKFfCxarerAAl/Oga2YpyJkaAUteoxoD10ISte3Ny1vGbYBcBXCAVnnUI95a5VHj7MLayte9t/zfu6/y+v7bVbFg6sJGr1nUrY3DwARpMQeDNJvATO4/nqX4SZhZUY6DhM4/uKF9G1eHJMcOIv9/Zge0IzJaU3qfP85EzcGYOAX1GuvFLoZQT55erGxo936rhDDI/1mvFjIjGHasE7AFsSdAIQYfYzcUiSSIHg3VaC8UdUauUcs9e93h9AqhOUXc3wleHn8loT3r3vw5iFeFr3lh2MEJcE8ZPJNVL/LLfrsya2Y1JUbidV6s0EFJlOdJIrk9pYz0bPljB+XRj36V2C2Yb+Kcr16y6b2+Ooji0aCD2H/O/FoDdQKHQm/OnKdZKV2pUD/Euk6nuYVGixWj8D2MuyFF4MTWeced3EVt5uInXf805I2+563lhaw7nXfiRlYL+vBS7i9xckW0TlhZyypPerwpJAENPnY3jtykpV9BQIhlnHd/RWA/+qtunA5I4Lj2xFa5XRQ3y9gtQowbNJr8rzWglZNGhyawM2zugt1VeGiC3x7ljWAoaNv/Fq++nPJj8uPwvObB645Hl6PIvnm5WqFPD1ZgCdHgNr2dmwV6heNnyLN4xsmYC0+x2L4R3taA9Hgkhz4jcZtvhxWhyAI8B+tWsmCwhJtUYXAHIIgHnkOgdk1qiug/3oHmf0fhnV5w9udkkHjo1WbzWkCKF8g0xzARGbj9BeMP5tbLpUMgvhh6Anj/yZej9m4zYbda5wGXIP5n1xH0pPlfA+KrlZj0bXzzXxXkl6DlD3IvAInkz26LzULsX60VD0JEg+cWYyhYPQLO2UWxtD98iEN1tMn9UWPtBwVQ50OgsGW6jloyg0c+KY9+6czxVn+o7cQ9usezcRev3nPFlYh2cjozU7UYTjlqH6yxuCfsLcQoxV0BKQQPaBbP+2aLGH8HKSZjg4jO+0nFpfC4ixgi5HJTlUX79M++2i07Z+ZQ+KvJOuIlDQF+vZIEZzW4KiFQVCvwI5Jl4Qjufc7J89ZGsDRKI0G1XipOEyflTugAZuCSGOuYZAPEcw/6D3/kIwn53OdDjSqLjcd5Ed7zEwVrMehpDKfGxWHvEYCLmHNg69AZ3ROcjvswnaXjrR7LVm4IgsSRGFrNUPj/2agc7YG6AAQky7x+Bkb/p0q9Ltqo3OOIUpZyX1s75UKT003FmoZ056mkFIBCt9n9x8Q+iPH7Z3suC3ysCOiXbO4KxSEK1CfEhOgdVppEx96CbNzVcXtvpdGI8c5kE9S1xHwxP5NjqccZvjPgttKZvAi2M8F2ctVIF+vA5SwzPqIb/vjntcxd24gXpbUJyiBh/1swhz8ASkfTJWInhtmlF3k3d0vU6RmCVSy1ELWDEXyCev0mXe1Rt5foGaWDZ3O+2MIANofDSISypPh3F5OxyuBm+yvla8BZh4DawzFoO19P14VO6k9hLfHcFKSRiqCwYR2FwpYEK2ezfymCeapWsga2rOTwLc6f4qnf2hLT084V1mmhr9UgRtM2H9EC4AsMJuF6y6BylFfgqh6ZWbPdec4nvMl9WI3yI6yzHD5oXDvnotgNkcbY3jLeczBE+1sfXG1WN8DLmKC/xwKGuylkVte6XBYL7Wn8Xsqya+aVLmFUoXNt9N0aKPRNzlLdEWFjmBk6QkAIIvPEh+5jqcsEe2SVaKCXg0Gl2NV7aVlLv8uGcUIB4kJTzbh/eszUGkEtuw7kFXvM6vYuYbNmk6Fpi1nnbtfAcncCP3BfQKFmsGAeqoFEKSky3N3QpLr/mwP1qyM8snv+rXSneDLYaA9uAt9rFnWbbPNCu43jmwwWsbw+JIt5wWqWo33Dcuzye5XqsWBmj6gBEq8YFvFqDilNoM2Yl6LRTHNCO9TZK3Pf1UUgowbkSsNAJT3Q2S7kLZ2CBle2zapDfjpp346tDffRxsUbA4LoAQDg0getOEZbpF2fdw0cKXllg3QpPNgBYUVrbebKIbkYD8tr1Yjj3pBdr9dvKG2VHAfGB6UWlbnsm7vhWnd7Z5IWlqbYMUMcRNHdn3dtNfAG12NA7b0PHlPWMppdmbGuri48RbPHubHawNhxlazbNx3VPvj/ySOHjlmjmXcJLu23bH9MM8OGaFjMPKR9k3nnBOP5sGg+j2RpXg+0dKAP6vXv0JAOUohiQv5LHz0QrPScNhz1/+OcIB5a7ipdoyiCAvYnq5Sbu8+wurb8IgegSNwfGbI9EQ8Rsp0MgDSlEWBFo93hckYWCHSVgolfJsfLVWTjCe8ng7fHLjBViEsuhEx4isMIKGBtGMdkqzV5o9kdSpzFOhbScI+m2Sz6+I16VXhmXu/Sxaca9Iai1lgDgNaJ2blYHeNwnd6C0OUXQeS49KyYjAJoehstKjbau5GlLcCwFaCc5a9vW+b8mq1y+Q5fLOY+nA4f3WRi32edmCTyIIpB9Jql3vTyFGqVfFDeOMIPYmfd5mn827XwlA4S0blNQl4pCjJY1dibvsfl6D6XrjdXIXPuLzqKiWEU8iQLDk5RTxdUFVN1V9ba2B7p0GEnY1lwwAlUMxYNNKPfd1co7FEubMkVxQFcI5mUr45B4pmd82JiNM4FC4nct23dYiegG084UWQqNJYuWV7Ujp2jJdKzJo5b5OdjO8W8zG0yEpDtlKhrTq1LJHJDeSjSDjU/mYvKeZKuyKxcakfJXuR5vj3qofzJoph+Ua7unKZett9itDyn2idIk0Nh+Dzu3XCgB3Yki7osm83E9N2x+k4ikWB+oLPN9SldaT0sIbER0vzybxPGjH4sjavtOu7+8MBuct5LOaH6KU0Er1XTI1KTQ/I/26sCE4bb04onHNWPPNeIaE6PK73AJIwCB3FreTqbYV90DZuIJ+MLYz1nxeLqL1i1okzeHQ19qo45ao5s+LS9hyaNzVRfuIeJoyMGYs2A3vRNgZiGLRSqTUHP5tmfSTR/U+9zjd2sQ7GSrV8EIppLH+s3I4ARmwdCaOpyn+rEfGfAQuEz9c4u2sECA49EN9n4zeiQPegUE2Eu3hzjp0/VCT21Oy2Iq0eBTVT7kWPx+dI4S0TMxE/eRzR47xi2Dzvpfvgoay6pU0VqV+J+/n9N4I8ICZ5iqsMHfLIqokuub7qlXuFOkHOa2nQoP+S1VCFTwYcVcWcGzGOPMHFpEwcZvnKbcRE2RPddmop15dLxf4LQ3xyYHWW3XUo3G7dypAU+xcrqSr3cxDB9OMoXINq5N08UDLm8ab7mJEFFQ+qGCetEt1fd+ZMsj98ZrSs11JpuxSMaHWasiOsTjfZ+YmvA4GM6Z3eA0+734t85qAeBNALPsI38xiYF/u+dKfB5qc/IpnnNGFgcq3VurmjF5khAJq//M0DwRF4NwN5qONELyMvV0pek6yy0mF9DxEQPSsz7FGGTfepDRrnHTb+VT3fOTX1vRYYayOMQk6tavep5Itky7XuDOEyiQqwAzSNizdpWKR1IQs+ncCV4el7HObluLT87P0SgqRgYhU1FqLLOMgjz/vZgxmed3ssBNHK0Iej/ttCQ+PH50aJjcp9S1VNJg3LJicdUvz4eIFoWfq5xXtLxTNg5tREVtdUm3ARKDf5yvFrBh6pYTFIas2WpIjei7xXcKAaB1H9aN5sASeEmAKR9UjU0b7VsFjWw1k8W7umcMx328gY8KkoYo2oOUceh/+czbfWuz9Mp1NtG1idIpP5Iy1jvm86JxcnU9FylzhRZCJf959ayGukkiImSoWZk0qaDOayyuF9gTNO72yEQ9bVjqVkFphBArbKVaiXACwbjvxr06e2HVGgwMaL7Cx9MSil4bERR5yAzKla3Ouw2Tx8s2mxrlEg9wv3FWlhkkfAlIvtRplXIKFdHgEZK2jF94/eQ+YM0HEE8TwflnZGfsi8ksu4BMQq04ZY8BUWsFTR5D5i2cqqBLIW7ueQ7z2QC2lnxvtwFNzVPpFSzHj5pyoMb55Saehlw2Bc4EOvqB3+fwk7LhNUFzh6r3i28lLH8b9ugVP6kqHcjPT3mevxlDMram3rV6BSYPeABIS2Io9BCqPLwuuPB/9rkbgiTtEgJY1Ymy9cKN5NXJIFHEYckhNDOKCPTaF30kPbWEQCYfLOHvvGFsaD9tXtQzXbpsOR0KtrQKwm2ABPUDbrG8ddXdMHUN2zR31NZ30D4qOF0qPG/+2FmwHGshiz5vZB+cThgROXuKLVF/Avo2j36i27IQTyDdz+eS9ckarI3rGXmEkgoaIoBJrPxjKMiby80ooZBw3Ppxi9h6Apg0x9MqvNERldof/WIg9OSjWm+J4lDpoIOi6RfmcFpUBVAWGQV64gWDyEj39rD78f71aY39Epuor1nZiO+3KR2nPC66Wq525WFGQyOCvuh/7z/qeeVGmyx+xzF8BRyQ2+K9alf8i0/h/QZYRxy//QZeRIv9Nl5E4/bss459j/yeqjOd/U2Ucl+YryPgVZPyvL7R+BRm/goxfQcavIONXkPEryPgVZPwKMn4FGb+CjF9Bxq8g41eQ8SvI+BVk/AoyfgUZv4KMX0HGryDjV5DxK8j4FWT8CjJ+BRn/+goyfgUZv4KMX0HGv76CjF9Bxq8g41eQ8SvI+BVk/AoyfgUZv4KMf30FGb+CjF9Bxq8g41eQ8SvI+BVk/AoyfgUZv4KMX0HGryDjV5DxK8j4FWT8CjJ+BRm/goxfQcavIONXkPEryPgVZPwKMn4FGb+CjF9Bxq8g41eQ8SvI+BVk/AoyfgUZv4KMX0HGryDjX19Bxq8g41eQ8f/Pgoyn8+m/TJCR+jdBxj59f/UYv3qM/+V11q8e41eP8avH+NVj/OoxfvUYv3qMXz3Grx7jV4/xq8f41WP86jF+9Ri/eoxfPcavHuNXj/Grx/jVY/zqMX71GL96jF89xq8e419fPcavHuNXj/Grx/jXV4/xq8f41WP86jF+9Ri/eoxfPcavHuNXj/Gvrx7jV4/xq8f41WP86jF+9Ri/eoxfPcavHuNXj/Grx/jVY/zv7d1bu5rIngbwT+Nl9gPKQS4LROQsePZODgIqohxE+fQD9urda8WV6Z7pdLIn897kSZSIUlDUvyx/LzxGeIzwGOExwmOExwiPER4jPEZ4jPAY4THCY4THCI8RHiM8RniM8BjhMcJjhMcIjxEeYw8eIzxGeIz/nzxGhqF+mMfIv3iMRbrL2xOK8rNzme/8svimzujnWVF4u7w9DHWclOGsPWjd43W+62jFuExPb0fp4wHcJ6eTlJ2y/Plyg5AO2JDvDmyZZ8fw3TMCxw923DftxtNX1KPftkGY/xULcvf2Ov/+H2/tLb5t8Gz1P86BL8N/oNkFivqocFKvrc70qddm//2xv9Psw5dmD++hD4cTDudPn1+HwwmHEw4nHE44nHA44XDC4YTDCYcTDiccTjiccDjhcMLhhMMJhxMOJxxOOJxwOOFwwuGEw9mDwwmHEw4nHM4eHE44nHA44XDC4YTDCYcTDicczh4cTjiccDjhcMLhhMMJhxMOJxxOOJxwOOFwwuGEwwmHEw4nHE44nHA44XDC4YTDCYcTDiccTjiccDjhcMLhhMMJhxMOJxxOOJxwOOFw9uBwwuGEw/krO5w0/1Fk/KEOp/AiMk7zrMz87hfH39nfDJI89N9YxiKruo/WblHu3h7qjnSc5UmTncvd6e2Bz9XGt+aZd/8YfaFfmMwPquMs3gVZXbSfRT2Xbc9HGb8dwudWs6zKn28+LstLuw07aC8Ythuft390GxT/irIsOoW7S1L8y8/S5xN+8dx0vP9tH+1f/9gL245Bnvthu68d3u0pabr90Nz3OWt49ivGk389aT5VPOnvwHi6Ut+Ktg1rGndu5i6H0512/zKkXk6ll1Oou9Quf/3TPzXYc3vS7LzfX4H6E9O2//GwsL+To+8Oy/CTa4n9DtcSzfz5Afg/LZvKT5b0TTaVrrv1JPwLsqn4aEfdxD+KG0dYrP83sinxs3/LptvS89ob3VjtFqLTTrngr8uFZcuJLIvV2BWv5WgXybIlywMqPvoOUfeXaE6ioxbHkqmpG29hS9JsJolmYawLbdwVaER0FkcSrVV3sXMTveNjyOLqji/ieud1X4X2lYKnfMWz+UtzsYM1pzUVP13tp6vuBsw1w0dorW43eWWa/sLqbq+Rfoj2lZgF2cTajPaOcLn1b8L1MD3mwZW9SzOSbBjxHO3PxNPFgaFuniBCwUh2Pb4d5gptBrFlqEQ9qepSUUdd04jm/H55yF4krc3uN33RURb6Izu2dPf5KZLldiqc83boGC2mSjqqXHKYKIGedXBU6YhWtLcppSAlI7qH1cor7H0WXvjl4Pr4ba6Yn81TizfmwTwmWTt8Fo05P2EZ8cooaWTaXOS0r3wthCsbju67pWJrnqwTzRmdBg/7FklthVZG4oB/DlL4u+ZMsoLUsh6tnP5eTL2jXREnP9iLjJ7YbY0zI3pE+m2NKlKim2cWJetjtXLz0zoea0Qn+0W3xFWxKocrSCx541ElLLoLUSdqsXSsczTm2FGSSMToL6paWYnZwJD402iZdotLi/kkDYqE8aLnL2/Ubgy+usuUcXwQKejWTstxeGnfiSTEtiRmjqZa3dhYdquAN6cH4yiP6sjJqDOnJerDPCz1VaY91pwhjJ1wKolTUitWFKu3wUHVNpZu+cHK5mJfVKLJtozO4sx9uKcHN1CzO2ttmmpwueeFWhCHIVk9OmQ39VqxjJXF6v4+3opuM/EPtMTEquoWsUAb1aSJvEfkhWR56xdkHc0VS7b4m384ydXIT8tlfjvrA0c8Z4krBfW63i+9SzcC7CZtXCOyU3KjmqNBbsF6bR86FUlaX7QVt7x5xnOVqMHkIr8hFmu21fK8T/ShuA3ixD0xSt3e9g5zna5me8Let7PptM9KY8kR4otGVpZpLEmuFtV9zlRGsbW6kaRIWM/ld64+E+lJV8zsqUW23NO1NN0u5sdNe/brOfE2XjfZxplytI80mVxJJGUMNSBaLF/qA7duBHc1ypolwwTXpNZHTRjbO/3WzZtd1TJdjwaMZJDAFkl1HOucHvWJ7B7VEdHCZhiK4pwPK+EWtZdKlW+VboQ7nPgms+nWs82JycT8qjIubCbOHVmpumV/hTqkQtHvrrKA0M0jsk9k6bt7VQuzupJNX2yrYiNVcyuYhUaoJOJMf0wuUeWXzLhW+iQPydYXY3mbzog3rOK1yh/sJScNC2EisSyZeG7NV2E/G0+jTcreClZYS/71MtjMhsKWYY4PuZBW6a5rvXlwXlHj280/d29tHE2nS5bOT4wdLA5br97Ea9JVhqes+wbbjKmmSG8kqMRTZjhGlLDLvnBbnrpNBttwQdlVuinbsXEe9fVH2+nIIblsho04toZrYg5HeW1MqU5UEM22Kx7uGGt6bCaPI8MXXVm9Gdn1/Z7PUmYUec8yjBnEUWMtV/5xqcVksmIUISrVSEjm1PFGBvVixfhGbi7HNRkU3JIzGqcrCC1/6zftmCuppUNh3mbRkiQ2v4jVTA9i89reKdxzFE0Xd9KXzKG8L5zJOt2N5tb2zuvjWk7bN0eL6W2Wu/bqIS50SZXZ7MJyzo5hiWy49nysmAefcNNMKm96uFA4f8dtN2pfbczUXNx20Vop/XueqT4Z83nIzI/zRXK8bVyT9p3junZXG1uw6zoq5mQ20vwh0dpCKC4OXCatH/poRtUL1rmwj2ti3xcrdWuuQmnBTBpN06dnZrRsa+aQbfuSRffFfn7a3CZcU9f0fOFyJyeVpo64vLRdxW2/G4c1XdYk4ws9SoTl5LDPKZ+L196ZHjKCqVP6SX6IcSMN4rVrMSM2JQPD6xNj7ZdUuUnVYyg63NwWxdJMrrXFp7u1045GpOVGOgj2vZksnnxPw8jd7+bt/U0fK0YWeZtulrVet21XbDxHWt2jQJw/Lka4jtWzHtD6qTZnspFurkZfNTJ5dRcF5bpQRg9GGpGal4vT0GD6ru7IYX9g30me5PU53dSmn0s063HKxDrXtLNqiMaI7S0rzkeXR1CptkcMu7Z5yc/IfLAL2w5tqRmru0Mr2xl7bEZGvJa4trPhTMnzikFtdufkZsNu2fti7TjF2JKTJ7QpndKJX9IaE9VG3PaneZBwtXJ00+0xLh9c24s+LHbbPLzKnrRnm/GkpNr7ojimZteAM7Klq7uyq19rN1AmhVavL/OBo7kTScoXs0q2kq5/mrclfFz5en+6ePChWGX847CaGkUkP5jxYaBVouc7VTL1LKcYhaS6K3xBq9103NjTNmxALGGwDZIgVWlNHF9JzpClXm5rs4yayKIMc3wv8+XIMzrtWFTYpbHa5AeqzhzLNYcSX1dqKkTdUpFp28VMyT44WNJgKjDU6pisDgZDKdp8ZPV1qraG2vF+OZz0iSiF0uTY7KzDI2wv3FGQpOG+XtgJN50LxkHsZ57Svnul2XiCeo01huzn5qhxRXXIZ+NDXTtMQtGXbipc6k8tRt/rQWkykiqYyqporO3kOmyEpO2s8sYTymPNHCfr9XOptCHSaaYEtxPtH6b7cNzNp4/F8+2mH0yhbgb05VGFR5Znut8piO5Q65oyHj+CbuJJr7pbFj8cTrY+mWy6X+UnNNd9xViHLNt2T3u6uQvPsaWouQtWzo9aFEXPYn70P63S//sK5s+rsPdVFv9JlcX//XKCQTmBcgLlBMoJlBMoJ1BOoJxAOYFyAuXEL1lO3D+WDT+iumBRXaC6QHWB6gLVBaoLVBeoLlBdoLpAdfELVxcs++OqC+6luijKXRm+hnq37738uGjwYxz3OTuHX2V3vz30Eqb9dWmRJkHQ7ebTVYpfRYO/W6DX/2ENQn9cq/Z7BfaufbhPVvAN/rEFfK+NdsqiBPHciOf++T+7Rzw34rkRz414bsRzI54b8dyI50Y8N+K5Ec+NeG7EcyOeG/HciOdGPDfiuRHPjXhuxHMjnhvx3IjnRjx3D/HciOdGPDfiuXuI50Y8N+K5Ec+NeG7EcyOeG/HciOfuIZ4b8dyI50Y8N+K5Ec+NeG7EcyOeG/HciOdGPDfiuRHPjXhuxHMjnhvx3IjnRjw34rkRz414bsRzI54b8dyI50Y8N+K5Ec+NeG7EcyOeG/HciOdGPHcP8dyI50Y89y8czz0cfFQaBxzzwjT+U+ncnzON/AvTmGZBdfoE1/y7id3v1c1efxDSARvyL0Rn+4zA8YMd903G8fSV+vhCdn6ThXxBPt+aXnzb4HkC/HE6fHmJAv8OZwAvfHUGUK9R2zT1idTZ/w5S53VIrdeFO2zUlT5aLDf3SH18+SS13a+7vXFtW9xJ+7G9XRHC7YTb+dPn4+F2wu2E2wm3E24n3E64nXA74XbC7YTbCbcTbifcTridcDvhdsLthNsJtxNuJ9xOuJ1wO+F29uB2wu2E2wm3swe3E24n3E64nXA74XbC7YTbCbezB7cTbifcTridcDvhdsLthNsJtxNuJ9xOuJ1wO+F2wu2E2wm3E24n3E64nXA74XbC7YTbCbcTbifcTridcDvhdsLthNsJtxNuJ9xOuJ09uJ1wO+F2/me7nS9E4yeQ4zfVRprifx7c+anaOKT+TG3clVma+F+KencB3gi88adPygJvBN4IvBF4I/BG4I3AG4E3Am8E3gi8EXgj8EbgjcAbgTcCbwTeCLwReCPwRuCNwBuBNwJv7AFvBN4IvBF4Yw94I/BG4I3AG4E3Am8E3gi8EXhjD3gj8EbgjcAbgTcCbwTeCLwReCPwRuCNwBuBNwJvBN4IvBF4I/BG4I3AG4E3Am8E3gi8EXgj8EbgjcAbgTcCbwTeCLwReCPwRuCNwBt7wBuBNwJv/IXxRqH/0W5kGOon2430n9mNRdketu74AG4E3PizJ2QBNwJuBNwIuBFwI+BGwI2AGwE3Am4E3Ai4EXAj4EbAjYAbATcCbgTcCLgRcCPgRsCNgBsBN/YANwJuBNwIuLEHuBFwI+BGwI2AGwE3Am4E3Ai4sQe4EXAj4EbAjYAbATcCbgTcCLgRcCPgRsCNgBsBNwJuBNwIuBFwI+BGwI2AGwE3Am4E3Ai4EXAj4EbAjYAbATcCbgTcCLgRcCPgRsCNPcCNgBsBN/7CcCNNUf9pcmP/E7lx8A5uTNujlBQJ4EbAjT9/QhZwI+BGwI2AGwE3Am4E3Ai4EXAj4EbAjYAbATcCbgTcCLgRcCPgRsCNgBsBNwJuBNwIuBFwYw9wI+BGwI2AG3uAGwE3Am4E3Ai4EXAj4EbAjYAbe4AbATcCbgTcCLgRcCPgRsCNgBsBNwJuBNwIuBFwI+BGwI2AGwE3Am4E3Ai4EXAj4EbAjYAbATcCbgTcCLgRcCPgRsCNgBsBNwJuBNzYA9wIuBFw4y8MNwr9j27jgGN+sts4+MRtZN65jd0BuwBtBNr40ydjgTYCbQTaCLQRaCPQRqCNQBuBNgJtBNoItBFoI9BGoI1AG4E2Am0E2gi0EWgj0EagjUAbgTb2gDYCbQTaCLSxB7QRaCPQRqCNQBuBNgJtBNoItLEHtBFoI9BGoI1AG4E2Am0E2gi0EWgj0EagjUAbgTYCbQTaCLQRaCPQRqCNQBuBNgJtBNoItBFoI9BGoI1AG4E2Am0E2gi0EWgj0EagjT2gjUAbgTb+wmgjTVE/TG3sepMsK989p+S7S2xmQdht8V8=</diagram></mxfile>',mdxType:"Drawio"}),(0,i.kt)("h2",{id:"the-question-of-implementation"},"The question of implementation"),(0,i.kt)("p",null,"A choice arises as to how services are implemented in the OKP4 blockchain. There are two choices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a ",(0,i.kt)("em",{parentName:"li"},"module"),", a powerful extension mechanism provided by the Cosmos SDK that allows to implement features natively in the blockchain."),(0,i.kt)("li",{parentName:"ul"},"Use a (stateful) ",(0,i.kt)("em",{parentName:"li"},"Smart Contract"),", an extension mechanism offered by a Virtual Machine capable of interpreting an assembly-like language in the blockchain. For this, ",(0,i.kt)("a",{parentName:"li",href:"https://cosmwasm.com/"},"CosmWasm")," is the option.")),(0,i.kt)("p",null,"The following table compares the two approaches according to different criteria:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Cosmos SDK"),(0,i.kt)("th",{parentName:"tr",align:null},"CosmWasm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Speed of Development"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"- (Rust)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Customization"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Performance"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Strict Resource Control"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ease of maintenance"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Modularity"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")))),(0,i.kt)("p",null,"For the OKP4 blockchain, we consider a Smart Contract (CosmWasm) implementation strategy by default, and for specific cases, a native implementation per module in the blockchain."))}p.isMDXComponent=!0}}]);