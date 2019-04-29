[![Build Status](https://travis-ci.com/Likj/unit-test.svg?branch=master)](https://travis-ci.com/Likj/unit-test)
---
## assert断言库
---
assert 是node 内置的模块；可在node环境运行  用来断言测试的一个模块  常见方法见node文档 
assert的特点是 只有报错的时候 会看到异常输出，通过的时候 没有信息输入，而且 方法少
----
1.chai  是 在assert的基础上 提供丰富的方法 进行断言的一个工具库 相当于lodash 对于JavaScript的作用，常用的断言工具库提供BDD TDD 风范
---
##chai 的 语言连
下面的接口是单纯作为语言链提供以期提高断言的可读性。除非被插件改写否则它们一般不提供测试功能
+ to
+ be
+ been
+ is
+ that
+ which
+ and
+ has
+ have
+ with
+ at
+ of
+ same
## 其他的方法详见 文档
2. 但是chai也没有文档输出，只有在报错的情况 有抛出异常 对于单测的结果 没有输出结果
3. mocha 是一个提供 描述文档的高级函数库，里面可以运行 常见的 断言库，等；提供语意化的 描述，并且可以输入doc html 等多种格式
4. istanbul 是一个对单测 进行覆盖率检查 的一个 模块，已经不再维护，可以输出 是否 覆盖全面，从函数，分支，行，
---
5.circleci是一个持续继承的工具，还为接入使用
---
6. 先用 travis-ci工具;

