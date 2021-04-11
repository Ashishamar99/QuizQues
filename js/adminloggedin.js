function updateinfosubmitted(){
    alert("Query method called from dynamic form.");
}

function generatedynamicform(selected_user_name)
{
    var dynamic_update_form = document.getElementById("dynamic_update_form");

    // Create a form synamically
    var form = document.createElement("form");

    // Create an input element for emailID
    var ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("name", "emailID");
    ID.setAttribute("placeholder", "Previous Value is placeholder");
    ID.style.width = "100%";

    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "User name fetched from JS " + selected_user_name);
    PWD.style.width = "100%";

    // Create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("onclick", "updateinfosubmitted()");

    // Append the email_ID input to the form
    form.append(ID); 
    
    // Append the password to the form
    form.append(PWD); 
    
    // Append the button to the form
    form.append(s); 

    dynamic_update_form
    .appendChild(form);
}

function BuildQuery()
{
    var selected_action = document.getElementById("actiondropdown");
    var strSelAct = "The Action Value is: " + selected_action.options[selected_action.selectedIndex].value + " and action text is: " + selected_action.options[selected_action.selectedIndex].text;

    var selected_user = document.getElementById("userdropdown");
    var strSelUsr = "The User Value is: " + selected_user.options[selected_user.selectedIndex].value + " and user text is: " + selected_user.options[selected_user.selectedIndex].text;
    
    var entered_id = document.getElementById("idtextbox").value;
    var stridqur = "ID Entered is: " + entered_id;

    if(selected_action.options[selected_action.selectedIndex].value == "create"){

        var selected_user = document.getElementById("userdropdown");
        var qur = "Redirect to signup page of " + selected_user.options[selected_user.selectedIndex].value;
        document.getElementById("resultarea").innerHTML = qur;
    }

    else if(selected_action.options[selected_action.selectedIndex].value == "update"){

        var selected_user = document.getElementById("userdropdown");
        
        if(document.getElementById("idtextbox").value == ""){
            alert("Please enter ID to make an update.");
        }

        else{
        var qur = "Make query for the whole db or table for that ID and generate Dynamic form with fields from db. Submitting the form makes an update query. Example form is given below."
        document.getElementById("resultarea").innerHTML = qur;

        generatedynamicform(selected_user.options[selected_user.selectedIndex].value);
        }
    }

    else if(selected_action.options[selected_action.selectedIndex].value == "delete"){

        var selected_user = document.getElementById("userdropdown");
        
        if(document.getElementById("idtextbox").value == ""){
            alert("Please enter ID to delete a row.");
        }

        else if(selected_user.value == "student"){
            alert("Sorry, student records cannot be deleted.")
        }

        else{
            var qur = strSelAct + "\n" + strSelUsr + "\n" + stridqur;
            document.getElementById("resultarea").innerHTML = qur;
        }
    }

    else{
        var qur = strSelAct + "\n" + strSelUsr + "\n" + stridqur;
        document.getElementById("resultarea").innerHTML = qur;
    }
}