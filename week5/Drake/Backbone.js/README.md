<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Learn Backbone.js Completel](#learn-backbonejs-completel)
  - [Before we Continue](#before-we-continue)
  - [What is Backbone](#what-is-backbone)
  - [Why Learn Backbone.js](#why-learn-backbonejs)
  - [Resources](#resources)
  - [Roadmap](#roadmap)
  - [That's It!(Almost)](#thats-italmost)
  - [Extras](#extras)
  - [Backbone.js Docs is Great](#backbonejs-docs-is-great)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

**原文链接**:http://javascriptissexy.com/learn-backbone-js-completely/

# Learn Backbone.js Completel
这不仅仅是一个完整的Backbone.js教程

- **时间**: 25~30 hours  
- **前提**: JavaScript知识的 5/10

下面，我会提供你一个全面的学习Backbone的指导，**这大概需要30个小时去完成**!

## Before we Continue
我也注意到了`Angular.js`和`Ember.js`比Backbone.js更加强大以及功能更丰富。他们会让你少写一些代码。尽管如此，我还是认为开发者应该先学习Backbone，因为他学起来很容易，同时他可以让你更好地理解JavaScript框架，以及框架是如何工作的。

## What is Backbone
`Backbone.js`是一个JavaScript前端框架，他可以给你的代码提供:

- 良好的structure和organization
- 基于事件(event-based)的交互
- 数据(data), 逻辑(logic)，界面(UI)之间的交互

也就是说，让我们更容易和更好(可扩展，可复用，模块化)地开发web应用。而不是使用一大堆相关或者不相关，一个依赖一个的JavaScript函数。(aka **Vanilla JavaScript**)

## Why Learn Backbone.js
- 如果你还没有学习任何JavaScript框架，或者你想开发一个SPA或者复杂的web应用。
- 你想让你的代码更有组织性，结构性。更好分离web应用的**concern**(logic, data, view之间的耦合度)

## Resources
- *Addy Osmani* 的[Developing Backbone.js Applications](http://addyosmani.github.com/backbone-fundamentals/)(笔者注: 已经有对应的[中文版](http://book.douban.com/subject/25980651/))
- [Backbone Tutorial](https://leanpub.com/backbonetutorials)，(笔者注: 我翻译了前面几章，[Backbone-tutorial-translation](https://github.com/DrakeLeung/Backbone-tutorial-translation))

## Roadmap
**Step 1:**    
如果你觉得你已经掌握了JavaScript，你可以跳到step 2。

如果你一点都不了解JavaScript，你应该[Learn JavaScript Properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)。

如果你已经了解过JavaScript，但是想深入的话，请按顺序阅读下面的文章:

- [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)
- [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
- (**必须阅读**) [Understand JavaScript Closures With Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)

**Step 2:**  
阅读下面的4篇文章后，你就可以了解什么是Model, View, Router以及Collection。这4篇文章其实就是上面第2本书([Backbone Tutorial](https://leanpub.com/backbonetutorials))的2~5章。

- [What is a Model](http://backbonetutorials.com/what-is-a-model/)
- [What is a View](http://backbonetutorials.com/what-is-a-view/)
- [What is a Router](http://backbonetutorials.com/what-is-a-router/)
- [What is a Collection](http://backbonetutorials.com/what-is-a-collection/)

(笔者注: 建议继续看下面的这篇文章，也就是第2本书的第6章)

- [organizing-backbone-using-modules](https://cdnjs.com/libraries/backbone.js/tutorials/organizing-backbone-using-modules)

**Step 3:**    
完整地阅读这篇文章(**虽然文章有点老，但还是很有用的**)。只要求理解，先不要尝试构建app(后面的step我们会返回这里)

- [Backbone.js Wine Cellar Tutorial — Part 1: Getting Started](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/)

**Step 4:**      
阅读*Developing Backbone.js Applications*。从**Prelude**到**Backbone Basics**。

**Step 5:**   
阅读下面2篇文章:

- [The Responsibilities Of The Various Pieces Of Backbone.js](http://lostechies.com/derickbailey/2011/12/27/the-responsibilities-of-the-various-pieces-of-backbone-js/)
- [ 3 Stages Of A Backbone Application’s Startup](http://lostechies.com/derickbailey/2012/02/06/3-stages-of-a-backbone-applications-startup/)

**Step 6**:    
现在你应该能够构建一个app了。因此，返回step 3, 跟着教程构建一个app。

**Step 7:**    
阅读*Developing Backbone.js Applications*:

- **Exercise 1**，并且要构建app
- **Exercise 2**的'Common Problems & Solutions'，构建app。

**Step 8:**    

- 阅读*Developing Backbone.js Applications*的**Modular Development**。
- build what you want(重构之前的app，或者按照例子)

**Step 9:**  
阅读2篇文章，虽然很旧，但是还是很有用的。

- [ Backbone.js Wine Cellar Tutorial — Part 2: CRUD](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-2-crud/)
- [Backbone.js Lessons Learned and Improved Sample App](http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/)(**必须阅读**)

**Step 10:**    
下面4篇**必读**文章:

- 学习如何在view和subview之间交互
    - [References, Routing, And The Event Aggregator: Coordinating Views In Backbone.js](http://lostechies.com/derickbailey/2011/07/19/references-routing-and-the-event-aggregator-coordinating-views-in-backbone-js/)
    - [Revisiting The Backbone Event Aggregator: Lessons Learned](http://lostechies.com/derickbailey/2012/04/03/revisiting-the-backbone-event-aggregator-lessons-learned/)

- 学习如何Page Transitions
    - [Learn How to transition between views and how to properly dispose of views Zombies! RUN! ](http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/)
    - [ Why Should I Use Backbone.Marionette Instead Of … ? ](http://lostechies.com/derickbailey/2012/06/13/why-should-i-use-backbone-marionette-instead-of-%E2%80%A6/)


## That's It!(Almost)
此时，你应该掌握了如何构建一个Backbone App。你从初学到熟悉，只花了30个小时的时间。

但是，想要真正理解和巩固你的学到的知识，你需要构建一个真正的SPA。

**Step 11:**    
如果你不仅想学前端，也想学后台的话，你应该阅读[Learn Node.js Completely and with Confidence](http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/)或者[Learn Meteor.js Properly](http://javascriptissexy.com/learn-meteor-js-properly/)。只要学习其中一个，你都能构建一个完整，真正的web应用。

**Step 12:**    
当深入理解`Node.js`或者`Backbone.js`(或者`Metror.js`)后，你应该准备好构建不同类型的web应用。如果够勇敢的话，在这之后，你可以成立你的startup。

另一方面，如果你只想做web前端开发，那么你应该学习`Angular.js`或者`Ember.js`，如果你想有high-paying的前端工作。同时，不妨考虑一下Fackbook的`React.js`，因为现在很多大公司都在使用他了。

但是在你开始你的冒险之前，不妨构建一个**NodeApp**。按照下面的教程链接。这个练习提供了关于如何构建Node.js/Backbone.js web 应用的一个real-world exercise。

- [http://dailyjs.com/web-app.html](http://dailyjs.com/web-app.html)

## Extras

**深入理解Backbone ecosystem**:  

阅读*Developing Backbone.js Applications*的以下章节

- Backbone Extensions
- Backbone Boilerplate And Grunt-BBB
- Mobile Applications
- Unit Testing


**学习Handlebars.js模版引擎**:  

Handlebars.js模版引擎比Backbone依赖的`Underscore.js`的template更加强大和丰富。所以请阅读我的文章 - [Handlebars.js Tutorial: Learn Everything About Handlebars.js JavaScript Templating](http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/)


## Backbone.js Docs is Great
当你开始用Backbone来构建web应用时，你会发现你经常需要查看Backbone的文档。这是极好的，因为如果你想要真正搞清楚问题的根源的话。http://backbonejs.org/

Be good. Sleep well. And enjoy coding.

**原文链接**:http://javascriptissexy.com/learn-backbone-js-completely/
