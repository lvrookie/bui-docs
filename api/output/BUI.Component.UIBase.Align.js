Ext.data.JsonP.BUI_Component_UIBase_Align({"tagname":"class","name":"BUI.Component.UIBase.Align","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.Align","members":{"cfg":[{"name":"align","tagname":"cfg","owner":"BUI.Component.UIBase.Align","meta":{},"id":"cfg-align"}],"property":[{"name":"align","tagname":"property","owner":"BUI.Component.UIBase.Align","meta":{},"id":"property-align"}],"method":[{"name":"center","tagname":"method","owner":"BUI.Component.UIBase.Align","meta":{},"id":"method-center"},{"name":"getAlignOffset","tagname":"method","owner":"BUI.Component.UIBase.Align","meta":{},"id":"method-getAlignOffset"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":216,"files":[{"filename":"align.js","href":"align.html#BUI-Component-UIBase-Align"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Menu.Menu","BUI.Overlay.Overlay"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Menu.Menu' rel='BUI.Menu.Menu' class='docClass'>BUI.Menu.Menu</a></div><div class='dependency'><a href='#!/api/BUI.Overlay.Overlay' rel='BUI.Overlay.Overlay' class='docClass'>BUI.Overlay.Overlay</a></div><h4>Files</h4><div class='dependency'><a href='source/align.html#BUI-Component-UIBase-Align' target='_blank'>align.js</a></div></pre><div class='doc-contents'><p>Align extension class.\nAlign component with specified element.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Align'>BUI.Component.UIBase.Align</span><br/><a href='source/align.html#BUI-Component-UIBase-Align-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Align-cfg-align' class='name expandable'>align</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Align configuration. ...</div><div class='long'><p>Align configuration. <code></p>\n\n<pre><code>{\n   node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素\n   points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tl 与参考节点的 tr 对齐\n   offset: [0, 0]      // 有效值为 [n, m]\n}\n</code></pre>\n\n<p></code></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Align'>BUI.Component.UIBase.Align</span><br/><a href='source/align.html#BUI-Component-UIBase-Align-property-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Align-property-align' class='name expandable'>align</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Align configuration. ...</div><div class='long'><p>Align configuration. @field\n@example\n<code></p>\n\n<pre><code>{\n   node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素\n   points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tl 与参考节点的 tr 对齐\n   offset: [0, 0]      // 有效值为 [n, m]\n}\n</code></pre>\n\n<p></code></p>\n<p>Defaults to: <code>{value: {}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-center' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Align'>BUI.Component.UIBase.Align</span><br/><a href='source/align.html#BUI-Component-UIBase-Align-method-center' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Align-method-center' class='name expandable'>center</a>( <span class='pre'>node</span> )</div><div class='description'><div class='short'>Make current element center within node. ...</div><div class='long'><p>Make current element center within node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : undefined|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|HTMLElement|<a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><div class='sub-desc'><p>Same as node config of <a href=\"#!/api/BUI.Component.UIBase.Align-property-align\" rel=\"BUI.Component.UIBase.Align-property-align\" class=\"docClass\">align</a> .</p>\n</div></li></ul></div></div></div><div id='method-getAlignOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Align'>BUI.Component.UIBase.Align</span><br/><a href='source/align.html#BUI-Component-UIBase-Align-method-getAlignOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Align-method-getAlignOffset' class='name expandable'>getAlignOffset</a>( <span class='pre'>region, align</span> )</div><div class='description'><div class='short'>获取 node 上的 align 对齐点 相对于页面的坐标 ...</div><div class='long'><p>获取 node 上的 align 对齐点 相对于页面的坐标</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>region</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>align</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});