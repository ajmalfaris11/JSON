
// define loadData
function loadData(){
    // the fetch is using to bring data from another location through fetch
    // inside teh brackets we give the location where we are going to get datas
    // it might be from inside or outside
    
    fetch("./studentData.json")
    // fetch is a netword request
    // after fetching we get a response
    .then(response => response.json()) //only taking json file from response
    .then(data => { // and that response store to data (json file) 
        console.log(data);

        document.getElementById("newData").innerHTML = data.students[0].name;
    })
}