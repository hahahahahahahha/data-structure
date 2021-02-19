function Compile(el, vm) {
  this.$vm = vm
  this.$el = this.isElementNode(el) ? el : document.querySelector(el)

  if (this.$el) {
    this.$fragment = this.node2Fragment(this.$el)
    this.init()
    this.$el.appendChild(this.$fragment)
  }

}

Compile.prototype = {
  node2Fragment: function (el) {
    var fragment = document.createDocumentFragment(),
        child;
    // 将原生节点拷贝到fragment
    while (child = el.firstChild) {
      fragment.appendChild(child)
    }
    return fragment
  },

  init: function () {
    this.compileElement(this.$fragment)
  },

  compileElement: function (el) {
    var childNodes = el.childNodes,
        me = this;
    
    [].slice.call(childNodes).forEach( function (node) {
      var text = node.textContent
      
    });
  },
  // 元素节点类型
  isElementNode: function (node) {
    return node.nodeType == 1
  },
  // 文本节点类型
  isTextNode: function (node) {
    return node.nodeType == 3
  }
}