# 常见DOS命令 及其操作解释 

### - 算数运算

1. 运算符：* / % + - <br>
    命令模式 `set /a 1+2` <br>
    文本模式  文本编辑器 并改后缀名.bat
    ```
    @echo off
    
    set /a var = 1 + 2
    echo %var%
    
    pause
    ```

### 1. 批处理运算操作

### - 重定向操作运算

1. 运算符：> 、>> 、<、<< <br>
    - 一个是覆盖写，两个是追加写 <br> 
    `echo "hello world" > a.txt`<br>
    `echo "hello world" >> a.txt`<br>
    `echo "hello batch file" > a.txt`<br>
    - 输出结果分别对应
    ```
    "hello world"
    
    "hello world"
    "hello world"
    
    "hello batch file"
    ```
2. 文本文件查看内容：type<br>
    - `type a.txt`
    > `"hello world"`
3. 关系运算：<小于，>大于

### - 多命名运算

运算符：&&、|| <br>
1. && 具有短路，第一个命令 __错误__，不会执行第二个命令
    - `aaa 是一个错误命令`<br>
    - `aaa && ipconfig`
    > aaa 不是内部或外部命令，也不是可运行程序或批处理文件。
    - `ipconfig && net user`
2. || 短路 第一个成功就不会执行第二个，或的功能，__二择一，有错报错，全错全报__
    - `ifconfigaaa || net user`<br>
    > 报错<br>
    > 正常执行

### - 管道操作

运算符：|<br>
1. 例子：A|B A的输出结果，作为B的输入结果<br>
- 当前目录文件 __dir__<br>
- `dir | find ".txt"`<br>
- 查找当前目录下所有以.txt文件结尾的文件

`netstat -an`

```
活动连接

  协议  本地地址          外部地址        状态
  TCP    0.0.0.0:22             0.0.0.0:0              LISTENING
  TCP    0.0.0.0:80             0.0.0.0:0              LISTENING
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:443            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:902            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:912            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:1031           0.0.0.0:0              LISTENING
  TCP    0.0.0.0:5040           0.0.0.0:0              LISTENING
  TCP    0.0.0.0:5357           0.0.0.0:0              LISTENING
  TCP    127.0.0.1:8307         0.0.0.0:0              LISTENING
  TCP    127.0.0.1:8888         0.0.0.0:0              LISTENING
  UDP    0.0.0.0:3702           *:*
  UDP    0.0.0.0:3702           *:*
  UDP    0.0.0.0:3702           *:*
  UDP    0.0.0.0:3702           *:*
  UDP    0.0.0.0:5050           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5353           *:*
  UDP    0.0.0.0:5355           *:*
  UDP    0.0.0.0:43333          *:*
  UDP    0.0.0.0:52158          *:*
  UDP    0.0.0.0:52433          *:*
  UDP    0.0.0.0:53576          *:*
  UDP    0.0.0.0:59196          *:*
  UDP    0.0.0.0:61287          *:*
  UDP    0.0.0.0:64238          *:*
  UDP    127.0.0.1:1900         *:*
  UDP    127.0.0.1:52157        *:*
  UDP    127.0.0.1:53575        *:*
  UDP    127.0.0.1:55491        *:*
  UDP    192.168.1.10:137       *:*
  UDP    192.168.1.10:138       *:*
  UDP    192.168.1.10:1900      *:*
  UDP    192.168.1.10:53574     *:*
```

`netstat -an | find "ESTABLISHED"`<br>
```
C:\Users\Janson Yugen>netstat -an | find "ESTABLISHED"
  TCP    127.0.0.1:6722         127.0.0.1:6723         ESTABLISHED
  TCP    127.0.0.1:6723         127.0.0.1:6722         ESTABLISHED
  TCP    127.0.0.1:6847         127.0.0.1:6848         ESTABLISHED
  TCP    127.0.0.1:6848         127.0.0.1:6847         ESTABLISHED
  TCP    127.0.0.1:6922         127.0.0.1:6923         ESTABLISHED
  TCP    127.0.0.1:6923         127.0.0.1:6922         ESTABLISHED
  TCP    127.0.0.1:6924         127.0.0.1:6925         ESTABLISHED
  TCP    127.0.0.1:6925         127.0.0.1:6924         ESTABLISHED
```

