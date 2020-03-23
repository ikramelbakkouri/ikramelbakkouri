class Result {
    constructor(name, height, firstWeight, actualWeight) {
        this.name = name;
        this.height = height;
        this.firstWeight = firstWeight;
        this.actualWeight = actualWeight;
      }
}


let url = "https://spreadsheets.google.com/feeds/list/1bfJxi5SWZKQRYkgWZdyHMOsoOpvbca58A0O4DMYd_uM/od6/public/values?alt=json";
let results = [];

$.getJSON(url, function(data) {
    $.each(data.feed.entry, function(index, entry) {
        let name = entry['gsx$الإسم']['$t'];
        let height = entry['gsx$الطولبcm']['$t'];
        let firstWeight = entry['gsx$الوزنبkg']['$t'];
        let result = new Result(name, height, firstWeight);
        results.push(result);

        let markup = "<tr><th scope='row'>" + result.name + "</th><td>" + result.height + "</td><td>" + result.firstWeight + "</td><td></td><td></td></tr>";
        
        $("table tbody").append(markup);
    });
});