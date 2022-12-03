const fs = require('fs');
var cors = require('cors')
const path = require('path');
const { type } = require("os");
const express = require("express");
const app = express();
let data_file = require('./data-copy.json')
let course_file = require('./courses.json')
let constants = require('./constants.json')
const { listenerCount } = require("process");
const excelToJson = require('convert-excel-to-json');
var fileManager = require('express-file-manager');
const multer = require('multer');
const { isImportEqualsDeclaration } = require('typescript');
const PATH = './spreadsheets';


// const axios = require('axios');
// const FormData = require('form-data');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')))
app.use('/filemanager/', fileManager('./spreadsheets'));
const dataParticulars = ["D", "C", "B", "A", "S", "Average", "Total"];
const dataSections = ["A", "B", "C", "D", "E"];
app.set('json spaces', 2)
const dataExams = ["Minor 1", "Minor 2", "Activity"];

const getCourseName = function (code, course_file) {
    for (const { i, j } of Objects.entries(course_file)) {
        for (const { k, l } of Objects.entries(course_file[i])) {
            console.log(k);
        }
    }
}
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage }).single('file');

function uploadFiles(req, res) {
    req.ContentType = "multipart/form-data";
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}

app.post('/upload_file', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.json(req.file);
    });
});

app.get('/filemanager/raw%5C:fileName', function (req, res) {
    const { fileName } = req.params;
    const file = `./spreadsheets/${fileName}`;
    res.download(file);
});

app.get("/filemanager/browse%5C", (req, res) => {
    console.log("On folder page.");
    res.redirect(`/`);
})

app.get("/filemanager/browse%5C:addr", (req, res) => {
    console.log("On folder page.");
    if (!req.params || !req.params.addr || req.params.addr === " ") {
        res.redirect(`/filemanager`);
        return;
    }
    else {
        res.redirect(`/filemanager/browse/${req.params.addr}`);
    }
})

app.post("/upload_sheets", (req, res) => {
    let this_year = "2022-23";
    const { academic_year, sem_type, semester, course, exam, section, filename } = req.body;
    console.log("Result => ", req.body);
    let new_data = data_file;
    let read_result = {};
    let index = 0;

    if (exam == 'm1') {
        index = 0;
    }
    else if (exam == 'm2') {
        index = 1;
    }
    else {
        index = 2;
    }
    let f = filename.split('\\')
    let file_name = f[f.length - 1]
    console.log(file_name)
    try {
        result = excelToJson({
            sourceFile: "./spreadsheets/" + file_name
        });
    }
    catch (err) {
        console.log("File not found!");
        // res.render("coordinator")
    }
    let result_keys = Object.keys(result);
    // console.log(result);
    //Average
    read_result.Average = (parseFloat(result[result_keys[0]][0]["C"]).toFixed(2)).toString();
    //S grade
    read_result.S_grade = result[result_keys[0]][2]["C"];
    //A grade
    read_result.A_grade = result[result_keys[0]][3]["C"];
    //B grade
    read_result.B_grade = result[result_keys[0]][4]["C"];
    //C grade
    read_result.C_grade = result[result_keys[0]][5]["C"];
    //D grade
    read_result.D_grade = result[result_keys[0]][6]["C"];
    //Total
    read_result.total = result[result_keys[0]][7]["C"];
    console.log(read_result);
    new_data[academic_year][semester][course][index][section] = {
        "Average": read_result.Average
        , "S": read_result.S_grade, "A": read_result.A_grade, "B": read_result.B_grade, "C": read_result.C_grade, "D": read_result.D_grade, "Total": read_result.total
    };
    fs.writeFile("data-copy.json", JSON.stringify(new_data), () => {
        console.log("Done writing!");
    });
    res.json({ sem_type, academic_year, semester, course, exam, section, filename, read_result });
})


app.post("/upload_multiple_sheets", (req, res) => {
    let this_year = "2022-23";
    const { academic_year, sem_type, semester, course, exam, filename } = req.body;
    console.log("Result => ", req.body);
    let new_data = data_file;
    let read_result_array = [];
    var read_result = {};
    let index = 0;
    read_result_array = [];
    if (exam == 'm1') {
        index = 0;
    }
    else if (exam == 'm2') {
        index = 1;
    }
    else {
        index = 2;
    }
    let f = filename.split('\\')
    let file_name = f[f.length - 1]
    console.log(file_name)
    try {
        result = excelToJson({
            sourceFile: "./spreadsheets/" + file_name
        });
    }
    catch (err) {
        console.log("File not found!");
        // res.render("coordinator")
    }
    let sheets_all = []
    let sections_all = ['A', 'B', 'C', 'D', 'E'];
    for (const [i, j] of Object.entries(result)) {
        sheets_all.push(i);
    }
    if (sheets_all.length != 5) {
        console.log("ERROR! only reading the first 5 pages");
    }
    for (let k = 0; k < sheets_all.length; k++) {
        read_result.Average = (parseFloat(result[sheets_all[k]][0]["C"]).toFixed(2)).toString();
        //S grade
        read_result.S_grade = result[sheets_all[k]][2]["C"];
        //A grade
        read_result.A_grade = result[sheets_all[k]][3]["C"];
        //B grade
        read_result.B_grade = result[sheets_all[k]][4]["C"];
        //C grade
        read_result.C_grade = result[sheets_all[k]][5]["C"];
        //D grade
        read_result.D_grade = result[sheets_all[k]][6]["C"];
        //Total
        read_result.total = result[sheets_all[k]][7]["C"];
        console.log(read_result);
        let clone = { ...read_result };
        read_result_array.push(clone);
        new_data[academic_year][semester][course][index][sections_all[k]] = {
            "Average": read_result.Average
            , "S": read_result.S_grade, "A": read_result.A_grade, "B": read_result.B_grade, "C": read_result.C_grade, "D": read_result.D_grade, "Total": read_result.total
        };

    }
    console.log(read_result_array);
    fs.writeFile("data-copy.json", JSON.stringify(new_data), () => {
        console.log("Done writing!");
    });
    // console.log(result);
    //Average
    // console.log(result);
    console.log("On multiple upload page.");
    res.json({ sem_type, academic_year, semester, course, exam, filename, read_result_array, sections_all });
})