### 3. 基本命令格式介绍

1. 命令格式
    - 命令
        - `net`
        - `net /?`
        - `net usser`
        - `net user /?`
        - `net user test test /add`
    - 子命令
        - user
    - 参数
        - test test
    - 操作
        - `/add`
    - 选项 [option]
<br>
2. 命令帮助信息查看
`/?  /help`

### - 批处理文件接受参数

参数的接受与传递<br>
1. 参数的接受
    - .bat 文件接受参数使用 %num
    - `net user user pass /add`
    - `net user %1 %2 /add`
    - %1 为第一个参数，%2 为第二个参数 会进行拼接替换
2. 
> 例：<br>
> ```
em `1.bat admin 123456`
@echo off
echo %1
echo %2
pasue
> ```
----
> ```
em `1.bat admin 123456`
@echo off
echo %1
echo %2
net user %1 %2
pasue ```
> 




### - 注释

注释符：rem [comment]
```
@echo off

rem program for add new user
echo %1
echo %2
rem use: 1.bat user passward
net user %1 %2 /add
pasue
```

### - 命令提示符窗口

颜色命令：color<br>
   > 设置默认的控制台前景和背景颜色.
COLOR [attr]
>  attr        指定控制台输出的颜色属性。
> 
> 颜色属性由两个十六进制数字指定 -- 第一个
对应于背景，第二个对应于前景。每个数字
可以为以下任何值:

>    0 = 黑色       8 = 灰色
>    1 = 蓝色       9 = 淡蓝色
>    2 = 绿色       A = 淡绿色
>    3 = 浅绿色     B = 淡浅绿色
>    4 = 红色       C = 淡红色
>    5 = 紫色       D = 淡紫色
>    6 = 黄色       E = 淡黄色
>    7 = 白色       F = 亮白色
    >
> 如果没有给定任何参数，此命令会将颜色还原到 CMD.EXE 启动时
的颜色。这个值来自当前控制台窗口、/T 命令行开关或 DefaultColor 注册表值。

> 如果尝试使用相同的前景和背景颜色来执行
 COLOR 命令，COLOR 命令会将 ERRORLEVEL 设置为 1。
示例: "COLOR fc" 在亮白色上产生淡红色

`color 0a`设置背景色0 黑色 字体颜色a 浅绿色

标题命令：title<br>
>设置命令提示窗口的窗口标题。<br/>
TITLE [string]<br/>
string       指定命令提示窗口的标题。

`title hack` 设定命令窗口名称

### - 时间 命令

命令符：date、time<br>
`date /T`显示当前时间` 2020/03/17 周二`<br>
`time`显示当前时间`00:57:31.91`<br>
`time /T`显示当前时间`00:57`

### - 启动命令

