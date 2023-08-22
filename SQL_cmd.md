# SQL 语法

- SQL（Structured Query Language）是一种用于管理、操作和查询数据库的标准化语言，被广泛应用于各种类型的数据库，如 MySQL、PostgreSQL、Oracle、Microsoft SQL Server 等，本系列教程中，我们将以通用的 SQL 语法带大家入门 SQL 查询的学习。

## 全表查询 

当我们使用 `select * from 表名` 这样的 SQL 语句时，就是在进行全表查询，它会返回数据表中的所有行，让我们可以全面了解表中的数据。

## 示例

让我们假设有一张名为 `student` 的数据表，它存储了学生的信息，包括学号、姓名、年龄等。

现在，我们来使用 select 全表查询语句，查看整个学生表的内容。

数据表 `student`：

| 学号 | 姓名 | 年龄 |
| ---- | ---- | ---- |
| 101  | 小明 | 20   |
| 102  | 小红 | 22   |
| 103  | 小刚 | 21   |
| 104  | 小丽 | 19   |

SQL 查询语句：

```sql
select * from student;
```

查询结果：

| 学号 | 姓名 | 年龄 |
| ---- | ---- | ---- |
| 101  | 小明 | 20   |
| 102  | 小红 | 22   |
| 103  | 小刚 | 21   |
| 104  | 小丽 | 19   |

## 查询-选择查询 

### 显示特定字段

语法：`SELECT {列名1,2,3,4......}`

假设有一张名为 `students` 的学生数据表，它存储了班级里学生的信息，包括字段 **姓名（name）、年龄（age）、性别（gender）、分数（score）**等。

|name|age|gender|score|
|----|----|----|----|
|张三|18|1|60|

1. 现在，我们使用"选择查询"来获取所有学生的姓名（name）和性别（gender）信息，SQL 语句如下：

`select name,gender from students;`

结果只输出`name`、`gender`列字段的内容

## 查询-别名

`{原始字段名} as {别名}`

假设有一张名为 employees 的数据表，它存储了团队成员的信息，包括姓名（name）、年龄（age）、职位（position）等：

|name|age|position|
|----|----|----|
|张三|18|1|

`select name as 员工姓名, position as 职位名称 from employees;`

|员工姓名|职位名称|
|:----------:|:-------------:|
|John|Project Manager|
|Alice|Software Engineer|
|Bob|Product Designer|
|Kate|Marketing Specialist|

## 查询-常量和运算

假设有一张名为`orders`的数据表，它存储了订单信息，包括订单编号（order_id）、商品单价（unit_price）、购买数量（quantity）等：

|  order_id  | unit_price | quantity |
|------------|------------|----------|
|   1001     |   10.00    |   5      |
|   1002     |   20.00    |   3      |
|   1003     |   15.00    |   2      |
|   1004     |   25.00    |   4      |

计算每个订单的总金额（total_amount），即商品单价（unit_price）乘以购买数量（quantity）

```sql
select
order_id,
unit_price,
quantity,
unit_price * quantity as total_amount
from orders;
```

|  order_id  | unit_price | quantity | total_amount |
|------------|------------|----------|--------------|
|   1001     |   10.00    |   5      |   50.00      |
|   1002     |   20.00    |   3      |   60.00      |
|   1003     |   15.00    |   2      |   30.00      |
|   1004     |   25.00    |   4      |   100.00     |

## 条件查询-where

where 子句的语法如下：

```sql
SELECT 列1, 列2, ...
FROM 表名
WHERE 条件;
```

其中，`列1, 列2, ...`是你要选择的列，可以是具体的列名，也可以是`*`表示选择所有列。`表名`是你要从中查询数据的表名。`条件`是指定的查询条件，可以使用比较运算符（如`=`、`<`、`>`等）、逻辑运算符（如`AND`、`OR`等）、IN 操作符、LIKE 操作符等来设置条件。

假设有一张名为`products`的数据表，它存储了产品信息，包括产品名称（name）、单价（price）、库存（stock）等：

|   name   | price | stock |
|----------|-------|-------|
|   A      | 10.00 |   50  |
|   B      | 20.00 |   30  |
|   C      | 15.00 |   20  |
|   D      | 25.00 |   10  |

"WHERE" 来筛选出库存小于等于 20 的产品 <br>

```sql
-- SQL查询语句
select
    name,
    price, 
    stock
from products
where stock <= 20;
```

|   name   | price | stock |
|----------|-------|-------|
|   C      | 15.00 |   20  |
|   D      | 25.00 |   10  |

## 条件查询-运算符

运算符是 SQL 中用于在条件查询中进行条件判断的特殊符号，比如 `=`、 `!=`、`<`、`>` 等。通过使用不同的运算符，我们可以在查询语句中设定多样化的条件，从而根据数据的不同属性进行灵活的筛选和过滤。

使用 `!=` 运算符来筛选不符的项目<br>
使用 `>` 运算符来筛选大于某值<br>
使用 `BETWEEN` 运算符来筛选在某个范围内

有一张名为 `employees` 的数据表，它存储了员工信息，包括员工姓名（name）、年龄（age）、工资（salary）等

|   name   | age | salary |
|----------|-----|--------|
|   小明   |  25 |  5000  |
|   小红   |  30 |  6000  |
|   小李   |  28 |  5500  |
|   小张   |  22 |  4500  |

1) 使用 "!=" 运算符筛选出 name 不是 '小张' 的员工：

