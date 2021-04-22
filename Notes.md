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

#### Angular routing.
- Create the component you want.
- Next, go to ```app-routing.module.ts``` (this will be available when we choose 'yes' for app-routing when creating the app).
- Inside the ```Routes``` array, paste the path to the component. As shown below.
```
{path: 'user', component: UserComponent}
```
- Here the ```path``` variable holds the string value that connects the components.
- Go to the desired page where you want the button or anchor tag to route and apply the attribute ```routerLink``` as shown. (The path prefixed by a forward slash).
```
<a class="nav-link" routerLink="/user">User Component</a>
```
- Finally, where ever you want the router output to show, use the tag ```<router-outlet></router-outlet>```. Here we have used it in the ```content.component.html``` file. As all our content needs to be replaced inside this very component.

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

#### Creating Services (Dependency Injection)
- Services are loaded in memory only when it's called.
- We will invoke the sevice only when required.
- From the point of view of components, services are dependencies.
- This is also called "dependency injection".
- Create a folder called services in 'src\app' and add all service.ts files there.
- Add a decorator ```@Injectable()```
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
- After this, we can use the methods of the service likeso,
```
ngOnInit(): void {
    this.getAllTests();
  }

  getAllTests(){
    this.testArr = this.testService.getTests();
    console.log(this.testArr);
  }
  //Custom Methods !!!
```

- ### Note - Hierarchy of the components are App Component < Home Component < Content Component. [From Outer most to inner most components].

#### Input to inner component from outer component.
- Here, we will try sending an item from outer component to inner component.
- Let's say we have a string or an array to pass from HomeComponent to Content Component. 
- We use the decorator ```@Input()``` in the child component [Here, child component is Content Component].
- We display the same in the same way we do in case of string interpolation. (We use a ```*ngFor``` for iterables and ```{{}}``` for variables or non-iterables).
- If we don't send data from parent component [Here, parent component is Home Component] to child component the data displayed is the default initialised value which is given while declaring it in the child component.
- __IMPORTANT NOTE :: The variable name given in parent component should be the same when declared in the child component.__
- Let's say the below mentioned variables are the ones which we need to pass from Home Component to Content Component.
```
msg = 'Message From Home';
msgArr = ['one', 'two', 'three'];
```
- We declare them in the **_home.component.ts_** file Outside the constructor.
- In **_home.component.html_**, we look for the tag of the Content Component (Child Component). And we add the variable we want to send in __square braces__ and using an '=' operator we mention what variable to pass. Like so.
```
<app-content [msgArr] = msgArr></app-content>
```
- If we would be passing strings the line would be.
```
<app-content [msg] = "msg"></app-content>
```
- __IMPORTANT NOTE :: If we really want to name the variables in home component and child component different. While sending the data the variable has to be same. Suppose the variable at content component is called and declared or initialised as  ```msgArrReceived``` then while sending it from home component it has to be the same in the square braces. ```<app-content [msgArrReceived] = msgArr></app-content>```__

#### Angular Events.
- We will try sending an event from an inner component to an outer component.
- Event Emitting has 5 steps
- First we import from angular core and not node:events. ```import { EventEmitter} from '@angular/core';```
- Next Declare the type of Event Emitter with a variable in the component class outside the constructor.
```
export class HomeComponent implements OnInit {

  ee: EventEmitter <string>;
  //Declaring EventEmitter of type string

  ...
  ...
  ...
```
- Next we initialise the Event Emitter in the constructor [Here it's Home Component], just like the previous example.
- Next we Subscribe to the event as well. In the constructor. Initialising and Subscribing are shown below.
```
constructor() { 
    this.ee = new EventEmitter<string>();

    this.ee.subscribe((name: string) => {
      console.log(`Hello ${name}`);
    })
  }
```
- Finally, we emit the event with the variable we used. We write a method in the same place where we write custom methods. After ```ngOnInit()```

```
respondToEvent(){
    this.ee.emit('John 1');
    this.ee.emit('John 2');
    this.ee.emit('John 3');
  }
```
- We can call this event in the component where we want. As shown below.
```
<button type="button" class="btn btn-primary" (click)="respondToEvent()">Emit Multiple Events.</button>
```


#### Inner component to outer component
- __In the previous section we saw the component Hierarchy. Inside content Hierarchy we have mentioned many routes. So any routing content is the child of content. Here let's consider the test component. And for our example lets send notification count from our test component to content component using an Event Emitter.__

- First we declare the variable in the child component. We will use the ```@Output()``` decorator for this as we are exporting data from the inner component.
```
@Output() addNotificationCount: EventEmitter<number>; //Step 1
```
- __Note:__ Don't forget to import Event Emitter from ```'@angular/core'``` and not ```node:modules```.
-  Next we initialise the variable in the constructor of the child component.
```
this.addNotificationCount = new EventEmitter<number>(); //Step 2
```
- Next we define a method to call and generate these events.
```
addNotification(){
    
    //Step 3 // Method to call and generate these notifications. //Step 4 in test.component.html
    
    this.addNotificationCount.emit(1);
  
  }
```

- Next we move to the _html file of the child component_ and use this method. Here we use a button to call it.
```
<!--Step 4 // Step 5 in content.component.html-->
    <button type="button" class="btn btn-primary" (click)="addNotification()">Generate Notification (Emit Notification Event.)</button>
```
- Now we move to the _parent component's html file_ and __call the event emitter using the variable we declared in Step 2__. Events are called using paranthesis Just like the ```(click)``` event we saw earlier with buttons.
```
<app-test (addNotificationCount) = "notificationReceived($event)"></app-test> <!--Step 5 -- Events are called using parantheisis. //Step 6 in content.component.ts-->
```
- Finally, we move to the _parent component's html file_ [Here, content.component.ts] and we declare a variable (Let's call it contentNotiCount. We use it to store previous notification count values from the start of the session). We will initialise it to zero in the same way we declare and initialise variables outside the constructor.
```
contentNotiCount: number = 0; //Step 6
``` 
- Now, we define the called function in the _parent component's html file_ [Here, content.component.ts] and handle the event. Here, we are incrementing notification count and logging it in the console.
```
notificationReceived(notiCount: number){                            //Step 7
    this.contentNotiCount = this.contentNotiCount + notiCount;
    console.log( `Total Notifications:: ${this.contentNotiCount}`)
  }
```
----------------------------------------------------------------------------------------------------------------------------------------
Day 11
- Built in Directives -> https://angular.io/guide/built-in-directivesX

