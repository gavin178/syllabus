(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),r=(n(0),n(289)),i={id:"lesson",title:"JavaScript Core III - 1",sidebar_label:"Lesson"},l={id:"js-core-3/week-1/lesson",title:"JavaScript Core III - 1",description:"Learning Objectives",source:"@site/docs/js-core-3/week-1/lesson.md",permalink:"/js-core-3/week-1/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-1/lesson.md",sidebar_label:"Lesson",sidebar:"JavaScriptCore3",previous:{title:"Overview",permalink:"/js-core-3/index"},next:{title:"Homework",permalink:"/js-core-3/week-1/homework"}},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"1. Debugging",id:"1-debugging",children:[{value:"Vocabulary",id:"vocabulary",children:[]},{value:"Why is Debugging Important?",id:"why-is-debugging-important",children:[]},{value:"The Debugging Mindset",id:"the-debugging-mindset",children:[]},{value:"Types of Errors",id:"types-of-errors",children:[]},{value:"The Debugging Framework",id:"the-debugging-framework",children:[]},{value:"Exercise 1",id:"exercise-1",children:[]},{value:"Exercise 2",id:"exercise-2",children:[]}]},{value:"Quiz (10 - 15 minutes)",id:"quiz-10---15-minutes",children:[]},{value:"Explanation",id:"explanation",children:[]},{value:"Getting Setup",id:"getting-setup",children:[]},{value:"Homework",id:"homework",children:[]}],c={rightToc:s};function b(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The learner should understand the value of thorough and comprehensive debugging"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to use error messages to debug simple logical or syntactical errors in their code"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to logically step through their code to find bugs and errors"),Object(r.b)("li",{parentName:"ul"},"The learner should be able to modify an existing program to solve errors")),Object(r.b)("h2",{id:"agenda"},"Agenda"),Object(r.b)("p",null,"The purpose of this class is to introduce to the student:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Debugging your code"),Object(r.b)("li",{parentName:"ol"},"Consolidate learning for the project work")),Object(r.b)("h2",{id:"1-debugging"},"1. Debugging"),Object(r.b)("h3",{id:"vocabulary"},"Vocabulary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Syntax")," & ",Object(r.b)("inlineCode",{parentName:"li"},"Syntactical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Bug")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Error"))),Object(r.b)("h3",{id:"why-is-debugging-important"},"Why is Debugging Important?"),Object(r.b)("p",null,"When are projects are very small it's easy to see the problems and when something does break it's not to much of an issue. This isn't true when we start working on larger projects."),Object(r.b)("p",null,"The code that we write has real world uses and real world effects."),Object(r.b)("h4",{id:"y2k-bug"},"Y2K Bug"),Object(r.b)("p",null,"In 1999 the world faced a possibly very serious bug in the way that computer stored time. When computers stored the year they would only store the last two digits (e.g. 1999 is stored as just 99). This means that when the year 2000 happened lots of people were afraid that computer would think the year was the year 1900 instead of the year 2000."),Object(r.b)("p",null,"Check out this very scary video ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=ddzbxJasID4"}),"here")),Object(r.b)("p",null,"Fortunately, a lot people put in a lot of work to stop the bug before it happened and averted catastrophe."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discuss"),": Why did the Y2K bug happen? What oversights did the developers have?"),Object(r.b)("h4",{id:"therac-25"},"Therac-25"),Object(r.b)("p",null,"Therac-25 was a machine used to administer radiation to cancer patients which malfunctioned because of a programmer error."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Watch"),": You can watch a quick video about the bug ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=izGSOsAGIVQ"}),"here")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discuss"),": Why did the Y2K bug happen? What oversights did the developers have?"),Object(r.b)("h3",{id:"the-debugging-mindset"},"The Debugging Mindset"),Object(r.b)("p",null,"Debugging is a fact of life! Not everything will work the first time you do it and even when it does there will often be times when even if you feel like you've covered everything another bug may occur!"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Task (5 Minutes)"),"\nIn teams, the students should have quick discussion about the bugs that have occurred to them in the past. When they finish the class should regroup and gather together all the different types of bugs that have happened to them."),Object(r.b)("h3",{id:"types-of-errors"},"Types of Errors"),Object(r.b)("h4",{id:"syntax-errors"},"Syntax Errors"),Object(r.b)("p",null,"These errors are usually quite simple to fix and happen when you've typed some code wrong or missed a character. These will normally happen as soon as you run your code."),Object(r.b)("h5",{id:"examples-of-syntax-errors"},"Examples of Syntax Errors"),Object(r.b)("p",null,"How would we fix these syntax errors? Post your answers in Slack!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SyntaxError: missing ) after condition"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'if (3 > Math.PI {\n  console.log("wait what?");\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SyntaxError: missing variable name"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var = 1;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SyntaxError: missing } after function body"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var charge = function() {\n  if (sunny) {\n    useSolarCells();\n  } else {\n    promptBikeRide();\n};\n")),Object(r.b)("h4",{id:"reference-errors"},"Reference Errors"),Object(r.b)("p",null,"These errors most commonly happen when you try to access variable that has not been defined anywhere."),Object(r.b)("h5",{id:"examples-of-reference-errors"},"Examples of Reference Errors"),Object(r.b)("p",null,"How would we fix these reference errors? Post your answers in Slack!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'ReferenceError: "word" is not defined'))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var ward = "hello";\nword.substring(1);\n')),Object(r.b)("h4",{id:"type-errors"},"Type Errors"),Object(r.b)("p",null,"Type errors usually occur when you are trying to access a method or variable from an object that doesn't have that in it."),Object(r.b)("h5",{id:"examples-of-type-errors"},"Examples of Type Errors"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TypeError: document.getElByID is not a function"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var submit = document.getElById("button");\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TypeError: numbers.map is not a function"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Hint: what ",Object(r.b)("inlineCode",{parentName:"li"},"type")," is the number variable")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var numbers = { a: 13, b: 37, c: 42 };\n\nnumbers.map(function (num) {\n  return num * 2;\n});\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TypeError: Cannot read property 'substring' of undefined"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var name;\nname.substring(1);\n")),Object(r.b)("h3",{id:"the-debugging-framework"},"The Debugging Framework"),Object(r.b)("p",null,"When debugging you should always ask yourself a few key questions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What did I expect to happen?")),Object(r.b)("p",null,"You should very clearly be able to say exact what you expected to happen when you run your code. If you cannot do this, then you do not understand the problem well enough."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Is it actually broken?")),Object(r.b)("p",null,"Sometime what you think is broken is actually working fine but not what you thought was going to happen. You should confirm with what the program is trying to do."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What happened instead?")),Object(r.b)("p",null,"You should be able to quickly state what you were expecting to happen. Just saying \"It Didn't Work\" isn't enough! The more carefully you dissect the problem the more easily you'll be able to fix it."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What have I tried so far?")),Object(r.b)("p",null,"Debugging is a process of loops and iteration. Think about what you've done so far and work out other ways that the code could have broken."),Object(r.b)("h4",{id:"tools"},"Tools"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Task (5 Minutes)")),Object(r.b)("p",null,"In teams, the students should have quick discussion about the ways that they have solved bugs or errors they've had in the past."),Object(r.b)("p",null,"When they finish the discussion we should regroup and gather together all the ways that they have solved bugs in the past."),Object(r.b)("h5",{id:"thinking-like-a-computer"},"Thinking like a computer"),Object(r.b)("p",null,"The most important skill you can develop is thinking analytically and logically - exactly the same as a computer. In the exercises soon we will be using our logical skills to slowly step through a program to see what is going wrong."),Object(r.b)("p",null,"Remember that the computer will run your program line-by-line, from top to bottom, and that loops and functions may jump to a new location. If in doubt, try going through the program one line at a time - don't jump ahead, or guess what you ",Object(r.b)("em",{parentName:"p"},"want")," your program to do, make sure you're reading what it actually ",Object(r.b)("em",{parentName:"p"},"does")," do."),Object(r.b)("p",null,"When debugging, it can often be useful to write down what values variables have, either on paper, in comments, or by using ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," - this is particularly true in loops and functions, where variable values may change from iteration to iteration, or between calls!"),Object(r.b)("h5",{id:"test-often"},"Test Often"),Object(r.b)("p",null,"It is important when working on your code to test each part of your code separately and carefully. Make sure everything is working before you move on to the next part otherwise problems become harder to debug."),Object(r.b)("h5",{id:"stackoverflowcom"},"Stackoverflow.com"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/"}),"Stackoverflow")," is a crucial tool for lots of new developers in finding answers to their programming problems. While a lot of the information is very good there are several points to keep in mind."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Information goes out of date very quickly",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You have to make sure that what your looking at it new"))),Object(r.b)("li",{parentName:"ul"},"Don't copy and paste code",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you don't understand what your code does then there is no pointing using it since soon you won't be able to debug it"))),Object(r.b)("li",{parentName:"ul"},"The Chosen Answer isn't always the right answer for you",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Always read all the responses to questions to find the correct answer for you")))),Object(r.b)("h5",{id:"talking-it-through-aka-rubber-ducking"},"Talking It Through (a.k.a Rubber Ducking)"),Object(r.b)("p",null,"When you're stuck on a problem one of the key techniques you can use is talking through your problem with somebody else. Being forced to slow down and think is important and you'll often realise your problem whilst trying to explain it so somebody else."),Object(r.b)("p",null,"Nobody else around to ask? Still tell it to somebody! The act of talking helps you work through the problem. Traditionally, programmers use a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Rubber_duck_debugging"}),"rubber duck"),"."),Object(r.b)("h5",{id:"using-consolelog-and-the-console"},"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"console.log()")," and the Console"),Object(r.b)("p",null,"By this point you will have seen ",Object(r.b)("inlineCode",{parentName:"p"},"console.log()")," quite a lot when we see what is happening in our programs - this tool can also be one of the key tools in debugging our programs!"),Object(r.b)("p",null,"When we're working on websites you can view the ",Object(r.b)("inlineCode",{parentName:"p"},"Console")," tool in Chrome by"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Right Click"),Object(r.b)("li",{parentName:"ul"},"Inspect"),Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("inlineCode",{parentName:"li"},"Console")," tab")),Object(r.b)("p",null,"Here you'll see all of the messages that have been printed by the website when it was loading and running."),Object(r.b)("h5",{id:"using-the-chrome-debugger"},"Using the Chrome Debugger"),Object(r.b)("p",null,"We know that JavaScript executes code line by line. How great would it be if we had a tool that allowed us to stop code execution on any line and inspect the values of our variables. Fortunately such a tool exists and it's called a debugger. Here we will use the Chrome debugger for JavaScript, however similar tools exist of all other popular browsers."),Object(r.b)("p",null,"To view the debugger go to the ",Object(r.b)("inlineCode",{parentName:"p"},"Sources")," tab of Chrome developer tools which we opened above."),Object(r.b)("p",null,"To tell the debugger to stop we need to create a ",Object(r.b)("inlineCode",{parentName:"p"},"breakpoint"),", it's an instruction to the debugger to stop execution and await instruction from us."),Object(r.b)("p",null,"We can place a debugger in one of two ways. We can either insert a line into our called saying"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"debugger;\n")),Object(r.b)("p",null,"or we can click on the line number in the debugger tool itself."),Object(r.b)("p",null,"Let's say we have a simple piece of code below and we want to inspect the values of ",Object(r.b)("inlineCode",{parentName:"p"},"x")," and ",Object(r.b)("inlineCode",{parentName:"p"},"y")," before adding them."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var x = 10;\nvar y = 20;\n\nvar z = x * y;\n")),Object(r.b)("p",null,"To use debugger on above code we will save it in a file called ",Object(r.b)("inlineCode",{parentName:"p"},"temp.js")," and import it into an html file called ",Object(r.b)("inlineCode",{parentName:"p"},"temp.html"),"."),Object(r.b)("p",null,"We can either use the ",Object(r.b)("inlineCode",{parentName:"p"},"debugger")," statement to pause the code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var x = 10;\nvar y = 20;\ndebugger;\nvar z = x * y;\n")),Object(r.b)("p",null,"or by opening the file in the debugger using the file navigation on the right hand side and clicking on line 4. Note you can pause on line with code not empty lines."),Object(r.b)("img",{src:n(342).default}),Object(r.b)("p",null,"Once we have paused code execution, we can mouse over the the variables to see their values."),Object(r.b)("img",{src:n(343).default}),Object(r.b)("p",null,"Once we have finished inspecting the values, we can use the controls in the top right corner to tell the debugger what to do."),Object(r.b)("img",{src:n(344).default}),Object(r.b)("p",null,"We can click the button with the blue triangle to tell the debugger to continue executing code until it hits the next breakpoint. Or if we want to execute code line by line ourselves, we can press the button with the curved arrow that will the debugger to execute the current line and stop on the next line."),Object(r.b)("p",null,"To remove a breakpoint you either remove the ",Object(r.b)("inlineCode",{parentName:"p"},"debugger")," statement or if you placed a breakpoint from the debugger itself, you can click that line number again to remove it."),Object(r.b)("h5",{id:"comparing-consolelog-and-debugger"},"Comparing console.log and debugger"),Object(r.b)("p",null,"As a developer you will likely use both tools to understand what your code is doing and help you fin and fix bugs. ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," can be a quick and easy way to check a value, but it can also be a bit inflexible since you can only inspect the value you log out in that one place."),Object(r.b)("p",null,"Using the debug tool to inspect values can be a bit slower than console logging out values. However, it is also more flexible since you can inspect any value and move execution yourself line by line."),Object(r.b)("p",null,"Try using both methods in your exercises and homeworks to get more familiar with them."),Object(r.b)("h5",{id:"eslint-in-vscode"},"ESLint in VSCode"),Object(r.b)("p",null,"Often you will have code that is perfectly valid JavaScript, but it may possibly not do what you want it to do. For example, you might have misspelled a variable name and as a result the variable you wanted to using is now unused and the variable you using does not exist."),Object(r.b)("p",null,"To catch such problems, we can use a static code analysis tool or commonly known as a linter. The most common one in use today is ",Object(r.b)("inlineCode",{parentName:"p"},"ESLint")," and it allows us to configure different rules to look out for and alert us when one of them is broken by our code."),Object(r.b)("p",null,"You can use the ESLint extension for VSCode which you can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"download here"),"."),Object(r.b)("p",null,"We have created a sample ESLint configuration to help you get started. You can download it ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:".eslintrc"}),"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "rules": {\n    "semi": ["warn", "always"],\n    "quotes": ["warn", "double"],\n    "eqeqeq": ["warn", "always"],\n    "no-unused-vars": ["warn"],\n    "no-redeclare": ["warn"],\n    "no-undef": ["warn"]\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"semi")," warns you if you did not use a semi colon at the end of the line\n",Object(r.b)("inlineCode",{parentName:"p"},"quotes")," ensures consistency by warning you if you did not use double quote marks\n",Object(r.b)("inlineCode",{parentName:"p"},"eqeqeq")," ensures you use ",Object(r.b)("inlineCode",{parentName:"p"},"===")," and ",Object(r.b)("inlineCode",{parentName:"p"},"!==")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"==")," and ",Object(r.b)("inlineCode",{parentName:"p"},"!=")," since the latter can lead to errors\n",Object(r.b)("inlineCode",{parentName:"p"},"no-unused-vars")," will warn you if you have unused variables in your code\n",Object(r.b)("inlineCode",{parentName:"p"},"no-redeclare")," will warn you if you redeclare an existing variable\n",Object(r.b)("inlineCode",{parentName:"p"},"no-undef")," will warn you if you try to use an undeclared variable or function"),Object(r.b)("p",null,"You can see all rules and their explanations at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/rules/"}),"https://eslint.org/docs/rules/"),". Many of them not make sense to you (they don't to me), but it can be a handy reference and over time your use and understanding of them will improve and increase."),Object(r.b)("h5",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Bugs are a fact of life. No one produces bug free code."),Object(r.b)("li",{parentName:"ul"},"Test regularly to find bugs early."),Object(r.b)("li",{parentName:"ul"},"Having multiple bugs in code can make them harder to deal with. See previous rule"),Object(r.b)("li",{parentName:"ul"},"Use tools such a linters spot and prevent bugs early"),Object(r.b)("li",{parentName:"ul"},"Error messages might look scary, but they are your friend"),Object(r.b)("li",{parentName:"ul"},"Use tools such as console.log and debugger to find root of bugs")),Object(r.b)("h3",{id:"exercise-1"},"Exercise 1"),Object(r.b)("p",null,"As a class we should step through solving all of the issues in this small piece of code. You should copy it into a code editor (e.g. VS Code) in a ",Object(r.b)("inlineCode",{parentName:"p"},".js")," file so you can debug and run it easily. ",Object(r.b)("strong",{parentName:"p"},"Be sure to use The Debugging Framework that we discussed earlier")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nlet printValuesOf = (jsObject, keys) => {\n  for (let i = 0; i <= keys.length; i++) {\n    let key = keys[i];\n    console.log(jsObject[k]);\n  }\n}\n\nlet simpsonsCatchphrases = {\n  lisa: 'BAAAAAART!',\n  bart: 'Eat My Shorts!',\n  marge: 'Mmm~mmmmm',\n  homer: 'd'oh!',\n  maggie: '(Pacifier Suck)',\n};\n\nprintValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');\n\n// Expected console output:\n\n// BAAAAAART!\n// Eat My Shorts!\n// d'oh!\n\n// Returns undefined\n\n")),Object(r.b)("p",null,"Try to categorise the bugs found under:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Logical"),Object(r.b)("li",{parentName:"ol"},"Syntactical"),Object(r.b)("li",{parentName:"ol"},"Other (programmer/user error)")),Object(r.b)("h3",{id:"exercise-2"},"Exercise 2"),Object(r.b)("p",null,"In your groups we want you to go through this program and find all of the bugs that are happening in this code."),Object(r.b)("p",null,"You can find the project ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus/tree/master/docs/js-core-3/week-1/debugging-code"}),"here")),Object(r.b)("h2",{id:"quiz-10---15-minutes"},"Quiz (10 - 15 minutes)"),Object(r.b)("p",null,"You can complete this quiz on Google Forms ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/forms/d/e/1FAIpQLScYHmS7LOfI4ML3z2axEpZd2Zgvbe-9FBB5rsWoqqMcw2u6SA/viewform"}),"here")),Object(r.b)("h1",{id:"2-project-work"},"2. Project Work"),Object(r.b)("p",null,"The project work should take between 60 and 90 minutes to give an overview and get everyone setup."),Object(r.b)("h2",{id:"explanation"},"Explanation"),Object(r.b)("p",null,"Over the next three weeks we're going to be building a website that will consolidate all of your knowledge so far in the course."),Object(r.b)("p",null,"You can find the project ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/readme"}),"here")),Object(r.b)("h2",{id:"getting-setup"},"Getting Setup"),Object(r.b)("p",null,"In your groups you should get the project setup using the exact instructions found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/getting-started"}),"here"),". Make sure you use your Teaching Assistants to help you!"),Object(r.b)("h2",{id:"homework"},"Homework"),Object(r.b)("p",null,"Click ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."))}b.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,d=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},342:function(e,t,n){"use strict";n.r(t),t.default=n.p+"003870962604911c5f61c41c8fa16759.png"},343:function(e,t,n){"use strict";n.r(t),t.default=n.p+"1128444c511287ee9468b46794888da7.png"},344:function(e,t,n){"use strict";n.r(t),t.default=n.p+"71ed40e3d39999f4ce851268d6c39809.png"}}]);