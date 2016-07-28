Tooltip (version : v1.0.0)
=========
A customized and responsive tooltip whose directions, animations can be customized.


-------------------------------------------------------
-------------------------------------------------------

## Browser Support
* Internet Explorer 7+
* Chrome 14+
* Firefox 3.5+
* Safari 4+
* Opera 10.6+

-------------------------------------------------------
-------------------------------------------------------

## Size
* Production (minified): 5 KB
* Development (non-minified) : 13 KB



-------------------------------------------------------
-------------------------------------------------------

## Getting Started

* Add required HTML

```HTML
	<div>
			<a href="javascript:void(0);"  tooltip="1001">Click for tooltip</a><br/>
			<input type="text"  tooltip="1001" />
			<a href="javascript:void(0);" tooltip="1002">Click for tooltip</a><br/>
			<a href="javascript:void(0);" tooltip="1003">Click for tooltip</a><br/>
			<a href="javascript:void(0);" tooltip="1004">Click for tooltip</a><br/>
			
	</div>

	var Options = {
			order : ['left','right'],
				list : tooltipList,
				'class' : "",
				dir : "left",
				tipWidth : 5,
				tipHeight : 5,
				
				wrapper : 'body',
				open: {
					event : "mouseover",
					anim:"bounceInDown,bounceInLeft,bounceInUp,bounceInRight"
				},
					close:{
						event : "mouseout",
						node  : '.closetooltp',
						anim : 'fadeOut'
						
						
							}
				};
$('.abcd').tooltip(Options);

var tooltipList ={
				1001 : 'this is toolTip one. <a href="">This is link inside tooltip</a>this is toolTip one. <a href="">This is link inside tooltip</a><em class=""></em>',
				1002 : 'this is toolTip two<small class="closetooltp"></small><a href="">This is link inside tooltip</a>this is toolTip one. <a href="">This is link inside tooltip</a><em class=""></em> ',
				1003 : 'this is toolTip three<br/>this is toolTip thre<em class="" name=""></em> ',
				1004 : 'this is toolTip four <small class="closetooltp"></small><em class=""></em> ',
					1005 : 'this is toolTip five<br/>this is toolTip fivethis is toolTip five<br/>this is toolTip five<br/> < <small class="closetooltp"></small><em class=""></em> '
				}
			
```
tooltip="1001"---- list of messages to be displayed
* Include the Style Sheet(tooltip.css)


-------------------------------------------------------
-------------------------------------------------------


## Parameters (Options)

Name  | Default Value | Discription
----|-----|-----
Order  |['left','top','right','bottom']|Directions priorities on which tooltip be displayed. 
List | tooltiplist | a list of message to be displayed in tooltip.
dir |'left' | default direction to check first.
tipWidth/tipHeight |20 | customise tooltip tip height and width (in pixels).
wrapper |'body' | a wrapper element relative to which the tooltip be displayed.
open | event | any event (e.g 'mouseover','click')
open | anim| any animations (e.g 'bounceInDown','bounceInLeft','bounceInUp')
close | event | Any event (e.g 'mouseout','click' etc)
close | anim | Any event (e.g 'fadeOut' etc)
close | node | Any node on which close event of tooltip will be binded
success | callback | callback after tooltip opens, returns two param(node,tooltipcontainer)

------------------------------------------------------
------------------------------------------------------

## Initializing

$('class/id').tooltip(Options);