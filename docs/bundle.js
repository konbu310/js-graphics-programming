!function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=2)}([function(t,i,e){t.exports=e.p+"static/media/viper.8a5acc3e.png"},function(t,i,e){},function(t,i,e){"use strict";e.r(i);class s{constructor(t){this.cv=t,this.ctx=this.cv.getContext("2d")}get canvas(){return this.cv}get context(){return this.ctx}rect(t,i,e,s,n){this.ctx.fillStyle=n&&n,this.ctx.fillRect(t,i,e,s)}line(t,i,e,s,n=1,o){this.ctx.fillStyle=o&&o,this.ctx.lineWidth=n,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.closePath(),this.ctx.stroke()}polygon(t,i){if(!(!0!==Array.isArray(t)||t.length<6)){this.ctx.fillStyle=i&&i,this.ctx.beginPath(),this.ctx.moveTo(t[0],t[1]);for(let i=2;i<t.length;i+=2)this.ctx.lineTo(t[i],t[i+1]);this.ctx.closePath(),this.ctx.fill()}}circle(t,i,e,s){this.ctx.fillStyle=s&&s,this.ctx.beginPath(),this.ctx.arc(t,i,e,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()}fan(t,i,e,s,n,o){this.ctx.fillStyle=o&&o,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.arc(t,i,e,s,n),this.ctx.closePath(),this.ctx.fill()}quadraticBezier(t,i,e,s,n,o,h=1,c){this.ctx.fillStyle=c&&c,this.ctx.lineWidth=h,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.quadraticCurveTo(n,o,e,s),this.ctx.closePath(),this.ctx.stroke()}cubicBezier(t,i,e,s,n,o,h,c,r=1,l){this.ctx.fillStyle=l&&l,this.ctx.lineWidth=r,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.bezierCurveTo(n,o,h,c,e,s),this.ctx.closePath(),this.ctx.stroke()}text(t,i,e,s=1,n){this.ctx.strokeStyle=n&&n,this.ctx.fillText(t,i,e,s)}}class n{constructor(t,i){this.x=t,this.y=i}set(t,i){null!==t&&(this.x=t),null!==i&&(this.y=i)}}class o extends class{constructor(t,i,e,s,o,h,c){this.ctx=t,this.position=new n(i,e),this.width=s,this.height=o,this.life=h,this.image=c}draw(){let t=this.width/2,i=this.height/2;this.ctx.drawImage(this.image,this.position.x-t,this.position.y-i,this.width,this.height)}}{constructor(t,i,e,s,n,o){super(t,i,e,s,n,0,o),this.speed=3,this.isComing=!1,this.comingStart=null,this.comingStartPosition=null,this.comingEndPosition=null}setComing(t,i,e,s){this.isComing=!0,this.comingStart=Date.now(),this.position.set(t,i),this.comingStartPosition=new n(t,i),this.comingEndPosition=new n(e,s)}update(){let t=Date.now();if(!0===this.isComing){let i=(t-this.comingStart)/1e3,e=this.comingStartPosition.y-50*i;e<=this.comingEndPosition.y&&(this.isComing=!1,e=this.comingEndPosition.y),this.position.set(this.position.x,e),t%100<50&&(this.ctx.globalAlpha=.5)}else{!0===window.isKeyDown.key_ArrowLeft&&(this.position.x-=this.speed),!0===window.isKeyDown.key_ArrowRight&&(this.position.x+=this.speed),!0===window.isKeyDown.key_ArrowUp&&(this.position.y-=this.speed),!0===window.isKeyDown.key_ArrowDown&&(this.position.y+=this.speed);let t=this.ctx.canvas.width,i=this.ctx.canvas.height,e=Math.min(Math.max(this.position.x,this.width/2),t-this.width/2),s=Math.min(Math.max(this.position.y,this.height/2),i-this.width/2);this.position.set(e,s)}this.draw(),this.ctx.globalAlpha=1}}var h=e(0),c=e.n(h);e(1);window.isKeyDown={};let r=null,l=null,a=null,x=null,d=null,u=null;window.addEventListener("load",async()=>{var t;r=new s(document.body.querySelector("#main_canvas")),l=r.canvas,a=r.context,x=await(t=c.a,new Promise((i,e)=>{const s=new Image;s.onload=()=>i(s),s.onerror=t=>e(t),s.src=t})),w(),y(),d=Date.now(),g()},!1);const w=()=>{l.width=640,l.height=480,u=new o(a,0,0,64,64,x),u.setComing(320,530,320,380)},y=()=>{window.addEventListener("keydown",t=>{window.isKeyDown[`key_${t.key}`]=!0},!1),window.addEventListener("keyup",t=>{window.isKeyDown[`key_${t.key}`]=!1},!1)},g=()=>{a.globalAlpha=1,r.rect(0,0,l.width,l.height,"#eeeeee");Date.now();u.update(),requestAnimationFrame(g)}}]);