```sql
-- SQL查询语句
select 
    name, 
    age, 
    salary 
from employees 
where name != '小张';
```

|   name   | age | salary |
|----------|-----|--------|
|   小明   |  25 |  5000  |
|   小红   |  30 |  6000  |
|   小李   |  28 |  5500  |

2) 使用 ">" 运算符筛选出工资高于 5500 的员工：

```sql
-- SQL查询语句
select 
    name, 
    age, 
    salary 
from employees 
where salary > 5500;
```

|   name   | age | salary |
|----------|-----|--------|
|   小红   |  30 |  6000  |

3) 使用 "BETWEEN" 运算符筛选出年龄在 25 到 30 之间的员工：

```sql
-- SQL查询语句
select name, age, salary from employees where age between 25 and 30;
```

|   name   | age | salary |
|----------|-----|--------|
|   小明   |  25 |  5000  |
|   小红   |  30 |  6000  |
|   小李   |  28 |  5500  |

## 条件查询-空值

使用 `IS NULL` 和 `IS NOT NULL` 来判断字段是否为空值或非空值

有一张名为 `employees` 的数据表，它存储了员工信息，包括员工姓名（name）、年龄（age）、入职日期（hire_date）

|   name   | age | hire_date  |
|----------|-----|------------|
|   小明   |  25 | 2020-01-01 |
|   小红   |  30 | 2020-02-15 |
|   小李   |  28 |   NULL     |
|   小张   | NULL| 2020-03-20 |

```sql
-- SQL查询语句
select name, age from employees where hire_date is null;
```

| name | age  |
| ---- | ---- |
| 小李 | 28   |

## 条件查询 - 模糊查询

使用 `LIKE` 关键字实现模糊查询

通配符来代表零个或多个字符:
- 百分号（%）：表示任意长度的任意字符序列。
- 下划线（_）：表示任意单个字符。

有一张名为`employees`的数据表，它存储了员工信息，包括员工姓名（name）、年龄（age）、职位（position）

|   name   | age | position       |
|----------|-----|----------------|
|   张三   |  25 | 软件工程师     |
|   李四   |  30 | 数据分析师     |
|   王五   |  28 | 产品经理       |
|   小明   |  22 | 软件测试工程师 |

使用 LIKE 模糊查询来找出姓名（name）中包含关键字 "张" 的员工信息

```sql
-- SQL查询语句
select name, age, position from employees where name like '%张%';
```

|   name   | age | position       |
|----------|-----|----------------|
|   张三   |  25 | 软件工程师     |

模糊查询匹配开头和结尾

```sql
-- 只查询以 "张" 开头的数据行
select name, age, position from employees where name like '张%';

-- 只查询以 "张" 结尾的数据行
select name, age, position from employees where name like '%张';
```

可以使用 `not like` 来查询不包含某关键字的信息

## 条件查询 - 逻辑运算

在逻辑运算中，常用的运算符有：

- `AND`：表示逻辑与，要求同时满足多个条件，才返回 true。
- `OR`：表示逻辑或，要求满足其中任意一个条件，就返回 true。
- `NOT`：表示逻辑非，用于否定一个条件（本来是 true，用了 not 后转为 false）

有一张名为`employees`的数据表，它存储了员工信息，包括员工姓名（name）、年龄（age）、工资（salary）

| name | age  | salary |
| ---- | ---- | ------ |
| 张三 | 25   | 10000  |
| 李四 | 30   | 12000  |
| 李五 | 28   | 15000  |
| 小明 | 22   | 8000   |

找出姓名中包含关键字 "李" **且** 年龄小于 30 岁的员工信息

```sql
-- SQL查询语句
select name, age, salary from employees where name like '%李%' and age < 30;
```

| name | age  | salary |
| ---- | ---- | ------ |
| 李五 | 28   | 15000  |

## 去重

过滤掉重复的记录，只保留不同的记录

使用 `DISTINCT` 关键字来实现去重操作

有一张名为`students`的数据表，它存储了学生信息，包括学生姓名（name）、班级ID（class_id）、考试编号（exam_num）、成绩（score）等

|   name   | class_id | exam_num | score |
|----------|----------|----------|-------|
|   张三   |   1      | 1        | 90    |
|   李四   |   2      | 2        | 85    |
|   王五   |   1      | 1        | 92    |
|   李四   |   2      | 3        | 88    |

使用`DISTINCT`关键字来找出不同的班级 ID

```sql
-- SQL 查询语句
select distinct class_id from students;
```

查询结果：

| class_id |
|----------|
|   1      |
|   2      |

`DISTINCT` 关键字还支持根据多个字段的组合来进行去重操作，确保多个字段的组合是唯一的

```sql
distinct 字段1, 字段2, 字段3, ...
```


## 排序

使用 `ORDER BY` 关键字来实现排序操作。后面可以选择升序（ASC）或降序（DESC）排列。

有一张名为 `students` 的数据表，它存储了学生信息，包括学生姓名（name）、年龄（age）和成绩（score）

|   name   | age | score |
|----------|-----|-------|
|   张三   |  18 |  90   |
|   李四   |  20 |  85   |
|   王五   |  19 |  92   |
|   赵六   |  20 |  88   |

使用`ORDER BY`关键字来对学生表进行排序

```sql
-- SQL 查询语句 1
select name, age from students order by age asc;

-- SQL 查询语句 2
select name, score from students order by score desc;
```

