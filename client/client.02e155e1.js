function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const l=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(l){const s=c(e,n,r,a);t.p(s,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function E(t){return y(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function k(){if(!S)throw new Error("Function called outside component initialization");return S}const A=[],L=[],R=[],P=[],q=Promise.resolve();let j=!1;function C(t){R.push(t)}let O=!1;const I=new Set;function N(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];x(e),z(e.$$)}for(A.length=0;L.length;)L.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];I.has(e)||(I.add(e),e())}R.length=0}while(A.length);for(;P.length;)P.pop()();j=!1,O=!1,I.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const U=new Set;let T;function M(){T={r:0,c:[],p:T}}function D(){T.r||s(T.c),T=T.p}function G(t,e){t&&t.i&&(U.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),T.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function B(t){t&&t.c()}function J(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),C(()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(C)}function Y(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(A.push(t),j||(j=!0,q.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,o,a,c,l,i=[-1]){const u=S;x(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let d=!1;if(h.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&W(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=$(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&G(e.$$.fragment),F(e,n.target,n.anchor),N()}x(u)}class Q{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={};function nt(e){let n,r,s,o,a,c,l,p,g,w,_,S,x,k,A,L,R,P,q,j;return{c(){n=h("nav"),r=h("ul"),s=h("li"),o=h("span"),a=d("Lukasz Kostrzewa"),c=m(),l=h("li"),p=h("a"),g=d("home"),_=m(),S=h("li"),x=h("a"),k=d("about"),L=m(),R=h("li"),P=h("a"),q=d("blog"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=$(n);r=b(e,"UL",{class:!0});var i=$(r);s=b(i,"LI",{class:!0});var u=$(s);o=b(u,"SPAN",{class:!0});var h=$(o);a=y(h,"Lukasz Kostrzewa"),h.forEach(f),u.forEach(f),c=E(i),l=b(i,"LI",{class:!0});var d=$(l);p=b(d,"A",{"aria-current":!0,href:!0,class:!0});var m=$(p);g=y(m,"home"),m.forEach(f),d.forEach(f),_=E(i),S=b(i,"LI",{class:!0});var v=$(S);x=b(v,"A",{"aria-current":!0,href:!0,class:!0});var w=$(x);k=y(w,"about"),w.forEach(f),v.forEach(f),L=E(i),R=b(i,"LI",{class:!0});var A=$(R);P=b(A,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var j=$(P);q=y(j,"blog"),j.forEach(f),A.forEach(f),i.forEach(f),e.forEach(f),this.h()},h(){v(o,"class","svelte-fevt9l"),v(s,"class","svelte-fevt9l"),v(p,"aria-current",w=void 0===e[0]?"page":void 0),v(p,"href","."),v(p,"class","svelte-fevt9l"),v(l,"class","svelte-fevt9l"),v(x,"aria-current",A="about"===e[0]?"page":void 0),v(x,"href","about"),v(x,"class","svelte-fevt9l"),v(S,"class","svelte-fevt9l"),v(P,"rel","prefetch"),v(P,"aria-current",j="blog"===e[0]?"page":void 0),v(P,"href","blog"),v(P,"class","svelte-fevt9l"),v(R,"class","svelte-fevt9l"),v(r,"class","svelte-fevt9l"),v(n,"class","svelte-fevt9l")},m(t,e){u(t,n,e),i(n,r),i(r,s),i(s,o),i(o,a),i(r,c),i(r,l),i(l,p),i(p,g),i(r,_),i(r,S),i(S,x),i(x,k),i(r,L),i(r,R),i(R,P),i(P,q)},p(t,[e]){1&e&&w!==(w=void 0===t[0]?"page":void 0)&&v(p,"aria-current",w),1&e&&A!==(A="about"===t[0]?"page":void 0)&&v(x,"aria-current",A),1&e&&j!==(j="blog"===t[0]?"page":void 0)&&v(P,"aria-current",j)},i:t,o:t,d(t){t&&f(n)}}}function rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class st extends Q{constructor(t){super(),X(this,t,rt,nt,a,{segment:0})}}function ot(e){let n,r,s,o,a,c,l,p,g,w,_,S,x,k,A,L,R,P,q,j,C,O,I,N;return{c(){n=h("footer"),r=d("© "),s=d(e[0]),o=d(" Łukasz Kostrzewa\n    "),a=h("div"),c=h("a"),l=h("img"),g=m(),w=h("a"),_=h("img"),x=m(),k=h("a"),A=h("img"),R=m(),P=h("a"),q=h("img"),C=m(),O=h("a"),I=h("img"),this.h()},l(t){n=b(t,"FOOTER",{class:!0});var i=$(n);r=y(i,"© "),s=y(i,e[0]),o=y(i," Łukasz Kostrzewa\n    "),a=b(i,"DIV",{class:!0});var u=$(a);c=b(u,"A",{href:!0,class:!0});var p=$(c);l=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(f),g=E(u),w=b(u,"A",{href:!0,class:!0});var h=$(w);_=b(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(f),x=E(u),k=b(u,"A",{href:!0,class:!0});var d=$(k);A=b(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(f),R=E(u),P=b(u,"A",{href:!0,class:!0});var m=$(P);q=b(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(f),C=E(u),O=b(u,"A",{href:!0,class:!0});var v=$(O);I=b(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(f),u.forEach(f),i.forEach(f),this.h()},h(){l.src!==(p="stackoverflow.png")&&v(l,"src","stackoverflow.png"),v(l,"alt","StackOverflow"),v(l,"class","svelte-121qlta"),v(c,"href","https://stackoverflow.com/users/1131963"),v(c,"class","svelte-121qlta"),_.src!==(S="twitter.png")&&v(_,"src","twitter.png"),v(_,"alt","Twitter"),v(_,"class","svelte-121qlta"),v(w,"href","https://twitter.com/lukaszwebmaster"),v(w,"class","svelte-121qlta"),A.src!==(L="linkedin.png")&&v(A,"src","linkedin.png"),v(A,"alt","LinkedIn"),v(A,"class","svelte-121qlta"),v(k,"href","https://www.linkedin.com/in/\\%C5\\%82ukasz-kostrzewa-06616991/"),v(k,"class","svelte-121qlta"),q.src!==(j="github.png")&&v(q,"src","github.png"),v(q,"alt","GitHub"),v(q,"class","svelte-121qlta"),v(P,"href","https://github.com/lukaszkostrzewa"),v(P,"class","svelte-121qlta"),I.src!==(N="goodreads.png")&&v(I,"src","goodreads.png"),v(I,"alt","GitHub"),v(I,"class","svelte-121qlta"),v(O,"href","https://www.goodreads.com/user/show/120856329-lukasz-kostrzewa"),v(O,"class","svelte-121qlta"),v(a,"class","social-media svelte-121qlta"),v(n,"class","svelte-121qlta")},m(t,e){u(t,n,e),i(n,r),i(n,s),i(n,o),i(n,a),i(a,c),i(c,l),i(a,g),i(a,w),i(w,_),i(a,x),i(a,k),i(k,A),i(a,R),i(a,P),i(P,q),i(a,C),i(a,O),i(O,I)},p:t,i:t,o:t,d(t){t&&f(n)}}}function at(t){return[(new Date).getFullYear()]}class ct extends Q{constructor(t){super(),X(this,t,at,ot,a,{})}}function lt(t){let e,n,r,s,o,a;e=new st({props:{segment:t[0]}});const i=t[2].default,p=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(i,t,t[1],null);return o=new ct({}),{c(){B(e.$$.fragment),n=m(),r=h("main"),p&&p.c(),s=m(),B(o.$$.fragment),this.h()},l(t){J(e.$$.fragment,t),n=E(t),r=b(t,"MAIN",{class:!0});var a=$(r);p&&p.l(a),a.forEach(f),s=E(t),J(o.$$.fragment,t),this.h()},h(){v(r,"class","svelte-1uhnsl8")},m(t,c){F(e,t,c),u(t,n,c),u(t,r,c),p&&p.m(r,null),u(t,s,c),F(o,t,c),a=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),p&&p.p&&2&n&&l(p,i,t,t[1],n,null,null)},i(t){a||(G(e.$$.fragment,t),G(p,t),G(o.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),H(p,t),H(o.$$.fragment,t),a=!1},d(t){Y(e,t),t&&f(n),t&&f(r),p&&p.d(t),t&&f(s),Y(o,t)}}}function it(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ut extends Q{constructor(t){super(),X(this,t,it,lt,a,{segment:0})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var s=$(e);n=y(s,r),s.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,s,o,a,c,l,p,S,x=e[1].message+"";document.title=n=e[0];let k=e[2]&&e[1].stack&&ft(e);return{c(){r=m(),s=h("h1"),o=d(e[0]),a=m(),c=h("p"),l=d(x),p=m(),k&&k.c(),S=g(),this.h()},l(t){_('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t),s=b(t,"H1",{class:!0});var n=$(s);o=y(n,e[0]),n.forEach(f),a=E(t),c=b(t,"P",{class:!0});var i=$(c);l=y(i,x),i.forEach(f),p=E(t),k&&k.l(t),S=g(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),i(s,o),u(t,a,e),u(t,c,e),i(c,l),u(t,p,e),k&&k.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(o,t[0]),2&e&&x!==(x=t[1].message+"")&&w(l,x),t[2]&&t[1].stack?k?k.p(t,e):(k=ft(t),k.c(),k.m(S.parentNode,S)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),k&&k.d(t),t&&f(S)}}}function ht(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class dt extends Q{constructor(t){super(),X(this,t,ht,pt,a,{status:0,error:1})}}function mt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&B(n.$$.fragment),r=g()},l(t){n&&J(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?K(o,[V(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){M();const t=n;H(t.$$.fragment,1,0,()=>{Y(t,1)}),D()}a?(n=new a(c()),B(n.$$.fragment),G(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&G(n.$$.fragment,t),s=!0)},o(t){n&&H(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Y(n,t)}}}function gt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){B(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function vt(t){let e,n,r,s;const o=[gt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(M(),H(a[l],1,1,()=>{a[l]=null}),D(),n=a[e],n||(n=a[e]=o[e](t),n.c()),G(n,1),n.m(r.parentNode,r))},i(t){s||(G(n),s=!0)},o(t){H(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function $t(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new ut({props:o}),{c(){B(n.$$.fragment)},l(t){J(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?K(s,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(G(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){Y(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,k().$$.after_update.push(u),f=et,p=r,k().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class yt extends Q{constructor(t){super(),X(this,t,bt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],wt=[{js:()=>import("./index.4c354dd0.js"),css:["assets/index-c218c8bc.css"]},{js:()=>import("./about.c9e17d80.js"),css:[]},{js:()=>import("./index.246064c4.js"),css:["assets/index-a6f64363.css"]},{js:()=>import("./[slug].fad608b0.js"),css:["assets/[slug]-870b393e.css"]}],_t=(St=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:St(t[1])})}]}]);var St;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function xt(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function c(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))}function kt(t,e={noscroll:!1,replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Bt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Rt,Pt,qt=!1,jt=[],Ct="{}";const Ot={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(At&&At.session)};let It,Nt;Ot.session.subscribe(t=>xt(void 0,void 0,void 0,(function*(){if(It=t,!qt)return;Nt=!0;const e=Kt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=yield Ft(e);n===Rt&&(r?yield kt(r.location,{replaceState:!0}):yield Jt(o,s,e.page))})));let zt,Ut=null;let Tt,Mt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;let e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],s=r.pattern.exec(e);if(s){const n=Ht(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}function Bt(t,e,n,r){return xt(this,void 0,void 0,(function*(){if(e)Tt=e;else{const t=Vt();Gt[Tt]=t,e=Tt=++Mt,Gt[Tt]=n?t:{x:0,y:0}}Tt=e,Lt&&Ot.preloading.set(!0);const s=Ut&&Ut.href===t.href?Ut.promise:Ft(t);Ut=null;const o=Rt={},a=yield s,{redirect:c}=a;if(o===Rt){if(c)yield kt(c.location,{replaceState:!0});else{const{props:e,branch:n}=a;yield Jt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Gt[Tt]=t,t&&(c?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Jt(t,e,n){return xt(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),Lt?Lt.$set(e):(e.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},e.level0={props:yield Pt},e.notify=Ot.page.notify,Lt=new yt({target:zt,props:e,hydrate:!0})),jt=t,Ct=JSON.stringify(n.query),qt=!0,Nt=!1}))}function Ft(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Pt){const t=()=>{};Pt=At.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},It)}let c,l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map((e,c)=>xt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const s=jt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!Nt&&!u&&jt[c]&&jt[c].part===e.i)return jt[c];u=!1;const{default:h,preload:d}=yield function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=qt||!At.preloaded[c+1]?d?yield d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},It):{}:At.preloaded[c+1],o["level"+p]={component:h,props:m,segment:f,match:i,part:e.i}}))))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}))}function Yt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Wt(t){const e=Kt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,Ft(e)),Ut.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Zt(t)},20)}function Zt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Kt(s);if(o){Bt(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Dt.pushState({id:Tt},"",s.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Gt[Tt]=Vt(),t.state){const e=Kt(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Tt=t}(Mt),Dt.replaceState({id:Tt},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){zt=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:Mt},"",e);const n=new URL(location.href);if(At.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=At;Pt||(Pt=o&&o[0]),Jt([],{error:c,status:a,session:s,level0:{props:Pt},level1:{props:{status:a,error:c},component:dt},segments:o},{host:e,path:n,query:Ht(r),params:{}})}();const r=Kt(n);return r?Bt(r,Mt,!0,t):void 0});export{Q as S,m as a,b,E as c,f as d,h as e,$ as f,y as g,v as h,X as i,u as j,i as k,w as l,p as m,t as n,_ as q,a as s,d as t};
