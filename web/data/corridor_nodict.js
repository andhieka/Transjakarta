var list_corridors_raw = [[1, "1", "C40011", "Red", 1], [2, "2", "09199D", "Blue", 1], [3, "3", "FBD073", "Yellow", 1], [4, "4", "5B2E65", "Purple", 1], [5, "5", "CB5C2D", "Brown", 1], [6, "6", "2BA64F", "Leaf Green", 1], [7, "7", "ED2860", "Magenta", 1], [8, "8", "DB2497", "Pink", 1], [9, "9", "439F9A", "Bluish Green", 1], [10, "10", "951823", "Dark Brown", 1], [11, "11", "3C5AA9", "Blue 11", 1], [12, "12", "69CA82", "Vermillion Green", 1], [13, "13", "BEBEBE", "Grey", 0]];

function Corridor(id, code, colorCode, colorName) {
	this.id = id;
	this.code = code;
	this.colorCode = colorCode;
	this.colorName = colorName;
}

function readJson() {
	var CORRIDOR_ID = 0;
	var CORRIDOR_CODE = 1;
	var COLOR_CODE = 2;
	var COLOR_NAME = 3;
	var IS_ACTIVE = 4; //not used

	function rowToCorridor(row) {
		var c = new Corridor(row[CORRIDOR_ID], row[CORRIDOR_CODE], row[COLOR_CODE], row[COLOR_NAME]);
		corridors[row[CORRIDOR_ID]] = c;
	}
	list_corridors_raw.map(rowToCorridor);
}

var corridors = [];
readJson();