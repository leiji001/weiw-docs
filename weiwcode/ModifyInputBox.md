# 输入框文字修改

> 注：此页面未完成

## 总

```html
<div class="box ui-draggable ui-draggable-handle" style="position:absolute;width:100%;height:36px;left:0px;top:50px;z-index:2" tabindex="0">
    <div class="element" etype="5" style="width:100%;height:100%;overflow:hidden;border-style:solid;border-width: 0px;border-radius: 0px;border-color: #000;">
        <div class="form-element-drag"></div>
        <textarea id="input_name" style="width: 100%;height:100%;padding: 8px !important;font-weight: 400;font-size: 16px;overflow:hidden; resize:none; input_type="101" placeholder="姓名" ctype="5"></textarea>
    </div>
</div>
```

1. 我们看到第二行，第二行有一个`border-color: #000`，我们把`color: #`取出来，`#`后面放颜色代码，根据题目要求更改即可
2. 我们看到第四行，看到`resize:none;`后面，添加`color: #??????`（颜色根据题目要求更改）
3. 我们看到第四行最后面的`</textarea>`，在前面`"5">这里</textarea>`添加要更改的字

```html
<textarea id="input_name" style="width: 100%;height:100%;padding: 8px !important;font-weight: 400;font-size: 16px;overflow:hidden; resize:none; " input_type="101" placeholder="手机号" ctype="5">手机号</textarea>
```