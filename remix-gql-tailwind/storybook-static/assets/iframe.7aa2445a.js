var Ie=Object.defineProperty,Ue=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var B=(e,a,r)=>a in e?Ie(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,c=(e,a)=>{for(var r in a||(a={}))Xe.call(a,r)&&B(e,r,a[r]);if(U)for(var r of U(a))Ze.call(a,r)&&B(e,r,a[r]);return e},v=(e,a)=>Ue(e,Be(a));import{j as n,a as t,L as w,F as $e,D as He,r as C,b as k,c as g,U as Qe,S as M,O as qe,d as We,e as X,f as Ve,M as z,C as Ye,T as Ke,X as Z,g as et,B as tt,h as at,i as rt,I as nt,k as ot,l as it,m as st,n as lt,o as $,p as ct,q as dt,s as pt,t as ut,u as mt,v as gt,w as ft,x as ht,y as vt,z as yt,A as bt,E as wt,G as kt,H as xt,J as Ct,K as zt}from"./vendor.1ac23139.js";const Nt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};Nt();const Rt={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Rt});function Mt(e){const a=e.split("/");return a.slice(0,a.length-1).join("/")}function Tt(e,a){return e.slice(0,a+1).join("/")}const Pt="border rounded border-gray-300 text-sm",St="block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer",Dt="py-2 px-4 border-b border-gray-300 last-of-type:border-none hover:bg-gray-50",Et="w-5 h-5 text-gray-500",Lt="w-5 h-5 text-blue-400",Ot="hover:text-blue-600 hover:underline";function H({items:e,branch:a,basePath:r,repoPath:o}){const i=Mt(o),s=`${r}/tree/${a}/${i}`;return n("div",{className:Pt,children:[o&&t(w,{to:s,className:St,children:t("div",{className:"text-blue-600",children:".."})}),e.map(l=>t("div",{className:Dt,children:n("div",{className:"flex items-center",children:[t("div",{className:"mr-2.5",children:l.type==="tree"?t($e,{className:Lt}):t(He,{className:Et})}),t(w,{to:`${r}/${l.type}/${a}/${l.path}`,className:Ot,children:l.name})]})},l.path))]})}const _t=[{name:"public",path:"public",type:"tree"},{name:"src",path:"src",type:"tree"},{name:".gitignore",path:".gitignore",type:"blob"},{name:"package.json",path:"package.json",type:"blob"},{name:"README.md",path:"README.md",type:"blob"},{name:"tsconfig.json",path:"tsconfig.json",type:"blob"},{name:"yarn.lock",path:"yarn.lock",type:"blob"}],Jt=[{name:"components",path:"src/components",type:"tree"},{name:"pages",path:"src/pages",type:"tree"},{name:"App.scss",path:"src/App.scss",type:"blob"},{name:"App.tsx",path:"src/App.tsx",type:"blob"},{name:"index.tsx",path:"src/index.tsx",type:"blob"},{name:"react-app-env.d.ts",path:"src/react-app-env.d.ts",type:"blob"}];var Ft={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import FileExplorerView from './FileExplorer.view';

const main = [
  { name: 'public', path: 'public', type: 'tree' },
  { name: 'src', path: 'src', type: 'tree' },
  { name: '.gitignore', path: '.gitignore', type: 'blob' },
  { name: 'package.json', path: 'package.json', type: 'blob' },
  { name: 'README.md', path: 'README.md', type: 'blob' },
  { name: 'tsconfig.json', path: 'tsconfig.json', type: 'blob' },
  { name: 'yarn.lock', path: 'yarn.lock', type: 'blob' },
];

const src = [
  { name: 'components', path: 'src/components', type: 'tree' },
  { name: 'pages', path: 'src/pages', type: 'tree' },
  { name: 'App.scss', path: 'src/App.scss', type: 'blob' },
  { name: 'App.tsx', path: 'src/App.tsx', type: 'blob' },
  { name: 'index.tsx', path: 'src/index.tsx', type: 'blob' },
  {
    name: 'react-app-env.d.ts',
    path: 'src/react-app-env.d.ts',
    type: 'blob',
  },
];

export default {
  component: FileExplorerView,
  title: 'RepoPage/FileExplorer',
} as Meta;

const Template: Story<ComponentProps<typeof FileExplorerView>> = (args) => (
  <FileExplorerView {...args} />
);

export const RootDir = Template.bind({});
RootDir.args = {
  branch: 'main',
  basePath: 'mark/reactQuiz',
  repoPath: '',
  items: main,
};

export const SrcDir = Template.bind({});
SrcDir.args = {
  branch: 'main',
  basePath: 'mark/reactQuiz',
  repoPath: 'src',
  items: src,
};
`,locationsMap:{"root-dir":{startLoc:{col:65,line:33},endLoc:{col:1,line:35},startBody:{col:65,line:33},endBody:{col:1,line:35}},"src-dir":{startLoc:{col:65,line:33},endLoc:{col:1,line:35},startBody:{col:65,line:33},endBody:{col:1,line:35}}}}},component:H,title:"RepoPage/FileExplorer"};const Q=e=>t(H,c({},e)),q=Q.bind({});q.args={branch:"main",basePath:"mark/reactQuiz",repoPath:"",items:_t};const W=Q.bind({});W.args={branch:"main",basePath:"mark/reactQuiz",repoPath:"src",items:Jt};const jt=["RootDir","SrcDir"];var Gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ft,RootDir:q,SrcDir:W,__namedExportsOrder:jt});const V=C.exports.createContext(void 0);function N({children:e,value:a}){return t(V.Provider,{value:c({isRepoLoading:!1},a),children:e})}function R(){const e=C.exports.useContext(V);if(e===void 0)throw new Error("useRepo must be used within a RepoPage");return e}function It({className:e}){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e||"h-6 w-6",fill:"currentColor",children:[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2v3zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0V8.83zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})]})}function Ut({className:e}){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e||"h-6 w-6",fill:"currentColor",children:[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"})]})}function S({className:e}){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e||"h-6 w-6",fill:"currentColor",children:[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})]})}function Y({className:e}){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e||"h-6 w-6",fill:"currentColor",children:[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"})]})}function Bt({className:e}){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e||"h-6 w-6",fill:"currentColor",children:[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"})]})}function Xt({className:e}){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",className:e,fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"})})}const Zt="my-6 flex items-center",$t="relative inline-flex items-center px-4 py-1 rounded-md bg-gray-50 border border-gray-300 font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-50",Ht="w-5 h-5 text-gray-600 mr-1",Qt="text-[10px] text-gray-600 ml-1.5 mt-0.5",K="text-lg text-gray-800 leading-snug mx-1.5",qt="font-semibold text-blue-600 hover:underline",Wt="flex px-3",Vt="text-blue-600 hover:underline",Yt="font-semibold";function ee(){const{name:e,owner:a,path:r,branch:o}=R(),i=r.split("/").filter(Boolean);return n("nav",{className:Zt,children:[n("button",{className:$t,children:[t(S,{className:Ht})," ",o," ",t("span",{className:Qt,children:"\u25BC"})]}),i.length>0&&n("div",{className:Wt,children:[t(w,{to:`/${a}/${e}`,className:qt,children:e}),t("span",{className:K,children:"/"}),i.map((s,l)=>{const d=l===i.length-1,p=Tt(i,l),m=`${a}/${e}/tree/${o}/${p}`;return t(k,{children:d?t("span",{className:Yt,children:s}):n(k,{children:[t(w,{to:`/${m}`,prefetch:"intent",className:Vt,children:s}),t("span",{className:K,children:"/"})]})})})]})]})}var Kt={parameters:{storySource:{source:`import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import FileExplorerNav from './FileExplorerNav';

export default {
  component: FileExplorerNav,
  title: 'RepoPage/FileExplorerNav',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <FileExplorerNav />
  </RepoProvider>
);

export const RepoRoot = Template.bind({});
RepoRoot.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  isRepoLoading: true,
};

export const SrcPathTree = Template.bind({});
SrcPathTree.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'src',
  isRepoLoading: true,
};

