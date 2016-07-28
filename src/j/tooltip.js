
	$.fn.tooltip = (function($){
		var order = ['top','right','bottom','left'];
		var prevOpen = null;
		var defaultOptions = {
			list : {},
			'class' : "tooltipDflt",
			dir : "right",
			tipWidth : 20,
			tipHeight : 20,
			wrapper : 'body',
			open: {
				event : "mouseover",
				anim:""
			},
			close : {
				  event : "mouseleave",	
				  node : "",//Selector
				  anim : ""
			}
		};	
		
		/** Attach event on Domready */
		/*$(function(){
			$(document).on('click',function(e){					
				var target = $(e.target);
				if(!target.hasClass('tooltipContainer') && !target.attr('tooltip')){
					toolTipCont.fadeOut();
					}
			});				
		})*/
		
		var init_options = function(options){
			this.options = $.extend(true,{},defaultOptions,options);	
		}
		
		var checkPosition = function(dir,obj){
				if(dir=='top')
					return checkForTop.call(this,obj);					
				if(dir=='right')
					return checkForRight.call(this,obj);
				if(dir=='bottom')
					return checkForBottom.call(this,obj);
				if(dir=='left')
					return checkForLeft.call(this,obj);	
		}
		
		var setTooltipPosition = function(dir,obj){					
			//console.log(this,dir,obj)
			var flag = checkPosition.call(this,dir,obj);
			
			if(flag){
				return flag;
			}
			else{
				var index = $.inArray(dir,order);
				var indexNext = (index+1)%order.length;
				var defaultIndex = $.inArray(this.options.dir,order);				
				//console.log(index,indexNext,defaultIndex);
				if(indexNext!=defaultIndex){										
					setTooltipPosition.call(this,order[indexNext],obj);			
				}
				else{
					//checkPosition.call(this,order[indexNext],obj);
					return true;
				}
			}
		}
			
		var init_functionality = function(){
			
			//this : toolTipObject
			//this.node : target
			//this.options :
							
			//Node's events
			var open_evnt = this.options.open.event;
			var close_evnt = this.options.close.event;			
			var close_node = this.options.close.node;
			//Create tooltip Structure			
			var toolTipCont = this.toolTipCont = $('<div class="tooltipContainer">');			
			//Inject tooltip Structure
			//toolTipCont.insertAfter(this.node);
			toolTipCont.appendTo('body');
			
			//Add classes from user's options			
			var classes = this.options['class'];						
			var tooltipClases =	classes.replace(/\,/g,' ');
			toolTipCont.addClass(tooltipClases);	
			
			//Open and close event on strucute
			var _this = this;
	        	this.node.on(open_evnt, function() {
	            _this.open();
	        });


	        this.node.on(close_evnt, function() {
	            var flag=0;
	            _this.toolTipCont.on('mouseenter', function() {
	                flag=1;
	            })
	            setTimeout(function() {
	                if (flag) {
	                    _this.toolTipCont.on('mouseleave', function() {
	                        _this.close()
	                    })
	                } else {
	                    _this.close();
	                };
	            }, 100)
	        })

	        if (close_node) {
	            this.node.on('click', close_node, function() {
	                _this.close();
	            });
	        }


	    }

	
		
		function setTooltip_position(l,t){
				this.toolTipCont.css({left:l,top:t})						
		}
		
		function rightCondition(obj){	
				this.toolTipCont.find('em').removeClass().addClass('arrow-leftC');
				setTooltip_position.call(this,obj.rigthDir_LeftPos,obj.nodeTop - (obj.tooltipHt/2));
				this.toolTipCont.removeClass(obj.animatnGrp[0],obj.animatnGrp[2],obj.animatnGrp[3]).addClass(obj.animatnGrp[1]);
										
		}
		function bottomCondition(obj){
				this.toolTipCont.find('em').removeClass().addClass('arrow-upC');
				setTooltip_position.call(this,obj.nodeLeft-(obj.tooltipWdth/2)+ (obj.nodeWidth/2),obj.bottomDir_topPos+obj.ttTipHeight)
				this.toolTipCont.removeClass(obj.animatnGrp[0],obj.animatnGrp[1],obj.animatnGrp[3]).addClass(obj.animatnGrp[2]);						
		}
		function leftCondition(obj){
				this.toolTipCont.find('em').removeClass().addClass('arrow-rightC');
				setTooltip_position.call(this,obj.leftDir_leftPos,obj.nodeTop - (obj.tooltipHt/2));
				this.toolTipCont.removeClass(obj.animatnGrp[0],obj.animatnGrp[2],obj.animatnGrp[1]).addClass(obj.animatnGrp[3]);
		}
		function topCondition(obj){
				this.toolTipCont.find('em').removeClass().addClass('arrow-downC');
				setTooltip_position.call(this,obj.nodeLeft-(obj.tooltipWdth/2)+ (obj.nodeWidth/2),obj.topDir_topPos-obj.ttTipHeight);
				this.toolTipCont.removeClass(obj.animatnGrp[1],obj.animatnGrp[2],obj.animatnGrp[3]).addClass(obj.animatnGrp[0]);
		}
		
			
		function checkForRight(obj){  // This function set tooltip at right side if sufficent space available to show tooltip then return true else false
					if((obj.horizontal_distance) >= obj.tooltipWdth){
						if (((obj.nodeTop-($(window).scrollTop()+obj.wrapperTop)) > (obj.tooltipHt)) && (obj.vertical_distance >= obj.tooltipHt)){
						rightCondition.call(this,obj);
						return true;
					}}
					return false;
				}
		function checkForBottom(obj){ // This function set tooltip at bottom
		
					if(obj.vertical_distance >= obj.tooltipHt){
					//	if((((obj.nodeLeft-20)-obj.viewportLeft) >= obj.tooltipWdth)/* && (obj.horizontal_distance >= obj.tooltipWdth)*/) {
							bottomCondition.call(this,obj);
							return true;
						}					
						return false;
				}
		
		
		function checkForLeft(obj){	// This function set tooltip at left
						if((obj.nodeLeft-obj.viewportLeft) >= obj.tooltipWdth){
							if (((obj.nodeTop-($(window).scrollTop()+obj.wrapperTop)) > (obj.tooltipHt)) && (obj.vertical_distance >= obj.tooltipHt)){
							leftCondition.call(this,obj);
							return true;
						}}
						return false;
		}
		
		function checkForTop(obj){		// This function set tooltip on top	
						if((obj.nodeTop-($(window).scrollTop()+obj.wrapperTop)) > obj.tooltipHt){							
							topCondition.call(this,obj);
							return true;
						}
						return false;
						
		}
		
		var tooltip_proto = {
			open:function(){
				//direction for tooltip
				 
				var commonParam = {};
				var tooltipWidth= $('.tooltipContainer');

				commonParam.ttDirection =  this.options.dir;
				//animation classes for opening the tooltip
				var animationClasses = this.options.open.anim;				
				var animatnGrp = commonParam.animatnGrp = animationClasses.split(",");
				if(animatnGrp.length == 1){
					for(i=0;i<3;i++){
						animatnGrp.push(animationClasses) 
 					}					
				}	
				
				//wrapper 
				commonParam.wrapElem =  $(this.options.wrapper);
				
				var wrapperOffset = commonParam.wrapElem.offset();
				commonParam.wrapperLeft	 = wrapperOffset.left; 
				commonParam.wrapperTop   = wrapperOffset.top
				commonParam.wrapperHt   = commonParam.wrapElem.height();		
				
				//Get node's tooltip number and value
				commonParam.ttTipWidth =  this.options.tipWidth;
				commonParam.ttTipHeight =  this.options.tipHeight;
				
				//console.log(ttTipWidth)
				var listVal = this.node.attr('tooltip')
				var ttContnt = this.options.list[listVal];
				$(this.toolTipCont).css( 'max-width', $( window ).width() / 2 )
				var toolTipCont = this.toolTipCont;
				
				//Node's(Target) height and width
				commonParam.nodeHeight = this.node.outerHeight();
				commonParam.nodeWidth  = this.node.outerWidth();
				//Node's(Target) position
				var nodeOffset = this.node.offset();
				commonParam.nodeLeft = nodeOffset.left;
				commonParam.nodeTop  = nodeOffset.top;
				//show tooltip
				toolTipCont.html(ttContnt).show(); 
				//get height of tooltip
				commonParam.tooltipHt = toolTipCont.height();
				//get Outerheight of tooltip
				commonParam.tooltipOuterHt = toolTipCont.outerHeight();
				//get width of tooltip
				commonParam.tooltipWdth = toolTipCont.outerWidth();
				
				commonParam.rigthDir_LeftPos = commonParam.nodeLeft + commonParam.nodeWidth + commonParam.ttTipWidth;
				commonParam.topDir_topPos    = commonParam.nodeTop-commonParam.tooltipOuterHt;
				commonParam.leftDir_leftPos  = commonParam.nodeLeft-commonParam.tooltipWdth-commonParam.ttTipWidth;
				commonParam.bottomDir_topPos = commonParam.nodeTop+commonParam.nodeHeight;		
			  
			    /* Responsive tooltip */
				var myLeft = this.node.offset().left;
    			var myTop = this.node.offset().top;
    			var myRight = myLeft + this.node.outerWidth();
    			var myBottom = myTop + this.node.outerHeight();
    			var viewportRight = $(window).width() + $(window).scrollLeft();
   				 var viewportBottom = $(window).height() + $(window).scrollTop();
				 commonParam.viewportLeft = ($(window).width() - $(window).scrollLeft())-(myLeft);
    			commonParam.horizontal_distance = (viewportRight - myRight);
    			 commonParam.vertical_distance = (viewportBottom - myBottom);
				
				
				/* end*/
				
				 /* div.css({'left': rigthDir_LeftPos , 'top':nodeTop - (tooltipHt/2) }) //set position of tooltip to RIGHT-center				
				  div.css({'left': rigthDir_LeftPos , 'top':nodeTop})       			//set position of tooltip to RIGHT-top				
				  div.css({'left': rigthDir_LeftPos , 'top':nodeTop -tooltipHt})      //set position of tooltip to RIGHT-down   
							
			
				  div.css({'left':nodeLeft-(tooltipWdth/2)+ (nodeWidth/2), 'top': topDir_topPos})   //set position of tooltip to TOP-center				
				  div.css({'left':nodeLeft, 'top': topDir_topPos})					          //set position of tooltip to TOP-left				
				  div.css({'left':nodeLeft+nodeWidth - tooltipWdth, 'top': topDir_topPos})           //set position of tooltip to TOP-right 
						
			
				  	toolTipCont.css({'left':leftDir_leftPos, 'top':nodeTop - (tooltipHt/2)})		//set position of tooltip to LEFT-center				
				  toolTipCont.css({'left':leftDir_leftPos, 'top':nodeTop})							//set position of tooltip to LEFT-top				
				  toolTipCont.css({'left':leftDir_leftPos, 'top':nodeTop -tooltipHt})				//set position of tooltip to LEFT-down	 			
				
			
				  div.css({'left':nodeLeft-(tooltipWdth/2)+ (nodeWidth/2), 'top':bottomDir_topPos})		//set position of tooltip to BOTTOM-center				
				  div.css({'left':nodeLeft, 'top':bottomDir_topPos})										//set position of tooltip to BOTTOM-top				
				  div.css({'left':nodeLeft+nodeWidth - tooltipWdth, 'top':bottomDir_topPos})				//set position of tooltip to BOTTOM-down   */
				  
				  
				var rightCount = 0,leftCount =0,topCount=0,bottomCount = 0;			
				
				setTooltipPosition.call(this,commonParam.ttDirection,commonParam)

/*				if(ttDirection == 'left'){
					checkForLeft();					
					}
				if(ttDirection == 'right'){
					checkForRight();										
					}
				if(ttDirection == 'top'){
					checkForTop();					
					}
				if(ttDirection == 'bottom'){
					checkForBottom();					
					}*/
					
						
					
					
				/*function checkForRight(){  // This function set tooltip at right side if sufficent space available to show tooltip then return true else false
					rightCount++;							
					if(($(wrapElem).width()-(nodeLeft+nodeWidth))>tooltipWdth){									
						rightCondition();
						return true;
					}
					return false;
					/*else{
						if(rightCount == 1){checkForLeft()}
						if(rightCount == 2){checkForTop()}
						if(rightCount == 3){checkForBottom()}
						if(rightCount == 4){
								rightCondition();								
							}
					}										
				}				
				function checkForBottom(){ // This function set tooltip at bottom
					bottomCount++;
					if((wrapperHt)-(nodeTop+nodeHeight)>=(tooltipHt)){					
						if($(window).height()-(nodeTop-$(window).scrollTop()+nodeHeight)>(tooltipHt)){							
							bottomCondition();
							return true;
						}					
						return false;
						/*}else{
							if(bottomCount == 1){checkForTop()}
							if(bottomCount == 2){checkForLeft()}
							if(bottomCount == 3){checkForRight()}
							if(bottomCount == 4){
									bottomCondition();									
								}					
						}
					}
					else{
							if(bottomCount == 1){checkForTop()}
							if(bottomCount == 2){checkForLeft()}
							if(bottomCount == 3){checkForRight()}
							if(bottomCount == 4){
									bottomCondition();									
								}		
					}
				}
				function checkForLeft(){	// This function set tooltip at left
						leftCount++;
						if((nodeLeft-wrapperLeft) > tooltipWdth){
							leftCondition();
							return true;
						}
						return false;
						/*else{
							if(leftCount == 1){checkForRight()}
							if(leftCount == 2){checkForTop()}
							if(leftCount == 3){checkForBottom()}
							if(leftCount == 4){
									leftCondition();
								
								}				
							}
						}						
				function checkForTop(){		// This function set tooltip on top	
						topCount++
						if((nodeTop-($(window).scrollTop()+wrapperTop)) > tooltipHt){							
							topCondition();
							return true;
						}
						return false;
						
						/*else{
							if(topCount == 1){checkForBottom()}
							if(topCount == 2){checkForRight()}
							if(topCount == 3){checkForLeft()}
							if(topCount == 4){
									topCondition();
								
								}	
						}
					}*/
				
				prevOpen?prevOpen.close():'';
				toolTipCont.fadeIn();	
				prevOpen = this;
				
			},
			close:function(){
                this.toolTipCont.hide();
            }              

		}	
		var constructor = function(options,node){		
			init_options.call(this,options);
			this.node = node;
			init_functionality.call(this);		
		}
		constructor.prototype = tooltip_proto;
		
		return function(options){
				var obj = null;
				$.each(this,function(index,value){
						if(!$(value).data('tooltip')){												
							var tooltipObject = new constructor(options,$(value));
							$(value).data('tooltip',tooltipObject)				
						}					
				})
				return this.data('tooltip');	
		}
		
		//$('div').tooltip().open()
		//var toolTipObject = $('div').tooltip();
		//toolTipObject.open();	
		
		
	}(jQuery))
