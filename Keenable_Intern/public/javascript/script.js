const express = require('express')
const fs = require('fs')
const path = require('path')
// const app = express();


// Dummy data for program sections
const programData = {
    overview: "Detailed content about the program overview",
    criteria: "Detailed content about the program criteria",
    roadmap: "Detailed content about the program roadmap",
    firstMonthTasks: "Detailed content about the tasks planned for the first month",
    documentation: "Detailed content about the documentation tasks in the roadmap",
    project: "Detailed content about the project planned in the roadmap"
};

// Event listeners for navigation
document.getElementById('homeLink').addEventListener('click', loadHomePage);
document.getElementById('programLink').addEventListener('click', loadProgramPage);
document.getElementById('aboutUsLink').addEventListener('click', loadAboutUsPage);
document.getElementById('contactUsLink').addEventListener('click', loadContactUsPage);
document.getElementById('applyNowLink').addEventListener('click', loadApplyNowPage);

// Event listener for location icon
document.getElementById('locationIcon').addEventListener('click', redirectToMap);

// Functions to load content dynamically
function loadHomePage() {
    document.getElementById('content').innerHTML = '<h2>Home Page Content</h2>';
    
}

function loadProgramPage() {
    const sidebar = '<h3>Sidebar</h3><ul><li>OVERVIEW</li><li>CRITERIA</li><li>ROADMAP</li><li>CAREER OPPORTUNITIES</li></ul>';
    document.getElementById('content').innerHTML = `<h2>Program Page Content</h2>${sidebar}`;
}

function loadAboutUsPage() {
    document.getElementById('content').innerHTML = '<h2>About Us Page Content</h2>';
}

function loadContactUsPage() {
    document.getElementById('content').innerHTML = '<h2>Contact Us Page Content</h2>';
}

function loadApplyNowPage() {
    document.getElementById('content').innerHTML = '<h2>Apply Now Page Content - Form Goes Here</h2>';
}

function redirectToMap() {
    // Dummy link, replace it with the actual link to the map
    window.location.href = 'https://maps.google.com';
}

app.listen(port, () => {
    // console.log(`Keen&Able Intern app listening on port ${port}`);
  });  