export const DeepPathFile = Template.bind({});
DeepPathFile.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: 'remix/src/components/FileExplorerNav.tsx',
  isRepoLoading: true,
};
`,locationsMap:{"repo-root":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},"src-path-tree":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},"deep-path-file":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:ee,title:"RepoPage/FileExplorerNav"};const D=e=>t(N,{value:e,children:t(ee,{})}),te=D.bind({});te.args={name:"starter.dev",owner:"thisdot",branch:"main",path:"",isRepoLoading:!0};const ae=D.bind({});ae.args={name:"starter.dev",owner:"thisdot",branch:"main",path:"src",isRepoLoading:!0};const re=D.bind({});re.args={name:"starter.dev",owner:"thisdot",branch:"main",path:"remix/src/components/FileExplorerNav.tsx",isRepoLoading:!0};const ea=["RepoRoot","SrcPathTree","DeepPathFile"];var ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kt,RepoRoot:te,SrcPathTree:ae,DeepPathFile:re,__namedExportsOrder:ea});const aa="border-b border-gray-200",ra="-mb-px flex",na="inline-flex items-center p-4 border-b-2 font-medium text-sm",oa="border-transparent text-gray-600 hover:border-gray-300",ia="border-yellow-500 text-gray-900 font-semibold",sa="-ml-0.5 mr-2 h-5 w-5 border-none",la="text-gray-500",ca="text-gray-700";function T({tabs:e,className:a,basePath:r="",pathname:o}){const i=s=>{const l=e.filter(({path:d})=>d!==s).map(({path:d})=>d);return s!==""?o.includes(s):l.every(d=>!o.includes(d))};return t("div",{className:g(aa,a),children:t("nav",{className:ra,"aria-label":"Tabs",children:e.map(({title:s,path:l,Icon:d,count:p},m)=>{let f=l===""?`/${r}`:`/${r}/${l}`;return n(w,{to:f,className:g(i(l)?ia:oa,na),children:[t(d,{className:g(i(l)?ca:la,sa)}),t("span",{children:s}),typeof p=="number"&&t("span",{className:"ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800",children:p})]},m)})})})}const da=[{title:"Repositories",path:"",Icon:Y}];function ne({className:e,pathname:a}){return t(T,{tabs:da,className:e,pathname:a})}const pa="mt-5 border-t border-gray-200",ua="my-2 pt-2 text-gray-800 font-bold",ma="flex flex-wrap space-x-2",ga="relative w-9 h-9 rounded border border-gray-300 overflow-hidden";function fa({organizations:e}){return n("div",{className:pa,children:[t("h2",{className:ua,children:"Organizations"}),t("div",{className:ma,children:e.map(({avatarUrl:a,login:r})=>t("div",{className:ga,children:t("img",{src:a,alt:"Organization",style:{objectFit:"fill"}})},r))})]})}const ha="rounded-full shadow z-30",va="text-2xl text-gray-800 font-bold leading-tight",ya="text-xl text-gray-500 font-light",ba="text-gray-800 mt-4 mb-3",x="w-4 h-4 mb-0.5 mr-1 inline",E="font-medium text-gray-900",wa="text-sm text-gray-600 my-4",ka="text-sm text-gray-800 space-y-1",oe="hover:text-blue-600 hover:underline";function L({avatarUrl:e,bio:a,company:r,location:o,login:i,name:s,twitterUsername:l,websiteUrl:d,followers:p,following:m,starredRepositories:f,organizations:h}){return n("div",{children:[t("img",{src:e,alt:"Avatar",width:260,height:260,className:ha}),n("h1",{className:"mt-2",children:[t("div",{className:va,children:s}),t("div",{className:ya,children:i})]}),a&&t("div",{className:ba,dangerouslySetInnerHTML:{__html:a}}),n("div",{className:wa,children:[t(Qe,{className:x}),n("span",{className:"inline-block",children:[t("span",{className:E,children:p.totalCount})," followers"]}),t("span",{className:"mx-1",children:"\xB7"}),n("span",{className:"inline-block",children:[t("span",{className:E,children:m.totalCount})," following"]}),t("span",{className:"mx-1",children:"\xB7"}),t(M,{className:x}),n("span",{className:"inline-block",children:[t("span",{className:E,children:f.totalCount})," "]})]}),n("div",{className:ka,children:[r&&n("div",{children:[t(qe,{className:x}),r]}),o&&n("div",{children:[t(We,{className:x}),o]}),d&&n("div",{children:[t(X,{className:x}),t("a",{className:oe,href:d,target:"_blank",rel:"noreferrer",children:d})]}),l&&n("div",{children:[t(Bt,{className:x}),n("a",{className:oe,href:`https:/twitter.com/${l}`,target:"_blank",rel:"noreferrer",children:["@",l]})]})]}),h.nodes.length>0&&t(fa,{organizations:h.nodes})]})}const xa="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium";function ie({isPrivate:e,className:a}){return t("span",{className:g(xa,a),children:e?"Private":"Public"})}const Ca="flex  mt-4 text-xs text-gray-600 space-x-4",za="w-3 h-3 inline-block rounded-full mr-1 relative top-0.5",se="hover:cursor-pointer hover:text-blue-600",le="w-4 h-4 inline mb-0.5";function Na({language:e,languageColor:a,stargazerCount:r,forkCount:o,updatedAt:i}){return n("div",{className:Ca,children:[e&&n("div",{children:[t("span",{style:{backgroundColor:a||"#ccc"},className:za}),e]}),(r>0||o>0)&&n("div",{className:"space-x-4",children:[r>0&&n("span",{className:se,children:[t(M,{className:le})," ",r]}),o>0&&n("span",{className:se,children:[t(S,{className:le})," ",o]})]}),n("div",{children:["Updated"," ",Ve(new Date(i),Date.now(),{addSuffix:!0})]})]})}const ce="py-8 border-b border-gray-200 first-of-type:border-t grid grid-cols-12 gap-x-4",Ra="col-span-12 md:col-span-7",Aa="text-xl text-blue-600 font-semibold hover:underline mr-3",Ma="text-gray-600 text-sm max-w-prose",Ta="col-span-12 md:col-span-5 flex items-start justify-end",Pa="relative inline-flex items-center px-3 py-1 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50",Sa="w-4 h-4 text-gray-600 mr-1",Da="flex items-center justify-center mt-4",Ea="relative z-0 inline-flex shadow-sm rounded-md",P="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-semibold text-blue-500 hover:bg-blue-500 hover:border-blue-500  hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-100 disabled:hover:text-blue-500 disabled:hover:border-gray-200 transition-colors duration-150 ease-in-out",de="rounded-l-lg",pe="rounded-r-lg";function La({pageInfo:e,owner:a}){if(!e)return null;const r=`/${a}?before=${e.startCursor}`,o=`/${a}?after=${e.endCursor}`,i=()=>{window.location.assign(r)},s=()=>{window.location.assign(o)};return t("div",{className:Da,children:n("span",{className:Ea,children:[t("button",{type:"button",disabled:!e.hasPreviousPage||!e.startCursor,onClick:i,className:!e.hasPreviousPage||!e.startCursor?g(P,de):g(P,de),children:"Previous"}),t("button",{type:"button",onClick:s,disabled:!e.hasNextPage||!e.endCursor,className:!e.hasNextPage||!e.endCursor?g(P,pe):g(P,pe),children:"Next"})]})})}var y;(function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.PushedAt="PUSHED_AT",e.Stargazers="STARGAZERS",e.UpdatedAt="UPDATED_AT"})(y||(y={}));var ue;(function(e){e.Asc="ASC",e.Desc="DESC"})(ue||(ue={}));var b;(function(e){e.ALL="all",e.FORKS="forked",e.ARCHIVED="archived"})(b||(b={}));var me;(function(e){e[e.CHANGE_SORT=0]="CHANGE_SORT",e[e.CHANGE_LANGUAGE=1]="CHANGE_LANGUAGE",e[e.CHANGE_TYPE=2]="CHANGE_TYPE",e[e.SET_QUERY=3]="SET_QUERY",e[e.SET_LANGUAGES=4]="SET_LANGUAGES",e[e.RESET_FILTERS=5]="RESET_FILTERS"})(me||(me={}));const Oa={sort:y.UpdatedAt,type:b.ALL,language:"all",query:"",languages:void 0},_a=(e,a)=>{switch(a.type){case 0:return v(c({},e),{sort:a.payload.sort});case 1:return v(c({},e),{language:a.payload.language});case 2:return v(c({},e),{type:a.payload.type});case 3:return v(c({},e),{query:a.payload.query});case 5:return v(c({},e),{sort:y.UpdatedAt,type:b.ALL,language:"all",query:""});default:return e}};function Ja(){const[e,a]=C.exports.useReducer(_a,Oa),r=u=>{a({type:0,payload:{sort:u}})},o=u=>{a({type:1,payload:{language:u}})},i=u=>{a({type:2,payload:{type:u}})},s=u=>{a({type:3,payload:{query:u}})},l=u=>{a({type:4,payload:{languages:u}})},d=()=>{a({type:5})},p=e.query!=="",m=e.type!==b.ALL,f=e.language!=="all",h=e.sort!==y.UpdatedAt;return{state:e,changeSort:r,changeLanguage:o,changeType:i,setQuery:s,setLanguages:l,resetFilters:d,isQueryActive:p,isTypeActive:m,isLanguageActive:f,isFiltersActive:p||m||f||h}}function Fa(e,a){return e.reduce((r,o)=>{var i;switch(a.type){case b.FORKS:if(!o.isFork)return r;break;case b.ARCHIVED:if(!o.isArchived)return r}if(a.language!=="all"&&((i=o.language)==null?void 0:i.toLocaleLowerCase())!==a.language||a.query!==""&&!o.name.toLocaleLowerCase().includes(a.query.toLocaleLowerCase()))return r;switch(a.sort){case y.Name:return[...r,o].sort((s,l)=>s.name.toLocaleLowerCase()<l.name.toLocaleLowerCase()?-1:s.name.toLocaleLowerCase()>l.name.toLocaleLowerCase()?1:0);case y.Stargazers:return[...r,o].sort((s,l)=>s.stargazerCount<l.stargazerCount?1:s.stargazerCount>l.stargazerCount?-1:0)}return[...r,o]},[])}function ja(e){const a={all:"All"},r=e.reduce((o,i)=>i.language?v(c({},o),{[i.language.toLowerCase()]:i.language}):o,a);return Object.entries(r).map(([o,i])=>({value:o,label:i}))}const Ga="flex relative mb-4 space-x-4",Ia="border p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none",Ua="flex items-center space-x-1.5",Ba="py-4 border-t flex items-center justify-between",Xa="inline-flex items-center justify-center",Za="p-0.5 rounded bg-gray-500 inline-flex items-center justify-center mr-2 group-hover:bg-blue-500",$a="w-3.5 h-3.5 text-white",Ha="text-sm text-gray-500 group-hover:text-blue-500",Qa="relative inline-block text-left z-30",qa="relative inline-flex items-center px-4 py-1.5 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50",Wa="-mr-1 ml-1 mt-0.5 h-4 w-4",Va="border border-gray-300 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",Ya="flex justify-between items-center",Ka="px-4 py-2.5 text-xs text-gray-800 font-semibold",er="mr-2 h-4 w-4 text-gray-600",tr="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize",ar="inline w-4 h-4 absolute left-4";function O({name:e,description:a,current:r,items:o,onChange:i}){return n(z,{as:"div",className:Qa,children:[t("div",{children:n(z.Button,{className:qa,children:[e,t(Ye,{className:Wa,"aria-hidden":"true"})]})}),t(Ke,{as:C.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t(z.Items,{className:Va,children:n("div",{children:[a&&n("div",{className:Ya,children:[t("div",{className:Ka,children:a}),t(z.Button,{children:t(Z,{className:er,"aria-hidden":"true"})})]}),o.map(({label:s,value:l})=>t(z.Item,{children:n("button",{type:"button",className:tr,onClick:()=>{i(l)},children:[l===r&&t(et,{className:ar})," ",s]})},l))]})})})]})}function rr({state:e,changeSort:a,changeLanguage:r,changeType:o,setLanguages:i,setQuery:s,resetFilters:l,isQueryActive:d,isTypeActive:p,isLanguageActive:m,isFiltersActive:f,languages:h,resultCount:A}){return C.exports.useEffect(()=>{i(h)},[h,i]),n(k,{children:[n("div",{className:Ga,children:[t("div",{className:"grow",children:t("input",{role:"search",type:"search",name:"search",id:"search",value:e.query,className:Ia,placeholder:"Find a repository..",onChange:u=>s(u.target.value)})}),n("div",{className:Ua,children:[t("div",{children:t(O,{name:"Type",description:"Select type",current:e.type,items:[{label:"All",value:b.ALL},{label:"Forks",value:b.FORKS},{label:"Archived",value:b.ARCHIVED}],onChange:o})}),t("div",{children:t(O,{name:"Language",description:"Select language",current:e.language,items:h,onChange:r})}),t("div",{children:t(O,{name:"Sort",description:"Select order",current:e.sort,items:[{value:y.UpdatedAt,label:"Last updated"},{value:y.Name,label:"Name"},{value:y.Stargazers,label:"Stars"}],onChange:a})})]})]}),f&&n("div",{className:Ba,children:[n("div",{className:"text-sm",children:[t("span",{className:"font-semibold","data-testid":"filterText",children:A})," ","results for"," ",p&&t("span",{className:"font-semibold",children:e.type})," ","repositories"," ",d&&n(k,{children:["matching ",t("span",{className:"font-semibold",children:e.query})]})," ",m&&n(k,{children:["written in"," ",t("span",{className:"font-semibold capitalize",children:e.language})]})," ","sorted by"," ",t("span",{className:"font-semibold",children:e.sort.split("_").join(" ").toLowerCase()})]}),t("div",{children:n("button",{onClick:l,className:g(Xa,"group"),children:[t("span",{className:g(Za,"group-hover:bg-blue-500"),children:t(Z,{className:$a})}),t("span",{className:g(Ha,"group-hover:text-blue-500"),children:"Clear filter"})]})})]})]})}function _({repos:e,owner:a}){var s,l;const r=Ja(),o=Fa(e.repos,r.state),i=ja(e.repos);return n(k,{children:[t(rr,v(c({},r),{languages:i,resultCount:o.length})),o.map(({id:d,name:p,description:m,stargazerCount:f,forkCount:h,language:A,languageColor:u,updatedAt:je,isPrivate:Ge})=>n("div",{className:ce,children:[n("div",{className:Ra,children:[n("h3",{className:"mb-2",children:[t(w,{to:`/${a}/${p}`,className:Aa,children:p}),t(ie,{isPrivate:Ge,className:"relative bottom-0.5"})]}),t("div",{className:Ma,children:m}),t(Na,{language:A,languageColor:u,forkCount:h,stargazerCount:f,updatedAt:je})]}),t("div",{className:Ta,children:n("button",{className:Pa,children:[t(M,{className:Sa}),"Star"]})})]},d)),(((s=e.pageInfo)==null?void 0:s.hasNextPage)||((l=e.pageInfo)==null?void 0:l.hasPreviousPage))&&t(La,{pageInfo:e.pageInfo,owner:a})]})}const nr="relative pt-8",or="border-b border-gray-200 sticky top-0 bg-white z-20  hidden md:block",ir="grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto",sr="col-span-12 md:col-span-8 xl:col-span-9";function ge({userProfileData:e,owner:a,pathname:r}){return n("div",{className:nr,children:[t("div",{className:or,children:n("div",{className:ir,children:[t("div",{className:"col-span-12 md:col-span-4 xl:col-span-3"}),t("div",{className:sr,children:t(ne,{className:"border-none",pathname:r})})]})}),t("div",{className:"mx-auto max-w-screen-2xl py-8 px-4",children:n("div",{className:"grid grid-cols-12 gap-8",children:[t("div",{className:"relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3",children:t(L,c({},e))}),n("div",{className:"col-span-12 md:col-span-8 xl:col-span-9",children:[t(ne,{className:"border-none md:hidden",pathname:r}),t(_,{repos:e.repositories,owner:a})]})]})})]})}const J={avatarUrl:"https://avatars.githubusercontent.com/u/2487968?v=4",bio:'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',company:"@thisdot",followers:{totalCount:24},following:{totalCount:20},location:"Washington, DC",login:"tvanantwerp",name:"Tom VanAntwerp",twitterUsername:"tvanantwerp",websiteUrl:"https://tomvanantwerp.com",organizations:{nodes:[{avatarUrl:"https://avatars.githubusercontent.com/u/22839396?v=4",login:"thisdot"}]},repositories:{repos:[{id:"MDEwOlJlcG9zaXRvcnkxNTExNzc2OQ==",name:"jquery.shiptime",description:"Shipping Time is a plugin for your ecommerce website that displays the time until the shipping cut off. You can also configure it to show estimated delivery dates based on user location.",stargazerCount:11,forkCount:2,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-02T10:43:10Z"},{id:"MDEwOlJlcG9zaXRvcnkyMTUyNjQ3Nw==",name:"jquery.ghostrelated",description:"Related posts jQuery plugin for Ghost",stargazerCount:49,forkCount:13,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-08-20T23:30:55Z"},{id:"MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==",name:"hapi-sequelize",description:"Hapi plugin for the Sequelize ORM",stargazerCount:112,forkCount:38,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-06-14T02:48:12Z"},{id:"MDEwOlJlcG9zaXRvcnkyMzcyNDQyNg==",name:"hapi-route-access",description:"simple hapi role & permission auth",stargazerCount:2,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-01-10T04:07:27Z"},{id:"MDEwOlJlcG9zaXRvcnkyNjEwMTQwOQ==",name:"recoverize-app-old",description:"the recoverize mobile application",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#563d7c",name:"CSS"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2018-06-15T07:03:06Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjU0NzM5NQ==",name:"twitter-stream",description:"A demo app for Boca JavaScript presentation",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#563d7c",name:"CSS"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:38:23Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzQyNDM5OA==",name:"recoverize-wp",description:"The recoverize website",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#4F5D95",name:"PHP"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2018-06-15T07:06:54Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==",name:"cando-zsh",description:"my oh-my-zsh plugin",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#89e051",name:"Shell"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-14T14:38:47Z"},{id:"MDEwOlJlcG9zaXRvcnk0NjAyNjYwMA==",name:"run-babel-run",description:"A CLI tool that kicks off your server babeled so u dont have to use lame requires in your root file runtime transpilations ya dig",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:33:44Z"},{id:"MDEwOlJlcG9zaXRvcnk0OTM1NjE3NA==",name:"react-workshop-starter",description:"React / ES6 starter kit for UXDevSummit workshop",stargazerCount:1,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-02T10:43:55Z"},{id:"MDEwOlJlcG9zaXRvcnk0OTg3ODEyNg==",name:"react-objective-synopsis",description:"React presentation for UX Dev Summit 2016",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-07T20:58:23Z"},{id:"MDEwOlJlcG9zaXRvcnk2MDkzMTQ4Ng==",name:"hapi-rollbar",description:"Hapi plugin for rollbar logging service",stargazerCount:1,forkCount:1,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:31:25Z"},{id:"MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=",name:"gh-users",description:"Implementation of the GitHub user search in React",stargazerCount:1,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-07T20:56:38Z"},{id:"MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=",name:"tscored",description:"General utility library written in TypeScript (to practice TS & some other fundamentals)",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2020-12-03T03:10:28Z"},{id:"MDEwOlJlcG9zaXRvcnkzMzExNDc1MjQ=",name:"rnplayground",description:"React Native Playground. Sampling ideas \u{1F4A1}",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#b07219",name:"Java"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-01-20T00:30:14Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=",name:"stock-sniper",description:"monitors large retailers for gpu restock",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-04-30T23:59:45Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=",name:"JSM-Detox",description:"Demo app for JSMarathon presentation: React Native E2E Testing with Detox",stargazerCount:6,forkCount:4,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-11-17T05:58:18Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzE1MzA2MjQ=",name:"notion-sdk-js",description:"Official Notion JavaScript Client",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-06-02T15:40:16Z"},{id:"MDEwOlJlcG9zaXRvcnk0MDc2NzcyOTU=",name:"swr-site",description:"The official website for SWR.",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-09-17T20:55:27Z"},{id:"R_kgDOGO7ROA",name:"with-firebase-user",description:"A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isForked:!1,isArchived:!1,updatedAt:"2021-11-13T01:59:23Z"},{id:"R_kgDOGUNE2A",name:"danecando",description:null,stargazerCount:0,forkCount:0,primaryLanguage:null,isPrivate:!1,isFork:!1,isForked:!1,isArchived:!1,updatedAt:"2021-11-02T12:43:42Z"}],pageInfo:void 0}};var lr={parameters:{storySource:{source:`import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import ProfilePage from './ProfilePage.view';

