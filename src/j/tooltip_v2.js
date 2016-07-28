$.fn.infotip = (function($) {
    var t = typeof qunitTest != "undefined" ? qunitTest : {};
    var order = ['top', 'right', 'bottom', 'left'];
    var prevOpen = null;
    var defaultOptions = {
        list: {},
        'class': "nttp_tooltipDflt animated",
        dir: "left",
        tipWidth: 20,
        tipHeight: 20,
        wrapper: 'body',
        open: {
            success: function() {},
            event: "mouseover",
            anim: ""
        },
        close: {
            event: "mouseleave",
            node: "", //Selector
            anim: ""
        }
    };

    var initOptions = function(options) {
        this.options = $.extend(true, {}, defaultOptions, options);
        if (typeof(options) != 'undefined') {
            if (typeof(options.order) != 'undefined' && options.order.length != 0) {
                order = options.order;
            }
        }
    }

    /**
     * [checkPosition - checks for each direction, if tooltip can be displayed]
     */
    var checkPosition = t.checkPosition = function(dir, infoTipObj) {
        if (dir == 'top') {
            return checkForTop.call(this, infoTipObj);
        } else if (dir == 'right') {
            return checkForRight.call(this, infoTipObj);
        } else if (dir == 'bottom') {
            return checkForBottom.call(this, infoTipObj);
        } else if (dir == 'left') {
            return checkForLeft.call(this, infoTipObj);
        }
    }

    var setTooltipPosition = function(dir, infoTipObj) {
        var flag = checkPosition.call(this, dir, infoTipObj);
        if (flag) {
            (this.options.open.success)(this.node, infoTipObj.toolTipCont);
            return flag;
        } else {
            var index = $.inArray(dir, order);
            var indexNext = (index + 1) % order.length;
            var defaultIndex = $.inArray(this.options.dir, order);
            setTooltipPosition.call(this, order[indexNext], infoTipObj);
        }

    }

    var initFunctionality = function() {

        //Node's events
        var openEvnt = this.options.open.event;
        var closeEvnt = this.options.close.event;
        var closeNode = this.options.close.node;
        //Create tooltip Structure 
        //Inject tooltip Structure
        //Add classes from user's options           
        //Open and close event on strucute
        var _this = this;
        this.node.on(openEvnt, function() {
            _this.open();
        });

        this.node.on(closeEvnt, function() {
            var flag = 0;
            _this.toolTipCont.on('mouseenter', function() {
                flag = 1;
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

        if (closeNode) {
            this.node.on('click', closeNode, function() {
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


    function rightCondition(infoTipObj) {
        this.toolTipCont.addClass('nttp_right').find('em').removeClass().addClass('nttp_arrow-leftC');
        setTooltip_position.call(this, infoTipObj.rigthDir_LeftPos, infoTipObj.nodeTop - (infoTipObj.tooltipHt / 2));
        this.toolTipCont.removeClass(infoTipObj.animatnGrp[0], infoTipObj.animatnGrp[2], infoTipObj.animatnGrp[3]).addClass(infoTipObj.animatnGrp[1]);
    }


    function bottomCondition(infoTipObj) {
        this.toolTipCont.find('em').removeClass().addClass('nttp_arrow-upC');
        setTooltip_position.call(this, infoTipObj.nodeLeft - (infoTipObj.tooltipWdth / 2) + (infoTipObj.nodeWidth / 2), infoTipObj.bottomDir_topPos + infoTipObj.ttTipHeight)
        this.toolTipCont.removeClass(infoTipObj.animatnGrp[0], infoTipObj.animatnGrp[1], infoTipObj.animatnGrp[3]).addClass(infoTipObj.animatnGrp[2]);
    }


    function leftCondition(infoTipObj) {
        this.toolTipCont.find('em').removeClass().addClass('nttp_arrow-rightC');
        setTooltip_position.call(this, infoTipObj.leftDir_leftPos, infoTipObj.nodeTop - (infoTipObj.tooltipHt / 2));
        this.toolTipCont.removeClass(infoTipObj.animatnGrp[0], infoTipObj.animatnGrp[2], infoTipObj.animatnGrp[1]).addClass(infoTipObj.animatnGrp[3]);
    }


    function topCondition(infoTipObj) {
        this.toolTipCont.find('em').removeClass().addClass('nttp_arrow-downC');
        setTooltip_position.call(this, infoTipObj.nodeLeft - (infoTipObj.tooltipWdth / 2) + (infoTipObj.nodeWidth / 2), infoTipObj.topDir_topPos - infoTipObj.ttTipHeight);
        this.toolTipCont.removeClass(infoTipObj.animatnGrp[1], infoTipObj.animatnGrp[2], infoTipObj.animatnGrp[3]).addClass(infoTipObj.animatnGrp[0]);
    }


    /**
     * [checkForRight- checks the right space between container and node to determine of tooltip can fit in]
     */
    function checkForRight(infoTipObj) {
        if (infoTipObj.counter <= order.length) {
            if ((infoTipObj.wrapperWd - ((infoTipObj.nodeLeft - infoTipObj.wrapperLeft) - infoTipObj.nodeWidth)) >= infoTipObj.tooltipWdth) {
                if ((infoTipObj.horizontal_distance) >= infoTipObj.tooltipWdth) {
                    if (((infoTipObj.nodeTop - ($(window).scrollTop() + infoTipObj.wrapperTop)) > (infoTipObj.tooltipHt)) && (infoTipObj.vertical_distance >= infoTipObj.tooltipHt)) {
                        rightCondition.call(this, infoTipObj);
                        return true;
                    }
                }
            }
            infoTipObj.counter++;
            return false;

        } else {
            rightCondition.call(this, infoTipObj);
            return true;
        }
    }

    /**
     * [checkForBottom- checks the bottom space between container and node to determine of tooltip can fit in]
     */
    function checkForBottom(infoTipObj) {
        if (infoTipObj.counter <= order.length) {
            if ((infoTipObj.wrapperHt) - (infoTipObj.nodeTop + infoTipObj.nodeHeight) >= (infoTipObj.tooltipHt) && ((infoTipObj.nodeLeft - infoTipObj.wrapperLeft + infoTipObj.nodeCentre) >= infoTipObj.tooltipCentre)) {
                if (infoTipObj.vertical_distance >= infoTipObj.tooltipHt) {
                    if ((infoTipObj.viewportLeft + infoTipObj.nodeCentre) >= infoTipObj.tooltipCentre && (infoTipObj.horizontal_distance >= infoTipObj.nodeCentre)) {
                        bottomCondition.call(this, infoTipObj);
                        return true;
                    }
                }
            }

            infoTipObj.counter++;
            return false;
        } else {
            bottomCondition.call(this, infoTipObj);
            return true;
        }
    }

    /**
     * [checkForLeft- checks the left space between container and node to determine of tooltip can fit in]
     */
    function checkForLeft(infoTipObj) {
        if (infoTipObj.counter <= order.length) {
            if ((infoTipObj.nodeLeft - infoTipObj.wrapperLeft) > infoTipObj.tooltipWdth) {
                if (infoTipObj.viewportLeft >= infoTipObj.tooltipWdth) {
                    if (((infoTipObj.nodeTop - ($(window).scrollTop() + infoTipObj.wrapperTop)) > (infoTipObj.tooltipHt)) && (infoTipObj.vertical_distance >= infoTipObj.tooltipHt)) {
                        leftCondition.call(this, infoTipObj);
                        return true;
                    }
                }
            }

            infoTipObj.counter++;
            return false;
        } else {
            leftCondition.call(this, infoTipObj);
            return true;
        }
    }

    /**
     * [checkForTop- checks the top space between container and node to determine of tooltip can fit in]
     */
    function checkForTop(infoTipObj) {
        if (infoTipObj.counter <= order.length) {
            if ((infoTipObj.nodeTop - infoTipObj.wrapperTop) > infoTipObj.tooltipHt && ((infoTipObj.nodeLeft - infoTipObj.wrapperLeft + infoTipObj.nodeCentre) >= infoTipObj.tooltipCentre)) {
                if ((infoTipObj.nodeTop - ($(window).scrollTop() + infoTipObj.wrapperTop)) > infoTipObj.tooltipHt) {
                    if (((infoTipObj.viewportLeft + infoTipObj.nodeCentre) >= infoTipObj.tooltipCentre) && (infoTipObj.horizontal_distance >= infoTipObj.nodeCentre)) {
                        topCondition.call(this, infoTipObj);
                        return true;
                    }
                }
            }

            infoTipObj.counter++;
            return false;
        } else {
            topCondition.call(this, infoTipObj);
            return true;
        }
    }
    var tooltipProto = {
        open: function() {
            //direction for tooltip

            var commonParam = t.commonParam = {};

            if (typeof this.toolTipCont == 'undefined') {
                var toolTipCont = this.toolTipCont = $('<div class="nttp_tooltipContainer">');
                toolTipCont.appendTo('body');
                var classes = this.options['class'];
                var tooltipClases = classes.replace(/\,/g, ' ');
                toolTipCont.addClass(tooltipClases);
            }
            var tooltipWidth = $('.nttp_tooltipContainer');
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

            var listVal = this.node.attr('tooltip')
            var ttContnt = this.options.list[listVal];
            $(this.toolTipCont).css('max-width', commonParam.wrapElem.width() / 2)
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
            commonParam.horizontal_distance = (viewportRight - myRight);
            commonParam.vertical_distance = (viewportBottom - myBottom);
            /* Responsive end*/

            setTooltipPosition.call(this, commonParam.ttDirection, commonParam)

            prevOpen ? prevOpen.close() : '';
            toolTipCont.fadeIn();
            prevOpen = this;

            //   (this.options.open.success)(this.node, toolTipCont);
        },
        close: function() {
            this.toolTipCont.hide()
        }

    }
    var constructor = function(options, node) {
        initOptions.call(this, options);
        this.node = node;
        initFunctionality.call(this);
    }
    constructor.prototype = tooltipProto;

    return function(options) {
        $.each(this, function(index, value) {
            if (!$(value).data('tooltip')) {
                var tooltipinfoTipObject = new constructor(options, $(value));
                $(value).data('tooltip', tooltipinfoTipObject)
            }
        })
        return this.data('tooltip');
    }
}(jQuery))
