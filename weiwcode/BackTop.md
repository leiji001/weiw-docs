# 返回顶部

## 第一步

我们先看到页面最顶上那两行代码, 看第二行

```html
<div class="pageshow mainContainer" style="display: block;">
```

在第一个`div`后加入添加`id="114514"`

> 注: 不得与已有`id`重名

```html
<div id="114514" class="pageshow mainContainer" style="display: block;">
```

## 第二步

我们先增新个图片

```html
<div class="box  img animate js-min-zIndex int-animate js-max-zIndex ui-draggable ui-draggable-handle" style="width: 180px; position: absolute; left: 10px; top: 50px; z-index: 1;" tabindex="0">
    <div class="element animate-contain" etype="2" style="width:100%;height:100%;overflow:hidden;border-style:solid;border-width: 0px;border-radius: 0px;border-color: #000;">
        <img style="width:100%;height:100%" src="***">
    </div>
</div>
```

在第三行`<img style="width:100%;height:100%" src="***">`  
前面和后面分别加入`<a href="#114514">`和`</a>`

> 注: `href=#`后面的值需要与第一步设置的`id`一致

```html
<a href="#114514"><img style="width:100%;height:100%" src="***"></a>
```

返回顶部的基础内容到此就完成了

## 固定

> 有一些题目会让你 “返回页面顶部, 将“position”调整为固定”, 那么怎么固定呢?

```html
<div class="box  img animate js-min-zIndex int-animate js-max-zIndex ui-draggable ui-draggable-handle" style="width: 180px; position: absolute; left: 10px; top: 50px; z-index: 1;" tabindex="0">
```

在这一行里找到`position: absolute`, 将`absolute`改为`fixed`即可

## 默认隐藏

> 有一些题目会让你`参考“返回顶部默认隐藏”代码, 制作和添加图片, 默认隐藏状态, 当页面向下滑动显示, 点击图片返回页面顶部`那么怎么隐藏图片呢?

在 **“代码”** 文件夹里找到 **“返回顶部默认隐藏”** 文件夹, 里面会有两个文件：**html.txt** 与 **js.txt**  
**js.txt** 里面的文字你就放到 **JavaScript** 内即可  
我们看到 **html.txt** 这边, 里面会有两行图片`id="returnTop"`和图片默认显示`display:none`  
找到返回顶部的图片

```html
<img style="width:100%;height:100%" src="***">
```

在`img`后添加`id="returnTop"`  
在`style="width:100%;height:100%"`内添加`;display:none`

```html
<img id="returnTop" style="width:100%;height:100%;display:none" src="***">
```