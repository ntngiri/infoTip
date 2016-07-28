<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>ToolTip</title>

    <style type="text/css">
        /*blue #0078c9
orange #ff5e3c      */
        
        ::selection {
            background: #0078c9;
            color: #fff;
        }
        
        ::-moz-selection {
            background: #0078c9;
            color: #fff;
        }
        
        pre {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            padding: 20px !important;
            background: #e6eff1;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.0);
            margin-bottom: 4em;
            white-space: pre-wrap;
        }
        
        pre:hover {
            background: #fff;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        }
        
        .str {
            color: #080
        }
        /* string content */
        
        .kwd {
            color: #008
        }
        /* a keyword */
        
        .com {
            color: #800
        }
        /* a comment */
        
        .typ {
            color: #606
        }
        /* a type name */
        
        .lit {
            color: #066
        }
        /* a literal value */
        /* punctuation, lisp open bracket, lisp close bracket */
        
        .pun,
        .opn,
        .clo {
            color: #660
        }
        
        .tag {
            color: #008
        }
        /* a markup tag name */
        
        .atn {
            color: #606
        }
        /* a markup attribute name */
        
        .atv {
            color: #080
        }
        /* a markup attribute value */
        
        .dec,
        .var {
            color: #606
        }
        /* a declaration; a variable name */
        
        .fun {
            color: red
        }
        /* a function name */
        
        section {
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
            border-bottom: 2px dashed #e5eaeb;
            padding: 6em;
            background: #fff;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }
        
        body {
            color: #5d6365;
            font-size: 1em;
            line-height: 1.6em;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            background: #5d6365;
        }
        
        tr {
            padding: 10px;
        }
        
        tr:nth-child(odd) {
            background: #f4f5f7;
        }
        
        td {
            padding: 2em !important;
            font-size: 20px !important;
        }
        
        .demos span {
            display: block;
            border: 3px solid #ff5e3c;
            border-radius: 100%;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            width: 5em;
            height: 5em;
            background: #ff5e3c;
            color: #fff;
            font-size: 0.6em;
            line-height: 1em;
            font-weight: 700;
            padding: 1.8em 0 0 0;
            text-align: center;
            margin: -1.4em 1em 0 0;
            text-transform: uppercase;
            float: left;
        }
    </style>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="src/c/demo.css" />
    <link type="text/css" href="src/animates.css"/>
    <link type="text/css" href="src/c/reset.css"/>
    <link type="text/css" rel="stylesheet" href="src/c/tooltip.css" />
    <link type="text/css" rel="stylesheet" href="src/c/css3_v1.css" />
    <script src="src/j/jquery-1.10.2.js"></script>
    <script src="src/j/tooltip_v2.js"></script>
</head>

<body>
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">InfoTip.JS</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">Documentation</a>
                    </li>
                    <li>
                        <a href="post.html">More Plugins</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    <header class="intro-header" style="background-image: url('src/resources/tooltip.jpg');line-height:20px">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h1>InfoTip</h1>
                        <hr class="small">
                        <span class="subheading">A jQuery Responsive tooltip</span>
                        <div class="btn btn-default">Download</div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="col-sm-6 demos ">
                    <span class="targetStyle abcd" tooltip="1001" id="default">Default</span><em>Default settings</em>
                </div>
                <div class="col-sm-6 demos">
                    <span class="targetStyle abcd" tooltip="1001" id="fixed">Fixed</span><em>Fixed Position (i.e top in this case)</em>
                </div>

            </div>
        </div>
        <hr>
        <div class="row">

            <div class="col-sm-12">
                <div class="col-sm-6 demos ">
                    <span class="targetStyle abcd" tooltip="1001" id="custom">click</span><em>Custom Show/Hide triggers</em>
                </div>
                <div class="col-sm-6 demos">
                    <span class="targetStyle abcd" tooltip="1001" id="customAnimation">Default</span><em>Custom Animation</em>
                </div>
                <hr>

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-12">
                <div class="col-sm-6 demos ">
                    <span class="targetStyle abcd" tooltip="1001" id="callBack">Callback</span><em>Callback Option</em>
                </div>
                
            </div>
            <!-- Pager -->

        </div>
    </div>

    <hr>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-8">
                        <h1>Getting Started</h1>
                        <div>
                            <h3>1. Load jQuery and include InfoTip plugin files</h3></div>
                    </div>
                    <div class="col-sm-12">
                        <h5>Move infoTip.css and infoTip.js to your root's CSS and JavaScript directories. Next, load jQuery and include InfoTip's CSS and JavaScript files inside of your tags:</h5></div>
                    <div class="col-sm-12">
                        <pre class="prettyprint"><span class="tag">&lt;head&gt;</span><span class="pln">
...

    </span><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/css"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"css/infoTip.css"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">

    </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"http://code.jquery.com/jquery-1.7.0.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span><span class="pln">
    </span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/javascript"</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"js/infoTip.js"</span><span class="tag">&gt;&lt;/script&gt;</span><span class="pln">

...
</span><span class="tag">&lt;/head&gt;</span></pre>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-8">
                        <div>
                            <h3>2. Set up your HTML</h3></div>
                    </div>
                    <div class="col-sm-12">
                        <h5>In order for infoTip to work, we first need to add the .infotip class (or whatever class / means of selection you'd like to use) to whatever element we wish to have a infoTip. Next, we'll set the infotip attribute to whatever we'd like our infoTip to say. Here are a few examples:</h5></div>
                    <div class="col-sm-12">
                        <pre class="prettyprint"><span class="tag">&lt;img</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"my-image.png"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"infotip"</span><span class="pln"> </span><span class="atn">infotip</span><span class="pun">=</span><span class="atv">"This is my image's tooltip message!"</span><span class="pln"> </span><span class="tag">/&gt;</span></pre>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-8">
                        <div>
                            <h3>3. Activate InfoTip</h3></div>
                    </div>
                    <div class="col-sm-12">
                        <h5>The last thing we have to do is activate the plugin. To do this, add the following script (using whatever selector you'd like - in this case we're using the .infotip class):</h5></div>
                    <div class="col-sm-12">
                        <pre class="prettyprint"><span class="tag">&lt;head&gt;</span><span class="pln">

    ...

    </span><span class="tag">&lt;script&gt;</span><span class="pln">
        $</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">ready</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            $</span><span class="pun">(</span><span class="str">'.infotip'</span><span class="pun">).</span><span class="pln">infotip</span><span class="pun">();</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
    </span><span class="tag">&lt;/script&gt;</span><span class="pln">
</span><span class="tag">&lt;/head&gt;</span></pre>
                    </div>
                </div>
            </div>
    </section>

    <section id="options">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Options</h2>
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Order</h4></td>
                                <td>left, top, right, bottom</td>
                                <td>Directions priorities on which infotip be displayed.</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>List</h4></td>
                                <td>tooltiplist</td>
                                <td>a list of message to be displayed in infotip.</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>dir</h4></td>
                                <td>left</td>
                                <td>default direction to check first.</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>tipWidth/tipHeight</h4></td>
                                <td>20</td>
                                <td>customise tooltip tip height and width (in pixels).</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>wrapper</h4></td>
                                <td>'body'</td>
                                <td>a wrapper element relative to which the tooltip be displayed.</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>open</h4></td>
                                <td>event</td>
                                <td>any event (e.g 'mouseover','click')</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>open</h4></td>
                                <td>anim</td>
                                <td>any animations (e.g 'bounceInDown','bounceInLeft','bounceInUp')</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>close</h4></td>
                                <td>event</td>
                                <td>any event (e.g 'mouseover','click')</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>close</h4></td>
                                <td>anim</td>
                                <td>any animations (e.g 'bounceInDown','bounceInLeft','bounceInUp')</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>close</h4></td>
                                <td>node</td>
                                <td>Any node on which close event of tooltip will be binded</td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>success</h4></td>
                                <td>callback</td>
                                <td>callback after tooltip opens, returns two param(node,tooltipcontainer)</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>



    <!-- 
    <div class="wrapper">
    <a href="javascript:void(0);" class="targetStyle abcd fl" tooltip="1001">Click for tooltip</a><br/>
    <input type="text"  class="targetStyle abcd fl" id="1" tooltip="1001" />    
    <a href="javascript:void(0);" class="targetStyle abcd fr" tooltip="1002">Click for tooltip</a><br/>
    <div style="clear:both;height:300px"></div>    
    <a href="javascript:void(0);" class="targetStyle abcd fl" tooltip="1003">Click for tooltip</a><br/>
    <a href="javascript:void(0);" class="targetStyle abcd fr" tooltip="1004">Click for tooltip</a><br/>
     <div style="clear:both"></div>
   
</div>
 <a href="javascript:void(0);" class="targetStyle abcde fr " tooltip="1005" style="margin-right:100px">Click for tooltip</a>
 
 -->

    <script>
        $('document').ready(function() {
            var tooltipList = {
                1001: 'this is toolTip one. <a href="">This is link inside tooltip</a>this is toolTip one. <a href="">This is link inside tooltip</a><em class=""></em>',
                1002: 'this is toolTip two<small class="closetooltp"></small><a href="">This is link inside tooltip</a>this is toolTip one. <a href="">This is link inside tooltip</a><em class=""></em> ',
                1003: 'this is toolTip three<br/>this is toolTip thre<em class="" name=""></em> ',
                1004: 'this is toolTip four <small class="closetooltp"></small><em class=""></em> ',
                1005: 'this is toolTip five<br/>this is toolTip fivethis is toolTip five<br/>this is toolTip five<br/> < <small class="closetooltp"></small><em class=""></em> '
            }

             var ttOptions = {
            //     order: ['left', 'top', 'right', 'bottom'],
                 list: tooltipList,

            //     'class': "",
            //     dir: "top",
            //     tipWidth: 5,
            //     tipHeight: 5,

            //     wrapper: 'body',
            //     open: {
            //         success: function(node, container) {},
            //         event: "mouseover",
            //         anim: "bounceInDown,bounceInLeft,bounceInUp,bounceInRight"
            //     },
            //     close: {
            //         event: "mouseout",
            //         node: '.closetooltp',
            //         anim: 'fadeOut'


            //     }
             };
            $('#default').infotip(ttOptions); 
            $('#fixed').infotip({'dir':'top','list': tooltipList});

            var customTriggers = {
                 list: tooltipList,
                 open:{
                    event: 'click'
                 },
                 close:{
                    event:'mouseout'
                 }
            };

            $('#custom').infotip(customTriggers);

            var customAnim = {
                list: tooltipList,
                open:{
                    anim:'bounceInDown'
                },
                close:{
                    anim: 'shake'
                }
            }

            $('#customAnimation').infotip(customAnim);
            
             var callBackObj = {
                list: tooltipList,
                open:{
                    success:function(){
                        alert('tooltip open');
                    },
                    anim:''
                },
                close:{
                    anim: ''
                }
            }

            $('#callBack').infotip(callBackObj);
        });
    </script>


</body>

</html>