命令符：start
> 启动一个单独的窗口，以运行指定程序或命令
```
启动一个单独的窗口以运行指定的程序或命令。

START ["title"] [/D path] [/I] [/MIN] [/MAX] [/SEPARATE | /SHARED]
      [/LOW | /NORMAL | /HIGH | /REALTIME | /ABOVENORMAL | /BELOWNORMAL]
      [/NODE <NUMA node>] [/AFFINITY <hex affinity mask>] [/WAIT] [/B]
      [command/program] [parameters]

    "title"     在窗口标题栏中显示的标题。
    path        启动目录。
    B           启动应用程序，但不创建新窗口。
                应用程序已忽略 ^C 处理。除非应用程序
                启用 ^C 处理，否则 ^Break 是唯一可以中断
                该应用程序的方式。
    I           新的环境将是传递
                给 cmd.exe 的原始环境，而不是当前环境。
    MIN         以最小化方式启动窗口。
    MAX         以最大化方式启动窗口。
    SEPARATE    在单独的内存空间中启动 16 位 Windows 程序。
    SHARED      在共享内存空间中启动 16 位 Windows 程序。
    LOW         在 IDLE 优先级类中启动应用程序。
    NORMAL      在 NORMAL 优先级类中启动应用程序。
    HIGH        在 HIGH 优先级类中启动应用程序。
    REALTIME    在 REALTIME 优先级类中启动应用程序。
    ABOVENORMAL 在 ABOVENORMAL 优先级类中启动应用程序。
    BELOWNORMAL 在 BELOWNORMAL 优先级类中启动应用程序。
    NODE        将首选非一致性内存结构(NUMA)节点指定为
                十进制整数。
    AFFINITY    将处理器关联掩码指定为十六进制数字。
                进程被限制在这些处理器上运行。

                将 /AFFINITY 和 /NODE 结合使用时，会对关联掩码
                进行不同的解释。指定关联掩码，以便将零位作为起始位置(就如将 NUMA
                节点的处理器掩码向右移位一样)。
                进程被限制在指定关联掩码和 NUMA 节点之间的
                那些通用处理器上运行。
                如果没有通用处理器，则进程被限制在
                指定的 NUMA 节点上运行。
    WAIT        启动应用程序并等待它终止。
    command/program
                如果它是内部 cmd 命令或批文件，则
                该命令处理器是使用 cmd.exe 的 /K 开关运行的。
                这表示运行该命令之后，该窗口
                将仍然存在。

                如果它不是内部 cmd 命令或批文件，则
                它就是一个程序，并将作为一个窗口化应用程序或
                控制台应用程序运行。

    parameters  这些是传递给 command/program 的参数。

注意: 在 64 位平台上不支持 SEPARATE 和 SHARED 选项。

通过指定 /NODE，可按照利用 NUMA 系统中的内存区域的方式
创建进程。例如，可以创建两个完全
通过共享内存互相通信的进程以共享相同的首选 NUMA 节点，
从而最大限度地减少内存延迟。只要有可能，
它们就会分配来自相同 NUMA 节点的
内存，并且会在指定节点之外的处理器上自由运行。

    start /NODE 1 application1.exe
    start /NODE 1 application2.exe

这两个进程可被进一步限制在相同 NUMA 节点内的指定处理器
上运行。在以下示例中，application1 在
节点的两个低位处理器上运行，而 application2
在该节点的其后两个处理器上运行。该示例假定指定节点至少具有四个逻辑处理器。请注意，节点号可更改为该计算机的任何有效节点号，
而无需更改关联掩码。

    start /NODE 1 /AFFINITY 0x3 application1.exe
    启动 /NODE 1 /AFFINITY 0xc application2.exe

如果命令扩展被启用，通过命令行或 START 命令的外部命令
调用会如下改变:

将文件名作为命令键入，非可执行文件可以通过文件关联调用。
    (例如，WORD.DOC 会调用跟 .DOC 文件扩展名关联的应用程序)。
    关于如何从命令脚本内部创建这些关联，请参阅 ASSOC 和
     FTYPE 命令。

执行的应用程序是 32 位 GUI 应用程序时，CMD.EXE 不等应用
    程序终止就返回命令提示符。如果在命令脚本内执行，该新行为
    则不会发生。

如果执行的命令行的第一个符号是不带扩展名或路径修饰符的
    字符串 "CMD"，"CMD" 会被 COMSPEC 变量的数值所替换。这
    防止从当前目录提取 CMD.EXE。

如果执行的命令行的第一个符号没有扩展名，CMD.EXE 会使用
    PATHEXT 环境变量的数值来决定要以什么顺序寻找哪些扩展
    名。PATHEXT 变量的默认值是:

        .COM;.EXE;.BAT;.CMD

    请注意，该语法跟 PATH 变量的一样，分号隔开不同的元素。

查找可执行文件时，如果没有相配的扩展名，看一看该名称是否
与目录名相配。如果确实如此，START 会在那个路径上调用
Explorer。如果从命令行执行，则等同于对那个路径作 CD /D。
```

