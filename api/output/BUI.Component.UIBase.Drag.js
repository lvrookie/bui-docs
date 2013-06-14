Ext.data.JsonP.BUI_Component_UIBase_Drag({"tagname":"class","name":"BUI.Component.UIBase.Drag","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.Drag","members":{"cfg":[{"name":"dragNode","tagname":"cfg","owner":"BUI.Component.UIBase.Drag","meta":{},"id":"cfg-dragNode"}],"property":[{"name":"constraint","tagname":"property","owner":"BUI.Component.UIBase.Drag","meta":{},"id":"property-constraint"},{"name":"dragBackEl","tagname":"property","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"property-dragBackEl"},{"name":"dragNode","tagname":"property","owner":"BUI.Component.UIBase.Drag","meta":{},"id":"property-dragNode"},{"name":"draging","tagname":"property","owner":"BUI.Component.UIBase.Drag","meta":{"protected":true},"id":"property-draging"}],"method":[{"name":"getter","tagname":"method","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"method-getter"},{"name":"mouseMove","tagname":"method","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"method-mouseMove"},{"name":"mouseUp","tagname":"method","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"method-mouseUp"},{"name":"registEvent","tagname":"method","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"method-registEvent"},{"name":"unregistEvent","tagname":"method","owner":"BUI.Component.UIBase.Drag","meta":{"private":true},"id":"method-unregistEvent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":12,"files":[{"filename":"drag.js","href":"drag.html#BUI-Component-UIBase-Drag"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Overlay.Dialog"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Overlay.Dialog' rel='BUI.Overlay.Dialog' class='docClass'>BUI.Overlay.Dialog</a></div><h4>Files</h4><div class='dependency'><a href='source/drag.html#BUI-Component-UIBase-Drag' target='_blank'>drag.js</a></div></pre><div class='doc-contents'><p>拖拽控件的扩展</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dragNode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-cfg-dragNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-cfg-dragNode' class='name not-expandable'>dragNode</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'><p>点击拖动的节点</p>\n</div><div class='long'><p>点击拖动的节点</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-constraint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-constraint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-constraint' class='name expandable'>constraint</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'>拖动的限制范围 ...</div><div class='long'><p>拖动的限制范围</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-dragBackEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-dragBackEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-dragBackEl' class='name not-expandable'>dragBackEl</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-dragNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-dragNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-dragNode' class='name expandable'>dragNode</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'>点击拖动的节点 ...</div><div class='long'><p>点击拖动的节点</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-draging' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-draging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-draging' class='name not-expandable'>draging</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'><p>是否正在拖动</p>\n</div><div class='long'><p>是否正在拖动</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-getter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-getter' class='name expandable'>getter</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>* ...</div><div class='long'><p>*</p>\n</div></div></div><div id='method-mouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-mouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-mouseMove' class='name expandable'>mouseMove</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-mouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-mouseUp' class='name expandable'>mouseUp</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-registEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-registEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-registEvent' class='name expandable'>registEvent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unregistEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-unregistEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-unregistEvent' class='name expandable'>unregistEvent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});