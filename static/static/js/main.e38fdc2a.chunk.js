(this.webpackJsonpradio=this.webpackJsonpradio||[]).push([[0],{39:function(e,n,t){},41:function(e,n,t){},66:function(e,n){},70:function(e,n,t){"use strict";t.r(n);var c=t(3),r=t.n(c),o=t(31),a=t.n(o),i=(t(39),t(33)),s=t(34),u=t(0),f=t.n(u),d=t(4),l=(t(41),t(32)),p=t.n(l),v=t(2);function m(e){return function(n){return e(JSON.parse(n))}}var h=p()("https://549987-cb54970.tmweb.ru/",{transports:["websocket"]});window.wsClient=h;var w=function(){var e=Object(c.useRef)(null),n=function(){var e=Object(d.a)(f.a.mark((function e(){var n,t,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:{channelCount:{exact:2},echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1},video:!1});case 2:n=e.sent,t={},c=function(){var e=Object(d.a)(f.a.mark((function e(c){var r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),window.pc=r,console.log("startConnect",r.connectionState),r.addEventListener("connectionstatechange",(function(e){console.log(r.connectionState),"closed"===r.connectionState&&delete t[c]})),t[c]=r,n.getAudioTracks().forEach((function(e){return r.addTrack(e)})),e.next=8,r.createOffer();case 8:return o=e.sent,e.next=11,r.setLocalDescription(o);case 11:h.emit("connectDesc",{to:c,from:h.id,desc:o.toJSON()});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h.on("connectToRadio",c),r=m(function(){var e=Object(d.a)(f.a.mark((function e(n){var c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.from,r=n.desc,e.next=3,t[c].setRemoteDescription(r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),h.on("connectAns",r),o=m(function(){var e=Object(d.a)(f.a.mark((function e(n){var c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.from,r=n.ices,e.next=3,Promise.all(r.map((function(e){return t[c].addIceCandidate(e)})));case 3:return e.next=5,t[c].addIceCandidate(null);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),h.on("connectToIces",o),h.emit("createRadio");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var n=Object(d.a)(f.a.mark((function n(t){var c,r,o,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),r=m(function(){var e=Object(d.a)(f.a.mark((function e(n){var o,a,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.from,a=n.desc,e.next=3,c.setRemoteDescription(a);case 3:return window.pc=c,e.next=6,c.createAnswer();case 6:return i=e.sent,console.log(i),e.next=11,c.setLocalDescription(i);case 11:return h.emit("connectAns",{to:t,from:h.id,desc:i.toJSON()}),e.next=14,new Promise((function(e){var n=[];c.onicecandidate=function(t){null!==t.candidate?n.push(t.candidate.toJSON()):e(n)}}));case 14:s=e.sent,h.emit("connectToIces",{to:o,from:h.id,ices:s}),h.off("connectDesc",r);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),h.on("connectDesc",r),o=m(function(){var e=Object(d.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.ices,console.log("remoteIces",t),e.next=4,Promise.all(t.map((function(e){return c.addIceCandidate(e)})));case 4:return e.next=6,c.addIceCandidate(null);case 6:h.off("connectFromIces",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),h.on("connectFromIces",o),a=function n(){switch(console.log(c.connectionState),c.connectionState){case"connected":e&&e.current&&(e.current.srcObject=new MediaStream(c.getTransceivers().map((function(e){return e.receiver.track}))));break;case"closed":e&&e.current&&(e.current.srcObject=null),c.removeEventListener("connectionstatechange",n)}},c.addEventListener("connectionstatechange",a),h.emit("connectToRadio",t);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),r=Object(c.useState)([]),o=Object(s.a)(r,2),a=o[0],u=o[1];return Object(c.useEffect)((function(){h.on("activeRadios",m((function(e){console.log("activeRadios",e),u(e)}))),h.on("createRadio",(function(e){u((function(n){return[].concat(Object(i.a)(n),[e])}))})),h.on("deleteRadio",(function(e){u((function(n){return n.filter((function(n){return n!==e}))}))}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("audio",{ref:e,controls:!0}),Object(v.jsx)("div",{children:a.map((function(e){return Object(v.jsx)("button",{onClick:function(){return t(e)},children:e},e)}))}),Object(v.jsx)("button",{onClick:n,children:"create main radio"})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),b()}},[[70,1,2]]]);
//# sourceMappingURL=main.e38fdc2a.chunk.js.map