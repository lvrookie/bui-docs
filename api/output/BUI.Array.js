Ext.data.JsonP.BUI_Array({"tagname":"class","name":"BUI.Array","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Array","members":{"cfg":[],"property":[],"method":[{"name":"add","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-add"},{"name":"addAt","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-addAt"},{"name":"contains","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-contains"},{"name":"each","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-each"},{"name":"empty","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-empty"},{"name":"equals","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-equals"},{"name":"filter","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-filter"},{"name":"find","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-find"},{"name":"findIndex","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-findIndex"},{"name":"indexOf","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-indexOf"},{"name":"isEmpty","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-isEmpty"},{"name":"map","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-map"},{"name":"peek","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-peek"},{"name":"remove","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-remove"},{"name":"removeAt","tagname":"method","owner":"BUI.Array","meta":{},"id":"method-removeAt"},{"name":"slice","tagname":"method","owner":"BUI.Array","meta":{"private":true},"id":"method-slice"},{"name":"splice","tagname":"method","owner":"BUI.Array","meta":{"private":true},"id":"method-splice"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":8,"files":[{"filename":"array.js","href":"array2.html#BUI-Array"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/array2.html#BUI-Array' target='_blank'>array.js</a></div></pre><div class='doc-contents'><p>数组帮助类</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-add' class='name expandable'>add</a>( <span class='pre'>array, index, value</span> )</div><div class='description'><div class='short'>插入数组 ...</div><div class='long'><p>插入数组</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>位置</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>插入的数据</p>\n</div></li></ul></div></div></div><div id='method-addAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-addAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-addAt' class='name expandable'>addAt</a>( <span class='pre'>array, value, index</span> )</div><div class='description'><div class='short'>将数据插入数组指定的位置 ...</div><div class='long'><p>将数据插入数组指定的位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>插入的数据</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>位置</p>\n</div></li></ul></div></div></div><div id='method-contains' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-contains' class='name expandable'>contains</a>( <span class='pre'>value, array</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>数组是否存在指定值 ...</div><div class='long'><p>数组是否存在指定值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : *<div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组或者类似于数组的对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否存在于数组中</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-each' class='name expandable'>each</a>( <span class='pre'>element, func</span> )</div><div class='description'><div class='short'>遍历数组或者对象 ...</div><div class='long'><p>遍历数组或者对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>/Object 数组中的元素或者对象的值</p>\n</div></li><li><span class='pre'>func</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>遍历的函数 function(elememt,index){} 或者 function(value,key){}</p>\n</div></li></ul></div></div></div><div id='method-empty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-empty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-empty' class='name expandable'>empty</a>( <span class='pre'>array</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>清空数组 ...</div><div class='long'><p>清空数组</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>清空后的数组</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-equals' class='name expandable'>equals</a>( <span class='pre'>a1, a2</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>2个数组内部的值是否相等 ...</div><div class='long'><p>2个数组内部的值是否相等</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a1</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组1</p>\n</div></li><li><span class='pre'>a2</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组2</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>2个数组相等或者内部元素是否相等</p>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-filter' class='name expandable'>filter</a>( <span class='pre'>element, func</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>过滤数组 ...</div><div class='long'><p>过滤数组</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>/Object 数组中的元素或者对象的值</p>\n</div></li><li><span class='pre'>func</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>遍历的函数 function(elememt,index){} 或者 function(value,key){},如果返回true则添加到结果集</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>过滤的结果集</p>\n</div></li></ul></div></div></div><div id='method-find' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-find' class='name expandable'>find</a>( <span class='pre'>array, func</span> ) : *</div><div class='description'><div class='short'>获取第一个符合条件的数据 ...</div><div class='long'><p>获取第一个符合条件的数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>func</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>匹配函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>符合条件的数据</p>\n</div></li></ul></div></div></div><div id='method-findIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-findIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-findIndex' class='name expandable'>findIndex</a>( <span class='pre'>array, func</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>获取第一个符合条件的数据的索引值 ...</div><div class='long'><p>获取第一个符合条件的数据的索引值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>func</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>匹配函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>符合条件的数据的索引值</p>\n</div></li></ul></div></div></div><div id='method-indexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>value, array, [fromIndex]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>查找记录所在的位置 ...</div><div class='long'><p>查找记录所在的位置</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : *<div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组或者类似于数组的对象</p>\n</div></li><li><span class='pre'>fromIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>起始项，默认为0</p>\n<p>Defaults to: <code>0</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>位置，如果为 -1则不在数组内</p>\n</div></li></ul></div></div></div><div id='method-isEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-isEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-isEmpty' class='name expandable'>isEmpty</a>( <span class='pre'>array</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>数组是否为空 ...</div><div class='long'><p>数组是否为空</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否为空</p>\n</div></li></ul></div></div></div><div id='method-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-map' class='name expandable'>map</a>( <span class='pre'>element, func</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>转换数组数组 ...</div><div class='long'><p>转换数组数组</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>/Object 数组中的元素或者对象的值</p>\n</div></li><li><span class='pre'>func</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>遍历的函数 function(elememt,index){} 或者 function(value,key){},将返回的结果添加到结果集</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>过滤的结果集</p>\n</div></li></ul></div></div></div><div id='method-peek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-peek' class='name expandable'>peek</a>( <span class='pre'>array</span> ) : *</div><div class='description'><div class='short'>返回数组的最后一个对象 ...</div><div class='long'><p>返回数组的最后一个对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组或者类似于数组的对象.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>数组的最后一项.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-remove' class='name expandable'>remove</a>( <span class='pre'>array, value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>移除记录 ...</div><div class='long'><p>移除记录</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>记录</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否移除成功</p>\n</div></li></ul></div></div></div><div id='method-removeAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-removeAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-removeAt' class='name expandable'>removeAt</a>( <span class='pre'>array, index</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>移除指定位置的记录 ...</div><div class='long'><p>移除指定位置的记录</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>数组</p>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>索引值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否移除成功</p>\n</div></li></ul></div></div></div><div id='method-slice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-slice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-slice' class='name expandable'>slice</a>( <span class='pre'>arr, start, opt_end</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>opt_end</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-splice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Array'>BUI.Array</span><br/><a href='source/array2.html#BUI-Array-method-splice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Array-method-splice' class='name expandable'>splice</a>( <span class='pre'>arr, index, howMany, var_args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>howMany</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>var_args</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});