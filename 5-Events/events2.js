const School = require("./school");

const school = new School();

school.on("bellRing", ({ period, text }) => {
    console.log(`${period} ${text}`);
});

school.startClass();
school.classEnd();