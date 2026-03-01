// Food Data Configuration
const defaultFoodItems = [
    {
        id: 1,
        name: "Classic Pepperoni",
        price: 184.01,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 458,
        description: "Fresh tomato sauce, mozzarella, and spicy pepperoni.",
        veg: false
    },
    {
        id: 2,
        name: "Veggie Supreme",
        price: 175.64,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 339,
        description: "Loaded with bell peppers, onions, mushrooms, and olives.",
        veg: true
    },
    {
        id: 3,
        name: "Double Cheeseburger",
        price: 187.44,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 416,
        description: "Two juicy beef patties with melted cheddar and secret sauce.",
        veg: false
    },
    {
        id: 4,
        name: "Crispy Chicken Burger",
        price: 196.9,
        category: "burger",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 344,
        description: "Crispy fried chicken breast with lettuce and mayo.",
        veg: false
    },
    {
        id: 5,
        name: "California Roll",
        price: 165.6,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 444,
        description: "Crab, avocado, and cucumber wrapped in sushi rice.",
        veg: false
    },
    {
        id: 6,
        name: "Dragon Roll",
        price: 190.45,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 349,
        description: "Eel and cucumber topped with thin avocado slices.",
        veg: false
    },
    {
        id: 7,
        name: "Chocolate Lava Cake",
        price: 194.98,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 142,
        description: "Warm chocolate cake with a molten center.",
        veg: true
    },
    {
        id: 8,
        name: "Strawberry Cheesecake",
        price: 189.66,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 407,
        description: "Creamy cheesecake with fresh strawberry topping.",
        veg: true
    },
    {
        id: 9,
        name: "Fresh Mojito",
        price: 157.16,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 391,
        description: "Refreshing mint and lime cocktail (non-alcoholic available).",
        veg: true
    },
    {
        id: 10,
        name: "Iced Caramel Macchiato",
        price: 161.84,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 62,
        description: "Espresso with vanilla syrup, milk, and caramel drizzle.",
        veg: true
    },
    // Added Items - Pizza
    {
        id: 11,
        name: "Margherita Classic",
        price: 176.11,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 260,
        description: "Traditional Neapolitan pizza with San Marzano tomato sauce and fresh mozzarella.",
        veg: true
    },
    {
        id: 12,
        name: "BBQ Chicken Pizza",
        price: 170.47,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 377,
        description: "Grilled chicken, red onions, and cilantro with tangy BBQ sauce.",
        veg: false
    },
    // Added Items - Burger
    {
        id: 13,
        name: "Mushroom Swiss Burger",
        price: 154.49,
        category: "burger",
        image: "https://images.unsplash.com/photo-1594212691516-4af4b18c6f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 204,
        description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese.",
        veg: false
    },
    {
        id: 14,
        name: "Spicy Black Bean Burger",
        price: 154.24,
        category: "burger",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 246,
        description: "Vegan black bean patty with jalapeños, avocado, and spicy aioli.",
        veg: true
    },
    // Added Items - Sushi
    {
        id: 15,
        name: "Spicy Tuna Roll",
        price: 199.03,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1626229652216-e5ebb7ee6048?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 402,
        description: "Fresh tuna mixed with spicy mayo, topped with sesame seeds.",
        veg: false
    },
    {
        id: 16,
        name: "Rainbow Roll",
        price: 185.85,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 85,
        description: "California roll topped with assorted fresh sashimi and avocado.",
        veg: false
    },
    // Added Items - Dessert
    {
        id: 17,
        name: "Tiramisu",
        price: 165.01,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 379,
        description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.",
        veg: true
    },
    {
        id: 18,
        name: "Matcha Ice Cream",
        price: 189.05,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 321,
        description: "Authentic japanese green tea ice cream.",
        veg: true
    },
    // Added Items - Drinks
    {
        id: 19,
        name: "Mango Smoothie",
        price: 171.59,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1546890975-7596e98cdbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 91,
        description: "Fresh mango blended with yogurt and honey.",
        veg: true
    },
    {
        id: 20,
        name: "Classic Lemonade",
        price: 170.22,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 363,
        description: "Freshly squeezed lemons with perfect balance of sweet and tart.",
        veg: true
    },
    // Added Items - Non-Veg Pizza
    {
        id: 21,
        name: "Meat Lover's Supreme",
        price: 187.72,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 98,
        description: "Loaded with pepperoni, sausage, ham, bacon, and seasoned beef.",
        veg: false
    },
    // Added Items - Non-Veg Burger
    {
        id: 23,
        name: "Bacon Egg Cheeseburger",
        price: 193.01,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 384,
        description: "Premium beef patty, crispy bacon, fried egg, and melted cheddar.",
        veg: false
    },
    {
        id: 24,
        name: "Smoky BBQ Pulled Pork Burger",
        price: 194.22,
        category: "burger",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 211,
        description: "Slow-cooked pulled pork smothered in BBQ sauce with creamy coleslaw.",
        veg: false
    },
    // Added Items - Non-Veg Sushi
    {
        id: 25,
        name: "Salmon Lover's Roll",
        price: 171.8,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17f6a08c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 199,
        description: "Fresh salmon inside and out, topped with ikura (salmon roe).",
        veg: false
    },
    {
        id: 26,
        name: "Shrimp Tempura Roll",
        price: 189.14,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 458,
        description: "Crispy shrimp tempura, avocado, and cucumber with eel sauce.",
        veg: false
    }
];

