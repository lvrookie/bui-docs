Ext.data.JsonP.BUI_Mask_LoadMask({"tagname":"class","name":"BUI.Mask.LoadMask","extends":"BUI.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Mask.LoadMask","members":{"cfg":[{"name":"handler","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-handler"},{"name":"listeners","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-listeners"}],"property":[{"name":"_eventMap","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_eventMap"},{"name":"_events","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_events"},{"name":"disabled","tagname":"property","owner":"BUI.Mask.LoadMask","meta":{},"id":"property-disabled"},{"name":"el","tagname":"property","owner":"BUI.Mask.LoadMask","meta":{},"id":"property-el"},{"name":"msg","tagname":"property","owner":"BUI.Mask.LoadMask","meta":{},"id":"property-msg"},{"name":"msgCls","tagname":"property","owner":"BUI.Mask.LoadMask","meta":{},"id":"property-msgCls"}],"method":[{"name":"addAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-addAttr"},{"name":"addAttrs","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-addAttrs"},{"name":"addEvents","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-addEvents"},{"name":"addTarget","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-addTarget"},{"name":"clearAttrVals","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-clearAttrVals"},{"name":"clearListeners","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-clearListeners"},{"name":"disable","tagname":"method","owner":"BUI.Mask.LoadMask","meta":{},"id":"method-disable"},{"name":"fire","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-fire"},{"name":"get","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-get"},{"name":"getAttrVals","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-getAttrVals"},{"name":"getAttrs","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-getAttrs"},{"name":"hasAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-hasAttr"},{"name":"hide","tagname":"method","owner":"BUI.Mask.LoadMask","meta":{},"id":"method-hide"},{"name":"off","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-off"},{"name":"on","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-on"},{"name":"onBeforeLoad","tagname":"method","owner":"BUI.Mask.LoadMask","meta":{"private":true},"id":"method-onBeforeLoad"},{"name":"onLoad","tagname":"method","owner":"BUI.Mask.LoadMask","meta":{"private":true},"id":"method-onLoad"},{"name":"publish","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-publish"},{"name":"removeAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-removeAttr"},{"name":"set","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-set"},{"name":"setInternal","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-setInternal"},{"name":"show","tagname":"method","owner":"BUI.Mask.LoadMask","meta":{},"id":"method-show"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"loadMask.js","href":"loadMask.html#BUI-Mask-LoadMask"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["BUI.Observable","BUI.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='docClass'>BUI.Observable</a><div class='subclass '><a href='#!/api/BUI.Base' rel='BUI.Base' class='docClass'>BUI.Base</a><div class='subclass '><strong>BUI.Mask.LoadMask</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/loadMask.html#BUI-Mask-LoadMask' target='_blank'>loadMask.js</a></div></pre><div class='doc-contents'><p>屏蔽指定元素，并显示加载信息</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-handler' class='name not-expandable'>handler</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n</div><div class='long'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n</div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-listeners' class='name not-expandable'>listeners</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>初始化事件</p>\n</div><div class='long'><p>初始化事件</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_eventMap' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_eventMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_eventMap' class='name expandable'>_eventMap</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>绑定的事件 ...</div><div class='long'><p>绑定的事件</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-_events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_events' class='name expandable'>_events</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>支持的事件名列表 ...</div><div class='long'><p>支持的事件名列表</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-property-disabled' class='name expandable'>disabled</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>加载控件是否禁用 @field\n@default false ...</div><div class='long'><p>加载控件是否禁用 @field\n@default false</p>\n<p>Defaults to: <code>{value: false}</code></p></div></div></div><div id='property-el' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-property-el' class='name expandable'>el</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span></div><div class='description'><div class='short'>屏蔽的元素 ...</div><div class='long'><p>屏蔽的元素</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-msg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-property-msg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-property-msg' class='name expandable'>msg</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>加载时显示的加载信息\n@field\n@default Loading... ...</div><div class='long'><p>加载时显示的加载信息\n@field\n@default Loading...</p>\n<p>Defaults to: <code>{value: 'Loading...'}</code></p></div></div></div><div id='property-msgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-property-msgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-property-msgCls' class='name expandable'>msgCls</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>加载时显示的加载信息的样式\n@field\n@default x-mask-loading ...</div><div class='long'><p>加载时显示的加载信息的样式\n@field\n@default x-mask-loading</p>\n<p>Defaults to: <code>{value: 'x-mask-loading'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addAttr' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttr' class='name expandable'>addAttr</a>( <span class='pre'>name, attrConfig, overrides</span> )</div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>attrConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性定义</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttrs' class='name expandable'>addAttrs</a>( <span class='pre'>attrConfigs, initialValues, overrides</span> )</div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrConfigs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object with attribute name/configuration pairs.</p>\n</div></li><li><span class='pre'>initialValues</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>user defined initial values</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>添加支持的事件 ...</div><div class='long'><p>添加支持的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>事件</p>\n</div></li></ul></div></div></div><div id='method-addTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addTarget' class='name expandable'>addTarget</a>( <span class='pre'>target</span> )</div><div class='description'><div class='short'>添加冒泡的对象 ...</div><div class='long'><p>添加冒泡的对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>冒泡的事件源</p>\n</div></li></ul></div></div></div><div id='method-clearAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-clearAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-clearAttrVals' class='name expandable'>clearAttrVals</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>@清理所有属性值 ...</div><div class='long'><p>@清理所有属性值</p>\n</div></div></div><div id='method-clearListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-clearListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-clearListeners' class='name expandable'>clearListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>移除所有绑定的事件 ...</div><div class='long'><p>移除所有绑定的事件</p>\n</div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>设置控件不可用 ...</div><div class='long'><p>设置控件不可用</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, eventData</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>eventData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件触发时传递的数据</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取属性值 ...</div><div class='long'><p>获取属性值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-getAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrVals' class='name expandable'>getAttrVals</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取属性名/属性值键值对 ...</div><div class='long'><p>获取属性名/属性值键值对</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性对象</p>\n</div></li></ul></div></div></div><div id='method-getAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrs' class='name expandable'>getAttrs</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取默认的属性值 ...</div><div class='long'><p>获取默认的属性值</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值的键值对</p>\n</div></li></ul></div></div></div><div id='method-hasAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-hasAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-hasAttr' class='name expandable'>hasAttr</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>是否包含此属性 ...</div><div class='long'><p>是否包含此属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>隐藏加载条，并解除遮盖元素 ...</div><div class='long'><p>隐藏加载条，并解除遮盖元素</p>\n</div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>移除绑定的事件 ...</div><div class='long'><p>移除绑定的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>添加绑定事件 ...</div><div class='long'><p>添加绑定事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-onBeforeLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-method-onBeforeLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-method-onBeforeLoad' class='name expandable'>onBeforeLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>开始加载，屏蔽当前元素 ...</div><div class='long'><p>开始加载，屏蔽当前元素</p>\n</div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>加载已经完毕，解除屏蔽 ...</div><div class='long'><p>加载已经完毕，解除屏蔽</p>\n</div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventType, cfg</span> )</div><div class='description'><div class='short'>配置事件是否允许冒泡 ...</div><div class='long'><p>配置事件是否允许冒泡</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>支持冒泡的事件</p>\n</div></li><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>bubbles</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否支持冒泡</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-removeAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-removeAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-removeAttr' class='name expandable'>removeAttr</a>( <span class='pre'>name</span> )</div><div class='description'><div class='short'>移除属性定义 ...</div><div class='long'><p>移除属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value, opts</span> )</div><div class='description'><div class='short'>设置属性值，会触发before+name+change,和 after+name+change事件 ...</div><div class='long'><p>设置属性值，会触发before+name+change,和 after+name+change事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>silent</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>配置属性时，是否不触发事件</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setInternal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-setInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-setInternal' class='name expandable'>setInternal</a>( <span class='pre'>name, value, opts</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</div><div class='description'><div class='short'>设置属性，不触发事件 ...</div><div class='long'><p>设置属性，不触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>选项</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果值无效则返回false,否则返回undefined</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask.LoadMask'>BUI.Mask.LoadMask</span><br/><a href='source/loadMask.html#BUI-Mask-LoadMask-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask.LoadMask-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>显示加载条，并遮盖元素 ...</div><div class='long'><p>显示加载条，并遮盖元素</p>\n</div></div></div></div></div></div></div>"});