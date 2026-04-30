# Learning_Angular
This is my first learning project of Angular

## Reference from Youtube
https://youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF&si=hp7CD_9egckQJ0oi 

## Notes : Introduction to Angular
1. What is Angular? 
 - it is a platform for building single page client applications using HTML and TypeScript 
 - It provides the tools and libraries needed to create rich interactive web applications
 2. What is Angular App?    
 - it is a client side application that runs in the browser
 - it can be used to create rich interactive web applications 
 3. What is a Component?
 - It is a building block of Angular application
 - It is a class that is associated with a template
 - It is a class that is associated with a stylesheet

 4. Why Angular?
 - It focus on developer tooling and productivity
 - Angular has a built-in router and HttpClient module
 - Easy updates
 - Uses TypeScript

 5. what is TypeScript?
 - It is a strongly typed programming language that is a superset of JavaScript
 - It is developed by Microsoft
 - It is statically typed language  

## Getting Started with Angular 

 1. Install Node.js and npm
 - Node.js is a JavaScript runtime environment that is used to run Angular applications
 - npm is a package manager for Node.js that is used to install Angular applications

 2. Install Angular CLI
 - Angular CLI is a command line interface for Angular applications
 - It is used to create, develop, and maintain Angular applications

 ### How to install Angular CLI
 ```bash
 npm install -g @angular/cli
 ```
 ### How to confirm that Angular CLI is installed
 ```bash
 ng version
 ```    
Image of the output:
![Angular CLI installation screenshot](InstallingAngularCLI.png)

## Setting up your project

1. In this tutorial we will be downloading an existing project from;

https://github.com/angular/codelabs/tree/homes-app-start

2. Download - extract and rename the folder as homes-app

3. Open terminal or command prompt and navigate to the homes-app folder

```bash
cd homes-app
```
4. Install all the dependencies

```bash
npm install
```

5. Testing out the application using a development server hosted on your computer and provided by angular

```bash
ng serve
```
Image of the output:
![Angular CLI development server output](runningForFirstTime.png)

It will run on `http://localhost:4200`

6. Install Angular language service
```bash
npm install -g @angular/language-service
```
check whether the language service is installed
```bash
ng language-service
```
screenshot:
![Angular language service screenshot](installingAngularServices.png)





 

