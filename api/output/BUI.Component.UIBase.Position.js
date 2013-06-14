Ext.data.JsonP.BUI_Component_UIBase_Position({"tagname":"class","name":"BUI.Component.UIBase.Position","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.Position","members":{"cfg":[{"name":"x","tagname":"cfg","owner":"BUI.Component.UIBase.Position","meta":{},"id":"cfg-x"},{"name":"xy","tagname":"cfg","owner":"BUI.Component.UIBase.Position","meta":{},"id":"cfg-xy"},{"name":"y","tagname":"cfg","owner":"BUI.Component.UIBase.Position","meta":{},"id":"cfg-y"},{"name":"zIndex","tagname":"cfg","owner":"BUI.Component.UIBase.Position","meta":{},"id":"cfg-zIndex"}],"property":[{"name":"left","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-left"},{"name":"top","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-top"},{"name":"visible","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{"protected":true},"id":"property-visible"},{"name":"x","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-x"},{"name":"xy","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-xy"},{"name":"y","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-y"},{"name":"zIndex","tagname":"property","owner":"BUI.Component.UIBase.Position","meta":{},"id":"property-zIndex"}],"method":[{"name":"getter","tagname":"method","owner":"BUI.Component.UIBase.Position","meta":{},"id":"method-getter"},{"name":"move","tagname":"method","owner":"BUI.Component.UIBase.Position","meta":{},"id":"method-move"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":94,"files":[{"filename":"position.js","href":"position.html#BUI-Component-UIBase-Position"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Menu.Menu","BUI.Overlay.Overlay"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Menu.Menu' rel='BUI.Menu.Menu' class='docClass'>BUI.Menu.Menu</a></div><div class='dependency'><a href='#!/api/BUI.Overlay.Overlay' rel='BUI.Overlay.Overlay' class='docClass'>BUI.Overlay.Overlay</a></div><h4>Files</h4><div class='dependency'><a href='source/position.html#BUI-Component-UIBase-Position' target='_blank'>position.js</a></div></pre><div class='doc-contents'><p>Position extension class.\nMake component positionable</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-x' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-cfg-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-cfg-x' class='name not-expandable'>x</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>水平坐标</p>\n</div><div class='long'><p>水平坐标</p>\n</div></div></div><div id='cfg-xy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-cfg-xy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-cfg-xy' class='name not-expandable'>xy</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]</span></div><div class='description'><div class='short'><p>水平和垂直坐标</p>\n</div><div class='long'><p>水平和垂直坐标</p>\n</div></div></div><div id='cfg-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-cfg-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-cfg-y' class='name not-expandable'>y</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>垂直坐标</p>\n</div><div class='long'><p>垂直坐标</p>\n</div></div></div><div id='cfg-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-cfg-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-cfg-zIndex' class='name not-expandable'>zIndex</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>z-index value.</p>\n</div><div class='long'><p>z-index value.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-left' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-left' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-left' class='name expandable'>left</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>相对于父元素的水平位置 ...</div><div class='long'><p>相对于父元素的水平位置</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div><div id='property-top' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-top' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-top' class='name expandable'>top</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>相对于父元素的垂直位置 ...</div><div class='long'><p>相对于父元素的垂直位置</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div><div id='property-visible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-visible' class='name expandable'>visible</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Positionable element is by default visible false. ...</div><div class='long'><p>Positionable element is by default visible false.\nFor compatibility in overlay and PopupMenu.\n@default false</p>\n<p>Defaults to: <code>{view: true, value: true}</code></p><p>Overrides: <a href='#!/api/BUI.Component.Controller-property-visible' rel='BUI.Component.Controller-property-visible' class='docClass'>BUI.Component.Controller.visible</a></p></div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-x' class='name expandable'>x</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>水平坐标 ...</div><div class='long'><p>水平坐标</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div><div id='property-xy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-xy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-xy' class='name not-expandable'>xy</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]</span></div><div class='description'><div class='short'><p>水平和垂直坐标</p>\n</div><div class='long'><p>水平和垂直坐标</p>\n</div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-y' class='name expandable'>y</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>垂直坐标 ...</div><div class='long'><p>垂直坐标</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div><div id='property-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-property-zIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-property-zIndex' class='name expandable'>zIndex</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>z-index value. ...</div><div class='long'><p>z-index value.</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-method-getter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-method-getter' class='name expandable'>getter</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>xy 纯中转作用 ...</div><div class='long'><p>xy 纯中转作用</p>\n</div></div></div><div id='method-move' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Position'>BUI.Component.UIBase.Position</span><br/><a href='source/position.html#BUI-Component-UIBase-Position-method-move' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Position-method-move' class='name expandable'>move</a>( <span class='pre'>x, [y]</span> )</div><div class='description'><div class='short'>Move to absolute position. ...</div><div class='long'><p>Move to absolute position.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>@example\n<code>\nmove(x, y);\nmove(x);\nmove([x,y])\n</code></p>\n</div></li></ul></div></div></div></div></div></div></div>"});