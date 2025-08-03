 const products = [
      { name: "Apple iPhone 14", price: "$999", page: "iphone14.html" },
      { name: "Samsung Galaxy S22", price: "$799", page: "galaxyS22.html" },
      { name: "Google Pixel 7", price: "$699", page: "pixel7.html" },
      { name: "OnePlus 11", price: "$749", page: "oneplus11.html" },
      { name: "Sony Xperia 5", price: "$899", page: "xperia5.html" }
    ];

    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');
    const statusMessage = document.getElementById('statusMessage');

    function displayProducts(filteredProducts) {
      productList.innerHTML = '';

      if (filteredProducts.length === 0) {
        statusMessage.textContent = '❌ No matching products found.';
        statusMessage.className = 'status not-found';
        return;
      }

      statusMessage.textContent = `✅ ${filteredProducts.length} product(s) found`;
      statusMessage.className = 'status found';

      filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <a href="${product.page}">
            <strong>${product.name}</strong><br>
            Price: ${product.price}
          </a>`;
        productList.appendChild(div);
      });
    }

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();

      if (query === "") {
        statusMessage.textContent = "";
        productList.innerHTML = "";
        return;
      }

      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );

      displayProducts(filtered);
    });