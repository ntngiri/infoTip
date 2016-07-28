var m = window.qunitTest;

test("Tooltip display direction test",function(){

	var sample = [{
			order : ['left','top','right','bottom'],
			list : tooltipList,
			'class' : "",
			dir : "left",
			wrapper : '.wrapper',
			open: {
			event : "mouseover",
			anim:"bounceInDown,bounceInLeft,bounceInUp,bounceInRight"
		    },
		close:{	
				event : "mouseout",
				node  : '.closetooltp',
				anim : 'fadeOut'
				
				
			}
	}
	];
	message= {
		1:'left',
		2:'top',
		3:'right',
		4:'bottom',
		5:'left after checking all directions'
	}

	for(var i=0;i<5;i++){
			var test_obj = sample[0];
			var options = test_obj;
			$('.abcd'+i).tooltip(options).open(); 
			console.log(test_obj,m);
			ok(m.commonParam.counter == (i+1),'tooltip displayed on '+(i+1)+' time:: '+message[(i+1)]+'');
		}
});


