"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4421],{35687:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractHandler=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(r(62435).AbstractMathDocument),s=function(){function t(t,e){void 0===e&&(e=5),this.documentClass=i,this.adaptor=t,this.priority=e}return Object.defineProperty(t.prototype,"name",{get:function(){return this.constructor.NAME},enumerable:!1,configurable:!0}),t.prototype.handlesDocument=function(t){return!1},t.prototype.create=function(t,e){return new this.documentClass(t,this.adaptor,e)},t.NAME="generic",t}();e.AbstractHandler=s},16992:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractInputJax=void 0;var n=r(78440),o=r(38477),i=function(){function t(t){void 0===t&&(t={}),this.adaptor=null,this.mmlFactory=null;var e=this.constructor;this.options=(0,n.userOptions)((0,n.defaultOptions)({},e.OPTIONS),t),this.preFilters=new o.FunctionList,this.postFilters=new o.FunctionList}return Object.defineProperty(t.prototype,"name",{get:function(){return this.constructor.NAME},enumerable:!1,configurable:!0}),t.prototype.setAdaptor=function(t){this.adaptor=t},t.prototype.setMmlFactory=function(t){this.mmlFactory=t},t.prototype.initialize=function(){},t.prototype.reset=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},Object.defineProperty(t.prototype,"processStrings",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.findMath=function(t,e){return[]},t.prototype.executeFilters=function(t,e,r,n){var o={math:e,document:r,data:n};return t.execute(o),o.data},t.NAME="generic",t.OPTIONS={},t}();e.AbstractInputJax=i},62435:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},a=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractMathDocument=e.resetAllOptions=e.resetOptions=e.RenderList=void 0;var l=r(78440),u=r(16992),c=r(25305),p=r(4450),h=r(13523),f=r(29231),d=r(6336),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.create=function(t){var e,r,n=new this;try{for(var o=i(Object.keys(t)),a=o.next();!a.done;a=o.next()){var l=a.value,u=s(this.action(l,t[l]),2),c=u[0],p=u[1];p&&n.add(c,p)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return n},e.action=function(t,e){var r,n,o,i,a,l,u=!0,c=e[0];if(1===e.length||"boolean"==typeof e[1])2===e.length&&(u=e[1]),a=(r=s(this.methodActions(t),2))[0],l=r[1];else if("string"==typeof e[1])if("string"==typeof e[2]){4===e.length&&(u=e[3]);var p=s(e.slice(1),2),h=p[0],f=p[1];a=(n=s(this.methodActions(h,f),2))[0],l=n[1]}else 3===e.length&&(u=e[2]),a=(o=s(this.methodActions(e[1]),2))[0],l=o[1];else 4===e.length&&(u=e[3]),a=(i=s(e.slice(1),2))[0],l=i[1];return[{id:t,renderDoc:a,renderMath:l,convert:u},c]},e.methodActions=function(t,e){return void 0===e&&(e=t),[function(e){return t&&e[t](),!1},function(t,r){return e&&t[e](r),!1}]},e.prototype.renderDoc=function(t,e){var r,n;void 0===e&&(e=h.STATE.UNPROCESSED);try{for(var o=i(this.items),s=o.next();!s.done;s=o.next()){var a=s.value;if(a.priority>=e&&a.item.renderDoc(t))return}}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},e.prototype.renderMath=function(t,e,r){var n,o;void 0===r&&(r=h.STATE.UNPROCESSED);try{for(var s=i(this.items),a=s.next();!a.done;a=s.next()){var l=a.value;if(l.priority>=r&&l.item.renderMath(t,e))return}}catch(t){n={error:t}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}},e.prototype.renderConvert=function(t,e,r){var n,o;void 0===r&&(r=h.STATE.LAST);try{for(var s=i(this.items),a=s.next();!a.done;a=s.next()){var l=a.value;if(l.priority>r)return;if(l.item.convert&&l.item.renderMath(t,e))return}}catch(t){n={error:t}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}},e.prototype.findID=function(t){var e,r;try{for(var n=i(this.items),o=n.next();!o.done;o=n.next()){var s=o.value;if(s.item.id===t)return s.item}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}return null},e}(r(75483).PrioritizedList);e.RenderList=y,e.resetOptions={all:!1,processed:!1,inputJax:null,outputJax:null},e.resetAllOptions={all:!0,processed:!0,inputJax:[],outputJax:[]};var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.compile=function(t){return null},e}(u.AbstractInputJax),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.typeset=function(t,e){return void 0===e&&(e=null),null},e.prototype.escaped=function(t,e){return null},e}(c.AbstractOutputJax),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(p.AbstractMathList),b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(h.AbstractMathItem),g=function(){function t(e,r,n){var o=this,i=this.constructor;this.document=e,this.options=(0,l.userOptions)((0,l.defaultOptions)({},i.OPTIONS),n),this.math=new(this.options.MathList||x),this.renderActions=y.create(this.options.renderActions),this.processed=new t.ProcessBits,this.outputJax=this.options.OutputJax||new m;var s=this.options.InputJax||[new v];Array.isArray(s)||(s=[s]),this.inputJax=s,this.adaptor=r,this.outputJax.setAdaptor(r),this.inputJax.map((function(t){return t.setAdaptor(r)})),this.mmlFactory=this.options.MmlFactory||new f.MmlFactory,this.inputJax.map((function(t){return t.setMmlFactory(o.mmlFactory)})),this.outputJax.initialize(),this.inputJax.map((function(t){return t.initialize()}))}return Object.defineProperty(t.prototype,"kind",{get:function(){return this.constructor.KIND},enumerable:!1,configurable:!0}),t.prototype.addRenderAction=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=s(y.action(t,e),2),o=n[0],i=n[1];this.renderActions.add(o,i)},t.prototype.removeRenderAction=function(t){var e=this.renderActions.findID(t);e&&this.renderActions.remove(e)},t.prototype.render=function(){return this.renderActions.renderDoc(this),this},t.prototype.rerender=function(t){return void 0===t&&(t=h.STATE.RERENDER),this.state(t-1),this.render(),this},t.prototype.convert=function(t,e){void 0===e&&(e={});var r=(0,l.userOptions)({format:this.inputJax[0].name,display:!0,end:h.STATE.LAST,em:16,ex:8,containerWidth:null,lineWidth:1e6,scale:1,family:""},e),n=r.format,o=r.display,i=r.end,s=r.ex,a=r.em,u=r.containerWidth,c=r.lineWidth,p=r.scale,f=r.family;null===u&&(u=80*s);var d=this.inputJax.reduce((function(t,e){return e.name===n?e:t}),null),y=new this.options.MathItem(t,d,o);return y.start.node=this.adaptor.body(this.document),y.setMetrics(a,s,u,c,p),this.outputJax.options.mtextInheritFont&&(y.outputData.mtextFamily=f),this.outputJax.options.merrorInheritFont&&(y.outputData.merrorFamily=f),y.convert(this,i),y.typesetRoot||y.root},t.prototype.findMath=function(t){return void 0===t&&(t=null),this.processed.set("findMath"),this},t.prototype.compile=function(){var t,e,r,n;if(!this.processed.isSet("compile")){var o=[];try{for(var s=i(this.math),a=s.next();!a.done;a=s.next()){var l=a.value;this.compileMath(l),void 0!==l.inputData.recompile&&o.push(l)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var u=i(o),c=u.next();!c.done;c=u.next()){var p=(l=c.value).inputData.recompile;l.state(p.state),l.inputData.recompile=p,this.compileMath(l)}}catch(t){r={error:t}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}this.processed.set("compile")}return this},t.prototype.compileMath=function(t){try{t.compile(this)}catch(e){if(e.retry||e.restart)throw e;this.options.compileError(this,t,e),t.inputData.error=e}},t.prototype.compileError=function(t,e){t.root=this.mmlFactory.create("math",null,[this.mmlFactory.create("merror",{"data-mjx-error":e.message,title:e.message},[this.mmlFactory.create("mtext",null,[this.mmlFactory.create("text").setText("Math input error")])])]),t.display&&t.root.attributes.set("display","block"),t.inputData.error=e.message},t.prototype.typeset=function(){var t,e;if(!this.processed.isSet("typeset")){try{for(var r=i(this.math),n=r.next();!n.done;n=r.next()){var o=n.value;try{o.typeset(this)}catch(t){if(t.retry||t.restart)throw t;this.options.typesetError(this,o,t),o.outputData.error=t}}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.processed.set("typeset")}return this},t.prototype.typesetError=function(t,e){t.typesetRoot=this.adaptor.node("mjx-container",{class:"MathJax mjx-output-error",jax:this.outputJax.name},[this.adaptor.node("span",{"data-mjx-error":e.message,title:e.message,style:{color:"red","background-color":"yellow","line-height":"normal"}},[this.adaptor.text("Math output error")])]),t.display&&this.adaptor.setAttributes(t.typesetRoot,{style:{display:"block",margin:"1em 0","text-align":"center"}}),t.outputData.error=e.message},t.prototype.getMetrics=function(){return this.processed.isSet("getMetrics")||(this.outputJax.getMetrics(this),this.processed.set("getMetrics")),this},t.prototype.updateDocument=function(){var t,e;if(!this.processed.isSet("updateDocument")){try{for(var r=i(this.math.reversed()),n=r.next();!n.done;n=r.next())n.value.updateDocument(this)}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.processed.set("updateDocument")}return this},t.prototype.removeFromDocument=function(t){return void 0===t&&(t=!1),this},t.prototype.state=function(t,e){var r,n;void 0===e&&(e=!1);try{for(var o=i(this.math),s=o.next();!s.done;s=o.next())s.value.state(t,e)}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return t<h.STATE.INSERTED&&this.processed.clear("updateDocument"),t<h.STATE.TYPESET&&(this.processed.clear("typeset"),this.processed.clear("getMetrics")),t<h.STATE.COMPILED&&this.processed.clear("compile"),this},t.prototype.reset=function(t){var r;return void 0===t&&(t={processed:!0}),(t=(0,l.userOptions)(Object.assign({},e.resetOptions),t)).all&&Object.assign(t,e.resetAllOptions),t.processed&&this.processed.reset(),t.inputJax&&this.inputJax.forEach((function(e){return e.reset.apply(e,a([],s(t.inputJax),!1))})),t.outputJax&&(r=this.outputJax).reset.apply(r,a([],s(t.outputJax),!1)),this},t.prototype.clear=function(){return this.reset(),this.math.clear(),this},t.prototype.concat=function(t){return this.math.merge(t),this},t.prototype.clearMathItemsWithin=function(t){var e,r=this.getMathItemsWithin(t);return(e=this.math).remove.apply(e,a([],s(r),!1)),r},t.prototype.getMathItemsWithin=function(t){var e,r,n,o;Array.isArray(t)||(t=[t]);var s=this.adaptor,a=[],l=s.getElements(t,this.document);try{t:for(var u=i(this.math),c=u.next();!c.done;c=u.next()){var p=c.value;try{for(var h=(n=void 0,i(l)),f=h.next();!f.done;f=h.next()){var d=f.value;if(p.start.node&&s.contains(d,p.start.node)){a.push(p);continue t}}}catch(t){n={error:t}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}return a},t.KIND="MathDocument",t.OPTIONS={OutputJax:null,InputJax:null,MmlFactory:null,MathList:x,MathItem:b,compileError:function(t,e,r){t.compileError(e,r)},typesetError:function(t,e,r){t.typesetError(e,r)},renderActions:(0,l.expandable)({find:[h.STATE.FINDMATH,"findMath","",!1],compile:[h.STATE.COMPILED],metrics:[h.STATE.METRICS,"getMetrics","",!1],typeset:[h.STATE.TYPESET],update:[h.STATE.INSERTED,"updateDocument",!1]})},t.ProcessBits=(0,d.BitFieldClass)("findMath","compile","getMetrics","typeset","updateDocument"),t}();e.AbstractMathDocument=g},4450:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractMathList=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.isBefore=function(t,e){return t.start.i<e.start.i||t.start.i===e.start.i&&t.start.n<e.start.n},e}(r(45313).LinkedList);e.AbstractMathList=i},25305:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractOutputJax=void 0;var n=r(78440),o=r(38477),i=function(){function t(t){void 0===t&&(t={}),this.adaptor=null;var e=this.constructor;this.options=(0,n.userOptions)((0,n.defaultOptions)({},e.OPTIONS),t),this.postFilters=new o.FunctionList}return Object.defineProperty(t.prototype,"name",{get:function(){return this.constructor.NAME},enumerable:!1,configurable:!0}),t.prototype.setAdaptor=function(t){this.adaptor=t},t.prototype.initialize=function(){},t.prototype.reset=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getMetrics=function(t){},t.prototype.styleSheet=function(t){return null},t.prototype.pageElements=function(t){return null},t.prototype.executeFilters=function(t,e,r,n){var o={math:e,document:r,data:n};return t.execute(o),o.data},t.NAME="generic",t.OPTIONS={},t}();e.AbstractOutputJax=i},76122:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLDocument=void 0;var l=r(62435),u=r(78440),c=r(30622),p=r(31544),h=r(41571),f=r(13523),d=function(t){function e(e,r,n){var o=this,i=s((0,u.separateOptions)(n,h.HTMLDomStrings.OPTIONS),2),a=i[0],l=i[1];return(o=t.call(this,e,r,a)||this).domStrings=o.options.DomStrings||new h.HTMLDomStrings(l),o.domStrings.adaptor=r,o.styles=[],o}return o(e,t),e.prototype.findPosition=function(t,e,r,n){var o,i,l=this.adaptor;try{for(var u=a(n[t]),c=u.next();!c.done;c=u.next()){var p=c.value,h=s(p,2),f=h[0],d=h[1];if(e<=d&&"#text"===l.kind(f))return{node:f,n:Math.max(e,0),delim:r};e-=d}}catch(t){o={error:t}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}return{node:null,n:0,delim:r}},e.prototype.mathItem=function(t,e,r){var n=t.math,o=this.findPosition(t.n,t.start.n,t.open,r),i=this.findPosition(t.n,t.end.n,t.close,r);return new this.options.MathItem(n,e,t.display,o,i)},e.prototype.findMath=function(t){var e,r,n,o,i,l,c,p,h;if(!this.processed.isSet("findMath")){this.adaptor.document=this.document,t=(0,u.userOptions)({elements:this.options.elements||[this.adaptor.body(this.document)]},t);try{for(var f=a(this.adaptor.getElements(t.elements,this.document)),d=f.next();!d.done;d=f.next()){var y=d.value,v=s([null,null],2),m=v[0],x=v[1];try{for(var b=(n=void 0,a(this.inputJax)),g=b.next();!g.done;g=b.next()){var _=g.value,w=new this.options.MathList;if(_.processStrings){null===m&&(m=(i=s(this.domStrings.find(y),2))[0],x=i[1]);try{for(var S=(l=void 0,a(_.findMath(m))),O=S.next();!O.done;O=S.next()){var T=O.value;w.push(this.mathItem(T,_,x))}}catch(t){l={error:t}}finally{try{O&&!O.done&&(c=S.return)&&c.call(S)}finally{if(l)throw l.error}}}else try{for(var E=(p=void 0,a(_.findMath(y))),M=E.next();!M.done;M=E.next()){T=M.value;var A=new this.options.MathItem(T.math,_,T.display,T.start,T.end);w.push(A)}}catch(t){p={error:t}}finally{try{M&&!M.done&&(h=E.return)&&h.call(E)}finally{if(p)throw p.error}}this.math.merge(w)}}catch(t){n={error:t}}finally{try{g&&!g.done&&(o=b.return)&&o.call(b)}finally{if(n)throw n.error}}}}catch(t){e={error:t}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(e)throw e.error}}this.processed.set("findMath")}return this},e.prototype.updateDocument=function(){return this.processed.isSet("updateDocument")||(this.addPageElements(),this.addStyleSheet(),t.prototype.updateDocument.call(this),this.processed.set("updateDocument")),this},e.prototype.addPageElements=function(){var t=this.adaptor.body(this.document),e=this.documentPageElements();e&&this.adaptor.append(t,e)},e.prototype.addStyleSheet=function(){var t=this.documentStyleSheet(),e=this.adaptor;if(t&&!e.parent(t)){var r=e.head(this.document),n=this.findSheet(r,e.getAttribute(t,"id"));n?e.replace(t,n):e.append(r,t)}},e.prototype.findSheet=function(t,e){var r,n;if(e)try{for(var o=a(this.adaptor.tags(t,"style")),i=o.next();!i.done;i=o.next()){var s=i.value;if(this.adaptor.getAttribute(s,"id")===e)return s}}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return null},e.prototype.removeFromDocument=function(t){var e,r;if(void 0===t&&(t=!1),this.processed.isSet("updateDocument"))try{for(var n=a(this.math),o=n.next();!o.done;o=n.next()){var i=o.value;i.state()>=f.STATE.INSERTED&&i.state(f.STATE.TYPESET,t)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}return this.processed.clear("updateDocument"),this},e.prototype.documentStyleSheet=function(){return this.outputJax.styleSheet(this)},e.prototype.documentPageElements=function(){return this.outputJax.pageElements(this)},e.prototype.addStyles=function(t){this.styles.push(t)},e.prototype.getStyles=function(){return this.styles},e.KIND="HTML",e.OPTIONS=i(i({},l.AbstractMathDocument.OPTIONS),{renderActions:(0,u.expandable)(i(i({},l.AbstractMathDocument.OPTIONS.renderActions),{styles:[f.STATE.INSERTED+1,"","updateStyleSheet",!1]})),MathList:p.HTMLMathList,MathItem:c.HTMLMathItem,DomStrings:null}),e}(l.AbstractMathDocument);e.HTMLDocument=d},41571:function(t,e,r){var n=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s};Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLDomStrings=void 0;var o=r(78440),i=function(){function t(t){void 0===t&&(t=null);var e=this.constructor;this.options=(0,o.userOptions)((0,o.defaultOptions)({},e.OPTIONS),t),this.init(),this.getPatterns()}return t.prototype.init=function(){this.strings=[],this.string="",this.snodes=[],this.nodes=[],this.stack=[]},t.prototype.getPatterns=function(){var t=(0,o.makeArray)(this.options.skipHtmlTags),e=(0,o.makeArray)(this.options.ignoreHtmlClass),r=(0,o.makeArray)(this.options.processHtmlClass);this.skipHtmlTags=new RegExp("^(?:"+t.join("|")+")$","i"),this.ignoreHtmlClass=new RegExp("(?:^| )(?:"+e.join("|")+")(?: |$)"),this.processHtmlClass=new RegExp("(?:^| )(?:"+r+")(?: |$)")},t.prototype.pushString=function(){this.string.match(/\S/)&&(this.strings.push(this.string),this.nodes.push(this.snodes)),this.string="",this.snodes=[]},t.prototype.extendString=function(t,e){this.snodes.push([t,e.length]),this.string+=e},t.prototype.handleText=function(t,e){return e||this.extendString(t,this.adaptor.value(t)),this.adaptor.next(t)},t.prototype.handleTag=function(t,e){if(!e){var r=this.options.includeHtmlTags[this.adaptor.kind(t)];this.extendString(t,r)}return this.adaptor.next(t)},t.prototype.handleContainer=function(t,e){this.pushString();var r=this.adaptor.getAttribute(t,"class")||"",n=this.adaptor.kind(t)||"",o=this.processHtmlClass.exec(r),i=t;return!this.adaptor.firstChild(t)||this.adaptor.getAttribute(t,"data-MJX")||!o&&this.skipHtmlTags.exec(n)?i=this.adaptor.next(t):(this.adaptor.next(t)&&this.stack.push([this.adaptor.next(t),e]),i=this.adaptor.firstChild(t),e=(e||this.ignoreHtmlClass.exec(r))&&!o),[i,e]},t.prototype.handleOther=function(t,e){return this.pushString(),this.adaptor.next(t)},t.prototype.find=function(t){var e,r;this.init();for(var o=this.adaptor.next(t),i=!1,s=this.options.includeHtmlTags;t&&t!==o;){var a=this.adaptor.kind(t);"#text"===a?t=this.handleText(t,i):s.hasOwnProperty(a)?t=this.handleTag(t,i):a?(t=(e=n(this.handleContainer(t,i),2))[0],i=e[1]):t=this.handleOther(t,i),!t&&this.stack.length&&(this.pushString(),t=(r=n(this.stack.pop(),2))[0],i=r[1])}this.pushString();var l=[this.strings,this.nodes];return this.init(),l},t.OPTIONS={skipHtmlTags:["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],includeHtmlTags:{br:"\n",wbr:"","#comment":""},ignoreHtmlClass:"mathjax_ignore",processHtmlClass:"mathjax_process"},t}();e.HTMLDomStrings=i},74421:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLHandler=void 0;var i=r(35687),s=r(76122),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.documentClass=s.HTMLDocument,e}return o(e,t),e.prototype.handlesDocument=function(t){var e=this.adaptor;if("string"==typeof t)try{t=e.parse(t,"text/html")}catch(t){}return t instanceof e.window.Document||t instanceof e.window.HTMLElement||t instanceof e.window.DocumentFragment},e.prototype.create=function(e,r){var n=this.adaptor;if("string"==typeof e)e=n.parse(e,"text/html");else if(e instanceof n.window.HTMLElement||e instanceof n.window.DocumentFragment){var o=e;e=n.parse("","text/html"),n.append(n.body(e),o)}return t.prototype.create.call(this,e,r)},e}(i.AbstractHandler);e.HTMLHandler=a},30622:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLMathItem=void 0;var i=r(13523),s=function(t){function e(e,r,n,o,i){return void 0===n&&(n=!0),void 0===o&&(o={node:null,n:0,delim:""}),void 0===i&&(i={node:null,n:0,delim:""}),t.call(this,e,r,n,o,i)||this}return o(e,t),Object.defineProperty(e.prototype,"adaptor",{get:function(){return this.inputJax.adaptor},enumerable:!1,configurable:!0}),e.prototype.updateDocument=function(t){if(this.state()<i.STATE.INSERTED){if(this.inputJax.processStrings){var e=this.start.node;if(e===this.end.node)this.end.n&&this.end.n<this.adaptor.value(this.end.node).length&&this.adaptor.split(this.end.node,this.end.n),this.start.n&&(e=this.adaptor.split(this.start.node,this.start.n)),this.adaptor.replace(this.typesetRoot,e);else{for(this.start.n&&(e=this.adaptor.split(e,this.start.n));e!==this.end.node;){var r=this.adaptor.next(e);this.adaptor.remove(e),e=r}this.adaptor.insert(this.typesetRoot,e),this.end.n<this.adaptor.value(e).length&&this.adaptor.split(e,this.end.n),this.adaptor.remove(e)}}else this.adaptor.replace(this.typesetRoot,this.start.node);this.start.node=this.end.node=this.typesetRoot,this.start.n=this.end.n=0,this.state(i.STATE.INSERTED)}},e.prototype.updateStyleSheet=function(t){t.addStyleSheet()},e.prototype.removeFromDocument=function(t){if(void 0===t&&(t=!1),this.state()>=i.STATE.TYPESET){var e=this.adaptor,r=this.start.node,n=e.text("");if(t){var o=this.start.delim+this.math+this.end.delim;if(this.inputJax.processStrings)n=e.text(o);else{var s=e.parse(o,"text/html");n=e.firstChild(e.body(s))}}e.parent(r)&&e.replace(n,r),this.start.node=this.end.node=n,this.start.n=this.end.n=0}},e}(i.AbstractMathItem);e.HTMLMathItem=s},31544:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.HTMLMathList=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(r(4450).AbstractMathList);e.HTMLMathList=i},6336:function(t,e){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},s=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.BitFieldClass=e.BitField=void 0;var a=function(){function t(){this.bits=0}return t.allocate=function(){for(var e,r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];try{for(var s=o(n),a=s.next();!a.done;a=s.next()){var l=a.value;if(this.has(l))throw new Error("Bit already allocated for "+l);if(this.next===t.MAXBIT)throw new Error("Maximum number of bits already allocated");this.names.set(l,this.next),this.next<<=1}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(e)throw e.error}}},t.has=function(t){return this.names.has(t)},t.prototype.set=function(t){this.bits|=this.getBit(t)},t.prototype.clear=function(t){this.bits&=~this.getBit(t)},t.prototype.isSet=function(t){return!!(this.bits&this.getBit(t))},t.prototype.reset=function(){this.bits=0},t.prototype.getBit=function(t){var e=this.constructor.names.get(t);if(!e)throw new Error("Unknown bit-field name: "+t);return e},t.MAXBIT=1<<31,t.next=1,t.names=new Map,t}();e.BitField=a,e.BitFieldClass=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(a);return r.allocate.apply(r,s([],i(t),!1)),r}},38477:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},a=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.FunctionList=void 0;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.execute=function(){for(var t,e,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var o=i(this),l=o.next();!l.done;l=o.next()){var u=l.value;if(!1===u.item.apply(u,a([],s(r),!1)))return!1}}catch(e){t={error:e}}finally{try{l&&!l.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return!0},e.prototype.asyncExecute=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=-1,n=this.items;return new Promise((function(e,o){!function i(){for(var l;++r<n.length;){var u=(l=n[r]).item.apply(l,a([],s(t),!1));if(u instanceof Promise)return void u.then(i).catch((function(t){return o(t)}));if(!1===u)return void e(!1)}e(!0)}()}))},e}(r(75483).PrioritizedList);e.FunctionList=l},45313:function(t,e){var r=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},n=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.LinkedList=e.ListItem=e.END=void 0,e.END=Symbol();var s=function(t){void 0===t&&(t=null),this.next=null,this.prev=null,this.data=t};e.ListItem=s;var a=function(){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];this.list=new s(e.END),this.list.next=this.list.prev=this.list,this.push.apply(this,o([],n(t),!1))}return t.prototype.isBefore=function(t,e){return t<e},t.prototype.push=function(){for(var t,e,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var o=i(r),a=o.next();!a.done;a=o.next()){var l=a.value,u=new s(l);u.next=this.list,u.prev=this.list.prev,this.list.prev=u,u.prev.next=u}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return this},t.prototype.pop=function(){var t=this.list.prev;return t.data===e.END?null:(this.list.prev=t.prev,t.prev.next=this.list,t.next=t.prev=null,t.data)},t.prototype.unshift=function(){for(var t,e,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{for(var o=i(r.slice(0).reverse()),a=o.next();!a.done;a=o.next()){var l=a.value,u=new s(l);u.next=this.list.next,u.prev=this.list,this.list.next=u,u.next.prev=u}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return this},t.prototype.shift=function(){var t=this.list.next;return t.data===e.END?null:(this.list.next=t.next,t.next.prev=this.list,t.next=t.prev=null,t.data)},t.prototype.remove=function(){for(var t,r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var s=new Map;try{for(var a=i(n),l=a.next();!l.done;l=a.next()){var u=l.value;s.set(u,!0)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}for(var c=this.list.next;c.data!==e.END;){var p=c.next;s.has(c.data)&&(c.prev.next=c.next,c.next.prev=c.prev,c.next=c.prev=null),c=p}},t.prototype.clear=function(){return this.list.next.prev=this.list.prev.next=null,this.list.next=this.list.prev=this.list,this},t.prototype[Symbol.iterator]=function(){var t;return r(this,(function(r){switch(r.label){case 0:t=this.list.next,r.label=1;case 1:return t.data===e.END?[3,3]:[4,t.data];case 2:return r.sent(),t=t.next,[3,1];case 3:return[2]}}))},t.prototype.reversed=function(){var t;return r(this,(function(r){switch(r.label){case 0:t=this.list.prev,r.label=1;case 1:return t.data===e.END?[3,3]:[4,t.data];case 2:return r.sent(),t=t.prev,[3,1];case 3:return[2]}}))},t.prototype.insert=function(t,r){void 0===r&&(r=null),null===r&&(r=this.isBefore.bind(this));for(var n=new s(t),o=this.list.next;o.data!==e.END&&r(o.data,n.data);)o=o.next;return n.prev=o.prev,n.next=o,o.prev.next=o.prev=n,this},t.prototype.sort=function(e){var r,n;void 0===e&&(e=null),null===e&&(e=this.isBefore.bind(this));var o=[];try{for(var s=i(this),a=s.next();!a.done;a=s.next()){var l=a.value;o.push(new t(l))}}catch(t){r={error:t}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}for(this.list.next=this.list.prev=this.list;o.length>1;){var u=o.shift(),c=o.shift();u.merge(c,e),o.push(u)}return o.length&&(this.list=o[0].list),this},t.prototype.merge=function(t,r){var o,i,s,a,l;void 0===r&&(r=null),null===r&&(r=this.isBefore.bind(this));for(var u=this.list.next,c=t.list.next;u.data!==e.END&&c.data!==e.END;)r(c.data,u.data)?(o=n([u,c],2),c.prev.next=o[0],u.prev.next=o[1],i=n([u.prev,c.prev],2),c.prev=i[0],u.prev=i[1],s=n([t.list,this.list],2),this.list.prev.next=s[0],t.list.prev.next=s[1],a=n([t.list.prev,this.list.prev],2),this.list.prev=a[0],t.list.prev=a[1],u=(l=n([c.next,u],2))[0],c=l[1]):u=u.next;return c.data!==e.END&&(this.list.prev.next=t.list.next,t.list.next.prev=this.list.prev,t.list.prev.next=this.list,this.list.prev=t.list.prev,t.list.next=t.list.prev=t.list),this},t}();e.LinkedList=a},75483:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PrioritizedList=void 0;var r=function(){function t(){this.items=[],this.items=[]}return t.prototype[Symbol.iterator]=function(){var t=0,e=this.items;return{next:function(){return{value:e[t++],done:t>e.length}}}},t.prototype.add=function(e,r){void 0===r&&(r=t.DEFAULTPRIORITY);var n=this.items.length;do{n--}while(n>=0&&r<this.items[n].priority);return this.items.splice(n+1,0,{item:e,priority:r}),e},t.prototype.remove=function(t){var e=this.items.length;do{e--}while(e>=0&&this.items[e].item!==t);e>=0&&this.items.splice(e,1)},t.DEFAULTPRIORITY=5,t}();e.PrioritizedList=r}}]);