#target illustrator
﻿var thisFile = new File($.fileName);  var basePath = thisFile.path;  #include "shim.js";#include "jszip.js";#include "xlsx.flow.js";var filename = "/sheetjs.xlsx";var infile = File(basePath+filename);infile.open("r");infile.encoding = "binary";var data = infile.read();var workbook = XLSX.read(data, {type:"binary"});var first_sheet_name = workbook.SheetNames[0];var first_worksheet = workbook.Sheets[first_sheet_name];var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});alert(data);