查询语句 1 结果，按照年龄升序（从小到大）：

|   name   | age |
|----------|-----|
|   张三   |  18 |
|   王五   |  19 |
|   李四   |  20 |
|   赵六   |  20 |



查询语句 2 结果，按照分数降序（从大到小）：

|   name   | score |
|----------|-------|
|   王五   |  92   |
|   张三   |  90   |
|   赵六   |  88   |
|   李四   |  85   |


还可以根据多个字段的值进行排序。当第一个字段的值相同时，再按照第二个字段的值进行排序，以此类推

```sql
order by 字段1 [升序/降序], 字段2 [升序/降序], ...
```

## 截断和偏移

1) 你可以使用手指挡住不需要看的部分（即截断）

2) 根据任务的编号，直接翻到需要查看的位置（即偏移）


使用 `LIMIT` 关键字来实现数据的截断和偏移

应用场景是分页，即网站内容很多时，用户可以根据页号每次只看部分数据

有一张名为 `tasks` 的数据表，它存储了待办事项信息，包括任务名称（task_name）和截止日期（due_date）

数据表`tasks`：

|    task_name   | due_date  |
|----------------|-----------|
|  完成报告      | 2023-08-05|
|  预约医生      | 2023-08-08|
|  购买礼物      | 2023-08-10|
|  安排旅行      | 2023-08-15|

使用`LIMIT`关键字来进行分页查询

```sql
-- LIMIT 后只跟一个整数，表示要截断的数据条数（一次获取几条）
select task_name, due_date from tasks limit 2;

-- LIMIT 后跟 2 个整数，依次表示从第几条数据开始、一次获取几条
select task_name, due_date from tasks limit 2, 2;
```

查询语句 1 结果，只获取了 2 条数据：

|   task_name   | due_date  |
|---------------|-----------|
|  完成报告      | 2023-08-05|
|  预约医生      | 2023-08-08|



查询语句 2 结果，从下标为 2（第 3 条）数据的位置开始获取 2 条数据：

|   task_name   | due_date  |
|---------------|-----------|
|  购买礼物      | 2023-08-10|
|  安排旅行      | 2023-08-15|

SQL 查询语句，我们分别选取了待办事项表中的前两个任务和从第三个任务开始的两个任务，实现了数据的截断和偏移

## 条件分支

条件分支 `case when`

类似 if else 条件判断语句

使用 `case when` 可以在查询结果中根据特定的条件动态生成新的列或对现有的列进行转换

有一个学生表 `student`，包含以下字段：`name`（姓名）、`age`（年龄）

| name  | age |
|-------|-----|
| 小明  | 18  |
| 鸡哥  | 25  |
| 李华  | 30  |
| 王五  | 40  |

根据 name 来判断学生是否会说 RAP，并起别名为 can_rap

```sql
SELECT
  name,
  CASE WHEN (name = '鸡哥') THEN '会' ELSE '不会' END AS can_rap
FROM
  student;
```

| name  | can_rap |
|-------|---------|
| 小明  | 不会    |
| 鸡哥  | 会      |
| 李华  | 不会    |
| 王五  | 不会    |

`case when` 支持同时指定多个分支

```sql
CASE WHEN (条件1) THEN 结果1
	   WHEN (条件2) THEN 结果2
	   ...
	   ELSE 其他结果 END
```

## 时间函数

常用的时间函数有：

- DATE：获取当前日期
- DATETIME：获取当前日期时间
- TIME：获取当前时间

有一个订单表 `orders`，包含以下字段：`order_id`（订单号）、`order_date`（下单日期）、`order_time`（下单时间）

| order_id | order_date  | order_time |
|---------|-------------|------------|
| 1       | 2023-08-01  | 12:30:45   |
| 2       | 2023-08-01  | 14:20:10   |
| 3       | 2023-08-02  | 09:15:00   |
| 4       | 2023-08-02  | 18:05:30   |

使用时间函数获取当前日期、当前日期时间和当前时间：

```sql
-- 获取当前日期
SELECT DATE() AS current_date;

-- 获取当前日期时间
SELECT DATETIME() AS current_datetime;

-- 获取当前时间
SELECT TIME() AS current_time;
```

> 为了方便对比，放到同一个表格

| current_date | current_datetime       | current_time |
|--------------|------------------------|--------------|
| 2023-08-01   | 2023-08-01 14:30:00    | 14:30:00     |


> 注意，这里的日期、日期时间和时间将根据当前的系统时间来生成，实际运行结果可能会因为当前时间而不同。



还有很多时间函数，比如计算两个日期的相差天数、获取当前日期对应的毫秒数等，实际运用时自行查阅

## 字符串处理

有一个员工表 `employees`，包含以下字段：`id`（员工编号）、`name`（员工姓名）

| id | name       |
|----|------------|
| 1  | 小明       |
| 2  | 热dog      |
| 3  | Fish摸摸   |
| 4  | 鸡哥       |

1) 使用字符串处理函数 `UPPER` 将姓名转换为大写

```sql
-- 将姓名转换为大写
SELECT name, UPPER(name) AS upper_name
FROM employees;
```

| name       | upper_name |
|------------|------------|
| 小明       | 小明       |
| 热dog      | 热DOG      |
| Fish摸摸   | FISH摸摸   |
| 鸡哥       | 鸡哥       |

2) 使用字符串处理函数 `LENGTH` 计算姓名长度