let foodItems = JSON.parse(localStorage.getItem('foodItems'));
if (!foodItems || foodItems.length === 0) {
    foodItems = defaultFoodItems;
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
}

function saveFoodItems() {
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
}

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
const DELIVERY_FEE = 5;

// DOM Elements
const foodGrid = document.getElementById('foodGrid');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItems');
const subtotalPriceEl = document.getElementById('subtotalPrice');
const deliveryPriceEl = document.getElementById('deliveryPrice');
const totalPriceEl = document.getElementById('totalPrice');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authBtn = document.getElementById('authBtn');
const checkoutForm = document.getElementById('checkoutForm');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    updateCartUI();
    checkLoginStatus();
    setupEventListeners();
});

function setupEventListeners() {
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    checkoutForm.addEventListener('submit', handleCheckout);
}

// Render Menu
function renderMenu(category, searchTerm = '') {
    foodGrid.innerHTML = '';

    let filteredItems = foodItems;

    // Filter by Category
    if (category !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === category);
    }

    // Filter by Search
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    if (filteredItems.length === 0) {
        foodGrid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <div class="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-search text-gray-400 text-4xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
                <p class="text-gray-500 max-w-sm mx-auto">We couldn't find any food matching your search. Try adjusting your keywords or browse our categories.</p>
            </div>
        `;
        return;
    }

    // Render Cards
    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-700 group';
        card.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl h-48 mb-4">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <button onclick="addToCart(${item.id})" class="absolute bottom-3 right-3 bg-gray-900 border border-gray-700 text-primary w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i class="fas fa-plus"></i>
                </button>
                ${item.veg ? '<div class="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-green-400">Veg</div>' : ''}
            </div>
            
            <div class="px-2">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg text-white leading-tight">${item.name}</h3>
                    <div class="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded-lg border border-gray-600 cursor-pointer hover:bg-gray-600 transition-colors" onclick="openReviewsModal(${item.id})">
                        <i class="fas fa-star text-yellow-400 text-xs"></i>
                        <span class="text-xs font-bold text-green-400">${item.rating.toFixed(1)}</span>
                        <span class="text-[10px] text-gray-400 ml-1">(${item.reviews || 0})</span>
                    </div>
                </div>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-white">₹${item.price.toFixed(0)}</span>
                    <button onclick="addToCart(${item.id})" class="text-sm font-semibold text-primary hover:text-primary-light transition-colors">Add to Cart</button>
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// Category Navigation
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('bg-primary', 'text-white', 'border-primary');
            b.classList.add('border-gray-200', 'hover:border-primary', 'hover:text-primary');
        });

        e.target.classList.remove('border-gray-200', 'hover:border-primary', 'hover:text-primary');
        e.target.classList.add('bg-primary', 'text-white', 'border-primary');

        renderMenu(e.target.dataset.category);
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();

        // If searching, switch UI to "All" category for global search
        if (value !== '') {
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'border-primary');
                b.classList.add('border-gray-200', 'hover:border-primary', 'hover:text-primary');
            });
            const allBtn = document.querySelector('.category-btn[data-category="all"]');
            if (allBtn) {
                allBtn.classList.remove('border-gray-200', 'hover:border-primary', 'hover:text-primary');
                allBtn.classList.add('bg-primary', 'text-white', 'border-primary');
            }
            renderMenu('all', value);

            // Scroll to menu section to show results only when actively searching
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                const rect = menuSection.getBoundingClientRect();
                // Scroll if menu is below the navbar
                if (rect.top > 100) {
                    // Adjust for fixed navbar height if needed
                    const y = menuSection.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        } else {
            const activeCategory = document.querySelector('.category-btn.bg-primary')?.dataset.category || 'all';
            renderMenu(activeCategory, '');
        }
    });

    // Optional: scroll on focus as well only if there is a value
    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim() !== '') {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                const rect = menuSection.getBoundingClientRect();
                if (rect.top > 100) {
                    const y = menuSection.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        }
    });
}

// UI Toggles
function toggleCart() {
    const isHidden = cartSidebar.classList.contains('translate-x-full');
    if (isHidden) {
        cartSidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        cartSidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// Cart Logic
function addToCart(id) {
    const item = foodItems.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    saveCart();
    // Optional: Add flying animation to cart icon
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    saveCart();
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Update List
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-gray-400">
                <i class="fas fa-shopping-bag text-6xl mb-4 opacity-20"></i>
                <p>Your cart is empty</p>
                <button onclick="toggleCart()" class="mt-4 text-primary font-medium hover:underline">Start Shopping</button>
            </div>
        `;
        subtotalPriceEl.innerText = '₹0';
        deliveryPriceEl.innerText = '₹0';
        totalPriceEl.innerText = '₹0';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex gap-4 items-center bg-white p-3 rounded-xl border border-gray-100 shadow-sm';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
            <div class="flex-1">
                <h4 class="font-bold text-gray-800 line-clamp-1">${item.name}</h4>
                <p class="text-primary font-bold">₹${(item.price * item.quantity).toFixed(0)}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xs transition-colors">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="font-medium text-sm">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xs transition-colors">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-gray-300 hover:text-red-500 transition-colors p-2">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update Totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
    const total = subtotal + delivery;

    subtotalPriceEl.innerText = `₹${subtotal.toFixed(0)}`;
    deliveryPriceEl.innerText = `₹${delivery.toFixed(0)}`;
    totalPriceEl.innerText = `₹${total.toFixed(0)}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Authentication Logic
function checkLoginStatus() {
    if (currentUser) {
        authBtn.innerHTML = `<i class="fas fa-user mr-2"></i> ${currentUser.name.split(' ')[0]}`;
        authBtn.onclick = openProfileModal;
        authBtn.classList.remove('bg-primary', 'text-white', 'hover:bg-red-500');
        authBtn.classList.add('bg-gray-100', 'text-gray-800', 'hover:bg-gray-200');
    } else {
        authBtn.innerText = 'Login';
        authBtn.onclick = openLoginModal;
        authBtn.classList.add('bg-primary', 'text-white', 'hover:bg-red-500');
        authBtn.classList.remove('bg-gray-100', 'text-gray-800', 'hover:bg-gray-200');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    if (email && password) {
        // Mock Login
        const username = email.split('@')[0];
        // Note: In a real app we would load this from a DB. 
        // For this demo, we'll just keep existing data if matches or init new.
        if (!currentUser || currentUser.email !== email) {
            currentUser = {
                name: username.charAt(0).toUpperCase() + username.slice(1),
                email: email,
                phone: '',
                address: ''
            };
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkLoginStatus();
        closeAllModals();
        alert(`Welcome back, ${currentUser.name}!`);
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    if (name && email && password) {
        // Mock Signup
        currentUser = {
            name: name,
            email: email,
            phone: '',
            address: ''
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        checkLoginStatus();
        closeAllModals();
        alert(`Welcome to Top N Town, ${currentUser.name}!`);
    }
}

function handleLogout() {
    if (confirm("Are you sure you want to logout?")) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        checkLoginStatus();
        closeAllModals();
        window.location.reload();
    }
}

// Profile Modal Logic
function openProfileModal() {
    if (!currentUser) return;

    // Populate fields
    document.getElementById('profileName').value = currentUser.name || '';
    document.getElementById('profileEmail').value = currentUser.email || '';
    document.getElementById('profilePhone').value = currentUser.phone || '';
    document.getElementById('profileAddress').value = currentUser.address || '';

    // Render Orders
    renderOrders();

    // Show Modal
    const modal = document.getElementById('profileModal');
    const content = document.getElementById('profileContent');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        overlay.classList.remove('opacity-0');
    }, 10);

    // Setup Form Submit
    document.getElementById('profileForm').onsubmit = function (e) {
        e.preventDefault();
        currentUser.name = document.getElementById('profileName').value;
        currentUser.phone = document.getElementById('profilePhone').value;
        currentUser.address = document.getElementById('profileAddress').value;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Profile Updated Successfully!');
        checkLoginStatus(); // Update navbar name if changed
    };
}

function switchProfileTab(tab) {
    const detailsTab = document.getElementById('tab-details');
    const ordersTab = document.getElementById('tab-orders');
    const detailsSection = document.getElementById('profile-details');
    const ordersSection = document.getElementById('profile-orders');

    if (tab === 'details') {
        detailsSection.classList.remove('hidden');
        ordersSection.classList.add('hidden');

        detailsTab.classList.add('bg-white', 'shadow-sm', 'text-primary', 'border', 'border-primary/20');
        detailsTab.classList.remove('text-gray-600', 'hover:bg-white');

        ordersTab.classList.remove('bg-white', 'shadow-sm', 'text-primary', 'border', 'border-primary/20');
        ordersTab.classList.add('text-gray-600', 'hover:bg-white');
    } else {
        detailsSection.classList.add('hidden');
        ordersSection.classList.remove('hidden');

        ordersTab.classList.add('bg-white', 'shadow-sm', 'text-primary', 'border', 'border-primary/20');
        ordersTab.classList.remove('text-gray-600', 'hover:bg-white');

        detailsTab.classList.remove('bg-white', 'shadow-sm', 'text-primary', 'border', 'border-primary/20');
        detailsTab.classList.add('text-gray-600', 'hover:bg-white');
    }
}

function renderOrders() {
    const ordersList = document.getElementById('ordersList');
    // Get orders depending on user email (simple filter)
    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    const userOrders = allOrders.filter(o => o.userEmail === currentUser.email).reverse();

    if (userOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <i class="fas fa-box-open text-5xl mb-4 opacity-30"></i>
                <p>No orders yet</p>
                <button onclick="closeAllModals()" class="mt-4 text-primary text-sm hover:underline">Make your first order</button>
            </div>
        `;
        return;
    }

    ordersList.innerHTML = '';
    userOrders.forEach(order => {
        const orderDate = new Date(order.date).toLocaleDateString();
        const itemsHtml = order.items.map(i => `<span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">${i.quantity}x ${i.name}</span>`).join(' ');

        ordersList.innerHTML += `
            <div class="border rounded-2xl p-4 hover:border-primary/30 transition-colors bg-white shadow-sm">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <p class="font-bold text-gray-800">Order #${order.id}</p>
                        <p class="text-xs text-gray-500">${orderDate} • <span class="text-green-600 font-medium">Delivered</span></p>
                    </div>
                    <p class="font-bold text-primary">₹${order.total.toFixed(0)}</p>
                </div>
                <div class="flex flex-wrap gap-2 mb-3">
                    ${itemsHtml}
                </div>
                <div class="text-xs text-gray-500 border-t pt-2 mt-2">
                    Delivered to: <span class="text-gray-700">${order.address}</span>
                </div>
            </div>
        `;
    });
}

