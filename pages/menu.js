function loadMenu() {
  const contentCtn = document.getElementById("content");

  contentCtn.innerHTML = `
    <!-- Menu Hero -->
    <section class="hero menu-hero">
      <h1>Our Menu</h1>
      <p>Handcrafted dishes made with love and local ingredients.</p>
    </section>

    <!-- Menu Categories -->
    <section class="menu">
      <div class="menu-category">
        <h2>Starters</h2>
        <ul>
          <li><span>Bruschetta</span><span class="price">$8</span></li>
          <li><span>Stuffed Mushrooms</span><span class="price">$9</span></li>
          <li><span>Hummus & Pita</span><span class="price">$7</span></li>
        </ul>
      </div>

      <div class="menu-category">
        <h2>Main Courses</h2>
        <ul>
          <li><span>Grilled Salmon</span><span class="price">$18</span></li>
          <li><span>Lamb Chops</span><span class="price">$22</span></li>
          <li><span>Vegetarian Pasta</span><span class="price">$15</span></li>
        </ul>
      </div>

      <div class="menu-category">
        <h2>Desserts</h2>
        <ul>
          <li><span>Tiramisu</span><span class="price">$10</span></li>
          <li><span>Baklava</span><span class="price">$9</span></li>
          <li><span>Chocolate Lava Cake</span><span class="price">$11</span></li>
        </ul>
      </div>

      <div class="menu-category">
        <h2>Beverages</h2>
        <ul>
          <li><span>Fresh Lemonade</span><span class="price">$5</span></li>
          <li><span>Mint Tea</span><span class="price">$4</span></li>
          <li><span>Espresso</span><span class="price">$3</span></li>
        </ul>
      </div>
    </section>
  `;
}

export default loadMenu;
