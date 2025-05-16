# Welcome to Meta**IITGandhinagar**

<div class="hero-section">
  <div class="hero-content">
    <p class="hero-subtitle">Your comprehensive knowledge hub for all things IITGN</p>
    <p class="hero-description">Brought to you by the Technical Council with 💙</p>
  </div>
</div>

<div class="feature-cards">
  <div class="card">
    <div class="card-icon"><i class="fas fa-graduation-cap"></i></div>
    <h3>Academics</h3>
    <p>Programs, courses, requirements, and academic resources</p>
    <a href="academics" class="card-link">Explore <i class="fas fa-arrow-right"></i></a>
  </div>
  
  <div class="card">
    <div class="card-icon"><i class="fas fa-landmark"></i></div>
    <h3>Policies</h3>
    <p>Guidelines, rules, and institutional policies</p>
    <a href="policies" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
  </div>
  
  <div class="card">
    <div class="card-icon"><i class="fas fa-user-graduate"></i></div>
    <h3>Alumni</h3>
    <p>Connect with graduates and alumni network</p>
    <a href="alumni" class="card-link">Connect <i class="fas fa-arrow-right"></i></a>
  </div>
  
  <div class="card">
    <div class="card-icon"><i class="fas fa-handshake"></i></div>
    <h3>People</h3>
    <p>Faculty, staff, and student organizations</p>
    <a href="people" class="card-link">Discover <i class="fas fa-arrow-right"></i></a>
  </div>
  
  <div class="card">
    <div class="card-icon"><i class="fas fa-briefcase"></i></div>
    <h3>Careers</h3>
    <p>Internships, placement, and career development</p>
    <a href="careers" class="card-link">Find Opportunities <i class="fas fa-arrow-right"></i></a>
  </div>
  
  <div class="card">
    <div class="card-icon"><i class="fas fa-calculator"></i></div>
    <h3>Courses</h3>
    <p>Course listings, materials, and guides</p>
    <a href="courses" class="card-link">Browse <i class="fas fa-arrow-right"></i></a>
  </div>
</div>

<div class="about-section">
  <h2>Why does this exist?</h2>
  <div class="about-content">
    <div class="about-text">
      <p>MetaIITGandhinagar aspires to be a centralized hub and interactive platform for IIT Gandhinagar students. Drawing inspiration from MetaKGP, this platform is a vast, open-source repository of everything IITGN-related.</p>
      <p>From how to change your branch to the menu at teapost, MetaIITGn aims to cover every aspect of life here and put it online with the help of articles written by the community.</p>
      <p>More than a passive information resource, it's a user-driven platform inviting your active engagement. Share your knowledge by contributing to an article and your insights and experiences in the discussion section.</p>
      <a href="howtocontribute" class="md-button">Learn how to contribute</a>
    </div>
    <div class="about-links">
      <h3>Useful Resources</h3>
      <ul>
        <li><a href="https://www.iitgn.ac.in/" target="_blank"><i class="fas fa-external-link-alt"></i> IIT Gandhinagar Official Website</a></li>
        <li><a href="https://campus.iitgn.ac.in/facility/" target="_blank"><i class="fas fa-external-link-alt"></i> Campus Facilities</a></li>
        <li><a href="https://iitgn.ac.in/student/lifeoncampus/" target="_blank"><i class="fas fa-external-link-alt"></i> Student Life</a></li>
      </ul>
    </div>
  </div>
</div>

<style>
/* Hero section */
.hero-section {
  background-color: var(--md-primary-fg-color);
  color: white;
  padding: 2rem 0;
  border-radius: 8px;
  margin: 1rem 0 3rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hero-description {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Feature cards */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

[data-md-color-scheme="slate"] .card {
  background-color: var(--md-default-bg-color--lightest, #1e1e1e);
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.card-icon {
  margin-bottom: 1rem;
  color: var(--md-primary-fg-color);
  font-size: 2rem;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: var(--md-primary-fg-color--dark);
}

[data-md-color-scheme="slate"] .card h3 {
  color: var(--md-primary-fg-color--light);
}

.card p {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: var(--md-default-fg-color--light, rgba(0, 0, 0, 0.7));
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: var(--md-accent-fg-color);
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;
}

.card-link i {
  font-size: 0.8rem;
  margin-left: 0.3rem;
  transition: transform 0.2s ease;
}

.card-link:hover i {
  transform: translateX(3px);
}

/* About section */
.about-section {
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.about-section h2 {
  margin-bottom: 1.5rem;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.about-links ul {
  list-style: none;
  padding: 0;
}

.about-links li {
  margin-bottom: 0.8rem;
}

.about-links a {
  display: inline-flex;
  align-items: center;
  color: var(--md-accent-fg-color);
  text-decoration: none;
}

.about-links i {
  margin-right: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .feature-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 600px) {
  .feature-cards {
    grid-template-columns: 1fr;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>


## Why does this exist?

Whether you are a first-year student charting your academic journey, a final-year student seeking research advice, or just someone interested in extracurricular activities, MetaIITGandhinagar has you covered. We host a wide array of articles, guides, and firsthand accounts from your peers.

MetaIITGandhinagar aspires to be a centralized hub and interactive platform for IIT Gandhinagar students. Drawing inspiration from MetaKGP, this platform is a vast, open source repository of everything IITGN-related. From how to change your branch to the menu at teapost, MetaGn aims to cover every aspect of life here and put it online with the help of articles written by the community.More than a passive information resource, it's a user-driven platform inviting your active engagement. Share your knowledge by contributing to an article and your insights and experiences in the discussion section. 

Find out more about how to contribute [here](https://www.github.com).








<!-- 
## Academics

Explore information related to academics, including:

- Academic Advisories - Simplified
- Academic Calendar
- Academic Discussion Hours
- Branch Change
- Branches
- Dual majors
- Fee and Waivers
- Grading
- Honor Code
- Honors
- Minors
- Online Courses
- Peer Assisted Learning (PAL)
- Programme Requirements
- Project Courses
- Scholarships
- Semester Stores
- SSAC policies

## Policies

- Honor Code
- Anti-Ragging Policy
- Plagiarism Policy

## Alumni

Connect with alumni and access resources related to alumni network, including:

- Alumni Directory
- Alumni Success Stories
- Mentorship Programs

## People

Learn more about the faculty, staff, and student organizations at IIT Gandhinagar:

- Faculty Directory
- Staff Directory
- Student Clubs and Organizations

## Careers

Access resources and information related to career development and placement services:

- Internship Opportunities
- Job Placement Assistance -->

## Useful Resources

- [IIT Gandhinagar Official Website](https://www.iitgn.ac.in/)
- [Campus Facilities](https://campus.iitgn.ac.in/facility/)
- [Student Life](https://iitgn.ac.in/student/lifeoncampus/)

Feel free to explore the repository and make the most out of the resources available.

If you have any questions or need assistance, don't hesitate to reach out to the MetaIITGN community.
