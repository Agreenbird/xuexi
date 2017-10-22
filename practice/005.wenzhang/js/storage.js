;(function(){
	'use strict'
//定义一个全局变量
	window.s = {
		get : function(key){
			var json = localStorage.getItem(key);
			return JSON.parse(json);
		},
		set : function(key,val){
			val = JSON.stringify(val);
			return localStorage.setItem(key,val);
		}
	};
	
})();