app.get("/dugc_chairman", (req, res) => {
    console.log("On DUGC chairman page.");
    res.json({ data_file });
})

app.get("/create_course", (req, res) => {
    let { semester, course_code, course_name } = req.query;
    let new_data = data_file;
    let new_course_data = course_file;
    let course_code_new = course_code.toUpperCase();
    console.log(course_code);
    for (const [i, j] of Object.entries(new_data)) {
        try {
            j[semester][course_code_new] = [{}, {}, {}]
        }
        catch (err) {
            j[semester] = {};
            j[semester][course_code_new] = [{}, {}, {}];
        }
    }
    if (new_course_data[semester]) {
        new_course_data[semester][course_code] = {
            "Name": course_name,
            "Minor 1": "Yes",
            "Minor 2": "Yes",
            "Activity": "Yes"
        }
    }
    else {
        new_course_data[semester] = {
            course_code: {
                "Name": course_name,
                "Minor 1": "Yes",
                "Minor 2": "Yes",
                "Activity": "Yes"
            }
        }
    }
    fs.writeFile("data-copy.json", JSON.stringify(new_data), () => {
        console.log("Done writing!");
    });
    fs.writeFile("courses.json", JSON.stringify(new_course_data), () => {
        console.log("Done writing!");
    });
    res.json({ course_code, course_name, semester })
})

app.get("/coordinator", (req, res) => {
    console.log("On Coordinator page.");
    res.json({ data_file, course_file });
})
let dataCourses = [];
let dataCoursesName = [];

const getScore = function (courseInput, examInput, sectionInput, particularInput, given_year, semester) {
    const new_data = data_file;
    // console.log("Year =", given_year);
    if (new_data == {}) {
        return "";
    }
    try {
        let c = dataCourses[courseInput];
        let s = dataSections[sectionInput];
        let i = dataParticulars[particularInput];
        let answer = new_data[given_year][semester][c][examInput][s][i];
        return answer;
    }
    catch (err) {
        return "";
    }
}

const getTotalScore = function (examInput, sectionInput, particularInput, given_year, semester) {
    let score = 0;
    const new_data = data_file;
    if (new_data == {}) {
        return "";
    }
    let c, s, i, l, answer;
    for (let k = 0; k < dataCourses.length; k++) {
        s = dataSections[sectionInput];
        i = dataParticulars[particularInput];
        l = dataCourses[k]
        try {
            answer = new_data[given_year][semester][l][examInput][s][i];
        }
        catch (err) {
            answer = 0;
        }
        score += answer;
    }
    return score;
}
app.get("/delete_sheet", (req, res) => {
    let this_year = "2022-23";
    let exam_index = 0;
    let { academic_year, semester, course, exam, section } = req.query;

    let new_data = data_file;
    if (exam == 'm1') {
        exam_index = 0;
    }
    else if (exam == 'm2') {
        exam_index = 1;
    }
    else {
        exam_index = 2;
    }

    delete new_data[this_year][semester][course][exam_index][section]

    fs.writeFile("data-copy.json", JSON.stringify(new_data), () => {
        console.log("Done writing!");
        res.json({ new_data });
    });

})
app.get("/dugc", (req, res) => {
    let this_year = "2022-23";
    let exam_index = 0;
    let { sem_type, semester, exam } = req.query;
    let new_data = data_file;
    dataCourses = [];
    console.log(dataCourses);
    console.log("On DUGC page.");
    for (const [i, j] of Object.entries(new_data[this_year])) {
        for (const [k, l] of Object.entries(j)) {
            if (semester == i) {
                dataCourses.push(k);
            }
        }
    }
    if (exam == "m1") {
        exam_index = 0;

    }
    else if (exam == "m2") {
        exam_index = 1;

    }
    else if (exam == "Activity") {
        exam_index = 2;
    }
    console.log("22ECSC301", course_file);
    console.log("Index, ", exam_index);
    res.json({ new_data, dataParticulars, dataCourses, dataSections, dataExams, this_year, semester, exam_index, course_file });
})

app.get("/analysis", (req, res) => {
    let new_data = data_file;
    console.log("On DUGC page.");
    res.json({ new_data, dataParticulars, dataCourses, dataSections, dataExams, course_file, getScore });
})

app.get("/", (req, res) => {
    console.log("On home-page.");
    res.render("home");
})

app.get("/single_sheet", (req, res) => {
    let new_data = data_file;
    console.log("On single sheet page.");
    res.json({ course_file });
})
app.get("/get_courses", (req, res) => {
    let new_data = data_file;
    console.log("On get course page");
    console.log(course_file);
    res.json({ course_file });
})

app.get("/multiple_sheet", (req, res) => {
    let new_data = data_file;
    console.log("On multiple sheet page.");
    res.json({ course_file });
})

app.get("*", (req, res) => {
    res.send("You are on an unknown page.");
})

app.listen(constants.BACKEND_PORT, () => {
    console.log("Listening on port ", constants.BACKEND_PORT);
})