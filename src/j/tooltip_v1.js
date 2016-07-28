//Initialize
/*$('.abcd').tooltip({  
});
$('.abcd').tooltip().open();*/
$.fn.tooltip = (function($) {
    var order = ['top', 'right', 'bottom', 'left'];
    var prevOpen = null;
    var defaultOptions = {
        list: {},
        'class': "tooltipDflt",
        dir: "right",
        tipWidth: 20,
        tipHeight: 20,
        wrapper: 'body',
        open: {
            event: "mouseover",
            anim: ""
        },
        close: {
            event: "mouseleave",
            node: "", //Selector
            anim: ""
        }
    };

    var init_options = function(options) {
        this.options = $.extend(true, {}, defaultOptions, options);
        if (options.order.length != 0) {
            order = options.order;
        }
    }

    var checkPosition = function(dir, obj) {
        if (dir == 'top')
            return checkForTop.call(this, obj);
        if (dir == 'right')
            return checkForRight.call(this, obj);
        if (dir == 'bottom')
            return checkForBottom.call(this, obj);
        if (dir == 'left')
            return checkForLeft.call(this, obj);
    }

    var setTooltipPosition = function(dir, obj) {
        //console.log(this,dir,obj)
        var flag = checkPosition.call(this, dir, obj);

        if (flag) {
            return flag;
        } else {
            var index = $.inArray(dir, order);
            var indexNext = (index + 1) % order.length;
            var defaultIndex = $.inArray(this.options.dir, order);
            //console.log(index,indexNext,defaultIndex);
            setTooltipPosition.call(this, order[indexNext], obj);
        }
    }

    var init_functionality = function() {

        //this : toolTipObject
        //this.node : target
        //this.options :  
        //Node's events
        var open_evnt = this.options.open.event;
        var close_evnt = this.options.close.event;
        var close_node = this.options.close.node;
        //Create tooltip Structure          
        
        //Inject tooltip Structure
        //toolTipCont.insertAfter(this.node);
       
        //Add classes from user's options           
        

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

    function setTooltip_position(l, t) {
        this.toolTipCont.css({
            left: l,
            top: t
        })
    }

    function rightCondition(obj) {
        this.toolTipCont.find('em').removeClass().addClass('arrow-leftC');
        setTooltip_position.call(this, obj.rigthDir_LeftPos, obj.nodeTop - (obj.tooltipHt / 2));
        this.toolTipCont.removeClass(obj.animatnGrp[0], obj.animatnGrp[2], obj.animatnGrp[3]).addClass(obj.animatnGrp[1]);
        //   console.log(obj.animatnGrp[0],obj.animatnGrp[2],obj.animatnGrp[3],obj.animatnGrp[1])

    }

    function bottomCondition(obj) {
        this.toolTipCont.find('em').removeClass().addClass('arrow-upC');
        setTooltip_position.call(this, obj.nodeLeft - (obj.tooltipWdth / 2) + (obj.nodeWidth / 2), obj.bottomDir_topPos + obj.ttTipHeight)
        this.toolTipCont.removeClass(obj.animatnGrp[0], obj.animatnGrp[1], obj.animatnGrp[3]).addClass(obj.animatnGrp[2]);
    }

    function leftCondition(obj) {
        this.toolTipCont.find('em').removeClass().addClass('arrow-rightC');
        setTooltip_position.call(this, obj.leftDir_leftPos, obj.nodeTop - (obj.tooltipHt / 2));
        this.toolTipCont.removeClass(obj.animatnGrp[0], obj.animatnGrp[2], obj.animatnGrp[1]).addClass(obj.animatnGrp[3]);
    }

    function topCondition(obj) {
        this.toolTipCont.find('em').removeClass().addClass('arrow-downC');
        setTooltip_position.call(this, obj.nodeLeft - (obj.tooltipWdth / 2) + (obj.nodeWidth / 2), obj.topDir_topPos - obj.ttTipHeight);
        this.toolTipCont.removeClass(obj.animatnGrp[1], obj.animatnGrp[2], obj.animatnGrp[3]).addClass(obj.animatnGrp[0]);
    }


    function checkForRight(obj) { // This function set tooltip at right side if sufficent space available to show tooltip then return true else false
        if (obj.counter <= order.length) {
            if ((obj.wrapperWd - ((obj.nodeLeft - obj.wrapperLeft) - obj.nodeWidth)) >= obj.tooltipWdth) {
                if ((obj.horizontal_distance) >= obj.tooltipWdth) {
                    if (((obj.nodeTop - ($(window).scrollTop() + obj.wrapperTop)) > (obj.tooltipHt)) && (obj.vertical_distance >= obj.tooltipHt)) {
                        rightCondition.call(this, obj);
                        return true;
                    }
                }
            }
            obj.counter++;
            return false;

        } else {
            rightCondition.call(this, obj);
            return true;
        }
    }

    function checkForBottom(obj) { // This function set tooltip at bottom
        if (obj.counter <= order.length) {
            if ((obj.wrapperHt) - (obj.nodeTop + obj.nodeHeight) >= (obj.tooltipHt)) {
                if (obj.vertical_distance >= obj.tooltipHt) {
                    //  if((((obj.nodeLeft-20)-obj.viewportLeft) >= obj.tooltipWdth)/* && (obj.horizontal_distance >= obj.tooltipWdth)*/) {
                    if ((obj.viewportLeft + obj.nodeCentre) >= obj.tooltipCentre && (obj.horizontal_distance >= obj.nodeCentre)) {
                        bottomCondition.call(this, obj);
                        return true;
                    }
                }
            }

            obj.counter++;
            return false;
        } else {
            bottomCondition.call(this, obj);
            return true;
        }
    }

    function checkForLeft(obj) { // This function set tooltip at left
        if (obj.counter <= order.length) {
            if ((obj.nodeLeft - obj.wrapperLeft) > obj.tooltipWdth) {
                if (obj.viewportLeft >= obj.tooltipWdth) {
                    if (((obj.nodeTop - ($(window).scrollTop() + obj.wrapperTop)) > (obj.tooltipHt)) && (obj.vertical_distance >= obj.tooltipHt)) {
                        leftCondition.call(this, obj);
                        return true;
                    }
                }
            }

            obj.counter++;
            return false;
        } else {
            leftCondition.call(this, obj);
            return true;
        }
    }

    function checkForTop(obj) {
        if (obj.counter <= order.length) {
            if ((obj.nodeTop - obj.wrapperTop) > obj.tooltipHt) {
                if ((obj.nodeTop - ($(window).scrollTop() + obj.wrapperTop)) > obj.tooltipHt) {
                    if (((obj.viewportLeft + obj.nodeCentre) >= obj.tooltipCentre) && (obj.horizontal_distance >= obj.nodeCentre)) {
                        topCondition.call(this, obj);
                        return true;
                    }
                }
            }

            obj.counter++;
            return false;
        } else {
            topCondition.call(this, obj);
            return true;
        }
    }
    var tooltip_proto = {
        open: function() {
            //direction for tooltip

            var commonParam = {};

            if(typeof this.toolTipCont == 'undefined'){
            var toolTipCont = this.toolTipCont = $('<div class="tooltipContainer">');
            toolTipCont.appendTo('body');
            var classes = this.options['class'];
            var tooltipClases = classes.replace(/\,/g, ' ');
            toolTipCont.addClass(tooltipClases);
            }
            var tooltipWidth = $('.tooltipContainer');
            commonParam.counter = 1;
            commonParam.ttDirection = this.options.dir;
            //animation classes for opening the tooltip
            var animationClasses = this.options.open.anim;
            var animatnGrp = commonParam.animatnGrp = animationClasses.split(",");
            if (animatnGrp.length == 1) {
                for (i = 0; i < 3; i++) {
                    animatnGrp.push(animationClasses)
                }
            }

            //wrapper 
            commonParam.wrapElem = $(this.options.wrapper);

            var wrapperOffset = commonParam.wrapElem.offset();
            commonParam.wrapperLeft = wrapperOffset.left;
            commonParam.wrapperTop = wrapperOffset.top
            commonParam.wrapperHt = commonParam.wrapElem.height();
            commonParam.wrapperWd = commonParam.wrapElem.width();

            //Get node's tooltip number and value
            commonParam.ttTipWidth = this.options.tipWidth;
            commonParam.ttTipHeight = this.options.tipHeight;

            //console.log(ttTipWidth)
            var listVal = this.node.attr('tooltip')
            var ttContnt = this.options.list[listVal];
            $(this.toolTipCont).css('max-width', $(window).width() / 2)
            var toolTipCont = this.toolTipCont;

            //Node's(Target) height and width
            commonParam.nodeHeight = this.node.outerHeight();
            commonParam.nodeWidth = this.node.outerWidth();
            commonParam.nodeCentre = this.node.outerWidth() / 2;
            //Node's(Target) position
            var nodeOffset = this.node.offset();
            commonParam.nodeLeft = nodeOffset.left;
            commonParam.nodeTop = nodeOffset.top;
            //show tooltip
            toolTipCont.html(ttContnt).show();
            //get height of tooltip
            commonParam.tooltipHt = toolTipCont.height();
            //get Outerheight of tooltip
            commonParam.tooltipOuterHt = toolTipCont.outerHeight();
            //get width of tooltip
            commonParam.tooltipWdth = toolTipCont.outerWidth();
            commonParam.tooltipCentre = toolTipCont.outerWidth() / 2;
            commonParam.rigthDir_LeftPos = commonParam.nodeLeft + commonParam.nodeWidth + commonParam.ttTipWidth;
            commonParam.topDir_topPos = commonParam.nodeTop - commonParam.tooltipOuterHt;
            commonParam.leftDir_leftPos = commonParam.nodeLeft - commonParam.tooltipWdth - commonParam.ttTipWidth;
            commonParam.bottomDir_topPos = commonParam.nodeTop + commonParam.nodeHeight;


            /* Responsive tooltip */
            var myLeft = this.node.offset().left;
            //var myRight = $(window).width() - myLeft;
            var myTop = this.node.offset().top;
            //var myBottom = $(window).height() - myTop;
            var myRight = myLeft + this.node.outerWidth();
            var myBottom = myTop + this.node.outerHeight();
            var viewportRight = $(window).width() + $(window).scrollLeft();
            var viewportBottom = $(window).height() + $(window).scrollTop();
            commonParam.viewportLeft = (myLeft - $(window).scrollLeft());
            //commonParam.horizontal_distance = ($(window).width() - (myLeft+ commonParam.nodeWidth));
            // commonParam.viewportLeft = (viewportRight -( commonParam.horizontal_distance+commonParam.nodeWidth))
            commonParam.horizontal_distance = (viewportRight - myRight);
            commonParam.vertical_distance = (viewportBottom - myBottom);

            /* end*/
                
            setTooltipPosition.call(this, commonParam.ttDirection, commonParam)

            prevOpen ? prevOpen.close() : '';
            toolTipCont.fadeIn();
            prevOpen = this;

        },
        close: function() {
            this.toolTipCont.hide()
        }

    }
    var constructor = function(options, node) {
        init_options.call(this, options);
        this.node = node;
        init_functionality.call(this);
    }
    constructor.prototype = tooltip_proto;

    return function(options) {
        var obj = null;
        $.each(this, function(index, value) {
            if (!$(value).data('tooltip')) {
                var tooltipObject = new constructor(options, $(value));
                $(value).data('tooltip', tooltipObject)
            }
        })
        return this.data('tooltip');
    }
}(jQuery))