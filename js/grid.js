(function($){
	$.fn.grid = function(options){

		var defaults = {
			columns: 4
		};
	
		var options = $.extend( {}, defaults, options );

		current = 0;
		
		tops = [];
		for( var i = 0, j = options.columns; i < j; i++ ) tops[i] = { top: 0, left: 0 };
		
		var padding_left = parseInt(Math.round(parseFloat($('.grid__element').css('paddingLeft'))));
		
		function minArray(array){
			min = 9999999999999999;
			key = null;
			for( i in array ){
				if ( array[i].top < min ){
					min = array[i].top;
					key = i;
				}
			}
			return key;
		};
		
		this.find('.grid__element').each(function(i,e){
			current = i % options.columns;
			
			if ( i >= options.columns ) current = minArray(tops);
			
			padding = parseInt($(e).css('paddingLeft'));
			width = $(e).width() + 2*padding;
			height = $(e).height() + 2*padding;
			
			tops[ current ].left = current*width;
			
			$(e)
				.css('position','absolute')
				.css('top',tops[ current ].top)
				.css('left',tops[ current ].left + padding_left)
				
			console.log(padding_left);

			tops[ current ].top += height;
		});
	};
})(jQuery);