const exampleData2 = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/2487968?v=4',
  bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',
  company: '@thisdot',
  followers: { totalCount: 24 },
  following: { totalCount: 20 },
  location: 'Washington, DC',
  login: 'tvanantwerp',
  name: 'Tom VanAntwerp',
  twitterUsername: 'tvanantwerp',
  websiteUrl: 'https://tomvanantwerp.com',
  organizations: {
    nodes: [
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'thisdot',
      },
    ],
  },
  repositories: {
    repos: [
      {
        id: 'MDEwOlJlcG9zaXRvcnkxNTExNzc2OQ==',
        name: 'jquery.shiptime',
        description:
          'Shipping Time is a plugin for your ecommerce website that displays the time until the shipping cut off. You can also configure it to show estimated delivery dates based on user location.',
        stargazerCount: 11,
        forkCount: 2,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-05-02T10:43:10Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkyMTUyNjQ3Nw==',
        name: 'jquery.ghostrelated',
        description: 'Related posts jQuery plugin for Ghost',
        stargazerCount: 49,
        forkCount: 13,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-08-20T23:30:55Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==',
        name: 'hapi-sequelize',
        description: 'Hapi plugin for the Sequelize ORM',
        stargazerCount: 112,
        forkCount: 38,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-06-14T02:48:12Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkyMzcyNDQyNg==',
        name: 'hapi-route-access',
        description: 'simple hapi role & permission auth',
        stargazerCount: 2,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-01-10T04:07:27Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkyNjEwMTQwOQ==',
        name: 'recoverize-app-old',
        description: 'the recoverize mobile application',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#563d7c', name: 'CSS' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2018-06-15T07:03:06Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNjU0NzM5NQ==',
        name: 'twitter-stream',
        description: 'A demo app for Boca JavaScript presentation',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#563d7c', name: 'CSS' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2019-09-13T18:38:23Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNzQyNDM5OA==',
        name: 'recoverize-wp',
        description: 'The recoverize website',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#4F5D95', name: 'PHP' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2018-06-15T07:06:54Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==',
        name: 'cando-zsh',
        description: 'my oh-my-zsh plugin',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#89e051', name: 'Shell' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-05-14T14:38:47Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnk0NjAyNjYwMA==',
        name: 'run-babel-run',
        description:
          'A CLI tool that kicks off your server babeled so u dont have to use lame requires in your root file runtime transpilations ya dig',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2019-09-13T18:33:44Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnk0OTM1NjE3NA==',
        name: 'react-workshop-starter',
        description: 'React / ES6 starter kit for UXDevSummit workshop',
        stargazerCount: 1,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-05-02T10:43:55Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnk0OTg3ODEyNg==',
        name: 'react-objective-synopsis',
        description: 'React presentation for UX Dev Summit 2016',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-05-07T20:58:23Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnk2MDkzMTQ4Ng==',
        name: 'hapi-rollbar',
        description: 'Hapi plugin for rollbar logging service',
        stargazerCount: 1,
        forkCount: 1,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2019-09-13T18:31:25Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=',
        name: 'gh-users',
        description: 'Implementation of the GitHub user search in React',
        stargazerCount: 1,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-05-07T20:56:38Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=',
        name: 'tscored',
        description:
          'General utility library written in TypeScript (to practice TS & some other fundamentals)',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2020-12-03T03:10:28Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzMzExNDc1MjQ=',
        name: 'rnplayground',
        description: 'React Native Playground. Sampling ideas \u{1F4A1}',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#b07219', name: 'Java' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-01-20T00:30:14Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=',
        name: 'stock-sniper',
        description: 'monitors large retailers for gpu restock',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-04-30T23:59:45Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=',
        name: 'JSM-Detox',
        description:
          'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
        stargazerCount: 6,
        forkCount: 4,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-11-17T05:58:18Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnkzNzE1MzA2MjQ=',
        name: 'notion-sdk-js',
        description: 'Official Notion JavaScript Client',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-06-02T15:40:16Z',
      },
      {
        id: 'MDEwOlJlcG9zaXRvcnk0MDc2NzcyOTU=',
        name: 'swr-site',
        description: 'The official website for SWR.',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
        isPrivate: false,
        isFork: false,
        isArchived: false,
        updatedAt: '2021-09-17T20:55:27Z',
      },
      {
        id: 'R_kgDOGO7ROA',
        name: 'with-firebase-user',
        description:
          'A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user',
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
        isPrivate: false,
        isFork: false,
        isForked: false,
        isArchived: false,
        updatedAt: '2021-11-13T01:59:23Z',
      },
      {
        id: 'R_kgDOGUNE2A',
        name: 'danecando',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        primaryLanguage: null,
        isPrivate: false,
        isFork: false,
        isForked: false,
        isArchived: false,
        updatedAt: '2021-11-02T12:43:42Z',
      },
    ],
    pageInfo: undefined,
  },
};

