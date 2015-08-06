<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [封装和继承概述](#%E5%B0%81%E8%A3%85%E5%92%8C%E7%BB%A7%E6%89%BF%E6%A6%82%E8%BF%B0)
- [JavaScript中的对象](#javascript%E4%B8%AD%E7%9A%84%E5%AF%B9%E8%B1%A1)
- [JavaScript中的封装(构造函数)](#javascript%E4%B8%AD%E7%9A%84%E5%B0%81%E8%A3%85%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0)
  - [为什么要进行封装？](#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%BF%9B%E8%A1%8C%E5%B0%81%E8%A3%85%EF%BC%9F)
  - [重要的笔记](#%E9%87%8D%E8%A6%81%E7%9A%84%E7%AC%94%E8%AE%B0)
- [JavaScript中的继承](#javascript%E4%B8%AD%E7%9A%84%E7%BB%A7%E6%89%BF)
  - [为什么要继承](#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%A7%E6%89%BF)
  - [应用寄生组合式继承](#%E5%BA%94%E7%94%A8%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF)
- [Final Words](#final-words)
- [Further Reading](#further-reading)
- [Notes](#notes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


**原文链接：http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/**

译者: *bbChen*, *byrolun*, *ccDeng*, *SelinaYu*, *skykobe* :kissing:

----

OOP(Object Orited Programmiing)指的是用独立的代码片段来开发一个app。我们称这些独立的代码片段为**objects(对象)**，或者大多数OOP语言中的**Class**以及JavaScript中的**Functions**。在JavaScript中，我们将使用对象来构建我们的app。这样的话，我们就可以使用一些优秀的技术，比如，**继承(Inheritance)**，**多态(Polymorphism)**(不同的对象共享相同的接口),以及**封装(Encapsulation)**(每个对象都负责不同的任务)

在这篇文章中，我们**只关心继承和封装这2部分**，因为在JavaScript中，对象可以封装功能，以及从别的对象中继承method和property。

## 封装和继承概述
 **对象（Objects）**可以被认为是在应用程序中的主要角色，或者仅仅是我们做所有工作主要的“事物”或者行为模块。如你所知，在javascript中对象无所不在，因为在JavaScript中的每个成分都是一个对象，包括 `Functions`, `Strings`, and `Numbers`. 我们通常用对象字面量和构造函数去创建一个对象。
 
**封装（Encapsulation）**指将一个对象的所有功能封闭起来使对象的内部工作（如方法和属性）对应用程序的其余部分是隐藏的。这允许我们把对象的特定部分进行抽象或者私有化。

**继承（Inheritance）**是指一个对象可以继承父对象的方法和属性。在其他OOP语言中是一个*Class*(类),在JavaScript中是一个*Function*（函数）。

这两个概念,封装和继承,很重要,因为它们让我们构建可重用的应用程序代码,可伸缩的架构和抽象的功能。可维护、可伸缩的、有效的。

**实例(instance)**是一个函数的实现。简而言之,这是一个函数或对象的copy(或“child”)。例如:

```javascript
// Tree是一个构造函数，因为我们使用`new`这个关键词去调用它
​function Tree (typeOfTree) {}
​
​// bananaTree 是 Tree 的一个实例.​
​var bananaTree = new Tree ("banana");
```

在前面的例子，`bananaTree`是从Tree的构造函数创建的一个对象。我们说`bananaTree`是`Tree`的一个实例。`Tree `既是一个函数又是一个对象，因为在javascript中函数也是对象。`bananaTree`可以有自己的方法和属性并且继承`Tree`的方法和属性，我们将详细研究下面讨论的继承。

## JavaScript中的对象
JavaScript面向对象编程**最重要的两个原则是创建对象模式（封装）和代码重用（继承）**。

当你在构建应用程序时，你会创建很多对象，这里有很多创建对象的方式：你可以用常用的**对象字面量模式**，例如：
```javascript
var myObj = {name: "Richard", profession: "Developer"};
```

你可以用**原型模式**，把每一个方法和属性直接添加到对象的原型中。例如：

```javascript
function Employee () {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;

Employee.prototype.fullName = function () {
  console.log (this.firstName + " " + this.lastName);
};
​
​var abhijit = new Employee () //​

console.log(abhijit.fullName()); // Abhijit Patel​
console.log(abhijit.signedNDA); // true
```

你也可以用**构造模式**， 构造函数（在其他语言里叫类，JavaScript称为函数），例如：

```javascript
function Employee (name, profession) {
  ​this.name = name;
  ​this.profession = profession;
} // Employee () is the constructor function because we use the <em>new</em> keyword below to invoke it.​
​
​var richard = new Employee (“Richard”, “Developer”) // richard is a new object we create from the Employee () constructor function.​
​
console.log(richard.name); //richard​
console.log(richard.profession); // Developer
```

在后面的例子里，我们会用传统的构造函数模式去创建对象。这就是我们在对我们的对象添加属性和方法，以及当我们想封装我们的对象的功能时的方式。JavaScript开发人员已经发明了很多**模式**（pattern）去用构造函数创建对象。当我们谈及对象创建模式时，我们主要关心的是很多通过构造函数来创建对象的方式,正如前面提到的例子。

除了创建对象的模式，你还想有效的重用代码。当你在创建对象的时候，你可能希望他们能够继承父对象的（有一些相同的方法）方法和属性。而且他们还可以拥有自己的属性和方法。代码重用模式使得更容易实现继承。

这两种普遍的原则——**创建对象**（尤其是构造函数）和**允许对象继承属性和方法**——是这篇文章的只要关注点，也是Javascript面向对象的重要概念。我们首先讨论对象的创建模式。

## JavaScript中的封装(构造函数)

如上述讨论的，面向对象的主要原则，途径之一就是封装：把对象中所要的，所需的，要运行的封装到对象自身当中。为了实现封装在JavaScript中，我们要定义对象的核心方法和属性。要做到这一点，我们将使用封装在JavaScript中的最佳模式：**组合构造/原型模式(the Combination Constructor/Prototype Pattern)**。这个名字很拗口，但你不必记住它，因为我们只关心它的实现。在我们实现它之前，让我们快速学习一些关于封装的实用性。

### 为什么要进行封装？

如果你只是想只创建一个对象来存储一些数据，它是这中类型的唯一对象，您可以使用对象文本，并创建你的对象。这是很常见的，你会常使用这个简单的模式。

然而，只要你想创建一个类似的功能（使用相同的方法和属性），你封装主要功能在一个函数中，并使用该函数的构造函数来创建对象的对象。这是封装的精髓。而正是这种时候要进行封装，而现在我们所关心的是，为什么我们使用的是组合构造/原型模式。

为了在实践中使用JavaScript的OOP，我们将利用这篇文章所讲到的原则和技术来构建我们的quiz项目。首先，我们的quiz拥有用户（`User` Function）。每个用户都有共同的属性(property)：例如`name`，`score`，`email`，以及`scores`（所有的分数）。这些都是用户对象的属性。此外，每个用户对象应该能够显示姓名和分数，分数保存，并更改电子邮件，这些是**对象的方法**。

因为我们希望所有的用户对象具有这些相同的属性和方法，我们不能使用字面量的方法去创建对象。我们必须使用一个构造函数来封装这些属性和方法。

既然我们知道所有的用户都会有相同的属性集，所以，构建一个函数（类,在OOP语言）来封装这些属性和方法是很有意义的。因此，我们将使用组合构造/原型模式这一点。

**实现组合构造函数/原型模式**: (我会对每一行的进行解释说明)
```javascript
// The User Function
function User (theName, theEmail) {
  this.name = theName;
  this.email = theEmail;
  this.quizScores = [];
  this.currentScore = 0;
}
​
User.prototype = {
  constructor: User,
  saveScore:function (theScoreToAdd)  {
      this.quizScores.push(theScoreToAdd)
  },
  showNameAndScores:function ()  {
      var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
      return this.name + " Scores: " + scores;
  },
  changeEmail:function (newEmail)  {
      this.email = newEmail;
      return "New Email Saved: " + this.email;
  }
}
```

创建`User`的实例(instance):
```javascript
// 一个用户实例对象 ​
firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);
​
firstUser.showNameAndScores(); //Richard Scores: 15,10​
​
​// 其他的用户实例对象​
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18
```

**组合构造函数/原型模式的说明:**

让我们阐述上面的每一行代码，然后对这种模式有一个透彻的了解。

下面的代码初始化实例属性。这些属性将在创建每个用户实例被定义。因此它们的值对于每个用户都是不同。在函数内部使用`this`关键字，说明这些属性都是专属于每个对象实例的，也就是不共享。
```javascript
this.name = theName;
​this.email = theEmail;
​this.quizScores = [];
​this.currentScore = 0;
```

在下面的代码中，我们将使用字面量的方法来重写这个类的原型的属性，并且我们在这个对象中定义了会所有的方法（他们都会被所有的用户实例继承）。
```javascript
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}
```

用上面的这种方式来覆盖构造函数(override constructor)是为了方便，因为我们不必每次都写`User.prototype`，就像这样：
```javascript
User.prototype.constructor = User;
User.prototype.saveScore = function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
};
​
User.prototype.showNameAndScores = function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
};
​
User.prototype.changeEmail =  function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
}
```

通过使用字面量的定义方法来重写原型，我们把所有的方法都统合在了一个地方，而且，在后面你还能看到更好的封装。当然也减少了输入的代码。

### 重要的笔记

**JavaScript的原型**:

在JavaScript中，你可以在一个对象的原型中添加了属性和方法，如果你希望让一个对象实例都可以继承这些属性和方法的话。这是为什么我们对`User.prototype`添加方法的原因，这使得它们可以让所有用户对象实例的进行继承与使用。更多请阅读[JavaScript Prototype in Plain Language](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

**constructor属性**

我说过，每一个原型都有一个constructor属性，而这个属性指向构造函数。 例如：
```javascript
function Fruit () {}
​var newFruit = new Fruit ();
console.log (newFruit.constructor) // Fruit ()
```

覆盖原型的一个缺点是`constructor`属性不再指向原型，所以我们要手动设置。像这样：
```javascript
 constructor: User
```

**原型方法**:

在下面，我们在原型上定义了方法，因此`User`的所有实例都可以访问这些方法。
```javascript
saveScore:function (theScoreToAdd)  {
  this.quizScores.push(theScoreToAdd)
},
showNameAndScores:function ()  {
  var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";

  return this.name + " Scores: " + scores;
},
changeEmail:function (newEmail)  {
  this.email = newEmail;

  return "New Email Saved: " + this.email;
}
```

我们实例化一个用户对象:
```javascript
// A User ​
firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);
​
firstUser.showNameAndScores(); //Richard Scores: 15,10​
​
​// Another User​
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18
```

如你所见，我们已经封装的所有用户功能在(`User`)里面，以至于让用户的每一个实例可以使用的原型的方法（如`changeEmail`）和定义自己的实例属性（如姓名和电子邮件）。

有了这个模式，你可以使用标准的运算符和方法的实例，包括`instanceof`运算符，在`for-in`循环（甚至`hasOwnProperty`），和`constructor`属性。

## JavaScript中的继承

在我们的代码中实现继承，将会允许我们从父母函数继承属性跟相应方法,而且我们可以很容易的扩展新方法或者新属性。对象可以利用它们继承的属性跟方法,但仍然很容易有自己的专门的属性跟方法。

JavaScript实现继承最好的模式是：**寄生组合继承(The Best Pattern: Parasitic Combination Inheritance)**。在我们学习这个模式之前，先看看为什么要应用这个模式。

我们已经成功地实现了封装，通过在`User`里面添加每个用户都需要的属性和方法，并且每个实例都有自己的属性或者方法。

### 为什么要继承

接下来,我们想封装问题对象的所有属性和方法。例如,每个问题都有`question`, `choices`, `correctAnswer`这些属性。此外,每个问题都有一些方法:`getCorrectAnswer()`, `getUserAnswer()`, `displayQuestion()``。

我们希望有不同的问题对象。但在我们将实现一个MultipleChoiceQuestion方法和DragDropQuestion方法。实现这些,所有问题都单独使用两个方法是重复的，多余的，产生不必要的代码。

MultipleChoiceQuestion的HTML布局和DragDropQuestion的HTML布局是不同的, `displayQuestion`方法将有不同的实现。因此,我们将在DragDropQuestion重写相应的displayQuestion方法。这是OPP的一个重要编码原则。


### 应用寄生组合式继承

为了实现这种模式，我们必须使用两种专门为了JavaScript的继承而发明的技术。先前有一些笔记关于这两种技术，不需要熟记相关的细节，只要理解明白这些技术就行了。

**原型式继承**（by道格拉斯▪克罗克福）

道格拉斯▪克罗克福提出了下面的`Object.create`方法，成为我们现在用来实现继承的基本方法。

<strong>Object.create方法</strong>
```javascript
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }
        F.prototype = o;
        return new F();
    };
}
```
这个方法已经被添加到ECMAScript5，所以你可以使用`Object.create()`访问它，现在就来理解他：
```javascript
Object.create = function (o) {
​//It creates a temporary constructor F()​
    function F() {}
​//And set the prototype of the this constructor to the parametric (passed-in) o object​
​//so that the F() constructor now inherits all the properties and methods of o​
    F.prototype = o;
​
​//Then it returns a new, empty object (an instance of F())​
​//Note that this instance of F inherits from the passed-in (parametric object) o object. ​
​//Or you can say it copied all of the o object's properties and methods​
    return new F();
}
```
`Object.create`方法的关键在于，你可以向他传入一个你想从中继承的对象，然后它返回了一个继承你传进去那个对象的新对象。
例如：
```javascript
// We have a simple cars object​
​var cars = {
    type:"sedan",
    wheels:4​
};
​
​// We want to inherit from the cars object, so we do:​
​var toyota = Object.create (cars); // now toyota inherits the properties from cars​
console.log(toyota.type); // sedan
```
当然我们现在可以添加更多属性给toyota这个对象,但是让我们继续前进。
下一个用来实现继承的函数 是<strong>inheritPrototype</strong>这个函数，这个函数为我们简洁地实现了寄生组合式继承。我们向其传入了父对象(或超类)和子对象(或子类)，然后这个函数实现了寄生组合式继承：让子对象继承了父对象。
```javascript
 function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
​// So the copyOfParent object now has everything the parentObject has ​
    var copyOfParent = Object.create(parentObject.prototype);
​
    //Then we set the constructor of this new object to point to the childObject.​
​// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.​
    copyOfParent.constructor = childObject;
​
    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)​
   childObject.prototype = copyOfParent;
}
```
**为什么我们要手动的设置**`copyOfParent`的`constructor`属性？
我们显式地设置copyOfParent的constructor属性指向`childObject`因为在之前的步骤：`var copyOfParent = Object.create(parentObject.prototype)`,事实上执行的是：

```javascript
// We made a new object and overwrote its prototype with the parentObject prototype:​
​function F() {}
F.prototype = parentObject.prototype;
​// Then it was this new F object we assigned to copyOfParent.​
​// All of this was done inside the Object.create () method.
```
所以，这个我们分配给 `copyOfParent`的新的F对象，就不再具有constructor属性因为我们已经重写了它的整个原型。当你重写了一个对象的原型(object.prototype = someVal)，你同时也就重写了这个对象的constructor属性。

所以为了确保copyOfParent的constructor属性具有正确的值，我们必须手动的设置： `copyOfParent.constructor = childObject;`

本来我们可以直接复制`parentObject`所有属性和方法
到`childObject`，但是我们使用了`copyOfParent`这个中介来复制。因为`childObject`的属性在复制过程中会被重写，所以我们手动的设置 `copyOfParent constructor`为`childObject`。然后我们设置`childObject`的原型为`copyOfParent`于是`childObject`就继承了`parentObject`。

OK， 这已经不少了，我希望你理解:)。

**回到了有趣的东西:创建quiz的OOP风格:**  

既然我们了解我们将要使用的inheritPrototype函数,那就继续来执行Question这个构造函数。

注意,在这篇文章中，在说到构造函数的时候，我有时候是使用“constructor”的说法，因为这个函数就是用做构造器来产生实例的。

<strong>The Question Constructor (Parent of all Question Objects):</strong>
(可以认为是一个Questions的超类)
```javascript
	 // The Question function is the parent for all other question objects;​
​// All question objects will inherit from this Question constructor​
​
​function Question(theQuestion, theChoices, theCorrectAnswer) {
    // Initialize the instance properties​
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";
​
    // private properties: these cannot be changed by instances​
    var newDate = new Date(),
    // Constant variable: available to all instances through the instance method below. This is also a private property.​
        QUIZ_CREATED_DATE = newDate.toLocaleDateString();
​
​// This is the only way to access the private QUIZ_CREATED_DATE variable ​
​// This is an example of a privilege method: it can access private properties and it can be called publicly​
    this.getQuizDate = function () {
        return QUIZ_CREATED_DATE;
    };
​
​// A confirmation message that the question was created​
    console.log("Quiz Created On: " + this.getQuizDate());
​
}
```

**添加属性方法给Question对象**

所有的Question对象的实例都会继承这些方法，因为我们给Question原型添加了这些方法。
```javascript
 // Define the prototype methods that will be inherited​
Question.prototype.getCorrectAnswer = function () {
    return  this.correctAnswer;
};
​
Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};
​
Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
        choiceCounter = 0;
​
    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>";
​
    console.log (questionToDisplay);
};
```
**Child Question（Question对象的子类）**

既然我们有了Question  constructor对象，我们就可以继承它并且创建子类（子对象）。继承的能力使我们可以创建各种各样的问题,而且每个也可能是多种多样的。

第一，**Multiple Choice Question:**
```javascript
// Create the MultipleChoiceQuestion​
​function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
​// For MultipleChoiceQuestion to properly inherit from Question, here inside the MultipleChoiceQuestion constructor, we have to explicitly call the Question constructor​
​// passing MultipleChoiceQuestion as the this object, and the parameters we want to use in the Question constructor:​
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};
```
然后我们必须使用我们刚刚讨论的inheritPrototype函数:
```javascript
// inherit the methods and properties from Question​
​inheritPrototype(MultipleChoiceQuestion, Question);
```
当我们继承Question之后,如果必要的话我们可以添加到方法到MultipleChoiceQuestion函数中。但是我们必须在继承之后去添加，不然的话，添加到原型中的方法都将会被重写。

**A Drag and Drop Question**

以类似的方式,我们可以定义另一种类型的Question：
```javascript
// Create the DragDropQuestion​
​function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
​
​// inherit the methods and properties from Question​
​inheritPrototype(DragDropQuestion, Question);
```

**Overriding Methods**

重写方法是面向对象编程的另一个原则，通过这种方式， 我们可以很容易的做到这一点。
因为Drag and Drop questions和 Multiple Choice questions具有不同的HTML布局，所以我们需要重写 displayQuestion方法才能满足执行Drag and Drop questions的需要：
```javascript
// Override the displayQuestion method it inherited​
DragDropQuestion.prototype.displayQuestion = function () {
    // Just return the question. Drag and Drop implementation detail is beyond this article​
    console.log(this.question);
};
```
在真正的Quiz程序中，我们需要产生一个Quiz构造函数来启动quiz，但是在这篇文章中，我们测试继承的代码只需这样做:
```javascript
// Initialize some questions and add them to an array​
​var allQuestions = [
​new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 3),

​new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),

​new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];
​
​// Display all the questions​
allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion();
});
```
如果你运行代码，你就会看到 multiple choice questions 的displayQuestion方法会返回一个在div标签里的<strong>问题</strong>,还有在li标签里的单选按钮里的<strong>选项</strong>，另一方面， drag and drop questions 的displayQuestion方法仅返回没有选项的问题。

Nicholas Zakas描述：
> 寄生组合式继承在JavaScript中被认为是最优的继承模式，如果你学好它,理解它,你就可以在JavaScript的web应用程序使用它。

您可能想知道早些时候我们用于封装的构造函数模式和原型模式组合与寄生组合继承有什么不同。前面的组合使用构造函数和原型模式最好是用于封装（创建自定义对象），并且它没有所有的继承机制像子类这些。另外，继承模式则超越了创建对象而仅仅是继承属性和方法，它可以使得子对象成为其他对象的父对象，并且你能使用私有成员,重写,和其他OOP概念。

## Final Words
我给了你们在JavaScript中执行面向对象编程的两种最好的模式的全部细节,我希望你至少了解一般的概念。在JavaScript程序中使用这些模式。注意,不仅仅是在复杂的程序，在中小程序中，您也可以使用面向对象编程。

## Further Reading
- Read chapters 6 and 7 of Zakas’s Professional JavaScript for Web Developers.
- Read chapters 5 and 6 of Stefanov’s JavaScript Pattens.
- Read chapter 4 of Herman’s Effective JavaScript.

## Notes
- [Professional JavaScript for Web Developers](http://www.amazon.com/gp/product/1118026691/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118026691&linkCode=as2&tag=interhaptic-20) Chapter 6.
- [JavaScript Patterns](http://www.amazon.com/gp/product/0596806752/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0596806752&linkCode=as2&tag=interhaptic-20) Chapters 5 and 6
- [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://www.amazon.com/gp/product/0321812182/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321812182&linkCode=as2&tag=interhaptic-20) Chapter 4.
- [http://javascript.crockford.com/prototypal.html](http://javascript.crockford.com/prototypal.html)
- [Professional JavaScript for Web Developers](http://www.amazon.com/gp/product/1118026691/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118026691&linkCode=as2&tag=interhaptic-20) Chapter 6, page 215.


(**原文链接：http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/**)
