;(function(){
	'use strict'

	var link_list =  document.querySelectorAll("[data-link]");
	var current_page;

	init();
	function init(){
		render_page(current_page);
		link_list.forEach(function(link){
			link.addEventListener("click",function(){
				var page = link.dataset.link;
				s.set("current_page",page);
				render_page(page);

			});
		});
		
		
	}

	function render_page(page_name){
		var all_page = document.querySelectorAll("[data-page]")
		all_page.forEach(function(da_page){
			da_page.hidden = true;
			if (da_page.dataset.page == page_name) {
				da_page.hidden = false;
			}
		});

	}

})();

