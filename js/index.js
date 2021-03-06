class Result {
    constructor(name, height, firstWeight, actualWeight) {
        this.name = name;
        this.height = height;
        this.firstWeight = firstWeight;
        this.actualWeight = actualWeight;

        let difference = parseInt(actualWeight) - parseInt(firstWeight);

        this.difference = Number.isInteger(difference) ? difference : undefined;
      }
}


let url1 = "https://spreadsheets.google.com/feeds/list/1bfJxi5SWZKQRYkgWZdyHMOsoOpvbca58A0O4DMYd_uM/od6/public/values?alt=json";
let url2 = "https://spreadsheets.google.com/feeds/list/1DDOCDHdb9__khZyobtM6cGOb7YqZ-qEENxw-VoOVSK8/1/public/values?alt=json";
let results = [];

$.getJSON(url1, function(data1) {
    $.getJSON(url2, function(data2) {
        $.each(data1.feed.entry, function(index, entry) {
            let name = entry['gsx$الإسم']['$t'];
            let height = entry['gsx$الطولبcm']['$t'];
            let firstWeight = entry['gsx$الوزنبkg']['$t'];
            let actualWeight = getActualWeight(name, data2);
            let result = new Result(name, height, firstWeight, actualWeight);
            results.push(result);
        });
    
        $.each(results, function(index, result) {
            let markup = "<tr><th scope='row'>" 
                            + result.name + 
                            "</th><td>" 
                            + result.height + 
                            "</td><td>" 
                            + result.firstWeight + 
                            "</td><td>" 
                            + (result.actualWeight ? result.actualWeight : '') + 
                            "</td><td>"
                            + (result.difference ? result.difference : '') + getIcon(result.difference) +
                            "</td></tr>";
            
            $("table tbody").append(markup);
        }); 
    });    
});

function getActualWeight(name, data) {
    let value;
    $.each(data.feed.entry, function(index, entry) {
        if (entry['gsx$الإسم']['$t'].trim().toLowerCase() === name.trim().toLowerCase()) {
            
            value = entry['gsx$الوزنبkg']['$t'];
            
            return false;
        }
    });

    return value;
}

function getIcon(difference) {
    if (difference > 0) {
        return "&nbsp;<img src='img/up.png' alt='Up'>";
    }
    else if(difference < 0) {
        return "&nbsp;<img src='img/down.png' alt='Down'>";
    }
    
    return "";
}