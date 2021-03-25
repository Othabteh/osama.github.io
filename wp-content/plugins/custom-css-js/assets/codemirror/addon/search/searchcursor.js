'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(b,l,f){b instanceof String&&(b=String(b));for(var r=b.length,q=0;q<r;q++){var u=b[q];if(l.call(f,u,q,b))return{i:q,v:u}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,l,f){b!=Array.prototype&&b!=Object.prototype&&(b[l]=f.value)};
$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(b,l,f,r){if(l){f=$jscomp.global;b=b.split(".");for(r=0;r<b.length-1;r++){var q=b[r];q in f||(f[q]={});f=f[q]}b=b[b.length-1];r=f[b];l=l(r);l!=r&&null!=l&&$jscomp.defineProperty(f,b,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,f){return $jscomp.findInternal(this,b,f).v}},"es6-impl","es3");
(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){function l(c){if(!c.global){var a=c.flags;c=new RegExp(c.source,(null!=a?a:(c.ignoreCase?"i":"")+(c.global?"g":"")+(c.multiline?"m":""))+"g")}return c}function f(c,a,d){a=l(a);var e=d.line,k=d.ch;for(d=c.lastLine();e<=d;e++,k=0)if(a.lastIndex=k,k=c.getLine(e),k=a.exec(k))return{from:g(e,k.index),to:g(e,
k.index+k[0].length),match:k}}function r(c,a,d){if(!/\\s|\\n|\n|\\W|\\D|\[\^/.test(a.source))return f(c,a,d);a=l(a);for(var e,k=1,b=d.line,n=c.lastLine();b<=n;){for(var h=0;h<k;h++){var p=c.getLine(b++);e=null==e?p:e+"\n"+p}k*=2;a.lastIndex=d.ch;if(h=a.exec(e))return a=e.slice(0,h.index).split("\n"),c=h[0].split("\n"),d=d.line+a.length-1,a=a[a.length-1].length,{from:g(d,a),to:g(d+c.length-1,1==c.length?a+c[0].length:c[c.length-1].length),match:h}}}function q(c,a){for(var d=0,e;;){a.lastIndex=d;d=
a.exec(c);if(!d)return e;e=d;d=e.index+(e[0].length||1);if(d==c.length)return e}}function u(c,a,d){a=l(a);var e=d.line,k=d.ch;for(d=c.firstLine();e>=d;e--,k=-1){var b=c.getLine(e);-1<k&&(b=b.slice(0,k));if(k=q(b,a))return{from:g(e,k.index),to:g(e,k.index+k[0].length),match:k}}}function z(c,a,d){a=l(a);for(var e,k=1,b=d.line,n=c.firstLine();b>=n;){for(var h=0;h<k;h++){var p=c.getLine(b--);e=null==e?p.slice(0,d.ch):p+"\n"+e}k*=2;if(h=q(e,a))return a=e.slice(0,h.index).split("\n"),c=h[0].split("\n"),
b+=a.length,a=a[a.length-1].length,{from:g(b,a),to:g(b+c.length-1,1==c.length?a+c[0].length:c[c.length-1].length),match:h}}}function t(c,a,d,e){if(c.length==a.length)return d;var b=0;for(a=d+Math.max(0,c.length-a.length);;){if(b==a)return b;var g=b+a>>1,n=e(c.slice(0,g)).length;if(n==d)return g;n>d?a=g:b=g+1}}function A(c,a,d,e){if(!a.length)return null;e=e?v:w;a=e(a).split(/\r|\n\r?/);var b=d.line;d=d.ch;var y=c.lastLine()+1-a.length;a:for(;b<=y;b++,d=0){var n=c.getLine(b).slice(d),h=e(n);if(1==
a.length){var p=h.indexOf(a[0]);if(-1==p)continue a;t(n,h,p,e);return{from:g(b,t(n,h,p,e)+d),to:g(b,t(n,h,p+a[0].length,e)+d)}}p=h.length-a[0].length;if(h.slice(p)!=a[0])continue a;for(var m=1;m<a.length-1;m++)if(e(c.getLine(b+m))!=a[m])continue a;var m=c.getLine(b+a.length-1),l=e(m),f=a[a.length-1];if(m.slice(0,f.length)!=f)continue a;return{from:g(b,t(n,h,p,e)+d),to:g(b+a.length-1,t(m,l,f.length,e))}}}function B(c,a,b,e){if(!a.length)return null;e=e?v:w;a=e(a).split(/\r|\n\r?/);var d=b.line,f=b.ch,
n=c.firstLine()-1+a.length;a:for(;d>=n;d--,f=-1){var h=c.getLine(d);-1<f&&(h=h.slice(0,f));f=e(h);if(1==a.length){b=f.lastIndexOf(a[0]);if(-1==b)continue a;return{from:g(d,t(h,f,b,e)),to:g(d,t(h,f,b+a[0].length,e))}}var l=a[a.length-1];if(f.slice(0,l.length)!=l)continue a;var m=1;for(b=d-a.length+1;m<a.length-1;m++)if(e(c.getLine(b+m))!=a[m])continue a;b=c.getLine(d+1-a.length);m=e(b);if(m.slice(m.length-a[0].length)!=a[0])continue a;return{from:g(d+1-a.length,t(b,m,b.length-a[0].length,e)),to:g(d,
t(h,f,l.length,e))}}}function x(c,a,b,e){this.atOccurrence=!1;this.doc=c;b=b?c.clipPos(b):g(0,0);this.pos={from:b,to:b};if("object"==typeof e)var d=e.caseFold;else d=e,e=null;"string"==typeof a?(null==d&&(d=!1),this.matches=function(b,e){return(b?B:A)(c,a,e,d)}):(a=l(a),this.matches=e&&!1===e.multiline?function(b,d){return(b?u:f)(c,a,d)}:function(b,d){return(b?z:r)(c,a,d)})}var g=b.Pos;if(String.prototype.normalize){var v=function(b){return b.normalize("NFD").toLowerCase()};var w=function(b){return b.normalize("NFD")}}else v=
function(b){return b.toLowerCase()},w=function(b){return b};x.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(c){for(var a=this.matches(c,this.doc.clipPos(c?this.pos.from:this.pos.to));a&&0==b.cmpPos(a.from,a.to);)c?a.from.ch?a.from=g(a.from.line,a.from.ch-1):a=a.from.line==this.doc.firstLine()?null:this.matches(c,this.doc.clipPos(g(a.from.line-1))):a.to.ch<this.doc.getLine(a.to.line).length?a.to=g(a.to.line,a.to.ch+1):a=a.to.line==
this.doc.lastLine()?null:this.matches(c,g(a.to.line+1,0));if(a)return this.pos=a,this.atOccurrence=!0,this.pos.match||!0;c=g(c?this.doc.firstLine():this.doc.lastLine()+1,0);this.pos={from:c,to:c};return this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(c,a){this.atOccurrence&&(c=b.splitLines(c),this.doc.replaceRange(c,this.pos.from,this.pos.to,a),this.pos.to=g(this.pos.from.line+c.length-1,c[c.length-
1].length+(1==c.length?this.pos.from.ch:0)))}};b.defineExtension("getSearchCursor",function(b,a,d){return new x(this.doc,b,a,d)});b.defineDocExtension("getSearchCursor",function(b,a,d){return new x(this,b,a,d)});b.defineExtension("selectMatches",function(c,a){var d=[];for(c=this.getSearchCursor(c,this.getCursor("from"),a);c.findNext()&&!(0<b.cmpPos(c.to(),this.getCursor("to")));)d.push({anchor:c.from(),head:c.to()});d.length&&this.setSelections(d,0)})});
