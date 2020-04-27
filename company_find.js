const client = require('mongodb').MongoClient;
const url = "mongodb+srv://asiyah:a:sIja2017@cluster0-d0m9a.mongodb.net/test?retryWrites=true&w=majority";

function find_company (str, mode) {
    client.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if(err) { console.log("Connection err: " + err); return; }
      
        var database  = db.db("Companies");
        var companies = database.collection('company');

        var query = {mode: str};
        
        companies.find(query).toArray(function(err, items) {
            if (err) {
                console.log("Error: " + err);
                return;
            } 
            else {
                for (i = 0; i < items.length; i++) {
                    if ((mode == "Company" && str == items[i].company) || 
                        (mode == "Ticker" && str == items[i].ticker)){
                        console.log(result);
                    }
                    return "Not found";
                }
            }     	  
        });
    });
}
