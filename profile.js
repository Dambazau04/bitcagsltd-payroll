document.addEventListener('DOMContentLoaded', function() {
    // Mock staff data
    const staffData = {
        name: 'John Doe',
        staffNo: '12345',
        reports: [
            { date: '2024-08-14', report: 'Completed tasks' },
            { date: '2024-08-13', report: 'Met with client' }
        ]
    };

    document.getElementById('staff-name').value = staffData.name;
    document.getElementById('staff-no').value = staffData.staffNo;

    const reportHistory = document.getElementById('report-history');
    staffData.reports.forEach(report => {
        const listItem = document.createElement('li');
        listItem.textContent = `${report.date}: ${report.report}`;
        reportHistory.appendChild(listItem);
    });
});

function recordDailyReport() {
    const report = prompt('Enter your daily report:');
    if (report) {
        const reportHistory = document.getElementById('report-history');
        const listItem = document.createElement('li');
        listItem.textContent = `${new Date().toISOString().split('T')[0]}: ${report}`;
        reportHistory.appendChild(listItem);
    }
}
