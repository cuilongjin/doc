# bootstrap-validator

基于bootstrap的前端校验插件 

http://bootstrapvalidator.votintsev.ru/api

## 引包

引入css文件

```css
  <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="lib/bootstrap-validator/css/bootstrapValidator.css">
```

引入js文件

```javascript
<script src="lib/jquery/jquery.js"></script>
<script src="lib/bootstrap/js/bootstrap.js"></script>
<script src="lib/bootstrap-validator/js/bootstrapValidator.js"></script>
```



## 初始化表单校验插件

> bootstrap-validator插件会在表单提交的时候进行校验，如果校验成功了，表单会继续提交，但是如果校验失败了，就会阻止表单的提交。

```javascript
// 使用表单校验插件
$(formSelector).bootstrapValidator({
    // 1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
    excluded: [],// 全部校验

    // 2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    // 3. 指定校验字段
    fields: {
        username: {
            // 设置校验规则
            validators: {
                // 不能为空
                notEmpty: {
                    message: ''
                },
                stringLength: {
                    min: 6,
                    max: 12,
                    message: ''
                },
                // 正则校验
                regexp: {
                    regexp: /^[a-zA-Z0-9_\.]+$/,
                    message: '用户名由数字字母下划线和.组成'
                },

                callback: {

                }
            }
        },

        password: {

        }
    }
})
```



## 注册表单校验成功的事件

当表单校验成功时，会触发`success.form.bv`事件，此时会提交表单，通常我们需要禁止表单的自动提交，使用 ajax进行表单的提交。

```javascript
$('#form').on('success.form.bv', function (e) {
    e.preventDefault()
    // 使用ajax提交逻辑
    $.ajax({
    
    })
})
```



## 获取 validator 实例(对象)

当我们初始化好表单校验插件时，我们可以通过以下方法来获取表单校验的validator实例，通过validator实例调用一些方法来完成某些功能。

```javascript
// 获取表单校验实例
var validator = $('#form‘).data('bootstrapValidator')

// 使用表单校验实例可以调用一些常用的方法
validator.methodName(params)
```

## 常用方法

### 重置表单

重置表单中设置过校验的内容，将隐藏所有错误提示和图标。

```javascript
// 重置表单，隐藏所有的错误提示和图标 传入参数 true 会将内容也清空
validator.resetForm()
```

### 更新字段的状态

BootstrapValidator在用户输入内容的时候，会做校验，当调用bootstrap的插件的方法可以手动会改变字段值的状态

`validator.updateStatus(field*, status*, validator)`

| Parameter   | Type           | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ |
| `field`     | String\|jQuery | The field name or field element                              |
| `status`    | String         | Can be `NOT_VALIDATED`, `VALIDATING`, `INVALID` or `VALID`   |
| `validator` | String         | The validator name. If `null`, the method updates validity result for all validators |

