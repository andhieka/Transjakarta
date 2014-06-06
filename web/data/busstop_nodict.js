var list_busstop_raw = [[1, "1-1", "Blok M"], [2, "1-2", "Masjid Agung"], [3, "1-3", "Bundaran Senayan"], [4, "1-4", "Gelora Bung Karno"], [5, "1-5", "Polda Metro Jaya"], [6, "1-6", "Bendungan Hilir"], [7, "1-7", "Karet"], [8, "1-8", "Setiabudi"], [9, "1-9", "Dukuh Atas 1"], [10, "1-10", "Tosari ICBC"], [11, "1-11", "Bundaran HI"], [12, "1-12", "Sarinah"], [13, "1-13", "Bank Indonesia"], [14, "1-14", "Monas"], [15, "1-15", "Harmoni"], [16, "1-16", "Sawah Besar"], [17, "1-17", "Mangga Besar"], [18, "1-18", "Olimo"], [19, "1-19", "Glodok"], [20, "1-20", "Kota"], [21, "2-1", "Pulogadung"], [22, "2-2", "Bermis"], [23, "2-3", "Pulo Mas"], [24, "2-4", "ASMI"], [25, "2-5", "Pedongkelan"], [26, "2-6", "Cempaka Timur"], [27, "2-7", "RS. Islam"], [28, "2-8", "Cempaka Tengah"], [29, "2-9", "Ps. Cempaka Putih"], [30, "2-10", "Rawa Selatan"], [31, "2-11", "Galur"], [32, "2-12", "Senen"], [33, "2-13", "Atrium"], [34, "2-14", "RSPAD"], [35, "2-15", "Deplu"], [36, "2-16", "Gambir 1"], [37, "2-17", "Istiqlal"], [38, "2-18", "Juanda"], [39, "2-19", "Pecenongan"], [40, "2-20", "Harmoni"], [41, "2-21", "Monas"], [42, "2-22", "Balaikota"], [43, "2-23", "Gambir 2"], [44, "2-24", "Kwitang"], [84, "3-1", "Kalideres"], [85, "3-2", "Pesakih"], [86, "3-3", "Sumur Bor"], [87, "3-4", "Rawa Buaya"], [88, "3-5", "Jembatan Baru"], [89, "3-6", "Dispenda Samsat Barat"], [90, "3-7", "Jembatan Gantung"], [91, "3-8", "Taman Kota"], [92, "3-9", "Indosiar"], [93, "3-10", "Jelambar"], [94, "3-11", "Grogol 1"], [95, "3-12", "RS. Sumber Waras"], [96, "3-13", "Harmoni"], [97, "3-14", "Pecenongan"], [98, "3-15", "Juanda"], [99, "3-16", "Pasar Baru"], [100, "4-1", "Pulogadung"], [101, "4-2", "Ps. Pulogadung"], [102, "4-3", "TU Gas"], [103, "4-4", "Layur"], [104, "4-5", "Pemuda Rawamangung"], [105, "4-6", "Velodrome"], [106, "4-7", "Sunan Giri"], [107, "4-8", "UNJ"], [108, "4-9", "Pramuka BPKP"], [109, "4-10", "Pramuka"], [110, "4-11", "Utan Kayu"], [111, "4-12", "Pasar Genjing"], [112, "4-13", "Matraman 2"], [113, "4-14", "Manggarai"], [114, "4-15", "Pasar Rumput"], [115, "4-16", "Halimun"], [116, "4-17", "Dukuh Atas 1"], [117, "5-1", "Ancol"], [118, "5-2", "Pademangan"], [119, "5-3", "Gunung Sahari Mangga Dua"], [120, "5-4", "Jembatan Merah"], [121, "5-5", "Ps. Baru Timur"], [122, "5-6", "Budi Utomo"], [123, "5-7", "Senen Sentral"], [124, "5-8", "Pal Putih"], [125, "5-9", "Kramat Sentiong NU"], [126, "5-10", "Salemba UI"], [127, "5-11", "Salemba Carolus"], [128, "5-12", "Matraman 1"], [129, "5-13", "Tegalan"], [130, "5-14", "Slamet Riyadi"], [131, "5-15", "Kebon Pala"], [132, "5-16", "Pasar Jatinegara"], [133, "5-17", "Jatinegara"], [173, "6-1", "Ragunan"], [174, "6-2", "Departemen Pertanian"], [175, "6-3", "SMK 57"], [176, "6-4", "Jatipadang"], [177, "6-5", "Pejaten"], [178, "6-6", "Buncit Indah"], [179, "6-7", "Warung Jati"], [180, "6-8", "Imigrasi"], [181, "6-9", "Duren Tiga"], [182, "6-10", "Mampang Prapatan"], [183, "6-11", "Kuningan Timur"], [184, "6-12", "Patra Kuningan"], [185, "6-13", "Departemen Kesehatan"], [186, "6-14", "GOR Sumantri"], [187, "6-15", "Karet Kuningan"], [188, "6-16", "Kuningan Madya"], [189, "6-17", "Setiabudi Utara AINI"], [190, "6-18", "Latuharhari"], [191, "6-19", "Halimun"], [192, "6-20", "Dukuh Atas 2"], [207, "7-1", "Kampung Rambutan"], [208, "7-2", "Tanah Merdeka"], [209, "7-3", "Flyover Raya Bogor"], [210, "7-4", "RS. Harapan Bunda"], [211, "7-5", "Ps. Induk Kramat Jati"], [212, "7-6", "Ps. Kramat Jati"], [213, "7-7", "PGC 1"], [214, "7-8", "BKN"], [215, "7-9", "Cawang UKI"], [216, "7-10", "BNN"], [217, "7-11", "Cawang Otista"], [218, "7-12", "Gelanggang Remaja"], [219, "7-13", "Bidara Cina"], [220, "7-14", "Kampung Melayu"], [243, "8-1", "Lebak Bulus"], [244, "8-2", "Pondok Pinang"], [245, "8-3", "Pondok Indah 1"], [246, "8-4", "Pondok Indah 2"], [247, "8-5", "Tanah Kusir Kodim"], [248, "8-6", "Kebayoran Lama Bungur"], [249, "8-7", "Ps. Kebayoran Lama"], [250, "8-8", "Simprug"], [251, "8-9", "Permata Hijau"], [252, "8-10", "Permata Hijau RS. Medika"], [253, "8-11", "Pos Pengumben"], [254, "8-12", "Kelapa Dua Sasak"], [255, "8-13", "Kebon Jeruk"], [256, "8-14", "Duri Kepa"], [257, "8-15", "Kedoya Assidiqiyah"], [258, "8-16", "Kedoya Green Garden"], [259, "8-17", "Grogol 2"], [260, "8-18", "S. Parman Podomoro City"], [261, "8-19", "Tomang Mandala"], [262, "8-20", "RS. Tarakan"], [263, "8-21", "Petojo"], [264, "8-22", "Harmoni"], [291, "9-1", "Pinang Ranti"], [292, "9-2", "Garuda Taman Mini"], [293, "9-3", "Cawang Uki"], [294, "9-4", "BNN"], [295, "9-5", "Cawang Ciliwung"], [296, "9-6", "Cikoko Stasiun Cawang"], [297, "9-7", "Tebet BKPM"], [298, "9-8", "Pancoran Tugu"], [299, "9-9", "Pancoran Barat"], [300, "9-10", "Tegal Parang"], [301, "9-11", "Kuningan Barat"], [302, "9-12", "Gatot Subroto Jamsostek"], [303, "9-13", "Gatot Subroto LIPI"], [304, "9-14", "Semanggi"], [305, "9-15", "Senayan JCC"], [306, "9-16", "Slipi Petamburan"], [307, "9-17", "Slipi Kemanggisan"], [308, "9-18", "RS. Harapan Kita"], [309, "9-19", "S.Parman Podomoro City"], [310, "9-20", "Grogol 2"], [311, "9-21", "Latumeten Stasiun Grogol"], [312, "9-22", "Jembatan Besi"], [313, "9-23", "Jembatan Dua"], [314, "9-24", "Jembatan Tiga"], [315, "9-25", "Penjaringan"], [316, "9-26", "Pluit"], [317, "10-1", "Tanjung Priok"], [318, "10-2", "Enggano"], [319, "10-3", "Permai Koja"], [320, "10-4", "Walikota Jakarta Utara"], [321, "10-5", "Plumpang Pertamina"], [322, "10-6", "Sunter Kelapa Gading"], [323, "10-7", "Yos Sudarso Kodamar"], [324, "10-8", "Cempaka Mas 2"], [325, "10-9", "Cempaka Putih"], [326, "10-10", "Pulomas Bypass"], [327, "10-11", "Kayu Putih Rawasari"], [328, "10-12", "Pemuda Pramuka"], [329, "10-13", "Utan Kayu Rawamangun"], [330, "10-14", "Achmad Yani Bea Cukai"], [331, "10-15", "ST. Jatinegara"], [332, "10-16", "Pedati Prumpung"], [333, "10-17", "Cipinang Kebon Nanas"], [334, "10-18", "Penas Kalimalang"], [335, "10-19", "Cawang Sutoyo"], [336, "10-20", "Cawang UKI"], [337, "10-21", "BKN"], [338, "10-22", "PGC 2"], [339, "11-1", "Pulogebang"], [340, "11-2", "Walikota Jakarta Timur"], [341, "11-3", "Penggilingan"], [342, "11-4", "Perumnas Klender"], [343, "11-5", "Flyover Radin Inten"], [344, "11-6", "Buaran"], [345, "11-7", "Kampung Sumur"], [346, "11-8", "Flyover Klender"], [347, "11-9", "Stasiun Klender"], [348, "11-10", "Cipinang"], [349, "11-11", "Imigrasi Jakarta Timur"], [350, "11-12", "Ps. Enjo"], [351, "11-13", "Flyover Jatinegara"], [352, "11-14", "ST. Jatinegara 2"], [353, "11-15", "Jatinegara RS. Premier"], [354, "11-16", "Kampung Melayu"], [355, "12-1", "Pluit"], [356, "12-2", "Landmark Auto Plaza"], [357, "12-3", "Pakin"], [358, "12-4", "Gedong Panjang"], [359, "12-5", "Museum Fatahillah"], [360, "12-6", "Kota"], [361, "12-7", "Pangeran Jayakarta"], [362, "12-8", "ITC Mangga Dua"], [363, "12-9", "Gunung Sahari Mangga Dua"], [364, "12-10", "Jembatan Merah"], [365, "12-11", "Kemayoran Landas Pacu Timur"], [366, "12-12", "Danau Agung"], [367, "12-13", "SMP 140"], [368, "12-14", "Sunter Karya"], [369, "12-15", "Sunter Boulevard Barat"], [370, "12-16", "Sunter Kelapa Gading"], [371, "12-17", "Plumpang Pertamina"], [372, "12-18", "Walikota Jakarta Utara"], [373, "12-19", "Permai Koja"], [374, "12-20", "Enggano"], [375, "12-21", "Tanjung Priok"], [376, "5-18", "Kampung Melayu"], [377, "12-22", "Kali Besar Barat"], [378, "12-23", "Bandengan Selatan"], [379, "12-24", "Penjaringan"]]
var OUTER_CIRCLE_RADIUS = 8;
var INNER_CIRCLE_RADIUS = 5;

