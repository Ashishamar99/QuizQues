let demochain = () => {
    
    var stateRegion = [
        {State: 'MP', Region: 'Central'},
        {State: 'Assam', Region: 'Eastern'},
        {State: 'Gujarat', Region: 'West'},
        {State: 'Bihar', Region: 'Eastern'},
        {State: 'West Bengal', Region: 'Eastern'}
    ];

    var getRegionofState = function(state) {
        return _.chain(stateRegion).where({State: state}).pluck('Region').first().value();
    }

    var indianCities = [
        {City: 'Kolkata', State: 'West Bengal'},
        {City: 'Patna', State: 'Bihar'},
        {City: 'Indore', State: 'MP'},
        {City: 'Darjeeling', State: 'Assam'}
    ];

    var indianCitiesWithRegion = _.map(indianCities, function(nc){
        return {City: nc.City, State: nc.State, Region: getRegionofState(nc.State)};
    });

    alert("Check Console");
    console.log(indianCitiesWithRegion);
}

function demorange(){
    
    alert(`Range of 5,10 = ${_.range(5,10)}`);
    alert(`Range of 5,10 with step index of 2 = ${_.range(5,10,2)}`);
}

function demosort(){
    
    li = [6,5,4,3,7,1,2];

    alert(`Unsorted List:: ${li}`);
    alert(`Sorted with .reverse() = ${_.sortBy(li).reverse()}`);
}

function demofilter(){
    
    let fl = _.filter(_.range(parseInt(prompt("Enter first number of range")), parseInt(prompt("Enter 2nd number of range"))), function(n) { return (n % 3) === 0; });
    alert(`Multiples of 3 = ${fl}`)
}

function demomergeobj(){

    var mergedObject= _.object([ "Kolkata", "Patna", "Indore" ], [ "Darjeeling", "Ujjain" ]);
    console.log("Merged Object: ",mergedObject)
}

function demosetoperations(){
    //Union
    //console.log("Union Object:", _.union([2,4,3,6,1],[7,8,2,4]));
    //Intersection
    //console.log(_.intersection([2,4,3,6,1],[7,8,2,4]));
    // //
    //console.log(_.difference([2,4,3,6,1],[7,8,2,4]));
    // //
    //console.log(_.difference([2,4,3,6,1],7,8,2,4));

    
}