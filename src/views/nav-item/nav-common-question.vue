<template>
  <!-- <div class="nav-container">
    <div>0000</div>
    <h6>深克隆</h6>
    <el-button
      class="margin-btn"
      type="primary"
      size="small"
      @click="copyClick"
    >深克隆</el-button>
    <hr>
    <ul id="list"></ul>
    <ul id="js-list"></ul>
  </div> -->
  <div class="root">
    <div class="container">
      <section class="sidebar">
        <ul class="menu"></ul>
      </section>
      <section class="main">
        <article class="post"></article>
        <p class="copyright"></p>
      </section>
    </div>
  </div>
</template>

<script>
import { deepCopy } from "@/views/class/common-question.js";
import "@/views/js";
export default {
  data() {
    return {};
  },
  mounted() {
    // 1、使用闭包 保留变量  2、使用let 形成块级作用域
    // for (var i = 0; i < 5; i++) {
    //   setTimeout(
    //     function(i) {
    //       console.log(new Date(), i);
    //     },
    //     i * 1000,
    //     i
    //   );
    // }
    // setTimeout(() => {
    //   console.log(new Date(), i);
    // }, i * 1000);
    // 2、使用Promise
    const tasks = []; //
    const output = i =>
      new Promise(resolve => {
        setTimeout(() => {
          console.log(new Date(), i);
          resolve();
        }, 1000 * i);
      });
    for (var i = 0; i < 5; i++) {
      tasks.push(output(i));
    }
    Promise.all(tasks).then(() => {
      setTimeout(() => {
        console.log(new Date(), i);
      }, 1000);
    });
    // 广度优先遍历树
    // const traverse = ndRoot => {
    //   const queue = [ndRoot];
    //   while (queue.length) {
    //     const node = queue.shift();
    //     printInfo(node);
    //     if (!node.children.length) {
    //       continue;
    //     }
    //     Array.from(node.children).forEach(x => queue.push(x));
    //   }
    // };
    // const printInfo = node => {
    //   console.log(node.tagName, `${node.className}`);
    // };
    // traverse(document.querySelector(".root"));
    // 第一版
    // let container = document.getElementById("list");
    // for (let i = 0; i < 3; i++) {
    //   const element = document.createElement("li");
    //   element.innerText = i + 1;
    //   container.appendChild(element);
    // }
    // 第二版 修改版 1、变量命名 2、使用立即执行函数，屏蔽变量 3、容错处理
    // 注意 这里i不能是用var
    // (() => {
    //   let ndContainer = document.getElementById("list");
    //   if (!ndContainer) {
    //     return;
    //   }
    //   for (let i = 0; i < 4; i++) {
    //     const ndItem = document.createElement("li");
    //     ndItem.innerText = i + 1;
    //     // 增加点击事件
    //     ndItem.addEventListener("click", function () {
    //       alert(i);
    //     });
    //     ndContainer.appendChild(ndItem);
    //   }
    // })();
    // // 第三版 事件委托
    // (() => {
    //   let ndContainer = document.getElementById("js-list");
    //   if (!ndContainer) {
    //     return;
    //   }
    //   for (let i = 0; i < 400; i++) {
    //     const ndItem = document.createElement("li");
    //     ndItem.innerText = i + 1;
    //     ndContainer.appendChild(ndItem);
    //   }
    //   // 增加点击事件 事件委托
    //   ndContainer.addEventListener("click", function(e) {
    //     // alert(i);
    //     const target = e.target;
    //     if (target.tagName === "LI") {
    //       alert(target.innerHTML);
    //     }
    //   });
    // })();
    // 第四版 事件委托：  1、DocumentFragment减少DOM 操作  2、使用分批插入分治思想
    // (() => {
    //   let ndContainer = document.getElementById("js-list");
    //   if (!ndContainer) {
    //     return;
    //   }
    //   const total = 40000; // 总数
    //   const batchSize = 4; // 每批插入的节点数
    //   const batchCount = total / batchSize; // 需要批量处理多少次
    //   let batchDone = 0; // 已完成的批量处理个数
    //   function appendItems() {
    //     const fragment = document.createDocumentFragment();
    //     for (let i = 0; i < batchSize; i++) {
    //       const ndItem = document.createElement("li");
    //       ndItem.innerText = batchDone * batchSize + i + 1;
    //       fragment.appendChild(ndItem);
    //     }
    //     ndContainer.appendChild(fragment);
    //     batchDone += 1;
    //     doBatchAppend();
    //   }
    //   function doBatchAppend() {
    //     if (batchDone < batchCount) {
    //       window.requestAnimationFrame(appendItems);
    //     }
    //   }
    //   doBatchAppend();
    //   ndContainer.addEventListener("click", function(e) {
    //     const target = e.target;
    //     if (target.tagName === "LI") {
    //       alert(target.innerHTML);
    //     }
    //   });
    // })();
  },
  methods: {
    copyClick() {
      const obj = {
        a: 10,
        b: {
          x: 100
        },
        c: [1, 2, 3],
        d: /^\d+$/
      };

      const obj2 = deepCopy(obj);

      console.log(obj, obj2);
      console.log(obj === obj2);
      console.log(obj.b === obj2.b);
    }
  }
};
</script>

<style lang="scss" scoped>
h6 {
  line-height: 40px;
  text-align: center;
}
</style>
