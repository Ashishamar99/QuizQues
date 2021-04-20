Day 1 
- Canvas and it's drawing methods. (Gradient, fill style, stroke style). [New] [Compare with turtle graphics in python]
----------------------------------------------------------------------------------------------------------------------------------------
Day 2
- Put a map of location in an iframe.
- Basic local storage in JS. (setitem and getitem)
- Basic JQ draggable interface. (ondragstart, ondragend)
- Audio and video tag.
- Web workers [New]
- Cross Document Messaging [New]

Note - Color isn't inherited, font family is.
----------------------------------------------------------------------------------------------------------------------------------------
Day 3
- Box Shadows.
- 960 Grid (Grid System)
- https://960.gs/
----------------------------------------------------------------------------------------------------------------------------------------
Day 4
- Tranform, Translate, Rotate, Skew, Scale.
- Key Frames.
- Media Queries in CSS.
----------------------------------------------------------------------------------------------------------------------------------------
Day 5
- Bootstrap Badges.
- Bootstrap Pagination.
- Bootstrap Scroll Spy.
[Try this out.]
- Bootstrap Toasts.
- Bootstrap ToolTips.
- Bootstrap Progress.
- element.cssText in JS.
----------------------------------------------------------------------------------------------------------------------------------------
Day 6
- Classes, objects in JS. [Encapsulation, Abstraction, Inheritance, Polymorphism]
- Objects in JS are like dictionaries in python.
- Inheritance with generation of dynamic elements.
- Callback Functions.
- Asynchronous Functions.
- JS Promises.
----------------------------------------------------------------------------------------------------------------------------------------
Day 7
- Async Function.
- Await Keyword.
- Regular Expressions.
- Moment.js
- Underscore.js [sortby, filter, union, difference, once, defer, merge, map, bind, memoize, delay, indexof, lastindexof, keys, values, isequal, some, every, iselement]
----------------------------------------------------------------------------------------------------------------------------------------
Day 8
- Angular Started.
- To create the project, we use ```ng new <project_name>```
- Navigate to the angular project file and run 'ng serve' to run the server.
- Inside the angular project, there is a src file. Inside src, we have many package files to modify the environment.
- We navigate to app (a sub directory inside src) and there the file called 'app-component.html' is the one to run when we run the project.

#### Add new Components
- To add new components we navigate to app and use the command ```ng g component <component_name>```
- Let's say we add a new component called "test".
- A directory with that name will be created, and we navigate to that folder and inside the "test.components.ts" we make a note of the selector.
- In the app-component.html file, we can use this previously noted selector and use that as a tag to display that particular component.

- All TypeScript files are called controllers.
- String Interpolation, Directives.
----------------------------------------------------------------------------------------------------------------------------------------
Day 9
- Under app.json inside architect -> //Order of scripts -> jq, popper, boot
- Under app.son inside architect -> //Styles.scss, and bootstrap css
- Angular routing.
- Make a folder called 'common' and under that folder, we can put our guard.ts files

#### Creating Guards
- Create a folder called common in 'src\app' and put all guard.ts files there.
- go to app.module.ts and under providers add the class name of the guard.
- providers: [QuizGuard]
- under app-routing.module.ts add a canActivate filed next to the component and add the class name of the guard.
```
    {path: 'admin', component: AdminComponent, canActivate: [QuizGuard]}
```

----------------------------------------------------------------------------------------------------------------------------------------
Day 10
#### Reactive Forms
- Reactive Forms -> https://angular.io/guide/forms-overview
- go to app.module.ts and under imports array, add FormsModule and ReactiveFormsModule.
```
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
```
- Write the bootstrap form in the component.html file. [Basically whatever html file you want the form in]
- [formGroup] is the form name, and (ngsubmit) is the submit method

#### Creating Services
- Services are loaded in memory only when it's called.
- We will invoke the sevice only when required.
- From the point of view of components, services are dependencies.
- This is also called "dependency injection".
- Create a folder called services in 'src\app' and add all service.ts files there.
- Add a decorator (@Injectable()).
- After writing the service, in app.module.ts go to providers and add the ServiceClass (name of the Service) there.
- Implementing it is done by declaring a variable in the component.ts file like so, 
```
    testService: TestService; //testService is the variable we use.
```
- Pass in a service parameter with the type as well in the constructor of the component.
```
    constructor(testServiceParam: TestService) {
        this.testService = testServiceParam; 
    }
```
- After the 
----------------------------------------------------------------------------------------------------------------------------------------