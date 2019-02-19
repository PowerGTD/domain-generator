var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

let title = "";

for(var x=0; x<pronoun.length; x++) {
    for(var y=0; y<adj.length; y++) {
        for (var z=0; z<noun.length; z++) {
            title = pronoun[x] + adj[y] + noun[z];
            document.querySelector("#domain").innerHTML += "www." + title + ".com <br>";
        }
    }
}


