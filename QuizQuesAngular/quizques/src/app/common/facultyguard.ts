import {CanActivate} from '@angular/router';

export class FacultyGuard implements CanActivate{
    canActivate(){
        if((localStorage.getItem('usertype') == 'faculty') || (localStorage.getItem('usertype') == 'admin')){
            return true;
        }
        else{
            alert("No Access for faculty");
            return false;
        }
    }
}