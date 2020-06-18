!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.datepicker=t():e.datepicker=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var a=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],o={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var l=["click","focusin","keydown","input"];function d(e){l.forEach((function(t){e.addEventListener(t,e===document?Y:L)}))}function c(e){return Array.isArray(e)?e.map(c):"[object Object]"===j(e)?Object.keys(e).reduce((function(t,n){return t[n]=c(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),f(t,e,a),v(e,a)].join(""),a&&window.requestAnimationFrame((function(){M(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function f(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.dateSelected,o=t.maxDate,s=t.minDate,l=t.showAllDates,d=t.days,c=t.disabledDates,u=t.startDay,h=(t.weekendIndices,t.events),f=t.getRange?t.getRange():{},v=+f.start,m=+f.end,y=q(new Date(e).setDate(1)),p=y.getDay()-u,D=p<0?7:0;y.setMonth(y.getMonth()+1),y.setDate(0);var b=y.getDate(),g=[],w=D+7*((p+b)/7|0);w+=(p+b)%7?7:0;for(var S=1;S<=w;S++){var M=(S-1)%7,x=d[M],j=S-(p>=0?p:7+p),C=new Date(r,a,j),Y=h[+C],L=j<1||j>b,E=L?j<1?-1:1:0,P=L&&!l,k=P?"":C.getDate(),O=0===M||6===M,N=v!==m,_="qs-square "+x;Y&&!P&&(_+=" qs-event"),L&&(_+=" qs-outside-current-month"),!l&&L||(_+=" qs-num"),+C==+i&&(_+=" qs-active"),(c[+C]||t.disabler(C)||O&&t.noWeekends||s&&+C<+s||o&&+C>+o)&&!P&&(_+=" qs-disabled"),+q(new Date)==+C&&(_+=" qs-current"),+C===v&&m&&N&&(_+=" qs-range-start"),+C>v&&+C<m&&(_+=" qs-range-middle"),+C===m&&v&&N&&(_+=" qs-range-end"),P&&(_+=" qs-empty",k=""),g.push('<div class="'+_+'" data-direction="'+E+'">'+k+"</div>")}var I=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(g);return I.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),I.push("</div>"),I.join("")}function v(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return['<div class="qs-overlay-month" data-month-num="'+t+'">','<span data-month-num="'+t+'">'+e+"</span>","</div>"].join("")})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function m(e,t,n){var a=t.el,r=t.calendar.querySelector(".qs-active"),i=e.textContent,o=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,i),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(a,t,n),n||w(t),o&&(y({instance:t,deselect:n}),t.first&&!o.dateSelected&&(o.currentYear=t.currentYear,o.currentMonth=t.currentMonth,o.currentMonthName=t.currentMonthName),u(t),u(o)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function D(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),i=e.calendarContainer.getBoundingClientRect(),o=r.top-a.top+(t?-1*i.height:r.height)+"px",s=r.left-a.left+(n?r.width-i.width:0)+"px";e.calendarContainer.style.setProperty("top",o),e.calendarContainer.style.setProperty("left",s)}}function g(e){return"[object Date]"===j(e)&&"Invalid Date"!==e.toString()}function q(e){if(g(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function w(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&(M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),b(e),e.onShow(e))}function M(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),i=n.querySelector(".qs-controls"),o=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),i.classList.remove("qs-blur"),o.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),i.classList.add("qs-blur"),o.classList.add("qs-blur"),r.focus())}function x(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),i=r?null:t.value;if(13===(e.which||e.keyCode)||"click"===e.type)a?D(null,n,i,a):r||t.classList.contains("qs-disabled")||D(null,n,i,a);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}}function j(e){return{}.toString.call(e)}function C(e){a.forEach((function(t){t!==e&&w(t)}))}function Y(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,o=r.classList,s=a.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],l=s&&s.calendar.contains(r);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return a.forEach(w);if(s.disabled)return;var d=s.calendar,c=s.calendarContainer,h=s.disableYearOverlay,f=s.nonInput,v=d.querySelector(".qs-overlay-year"),y=!!d.querySelector(".qs-hidden"),p=d.querySelector(".qs-month-year").contains(r),b=r.dataset.monthNum;if(s.noPosition&&!l)(c.classList.contains("qs-hidden")?S:w)(s);else if(o.contains("qs-arrow"))D(o,s);else if(p||o.contains("qs-close"))h||M(!y,s);else if(b)x(e,v,s,b);else{if(o.contains("qs-disabled"))return;if(o.contains("qs-num")){var g=r.textContent,q=+r.dataset.direction,j=new Date(s.currentYear,s.currentMonth+q,g);if(q){s.currentYear=j.getFullYear(),s.currentMonth=j.getMonth(),s.currentMonthName=i[s.currentMonth],u(s);for(var Y,L=s.calendar.querySelectorAll('[data-direction="0"]'),E=0;!Y;){var P=L[E];P.textContent===g&&(Y=P),E++}r=Y}return void(+j==+s.dateSelected?m(r,s,!0):r.classList.contains("qs-disabled")||m(r,s))}o.contains("qs-submit")?x(e,v,s):f&&r===s.el&&(S(s),C(s))}}else if("focusin"===n&&s)S(s),C(s);else if("keydown"===n&&9===t&&s)w(s);else if("keydown"===n&&s&&!s.disabled){var k=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&k&&l?x(e,r,s):27===t&&k&&l&&M(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(r))return;var O=s.calendar.querySelector(".qs-submit"),N=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=N,O.classList[4===N.length?"remove":"add"]("qs-disabled")}}}function L(e){Y(e),e.__qs_shadow_dom=!0}function E(e,t){l.forEach((function(n){e.removeEventListener(n,t)}))}function P(){S(this)}function k(){w(this)}function O(e,t){var n=q(e),a=this.currentYear,r=this.currentMonth,i=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),i&&(y({instance:this,deselect:!0}),u(i)),u(this),this;if(!g(e))throw"`setDate` needs a JavaScript Date object.";if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw"You can't manually set a date that's disabled.";return this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),p(this.el,this),i&&(y({instance:this}),u(i)),(a===n.getFullYear()&&r===n.getMonth()||t)&&u(this,n),this}function N(e){return I(this,e,!0)}function _(e){return I(this,e)}function I(e,t,n){var a=e.dateSelected,r=e.first,i=e.sibling,o=e.minDate,s=e.maxDate,l=q(t),d=n?"Min":"Max";function c(){return"original"+d+"Date"}function h(){return d.toLowerCase()+"Date"}function f(){return"set"+d}function v(){throw"Out-of-range date passed to "+f()}if(null==t)e[c()]=void 0,i?(i[c()]=void 0,n?(r&&!a||!r&&!i.dateSelected)&&(e.minDate=void 0,i.minDate=void 0):(r&&!i.dateSelected||!r&&!a)&&(e.maxDate=void 0,i.maxDate=void 0)):e[h()]=void 0;else{if(!g(t))throw"Invalid date passed to "+f();i?((r&&n&&l>(a||s)||r&&!n&&l<(i.dateSelected||o)||!r&&n&&l>(i.dateSelected||s)||!r&&!n&&l<(a||o))&&v(),e[c()]=l,i[c()]=l,(n&&(r&&!a||!r&&!i.dateSelected)||!n&&(r&&!i.dateSelected||!r&&!a))&&(e[h()]=l,i[h()]=l)):((n&&l>(a||s)||!n&&l<(a||o))&&v(),e[h()]=l)}return i&&u(i),u(e),e}function R(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function A(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,i=this;this.inlinePosition&&(a.some((function(e){return e!==i&&e.positionedEl===t}))||t.style.setProperty("position",null));n.remove(),a=a.filter((function(e){return e!==i})),r&&delete r.sibling,a.length||E(document,Y);var o=a.some((function(t){return t.shadowDom===e}));for(var s in e&&!o&&E(e,L),this)delete this[s];a.length||l.forEach((function(e){document.removeEventListener(e,Y)}))}function F(e,t){var n=new Date(e);if(!g(n))throw"`navigate` needs a JavaScript Date object.";this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}t.default=function(e,t){var n=function(e,t){var n,l,d=function(e){var t=c(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!g(t))throw'"options.events" must only contain valid JavaScript Date objects.';return e[+q(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!g(n))throw'"options.'+e+'" needs to be a valid JavaScript Date object.';t[e]=q(n)}));var n=t.position,i=t.maxDate,l=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,f=t.startDay,v=t.id;if(t.startDate=q(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+q(t);if(!g(t))throw'You supplied an invalid date to "options.disabledDates".';if(n===+q(d))throw'"disabledDates" cannot contain the same date as "dateSelected".';return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==v)throw"Id cannot be `null` or `undefined`";if(null!=v){var m=a.filter((function(e){return e.id===v}));if(m.length>1)throw"Only two datepickers can share an id.";m.length?(t.second=!0,t.sibling=m[0]):t.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!y)throw'"options.position" must be one of the following: tl, tr, bl, br, or c.';if(t.position=function(e){var t=e[0],n=e[1],a={};a[o[t]]=1,n&&(a[o[n]]=1);return a}(n||"bl"),i<l)throw'"maxDate" in options is less than "minDate".';if(d){function p(e){throw'"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".'}l>d&&p("min"),i<d&&p()}if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],r=n?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw'"'+e+'" must be an array with ${num} strings.';t[n?n<2?"months":"overlayMonths":"days"]=a}})),f&&f>0&&f<7){var D=(t.customDays||r).slice(),b=D.splice(0,f);t.customDays=D.concat(b),t.startDay=+f,t.weekendIndices=[D.length-1,D.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder;"string"!=typeof h&&delete t.overlayButton;return t}(t||{startDate:q(new Date),position:"bl"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===j(u))throw"Using a shadow DOM as your selector is not supported.";for(var h,f=("getRootNode"in window.Node.prototype),v=u.parentNode;!h;){var m=j(v);if("[object HTMLDocument]"===m)h=!0;else if("[object ShadowRoot]"===m){if(h=!0,!f)throw"The shadow DOM is not supported in your browser.";n=v,l=currentParen.host}else v=v.parentNode}}if(!u)throw"No selector / element found.";if(a.some((function(e){return e.el===u})))throw"A datepicker already exists on that element.";var y=u===document.body,D=n?u.parentElement||n:y?document.body:u.parentElement,b=n?u.parentElement||l:D,w=document.createElement("div"),M=document.createElement("div");w.className="qs-datepicker-container qs-hidden",M.className="qs-datepicker";var x={shadowDom:n,customElement:l,positionedEl:b,el:u,parent:D,nonInput:"INPUT"!==u.nodeName,noPosition:y,position:!y&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:w,calendar:M,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||i)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},setDate:O,remove:A,setMin:N,setMax:_,show:P,hide:k,navigate:F,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||i,days:d.customDays||r,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||i).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var C=d.sibling,Y=x,L=C.minDate||Y.minDate,E=C.maxDate||Y.maxDate;Y.sibling=C,C.sibling=Y,C.minDate=L,C.maxDate=E,Y.minDate=L,Y.maxDate=E,C.originalMinDate=L,C.originalMaxDate=E,Y.originalMinDate=L,Y.originalMaxDate=E,C.getRange=R,Y.getRange=R}d.dateSelected&&p(u,x);var I=getComputedStyle(b).position;y||I&&"static"!==I||(x.inlinePosition=!0,b.style.setProperty("position","relative"));x.inlinePosition&&a.forEach((function(e){e.positionedEl===x.positionedEl&&(e.inlinePosition=!0)}));w.appendChild(M),D.appendChild(w),x.alwaysShow&&S(x);return x}(e,t);if(a.length||d(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),a.push(n),n.second){var l=n.sibling;y({instance:n,deselect:!n.dateSelected}),y({instance:l,deselect:!l.dateSelected}),u(l)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}},function(e,t,n){}]).default}));