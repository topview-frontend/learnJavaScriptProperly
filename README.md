<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Learn JavaScript Proproly](#learn-javascript-proproly)
  - [Resource](#resource)
  - [First of All](#first-of-all)
  - [Week 1 - Introduction, Data Types, Expressions and Operations](#week-1---introduction-data-types-expressions-and-operations)
  - [Week 2 - Objects, Arrays, Functions](#week-2---objects-arrays-functions)
  - [Week 3 - DOM, jQuery, and the first project](#week-3---dom-jquery-and-the-first-project)
    - [你的第一个项目 - A Dynamic Quiz](#%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE---a-dynamic-quiz)
  - [Week 4~5 - Regular Expressions, Window Object, Events, jQuery](#week-45---regular-expressions-window-object-events-jquery)
  - [Week 6 - Class, Inheritance, more HTML5](#week-6---class-inheritance-more-html5)
  - [Continue](#continue)
  - [鸡汤](#%E9%B8%A1%E6%B1%A4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Learn JavaScript Proproly
按照[javascriptissexy](http://javascriptissexy.com/)的[How To Learn JavaScript Proproly](http://javascriptissexy.com/how-to-learn-javascript-properly/)一文来正确地学习JavaScript.  
详细内容请查看[原文](http://javascriptissexy.com/how-to-learn-javascript-properly/)!!!:ghost:

## First of All
- 遇到问题若解决不了，请提交issue!!!!!!!!!
- 每周之后，请把每周学习到的东西上传到本repo对应的文件夹. 例子请看[week1](./week1)文件夹.
- 该学习路线将会花费**6周**的时间!

## Resource
整个学习路线会用到下面的资源:

- [JavaScript高级程序设计(第3版)](http://book.douban.com/subject/10546125/)
- [javascriptissexy.com](javascriptissexy.com)(4 posts)
- [Codecademy](http://www.codecademy.com/)(2 tracks)

## Week 1 - Introduction, Data Types, Expressions and Operations
第一周比较轻松~
涉及的内容有JavaScript的介绍, 数据类型, 表达式以及运算。

1. 完成codecademy的[HTML&CSS课程](http://www.codecademy.com/tracks/web)

2. 阅读*JavaScript高级程序设计*的前言, 第一章和第二章.
3. 完成codecademy的[JavaScript课程](http://www.codecademy.com/tracks/javascript)的**Introduction to JavaScript**部分

4. 阅读*JavaScript高级程序设计*的第3章, 第4章(可以跳过位操作符部分内容)

5. 完成codecademy的[JavaScript课程](http://www.codecademy.com/tracks/javascript)的2-5部分(functions - Control flow)

## Week 2 - Objects, Arrays, Functions
涉及的内容有对象，数组，函数，DOM以及jQuery

1. 阅读文章-[JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/), 或者*JavaScript高级程序设计*的第6章的**理解对象**部分.

2. 阅读*JavaScript高级程序设计*的第5章和第7章.

3. 在这个时候，你应该可以轻松独立完成codecademy上面的训练，并且不需要hint.
但是codecademy不好的地方就是他帮你写了一些代码，这会让你误以为这些都是你写的，但事实上如果全部都由
你来写的话，会困难得多！所以，我们需要独立完成一些小项目.

4. 完成codecademy的[javascript课程](http://www.codecademy.com/tracks/javascript)的6~8部分(Data Structures to Object 2)

5. 完成codecademy的[Web Projects教程](http://www.codecademy.com/tracks/projects)的前5个小项目.

## Week 3 - DOM, jQuery, and the first project
1. 阅读*JavaScript高级程序设计*的第8, 9, 10, 11, 13和14章.

2. 完成codeschool的[try jQuery](http://try.jquery.com/)课程. [视频观看以及翻译](http://blog.jobbole.com/37699/)在这里.

### 你的第一个项目 - A Dynamic Quiz
  - 显示题号，题目，以及相关选项
  - 记录得分，并且在最后一页显示出来。
  - 动态地添加问题。也就是按'next'的时候，要把当前的问题删除掉，然后添加新的问题。
  - 可以考虑这样来储存所有问题:
  ```javascript
  var allQuestions = [{
    querstion: 'What is JavaScript?',
    choices: [
      'A Programming Language',
      'A Food',
      'I Dont Know'
    ],
    correctAnswer: 0
  }];
  ```
  - 写2个版本。一个JavaScript, 一个jQuery.

## Week 4~5 - Regular Expressions, Window Object, Events, jQuery
内容有正则表达式，`window`对象，事件，以及jQuery

1. 阅读*JavaScript高级程序设计*的第20章和23章。

2. 改进你的Quiz项目
    - 加入验证. 确保在'next'之前用户必须填写答案。
    - 加入'Back'按钮，使得可以回到任意地方修改答案。
    - 使用jQuery的添加动画效果。比如，旧问题的淡出和新问题的淡入。
    - 把问题存放在外部的`JSON`文件里。
    - 添加用户验证: 登陆登出，利用local storage.
    - 用cookies来记住用户，让用户返回首页，显示'欢迎，username'信息

## Week 6 - Class, Inheritance, more HTML5
涉及了类，继承，以及一些HTML5

1. 阅读文章-[OOP in JavaScript: What you need to know](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)

2. 阅读*JavaScript高级程序设计*的第6，16，22，24章。这也许是最有技术性的一次阅读了，如果没看懂没关系。

3. 再次优化你的Quiz项目
    - 使用[bootstrap](http://getbootstrap.com/)等框架来帮助你开发。使用他的`tab`组件来使得每个页面有4个quiz。
    - 记录每个用户的得分，做出一个排行榜。
    - 添加你自己喜欢的功能
    - 如果后面你学习了`Backbone.js`或者`Node.js`的话，你可以重构整个项目。


## Continue
根据自己的爱好和流行趋势来选择学习或者不学习.

1. learn [Backbone.js](http://javascriptissexy.com/learn-backbone-js-completely/)或者[Meteor.js](http://javascriptissexy.com/learn-meteor-js-properly/).
2. [MongoDB for JavaScript Applications](https://mongodb-book.javascriptissexy.com/)
3. [Learn Intermediate and Advanced JavaScript](http://javascriptissexy.com/learn-intermediate-and-advanced-javascript/)
4. [Learn Node.js Completely and With Confidence](http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/)

## 鸡汤
- 看书看不懂的部分就跳过!! 总之要看快速看完一遍！
- 没有压力就没有动力:D
