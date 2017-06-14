$wnd.gwtmaterialdemo.runAsyncCallback29("function FooterPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(908, 57, $intern_57, FooterPresenter);\n_.onReveal = function onReveal_49(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Footer', 'Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once hes finished scrolling through the current page or is looking for additional information about your website.', 'components/footer/FooterView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterPresenter', 908);\nfunction FooterView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_26(new FooterView_BinderImpl$Widgets));\n}\n\ndefineClass(1267, 60, $intern_58, FooterView);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView', 1267);\nfunction $build_f_HTMLPanel1_26(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialTitle3, f_MaterialFooter4, f_MaterialRow5, f_MaterialFooterCopyright10, style, f_PrettyPre12, sb, f_MaterialColumn6, f_MaterialTitle7, btnChat, f_MaterialColumn8, f_MaterialTitle9, btnDownloadPhonegap, f_MaterialLabel11;\n  f_HTMLPanel1 = new HTMLPanel($html2_1(this$static.domId0).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'We use flexbox to structure our html so that the footer is always on the bottom of the page.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Introduction'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialFooter4 = new MaterialFooter , $add_33(f_MaterialFooter4, (f_MaterialRow5 = new MaterialRow , $add_14(f_MaterialRow5, (f_MaterialColumn6 = new MaterialColumn , $add_14(f_MaterialColumn6, (f_MaterialTitle7 = new MaterialTitle , $setText_13(f_MaterialTitle7.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , $setInnerHTML($getElement(f_MaterialTitle7.header), (new SafeHtmlString(htmlEscape('Join The Discussion'))).html_0) , $setTextColor(f_MaterialTitle7, ($clinit_Color() , WHITE)) , f_MaterialTitle7)) , $add_14(f_MaterialColumn6, (btnChat = new MaterialButton , $setWaves(btnChat, ($clinit_WavesType() , LIGHT)) , $setText_9(btnChat.span_1, 'CHAT') , btnChat.span_1.attached || $add_14(btnChat, btnChat.span_1) , btnChat)) , $setGrid_0((!f_MaterialColumn6.gridMixin && (f_MaterialColumn6.gridMixin = new GridMixin(f_MaterialColumn6)) , f_MaterialColumn6.gridMixin), 's12 m6 l6') , f_MaterialColumn6)) , $add_14(f_MaterialRow5, (f_MaterialColumn8 = new MaterialColumn , $add_14(f_MaterialColumn8, (f_MaterialTitle9 = new MaterialTitle , $setText_13(f_MaterialTitle9.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('GWT Phonegap'))).html_0) , $setTextColor(f_MaterialTitle9, WHITE) , f_MaterialTitle9)) , $add_14(f_MaterialColumn8, (btnDownloadPhonegap = new MaterialButton , $setWaves(btnDownloadPhonegap, LIGHT) , $setText_9(btnDownloadPhonegap.span_1, 'GWT Material APK') , btnDownloadPhonegap.span_1.attached || $add_14(btnDownloadPhonegap, btnDownloadPhonegap.span_1) , btnDownloadPhonegap)) , $setGrid_0((!f_MaterialColumn8.gridMixin && (f_MaterialColumn8.gridMixin = new GridMixin(f_MaterialColumn8)) , f_MaterialColumn8.gridMixin), 's12 m6 l6') , f_MaterialColumn8)) , f_MaterialRow5)) , $add_33(f_MaterialFooter4, (f_MaterialFooterCopyright10 = new MaterialFooterCopyright , $add_34(f_MaterialFooterCopyright10, (f_MaterialLabel11 = new MaterialLabel , $setText_8(f_MaterialLabel11.textMixin, '\\xA9 2015 Copyright GWT Material') , f_MaterialLabel11)) , setStyleName(f_MaterialFooterCopyright10.element_0, 'footer-copyright', true) , f_MaterialFooterCopyright10)) , $addStyleName(f_MaterialFooter4, (style = ($clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16) , $ensureInjected_22(style) , 'BY3IKFC-s-a')) , f_MaterialFooter4)) , $add_14(f_MaterialRow2, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialFooter&gt;<br><br>  \\u2003&lt;m:MaterialRow&gt;<br> \\u2003\\u2003&lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle textColor=\"WHITE\" title=\"Join The Discussion\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnChat\" text=\"CHAT\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003\\u2003&lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle textColor=\"WHITE\" title=\"GWT Phonegap\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnDownloadPhonegap\" text=\"GWT Material APK\" waves=\"LIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br><br>  \\u2003&lt;m:MaterialFooterCopyright&gt;<br> \\u2003\\u2003&lt;m:MaterialLabel text=\"\\xA9 2015 Copyright GWT Material\" /&gt;<br> \\u2003&lt;/m:MaterialFooterCopyright&gt;<br> &lt;/m:MaterialFooter&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-xml', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction FooterView_BinderImpl$Widgets(){\n  var style;\n  style = ($clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16);\n  $ensureInjected_22(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(1658, 1, {}, FooterView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl/Widgets', 1658);\nvar style_16;\nfunction $ensureInjected_22(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    inject(($clinit_LocaleInfo() , '.BY3IKFC-s-a{padding-left:0!important;margin-bottom:20px}'));\n    return true;\n  }\n  return false;\n}\n\nfunction FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2343, 1, {}, FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_158(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2343);\nfunction $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_16 = new FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html2_1(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$) {\n    result0 = new FooterPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$) {\n    result = new FooterView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$;\n}\n\ndefineClass(805, 1, $intern_110);\n_.onSuccess_0 = function onSuccess_30(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(29);\n\n//# sourceURL=gwtmaterialdemo-29.js\n")