import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
    })
    export class BannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    getSelectedLogin(uname, passwd, loginval) {

    var selectedUser = loginval;

    var loginFor = selectedUser.options[selectedUser.selectedIndex].value;

    if(loginFor == "student"){

        console.log(uname.value, passwd.value);
        if(uname.value == 'student' && passwd.value == '1234'){

            alert(`Make query and redirect to ${loginFor} page.`);
            localStorage.setItem('usertype', 'student');

        }

        else{
            alert(`Login For ${loginFor} Failed !`);
        }
    }
    else if(loginFor == "faculty"){

        console.log(uname.value, passwd.value);
        if(uname.value == 'faculty' && passwd.value == '1234'){

            alert(`Make query and redirect to ${loginFor} page.`);
            localStorage.setItem('usertype', 'faculty');

        }

        else{
            alert(`Login For ${loginFor} Failed !`);
        }
    }
    else if(loginFor == "admin"){

        console.log(uname.value, passwd.value);
        if(uname.value == 'admin' && passwd.value == '1234'){

            alert(`Make query and redirect to ${loginFor} page.`);
            localStorage.setItem('usertype', 'admin');

        }

        else{
            alert(`Login For ${loginFor} Failed !`);
        }
        
    }
    else{
        alert("Invalid, will never fall here.")
    }
}

}
