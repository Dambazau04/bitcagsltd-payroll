// script.js

function calculateOrder() {
    const serviceItems = document.querySelectorAll('.service-item');
    let total = 0;
    const receipt = document.getElementById('receipt');
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    
    receipt.innerHTML = `<h1>Bitcags LTD</h1><p>Date: ${dateString}</p><p>Time: ${timeString}</p>`;
    receipt.innerHTML += `<p>Staff on Duty: Aliyu Bashir Lawan </p>`;
    receipt.innerHTML += `<hr>`;

    serviceItems.forEach(item => {
        const name = item.getAttribute('data-name').replace(/-/g, ' ').toUpperCase();
        const price = parseFloat(item.getAttribute('data-price'));
        const quantityInput = document.querySelector(`input[name="${item.getAttribute('data-name')}"]`);
        const quantity = parseInt(quantityInput.value) || 0;

        if (quantity > 0) {
            const itemTotal = price * quantity;
            total += itemTotal;
            receipt.innerHTML += `<p>${name}: ₦${itemTotal.toFixed(2)}</p>`;
        }
    });

    receipt.innerHTML += `<hr><p><strong>Total: ₦${total.toFixed(2)}</strong></p>`;
}

function printReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Receipt</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; margin: 20px; } h1 { text-align: center; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>Bitcags LTD</h1>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('<p>Thank you for your business! @Bitcags Ltd</p>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function addService() {
    const name = document.getElementById('service-name').value.toLowerCase().replace(/\s+/g, '-');
    const price = parseFloat(document.getElementById('service-price').value).toFixed(2);
    const image = document.getElementById('service-image').value;
    
    const services = document.getElementById('services');
    const newServiceHTML = `
        <div class="service-item" data-name="${name}" data-price="${price}">
            <img src="${image}" alt="${name}">
            <div class="item-details">
                <h3>${name.replace(/-/g, ' ').toUpperCase()} - ₦${price}</h3>
                <input type="number" name="${name}" min="0" placeholder="Quantity">
            </div>
        </div>
    `;
    services.insertAdjacentHTML('beforeend', newServiceHTML);

    document.getElementById('add-service-form').reset();
}

function addStaff() {
    const name = document.getElementById('staff-name').value;
    const number = document.getElementById('staff-no').value;

    // This function can be extended to actually manage staff records
    alert(`Staff Added: ${name} (No: ${number})`); // Placeholder alert
}
