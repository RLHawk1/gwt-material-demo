$wnd.gwtmaterialdemo.runAsyncCallback2("function $clinit_MaterialBubble(){\n  $clinit_MaterialBubble = emptyMethod;\n  !startupState && (startupState = new StartupState$DebugState);\n  if (startupState) {\n    $clinit_MaterialDesignBase();\n    injectJs(($clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer() , bubbleJsDebug), false, true);\n    injectCss(($clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer() , bubbleCssDebug));\n  }\n   else {\n    $clinit_MaterialDesignBase();\n    injectJs(($clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer() , bubbleJs), true, false);\n    injectCss(($clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer() , bubbleCss));\n  }\n}\n\nfunction $initialize_0(this$static){\n  var options;\n  options = new $wnd.Object;\n  options.position = castTo(this$static.positionMixin.style_0, 273).cssClass;\n  options.color = setupComputedBackgroundColor((!this$static.colorsMixin_0 && (this$static.colorsMixin_0 = new ColorsMixin(this$static)) , this$static.colorsMixin_0).bgColor);\n  $wnd.$(($clinit_DOM() , this$static.element_0)).bubble(options);\n}\n\nfunction $setPosition_2(this$static, position){\n  $setCssName(this$static.positionMixin, position);\n  $initialize_0(this$static);\n}\n\nfunction MaterialBubble(){\n  $clinit_MaterialBubble();\n  MaterialWidget_1.call(this, $doc.createElement('span'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['bubble']));\n  this.triangle = new MaterialWidget_0($doc.createElement('div'));\n  $setStyleName(this.triangle, 'triangle');\n  this.positionMixin = new CssNameMixin(this.triangle);\n  $setCssName(this.positionMixin, ($clinit_Position() , LEFT_7));\n  $add_14(this, this.triangle);\n  $setShadow_0((!this.shadowMixin && (this.shadowMixin = new ShadowMixin(this)) , this.shadowMixin), 1);\n}\n\ndefineClass(301, 24, $intern_65, MaterialBubble);\n_.initialize_0 = function initialize_1(){\n  $initialize_0(this);\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubble_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubble', 301);\nvar bubbleCss, bubbleJs;\nfunction MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2401, 1, {}, MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_14(){\n  return 'bubbleCss';\n}\n;\n_.getText = function getText_5(){\n  return '.bubble{margin-left: 60px; float: left; background: red; color: #263238; position: relative; margin: 8px 0 15px 0; height: auto; padding: 8px 10px; max-width: 40%; display: block; word-wrap: break-word; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; z-index: 1; font-size: 0.9rem; } .triangle{position: absolute; z-index: 998; border: 6px solid transparent; opacity: 0.8; } .triangle.right{top: 15px; right: -12px; } .triangle.left{top: 15px; left: -12px; } .triangle.top, .triangle.bottom{left: calc(50% - 4px); } .triangle.top{top: -12px; } .triangle.bottom{bottom: -12px; }';\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleClientBundle_default_InlineClientBundleGenerator/1', 2401);\nfunction MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2(){\n}\n\ndefineClass(2402, 1, {}, MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2);\n_.getName = function getName_15(){\n  return 'bubbleJs';\n}\n;\n_.getText = function getText_6(){\n  return \"$.fn.bubble = function (options){var position = options.position, color = options.color; triangle = $(this).find('.triangle'); if(position === 'left'){triangle.css('borderRightColor', color); }else if(position === 'right'){triangle.css('borderLeftColor', color); }else if(position === 'top'){triangle.css('borderBottomColor', color); }else if(position === 'bottom'){triangle.css('borderTopColor', color); } };\";\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleClientBundle_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleClientBundle_default_InlineClientBundleGenerator/2', 2402);\nfunction $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer(){\n  $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleCssInitializer = emptyMethod;\n  bubbleCss = new MaterialBubbleClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer(){\n  $clinit_MaterialBubbleClientBundle_default_InlineClientBundleGenerator$bubbleJsInitializer = emptyMethod;\n  bubbleJs = new MaterialBubbleClientBundle_default_InlineClientBundleGenerator$2;\n}\n\nvar bubbleCssDebug, bubbleJsDebug;\nfunction MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2399, 1, {}, MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_16(){\n  return 'bubbleCssDebug';\n}\n;\n_.getText = function getText_7(){\n  return '.bubble{\\r\\n    margin-left: 60px;\\r\\n    float: left;\\r\\n    background: red;\\r\\n    color: #263238;\\r\\n    position: relative;\\r\\n    margin: 8px 0 15px 0;\\r\\n    height: auto;\\r\\n    padding: 8px 10px;\\r\\n    max-width: 40%;\\r\\n    display: block;\\r\\n    word-wrap: break-word;\\r\\n    border-radius: 3px;\\r\\n    -moz-border-radius: 3px;\\r\\n    -webkit-border-radius: 3px;\\r\\n    z-index: 1;\\r\\n    font-size: 0.9rem;\\r\\n}\\r\\n.triangle{\\r\\n    position: absolute;\\r\\n    z-index: 998;\\r\\n    border: 6px solid transparent;\\r\\n    opacity: 0.8;\\r\\n}\\r\\n.triangle.right{\\r\\n    top: 15px;\\r\\n    right: -12px;\\r\\n}\\r\\n.triangle.left{\\r\\n    top: 15px;\\r\\n    left: -12px;\\r\\n}\\r\\n.triangle.top, .triangle.bottom{\\r\\n    left: calc(50% - 4px);\\r\\n}\\r\\n.triangle.top{\\r\\n    top: -12px;\\r\\n}\\r\\n.triangle.bottom{\\r\\n    bottom: -12px;\\r\\n}';\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleDebugClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator/1', 2399);\nfunction MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2(){\n}\n\ndefineClass(2400, 1, {}, MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2);\n_.getName = function getName_17(){\n  return 'bubbleJsDebug';\n}\n;\n_.getText = function getText_8(){\n  return \"$.fn.bubble = function (options){\\r\\n\\r\\n    var position = options.position,\\r\\n        color = options.color;\\r\\n    triangle = $(this).find('.triangle');\\r\\n\\r\\n    if(position === 'left'){\\r\\n        triangle.css('borderRightColor', color);\\r\\n    }else if(position === 'right'){\\r\\n        triangle.css('borderLeftColor', color);\\r\\n    }else if(position === 'top'){\\r\\n        triangle.css('borderBottomColor', color);\\r\\n    }else if(position === 'bottom'){\\r\\n        triangle.css('borderTopColor', color);\\r\\n    }\\r\\n};\";\n}\n;\nvar Lgwt_material_design_addins_client_bubble_MaterialBubbleDebugClientBundle_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('gwt.material.design.addins.client.bubble', 'MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator/2', 2400);\nfunction $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer(){\n  $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleCssDebugInitializer = emptyMethod;\n  bubbleCssDebug = new MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer(){\n  $clinit_MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$bubbleJsDebugInitializer = emptyMethod;\n  bubbleJsDebug = new MaterialBubbleDebugClientBundle_default_InlineClientBundleGenerator$2;\n}\n\nfunction BubblePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(829, 59, $intern_58, BubblePresenter);\n_.onReveal = function onReveal_4(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Bubble', 'Addin component for chat module, it display a good bubble view of messages within the chat module.', 'addins/bubble/BubbleView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubblePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubblePresenter', 829);\nfunction BubbleView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_3(new BubbleView_BinderImpl$Widgets));\n}\n\ndefineClass(1056, 62, $intern_59, BubbleView);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView', 1056);\nfunction $build_f_HTMLPanel1_3(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialRow13, f_MaterialTitle3, f_PrettyPre4, sb, f_MaterialTitle6, f_MaterialRow7, f_MaterialImage8, f_bubble$MaterialBubble9, f_PrettyPre12, sb_0, f_MaterialTitle14, f_MaterialRow15, f_MaterialCard16, f_MaterialPanel17, f_MaterialCardContent20, f_PrettyPre46, sb_1, f_MaterialLabel10, f_MaterialLabel11, f_MaterialIcon18, f_MaterialIcon19, f_MaterialRow21, f_MaterialImage22, f_bubble$MaterialBubble23, f_MaterialLabel24, f_MaterialLabel25, f_MaterialRow26, f_MaterialImage27, f_bubble$MaterialBubble28, f_MaterialLabel29, f_MaterialLabel30, f_MaterialRow31, f_MaterialImage32, f_bubble$MaterialBubble33, f_MaterialLabel34, f_MaterialLabel35, f_MaterialRow36, f_MaterialImage37, f_bubble$MaterialBubble38, f_MaterialLabel39, f_MaterialLabel40, f_MaterialRow41, f_MaterialImage42, f_bubble$MaterialBubble43, f_MaterialLabel44, f_MaterialLabel45;\n  f_HTMLPanel1 = new HTMLPanel($html4_0(this$static.domId0, this$static.domId1, this$static.domId2).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Usage'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> \\u2003&lt;ma:bubble.MaterialBubble textColor=\"WHITE\" backgroundColor=\"RED\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> &lt;/ma:bubble.MaterialBubble&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element_0, 'lang-xml', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_14(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $setText_13(f_MaterialTitle6.paragraph, \"You can position the bubble by adding : position='LEFT,RIGHT,TOP or BOTTOM'\") , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('Usage'))).html_0) , f_MaterialTitle6)) , $add_14(f_MaterialRow5, (f_MaterialRow7 = new MaterialRow , $add_14(f_MaterialRow7, (f_MaterialImage8 = new MaterialImage , f_MaterialImage8.element_0.style['marginRight'] = ($clinit_Style$Unit() , '12.0px') , $setBackgroundColor(f_MaterialImage8, ($clinit_Color() , RED)) , $setShadow_0((!f_MaterialImage8.shadowMixin && (f_MaterialImage8.shadowMixin = new ShadowMixin(f_MaterialImage8)) , f_MaterialImage8.shadowMixin), 1) , f_MaterialImage8.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage8, ($clinit_Style$Float() , LEFT)) , $setOn((!f_MaterialImage8.circleMixin && (f_MaterialImage8.circleMixin = new ToggleStyleMixin(f_MaterialImage8, 'circle')) , f_MaterialImage8.circleMixin), true) , $setTextColor(f_MaterialImage8, WHITE) , $setUrl_3(f_MaterialImage8.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ccdd322433737.5631e853db4a9.png') , f_MaterialImage8.element_0.style['marginTop'] = '8.0px' , f_MaterialImage8.element_0.style['height'] = '40px' , f_MaterialImage8)) , $add_14(f_MaterialRow7, (f_bubble$MaterialBubble9 = new MaterialBubble , $add_14(f_bubble$MaterialBubble9, (f_MaterialLabel10 = new MaterialLabel , $setText_6(f_MaterialLabel10.textMixin, 'Hello there, How are you doing?') , f_MaterialLabel10)) , $add_14(f_bubble$MaterialBubble9, (f_MaterialLabel11 = new MaterialLabel , $setFontSize_1(f_MaterialLabel11.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel11.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel11, RIGHT) , f_MaterialLabel11)) , $setBackgroundColor(f_bubble$MaterialBubble9, RED) , $setPosition_2(f_bubble$MaterialBubble9, ($clinit_Position() , LEFT_7)) , $setFloat(f_bubble$MaterialBubble9, LEFT) , $setTextColor(f_bubble$MaterialBubble9, WHITE) , f_bubble$MaterialBubble9)) , f_MaterialRow7.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow7)) , $add_14(f_MaterialRow5, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;ma:bubble.MaterialBubble textColor=\"WHITE\" backgroundColor=\"RED\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> &lt;/ma:bubble.MaterialBubble&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-xml', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_14(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setText_13(f_MaterialTitle14.paragraph, 'Here is a sample card with chat feature implementing bubble addin component') , $setInnerHTML($getElement(f_MaterialTitle14.header), (new SafeHtmlString(htmlEscape('Example'))).html_0) , f_MaterialTitle14)) , $add_14(f_MaterialRow13, (f_MaterialRow15 = new MaterialRow , $add_14(f_MaterialRow15, (f_MaterialCard16 = new MaterialCard , $add_14(f_MaterialCard16, (f_MaterialPanel17 = new MaterialPanel , $add_14(f_MaterialPanel17, (f_MaterialIcon18 = new MaterialIcon , $setIconType_4(f_MaterialIcon18, ($clinit_IconType() , MORE_VERT)) , $setFloat(f_MaterialIcon18, RIGHT) , $setTextColor(f_MaterialIcon18, WHITE) , f_MaterialIcon18)) , $add_14(f_MaterialPanel17, (f_MaterialIcon19 = new MaterialIcon , $setIconType_4(f_MaterialIcon19, CLOSE) , $setFloat(f_MaterialIcon19, RIGHT) , $setTextColor(f_MaterialIcon19, WHITE) , f_MaterialIcon19)) , f_MaterialPanel17.element_0.style['padding'] = '12.0px' , $setBackgroundColor(f_MaterialPanel17, BLUE_DARKEN_2) , $setOverflow(f_MaterialPanel17, ($clinit_Style$Overflow() , HIDDEN_0)) , f_MaterialPanel17)) , $add_14(f_MaterialCard16, (f_MaterialCardContent20 = new MaterialCardContent , $add_14(f_MaterialCardContent20, (f_MaterialRow21 = new MaterialRow , $add_14(f_MaterialRow21, (f_MaterialImage22 = new MaterialImage , f_MaterialImage22.element_0.style['marginRight'] = '12.0px' , $setBackgroundColor(f_MaterialImage22, BLUE_ACCENT_1) , $setShadow_0((!f_MaterialImage22.shadowMixin && (f_MaterialImage22.shadowMixin = new ShadowMixin(f_MaterialImage22)) , f_MaterialImage22.shadowMixin), 1) , f_MaterialImage22.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage22, LEFT) , $setOn((!f_MaterialImage22.circleMixin && (f_MaterialImage22.circleMixin = new ToggleStyleMixin(f_MaterialImage22, 'circle')) , f_MaterialImage22.circleMixin), true) , $setUrl_3(f_MaterialImage22.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage22.element_0.style['marginTop'] = '8.0px' , f_MaterialImage22.element_0.style['height'] = '40px' , f_MaterialImage22)) , $add_14(f_MaterialRow21, (f_bubble$MaterialBubble23 = new MaterialBubble , $add_14(f_bubble$MaterialBubble23, (f_MaterialLabel24 = new MaterialLabel , $setText_6(f_MaterialLabel24.textMixin, 'Hello there, How are you doing?') , f_MaterialLabel24)) , $add_14(f_bubble$MaterialBubble23, (f_MaterialLabel25 = new MaterialLabel , $setFontSize_1(f_MaterialLabel25.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel25.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel25, RIGHT) , f_MaterialLabel25)) , $setBackgroundColor(f_bubble$MaterialBubble23, BLUE_ACCENT_1) , $setPosition_2(f_bubble$MaterialBubble23, LEFT_7) , $setFloat(f_bubble$MaterialBubble23, LEFT) , f_bubble$MaterialBubble23)) , f_MaterialRow21.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow21)) , $add_14(f_MaterialCardContent20, (f_MaterialRow26 = new MaterialRow , $add_14(f_MaterialRow26, (f_MaterialImage27 = new MaterialImage , $setBackgroundColor(f_MaterialImage27, BLUE_DARKEN_3) , $setShadow_0((!f_MaterialImage27.shadowMixin && (f_MaterialImage27.shadowMixin = new ShadowMixin(f_MaterialImage27)) , f_MaterialImage27.shadowMixin), 1) , f_MaterialImage27.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage27, RIGHT) , $setOn((!f_MaterialImage27.circleMixin && (f_MaterialImage27.circleMixin = new ToggleStyleMixin(f_MaterialImage27, 'circle')) , f_MaterialImage27.circleMixin), true) , $setUrl_3(f_MaterialImage27.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage27.element_0.style['marginTop'] = '8.0px' , f_MaterialImage27.element_0.style['marginLeft'] = '12.0px' , f_MaterialImage27.element_0.style['height'] = '40px' , f_MaterialImage27)) , $add_14(f_MaterialRow26, (f_bubble$MaterialBubble28 = new MaterialBubble , $add_14(f_bubble$MaterialBubble28, (f_MaterialLabel29 = new MaterialLabel , $setText_6(f_MaterialLabel29.textMixin, 'Hi there, Im fine, thank you. How about you?') , f_MaterialLabel29)) , $add_14(f_bubble$MaterialBubble28, (f_MaterialLabel30 = new MaterialLabel , $setFontSize_1(f_MaterialLabel30.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel30.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel30, RIGHT) , f_MaterialLabel30)) , $setBackgroundColor(f_bubble$MaterialBubble28, BLUE_DARKEN_3) , $setPosition_2(f_bubble$MaterialBubble28, RIGHT_8) , $setFloat(f_bubble$MaterialBubble28, RIGHT) , $setTextColor(f_bubble$MaterialBubble28, WHITE) , f_bubble$MaterialBubble28)) , f_MaterialRow26.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow26)) , $add_14(f_MaterialCardContent20, (f_MaterialRow31 = new MaterialRow , $add_14(f_MaterialRow31, (f_MaterialImage32 = new MaterialImage , $setBackgroundColor(f_MaterialImage32, BLUE_DARKEN_3) , $setShadow_0((!f_MaterialImage32.shadowMixin && (f_MaterialImage32.shadowMixin = new ShadowMixin(f_MaterialImage32)) , f_MaterialImage32.shadowMixin), 1) , f_MaterialImage32.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage32, RIGHT) , $setOn((!f_MaterialImage32.circleMixin && (f_MaterialImage32.circleMixin = new ToggleStyleMixin(f_MaterialImage32, 'circle')) , f_MaterialImage32.circleMixin), true) , $setUrl_3(f_MaterialImage32.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage32.element_0.style['marginTop'] = '8.0px' , f_MaterialImage32.element_0.style['marginLeft'] = '12.0px' , f_MaterialImage32.element_0.style['height'] = '40px' , f_MaterialImage32)) , $add_14(f_MaterialRow31, (f_bubble$MaterialBubble33 = new MaterialBubble , $add_14(f_bubble$MaterialBubble33, (f_MaterialLabel34 = new MaterialLabel , $setText_6(f_MaterialLabel34.textMixin, 'Me too, Im doing good.') , f_MaterialLabel34)) , $add_14(f_bubble$MaterialBubble33, (f_MaterialLabel35 = new MaterialLabel , $setFontSize_1(f_MaterialLabel35.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel35.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel35, RIGHT) , f_MaterialLabel35)) , $setBackgroundColor(f_bubble$MaterialBubble33, BLUE_DARKEN_3) , $setPosition_2(f_bubble$MaterialBubble33, RIGHT_8) , $setFloat(f_bubble$MaterialBubble33, RIGHT) , $setTextColor(f_bubble$MaterialBubble33, WHITE) , f_bubble$MaterialBubble33)) , f_MaterialRow31.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow31)) , $add_14(f_MaterialCardContent20, (f_MaterialRow36 = new MaterialRow , $add_14(f_MaterialRow36, (f_MaterialImage37 = new MaterialImage , f_MaterialImage37.element_0.style['marginRight'] = '12.0px' , $setBackgroundColor(f_MaterialImage37, BLUE_ACCENT_1) , $setShadow_0((!f_MaterialImage37.shadowMixin && (f_MaterialImage37.shadowMixin = new ShadowMixin(f_MaterialImage37)) , f_MaterialImage37.shadowMixin), 1) , f_MaterialImage37.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage37, LEFT) , $setOn((!f_MaterialImage37.circleMixin && (f_MaterialImage37.circleMixin = new ToggleStyleMixin(f_MaterialImage37, 'circle')) , f_MaterialImage37.circleMixin), true) , $setUrl_3(f_MaterialImage37.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage37.element_0.style['marginTop'] = '8.0px' , f_MaterialImage37.element_0.style['height'] = '40px' , f_MaterialImage37)) , $add_14(f_MaterialRow36, (f_bubble$MaterialBubble38 = new MaterialBubble , $add_14(f_bubble$MaterialBubble38, (f_MaterialLabel39 = new MaterialLabel , $setText_6(f_MaterialLabel39.textMixin, 'Would you want to go to Philippines?') , f_MaterialLabel39)) , $add_14(f_bubble$MaterialBubble38, (f_MaterialLabel40 = new MaterialLabel , $setFontSize_1(f_MaterialLabel40.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel40.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel40, RIGHT) , f_MaterialLabel40)) , $setBackgroundColor(f_bubble$MaterialBubble38, BLUE_ACCENT_1) , $setPosition_2(f_bubble$MaterialBubble38, LEFT_7) , $setFloat(f_bubble$MaterialBubble38, LEFT) , f_bubble$MaterialBubble38)) , f_MaterialRow36.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow36)) , $add_14(f_MaterialCardContent20, (f_MaterialRow41 = new MaterialRow , $add_14(f_MaterialRow41, (f_MaterialImage42 = new MaterialImage , $setBackgroundColor(f_MaterialImage42, BLUE_DARKEN_3) , $setShadow_0((!f_MaterialImage42.shadowMixin && (f_MaterialImage42.shadowMixin = new ShadowMixin(f_MaterialImage42)) , f_MaterialImage42.shadowMixin), 1) , f_MaterialImage42.element_0.style['width'] = '40px' , $setFloat(f_MaterialImage42, RIGHT) , $setOn((!f_MaterialImage42.circleMixin && (f_MaterialImage42.circleMixin = new ToggleStyleMixin(f_MaterialImage42, 'circle')) , f_MaterialImage42.circleMixin), true) , $setUrl_3(f_MaterialImage42.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage42.element_0.style['marginTop'] = '8.0px' , f_MaterialImage42.element_0.style['marginLeft'] = '12.0px' , f_MaterialImage42.element_0.style['height'] = '40px' , f_MaterialImage42)) , $add_14(f_MaterialRow41, (f_bubble$MaterialBubble43 = new MaterialBubble , $add_14(f_bubble$MaterialBubble43, (f_MaterialLabel44 = new MaterialLabel , $setText_6(f_MaterialLabel44.textMixin, 'Yes of course, I want to visit Philippines and take a tour.') , f_MaterialLabel44)) , $add_14(f_bubble$MaterialBubble43, (f_MaterialLabel45 = new MaterialLabel , $setFontSize_1(f_MaterialLabel45.fontSizeMixin, '0.6em') , $setText_6(f_MaterialLabel45.textMixin, '1/2/2016') , $setFloat(f_MaterialLabel45, RIGHT) , f_MaterialLabel45)) , $setBackgroundColor(f_bubble$MaterialBubble43, BLUE_DARKEN_3) , $setPosition_2(f_bubble$MaterialBubble43, RIGHT_8) , $setFloat(f_bubble$MaterialBubble43, RIGHT) , $setTextColor(f_bubble$MaterialBubble43, WHITE) , f_bubble$MaterialBubble43)) , f_MaterialRow41.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow41)) , f_MaterialCardContent20)) , $setBackgroundColor(f_MaterialCard16, BLUE) , $setGrid_0((!f_MaterialCard16.gridMixin && (f_MaterialCard16.gridMixin = new GridMixin(f_MaterialCard16)) , f_MaterialCard16.gridMixin), 'l5 m12 s12') , setStyleName(f_MaterialCard16.element_0, 'no-padding', true) , f_MaterialCard16.element_0.style['marginTop'] = '24.0px' , f_MaterialCard16.element_0.style['marginLeft'] = '24.0px' , f_MaterialCard16)) , f_MaterialRow15)) , $add_14(f_MaterialRow13, (f_PrettyPre46 = new PrettyPre , $setHTML_0(f_PrettyPre46, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003&lt;m:MaterialImage backgroundColor=\"BLUE_ACCENT_1\" marginRight=\"12\" marginTop=\"8\" float=\"LEFT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png\"/&gt;<br> \\u2003&lt;ma:bubble.MaterialBubble backgroundColor=\"BLUE_ACCENT_1\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"Would you want to go to Philippines?\"/&gt;<br>  \\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003&lt;/ma:bubble.MaterialBubble&gt;<br> &lt;/m:MaterialRow&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre46.element_0, 'lang-xml', true) , f_PrettyPre46)) , setStyleName(f_MaterialRow13.element_0, 'code', true) , f_MaterialRow13), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction BubbleView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1382, 1, {}, BubbleView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView_BinderImpl/Widgets', 1382);\nfunction $html4_0(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$) {\n    result0 = new BubblePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$) {\n    result = new BubbleView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$;\n}\n\ndefineClass(715, 1, $intern_110);\n_.onSuccess_0 = function onSuccess_4(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