```sql
-- 计算姓名长度
SELECT name, LENGTH(name) AS name_length
FROM employees;
```

| name       | name_length |
|------------|-------------|
| 小明       | 2           |
| 热dog      | 4           |
| Fish摸摸   | 6           |
| 鸡哥       | 2           |

3) 使用字符串处理函数 `LOWER` 将姓名转换为小写

```sql
-- 将姓名转换为小写并进行条件筛选
SELECT name, LOWER(name) AS lower_name
FROM employees;
```

| name     | lower_name |
| -------- | ---------- |
| 小明     | 小明       |
| 热dog    | 热dog      |
| Fish摸摸 | fish摸摸   |
| 鸡哥     | 鸡哥       |

## 聚合函数

聚合函数是一类用于对数据集进行 **汇总计算** 的特殊函数。它们可以对一组数据执行诸如 **计数、求和、平均值、最大值和最小值** 等操作。聚合函数通常在 SELECT 语句中配合 `GROUP BY` 子句使用，用于对分组后的数据进行汇总分析

常见的聚合函数包括：

- COUNT：计算指定列的行数或非空值的数量。
- SUM：计算指定列的数值之和。
- AVG：计算指定列的数值平均值。
- MAX：找出指定列的最大值。
- MIN：找出指定列的最小值。

有一个订单表 `orders`，包含以下字段：`order_id`（订单号）、`customer_id`（客户编号）、`amount`（订单金额）

| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |

1. 使用聚合函数 `COUNT` 计算订单表中的总订单数

```sql
SELECT COUNT(*) AS order_num
FROM orders;
```

查询结果：

| order_num |
| --------- |
| 4         |

2. 使用聚合函数 `COUNT(DISTINCT 列名)` 计算订单表中不同客户的数量：


```sql
SELECT COUNT(DISTINCT customer_id) AS customer_num
FROM orders;
```

查询结果：

| customer_num |
| ------------ |
| 3            |

3. 使用聚合函数 `SUM` 计算总订单金额：

```sql
SELECT SUM(amount) AS total_amount
FROM orders;
```

查询结果：

| total_amount |
| ------------ |
| 500          |

## 单字段分组

分组聚合是一种对数据进行分类并对每个分类进行聚合计算的操作。它允许我们按照指定的列或字段对数据进行分组，然后对每个分组应用聚合函数，如 COUNT、SUM、AVG 等，以获得分组后的汇总结果

使用 `GROUP BY` 关键字对数据进行分组

有一个订单表 `orders`，包含以下字段：`order_id`（订单号）、`customer_id`（客户编号）、`amount`（订单金额）

| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |

1. 使用分组聚合查询中每个客户的编号：

```sql
SELECT customer_id
FROM orders
GROUP BY customer_id;
```

查询结果：

| customer_id |
| ----------- |
| A001        |
| A002        |
| A003        |

2. 使用分组聚合查询每个客户的下单数：

```sql
SELECT customer_id, COUNT(order_id) AS order_num
FROM orders
GROUP BY customer_id;
```

查询结果：

| customer_id | order_num |
| ----------- | --------- |
| A001        | 2         |
| A002        | 1         |
| A003        | 1         |

## 多字段分组

单字段分组并不能满足我们的需求，比如想统计学校里每个班级每次考试的学生情况，这时就可以使用多字段分组


使用 `GROUP BY` 语法

有一个订单表 `orders`，包含以下字段：`order_id`（订单号）、`product_id`（商品编号）、`customer_id`（客户编号）、`amount`（订单金额）


| order_id | product_id | customer_id | amount |
|---------|-------------|--------|---------|
| 1       | 1      | A001        | 100    |
| 2       | 1      | A002        | 200    |
| 3       | 1      | A001        | 150    |
| 4       | 1      | A003        | 50     |
| 5 | 2 | A001 | 50 |

查询使用多字段分组查询表中 **每个客户** 购买的 **每种商品** 的总金额，相当于按照客户编号和商品编号分组


```sql
-- 查询每个用户购买的每种商品的总金额，按照客户编号和商品编号分组
SELECT customer_id, product_id, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_id, product_id;
```


查询结果：

| customer_id | product_id | total_amount |
| ----------- | ---------- | ------------ |
| A001        | 1          | 250          |
| A001        | 2          | 50           |
| A002        | 1          | 200          |
| A003        | 1          | 50           |

## having子句

`HAVING` 子句用于在分组聚合后对分组进行过滤。它允许我们对分组后的结果进行条件筛选，只保留满足特定条件的分组


`HAVING` 子句与条件查询 `WHERE` 子句的区别在于，`WHERE` 子句用于在 **分组之前** 进行过滤，而 HAVING 子句用于在 **分组之后** 进行过滤

有一个订单表 `orders`，包含以下字段：`order_id`（订单号）、`customer_id`（客户编号）、`amount`（订单金额）。


| order_id | customer_id | amount |
|---------|-------------|--------|
| 1       | A001        | 100    |
| 2       | A002        | 200    |
| 3       | A001        | 150    |
| 4       | A003        | 50     |

1. 使用 HAVING 子句查询订单数超过 1 的客户：

```sql
SELECT customer_id, COUNT(order_id) AS order_num
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > 1;
```

查询结果：

| customer_id | order_num |
| ----------- | --------- |
| A001        | 2         |


2. 使用 HAVING 子句查询订单总金额超过 100 的客户：

```sql
-- 查询订单总金额超过100的客户
SELECT customer_id, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 100;
```

