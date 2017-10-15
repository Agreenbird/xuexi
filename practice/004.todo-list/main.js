;(function(){
	'use strict'

	var tast_list; 
	var last_id ;
	init_data();
	//初始化
	function init_data(){
		
		tast_list = s.get('tast_list');
		last_id = s.get('last_id');
		//如果没有就创建新数组
		if (!tast_list) {
			var tast_list = [];
			s.set('tast_list',tast_list);
		};
		//如果没有就id为零
		if (!last_id) {
			var last_id = 0;
			s.set('last_id',last_id);
		};
	}
})();