// Modal Management
function openLoginModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('scale-95', 'opacity-0');
        overlay.classList.remove('opacity-0');
    }, 10);
}

function openProcessModal() {
    const modal = document.getElementById('processModal');
    const content = document.getElementById('processContent');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        overlay.classList.remove('opacity-0');
    }, 10);
}

function closeAllModals() {
    const authModal = document.getElementById('authModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const reviewsModal = document.getElementById('reviewsModal');

    // Auth Modal
    authModal.classList.add('scale-95', 'opacity-0');

    // Profile Modal
    const profileModal = document.getElementById('profileModal');
    const profileContent = document.getElementById('profileContent');
    if (profileContent) profileContent.classList.add('scale-95', 'opacity-0');

    // Checkout Modal
    const checkoutContent = document.getElementById('checkoutContent');
    if (checkoutContent) checkoutContent.classList.add('scale-95', 'opacity-0');

    // Process Modal
    const processModal = document.getElementById('processModal');
    const processContent = document.getElementById('processContent');
    if (processContent) processContent.classList.add('scale-95', 'opacity-0');

    // Reviews Modal
    const reviewsContent = document.getElementById('reviewsContent');
    if (reviewsContent) reviewsContent.classList.add('scale-95', 'opacity-0');

    overlay.classList.add('opacity-0');

    // If cart is open, keep overlay visible but hide modals
    if (!cartSidebar.classList.contains('translate-x-full')) {
        // Do nothing with overlay if cart is open
        setTimeout(() => {
            authModal.classList.add('hidden');
            checkoutModal.classList.add('hidden');
            if (profileModal) profileModal.classList.add('hidden');
            if (processModal) processModal.classList.add('hidden');
            if (reviewsModal) reviewsModal.classList.add('hidden');
        }, 300);
    } else {
        setTimeout(() => {
            authModal.classList.add('hidden');
            checkoutModal.classList.add('hidden');
            if (profileModal) profileModal.classList.add('hidden');
            if (processModal) processModal.classList.add('hidden');
            if (reviewsModal) reviewsModal.classList.add('hidden');
            overlay.classList.add('hidden');
        }, 300);
    }
}

function switchAuthTab(tab) {
    const loginBtn = document.getElementById('loginTabBtn');
    const signupBtn = document.getElementById('signupTabBtn');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginBtn.classList.add('text-primary', 'border-b-2', 'border-primary', 'bg-red-50');
        loginBtn.classList.remove('text-gray-400', 'hover:text-gray-600');
        signupBtn.classList.remove('text-primary', 'border-b-2', 'border-primary', 'bg-red-50');
        signupBtn.classList.add('text-gray-400', 'hover:text-gray-600');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupBtn.classList.add('text-primary', 'border-b-2', 'border-primary', 'bg-red-50');
        signupBtn.classList.remove('text-gray-400', 'hover:text-gray-600');
        loginBtn.classList.remove('text-primary', 'border-b-2', 'border-primary', 'bg-red-50');
        loginBtn.classList.add('text-gray-400', 'hover:text-gray-600');
    }
}