查询结果：

| customer_id | total_amount |
| ----------- | ------------ |
| A001        | 250          |
| A002        | 200          |

## 关联查询 - cross join

在之前的教程中，我们所有的查询操作都是在单个数据表中进行的。但有时，我们可能希望在单张表的基础上，获取更多额外数据，比如获取学生表中学生所属的班级信息等。这时，就需要使用关联查询。

 **关联查询是一种用于联合多个数据表中的数据的查询方式**

`CROSS JOIN` 是一种简单的关联查询，不需要任何条件来匹配行，它直接将左表的 **每一行** 与右表的 **每一行** 进行组合，返回的结果是两个表的笛卡尔积

有一个 **员工表 `employees`** ，包含以下字段：`emp_id`（员工编号）、`emp_name`（员工姓名）、`department`（所属部门）、`salary`（工资）。数据如下：

| emp_id | emp_name | department | salary |
|--------|----------|------------|--------|
| 1      | 小明     | 技术部     | 5000   |
| 2      | 鸡哥     | 财务部     | 6000   |
| 3      | 李华     | 销售部     | 4500   |


还有一个 **部门表 `departments`** ，包含以下字段：`department`（部门名称）、`manager`（部门经理）、`location`（所在地）。数据如下：

| department | manager | location |
|:------------:|:---------:|:----------:|
| 技术部     | 张三    | 上海     |
| 财务部     | 李四    | 北京     |
| 销售部     | 王五    | 广州     |

使用 `CROSS JOIN` 进行关联查询，将员工表和部门表的所有行组合在一起，获取员工姓名、工资、部门名称和部门经理，示例 SQL 代码如下：

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
CROSS JOIN departments d;
```



- 注意，在多表关联查询的 SQL 中，我们最好在选择字段时指定字段所属表的名称（比如 e.emp_name），还可以通过给表起别名（比如 employees e）来简化 SQL 语句。

查询结果：

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| 小明     | 5000   | 技术部     | 张三    |
| 小明     | 5000   | 财务部     | 李四    |
| 小明     | 5000   | 销售部     | 王五    |
| 鸡哥     | 6000   | 技术部     | 张三    |
| 鸡哥     | 6000   | 财务部     | 李四    |
| 鸡哥     | 6000   | 销售部     | 王五    |
| 李华     | 4500   | 技术部     | 张三    |
| 李华     | 4500   | 财务部     | 李四    |
| 李华     | 4500   | 销售部     | 王五    |


## 关联查询 - inner join

`INNER JOIN` 是一种常见的关联查询方式，它根据两个表之间的关联条件，将满足条件的行组合在一起

注意，`INNER JOIN` 只返回两个表中满足关联条件的 **交集部分** ，即在两个表中都存在的匹配行。

有一个员工表 `employees`，包含以下字段：`emp_id`（员工编号）、`emp_name`（员工姓名）、`department`（所属部门）、`salary`（工资）。数据如下：

| emp_id | emp_name | department | salary |
|--------|----------|------------|--------|
| 1      | 小明     | 技术部     | 5000   |
| 2      | 鸡哥     | 财务部     | 6000   |
| 3      | 李华     | 销售部     | 4500   |



还有一个部门表 `departments`，包含以下字段：`department`（部门名称）、`manager`（部门经理）、`location`（所在地）。数据如下：

| department | manager | location |
| ---------- | ------- | -------- |
| 技术部     | 张三    | 上海     |
| 财务部     | 李四    | 北京     |
| 销售部     | 王五    | 广州     |
| 摸鱼部     | 赵二    | 吐鲁番   |


使用 `INNER JOIN` 进行关联查询，根据员工表和部门表之间的公共字段 `部门名称（department）` 进行匹配，将员工的姓名、工资以及所属部门和部门经理组合在一起：

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
JOIN departments d ON e.department = d.department;
```



查询结果如下：

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| 小明     | 5000   | 技术部     | 张三    |
| 鸡哥     | 6000   | 财务部     | 李四    |
| 李华     | 4500   | 销售部     | 王五    |

使用 `INNER_JOIN` 后，只有两个表之间存在对应关系的数据才会被放到查询结果中

## 关联查询 - outer join

`OUTER JOIN` 是一种关联查询方式，它根据指定的关联条件，将两个表中满足条件的行组合在一起，并 **包含没有匹配的行**


在 `OUTER JOIN` 中，包括 `LEFT OUTER JOIN` 和 `RIGHT OUTER JOIN` 两种类型，它们分别表示 *查询左表和右表的所有行* （即使没有被匹配），再加上满足条件的交集部分。


有一个员工表 `employees`，包含以下字段：`emp_id`（员工编号）、`emp_name`（员工姓名）、`department`（所属部门）、`salary`（工资）。数据如下：

| emp_id | emp_name | department | salary |
| ------ | -------- | ---------- | ------ |
| 1      | 小明     | 技术部     | 5000   |
| 2      | 鸡哥     | 财务部     | 6000   |
| 3      | 李华     | 销售部     | 4500   |



还有一个部门表 `departments`，包含以下字段：`department`（部门名称）、`manager`（部门经理）、`location`（所在地）。数据如下：

| department | manager | location |
| ---------- | ------- | -------- |
| 技术部     | 张三    | 上海     |
| 财务部     | 李四    | 北京     |
| 人事部     | 王五    | 广州     |
| 摸鱼部     | 赵二    | 吐鲁番   |