function BusStop(id, code, name) {
	this.id = id;
	this.code = code;
	this.name = name;
	this.edges = [];
}
BusStop.prototype.connect = function(edge) {
	if (edge instanceof Edge) {
		this.edges.push(edge);		
	} else {
		Console.log("BusStop::connect -- function connect expects arg of type Edge!");
	}
};
BusStop.prototype.drawAt = function(x, y) {
	this.outerCircle = paper.circle(x, y, OUTER_CIRCLE_RADIUS);
	this.innerCircle = paper.circle(x, y, INNER_CIRCLE_RADIUS);
	this.innerCircle.attr({fill: "red"});
	this.outerCircle.attr({fill: "black"});
	this.innerCircle.click(function() { console.log(this.tag.code); });
	this.innerCircle.tag = this;
	this.x = x;
	this.y = y;
};
BusStop.prototype.drawEdges = function() {
	this.edges.map(function(edge) { edge.draw(); });
};
BusStop.prototype.printInfo = function() {
	console.log(this.code);
}

function readJson() {
	var BUSSTOP_ID = 0;
	var BUSSTOP_CODE = 1;
	var BUSSTOP_NAME = 2;
	function jsonToBusStop(row) {
		var bs = new BusStop(row[BUSSTOP_ID], row[BUSSTOP_CODE], row[BUSSTOP_NAME]);
		busStops[row[BUSSTOP_ID]] = bs;
	}
	list_busstop_raw.map(jsonToBusStop);
}

var busStops = [];
readJson();