// Checkout Logic
function openCheckout() {
    if (cart.length === 0) return;

    // If not logged in, force login
    if (!currentUser) {
        alert("Please login to proceed to checkout");
        openLoginModal();
        return;
    }

    toggleCart(); // Close cart
    const modal = document.getElementById('checkoutModal');
    const content = document.getElementById('checkoutContent');
    const checkoutItems = document.getElementById('checkoutItems');

    // Pre-fill address if saved
    if (currentUser.address) {
        const addrInput = document.querySelector('#checkoutForm input[placeholder="123 Food Street, Apt 4B"]');
        if (addrInput) addrInput.value = currentUser.address;
    }

    // Render Checkout Items
    checkoutItems.innerHTML = '';
    cart.forEach(item => {
        checkoutItems.innerHTML += `
            <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <div class="flex items-center gap-3">
                    <img src="${item.image}" class="w-12 h-12 rounded-lg object-cover">
                    <div class="text-sm">
                        <p class="font-bold">${item.name}</p>
                        <p class="text-gray-500">Qty: ${item.quantity}</p>
                    </div>
                </div>
                <p class="font-bold">₹${(item.price * item.quantity).toFixed(0)}</p>
            </div>
        `;
    });

    // Update Totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('checkoutSubtotal').innerText = `₹${subtotal.toFixed(0)}`;
    document.getElementById('checkoutDelivery').innerText = `₹${DELIVERY_FEE.toFixed(0)}`;
    document.getElementById('checkoutTotal').innerText = `₹${total.toFixed(0)}`;

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        overlay.classList.remove('opacity-0');
    }, 10);
}