使用 LEFT JOIN 进行关联查询，根据员工表和部门表之间的部门名称进行匹配，将员工的姓名、工资以及所属部门和部门经理组合在一起，并包含所有员工的信息：

```sql
SELECT e.emp_name, e.salary, e.department, d.manager
FROM employees e
LEFT JOIN departments d ON e.department = d.department;
```



查询结果：

| emp_name | salary | department | manager |
|----------|--------|------------|---------|
| 小明     | 5000   | 技术部     | 张三    |
| 鸡哥     | 6000   | 财务部     | 李四    |
| 李华     | 4500   | 销售部     | NULL    |


关注下表格的最后一条数据，李华所属的销售部并没有在部门表中，但仍然返回在了结果集中，manager 为 NULL。

有些数据库并不支持 RIGHT JOIN 语法，那么如何实现 RIGHT JOIN 呢？

其实只需要把主表（from 后面的表）和关联表（LEFT JOIN 后面的表）顺序进行调换即可！

## 子查询

子查询是指在一个查询语句内部 **嵌套** 另一个完整的查询语句， **内层查询** 被称为 **子查询** 。子查询可以用于获取更复杂的查询结果或者用于过滤数据。

有以下两个数据表：`orders` 和 `customers`，分别包含订单信息和客户信息。

orders 表：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



customers 表：

| customer_id | name     | city       |
|-------------|----------|------------|
| 101         | Alice    | New York   |
| 102         | Bob      | Los Angeles|
| 103         | Charlie  | Chicago    |

现在，我们希望查询出订单总金额 > 200 的客户的姓名和他们的订单总金额，示例 SQL 如下：

```sql
-- 主查询
SELECT name, total_amount
FROM customers
WHERE customer_id IN (
    -- 子查询
    SELECT DISTINCT customer_id
    FROM orders
    WHERE total_amount > 200
);
```

在上述 SQL 中，先通过子查询从订单表中过滤查询出了符合条件的客户 id，然后再根据客户 id 到客户信息表中查询客户信息，这样可以少查询很多客户信息数据。

| name    | total_amount |
| ------- | ------------ |
| Bob     | 350          |
| Charlie | 500          |

## 子查询 - exists

之前的教程讲到，子查询是一种强大的查询工具，它可以嵌套在主查询中，帮助我们进行更复杂的条件过滤和数据检索。

其中，子查询中的一种特殊类型是 `exists` **子查询** ，用于检查主查询的结果集是否存在满足条件的记录，它 **返回布尔值（True 或 False）** ，而不返回实际的数据

有以下两个数据表：`orders` 和 `customers`，分别包含订单信息和客户信息。

orders 表：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



customers 表：

| customer_id | name    | city        |
| ----------- | ------- | ----------- |
| 101         | Alice   | New York    |
| 102         | Bob     | Los Angeles |
| 103         | Charlie | Chicago     |
| 104         | 赵二    | China       |

我们希望查询出 **存在订单的** 客户姓名和订单金额。

使用 exists 子查询的方式，SQL 代码如下：

```sql
-- 主查询
SELECT name, total_amount
FROM customers
WHERE EXISTS (
    -- 子查询
    SELECT 1
    FROM orders
    WHERE orders.customer_id = customers.customer_id
);
```



上述语句中，先遍历客户信息表的每一行，获取到客户编号；然后执行子查询，从订单表中查找该客户编号是否存在，如果存在则返回结果。

| name   | total_amount |
|--------|--------------|
| Alice  | 200          |
| Bob    | 350          |
| Charlie| 500          |


和 exists 相对的是 not exists，用于查找不满足存在条件的记录。

## 组合查询

组合查询是一种将多个 SELECT 查询结果合并在一起的查询操作


常见的组合查询操作：`UNION` 和 `UNION ALL`。

1. UNION 操作：它用于将两个或多个查询的结果集合并， **并去除重复的行** 。即如果两个查询的结果有相同的行，则只保留一行。

2. UNION ALL 操作：它也用于将两个或多个查询的结果集合并， **但不去除重复的行** 。即如果两个查询的结果有相同的行，则全部保留。


有以下两个数据表：`table1` 和 `table2`，分别包含不同部门的员工信息。

table1 表：

| emp_id | name     | age | department |
|--------|----------|-----|------------|
| 101    | Alice    | 25  | HR         |
| 102    | Bob      | 28  | Finance    |
| 103    | Charlie  | 22  | IT         |



table2 表：

| emp_id | name  | age  | department |
| ------ | ----- | ---- | ---------- |
| 101    | Alice | 25   | HR         |
| 201    | David | 27   | Finance    |
| 202    | Eve   | 24   | HR         |
| 203    | Frank | 26   | IT         |


现在，我们想要合并这两张表的数据，分别执行 UNION 操作和 UNION ALL 操作。

UNION 操作：

```sql
SELECT name, age, department
FROM table1
UNION
SELECT name, age, department
FROM table2;
```



UNION 操作的结果，去除了重复的行（名称为 Alice）：

| name    | age | department |
|---------|-----|------------|
| Alice   | 25  | HR         |
| Bob     | 28  | Finance    |
| Charlie | 22  | IT         |
| David   | 27  | Finance    |
| Eve     | 24  | HR         |
| Frank   | 26  | IT         |




UNION ALL 操作：

```sql
-- UNION ALL操作
SELECT name, age, department
FROM table1
UNION ALL
SELECT name, age, department
FROM table2;
```



