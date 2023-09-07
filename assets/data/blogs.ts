export interface Blog {
 id: string;
 title: string;
 miniDescription: string;
 description: string;
 content: string;
 createdAt: Date;
 updatedAt: Date;
 author: {
  id: string;
  name: string;
  profilePictureUrl: string;
  introduction: string;
 };
 tags: string[];
}

export default [
 {
  id: "1",
  title: "Understanding and using interfaces in TypeScript",
  miniDescription:
   "Learn how to use interfaces to describe the shape of objects and implement type checking in TypeScript.",
  description:
   "TypeScript is a superset of JavaScript that introduces new features and helpful improvements to the language, including a powerful static typing system. By adding types to your code, you can spot or avoid errors early and get rid of errors at compilation. In this article, we will go over one of the most important typing features in TypeScript: interfaces. They allow us to describe the objects that will use in our code, ultimately helping us catch errors and write more efficient code.",
  content:
   "Introduction to interfaces\nHow to use an interface\nHow to define optional properties in interfaces\nRead-only properties in interfaces\nIndexable properties in interfaces\nHow to define function types in interfaces\nHow to use interfaces with classes\nDifferent types of variables in a class\nExtending interfaces\nHow to use generics in interfaces\nHow TypeScript compiles interfaces\nWhy use interfaces?\nCallable interfaces\nHow to use interfaces with React\nUsing interfaces in Angular",
  createdAt: new Date("2022-08-26"),
  updatedAt: new Date("2022-09-09"),
  author: {
   id: "a1",
   name: "Ankita Masand",
   profilePictureUrl: "https://i.pravatar.cc/300",
   introduction:
    "Software engineer trying to make sense of every line of code I write. Feminist. Prefers simple over complex. Latte lover. Blogger."
  },
  tags: ["typescript"]
 },
 {
  id: "2",
  title: "A Simple Guide to Typescript Interfaces: declaration & use cases",
  miniDescription:
   "Learn how to declare and work with interfaces in TypeScript with practical examples and use cases.",
  description:
   "TypeScript is an object-oriented JavaScript language that, from ES6 and later, supports OOP features like interface, class, and encapsulation. But when should we use interfaces, classes, or both at the same time? If you are a new or confused using interfaces and classes, this piece is for you. In this article, you will learn how to create and work with interfaces in TypeScript to help add improved functionality to your projects. We will introduce you to the concept in detail with use cases.",
  content:
   "Declaring Interfaces\nWorking with interfaces: use cases\nExtending an interface\nNext steps for your learning",
  createdAt: new Date("2021-02-22"),
  updatedAt: new Date("2021-02-22"),
  author: {
   id: "a2",
   name: "Jerry Ejonavi",
   profilePictureUrl: "https://i.pravatar.cc/300",
   introduction:
    "A web developer and educator who loves sharing his knowledge and experience with others."
  },
  tags: ["typescript", "usecases"]
 },
 {
  id: "3",
  title: "When and how to use interfaces and classes in TypeScript",
  miniDescription:
   "Learn the difference between interfaces and classes in TypeScript and when to use them for better code organization and readability.",
  description:
   "TypeScript is an object-oriented JavaScript language that, from ES6 and later, supports OOP features like interface, class, and encapsulation. But when should we use interfaces, classes, or both at the same time? If you are a new or confused using interfaces and classes, this piece is for you. In this article, we will explain the difference between interfaces and classes in TypeScript and show you some examples of how to use them for better code organization and readability.",
  content:
   "What are interfaces?\nWhat are classes?\nInterface vs class\nWhen to use interface\nWhen to use class\nWhen to use both interface and class\nConclusion",
  createdAt: new Date("2020-11-10"),
  updatedAt: new Date("2020-11-10"),
  author: {
   id: "a3",
   name: "Daniel Madalitso Phiri",
   profilePictureUrl: "https://i.pravatar.cc/300",
   introduction:
    "A software developer, writer, speaker, and mentor who loves building things for the web."
  },
  tags: ["classes", "interfaces"]
 },
 {
  id: "4",
  title: "How to use TypeScript interfaces with React",
  miniDescription:
   "Learn how to use TypeScript interfaces with React to create type-safe components.",
  description:
   "TypeScript is a superset of JavaScript that introduces new features and helpful improvements to the language, including a powerful static typing system. By adding types to your code, you can spot or avoid errors early and get rid of errors at compilation. In this article, we will go over one of the most important typing features in TypeScript: interfaces. They allow us to describe the objects that will use in our code, ultimately helping us catch errors and write more efficient code.",
  content:
   "Introduction to interfaces\nHow to use an interface\nHow to define optional properties in interfaces\nRead-only properties in interfaces\nIndexable properties in interfaces\nHow to define function types in interfaces\nHow to use interfaces with classes\nDifferent types of variables in a class\nExtending interfaces\nHow to use generics in interfaces\nHow TypeScript compiles interfaces\nWhy use interfaces?\nCallable interfaces\nHow to use interfaces with React\nUsing interfaces in Angular",
  createdAt: new Date("2022-08-26"),
  updatedAt: new Date("2022-09-09"),
  author: {
   id: "a1",
   name: "Ankita Masand",
   profilePictureUrl: "https://i.pravatar.cc/300",
   introduction:
    "Software engineer trying to make sense of every line of code I write. Feminist. Prefers simple over complex. Latte lover. Blogger."
  },
  tags: ["typescript", "react"]
 },
 {
  id: "5",
  title: "A Simple Guide to Typescript Interfaces: declaration & use cases",
  miniDescription:
   "Learn how to declare and work with interfaces in TypeScript with practical examples and use cases.",
  description:
   "TypeScript is an object-oriented JavaScript language that, from ES6 and later, supports OOP features like interface, class, and encapsulation. But when should we use interfaces, classes, or both at the same time? If you are a new or confused using interfaces and classes, this piece is for you. In this article, you will learn how to create and work with interfaces in TypeScript to help add improved functionality to your projects. We will introduce you to the concept in detail with use cases.",
  content:
   "<p>Typescript interfaces are a powerful way to define contracts between different parts of your code. They allow you to specify the shape and structure of an object, function, class, or any other type. In this guide, we will explore how to declare and use interfaces in Typescript, and what are some common use cases for them.</p><br/><p>You can define one below like so</p><br/><div class='code-background'><code>interface Post {</br>&nbsp;&nbsp;id: string;</br>&nbsp;&nbsp;title:string;<br/>}</code></div><br/><p>We can use interfaces to type objects and functions in Typescript. To type an object, we can use the interface name as a type annotation after a colon.</p>",
  createdAt: new Date("2021-02-22"),
  updatedAt: new Date("2021-02-22"),
  author: {
   id: "a2",
   name: "Jerry Ejonavi",
   profilePictureUrl: "https://i.pravatar.cc/300",
   introduction:
    "A web developer and educator who loves sharing his knowledge and experience with others."
  },
  tags: ["typescript", "declaration", "usecases"]
 }
] as Blog[];
