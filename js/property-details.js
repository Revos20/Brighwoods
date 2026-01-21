document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons that open the modal
    const buttons = document.querySelectorAll('.open-detail');
    const modal = new bootstrap.Modal(document.getElementById('propertyModal'));

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Get data from button attributes
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            const img = this.getAttribute('data-img');
            const map = this.getAttribute('data-map');

            // 2. Populate the Modal
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalPrice').innerText = price;
            document.getElementById('modalImg').src = img;
            document.getElementById('modalMap').src = map;

            // 3. Open the Modal
            modal.show();
        });
    });
});