### - 调用其他bat文件

命令：<br>
```
# 1.bat
@echo off

rem program for add new user
echo %1
echo %2
rem use: 1.bat user passward
net user %1 %2 /add

call 2.bat
pasue
```
```
# 2.bat
@echo off
net user
ipconfig

pause
```
> 运行1.bat 文件时通过主批处理程序1.bat 中的 __call 函数__ 调用其他(2.bat)批处理文件<br>
> __call [path]__ ,不能进行参数传递，主调用文件无法将参数传递给被调用的文件

### - 任务列表

命令符：tasklist<br>
```
映像名称                       PID 会话名              会话#       内存使用
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0         32 K
Registry                       124 Services                   0     31,984 K
smss.exe                       492 Services                   0        236 K
```
--------
```
TASKLIST [/S system [/U username [/P [password]]]]
         [/M [module] | /SVC | /V] [/FI filter] [/FO format] [/NH]
描述:
    该工具显示在本地或远程机器上当前运行的进程列表。
```
-------
_远程服务器任务查看_
`tasklist /S 192.168,0.105 /U administrator /P 123456`

`tasklist /FI "STATUS eq UNKNOWN"`<br>
`tasklist /FI "STATUS eq RUNNING"`<br>
`tasklist /FI "PID eq 12352"`<br>
`tasklist /FI "STATUS eq UNKNOWN" /FO TABLE` <br>
*表示任意多个字符

### - 任务终止

1. 命令符：taskkill

> 描述:使用该工具按照进程 ID (PID) 或映像名称终止任务

> TASKKILL [/S system [/U username [/P [password]]]]
         { [/FI filter] [/PID processid | /IM imagename] } [/T] [/F]
```
 /FI   filter   应用筛选器以选择一组任务。
            允许使用 "*"。例如，映像名称 eq acme*

    /PID  processid   指定要终止的进程的 PID。
                 使用 TaskList 取得 PID。

    /IM   imagename   指定要终止的进程的映像名称。通配符 '*'可用来
                 指定所有任务或映像名称。
```
```
/T   终止指定的进程和由它启用的子进程。

/F   指定强制终止进程。
```

> `taskkill /pid 15236 /T`<br>
> `taskkill /im notepad.exe`


### - 文件夹结构命令 tree

命令符：tree

`TREE [drive:][path] [/F] [/A]`
> 以图形显示驱动器或路径的文件夹结构。

>>   /F   显示每个文件夹中文件的名称。
>>   /A   使用 ASCII 字符，而不使用扩展字符。

### - 关机命令

1. 命令符：shutdown
    - shutdown /i图形化界面
    - shutdown /l注销
    - shutdown /s关闭计算机
    - shutdown /r完全关闭并重启
    - shutdown /m \\computer指定目标计算机，远程
    - /t 关闭前的超时时间
    - /f 强制执行操作
    - /c "comment"注释

### - 计划任务 at

