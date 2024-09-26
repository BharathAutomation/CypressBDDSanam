const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/reports',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Orange HRM Cypress Cucumber Framework',
        data: [
            {label: 'Project', value: 'Orange HRM project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Sep 16th 2017, 09:00 AM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 06:00 PM EST'}
        ]
    }
});