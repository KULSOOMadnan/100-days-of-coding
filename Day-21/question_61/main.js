"use strict";
var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["motor"] = 0] = "motor";
    Vehicle[Vehicle["bicycle"] = 1] = "bicycle";
    Vehicle[Vehicle["car"] = 2] = "car";
    Vehicle[Vehicle["truck"] = 3] = "truck";
    Vehicle[Vehicle["dumper"] = 4] = "dumper";
    Vehicle[Vehicle["bike"] = 5] = "bike";
})(Vehicle || (Vehicle = {}));
// by default enums have 0 index 
console.log(Vehicle[5]);
console.log(Vehicle[0]);
