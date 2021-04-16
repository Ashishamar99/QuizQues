function changeInnerHtmlOfDiv(){

    let arrayMoments = [];
    var u = moment();
    console.log(u);

    let unformattedMoment = `Unformatted Moment In Print Stmt:: ${moment()}`;
    arrayMoments.push(unformattedMoment);

    let formattedMoment = `Formatted Moment:: ${moment().format()}`;
    arrayMoments.push(formattedMoment);

    let dayFormattedMoment = `Day From Moment:: ${moment().format('dddd')}`;
    arrayMoments.push(dayFormattedMoment);

    let completeDateFormattedMoment = `Complete Formatted Date [MMMM - Month, Do - Day with suffix, YYYY - Year]:: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
    arrayMoments.push(completeDateFormattedMoment);

    arrayMoments.forEach(MomentString => {
        let myMomentDiv = document.getElementById("divDateMoment");

        myMomentDiv.innerHTML += MomentString + '<hr />'; 
    });
}

function generateRelativeDates(){
    let arrayMoments = [];
    var u = moment();
    console.log(u);

    let fromNowMoment = `Using From Now:: ${moment("20111021", "YYYYMMDD").fromNow()}`;
    arrayMoments.push(fromNowMoment);

    let fromNowMoment2 = `Using From Now Again:: ${moment("20130620", "YYYYMMDD").fromNow()}`;
    arrayMoments.push(fromNowMoment2);

    let startOfDay = `Calculating Start of Day:: ${moment().startOf('day').fromNow()}`;
    arrayMoments.push(startOfDay);

    let endOfDay = `Calculating End of Day:: ${moment().endOf('day').fromNow()}`;
    arrayMoments.push(endOfDay);

    let startOfHour = `Calculating Start of an Hour:: ${moment().startOf('hour').fromNow()}`;
    arrayMoments.push(startOfHour);

    arrayMoments.forEach(MomentString => {
        let myMomentDiv = document.getElementById("divRelativeMoment");

        myMomentDiv.innerHTML += MomentString + '<hr />';
    });
}
