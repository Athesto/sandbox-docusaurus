"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8209],{4149:(e,t,a)=>{a.d(t,{A:()=>l});a(6672);var s=a(3526),n=a(8563);const i={tag:"tag_nqju",tagRegular:"tagRegular_I_M3",tagWithCount:"tagWithCount_PXpL"};var r=a(3420);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},4828:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>P,Ki:()=>y,kJ:()=>f,x:()=>l,e7:()=>m,J_:()=>b,Gx:()=>A});var s=a(6672),n=a(8106),i=a(4140),r=a(3420);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(1008),u=a(3019);const g=e=>new Date(e).toISOString();function p(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function h(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,m=s.image??n.image,d=n.keywords??[],u=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:r,...f?{dateModified:f}:{},...p(i.authors),...h(m,a,l),...d?{keywords:d}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=m(),{siteConfig:s}=(0,u.A)(),{withBaseUrl:n}=(0,d.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,x=c.keywords??[],j=f?g(f):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...p(a.authors),...h(b,n,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(5291),v=a(8563),C=a(3140),k=a(4895);function A(e){const{pathname:t}=(0,N.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.ys)(e.permalink,t))}(e,t)))),[e,t])}function y(e){const t=(0,C.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function P(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(v.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},5072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(6672);var s=a(3526),n=a(8388);const i=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(8651),l=a(8001),o=a(7087),c=a(4149),m=a(7835);const d={tag:"tag_tD7w"};var u=a(3420);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(c.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function p(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var h=a(1930);function f(e){let{tags:t,sidebar:a}=e;const n=i();return(0,u.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(r.be,{title:n}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(o.A,{sidebar:a,children:[(0,u.jsx)(m.A,{as:"h1",children:n}),(0,u.jsx)(p,{tags:t})]})]})}},7087:(e,t,a)=>{a.d(t,{A:()=>L});var s=a(6672),n=a(3526),i=a(366),r=a(915),l=a(8388),o=a(4828),c=a(2424),m=a(7835),d=a(3420);function u(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(m.A,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,d.jsx)(u,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(s,{items:n})},t)}))})}return(0,d.jsx)(s,{items:t})}const p=(0,s.memo)(g),h="sidebar_lLKo",f="sidebarItemTitle_N7Zx",b="sidebarItemList_Jkdc",x="sidebarItem_Ks1d",j="sidebarItemLink_rNY2",N="sidebarItemLinkActive_iUaN",v="yearGroupHeading_UvxX",C=e=>{let{items:t}=e;return(0,d.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(b,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:N})};function k(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,n.A)(h,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,n.A)(f,"margin-bottom--md"),children:t.title}),(0,d.jsx)(p,{items:a,ListComponent:C,yearGroupHeadingClassName:v})]})})}const A=(0,s.memo)(k);var y=a(4954);const P="yearGroupHeading_rf2U",_=e=>{let{items:t}=e;return(0,d.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,d.jsx)(p,{items:a,ListComponent:_,yearGroupHeadingClassName:P})}function U(e){return(0,d.jsx)(y.GX,{component:w,props:e})}const B=(0,s.memo)(U);function G(e){let{sidebar:t}=e;const a=(0,r.l)();return t?.items.length?"mobile"===a?(0,d.jsx)(B,{sidebar:t}):(0,d.jsx)(A,{sidebar:t}):null}function L(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,d.jsx)(i.A,{...r,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(G,{sidebar:t}),(0,d.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);