export default {
  component: ProfilePage,
  title: 'ProfilePage/UserProfilePage',
} as Meta;

const Template: Story<ComponentProps<typeof ProfilePage>> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userProfileData: exampleData2,
  owner: 'vyktoremario',
  pathname: '/vyktoremario',
};

const repoData = exampleData2.repositories;

const pageInfo = {
  endCursor: 'Y3Vyc29yOnYyOpK5MjAyMi0wMS0wM1QwMDowMjoxNyswMTowMM4acxkE',
  startCursor: 'Y3Vyc29yOnYyOpK5MjAyMi0wMi0yMlQxNDoyNjowNSswMTowMM4bjjvm',
  hasNextPage: true,
  hasPreviousPage: false,
};
const data2 = {
  ...exampleData2,
  repositories: { ...repoData, pageInfo },
};

export const WithPageInfo = Template.bind({});
WithPageInfo.args = {
  userProfileData: data2,
  owner: 'vyktoremario',
  pathname: '/vyktoremario',
};
`,locationsMap:{default:{startLoc:{col:60,line:295},endLoc:{col:1,line:297},startBody:{col:60,line:295},endBody:{col:1,line:297}},"with-page-info":{startLoc:{col:60,line:295},endLoc:{col:1,line:297},startBody:{col:60,line:295},endBody:{col:1,line:297}}}}},component:ge,title:"ProfilePage/UserProfilePage"};const fe=e=>t(ge,c({},e)),he=fe.bind({});he.args={userProfileData:J,owner:"vyktoremario",pathname:"/vyktoremario"};const cr=J.repositories,dr={endCursor:"Y3Vyc29yOnYyOpK5MjAyMi0wMS0wM1QwMDowMjoxNyswMTowMM4acxkE",startCursor:"Y3Vyc29yOnYyOpK5MjAyMi0wMi0yMlQxNDoyNjowNSswMTowMM4bjjvm",hasNextPage:!0,hasPreviousPage:!1},pr=v(c({},J),{repositories:v(c({},cr),{pageInfo:dr})}),ve=fe.bind({});ve.args={userProfileData:pr,owner:"vyktoremario",pathname:"/vyktoremario"};const ur=["Default","WithPageInfo"];var mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lr,Default:he,WithPageInfo:ve,__namedExportsOrder:ur});function gr({text:e}){return e?t("span",{children:e}):t("span",{className:"italic",children:"No description, website, or topics provided."})}const fr="pb-8 space-y-5 border-b-2 border-gray-300",hr="text-gray-700 font-semibold",vr="text-gray-600",yr="flex items-center text-gray-500 hover:text-blue-500 text-sm cursor-pointer leading-snug",br="h-5 w-5 mt-0.5 mr-2",wr="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap",kr="w-4 h-4 inline text-gray-700 mr-2 -mt-0.5",xr="font-semibold text-blue-600 hover:underline text-sm",Cr="inline-block bg-blue-100 text-blue-600 text-xs font-medium py-1 px-2 rounded-xl mr-1.5 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer";function zr({homepageUrl:e}){return e?n("div",{className:wr,children:[t(X,{className:kr}),t(w,{to:e,className:xr,target:"_blank",children:e})]}):null}function Nr({topics:e}){return e?t("div",{className:"space-y-1",children:e.map(a=>t("span",{className:Cr,children:a},a))}):null}function ye(){const{data:e,isRepoLoading:a}=R();return n("div",{className:fr,children:[t("h3",{className:hr,children:"About"}),t("div",{className:vr,children:n("div",{className:"space-y-4",children:[t(gr,{text:e==null?void 0:e.description}),t(zr,{homepageUrl:e==null?void 0:e.homepageUrl}),t(Nr,{topics:e==null?void 0:e.topics})]})}),t("div",{children:n("a",{className:yr,children:[t(tt,{className:br})," Readme"]})})]})}var Rr={parameters:{storySource:{source:`import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoAboutWidget from './RepoAboutWidget';

