# For Vue

在 Vue 3 中使用 Element extended icon pack。

## 安装

::: code-group

```sh [pnpm]
pnpm add @element-extended-icon-pack/vue
```

```sh [npm]
npm i @element-extended-icon-pack/vue
```
:::

## 使用
Element extended icon pack 使用 ES Modules 构建，所以它是完全可以 Tree-shaking 的。
每个图标都可以作为 Vue 组件导入，从而呈现内联 SVG 元素。因此，只有被导入到项目中的图标才会包含在最终构建的应用中，其它图标都被 tree-shaken 走了。

### 使用例子
```vue
<template>
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要通过 CSS 提供样式 -->
    <!-- 或者直接提供 -->
    <FillEleSymbolUpload class="icon" />
    <FillEleSymbolUpload style="width: 1em; height: 1em;" />
</template>

<script setup>
    import { FillEleSymbolUpload } from "@element-extended-icon-pack/vue";
</script>

<style>
    .icon {
        width: 1rem;
        height: 1rem;
        color: red;
    }    
</style>
```