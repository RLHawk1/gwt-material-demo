$wnd.gwtmaterialdemo.runAsyncCallback41("function NotificationPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(898, 57, $intern_57, NotificationPresenter);\n_.onReveal = function onReveal_62(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Push Notifications', 'Push messaging provides a simple and effective way to re-engage with your users', 'pwa/notification/NotificationView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationPresenter', 898);\nfunction NotificationView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_20(new NotificationView_BinderImpl$Widgets));\n}\n\ndefineClass(1255, 60, $intern_58, NotificationView);\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView', 1255);\nfunction NotificationView$lambda$0$Type(){\n}\n\ndefineClass(2641, $wnd.Function, {}, NotificationView$lambda$0$Type);\n_.call_8 = function call_155(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Clicked', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$1$Type(){\n}\n\ndefineClass(2642, $wnd.Function, {}, NotificationView$lambda$1$Type);\n_.call_8 = function call_156(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$2$Type(){\n}\n\ndefineClass(2643, $wnd.Function, {}, NotificationView$lambda$2$Type);\n_.call_8 = function call_157(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Errored', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$3$Type(){\n}\n\ndefineClass(2644, $wnd.Function, {}, NotificationView$lambda$3$Type);\n_.call_8 = function call_158(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Showed', $intern_70, null);\n}\n;\nfunction $build_f_MaterialPanel1_20(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialRow8, f_MaterialRow11, f_MaterialRow14, f_MaterialRow17, f_MaterialTitle3, btnNotify, f_PrettyPre4, sb, f_MaterialTitle6, btnNotifyOptions, f_PrettyPre7, sb_0, f_MaterialTitle9, btnNotifyCallbacks, f_PrettyPre10, sb_1, f_MaterialTitle12, btnNotifyInteraction, f_PrettyPre13, sb_2, f_MaterialTitle15, btnCount, f_PrettyPre16, sb_3, f_MaterialTitle18, btnShow, btnClear, f_PrettyPre19, sb_4;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_14(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'Provides a simple way to notify your users.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Simple Push Notification'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (btnNotify = new MaterialButton , $setText_9(btnNotify.span_1, 'Notify') , btnNotify.span_1.attached || $add_14(btnNotify, btnNotify.span_1) , $addClickHandler(btnNotify, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnNotify)) , $add_14(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003PushNotification.create(\"Gwt Material Design\");' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre4.element_0), 'lang-java', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_14(f_MaterialPanel1, (f_MaterialRow5 = new MaterialRow , $add_14(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('Options'))).html_0) , f_MaterialTitle6)) , $add_14(f_MaterialRow5, (btnNotifyOptions = new MaterialButton , $setText_9(btnNotifyOptions.span_1, 'Notify with Options') , btnNotifyOptions.span_1.attached || $add_14(btnNotifyOptions, btnNotifyOptions.span_1) , $addClickHandler(btnNotifyOptions, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnNotifyOptions)) , $add_14(f_MaterialRow5, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '\\u2003PushNotificationOptions options = new PushNotificationOptions();<br> options.body = \"I love GWT Material\";<br> options.icon = \"https://i.imgur.com/VaBxpGj.png\";<br> options.link = \"https://gwtmaterialdesign.github.io/gwt-material-demo\";<br> options.timeout = 4000;<br> PushNotification.create(\"Gwt Material Design\", options);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5));\n  $add_14(f_MaterialPanel1, (f_MaterialRow8 = new MaterialRow , $add_14(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Callbacks'))).html_0) , f_MaterialTitle9)) , $add_14(f_MaterialRow8, (btnNotifyCallbacks = new MaterialButton , $setText_9(btnNotifyCallbacks.span_1, 'Notify with Options') , btnNotifyCallbacks.span_1.attached || $add_14(btnNotifyCallbacks, btnNotifyCallbacks.span_1) , $addClickHandler(btnNotifyCallbacks, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnNotifyCallbacks)) , $add_14(f_MaterialRow8, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb_1 = new StringBuilder , sb_1.string += '\\u2003PushNotificationOptions options = new PushNotificationOptions();<br> options.body = \"I love GWT Material\";<br> options.icon = \"https://i.imgur.com/VaBxpGj.png\";<br> options.link = \"https://gwtmaterialdesign.github.io/gwt-material-demo\";<br> options.timeout = 4000;<br> options.onClick = () -&gt; {<br> \\u2003MaterialToast.fireToast(\"Clicked\");<br> };<br> options.onClose = () -&gt; {<br> \\u2003MaterialToast.fireToast(\"Closed\");<br> };<br> options.onError = () -&gt; {<br> \\u2003MaterialToast.fireToast(\"Errored\");<br> };<br> options.onShow = () -&gt; {<br> \\u2003MaterialToast.fireToast(\"Showed\");<br> };<br> PushNotification.create(\"Gwt Material Design\", options);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-java', true) , f_PrettyPre10)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8));\n  $add_14(f_MaterialPanel1, (f_MaterialRow11 = new MaterialRow , $add_14(f_MaterialRow11, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('Require Interaction'))).html_0) , f_MaterialTitle12)) , $add_14(f_MaterialRow11, (btnNotifyInteraction = new MaterialButton , $setText_9(btnNotifyInteraction.span_1, 'Require Interaction (TRUE)') , btnNotifyInteraction.span_1.attached || $add_14(btnNotifyInteraction, btnNotifyInteraction.span_1) , $addClickHandler(btnNotifyInteraction, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnNotifyInteraction)) , $add_14(f_MaterialRow11, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_2 = new StringBuilder , sb_2.string += '\\u2003PushNotificationOptions options = new PushNotificationOptions();<br> options.body = \"I love GWT Material\";<br> options.icon = \"https://i.imgur.com/VaBxpGj.png\";<br> options.link = \"https://gwtmaterialdesign.github.io/gwt-material-demo\";<br> options.timeout = 4000;<br> options.requireInteraction = true;<br> PushNotification.create(\"Gwt Material Design\", options);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-java', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow11.element_0, 'code', true) , f_MaterialRow11));\n  $add_14(f_MaterialPanel1, (f_MaterialRow14 = new MaterialRow , $add_14(f_MaterialRow14, (f_MaterialTitle15 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle15.header), (new SafeHtmlString(htmlEscape('Count'))).html_0) , f_MaterialTitle15)) , $add_14(f_MaterialRow14, (btnCount = new MaterialButton , $setText_9(btnCount.span_1, 'Count Opened Notifications') , btnCount.span_1.attached || $add_14(btnCount, btnCount.span_1) , $addClickHandler(btnCount, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnCount)) , $add_14(f_MaterialRow14, (f_PrettyPre16 = new PrettyPre , $setHTML_0(f_PrettyPre16, (sb_3 = new StringBuilder , sb_3.string += '\\u2003MaterialToast.fireToast(PushNotification.count() + \" notification(s) opened\");' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre16.element_0, 'lang-java', true) , f_PrettyPre16)) , setStyleName(f_MaterialRow14.element_0, 'code', true) , f_MaterialRow14));\n  $add_14(f_MaterialPanel1, (f_MaterialRow17 = new MaterialRow , $add_14(f_MaterialRow17, (f_MaterialTitle18 = new MaterialTitle , $setText_13(f_MaterialTitle18.paragraph, 'Clear all opened notifications') , $setInnerHTML($getElement(f_MaterialTitle18.header), (new SafeHtmlString(htmlEscape('Clear'))).html_0) , f_MaterialTitle18)) , $add_14(f_MaterialRow17, (btnShow = new MaterialButton , btnShow.element_0.style['marginRight'] = ($clinit_Style$Unit() , '12.0px') , $setText_9(btnShow.span_1, 'Show Notification') , btnShow.span_1.attached || $add_14(btnShow, btnShow.span_1) , $addClickHandler(btnShow, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6) , btnShow)) , $add_14(f_MaterialRow17, (btnClear = new MaterialButton , $setText_9(btnClear.span_1, 'Clear All') , btnClear.span_1.attached || $add_14(btnClear, btnClear.span_1) , $setType_2(btnClear, ($clinit_ButtonType() , FLAT)) , $addClickHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7) , btnClear)) , $add_14(f_MaterialRow17, (f_PrettyPre19 = new PrettyPre , $setHTML_0(f_PrettyPre19, (sb_4 = new StringBuilder , sb_4.string += '\\u2003PushNotification.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre19.element_0, 'lang-java', true) , f_PrettyPre19)) , setStyleName(f_MaterialRow17.element_0, 'code', true) , f_MaterialRow17));\n  return f_MaterialPanel1;\n}\n\nfunction NotificationView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new NotificationView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new NotificationView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new NotificationView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new NotificationView_BinderImpl$Widgets$4;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new NotificationView_BinderImpl$Widgets$5;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new NotificationView_BinderImpl$Widgets$6;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new NotificationView_BinderImpl$Widgets$7;\n}\n\ndefineClass(1673, 1, {}, NotificationView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets', 1673);\nfunction NotificationView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1674, 1, $intern_67, NotificationView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_244(event_0){\n  $wnd.Push.create('Gwt Material Design');\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/1', 1674);\nfunction NotificationView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(1675, 1, $intern_67, NotificationView_BinderImpl$Widgets$2);\n_.onClick_0 = function onClick_245(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/2', 1675);\nfunction NotificationView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1676, 1, $intern_67, NotificationView_BinderImpl$Widgets$3);\n_.onClick_0 = function onClick_246(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  options.onClick = makeLambdaFunction(NotificationView$lambda$0$Type.prototype.call_8, NotificationView$lambda$0$Type, []);\n  options.onClose = makeLambdaFunction(NotificationView$lambda$1$Type.prototype.call_8, NotificationView$lambda$1$Type, []);\n  options.onError = makeLambdaFunction(NotificationView$lambda$2$Type.prototype.call_8, NotificationView$lambda$2$Type, []);\n  options.onShow = makeLambdaFunction(NotificationView$lambda$3$Type.prototype.call_8, NotificationView$lambda$3$Type, []);\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/3', 1676);\nfunction NotificationView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1677, 1, $intern_67, NotificationView_BinderImpl$Widgets$4);\n_.onClick_0 = function onClick_247(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  options.requireInteraction = true;\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/4', 1677);\nfunction NotificationView_BinderImpl$Widgets$5(){\n}\n\ndefineClass(1678, 1, $intern_67, NotificationView_BinderImpl$Widgets$5);\n_.onClick_0 = function onClick_248(event_0){\n  fireToast($wnd.Push.count() + ' notification(s) opened');\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/5', 1678);\nfunction NotificationView_BinderImpl$Widgets$6(){\n}\n\ndefineClass(1679, 1, $intern_67, NotificationView_BinderImpl$Widgets$6);\n_.onClick_0 = function onClick_249(event_0){\n  $wnd.Push.create('Gwt Material Design');\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/6', 1679);\nfunction NotificationView_BinderImpl$Widgets$7(){\n}\n\ndefineClass(1680, 1, $intern_67, NotificationView_BinderImpl$Widgets$7);\n_.onClick_0 = function onClick_250(event_0){\n  $wnd.Push.clear();\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$7_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/7', 1680);\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$) {\n    result0 = new NotificationPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$) {\n    result = new NotificationView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$;\n}\n\ndefineClass(811, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_42(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(41);\n\n//# sourceURL=gwtmaterialdemo-41.js\n")