- We can use the ```(input)``` function to call a function everytime input is changed. An example implementation is given below.
```
<input maxlength="1" #inpID (input)=switchFunc(inpID.value)/> <br />
```

- Attribute Directives are
  - ```NgClass``` — adds and removes a set of CSS classes.
  - ```NgStyle``` — adds and removes a set of HTML styles. <Try this yourself>
  - ```NgModel``` — adds two-way data binding to an HTML form element.

- Structural Directives are
  - ```NgIf``` — conditionally creates or disposes of subviews from the template.
  - ```NgFor``` — Repeat a node for each item in a list.
  - ```NgSwitch``` — A set of directives that switch among alternative views.

- Form Builders. We will use form builders as they are more economical than form groups. And adding validators is easier in form builders. We will be injecting the form builder in the constructor so as to load it whenever we want.

Injecting Form Builder using a variable parameter. Using a private access specifier.
```
constructor(testServiceParam: TestService, private formBuilder: FormBuilder) {
...
...
  }
```
- Validating Forms -> https://angular.io/guide/form-validation
- Validators -> https://angular.io/api/forms/Validators
- We have to import ```Validators``` from ```'@angular/forms'``` . And use them like so,
```
testForm = this.formBuilder.group({
    id: 0,
    testName: ['', Validators.required],
    marks: 0,
    noOfQues: 0
  });
```
- ### We converted the array in ```Services\testservice.ts``` to static so that whenever a new test is added, we can make sure that that change stays in the array. [**Check Commit History here.**](https://github.com/Ashishamar99/QuizQues/commit/b300ed752914b3f658f42971918df8bbd37379ea#diff-1b9e1e5297123b0d1a332272877f04d7694252181b640c5c00f9486dafb9701d)

#### Data passing with routing components.
- Let's say we want to pass the test IDs while routing. While generating the table, we will put a button as another td. 
- For the routing link, we add the id and that will be passed as the parameter.
```
<button type="button" [routerLink]="['/viewtest', singletest.id]" class="btn btn-primary">View Test Details.</button>
```
- In ```app-routing.module.ts```, the path will be modified like so. With the slash and the id parameter.
```
{path: 'viewtest/:id', component: ViewtestComponent}
```
- ### [Commenting out Interpolation in content.component.html, Check commit history here](https://github.com/Ashishamar99/QuizQues/commit/9d88c64414932f76874d59ffbb625a65281f5fa7#diff-7df3f7f25ed37d5ba153dfdcad71924294a8d6a16251b0422ebdc7b7d59e27be)

- ### [Commenting the Emitting event code in home component. Check Commit History Here.](https://github.com/Ashishamar99/QuizQues/commit/b1c494041f2c194bc5f7b21885ca7d4927d10197)
----------------------------------------------------------------------------------------------------------------------------------------
Day 12

- ### We will move onto angular materials.

  - ### Backup 1 - https://github.com/Ashishamar99/QuizQues/commit/54bbd906847c056bc9d5a5e0b3497ae457660eeb
  - ### Backup 2 - https://github.com/Ashishamar99/QuizQues/commit/10ab8b94db5f5e6b904b502efc7033e75e708c01

----------------------------------------------------------------------------------------------------------------------------------------

#### Angular Materials
- Use ```add @angular/material``` Command inside your parent angular folder to add angular materials. Link -> https://material.angular.io/guide/getting-started

- Here, we will be adding a slider. After angular material is installed, we will import it in the ```app.module.ts``` as shown below.
```
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  ...
  ...

  imports: [
    ...
    ...
    MatSliderModule,
    ...
    ...
  ],
  ...
  ...

```

- Now let's display the component as shown. We will be displaying this in ```app.component.html```.
```
<mat-slider min="1" max="100" step="1" value="1"></mat-slider>
```

#### Material Table

- We import material table the same way we did for material slider.
```
import { MatTableModule } from '@angular/material/table';
...
...
imports: [
  ...
  ...
  MatTableModule,
  ...
  ...
```
- We will have to use ```dataSource``` to interpolate values from the typescript file to the html file. It's similar to a JSON object where we call values using the 'dot' operator.
----------------------------------------------------------------------------------------------------------------------------------------
Day 13
-

----------------------------------------------------------------------------------------------------------------------------------------