export default {
  component: RepoAboutWidget,
  title: 'RepoPage/RepoAboutWidget',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoAboutWidget />
  </RepoProvider>
);

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    description:
      'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
    homepageUrl: 'www.youtube.com/watch?v=vm085szsz_m',
    openIssueCount: 8,
    openPullRequestCount: 3,
    topics: ['react-native', 'pizza', 'e2e-tests', 'detox', 'jsmarathon'],
    isOrg: true,
  },
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 8,
    openPullRequestCount: 3,
    topics: [],
    isOrg: true,
  },
};
`,locationsMap:{"with-description":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},"no-description":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:ye,title:"RepoPage/RepoAboutWidget"};const be=e=>t(N,{value:e,children:t(ye,{})}),we=be.bind({});we.args={name:"starter.dev",owner:"thisdot",isRepoLoading:!1,data:{isPrivate:!1,stargazerCount:30,forkCount:10,watcherCount:5,description:"Demo app for JSMarathon presentation: React Native E2E Testing with Detox",homepageUrl:"www.youtube.com/watch?v=vm085szsz_m",openIssueCount:8,openPullRequestCount:3,topics:["react-native","pizza","e2e-tests","detox","jsmarathon"],isOrg:!0}};const ke=be.bind({});ke.args={name:"starter.dev",owner:"thisdot",isRepoLoading:!1,data:{isPrivate:!1,stargazerCount:30,forkCount:10,watcherCount:5,openIssueCount:8,openPullRequestCount:3,topics:[],isOrg:!0}};const Ar=["WithDescription","NoDescription"];var Mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rr,WithDescription:we,NoDescription:ke,__namedExportsOrder:Ar});const Tr="flex flex-wrap items-center justify-start",Pr="relative z-0 inline-flex shadow-sm rounded-md mx-2 my-1",Sr="relative inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25",Dr="-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600",F="-ml-1 mr-1 h-4 w-4 text-gray-600",Er=e=>{let a=`${e}`;if(e&&e>1e3){let r=a.split("");r.splice(r.length-3,3),a=`${r.join("")}k`}return a};function j({children:e,count:a=0}){let r=Er(a);return n("span",{className:Pr,children:[t("button",{type:"button",className:Sr,children:e}),t("button",{type:"button",className:Dr,children:r})]})}function G(){const{data:e}=R();return n("div",{className:Tr,children:[n(j,{count:e==null?void 0:e.watcherCount,children:[t(Ut,{className:F}),"Watch"]}),n(j,{count:e==null?void 0:e.stargazerCount,children:[t(M,{className:F}),"Star"]}),n(j,{count:e==null?void 0:e.forkCount,children:[t(S,{className:F}),"Fork"]})]})}var Lr={parameters:{storySource:{source:`import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoActionButtons from './RepoActionButtons';

export default {
  component: RepoActionButtons,
  title: 'RepoPage/RepoActionButtons',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoActionButtons />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};

