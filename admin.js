function editStaffInfo() {
    alert('Aliyu is working on it.');
}

function addRemoveStaff() {
    alert('Add/Remove staff functionality is not implemented yet.');
}

function printDailyReport() {
    const reportHistory = document.querySelectorAll('#report-history li');
    if (reportHistory.length > 0) {
        let reportContent = '<html><head><title>Daily Report</title></head><body>';
        reportHistory.forEach(item => {
            reportContent += `<p>${item.textContent}</p>`;
        });
        reportContent += '</body></html>';

        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(reportContent);
        printWindow.document.close();
        printWindow.print();
    } else {
        alert('.');
    }
}