命令符：at
```
AT 命令已弃用。请改用 schtasks.exe。

AT 命令安排在特定日期和时间运行命令和程序。
要使用 AT 命令，计划服务必须已在运行中。

AT [\\computername] [ [id] [/DELETE] | /DELETE [/YES]]
AT [\\computername] time [/INTERACTIVE]
    [ /EVERY:date[,...] | /NEXT:date[,...]] "command"

\\computername       指定远程计算机。如果省略这个参数，
                     会计划在本地计算机上运行命令。
id                   指定给已计划命令的识别号。
/delete              删除某个已计划的命令。如果省略 id，
                     计算机上所有已计划的命令都会被删除。
/yes                 不需要进一步确认时，跟删除所有作业
                     的命令一起使用。
time                 指定运行命令的时间。
/interactive         允许作业在运行时，与当时登录的用户
                     桌面进行交互。
/every:date[,...]    指定在每周或每月的特定日期运行命令。
                     如果省略日期，则默认为在每月的
                     本日运行。
/next:date[,...]     指定在下一个指定日期(如，下周四)运
                     行命令。如果省略日期，则默认为在每
                     月的本日运行。
"command"            准备运行的 Windows NT 命令或批处理
                     程序
```

`at 22:00 /every:M,T,W,Th,F,S,Su C:\abc.exe`<br>
`schtasks`<br>
> SCHTASKS /parameter [arguments]
描述:
    允许管理员创建、删除、查询、更改、运行和中止本地或远程系统上的计划任
    务。

>参数列表:<br>
    - /Create         创建新计划任务。<br>
    - /Delete         删除计划任务。<br>
    - /Query          显示所有计划任务。<br>
    - /Change         更改计划任务属性。<br>
    - /Run            按需运行计划任务。<br>
    - /End            中止当前正在运行的计划任务。<br>
    - /ShowSid        显示与计划的任务名称相应的安全标识符。<br>

### - 环境变量

命令符：`set`<br>
返回系统变量OS的值`echo %OS%`<br>

### 4. 目录浏览 dir

命令符：`dir`<br>
显示所有文件`dir /A`<br>

### - 新建目录/删除目录（文件夹）

命令符：`mkdir` `MD`/ `rmdir` `RD` - /S 删除非空目录 /Q 安静，不需确认<br>
> `mkdir \a\b\c\d` 
> ```
mkdir \a
chdir \a
mkdir \b
chdir \b
mkdir \c
chdir \c
mkdir d
> ```

### - 目录切换 cd

命令符：`cd`/ `chdir`<br>
当前目录 __`cd .`__ ，上级目录 __`cd ..`__ 

### - 目录重命名ren

命令符：`ren` `rename`<br>
`ren oldname newname`

### - 目录拷贝copy

命令符：`copy`<br>
`copy text2 test1`2中文件复制到1中

### - 文件删除del

命令符：`del`<br>
del [path][filename]

```
 names         指定一个或多个文件或者目录列表。
                通配符可用来删除多个文件。
                如果指定了一个目录，该目录中的所
                有文件都会被删除。

  /P            删除每一个文件之前提示确认。
  /F            强制删除只读文件。
  /S            删除所有子目录中的指定的文件。
  /Q            安静模式。删除全局通配符时，不要求确认
  /A            根据属性选择要删除的文件
  属性          R  只读文件            S  系统文件
                H  隐藏文件            A  准备存档的文件
                I  无内容索引文件      L  重新分析点
                O  脱机文件            -  表示“否”的前缀

如果命令扩展被启用，DEL 和 ERASE 更改如下:

/S 开关的显示句法会颠倒，即只显示已经
删除的文件，而不显示找不到的文件。
```

### - 文件剪切move

命令符：`move`<br>
1. 剪切移动
    - `move [path1] [path2]`文件1移动到文件2
2. 重命名
    - `move old new`


### 5. 用户操作命令

命令符：`net user`<br>
创建用户：`net user creat_new_usrname passward /add`<br>
删除用户：`net user username /delete`<br>
查看用户信息：`net user username`

### - 用户组操作

命令符：`net localgroup`<br>
用户入组：`net localgroup group_name user_name /add`<br>
用户离组：`net localgroup group_name user_name /delete`<br>

### - 主机联通性测试ping

命令符：`ping`<br>
`ping [ip_address] / target_name`<br>
参数：`-t`指定主机，直到停止、`-l`发送缓冲区size、 `-a`解析为域名