export const BigNumbers = Template.bind({});
BigNumbers.args = {
  name: 'react',
  owner: 'facebook',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 178350,
    forkCount: 36801,
    watcherCount: 6321,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
`,locationsMap:{default:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},"big-numbers":{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:G,title:"RepoPage/RepoActionButtons"};const xe=e=>t(N,{value:e,children:t(G,{})}),Ce=xe.bind({});Ce.args={name:"starter.dev",owner:"thisdot",isRepoLoading:!1,data:{isPrivate:!1,stargazerCount:30,forkCount:10,watcherCount:5,openIssueCount:2,openPullRequestCount:1,topics:[],isOrg:!0}};const ze=xe.bind({});ze.args={name:"react",owner:"facebook",isRepoLoading:!1,data:{isPrivate:!1,stargazerCount:178350,forkCount:36801,watcherCount:6321,openIssueCount:2,openPullRequestCount:1,topics:[],isOrg:!0}};const Or=["Default","BigNumbers"];var _r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lr,Default:Ce,BigNumbers:ze,__namedExportsOrder:Or});const Jr="space-x-2.5 flex items-center text-xl",Fr="space-x-1.5 mb-0.5",jr="text-blue-600 hover:underline",Gr="text-blue-600 font-semibold hover:underline",Ir="text-gray-600",Ne="w-6 h-6 text-gray-600",Ur="w-6 h-6 bg-gray-200 opacity-25 rounded-lg",Br="w-8 h-6 bg-gray-200 opacity-25 rounded-xl";function Xr({isPrivate:e}){return e===void 0?t("div",{className:Ur}):e?t(at,{className:Ne}):t(Y,{className:Ne})}function I(){const{owner:e,name:a,data:r}=R();return n("h1",{className:Jr,children:[t(Xr,{isPrivate:r==null?void 0:r.isPrivate}),n("span",{className:Fr,children:[t(w,{to:(r==null?void 0:r.isOrg)?`/orgs/${e}`:`/${e}`,className:jr,children:e}),t("span",{className:Ir,children:"/"}),t(w,{to:`/${e}/${a}`,className:Gr,children:a})]}),r?t(ie,{isPrivate:r.isPrivate}):t("div",{className:Br})]})}const Zr="pt-6 px-12 bg-gray-100 border-b border-gray-300",$r="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center justify-between",Hr="mt-6";function Qr({issueCount:e=0,pullRequestCount:a=0}){return[{title:"Code",path:"",Icon:rt},{title:"Issues",path:"issues",Icon:nt,count:e},{title:"Pull Requests",path:"pulls",Icon:It,count:a}]}function Re(){var a,r;const e=R();return n("div",{className:Zr,children:[n("div",{className:$r,children:[t(I,{}),t(G,{})]}),t("div",{className:Hr,children:t(T,{tabs:Qr({issueCount:(a=e.data)==null?void 0:a.openIssueCount,pullRequestCount:(r=e.data)==null?void 0:r.openPullRequestCount}),basePath:`${e.owner}/${e.name}`,pathname:e.pathname})})]})}var qr={parameters:{storySource:{source:`import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoHeader from './RepoHeader';

export default {
  component: RepoHeader,
  title: 'RepoPage/RepoHeader',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeader />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  pathname: '/thisdot/starter.dev',
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
`,locationsMap:{default:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:Re,title:"RepoPage/RepoHeader"};const Wr=e=>t(N,{value:e,children:t(Re,{})}),Ae=Wr.bind({});Ae.args={name:"starter.dev",owner:"thisdot",pathname:"/thisdot/starter.dev",isRepoLoading:!1,data:{isPrivate:!1,stargazerCount:30,forkCount:10,watcherCount:5,openIssueCount:2,openPullRequestCount:1,topics:[],isOrg:!0}};const Vr=["Default"];var Yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qr,Default:Ae,__namedExportsOrder:Vr}),Kr={parameters:{storySource:{source:`import { RepoContext, RepoProvider } from '../../context/RepoContext';
import { Story, Meta } from '@storybook/react';
import RepoHeading from './RepoHeading';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeading />
  </RepoProvider>
);

export const Public = Template.bind({});
Public.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};

