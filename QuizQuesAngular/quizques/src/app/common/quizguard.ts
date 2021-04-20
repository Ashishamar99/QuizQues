import {CanActivate} from '@angular/router';

export class QuizGuard implements CanActivate{
    canActivate(){
        if(localStorage.getItem('usertype') == 'admin'){
            return true;
        }
        else{
            alert("No Access for admin");
            return false;
        }
    }
}