### - 网络连接命令telnet

命令符：`telnet`<br>
`telnet host port`

### - 网络路由信息命令

命令符：`tracert`<br>
`tracert [host]/target_address`<br>
`telnet www.baidu.com`

### - 网络适配器命令ipconfig

命令符：`ipconfig`<br>
显示所有信息：`ipconfig /all`<br>
释放所有匹配的连接：`ipconfig /release  *Con*`<br>
重新获取IP连接：`ipconfig /renew`

### - ARP信息命令

命令符：`arp`<br>
- 显示和修改地址解析协议(ARP)使用的“IP 到物理”地址转换表。
- ARP -s inet_addr eth_addr [if_addr]
- ARP -d inet_addr [if_addr]
- ARP -a [inet_addr] [-N if_addr] [-v]
`arp -a`<br>
ip 与物理地址绑定，静态`arp -s ip 物理地址`

### 6. if-else结构

命令符：`if else`<br>
```
# 1.bat
@echo off
rem 演示if else 判断字符串是否为规定的字符

set v=hello

if %v%==hello (echo ok) else (echo no)

rem 将pause 重定向到nul中，不显示任何字符
pasue>nul
```

### - 判断文件是否存在exists

命令符：`exists`<br>
```
# 2.bat
@echo off
rem 程序用来判断1.bat是否存在

if exists PATH/File_name(1.bat) (echo ok) else (echo no)

rem 将pause 重定向到nul中，不显示任何字符
pasue>nul
```

### - 文件判断删除

命令符：`exists`<br>
```
# 2.bat
@echo off
rem 程序用来判断1.bat是否存在,并删除文件

if exists PATH/File_name(1.bat) (echo file is find!) 
del PATH/1.bat
else (echo file is not find)

rem 将pause 重定向到nul中，不显示任何字符
pasue>nul
```

### 7. 循环遍历文件名称

命令符：`for /d in (PATH/*) do`<br>
遍历目录<br>
```
# 1.bat
@echo off
rem for circle

遍历文件夹 并输出文件名称
for /d %%a in (*) do echo %aa

遍历文件夹 查看是否存在test 存在就移除文件
for /d %%a in (*) do if %%a==test rmdir %%a

遍历并输出文件
for /d %%a in (*) do echo %%a
rem 将pause 重定向到nul中，不显示任何字符
pasue>nul
```

[文本](C:\Users\Janson Yugen\Desktop\for_info.txt)

### - 遍历文件夹下的文件

命令符：`for /r [PATH] %%v in (匹配规则e:*.py) do 操作%%v`<br>
```
# 1.bat
@echo off
rem for test

for /r "PATH" %%v in (.py) do echo %%v

echo delete all *.py

for /r "PATH" %%v in (.py) do del %%v

pause>nul
```

### - 遍历数字操作

命令符：`for /L %%v in (start,step,end) do 语句`<br>

~~~
# 3.bat
@echo off
rem for test

for /L %%v in (1,1,20) do echo %%v

pause>nul
~~~

~~~
# 3.bat
@echo off
rem for test
#%1接受一个参数，并进行拼接%%v遍历的%%v
for /L %%v in (1,1,20) do ping %1.%%v

pause>nul
~~~

### - 遍历文件内容

命令符：`for /F %%v in (File_name) do 语句`

```
# 4.bat
@echo off
rem for test

for /F %%v in (3.bat) do echo %%v

pause>nul
```

### 8. 目录重复新建代码分析

#### Virus脚本分析

命令符：`goto`语句

```
# 1.bat
@echo off
rem cd C:\Documents and Settings\%username%\Desktop

cd C:\Documents and Settings\%username%\Desktop
#循环体
:loop
md Virus
cd Virus
#进入循环
goto loop

pause>nul
```

### 9. 计算机信息展示

获取电脑信息的bat

