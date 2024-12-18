// Sample Product Data
const products = [
    { id: 1, img: "/images/lg-a 3 (3).png", alt: "purple", color: "#816BFF", colorName: "purple", name: "Classy Modern Smart watch" },
    { id: 3, img: "/images/lg-a 3 (1).png", alt: "blue", color: "#4B97D3", colorName: "blue", name: "Classy Modern Smart watch" },
    { id: 4, img: "/images/lg-a 3 (2).png", alt: "cyan", color: "#1FCEC9", colorName: "cyan", name: "Classy Modern Smart watch" },
    { id: 2, img: "/images/lg-a 3.png", alt: "black", color: "#3B4747", colorName: "black", name: "Classy Modern Smart watch" },
];

document.addEventListener("DOMContentLoaded", () => {
    let selectedProduct = products[0];
    let cartData = [];
    let selectedSize = { size: "S", price: 69 };
    let quantity = 1;

    const productImage = document.getElementById("productImage");
    const colorSelector = document.getElementById("colorSelector");
    const sizeSelector = document.getElementById("sizeSelector");
    const countElement = document.getElementById("count");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");
    const addToCartButton = document.getElementById("addToCart");
    const cartModal = document.getElementById("cartModal");
    const cartTable = document.getElementById("cartTable");
    const totalQuantity = document.getElementById("totalQuantity");
    const totalPrice = document.getElementById("totalPrice");
    const checkout = document.getElementById("checkout");

    // Render Product Colors
    products.forEach((product) => {
        const colorButton = createColorButton(product);
        colorButton.addEventListener("click", () => handleColorSelect(product, colorButton));
        colorSelector.appendChild(colorButton);
    });

    // Render Size Options
    const sizes = [
        { size: "S", price: 69 },
        { size: "M", price: 79 },
        { size: "L", price: 89 },
        { size: "XL", price: 99 },
    ];
    sizes.forEach((size) => createSizeButton(size));

    // Quantity Control
    increaseButton.addEventListener("click", () => {
        quantity++;
        countElement.textContent = quantity;
        updateUI();
    });

    decreaseButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            countElement.textContent = quantity;
            updateUI();
        }
    });

    // Add to Cart
    addToCartButton.addEventListener("click", () => {
        const checkoutCount = checkout.querySelector("span");
        checkoutCount.innerText = quantity;
        checkout.classList.remove("hidden");
        disableButtons();
    });

    // Checkout
    checkout.addEventListener("click", () => {
        const cartItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            img: selectedProduct.img,
            alt: selectedProduct.alt,
            color: selectedProduct.colorName,
            size: selectedSize.size,
            quantity,
            price: selectedSize.price * quantity,
        };
        cartData.push(cartItem);
        updateCart();
        cartModal.classList.remove("hidden");
    });

    // Modal Close
    cartModal.addEventListener("click", () => closeModal());
    document.getElementById("continue-shopping").addEventListener("click", () => closeModal());
    document.getElementById("final-checkout").addEventListener("click", () => closeModal());

    // Update Cart
    function updateCart() {
        cartTable.innerHTML = "";
        let totalQuantityValue = 0;
        let totalPriceValue = 0;
        cartData.forEach((item) => {
            const row = createCartRow(item);
            cartTable.appendChild(row);
            totalQuantityValue += item.quantity;
            totalPriceValue += item.price;
        });
        totalQuantity.textContent = totalQuantityValue;
        totalPrice.textContent = `$${totalPriceValue}`;
    }

    // Helper Functions
    function updateUI() {
        countElement.textContent = quantity;
        decreaseButton.disabled = quantity <= 1;
        decreaseButton.classList.toggle("cursor-not-allowed", quantity <= 1);
        decreaseButton.classList.toggle("cursor-pointer", quantity > 1);
    }

    function handleColorSelect(product, colorButton) {
        selectedProduct = product;
        productImage.src = product.img;
        updateColorButtons(colorButton);
    }

    function updateColorButtons(selectedColorButton) {
        colorSelector.querySelectorAll("div").forEach((button) => {
            button.style.borderColor = "transparent";
        });
        selectedColorButton.style.borderColor = selectedProduct.color;
    }

    function createColorButton(product) {
        const colorButton = document.createElement("div");
        colorButton.classList.add("p-0.5", "border-2", "rounded-full", "cursor-pointer");
        colorButton.style.borderColor = product.color;

        const colorDiv = document.createElement("div");
        colorDiv.className = "h-4 w-4 rounded-full bg-cover";
        colorDiv.style.background = product.color;
        colorButton.appendChild(colorDiv);

        colorButton.style.borderColor = product.id === selectedProduct.id ? product.color : "transparent";
        return colorButton;
    }

    function createSizeButton(size) {
        const sizeButton = document.createElement("button");
        sizeButton.className = "whitespace-nowrap cursor-pointer leading-5 py-2 text-sm rounded border";
        sizeButton.style.borderColor = "#DBDFEA";
        sizeButton.style.paddingLeft = "1.125rem";
        sizeButton.style.paddingRight = "1.125rem";

        const span = document.createElement("span");
        span.className = "font-semibold";
        span.style.marginRight = ".355rem";
        span.textContent = size.size;

        sizeButton.addEventListener("click", () => handleSizeSelect(size, span, sizeButton));

        sizeButton.style.borderColor = size.size === selectedSize.size ? "#6576FF" : "#DBDFEA";
        span.style.color = size.size === selectedSize.size ? "#6576FF" : "#364A63";

        sizeButton.appendChild(span);
        sizeButton.appendChild(document.createTextNode(` $${size.price}`));
        sizeSelector.appendChild(sizeButton);
    }

    function handleSizeSelect(size, span, sizeButton) {
        selectedSize = size;
        sizeSelector.querySelectorAll("button").forEach((button) => (button.style.borderColor = "#DBDFEA"));
        sizeSelector.querySelectorAll("span").forEach((span) => (span.style.color = "#364A63"));
        sizeButton.style.borderColor = "#6576FF";
        span.style.color = "#6576FF";
    }

    function createCartRow(item) {
        const row = document.createElement("tr");
        row.className = "border-b border-divider text-center";
        row.innerHTML = `
            <td class="py-5 text-sm text-start flex items-center gap-2">
                <img src="${item.img}" alt="${item.alt}" class="h-9 w-9 rounded" />
                ${item.name}
            </td>
            <td class="px-4 py-5 text-sm">${item.color}</td>
            <td class="px-4 py-5 text-sm font-semibold">${item.size}</td>
            <td class="px-4 py-5 text-sm font-semibold">${item.quantity}</td>
            <td class="pr-1 py-5 text-end text-sm font-semibold">$${item.price}</td>
        `;
        return row;
    }

    function disableButtons() {
        decreaseButton.disabled = true;
        increaseButton.disabled = true;
    }

    function closeModal() {
        cartModal.classList.add("hidden");
        checkout.classList.add("hidden");
        enableButtons();
    }

    function enableButtons() {
        decreaseButton.disabled = false;
        increaseButton.disabled = false;
    }
});
