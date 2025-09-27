function loadHome() {
  const contentCtn = document.getElementById("content");

  contentCtn.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <h1>Welcome to Zaibee’s Restaurant</h1>
      <p>Delicious flavors, cozy ambiance, and unforgettable dining.</p>
      <button class="cta-btn">Explore Menu</button>
    </section>

    <!-- About Section -->
    <section class="about">
      <h2>About Us</h2>
      <p>
        At Zaibee’s, we believe food should not only satisfy your hunger but also warm your soul. 
        Our chefs craft each dish with love using the freshest ingredients.
      </p>
    </section>

    <!-- Featured Dishes -->
    <section class="featured">
      <h2>Our Specialties</h2>
      <div class="dishes">
        <article class="dish">
          <img src="assets/pasta.jpg" alt="Creamy Pasta">
          <h3>Creamy Pasta</h3>
          <p>Rich, creamy sauce with a perfect blend of herbs.</p>
        </article>

        <article class="dish">
          <img src="assets/steak.jfif" alt="Grilled Steak">
          <h3>Grilled Steak</h3>
          <p>Juicy, flame-grilled steak served with roasted veggies.</p>
        </article>

        <article class="dish">
          <img src="assets/desert.jpg" alt="Chocolate Dessert">
          <h3>Chocolate Dessert</h3>
          <p>A decadent treat to end your meal on a sweet note.</p>
        </article>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="reservation">
      <h2>Book Your Table</h2>
      <p>Reserve a spot today and enjoy a dining experience like no other.</p>
      <button class="cta-btn">Reserve Now</button>
    </section>
  `;
}

export default loadHome;
