(function(e){function r(r){for(var t,c,f=r[0],o=r[1],i=r[2],u=0,b=[];u<f.length;u++)c=f[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&b.push(s[c][0]),s[c]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);l&&l(r);while(b.length)b.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,r=0;r<n.length;r++){for(var a=n[r],t=!0,f=1;f<a.length;f++){var o=a[f];0!==s[o]&&(t=!1)}t&&(n.splice(r--,1),e=c(c.s=a[0]))}return e}var t={},s={app:0},n=[];function c(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=t,c.d=function(e,r,a){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(a,t,function(r){return e[r]}.bind(null,t));return a},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],o=f.push.bind(f);f.push=r,f=f.slice();for(var i=0;i<f.length;i++)r(f[i]);var l=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,r,a){e.exports=a("56d7")},4678:function(e,r,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var r=n(e);return a(r)}function n(e){if(!a.o(t,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=n,e.exports=s,s.id="4678"},"56d7":function(e,r,a){"use strict";a.r(r);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23"),s=(a("b0c0"),{class:"container"}),n={class:"row"},c={class:"col-6"},f=Object(t["d"])("label",{class:"form-label"},"Profile",-1),o=Object(t["d"])("label",{class:"form-label"},"Reference profile",-1),i={class:"col-6"};function l(e,r,a,l,u,b){var j=Object(t["j"])("ParameterEditor"),d=Object(t["j"])("RateGraph");return Object(t["g"])(),Object(t["c"])("div",s,[Object(t["d"])("div",n,[Object(t["d"])("div",c,[f,Object(t["n"])(Object(t["d"])("select",{"onUpdate:modelValue":r[1]||(r[1]=function(e){return u.profile=e}),class:"form-select"},[(Object(t["g"])(!0),Object(t["c"])(t["a"],null,Object(t["i"])(b.profileKeys,(function(e){return Object(t["g"])(),Object(t["c"])("option",{key:e,value:e},Object(t["k"])(u.rateProfiles[e].name),9,["value"])})),128))],512),[[t["l"],u.profile]]),Object(t["d"])(j,{profile:u.profile,modelValue:u.parameters,"onUpdate:modelValue":r[2]||(r[2]=function(e){return u.parameters=e})},null,8,["profile","modelValue"]),o,Object(t["n"])(Object(t["d"])("select",{"onUpdate:modelValue":r[3]||(r[3]=function(e){return u.referenceProfile=e}),class:"form-select"},[(Object(t["g"])(!0),Object(t["c"])(t["a"],null,Object(t["i"])(b.profileKeys,(function(e){return Object(t["g"])(),Object(t["c"])("option",{key:e,value:e},Object(t["k"])(u.rateProfiles[e].name),9,["value"])})),128))],512),[[t["l"],u.referenceProfile]]),Object(t["d"])(j,{profile:u.referenceProfile,modelValue:u.referenceParameters,"onUpdate:modelValue":r[4]||(r[4]=function(e){return u.referenceParameters=e})},null,8,["profile","modelValue"])]),Object(t["d"])("div",i,[Object(t["d"])(d,{chartData:b.rateGraphData},null,8,["chartData"])]),Object(t["d"])("a",{class:"btn btn-primary",onClick:r[5]||(r[5]=function(){return b.tune&&b.tune.apply(b,arguments)})},"Replicate this")])])}var u=a("b85c"),b=(a("b64b"),a("c1d5")),j=a.n(b);function d(e,r,a,s,n,c){return Object(t["g"])(),Object(t["c"])("div",null,[(Object(t["g"])(!0),Object(t["c"])(t["a"],null,Object(t["i"])(c.parameterKeys,(function(e){return Object(t["g"])(),Object(t["c"])("div",{key:e,class:"mb-3"},[Object(t["d"])("label",{for:n.id+a.profile+e},Object(t["k"])(e),9,["for"]),Object(t["n"])(Object(t["d"])("input",{type:"number",id:n.id+a.profile+e,"onUpdate:modelValue":function(r){return n.params[e]=r}},null,8,["id","onUpdate:modelValue"]),[[t["m"],n.params[e]]])])})),128))])}var m=0,p={props:["modelValue","profile"],data:function(){return{rateProfiles:j.a,id:++m,params:{}}},mounted:function(){this.setDefaultParams()},methods:{setDefaultParams:function(){var e=this.rateProfiles[this.profile].parameters;for(var r in this.params={},e)this.params[r]=e[r]}},computed:{parameterKeys:function(){return Object.keys(this.rateProfiles[this.profile].parameters)}},watch:{profile:function(){this.setDefaultParams()},modelValue:{handler:function(){for(var e in this.modelValue)this.params[e]!==this.modelValue[e]&&(this.params[e]=this.modelValue[e])}},params:{deep:!0,handler:function(e){this.$emit("update:modelValue",e)}}}};p.render=d;var h=p,v=a("3c10"),O=Object(t["e"])({name:"RateGraph",props:["chartData"],extends:v["a"],mounted:function(){console.log(this.chartData),this.renderChart(this.chartData,{line:{fill:!1},animation:!1})}}),y=O;function g(e,r){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,t=[],s=0;s<a;++s){var n=s/(a-1),c=e(n,r);t.push(c)}return t}function k(e){return Math.pow(e/15,4)}function P(e,r){for(var a=0,t=0;t<e.length;++t)a+=k(Math.abs(e[t]-r[t]));return a}function z(e,r,a){console.log("Tuning started...");for(var t=12,s=1,n=JSON.parse(JSON.stringify(j.a[e].parameters)),c=g(j.a[r].formula,a,t),f=0,o=P(g(j.a[e].formula,n,t),c),i=0;i<1e6;++i){var l={};for(var u in n)l[u]=n[u]+(Math.random()-Math.random())*s;var b=g(j.a[e].formula,l,t),d=P(b,c);if(d<o)n=l,f=0,o=d;else if(++f,f>=1e3&&(s*=.95,f=0,s<.001))break}return n}function w(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,r=[],a=0;a<e;++a){var t=a/(e-1);r.push(t)}return r}function x(e,r){var a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,s=w(t),n=[],c=Object(u["a"])(s);try{for(c.s();!(a=c.n()).done;){var f=a.value,o=e(f,r);n.push(o)}}catch(i){c.e(i)}finally{c.f()}return n}var M={components:{ParameterEditor:h,RateGraph:y},name:"App",data:function(){return{rateProfiles:j.a,profile:"betaflight",referenceProfile:"actual",parameters:{},referenceParameters:{}}},beforeMount:function(){this.initializeParameters(),this.initializeReferenceParameters()},methods:{tune:function(){this.parameters=z(this.profile,this.referenceProfile,this.referenceParameters)},initializeParameters:function(){this.parameters=JSON.parse(JSON.stringify(j.a[this.profile].parameters))},initializeReferenceParameters:function(){this.referenceParameters=JSON.parse(JSON.stringify(j.a[this.referenceProfile].parameters))}},computed:{profileKeys:function(){return Object.keys(this.rateProfiles)},rateGraphData:function(){return{labels:this.rateGraphLabels,datasets:[{label:j.a[this.profile].name,borderColor:"#ff0000",data:x(j.a[this.profile].formula,this.parameters,21),fill:!1},{label:j.a[this.referenceProfile].name,borderColor:"#00ff00",data:x(j.a[this.referenceProfile].formula,this.referenceParameters,21),fill:!1}]}},rateGraphLabels:function(){return w(21)}},watch:{profile:function(){this.initializeParameters()},referenceProfile:function(){this.initializeReferenceParameters()}}};M.render=l;var V=M;Object(t["b"])(V).mount("#app")},c1d5:function(e,r){function a(e,r,a){return Math.max(Math.min(a,e),r)}var t={betaflight:{name:"Betaflight",parameters:{rc_rate:1.2,super_rate:.2,expo:.1},formula:function(e,r){var t=r.rc_rate,s=r.super_rate,n=r.expo,c=Math.abs(e);t>2&&(t+=14.54*(t-2)),0!=n&&(e=e*Math.pow(Math.abs(e),3)*n+e*(1-n));var f=200*t*e;if(0!=s){var o=1/a(1-c*s,.01,1);f*=o}return f}},actual:{name:"Actual",parameters:{centr:200,max:670,expo:.57},formula:function(e,r){var a=r.centr,t=r.max,s=r.expo,n=e*(Math.pow(e,5)*s+e*(1-s));return a*e+(t-a)*n}},kiss:{name:"Kiss",parameters:{rc_rate:1.55,rate:.69,rc_curve:.23},formula:function(e,r){var a=r.rc_rate,t=r.rate,s=r.rc_curve,n=1-Math.abs(e)*t,c=1e3*e,f=c*c/1e6;return e=a/10*(e*f*s+e*(1-s)),1/n*2e3*e}}};e.exports=t}});
//# sourceMappingURL=app.e112ba3b.js.map