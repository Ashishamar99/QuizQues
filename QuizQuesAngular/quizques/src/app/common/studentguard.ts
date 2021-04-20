import {CanActivate} from '@angular/router';

export class StudentGuard implements CanActivate{
    canActivate(){
        if((localStorage.getItem('usertype') == 'student') || (localStorage.getItem('usertype') == 'admin')){
            return true;
        }
        else{
            alert("No Access for student");
            return false;
        }
    }
}