export const Private = Template.bind({});
Private.args = {
  name: 'starter.dev',
  owner: 'thisdot',
  branch: 'main',
  path: '',
  data: {
    isPrivate: true,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
`,locationsMap:{public:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},private:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:I,title:"RepoPage/RepoHeading"};const Me=e=>t(N,{value:e,children:t(I,{})}),Te=Me.bind({});Te.args={name:"starter.dev",owner:"thisdot",branch:"main",path:"",data:{isPrivate:!1,stargazerCount:30,forkCount:10,watcherCount:5,openIssueCount:2,openPullRequestCount:1,topics:[],isOrg:!0}};const Pe=Me.bind({});Pe.args={name:"starter.dev",owner:"thisdot",branch:"main",path:"",data:{isPrivate:!0,stargazerCount:30,forkCount:10,watcherCount:5,openIssueCount:2,openPullRequestCount:1,topics:[],isOrg:!0}};const en=["Public","Private"];var tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kr,Public:Te,Private:Pe,__namedExportsOrder:en});const an="rounded-md border border-gray-300 my-4",rn="p-2.5 border-b border-gray-300 sticky top-0 bg-white z-30",nn="hover:bg-gray-100 mr-2 p-1.5 rounded",on="inline-block -mt-0.5",sn="text-sm font-semibold",ln="bg-sky-100 p-4 rounded-md border border-sky-200 flex items-center justify-between my-4",cn="text-gray-800 text-sm",dn="bg-green-600 hover:bg-green-700 inline-flex text-white font-semibold rounded-lg border border-gray-200 py-1.5 px-4 text-xs";function pn(){return n("div",{className:ln,children:[t("div",{className:cn,children:"Help people interested in this repository understand your project by adding a README."}),t("button",{className:dn,children:"Add a README"})]})}function Se({readme:e}){return t(k,{children:e?n("div",{className:an,"data-testid":"readme",children:[n("header",{className:rn,children:[t("span",{className:nn,children:t(Xt,{className:on})}),t("span",{className:sn,children:"README.md"})]}),t("article",{className:"prose-h5:border-none prose max-w-none py-6 px-10 text-gray-800 prose-headings:my-1 prose-headings:border-b prose-headings:pb-2 prose-headings:font-medium prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-p:my-3 prose-p:leading-6 prose-a:font-normal prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-gray-800 prose-pre:bg-gray-100 prose-li:my-0.5  prose-img:m-0 prose-img:inline",children:t(ot,{children:e})})]}):t(pn,{})})}var un={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import RepoReadMe from './RepoReadMe.view';
import { ComponentProps } from 'react';

export default {
  component: RepoReadMe,
  title: 'RepoPage/RepoReadMe',
} as Meta;

const Template: Story<ComponentProps<typeof RepoReadMe>> = (args) => (
  <RepoReadMe {...args} />
);

export const NoReadMe = Template.bind({});
NoReadMe.args = {
  readme: '',
};

export const HasReadMe = Template.bind({});
HasReadMe.args = {
  readme: \`This demo application is a small re-implementation of some GitHub pages / functionality built using their GraphQL API.

  ## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Featured Tech Stack](#featured-tech-stack)
    - [Development Notes](#development-notes)
      - [Adding Storybook](#adding-storybook)
      - [Authenticating with GitHub](#authenticating-with-github)

  ## Overview

  ### Featured Tech Stack

  - [GraphQL](https://graphql.org/)
  - [React](https://reactjs.org)
  - [Remix](https://remix.run)
  - [Tailwind CSS](https://tailwindcss.com)

  ### Development Notes

  #### Adding Storybook

  To get Storybook working, I had to separately add a different bundler than worked with it. I choose the newer option to bundle Storybook with Vite, since it's a bit closer to esbuild which Remix uses. In the future, it might be possible to not include a separate bundler just for Storybook. [Storybook is not officially supported by Remix at this time](https://github.com/remix-run/remix/issues/214).

  #### Authenticating with GitHub

  This app uses an OAuth flow to authenticate with GitHub and use their API. You will need to create an OAuth GitHub app and use the provided client and secret IDs in
  .env. While developing locally, you will need to tunnel your webserver so that webhooks are available.\`,
};
`,locationsMap:{"no-read-me":{startLoc:{col:59,line:10},endLoc:{col:1,line:12},startBody:{col:59,line:10},endBody:{col:1,line:12}},"has-read-me":{startLoc:{col:59,line:10},endLoc:{col:1,line:12},startBody:{col:59,line:10},endBody:{col:1,line:12}}}}},component:Se,title:"RepoPage/RepoReadMe"};const De=e=>t(Se,c({},e)),Ee=De.bind({});Ee.args={readme:""};const Le=De.bind({});Le.args={readme:`This demo application is a small re-implementation of some GitHub pages / functionality built using their GraphQL API.

  ## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Featured Tech Stack](#featured-tech-stack)
    - [Development Notes](#development-notes)
      - [Adding Storybook](#adding-storybook)
      - [Authenticating with GitHub](#authenticating-with-github)

  ## Overview

  ### Featured Tech Stack

  - [GraphQL](https://graphql.org/)
  - [React](https://reactjs.org)
  - [Remix](https://remix.run)
  - [Tailwind CSS](https://tailwindcss.com)

  ### Development Notes

  #### Adding Storybook

  To get Storybook working, I had to separately add a different bundler than worked with it. I choose the newer option to bundle Storybook with Vite, since it's a bit closer to esbuild which Remix uses. In the future, it might be possible to not include a separate bundler just for Storybook. [Storybook is not officially supported by Remix at this time](https://github.com/remix-run/remix/issues/214).

  #### Authenticating with GitHub

  This app uses an OAuth flow to authenticate with GitHub and use their API. You will need to create an OAuth GitHub app and use the provided client and secret IDs in
  .env. While developing locally, you will need to tunnel your webserver so that webhooks are available.`};const mn=["NoReadMe","HasReadMe"];var gn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:un,NoReadMe:Ee,HasReadMe:Le,__namedExportsOrder:mn}),fn={parameters:{storySource:{source:`import type { Story, ComponentStory, ComponentMeta } from '@storybook/react';
import TabNavigation from './TabNavigation';
import { UserIcon, ClipboardListIcon } from '@heroicons/react/outline';

export default {
  component: TabNavigation,
  title: 'Components/TabNavigation',
} as ComponentMeta<typeof TabNavigation>;

const Template: ComponentStory<typeof TabNavigation> = (args) => (
  <TabNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: 'Profile',
      path: '',
      Icon: UserIcon,
    },
    {
      title: 'Repos',
      Icon: ClipboardListIcon,
    },
  ],
  pathname: '',
};
`,locationsMap:{default:{startLoc:{col:55,line:10},endLoc:{col:1,line:12},startBody:{col:55,line:10},endBody:{col:1,line:12}}}}},component:T,title:"Components/TabNavigation"};const hn=e=>t(T,c({},e)),Oe=hn.bind({});Oe.args={tabs:[{title:"Profile",path:"",Icon:it},{title:"Repos",Icon:st}],pathname:""};const vn=["Default"];var yn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fn,Default:Oe,__namedExportsOrder:vn});const bn={avatarUrl:"https://avatars.githubusercontent.com/u/2487968?v=4",bio:'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',company:"@thisdot",followers:{totalCount:24},following:{totalCount:20},starredRepositories:{totalCount:3},location:"Washington, DC",login:"tvanantwerp",name:"Tom VanAntwerp",twitterUsername:"tvanantwerp",websiteUrl:"https://tomvanantwerp.com",organizations:{nodes:[{avatarUrl:"https://avatars.githubusercontent.com/u/22839396?v=4",login:"thisdot"}]}};var wn={parameters:{storySource:{source:`import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import UserProfile from './UserProfile.view';

const exampleData = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/2487968?v=4',
  bio: 'Senior Software Engineer <a class="user-mention" data-hovercard-type="organization" data-hovercard-url="/orgs/thisdot/hovercard" href="https://github.com/thisdot">@thisdot</a>',
  company: '@thisdot',
  followers: { totalCount: 24 },
  following: { totalCount: 20 },
  starredRepositories: { totalCount: 3 },
  location: 'Washington, DC',
  login: 'tvanantwerp',
  name: 'Tom VanAntwerp',
  twitterUsername: 'tvanantwerp',
  websiteUrl: 'https://tomvanantwerp.com',
  organizations: {
    nodes: [
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'thisdot',
      },
    ],
  },
};

export default {
  component: UserProfile,
  title: 'ProfilePage/UserProfile',
} as Meta;

const Template: Story<ComponentProps<typeof UserProfile>> = (args) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...exampleData,
};
`,locationsMap:{default:{startLoc:{col:60,line:32},endLoc:{col:1,line:34},startBody:{col:60,line:32},endBody:{col:1,line:34}}}}},component:L,title:"ProfilePage/UserProfile"};const kn=e=>t(L,c({},e)),_e=kn.bind({});_e.args=c({},bn);const xn=["Default"];var Cn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wn,Default:_e,__namedExportsOrder:xn});function Je(){return t("div",{className:ce,children:n(lt,{width:325,height:125,viewBox:"0 0 325 125",children:[t("rect",{x:"5",y:"5",rx:"5",ry:"5",width:"200",height:"15"}),t("rect",{x:"215",y:"5",rx:"5",ry:"5",width:"50",height:"15"}),t("rect",{x:"5",y:"40",rx:"5",ry:"5",width:"320",height:"50"}),t("rect",{x:"5",y:"110",rx:"5",ry:"5",width:"75",height:"10"}),t("rect",{x:"90",y:"110",rx:"5",ry:"5",width:"75",height:"10"})]})})}var zn={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import LoadingRepos from './LoadingRepos';

export default {
  component: LoadingRepos,
  title: 'Loading/LoadingRepos',
} as Meta;

const Template: Story = () => <LoadingRepos />;

export const Primary = Template.bind({});
`,locationsMap:{primary:{startLoc:{col:24,line:9},endLoc:{col:46,line:9},startBody:{col:24,line:9},endBody:{col:46,line:9}}}}},component:Je,title:"Loading/LoadingRepos"};const Nn=()=>t(Je,{}),Rn=Nn.bind({}),An=["Primary"];var Mn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zn,Primary:Rn,__namedExportsOrder:An});const Tn={repos:[{id:"MDEwOlJlcG9zaXRvcnkxNTExNzc2OQ==",name:"jquery.shiptime",description:"Shipping Time is a plugin for your ecommerce website that displays the time until the shipping cut off. You can also configure it to show estimated delivery dates based on user location.",stargazerCount:11,forkCount:2,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-02T10:43:10Z"},{id:"MDEwOlJlcG9zaXRvcnkyMTUyNjQ3Nw==",name:"jquery.ghostrelated",description:"Related posts jQuery plugin for Ghost",stargazerCount:49,forkCount:13,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-08-20T23:30:55Z"},{id:"MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==",name:"hapi-sequelize",description:"Hapi plugin for the Sequelize ORM",stargazerCount:112,forkCount:38,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-06-14T02:48:12Z"},{id:"MDEwOlJlcG9zaXRvcnkyMzcyNDQyNg==",name:"hapi-route-access",description:"simple hapi role & permission auth",stargazerCount:2,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-01-10T04:07:27Z"},{id:"MDEwOlJlcG9zaXRvcnkyNjEwMTQwOQ==",name:"recoverize-app-old",description:"the recoverize mobile application",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#563d7c",name:"CSS"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2018-06-15T07:03:06Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjU0NzM5NQ==",name:"twitter-stream",description:"A demo app for Boca JavaScript presentation",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#563d7c",name:"CSS"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:38:23Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzQyNDM5OA==",name:"recoverize-wp",description:"The recoverize website",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#4F5D95",name:"PHP"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2018-06-15T07:06:54Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==",name:"cando-zsh",description:"my oh-my-zsh plugin",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#89e051",name:"Shell"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-14T14:38:47Z"},{id:"MDEwOlJlcG9zaXRvcnk0NjAyNjYwMA==",name:"run-babel-run",description:"A CLI tool that kicks off your server babeled so u dont have to use lame requires in your root file runtime transpilations ya dig",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:33:44Z"},{id:"MDEwOlJlcG9zaXRvcnk0OTM1NjE3NA==",name:"react-workshop-starter",description:"React / ES6 starter kit for UXDevSummit workshop",stargazerCount:1,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-02T10:43:55Z"},{id:"MDEwOlJlcG9zaXRvcnk0OTg3ODEyNg==",name:"react-objective-synopsis",description:"React presentation for UX Dev Summit 2016",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-07T20:58:23Z"},{id:"MDEwOlJlcG9zaXRvcnk2MDkzMTQ4Ng==",name:"hapi-rollbar",description:"Hapi plugin for rollbar logging service",stargazerCount:1,forkCount:1,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2019-09-13T18:31:25Z"},{id:"MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=",name:"gh-users",description:"Implementation of the GitHub user search in React",stargazerCount:1,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-05-07T20:56:38Z"},{id:"MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=",name:"tscored",description:"General utility library written in TypeScript (to practice TS & some other fundamentals)",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2020-12-03T03:10:28Z"},{id:"MDEwOlJlcG9zaXRvcnkzMzExNDc1MjQ=",name:"rnplayground",description:"React Native Playground. Sampling ideas \u{1F4A1}",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#b07219",name:"Java"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-01-20T00:30:14Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=",name:"stock-sniper",description:"monitors large retailers for gpu restock",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-04-30T23:59:45Z"},{id:"MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=",name:"JSM-Detox",description:"Demo app for JSMarathon presentation: React Native E2E Testing with Detox",stargazerCount:6,forkCount:4,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-11-17T05:58:18Z"},{id:"MDEwOlJlcG9zaXRvcnkzNzE1MzA2MjQ=",name:"notion-sdk-js",description:"Official Notion JavaScript Client",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-06-02T15:40:16Z"},{id:"MDEwOlJlcG9zaXRvcnk0MDc2NzcyOTU=",name:"swr-site",description:"The official website for SWR.",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#f1e05a",name:"JavaScript"},isPrivate:!1,isFork:!1,isArchived:!1,updatedAt:"2021-09-17T20:55:27Z"},{id:"R_kgDOGO7ROA",name:"with-firebase-user",description:"A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user",stargazerCount:0,forkCount:0,primaryLanguage:{color:"#2b7489",name:"TypeScript"},isPrivate:!1,isFork:!1,isForked:!1,isArchived:!1,updatedAt:"2021-11-13T01:59:23Z"},{id:"R_kgDOGUNE2A",name:"danecando",description:null,stargazerCount:0,forkCount:0,primaryLanguage:null,isPrivate:!1,isFork:!1,isForked:!1,isArchived:!1,updatedAt:"2021-11-02T12:43:42Z"}],pageInfo:void 0};var Pn={parameters:{storySource:{source:`import type { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import UserRepos from './UserRepos.view';

const reposResponse = {
  repos: [
    {
      id: 'MDEwOlJlcG9zaXRvcnkxNTExNzc2OQ==',
      name: 'jquery.shiptime',
      description:
        'Shipping Time is a plugin for your ecommerce website that displays the time until the shipping cut off. You can also configure it to show estimated delivery dates based on user location.',
      stargazerCount: 11,
      forkCount: 2,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-05-02T10:43:10Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkyMTUyNjQ3Nw==',
      name: 'jquery.ghostrelated',
      description: 'Related posts jQuery plugin for Ghost',
      stargazerCount: 49,
      forkCount: 13,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-08-20T23:30:55Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkyMzI5Njk3Ng==',
      name: 'hapi-sequelize',
      description: 'Hapi plugin for the Sequelize ORM',
      stargazerCount: 112,
      forkCount: 38,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-06-14T02:48:12Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkyMzcyNDQyNg==',
      name: 'hapi-route-access',
      description: 'simple hapi role & permission auth',
      stargazerCount: 2,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-01-10T04:07:27Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkyNjEwMTQwOQ==',
      name: 'recoverize-app-old',
      description: 'the recoverize mobile application',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#563d7c', name: 'CSS' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2018-06-15T07:03:06Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNjU0NzM5NQ==',
      name: 'twitter-stream',
      description: 'A demo app for Boca JavaScript presentation',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#563d7c', name: 'CSS' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2019-09-13T18:38:23Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNzQyNDM5OA==',
      name: 'recoverize-wp',
      description: 'The recoverize website',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#4F5D95', name: 'PHP' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2018-06-15T07:06:54Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNzk1ODQyNg==',
      name: 'cando-zsh',
      description: 'my oh-my-zsh plugin',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#89e051', name: 'Shell' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-05-14T14:38:47Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnk0NjAyNjYwMA==',
      name: 'run-babel-run',
      description:
        'A CLI tool that kicks off your server babeled so u dont have to use lame requires in your root file runtime transpilations ya dig',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2019-09-13T18:33:44Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnk0OTM1NjE3NA==',
      name: 'react-workshop-starter',
      description: 'React / ES6 starter kit for UXDevSummit workshop',
      stargazerCount: 1,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-05-02T10:43:55Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnk0OTg3ODEyNg==',
      name: 'react-objective-synopsis',
      description: 'React presentation for UX Dev Summit 2016',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-05-07T20:58:23Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnk2MDkzMTQ4Ng==',
      name: 'hapi-rollbar',
      description: 'Hapi plugin for rollbar logging service',
      stargazerCount: 1,
      forkCount: 1,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2019-09-13T18:31:25Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzMTYwNjM5NTU=',
      name: 'gh-users',
      description: 'Implementation of the GitHub user search in React',
      stargazerCount: 1,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-05-07T20:56:38Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzMTc3MTk4MzY=',
      name: 'tscored',
      description:
        'General utility library written in TypeScript (to practice TS & some other fundamentals)',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2020-12-03T03:10:28Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzMzExNDc1MjQ=',
      name: 'rnplayground',
      description: 'React Native Playground. Sampling ideas \u{1F4A1}',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#b07219', name: 'Java' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-01-20T00:30:14Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNjEyNzIyNzI=',
      name: 'stock-sniper',
      description: 'monitors large retailers for gpu restock',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-04-30T23:59:45Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNjM2MjU5MjM=',
      name: 'JSM-Detox',
      description:
        'Demo app for JSMarathon presentation: React Native E2E Testing with Detox',
      stargazerCount: 6,
      forkCount: 4,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-11-17T05:58:18Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnkzNzE1MzA2MjQ=',
      name: 'notion-sdk-js',
      description: 'Official Notion JavaScript Client',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-06-02T15:40:16Z',
    },
    {
      id: 'MDEwOlJlcG9zaXRvcnk0MDc2NzcyOTU=',
      name: 'swr-site',
      description: 'The official website for SWR.',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#f1e05a', name: 'JavaScript' },
      isPrivate: false,
      isFork: false,
      isArchived: false,
      updatedAt: '2021-09-17T20:55:27Z',
    },
    {
      id: 'R_kgDOGO7ROA',
      name: 'with-firebase-user',
      description:
        'A higher order function that decodes a Firebase Auth JWT and decorates the NextJS api request object with a Firebase user',
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: { color: '#2b7489', name: 'TypeScript' },
      isPrivate: false,
      isFork: false,
      isForked: false,
      isArchived: false,
      updatedAt: '2021-11-13T01:59:23Z',
    },
    {
      id: 'R_kgDOGUNE2A',
      name: 'danecando',
      description: null,
      stargazerCount: 0,
      forkCount: 0,
      primaryLanguage: null,
      isPrivate: false,
      isFork: false,
      isForked: false,
      isArchived: false,
      updatedAt: '2021-11-02T12:43:42Z',
    },
  ],
  pageInfo: undefined,
};

export default {
  component: UserRepos,
  title: 'ProfilePage/UserRepos',
} as Meta;

const Template: Story<ComponentProps<typeof UserRepos>> = (args) => (
  <UserRepos {...args} />
);

export const Default = Template.bind({});
Default.args = {
  repos: reposResponse,
  owner: 'vyktoremario',
};
`,locationsMap:{default:{startLoc:{col:58,line:275},endLoc:{col:1,line:277},startBody:{col:58,line:275},endBody:{col:1,line:277}}}}},component:_,title:"ProfilePage/UserRepos"};const Sn=e=>t(_,c({},e)),Fe=Sn.bind({});Fe.args={repos:Tn,owner:"vyktoremario"};const Dn=["Default"];var En=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pn,Default:Fe,__namedExportsOrder:Dn});const Ln=[ft,ht,vt,yt,bt,wt,kt,xt,Ct,zt,At];Ln.forEach(e=>{Object.keys(e).forEach(a=>{const r=e[a];switch(a){case"args":case"argTypes":return mt.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(o=>ut(o,!1));case"loaders":return r.forEach(o=>pt(o,!1));case"parameters":return $(c({},r),!1);case"argTypesEnhancers":return r.forEach(o=>dt(o));case"argsEnhancers":return r.forEach(o=>ct(o));case"globals":case"globalTypes":{const o={};return o[a]=r,$(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(a+" was not supported :( !")}})});gt(()=>[Gt,ta,mr,Mr,_r,Yr,tn,gn,yn,Cn,Mn,En].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.7aa2445a.js.map
