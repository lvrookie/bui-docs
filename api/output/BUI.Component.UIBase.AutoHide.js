Ext.data.JsonP.BUI_Component_UIBase_AutoHide({"tagname":"class","name":"BUI.Component.UIBase.AutoHide","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.AutoHide","members":{"cfg":[],"property":[{"name":"autoHide","tagname":"property","owner":"BUI.Component.UIBase.AutoHide","meta":{},"id":"property-autoHide"},{"name":"autoHideType","tagname":"property","owner":"BUI.Component.UIBase.AutoHide","meta":{},"id":"property-autoHideType"},{"name":"hideExceptNode","tagname":"property","owner":"BUI.Component.UIBase.AutoHide","meta":{},"id":"property-hideExceptNode"}],"method":[{"name":"handleDocumentClick","tagname":"method","owner":"BUI.Component.UIBase.AutoHide","meta":{"protected":true},"id":"method-handleDocumentClick"},{"name":"handleMoveOuter","tagname":"method","owner":"BUI.Component.UIBase.AutoHide","meta":{},"id":"method-handleMoveOuter"}],"event":[{"name":"autohide","tagname":"event","owner":"BUI.Component.UIBase.AutoHide","meta":{},"id":"event-autohide"}],"css_var":[],"css_mixin":[]},"linenr":18,"files":[{"filename":"autohide.js","href":"autohide.html#BUI-Component-UIBase-AutoHide"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Menu.Menu","BUI.Overlay.Overlay"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Menu.Menu' rel='BUI.Menu.Menu' class='docClass'>BUI.Menu.Menu</a></div><div class='dependency'><a href='#!/api/BUI.Overlay.Overlay' rel='BUI.Overlay.Overlay' class='docClass'>BUI.Overlay.Overlay</a></div><h4>Files</h4><div class='dependency'><a href='source/autohide.html#BUI-Component-UIBase-AutoHide' target='_blank'>autohide.js</a></div></pre><div class='doc-contents'><p>点击隐藏控件的扩展</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoHide' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-property-autoHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-property-autoHide' class='name expandable'>autoHide</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>是否自动隐藏 ...</div><div class='long'><p>是否自动隐藏</p>\n<p>Defaults to: <code>{value: false}</code></p></div></div></div><div id='property-autoHideType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-property-autoHideType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-property-autoHideType' class='name expandable'>autoHideType</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>控件自动隐藏的事件，这里支持2种：\n'click',和'leave',默认为'click' ...</div><div class='long'><p>控件自动隐藏的事件，这里支持2种：\n'click',和'leave',默认为'click'</p>\n<p>Defaults to: <code>{value: 'click'}</code></p></div></div></div><div id='property-hideExceptNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-property-hideExceptNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-property-hideExceptNode' class='name expandable'>hideExceptNode</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>点击或者移动到此节点时不触发自动隐藏 ...</div><div class='long'><p>点击或者移动到此节点时不触发自动隐藏</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-handleDocumentClick' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-method-handleDocumentClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-method-handleDocumentClick' class='name expandable'>handleDocumentClick</a>( <span class='pre'>ev</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>点击页面时的处理函数 ...</div><div class='long'><p>点击页面时的处理函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : <a href=\"#!/api/jQuery.Event\" rel=\"jQuery.Event\" class=\"docClass\">jQuery.Event</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div><div id='method-handleMoveOuter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-method-handleMoveOuter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-method-handleMoveOuter' class='name expandable'>handleMoveOuter</a>( <span class='pre'>ev</span> )</div><div class='description'><div class='short'>处理鼠标移出事件，不影响{BUI.Component.Controller.handleMouseLeave}事件 ...</div><div class='long'><p>处理鼠标移出事件，不影响{<a href=\"#!/api/BUI.Component.Controller-method-handleMouseLeave\" rel=\"BUI.Component.Controller-method-handleMouseLeave\" class=\"docClass\">BUI.Component.Controller.handleMouseLeave</a>}事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : <a href=\"#!/api/jQuery.Event\" rel=\"jQuery.Event\" class=\"docClass\">jQuery.Event</a><div class='sub-desc'><p>事件对象</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-autohide' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.AutoHide'>BUI.Component.UIBase.AutoHide</span><br/><a href='source/autohide.html#BUI-Component-UIBase-AutoHide-event-autohide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.AutoHide-event-autohide' class='name expandable'>autohide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>点击控件外部时触发，只有在控件设置自动隐藏(autoHide = true)有效\n可以阻止控件隐藏，通过在事件监听函数中 return false ...</div><div class='long'><p>点击控件外部时触发，只有在控件设置自动隐藏(autoHide = true)有效\n可以阻止控件隐藏，通过在事件监听函数中 return false</p>\n</div></div></div></div></div></div></div>"});