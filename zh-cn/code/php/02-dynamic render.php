<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- 其实这是一个php文件, 在这个文件中可以写html代码,当然也可以写php的语法结构,php的语法结构可以写在任何一个位置 -->
    <!-- 一个php页面当中,可以写多个php语法结构,但是php语法结构不能嵌套-->
    <!-- 要根据数据,去渲染页面 -->
    <?php 
        $arr = ['zs', 'ls',  'ww'];
    ?>
    <ul>
        <?php 
            // 需求: 根据$arr中的数据,动态的创建li表现,渲染到页面上
            // 1. 遍历数组
            foreach( $arr as $v){
            // 2. 动态的创建li标签,渲染到页面上
            echo "<li>$v</li>";
            }
        ?>
    </ul>

    <!-- 另外一种用于渲染复杂html结构的方法 -->
    <ul>
        <?php foreach($arr as $v) { ?>

            <li><?php echo $v?></li>

        <?php }?>
    </ul>
</body>
</html>