结果如下，保留了重复的行：

| name    | age  | department |
| ------- | ---- | ---------- |
| Alice   | 25   | HR         |
| Bob     | 28   | Finance    |
| Charlie | 22   | IT         |
| Alice   | 25   | HR         |
| David   | 27   | Finance    |
| Eve     | 24   | HR         |
| Frank   | 26   | IT         |


## 开窗函数 - sum over

开窗函数是一种强大的查询工具，它允许我们在查询中进行对分组数据进行计算、 **同时保留原始行的详细信息**


开窗函数可以与聚合函数（如 SUM、AVG、COUNT 等）结合使用，但与普通聚合函数不同，开窗函数不会导致结果集的行数减少。

打个比方，可以将开窗函数想象成一种 "透视镜"，它能够将我们聚焦在某个特定的分组，同时还能看到整体的全景。

`sum over`

该函数用法为：

```sql
SUM(计算字段名) OVER (PARTITION BY 分组字段名)
```

有订单表 `orders`，表格数据如下：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |


我们希望计算每个客户的订单总金额，并显示每个订单的详细信息。

示例 SQL 如下：

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    SUM(total_amount) OVER (PARTITION BY customer_id) AS customer_total_amount
FROM
    orders;
```



查询结果：

| order_id | customer_id | order_date  | total_amount | customer_total_amount |
|----------|-------------|-------------|--------------|-----------------------|
| 1        | 101         | 2023-01-01  | 200          | 320                   |
| 3        | 101         | 2023-01-10  | 120          | 320                   |
| 2        | 102         | 2023-01-05  | 350          | 350                   |
| 4        | 103         | 2023-01-15  | 500          | 500                   |



在上面的示例中，我们使用开窗函数 SUM 来计算每个客户的订单总金额（customer_total_amount），并使用 PARTITION BY 子句按照customer_id 进行分组。从前两行可以看到，开窗函数保留了原始订单的详细信息，同时计算了每个客户的订单总金额。


## 开窗函数 - sum over order by

sum over order by，可以实现同组内数据的 **累加求和** 。

示例用法如下：

```sql
SUM(计算字段名) OVER (PARTITION BY 分组字段名 ORDER BY 排序字段 排序规则)
```


我们有订单表 `orders`，表格数据如下：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



现在，我们希望计算每个客户的历史订单累计金额，并显示每个订单的详细信息。

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    SUM(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date ASC) AS cumulative_total_amount
FROM
    orders;
```



结果将是：

| order_id | customer_id | order_date  | total_amount | cumulative_total_amount |
|----------|-------------|-------------|--------------|-------------------------|
| 1        | 101         | 2023-01-01  | 200          | 200                     |
| 3        | 101         | 2023-01-10  | 120          | 320                     |
| 2        | 102         | 2023-01-05  | 350          | 350                     |
| 4        | 103         | 2023-01-15  | 500          | 500                     |


示例中，我们使用开窗函数 SUM 来计算每个客户的历史订单累计金额（cumulative_total_amount），并使用 PARTITION BY 子句按照 customer_id 进行分组，并使用 ORDER BY 子句按照 order_date 进行排序。从结果的前两行可以看到，开窗函数保留了原始订单的详细信息，同时计算了每个客户的历史订单累计金额；相比于只用 sum over，同组内的累加列名称

## 开窗函数 - rank

Rank 开窗函数是 SQL 中一种用于对查询结果集中的行进行 **排名** 的开窗函数。它可以根据指定的列或表达式对结果集中的行进行排序，并为每一行分配一个排名。在排名过程中，相同的值将被赋予相同的排名，而不同的值将被赋予不同的排名。

> 当存在并列（相同排序值）时，Rank 会跳过后续排名，并保留相同的排名。

Rank 开窗函数的常见用法是在查询结果中查找前几名（Top N）或排名最高的行。

Rank 开窗函数的语法如下：

```sql
RANK() OVER (
  PARTITION BY 列名1, 列名2, ... -- 可选，用于指定分组列
  ORDER BY 列名3 [ASC|DESC], 列名4 [ASC|DESC], ... -- 用于指定排序列及排序方式
) AS rank_column
```

其中，`PARTITION BY` 子句可选，用于指定分组列，将结果集按照指定列进行分组；`ORDER BY` 子句用于指定排序列及排序方式，决定了计算 Rank 时的排序规则。`AS rank_column` 用于指定生成的 Rank 排名列的别名。


有订单表 `orders`，表格数据如下：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



现在，我们希望为每个客户的订单按照订单金额降序排名，并显示每个订单的详细信息。

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    RANK() OVER (PARTITION BY customer_id ORDER BY total_amount DESC) AS customer_rank
FROM
    orders;
