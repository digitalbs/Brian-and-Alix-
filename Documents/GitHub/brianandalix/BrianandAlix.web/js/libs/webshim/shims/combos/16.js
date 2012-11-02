jQuery.webshims.register("dom-extend",function(a,h,g,j,l){var u=h.modules,o=/\s*,\s*/,q={},p={},m={},v={},k={},w=a.fn.val,y=function(c,b,d,i,z){return z?w.call(a(c)):w.call(a(c),d)};a.fn.val=function(c){var b=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!b||1!==b.nodeType?w.call(this):a.prop(b,"value",c,"val",!0);if(a.isArray(c))return w.apply(this,arguments);var d=a.isFunction(c);return this.each(function(i){b=this;1===b.nodeType&&(d?(i=c.call(b,i,a.prop(b,"value",l,"val",
!0)),null==i&&(i=""),a.prop(b,"value",i,"val")):a.prop(b,"value",c,"val"))})};var s="_webshimsLib"+Math.round(1E3*Math.random()),x=function(c,b,d){c=c.jquery?c[0]:c;if(!c)return d||{};var i=a.data(c,s);d!==l&&(i||(i=a.data(c,s,{})),b&&(i[b]=d));return b?i&&i[b]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){a.fn[c.name]=function(){return this.map(function(){var a=x(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){q[c]=a[c];a[c]=function(b,d,i,z,e){var r="val"==z,t=!r?q[c]:y;if(!b||!p[d]||1!==b.nodeType||!r&&z&&"attr"==c&&a.attrFn[d])return t(b,d,i,z,e);var A=(b.nodeName||"").toLowerCase(),f=m[A],C="attr"==c&&(!1===i||null===i)?"removeAttr":c,h,w,g;f||(f=m["*"]);f&&(f=f[d]);f&&(h=f[C]);if(h){if("value"==d)w=h.isVal,h.isVal=r;if("removeAttr"===C)return h.value.call(b);if(i===l)return h.get?h.get.call(b):h.value;h.set&&
("attr"==c&&!0===i&&(i=d),g=h.set.call(b,i));if("value"==d)h.isVal=w}else g=t(b,d,i,z,e);if((i!==l||"removeAttr"===C)&&k[A]&&k[A][d]){var j;j="removeAttr"==C?!1:"prop"==C?!!i:!0;k[A][d].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(b,i,j,r?"val":C,c)})}return g};v[c]=function(b,d,i){m[b]||(m[b]={});m[b][d]||(m[b][d]={});var e=m[b][d][c],f=function(a,b,A){return b&&b[a]?b[a]:A&&A[a]?A[a]:"prop"==c&&"value"==d?function(a){return i.isVal?y(this,d,a,!1,0===arguments.length):
q[c](this,d,a)}:"prop"==c&&"value"==a&&i.value.apply?function(a){var b=q[c](this,d);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return q[c](this,d,a)}};m[b][d][c]=i;if(i.value===l){if(!i.set)i.set=i.writeable?f("set",i,e):h.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:a.noop;if(!i.get)i.get=f("get",i,e)}["value","get","set"].forEach(function(a){i[a]&&(i["_sup"+a]=f(a,e))})}});var n=!a.browser.msie||8<parseInt(a.browser.version,10),e=function(){var a=h.getPrototypeOf(j.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,i,e){var k=j.createElement(d),r=h.getPrototypeOf(k);if(n&&r&&a!==r&&(!k[i]||!b.call(k,i))){var t=k[i];e._supvalue=function(){return t&&t.apply?t.apply(this,arguments):t};r[i]=e.value}else e._supvalue=function(){var a=x(this,"propValue");return a&&a[i]&&a[i].apply?a[i].apply(this,arguments):a&&a[i]},f.extendValue(d,i,e.value);e.value._supvalue=e._supvalue}}(),f=function(){var c={};h.addReady(function(b,d){var r={},i=function(c){r[c]||(r[c]=a(b.getElementsByTagName(c)),
d[0]&&a.nodeName(d[0],c)&&(r[c]=r[c].add(d)))};a.each(c,function(a,c){i(a);!c||!c.forEach?h.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){r[a].each(c)})});r=null});var b,d=a([]),i=function(d,i){c[d]?c[d].push(i):c[d]=[i];a.isDOMReady&&(b||a(j.getElementsByTagName(d))).each(i)};return{createTmpCache:function(c){a.isDOMReady&&(b=b||a(j.getElementsByTagName(c)));return b||d},flushTmpCache:function(){b=null},content:function(c,b){i(c,function(){var c=a.attr(this,b);null!=c&&a.attr(this,
b,c)})},createElement:function(a,c){i(a,c)},extendValue:function(c,b,d){i(c,function(){a(this).each(function(){x(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),B=function(a,b){if(a.defaultValue===l)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(h,{getID:function(){var c=(new Date).getTime();return function(b){var b=a(b),d=b.attr("id");d||(c++,d="ID-"+c,b.attr("id",d));
return d}}(),extendUNDEFProp:function(c,b){a.each(b,function(a,b){a in c||(c[a]=b)})},createPropDefault:B,data:x,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(b,d,i){if((b=(a[c](b,"events")||{})[d])&&1<b.length)d=b.pop(),i||(i="bind"),"bind"==i&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(){var c,b,d,i,e={init:!1,start:function(){if(!this.init&&j.body)this.init=!0,this.height=a(j).height(),this.width=a(j).width(),setInterval(function(){var c=
a(j).height(),b=a(j).width();if(c!=e.height||b!=e.width)e.height=c,e.width=b,i({type:"docresize"})},600)}};i=function(i){clearTimeout(c);c=setTimeout(function(){if("resize"==i.type){var c=a(g).width(),t=a(g).width();if(t==b&&c==d)return;b=t;d=c;if(j.body)e.height=a(j).height(),e.width=a(j).width()}a.event.trigger("updateshadowdom")},40)};a(g).bind("resize",i);a.event.customEvent.updateshadowdom=!0;return function(c,b,d){d=d||{};c.jquery&&(c=c[0]);b.jquery&&(b=b[0]);var i=a.data(c,s)||a.data(c,s,{}),
f=a.data(b,s)||a.data(b,s,{}),k={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];k=a.data(d.shadowFocusElement,s)||a.data(d.shadowFocusElement,s,k)}}else d.shadowFocusElement=b;i.hasShadow=b;k.nativeElement=f.nativeElement=c;k.shadowData=f.shadowData=i.shadowData={nativeElement:c,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){x(this,"shadowData",f.shadowData)});
if(d.data)k.shadowData.data=f.shadowData.data=i.shadowData.data=d.data;d=null;h.ready("DOM",function(){e.start()})}}(),propTypes:{standard:function(a){B(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){B(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var c=j.createElement("a");c.style.display=
"none";return function(b,d){B(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var b=this.getAttribute(d),e;if(null==b)return"";c.setAttribute("href",b+"");if(!a.support.hrefNormalized){try{a(c).insertAfter(this),e=c.getAttribute("href",4)}catch(f){e=c.getAttribute("href",4)}a(c).detach()}return e||c.href}}}}(),enumarated:function(a){B(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();if(!b||-1==
a.limitedTo.indexOf(b))b=a.defaultValue;return b}}}},reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(o));b.forEach(function(b){h.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,b,d){p[b]=!0;if(d.reflect)h.propTypes[d.propType||"standard"](d,b);["prop","attr","removeAttr"].forEach(function(i){var f=d[i];f&&(f="prop"===i?a.extend({writeable:!0},f):a.extend({},f,{writeable:!0}),v[i](c,
b,f),"*"!=c&&h.cfg.extendNative&&"prop"==i&&f.value&&a.isFunction(f.value)&&e(c,b,f),d[i]=f)});d.initAttr&&f.content(c,b);return d},defineNodeNameProperties:function(a,b,d,i){for(var e in b)!i&&b[e].initAttr&&f.createTmpCache(a),d&&!b[e][d]&&(b[e][d]={},["value","set","get"].forEach(function(a){a in b[e]&&(b[e][d][a]=b[e][a],delete b[e][a])})),b[e]=h.defineNodeNameProperty(a,e,b[e]);i||f.flushTmpCache();return b},createElement:function(c,b,d){var e;a.isFunction(b)&&(b={after:b});f.createTmpCache(c);
b.before&&f.createElement(c,b.before);d&&(e=h.defineNodeNameProperties(c,d,!1,!0));b.after&&f.createElement(c,b.after);f.flushTmpCache();return e},onNodeNamesPropertyModify:function(c,b,d,e){"string"==typeof c&&(c=c.split(o));a.isFunction(d)&&(d={set:d});c.forEach(function(a){k[a]||(k[a]={});"string"==typeof b&&(b=b.split(o));d.initAttr&&f.createTmpCache(a);b.forEach(function(b){k[a][b]||(k[a][b]=[],p[b]=!0);if(d.set){if(e)d.set.only=e;k[a][b].push(d.set)}d.initAttr&&f.content(a,b)});f.flushTmpCache()})},
defineNodeNamesBooleanProperty:function(c,b,d){d||(d={});if(a.isFunction(d))d.set=d;h.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?l:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===l)return a=a.attributes[b]||{},d=a.specified?a.value:null,null==d?l:d;
"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var c=[],b={},d,e,f=/:\/\/|^\.*\//,k=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,f.test(d)||(d=h.cfg.basePath+d),h.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,t(b,!0)):a(function(){b.langObj[c]&&t(b,!0);b.loading=!1})}),!0):!1},r=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},t=function(a,b){if(a.activeLang!=d&&
a.activeLang!==e){var c=u[a.module].options;if(a.langObj[d]||e&&a.langObj[e])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[e],d),r(a.module);else if(!b&&!k(a,d,c)&&!k(a,e,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),r(a.module)}};return function(f){if("string"==typeof f&&f!==d)d=f,e=d.split("-")[0],d==e&&(e=!1),a.each(c,function(a,b){t(b)});else if("object"==typeof f)if(f.register)b[f.register]||(b[f.register]=[]),b[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang=
"";c.push(f);t(f)}return d}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){h[a]=function(a,c,e,f){"string"==typeof a&&(a=a.split(o));var r={};a.forEach(function(a){r[a]=h[b](a,c,e,f)});return r}});h.isReady("webshimLocalization",!0)});
(function(a,h){var g=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<g)&&(!a.browser.msie||12>g&&7<g)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},l=function(a,h){a.getAttribute("role")||a.setAttribute("role",h)};a.webshims.addReady(function(g,o){a.each(j,function(h,k){for(var w=a(h,g).add(o.filter(h)),j=0,s=w.length;j<s;j++)l(w[j],k)});if(g===h){var q=h.getElementsByTagName("header")[0],p=h.getElementsByTagName("footer"),m=p.length;
q&&!a(q).closest("section, article")[0]&&l(q,"banner");m&&(q=p[m-1],a(q).closest("section, article")[0]||l(q,"contentinfo"))}})}})(jQuery,document);
(function(a,h,g){var j=h.audio&&h.video,l=!1,u=g.cfg.mediaelement,o=g.bugs,q=function(){g.ready("mediaelement-swf",function(){if(!g.mediaelement.createSWF)g.modules["mediaelement-swf"].test=a.noop,g.reTest(["mediaelement-swf"],j)})},p;if(j){var m=document.createElement("video");h.videoBuffered="buffered"in m;l="loop"in m;g.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));h.videoBuffered||(g.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:h.videoBuffered,d:["dom-support"]}),g.reTest("mediaelement-native-fix"))}if(j&&!u.preferFlash){var v=function(k){var h=k.target.parentNode;!u.preferFlash&&(a(k.target).is("audio, video")||h&&a("source:last",h)[0]==k.target)&&g.ready("DOM mediaelement",function(){p&&q();g.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){p&&!u.preferFlash&&g.mediaelement.createSWF&&!a(k.target).closest("audio, video").is(".nonnative-api-active")?(u.preferFlash=!0,document.removeEventListener("error",
v,!0),a("audio, video").mediaLoad(),g.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+k.target.src)):p||document.removeEventListener("error",v,!0)},20)})})};document.addEventListener("error",v,!0);a("audio, video").each(function(){this.error&&v({target:this})})}o.track=!1;h.track&&function(){if(!o.track)o.track="number"!=typeof a("<track />")[0].readyState;if(!o.track)try{new TextTrackCue(2,3,"")}catch(k){o.track=!0}var h=g.cfg.track,j=function(k){a(k.target).filter("track").each(l)},
l=function(){if(o.track||!h.override&&3==a.prop(this,"readyState"))h.override=!0,g.reTest("track"),document.removeEventListener("error",j,!0),this&&a.nodeName(this,"track")?g.error("track support was overwritten. Please check your vtt including your vtt mime-type"):g.info("track support was overwritten. due to bad browser support")},m=function(){document.addEventListener("error",j,!0);o.track?l():a("track").each(l)};h.override||(g.isReady("track")?m():a(m))}();g.register("mediaelement-core",function(a,
g,m,s,x){p=swfobject.hasFlashPlayerVersion("9.0.115");var n=g.mediaelement,e=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=n.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},f=!p&&"postMessage"in m&&j,B=
function(){var b;return function(){!b&&f&&(b=!0,g.loader.loadScript("https://www.youtube.com/player_api"),a(function(){g.polyfill("mediaelement-yt")}))}}(),c=function(){p?q():B()};g.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]});n.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};n.mimeTypes.source=a.extend({},n.mimeTypes.audio,n.mimeTypes.video);n.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||
-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(n.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=a,!1});return d};n.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=s.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});
else{var c=[],d=b[0].nodeName.toLowerCase(),f=e(b,d);f.src?c.push(f):a("source",b).each(function(){f=e(this,d);f.src&&c.push(f)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==x&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));n.srces(this,b);a(this).mediaLoad()})};n.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
n.canThirdPlaySrces=function(b,c){var d="";if(p||f)b=a(b),c=c||n.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&(p&&-1!=n.swfMimeTypes.indexOf(b.container)||f&&"video/youtube"==b.container))return d=b,!1});return d};var b={};n.canNativePlaySrces=function(c,d){var e="";if(j){var c=a(c),f=(c[0].nodeName||"").toLowerCase();if(!b[f])return e;d=d||n.srces(c);a.each(d,function(a,d){if(d.type&&b[f].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};n.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);g.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var d=function(){var a;return function(b,e,i){g.ready(p?"mediaelement-swf":"mediaelement-yt",function(){n.createSWF?n.createSWF(b,e,i):a||(a=!0,c(),d(b,e,i))});!a&&f&&!n.createSWF&&B()}}(),i=function(a,b,c,e,f){c||!1!==c&&b&&"third"==b.isActive?(c=n.canThirdPlaySrces(a,e))?d(a,c,b):f?n.setError(a,!1):i(a,b,!1,e,!0):(c=n.canNativePlaySrces(a,e))?b&&"third"==
b.isActive&&n.setActive(a,"html5",b):f?(n.setError(a,!1),b&&"third"==b.isActive&&n.setActive(a,"html5",b)):i(a,b,!0,e,!0)},z=/^(?:embed|object|datalist)$/i,D=function(b,c){var d=g.data(b,"mediaelementBase")||g.data(b,"mediaelementBase",{}),e=n.srces(b),f=b.parentNode;clearTimeout(d.loadTimer);a.data(b,"mediaerror",!1);if(e.length&&f&&!(1!=f.nodeType||z.test(f.nodeName||"")))c=c||g.data(b,"mediaelement"),i(b,c,u.preferFlash||x,e)};a(s).bind("ended",function(b){var c=g.data(b.target,"mediaelement");
(!l||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});l||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=g.defineNodeNameProperty(c,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");D(this,a);j&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});b[c]=g.defineNodeNameProperty(c,
"canPlayType",{prop:{value:function(d){var e="";j&&b[c].prop._supvalue&&(e=b[c].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&p&&(d=a.trim((d||"").split(";")[0]),-1!=n.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){D(a);a=null},9)}});m=function(){g.addReady(function(b,c){a("video, audio",
b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<g.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():D(this);if(j){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,f=b.length;e<f;e++)c+=b.end(e);return c}},f=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(c=e());clearTimeout(b);b=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};h.track&&!o.track&&g.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});j?(g.isReady("mediaelement-core",!0),m(),g.ready("WINDOWLOAD mediaelement",c)):g.ready("mediaelement-swf",m);a(function(){g.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var h=window.Modernizr,g=a.webshims,j=g.bugs,l=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),u=function(){if(l[0].querySelector)try{j.findRequired=!l[0].querySelector("select:required")}catch(a){j.findRequired=!1}};j.findRequired=!1;j.validationMessage=!1;j.valueAsNumberSet=!1;g.capturingEventPrevented=function(g){if(!g._isPolyfilled){var h=g.isDefaultPrevented,
j=g.preventDefault;g.preventDefault=function(){clearTimeout(a.data(g.target,g.type+"DefaultPrevented"));a.data(g.target,g.type+"DefaultPrevented",setTimeout(function(){a.removeData(g.target,g.type+"DefaultPrevented")},30));return j.apply(this,arguments)};g.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!a.data(g.target,g.type+"DefaultPrevented"))};g._isPolyfilled=!0}};if(!h.formvalidation||j.bustedValidity)u();else if(g.capturingEvents(["input"]),g.capturingEvents(["invalid"],!0),
h.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var o=a("input",l).eq(0),q,p=function(a){g.loader.loadList(["dom-extend"]);g.ready("dom-extend",a)},m=function(j){var m=["form-extend","form-message","form-native-fix"];j&&(j.preventDefault(),j.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){l&&(l.remove(),l=o=null)},9);if(!h.bugfreeformvalidation)g.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),g.modules["form-extend"].test=a.noop;g.isReady("form-number-date-api")&&
m.push("form-number-date-api");g.reTest(m);if(o)try{o.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&p(function(){g.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(g){!g&&this&&a.prop(this,"value",a.prop(this,"value"))}});g.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(g){if(!g&&this)g=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(g)}})})}catch(y){}(a.browser.opera||window.testGoodWithFix)&&
p(function(){var h=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(j){var k=g.defineNodeNameProperty(j,"checkValidity",{prop:{value:function(){g.fromSubmit||a(this).bind("invalid.checkvalidity",h);g.fromCheckValidity=!0;var e=k.prop._supvalue.apply(this,arguments);g.fromSubmit||a(this).unbind("invalid.checkvalidity",h);g.fromCheckValidity=!1;return e}}})})})};l.appendTo("head");if(window.opera||window.testGoodWithFix){u();j.validationMessage=!o.prop("validationMessage");
if((h.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(v){}j.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}l.bind("submit",function(a){h.bugfreeformvalidation=!1;m(a)});q=setTimeout(function(){l&&l.triggerHandler("submit")},9);a("input, select",l).bind("invalid",m).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&h.bugfreeformvalidation&&!g.bugs.bustedValidity&&function(){var g=/^(?:textarea|input)$/i,
h=!1;document.addEventListener("contextmenu",function(a){g.test(a.target.nodeName||"")&&(h=a.target.form)&&setTimeout(function(){h=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&h&&h==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,h,g,j,l,u){var o={radio:1},q={checkbox:1,radio:1},p=a([]),m=h.bugs,v=function(e){var e=a(e),f,g;f=p;if(o[e[0].type])g=e.prop("form"),f=(f=e[0].name)?g?a(g[f]):a(j.getElementsByName(f)).filter(function(){return!a.prop(this,"form")}):e,f=f.filter('[type="radio"]');return f},k=h.getContentValidationMessage=function(e,f,g){var c=a(e).data("errormessage")||e.getAttribute("x-moz-errormessage")||"";g&&c[g]&&(c=c[g]);"object"==typeof c&&(f=f||a.prop(e,"validity")||
{valid:1},f.valid||a.each(f,function(a,d){if(d&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},w={number:1,range:1,date:1};a.extend(a.expr[":"],{"valid-element":function(e){return!(!a.prop(e,"willValidate")||!(a.prop(e,"validity")||{valid:1}).valid)},"invalid-element":function(e){return!(!a.prop(e,"willValidate")||(a.prop(e,"validity")||{valid:1}).valid)},"required-element":function(e){return!(!a.prop(e,"willValidate")||!a.prop(e,"required"))},"optional-element":function(e){return!!(a.prop(e,
"willValidate")&&!1===a.prop(e,"required"))},"in-range":function(e){if(!w[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||e.rangeOverflow||e.rangeUnderflow)},"out-of-range":function(e){if(!w[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||!e.rangeOverflow&&!e.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(e){a.expr[":"][e]=a.expr.filters[e+"-element"]});a.expr[":"].focus=function(a){try{var f=
a.ownerDocument;return a===f.activeElement&&(!f.hasFocus||f.hasFocus())}catch(g){}return!1};var y=a.event.customEvent||{};(m.bustedValidity||m.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var e=a.find,f=a.find.matchesSelector,g=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,c=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,d=function(d){var f=arguments,f=a.call(f,1,f.length);f.unshift(d.replace(g,c));return e.apply(this,
f)},f;for(f in e)e.hasOwnProperty(f)&&(d[f]=e[f]);return d}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",j.documentElement))a.find.matchesSelector=function(a,d){d=d.replace(g,c);return f.call(this,a,d)}}();var s=a.prop,x={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(e,f,g){var c=s.apply(this,arguments);if(e&&"form"in e&&x[f]&&g!==l&&a(e).hasClass("form-ui-invalid")&&(a.prop(e,"validity")||{valid:1}).valid)a(e).getShadowElement().removeClass("form-ui-invalid"),
"checked"==f&&g&&v(e).not(e).removeClass("form-ui-invalid").removeAttr("aria-invalid");return c};var n=function(e,f){var g;a.each(e,function(c,b){if(b)return g="customError"==c?a.prop(f,"validationMessage"):c,!1});return g};a(j).bind(u.validityUIEvents||"focusout change refreshvalidityui",function(e){var f,g;if(e.target&&(f=a(e.target).getNativeElement()[0],!("submit"==f.type||!a.prop(f,"willValidate")||"focusout"==e.type&&"radio"==e.type))){g=a.data(f,"webshimsswitchvalidityclass");var c=function(){var b=
a.prop(f,"validity"),c=a(f).getShadowElement(),g,h,j,k;a(f).trigger("refreshCustomValidityRules");b.valid?c.hasClass("form-ui-valid")||(g="form-ui-valid",h="form-ui-invalid",k="changedvaliditystate",j="changedvalid",q[f.type]&&f.checked&&v(f).not(f).removeClass(h).addClass(g).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(b=n(b,f),a.data(f,"webshimsinvalidcause")!=b&&(a.data(f,"webshimsinvalidcause",b),k="changedvaliditystate"),c.hasClass("form-ui-invalid")||(g="form-ui-invalid",
h="form-ui-valid",q[f.type]&&!f.checked&&v(f).not(f).removeClass(h).addClass(g),j="changedinvalid"));g&&(c.addClass(g).removeClass(h),setTimeout(function(){a(f).trigger(j)},0));k&&setTimeout(function(){a(f).trigger(k)},0);a.removeData(e.target,"webshimsswitchvalidityclass")};g&&clearTimeout(g);"refreshvalidityui"==e.type?c():a.data(e.target,"webshimsswitchvalidityclass",setTimeout(c,9))}});y.changedvaliditystate=!0;y.refreshCustomValidityRules=!0;y.changedvalid=!0;y.changedinvalid=!0;y.refreshvalidityui=
!0;h.triggerInlineForm=function(e,f){a(e).trigger(f)};h.modules["form-core"].getGroupElements=v;m=function(){h.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):a(j.documentElement)};m();h.ready("DOM",m);h.getRelOffset=function(e,f){var e=a(e),g=a(f).offset(),c;a.swap(a(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){c=e.offset()});g.top-=c.top;g.left-=c.left;return g};h.validityAlert=function(){var e=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":
"label",f,l=!1,c=!1,b,d={hideDelay:5E3,showFor:function(e,f,h,j){d._create();var e=a(e),k=a(e).getShadowElement(),m=d.getOffsetFromBody(k);d.clear();j?this.hide():(this.getMessage(e,f),this.position(k,m),this.show(),this.hideDelay&&(l=setTimeout(b,this.hideDelay)),a(g).bind("resize.validityalert",function(){clearTimeout(c);c=setTimeout(function(){d.position(k)},9)}));h||this.setFocus(k,m)},getOffsetFromBody:function(a){return h.getRelOffset(f,a)},setFocus:function(c,d){var g=a(c).getShadowFocusElement(),
k=h.scrollRoot.scrollTop(),l=(d||g.offset()).top-30,m;h.getID&&"label"==e&&f.attr("for",h.getID(g));k>l&&(h.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-l)),80)}),m=!0);try{g[0].focus()}catch(n){}m&&(h.scrollRoot.scrollTop(k),setTimeout(function(){h.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(j).bind("focusout.validityalert",b)},10)},getMessage:function(b,c){c||(c=k(b[0])||b.prop("validationMessage"));c?a("span.va-box",f).text(c):this.hide()},position:function(b,
c){c=c?a.extend({},c):d.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(l);a(j).unbind(".validityalert");a(g).unbind(".validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=d.errorBubble=a("<"+e+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
e+">").css({position:"absolute",display:"none"}),h.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};b=a.proxy(d,"hide");return d}();(function(){var e,f=[],g;a(j).bind("invalid",function(c){if(!c.wrongWebkitInvalid){var b=a(c.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(c.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=a.Event("firstinvalid"),e.isInvalidUIPrevented=c.isDefaultPrevented,d=a.Event("firstinvalidsystem"),a(j).triggerHandler(d,{element:c.target,form:c.target.form,isInvalidUIPrevented:c.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&c.preventDefault();f.push(c.target);c.extraData="fix";clearTimeout(g);g=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};e=!1;f=[];a(c.target).trigger(b,b)},9);d=b=null}})})();a.fn.getErrorMessage=function(){var e="",
f=this[0];f&&(e=k(f)||a.prop(f,"customValidationMessage")||a.prop(f,"validationMessage"));return e};u.replaceValidationUI&&h.ready("DOM forms",function(){a(j).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),a.webshims.validityAlert.showFor(e.target,a(e.target).prop("customValidationMessage")))})})});