```javascript
// monitor
@echo off
echo > log.txt
echo Log File >> log.txt
echo. >> log.txt
echo User : %username% >> log.txt
Date /t >> log.txt
Time /t >> log.txt
echo. >> log.txt
echo Process Ran by %username% >> log.txt
echo. >> log.txt
tasklist >> log.txt
echo. >> log.txt
echo Network Activites >> log.txt
netstat -s >> log.txt
exit
```

```html
<!-- log.html -->
<html>
    <head>
        <title>Log File - Lo36r</title>
    </head>
    <body>
        <br>
        <center><h1><u> Log File </u></h1>
            <i>This Log file is created by <b>Lo36r</b> for monitoring System Activities!</i>
        </center>
        <center>
        <ul>
            <a href="log.txt"> Click here to view the Log File</a>
        </ul>
        </center>
    </body>
</html>
```

### - 交互操作

命令符：`goto`语句跳转到代码块

```javascript
// 1.bat
@echo off
echo 1.a
echo 2.b
echo 3.c
echo 4.d

:first
echo Enter your option:
// /表示获取对应的变量值保存到opt中
set /p opt=
    if %opt%==1 goto one
    if %opt%==2 goto two
    if %opt%==3 goto three
    if %opt%==4 goto four
echo Invalid option
goto first

:one
echo your choice one
pause>nul
exit

:two
echo your choice two
pause>nul
exit

:three
echo your choice three
pause>nul
exit

:four
echo your choice four
pause>nul
exit
```

```javascript
// 1.bat
@echo off
echo 1.show ip address
echo 2.show network link
echo 3.show directory

:main
echo Enter your option:
// /表示获取对应的变量值保存到opt中
set /p opt=
    if %opt%==1 goto one
    if %opt%==2 goto two
    if %opt%==3 goto three
echo Invalid option
goto main

:one
ipconfig /all
pause>nul
exit

:two
netstat -an
pause>nul
exit

:three
dir
pause>nul
exit

```

### - 执行计划

命令符：`at`、`schtasks`

```javascript
// 3.bat
// Automate Running
at 10:00 AM /every:M,T,W,TH,F,S,SU C:\1.bat
exit
```

### - Bat转Exe程序

工具：`Bat to Exe Converter`<br>
[Bat to Exe Converter](https://www.pc6.com/softview/SoftView_31106.html)

```javascript
// 2.bat
// 打包并执行
@echo off
// rem C:\Windows\System32\drivers\etc\hosts

echo 192.168.0.1 www.baidu.com >> C:\Windows\System32\drivers\etc\hosts
echo 192.168.0.1 www.sina.com >> C:\Windows\System32\drivers\etc\hosts
pasue>nul
```

换行<br/>换行后

3. 字体 <br>
*斜体* <br>
_斜体_ <br>
__粗体__ <br>
***粗斜*** <br>
___粗斜___

4. 分割线 <br>
***
* * *
*****
- - -
----------

~~删除线~~<br> <u>下滑线</u>

> 区块 区块引用

> markdown一层
>> 基础 两层
>>> 区块引用 三层 <br/>
>>> 区块中可叠加嵌套 有序、无序列表


插入代码 <br>
`int a = 0;` <br>//英文版的数字1左边的那个符号。。。。

代码块 <br>
开头三点后可以跟代码的语言，也可省略不写
``` c
int a = 1;
int b = 2;
```

[链接名称](链接地址)<br>

或者

<链接地址>

![图片描述，可写可不写，但是中括号要有](图片地址，本地链接或者URL地址。)


比如我此文章的图片：

![markdown](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1613194509,3683268681&fm=26&gp=0.jpg)

|  表头   | 表头  | 表头 | 表头 |
| :---  | ---:  | :--: | ---- |
| 单元格  | 单元格 |单元格|单元格|
| 单元格  | 单元格 |单元格|单元格|

加:可以实现左对齐，右对齐，居中。不加则默认为左对齐

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
