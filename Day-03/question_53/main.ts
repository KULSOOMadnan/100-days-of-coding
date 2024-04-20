// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python","java"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker","qt"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`
Language: ${languages[2]},
Framework: ${frameworks[2]}, 
Tool: ${tools[3]}`);