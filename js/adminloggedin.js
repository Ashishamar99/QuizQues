function BuildQuery()
{
    var selected_action = document.getElementById("actiondropdown");
    var strSelAct = "The Action Value is: " + selected_action.options[selected_action.selectedIndex].value + " and action text is: " + selected_action.options[selected_action.selectedIndex].text;

    var selected_user = document.getElementById("userdropdown");
    var strSelUsr = "The User Value is: " + selected_user.options[selected_user.selectedIndex].value + " and user text is: " + selected_user.options[selected_user.selectedIndex].text;
    
    var entered_id = document.getElementById("idtextbox").value;
    var stridqur = "ID Entered is: " + entered_id;
    if(selected_action.options[selected_action.selectedIndex].value == "create"){
        var qur = "Redirect to signup page of " + selected_user.options[selected_user.selectedIndex].value;
        document.getElementById("resultarea").innerHTML = qur;
    }

    else{
        var qur = strSelAct + "\n" + strSelUsr + "\n" + stridqur;
        document.getElementById("resultarea").innerHTML = qur;
    }
}