function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=function(r){a[r].addEventListener("click",function(){var e;i.sort(function(t,e){var o=t.children[r].textContent,i=e.children[r].textContent;switch(a[r].textContent){case"Name":case"Position":return o.localeCompare(i);case"Age":return o-i;case"Salary":return n(o)-n(i)}}),(e=o.tBodies[0]).append.apply(e,t(i))})};function n(r){return parseInt(r.replace("$","").replaceAll(",",""))}for(var o=document.querySelector("table"),a=o.rows[0].children,i=t(o.tBodies[0].rows),c=0;c<a.length;c++)e(c);
//# sourceMappingURL=index.656c6b86.js.map