function handleCheckout(e) {
    e.preventDefault();

    // Simulate API call
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Get address from form (simple approximation for this demo)
    const formInputs = e.target.querySelectorAll('input');
    // Assuming the layout: Street, City, Zip are inputs 0,1,2 in the form
    const address = formInputs[0].value + ', ' + (formInputs[1]?.value || '') + ' ' + (formInputs[2]?.value || '');

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;

    setTimeout(() => {
        // Save Order
        const newOrder = {
            id: Date.now().toString().slice(-6),
            date: new Date().toISOString(),
            userEmail: currentUser.email,
            items: [...cart],
            total: total,
            address: address
        };

        let allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        allOrders.push(newOrder);
        localStorage.setItem('allOrders', JSON.stringify(allOrders));

        alert("Order Placed Successfully! Your food is on the way.");
        cart = [];
        saveCart();
        updateCartUI();
        closeAllModals();
        btn.disabled = false;
        btn.innerText = originalText;
    }, 2000);
}

// Reviews Logic
document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);

function openReviewsModal(id) {
    const item = foodItems.find(i => i.id === id);
    if (!item) return;

    // Set modal headers
    document.getElementById('modalItemName').innerHTML = `<i class="fas fa-star text-primary"></i> ${item.name} Reviews`;

    // Set current rating stars
    let starsHtml = '';
    const ratingInt = Math.floor(item.rating);
    for (let i = 0; i < 5; i++) {
        if (i < ratingInt) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === ratingInt && item.rating % 1 > 0) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star text-gray-600"></i>';
        }
    }
    document.getElementById('modalItemStars').innerHTML = starsHtml;
    document.getElementById('modalItemRatingText').innerText = `${item.rating.toFixed(1)} (${item.reviews || 0} reviews)`;

    // Set hidden input
    document.getElementById('reviewItemId').value = id;

    // Clear form
    document.getElementById('reviewForm').reset();

    renderReviewsList(item);

    const modal = document.getElementById('reviewsModal');
    const content = document.getElementById('reviewsContent');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        overlay.classList.remove('opacity-0');
    }, 10);
}

