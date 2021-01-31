const fs = require('fs');



exports.getData = (req,res,next) => {
    let rawdata = fs.readFileSync('countries.json');
    const countries = JSON.parse(rawdata);
    res.status(200).json(countries);
};

let activities = []; 

exports.createActivity = (req,res,next) => {
    const text = req.body.text;
    const tags = req.body.tags;
    const nowDate = new Date().toString();
    const obj = {text: text, tags: tags, date: nowDate };
    activities = [...activities,obj];
    res.status(201).json({
        message: "Acticity added",
        // activity: { id: new Date().toISOString(), text: text, tags: tags}
    });
};

exports.acTivities = (req,res,next) => {
    res.status(200).json({
        activities : activities
    });
}