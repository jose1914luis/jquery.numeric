/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com)
    MIT License!
*/
(function(c){var f=(1.1).toLocaleString().substr(1,1),m=new RegExp("\\"+f,"g");c.fn.numeric=function(a){this.each(function(n,d){var b="INPUT"===d.tagName;"boolean"===typeof a&&(a={decimal:a});a=a||{};"undefined"===typeof a.negative&&(a.negative=b?d.getAttribute("min")?0>parseFloat(d.getAttribute("min")):!0:!0);var g=!1===a.decimal?"":a.decimal||f,h=!!a.negative;"undefined"===typeof a.decimal&&b&&(b=d.getAttribute("step"))&&"any"!==b&&-1===b.indexOf(".")&&-1===b.indexOf(",")&&(g="");return c(d).data("numeric.decimal",
g).data("numeric.negative",h).on("keypress.numericValue",c.fn.numeric.a).on("keyup.numericValue",c.fn.numeric.a).on("blur.numericValue",c.fn.numeric.a).on("input.numericValue",c.fn.numeric.a)});return this};c.fn.valueAsNumber=function(){if(!this.length)return null;if(arguments.length)this.each(function(a){"INPUT"===this.tagName&&"number"===this.type&&"valueAsNumber"in this?this.valueAsNumber=a:this.value=a.toString().replace(/\./,this.data("numeric.decimal")||f)});else{if("INPUT"===this[0].tagName&&
"number"===this[0].type&&"valueAsNumber"in this[0])return this[0].valueAsNumber;var a=this.data("numeric.decimal"),a=a?new RegExp("\\"+a,"g"):m;return""===this[0].value?null:parseFloat(this[0].value.replace(a,"."))}};c.fn.numeric.a=function(){var a=c.data(this,"numeric.decimal"),f=c.data(this,"numeric.negative");var d=this.value,b="",g=!1;if("number"!==this.type)var h=this.selectionStart,l=this.selectionEnd;for(var k=0,e;k<d.length;k++)e=d.charAt(k),"0"<=e&&"9">=e||f&&"-"===e&&!b.length?b+=e:a&&e===
a&&!g?(g=!0,b+=e):(k<=h&&h--,k<=l&&l--);d!==b&&(this.value=b,"number"!==this.type&&(this.selectionStart=h,this.selectionEnd=l))};c.fn.removeNumeric=function(){return this.removeData("numeric.decimal").removeData("numeric.negative").off(".numericValue")}})(jQuery);
