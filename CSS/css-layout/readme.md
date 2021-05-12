## normal flow
行内元素(inline-level-box): 水平方向从左往右，一个接一个地布局,垂直方向默认会与baseline对齐(类似写英文的时候下面要和第三条线对齐的情况)
块级元素(block-level-box): 垂直方向从上往下，一个接一个地布局
relative 定位: 

## 脱离文档流
  float: left position


## baseLine
inline 没有任何文字的时候基线在底部，img以基线把空间撑高了

## position
absolute:父级第一个非 static (x)      相对于它的包含块(containing block)来定位
fixed: viewport (x)     相对于它的包含块(containing block)来定位


## containing block
盒子的大小 尺寸都是根据我们包含块来计算的
首先确定包含块的位置和大小，再调整包含块内元素的位置

```css
/* 相对于它的父级来计算的 （错的） */
是相对于它的包含块来计算的
width:100%;
height:100%;
padding:
margin:
带百分比的都是相对包含块来计算的
```

## 如何确定一个 containing block

确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。
- 如果 position 属性是 fixed，包含块是 viewport
### 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
- transform 或 perspective 的值不是 none
- will-change 的值是 transform 或 perspective
- filter 的值不是 none 或 will-change 的值是 filter(只在 Firefox 下生效).
- contain 的值是 paint (例如: contain: paint;)