/**
 * Automatically Generated Transjakarta Map using RaphaelJS
 * Database is loaded from JSON flat files in ../data (loaded by index.html)
 * Created by Andhieka Putra, 6 Jun 2014
 **/

 // Function Declarations


// Main Document
var paper = new Raphael (0, 0, 1100, 600);

var koridor_satu = busStops.filter(function(bs) { return bs.code.substring(0,2) === "1-"; });

for (var i = 0; i < koridor_satu.length; i++) {
	koridor_satu[i].drawAt(100 + i * 25, 300);
}

koridor_satu.map(function(bs) { bs.drawEdges(); });

//demo click interaktif
koridor_satu.map(function(bs) { bs.innerCircle.click(function() { alert(bs.code + " " + bs.name); }); });