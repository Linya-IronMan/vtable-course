<!-- NOTE[epic=初始化启动] 初始化环境准备  -->

# 环境准备

<!-- NOTE[epic=初始化启动] 安装依赖  -->

1.  安装依赖

        ````bash

            pnpm install -g @antfu/ni

            ni

        ````

<!-- NOTE[epic=初始化启动] 启动项目  -->

2.  启动项目 `nr dev:table-editor ` 或者 `nr ` 之后选择要执行的命令

# 类型检查

```bash
nr type-check
```

# 15 自定义渲染

1. [customLayout 配置介绍](https://visactor.com/vtable/guide/custom_define/custom_layout)
2. 各种常用图元介绍
3. 各种常用图元使用
4. JSX 语法支持

# 16 单元格编辑器及[icon, theme, charModule] 注册机制 doing

1. [编辑器使用介绍](https://visactor.com/vtable/guide/edit/edit_cell)
2. 官方编辑器类型介绍：文本、数字、日期、下拉框

- 官方编辑器的注册与使用
- 展示常见的官方编辑器
    <!-- TODO demo 补充所有官方编辑器效果 -->

1. 编辑器自定义实现
2. 编辑数据验证

- 自定义编辑器的总体注册使用流程，对比官方编辑器进行讲解
- 自定义编辑器规定的生命周期，结合自定义日期编辑器进行讲解
    - onStart 能够获取的参数，定位，宽高，当前单元格的值
        - 获取定位方法 getRelativeRect
    - onEnd 能够获取的参数，新值
    - 数据验证的坑，需要有 setValue 方法
- 展示如何结合 React Ant Design 自定义日期编辑器

<!-- TODO 使用 React + Ant Design + Provider 自定义日期编辑器 书写一个 demo -->

---

1. icon 注册及使用
   [icon 注册及使用](https://www.visactor.com/vtable/guide/custom_define/custom_icon)
    - svg icon font 图标注册及使用
    - path
    - 内置的一些 key，取代 vtable 默认功能的 icon 图标
      实际上都可以写一个自定义 header 图元完全自定义渲染

 <!-- TODO 补充 icon 编辑器注册及使用  -->

2. theme 注册及使用
    <!-- TODO 补充 theme 的注册及使用  -->

    [theme 注册及使用](https://www.visactor.com/vtable/guide/theme_and_style/theme)

3. chartModule 注册及使用
