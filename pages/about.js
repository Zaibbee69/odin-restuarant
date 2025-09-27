function loadAbout() {
  const contentCtn = document.getElementById("content");

  contentCtn.innerHTML = `
    <!-- About Hero -->
    <section class="hero about-hero">
      <h1>About Zaibee’s Restaurant</h1>
      <p>Tradition, passion, and flavor in every dish we serve.</p>
    </section>

    <!-- Story Section -->
    <section class="story">
      <h2>Our Story</h2>
      <p>
        Founded with love and a deep respect for culinary traditions, 
        Zaibee’s Restaurant has been serving our community with fresh, 
        flavorful meals crafted from locally-sourced ingredients. 
        What started as a family kitchen dream quickly grew into a place 
        where food brings people together.
      </p>
    </section>

    <!-- Values Section -->
    <section class="values">
      <h2>Our Values</h2>
      <ul>
        <li><strong>Freshness:</strong> Only the finest local produce and ingredients.</li>
        <li><strong>Hospitality:</strong> Making every guest feel like family.</li>
        <li><strong>Craft:</strong> Each dish made with care and creativity.</li>
      </ul>
    </section>

    <!-- Team Section -->
    <section class="team">
      <h2>Meet Our Chefs</h2>
      <div class="chefs">
        <article class="chef">
          <img src="assets/maria.jfif" alt="Chef Maria">
          <h3>Chef Maria</h3>
          <p>Specialist in Italian and Mediterranean cuisine.</p>
        </article>

        <article class="chef">
          <img src="assets/man.jfif" alt="Chef Ahmed">
          <h3>Chef Ahmed</h3>
          <p>Grill master and expert in Middle Eastern flavors.</p>
        </article>

        <article class="chef">
          <img src="assets/lady.jpg" alt="Chef Lina">
          <h3>Chef Lina</h3>
          <p>Pâtissier known for exquisite desserts and pastries.</p>
        </article>
      </div>
    </section>
  `;
}

export default loadAbout;