```



查询结果：

| order_id | customer_id | order_date | total_amount | customer_rank |
| -------- | ----------- | ---------- | ------------ | ------------- |
| 1        | 101         | 2023-01-01 | 200          | 1             |
| 3        | 101         | 2023-01-10 | 120          | 2             |
| 2        | 102         | 2023-01-05 | 350          | 1             |
| 4        | 103         | 2023-01-15 | 500          | 1             |



在上面的示例中，我们使用开窗函数 RANK 来为每个客户的订单按照订单金额降序排名（customer_rank），并使用 PARTITION BY 子句按照 customer_id 进行分组，并使用 ORDER BY 子句按照 total_amount 从大到小进行排序。

可以看到，开窗函数保留了原始订单的详细信息，同时计算了每个客户的订单金额排名。


## 开窗函数 - row_number

Row_Number 开窗函数是 SQL 中的一种用于为查询结果集中的每一行 **分配唯一连续排名** 的开窗函数。

它与之前讲到的 Rank 函数，Row_Number 函数为每一行都分配一个唯一的整数值，不管是否存在并列（相同排序值）的情况。每一行都有一个唯一的行号，从 1 开始连续递增。

Row_Number 开窗函数的语法如下（几乎和 Rank 函数一模一样）：

```sql
ROW_NUMBER() OVER (
  PARTITION BY column1, column2, ... -- 可选，用于指定分组列
  ORDER BY column3 [ASC|DESC], column4 [ASC|DESC], ... -- 用于指定排序列及排序方式
) AS row_number_column
```

其中，`PARTITION BY`子句可选，用于指定分组列，将结果集按照指定列进行分组。`ORDER BY` 子句用于指定排序列及排序方式，决定了计算 Row_Number 时的排序规则。`AS row_number_column` 用于指定生成的行号列的别名。

有订单表 `orders`，表格数据如下：

| order_id | customer_id | order_date | total_amount |
|----------|-------------|------------|--------------|
| 1        | 101         | 2023-01-01 | 200          |
| 2        | 102         | 2023-01-05 | 350          |
| 3        | 101         | 2023-01-10 | 120          |
| 4        | 103         | 2023-01-15 | 500          |



现在，我们希望为每个客户的订单按照订单金额降序排列，并且分配一个 row_number 编号，示例 SQL 语句如下：

```sql
SELECT 
    order_id, 
    customer_id, 
    order_date, 
    total_amount,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY total_amount DESC) AS row_number
FROM
    orders;
```



结果将是：

| order_id | customer_id | order_date | total_amount | row_number |
| -------- | ----------- | ---------- | ------------ | ---------- |
| 4        | 103         | 2023-01-15 | 500          | 1          |
| 2        | 102         | 2023-01-05 | 350          | 1          |
| 1        | 101         | 2023-01-01 | 200          | 1          |
| 3        | 101         | 2023-01-10 | 120          | 2          |



在上面的示例中，我们使用开窗函数 ROW_NUMBER 为每个客户的订单按照订单金额降序排列，并为每个订单分配了一个编号（row_number），并使用 PARTITION BY 子句按照 customer_id 进行分组，并使用 ORDER BY 子句按照 total_amount 进行排序。

## 开窗函数 - lag / lead

开窗函数 Lag 和 Lead 的作用是获取在当前行之前或之后的行的值，这两个函数通常在需要比较相邻行数据或进行时间序列分析时非常有用。

1. Lag 函数

Lag 函数用于获取 **当前行之前** 的某一列的值。它可以帮助我们查看上一行的数据。

Lag 函数的语法如下：

```sql
LAG(column_name, offset, default_value) OVER (PARTITION BY partition_column ORDER BY sort_column)
```

参数解释：

- `column_name`：要获取值的列名。
- `offset`：表示要向上偏移的行数。例如，offset为1表示获取上一行的值，offset为2表示获取上两行的值，以此类推。
- `default_value`：可选参数，用于指定当没有前一行时的默认值。
- `PARTITION BY`和`ORDER BY`子句可选，用于分组和排序数据。

2. Lead 函数

Lead 函数用于获取 **当前行之后** 的某一列的值。它可以帮助我们查看下一行的数据。

Lead 函数的语法如下：

```sql
LEAD(column_name, offset, default_value) OVER (PARTITION BY partition_column ORDER BY sort_column)
```

参数解释：

- `column_name`：要获取值的列名。
- `offset`：表示要向下偏移的行数。例如，offset为1表示获取下一行的值，offset为2表示获取下两行的值，以此类推。
- `default_value`：可选参数，用于指定当没有后一行时的默认值。
- `PARTITION BY`和`ORDER BY`子句可选，用于分组和排序数据。


有一个学生成绩表`scores`，其中包含学生的成绩和考试日期：

| student_id | exam_date  | score |
| ---------- | ---------- | ----- |
| 101        | 2023-01-01 | 85    |
| 101        | 2023-01-05 | 78    |
| 101        | 2023-01-10 | 92    |
| 101        | 2023-01-15 | 80    |

现在我们想要查询每个学生的考试日期和上一次考试的成绩，以及下一次考试的成绩

```sql
SELECT 
    student_id,
    exam_date,
    score,
    LAG(score, 1, NULL) OVER (PARTITION BY student_id ORDER BY exam_date) AS previous_score,
    LEAD(score, 1, NULL) OVER (PARTITION BY student_id ORDER BY exam_date) AS next_score
FROM
    scores;
```

| student_id | exam_date  | score | previous_score | next_score |
| ---------- | ---------- | ----- | -------------- | ---------- |
| 101        | 2023-01-01 | 85    | NULL           | 78         |
| 101        | 2023-01-05 | 78    | 85             | 92         |
| 101        | 2023-01-10 | 92    | 78             | 80         |
| 101        | 2023-01-15 | 80    | 92             | NULL       |

在上面的示例中，我们使用 Lag 函数获取每个学生的上一次考试成绩（previous_score），使用 Lead 函数获取每个学生的下一次考试成绩（next_score）。如果没有上一次或下一次考试，对应的列将显示为 NULL。
