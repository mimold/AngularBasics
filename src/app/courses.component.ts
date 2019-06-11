import { CoursesService } from './courses.service';
import { Component}  from '@angular/core'

@Component({
    selector: 'courses' ,
    template:`
        <!--<h2>{{ title }}</h2>
        <img [src]="imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>-->
        <!--<button class="btn btn-primary" [class.active]="isActive">Save</button>-->
        <!--<button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>-->
        <!--<div (click)="onDivClick()">
            <button (click)="onSave($event)">Save</button>
        </div>-->
        <!--<input (keyup.enter)="onKeyUp($event)" />-->
        <!--<input [value]="email" (keyup.enter)="onKeyUp()" />-->
        <!--<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />-->
        <!--<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />-->
        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.students | number}} <br/>
        {{ course.rating | number:'2.1-1'}} <br/>
        {{ course.price | currency: 'AUD':false:'3.2-3'}} <br/>
        {{ course.releaseDate | date:'mediumDate' }} 
        `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    colspan=2;
    isActive = true;
    email = "mimold@yahoo.commm";

    imageUrl = "http://lorempixel.com/400/200";

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.9567,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked!", $event);
    }

    onDivClick(){
        console.log("Div was clicked!");
    }

    onKeyUp(){
        //if($event.keyCode == 13) 
        //console.log("Enter was pressed");
        //console.log($event.target.value);
        //console.log(email);
        console.log(this.email);
    }
}