function renderReviewsList(item) {
    const list = document.getElementById('reviewsList');

    if (!item.reviewsList) {
        item.reviewsList = [];
    }

    if (item.reviewsList.length === 0) {
        list.innerHTML = `
            <div class="text-center py-8 text-gray-500" id="noReviewsMsg">
                <i class="far fa-comment-alt text-4xl mb-3 opacity-30"></i>
                <p>No reviews yet. Be the first to review!</p>
            </div>
        `;
    } else {
        list.innerHTML = '';
        item.reviewsList.forEach(review => {
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= review.rating) {
                    starsHtml += '<i class="fas fa-star text-yellow-400 text-xs"></i>';
                } else {
                    starsHtml += '<i class="far fa-star text-gray-600 text-xs"></i>';
                }
            }

            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'bg-gray-800 p-4 rounded-xl border border-gray-700';
            reviewDiv.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                            ${review.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p class="font-bold text-white text-sm">${review.author}</p>
                            <p class="text-xs text-gray-500">${review.date}</p>
                        </div>
                    </div>
                    <div class="flex">${starsHtml}</div>
                </div>
                <p class="text-gray-300 text-sm mt-2">${review.text}</p>
            `;
            list.appendChild(reviewDiv);
        });
    }
}

function handleReviewSubmit(e) {
    e.preventDefault();

    const id = parseInt(document.getElementById('reviewItemId').value);
    const item = foodItems.find(i => i.id === id);
    if (!item) return;

    if (!currentUser) {
        alert("Please login to submit a review.");
        closeAllModals();
        openLoginModal();
        return;
    }

    const ratingInput = document.querySelector('input[name="rating"]:checked');
    if (!ratingInput) {
        alert("Please select a star rating.");
        return;
    }
    const newRating = parseInt(ratingInput.value);
    const comment = document.getElementById('reviewText').value.trim();

    if (!item.reviewsList) item.reviewsList = [];

    item.reviewsList.unshift({
        author: currentUser.name,
        rating: newRating,
        text: comment,
        date: new Date().toLocaleDateString()
    });

    const currentTotalScore = item.rating * (item.reviews || 0);
    item.reviews = (item.reviews || 0) + 1;
    item.rating = (currentTotalScore + newRating) / item.reviews;

    saveFoodItems();

    renderReviewsList(item);

    const activeCategory = document.querySelector('.category-btn.bg-primary')?.dataset.category || 'all';
    const searchQuery = document.getElementById('searchInput')?.value || '';
    renderMenu(activeCategory, searchQuery);

    let starsHtml = '';
    const ratingInt = Math.floor(item.rating);
    for (let i = 0; i < 5; i++) {
        if (i < ratingInt) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === ratingInt && item.rating % 1 > 0) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star text-gray-600"></i>';
        }
    }
    document.getElementById('modalItemStars').innerHTML = starsHtml;
    document.getElementById('modalItemRatingText').innerText = `${item.rating.toFixed(1)} (${item.reviews} reviews)`;

    document.getElementById('reviewForm').reset();
    alert("Review submitted successfully!");
}
