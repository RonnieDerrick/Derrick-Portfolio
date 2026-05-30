// ===== TYPING ANIMATION =====
const words = ["Scalable Solutions", "ERPNext Systems", "Web Applications", "Mobile Apps", "Data-Driven Products"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typingText");

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
    return;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

if (typingText) typeEffect();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
}

// ===== EXPANDED PROJECTS DATA =====
const projects = [
  { 
    name: "TakaTaka Solutions ERP", 
    desc: "Complete waste management system: buybacks, waste pickers, recycling, material recovery, sorting, onsite clients (malls, UN), accounting, HR", 
    icon: "fa-recycle", 
    tags: ["ERPNext", "Waste Management", "Accounting", "HR"], 
    category: "erp" 
  },
  { 
    name: "Tireproz & Credicore", 
    desc: "Vehicle parts sales platform + motorbike hire purchase loan tracking system", 
    icon: "fa-motorcycle", 
    tags: ["ERPNext", "Loan Management", "Inventory"], 
    category: "erp" 
  },
  { 
    name: "Toprich Manufacturing", 
    desc: "Manufacturing module for motorbike parts production, quality control, BOM, and supply chain", 
    icon: "fa-industry", 
    tags: ["ERPNext", "Manufacturing", "Production"], 
    category: "erp" 
  },
  { 
    name: "Cylon Backend", 
    desc: "E-commerce backend system with API integrations, database optimization, and payment gateway", 
    icon: "fa-server", 
    tags: ["Python", "API", "E-commerce", "PostgreSQL"], 
    category: "backend" 
  },
  { 
    name: "Weighbridge Integration", 
    desc: "Hardware integration with weighbridge systems using Postman API testing & validation", 
    icon: "fa-weight-hanging", 
    tags: ["API", "Postman", "IoT Integration"], 
    category: "backend" 
  },
  { 
    name: "Freight Market Platform", 
    desc: "Import freight management, yard management, container tracking, and portfolio management", 
    icon: "fa-ship", 
    tags: ["ERPNext", "Logistics", "Freight", "Tracking"], 
    category: "erp" 
  },
  { 
    name: "FreshMart Mobile App", 
    desc: "Grocery delivery platform with real-time order tracking, payments, and admin dashboard", 
    icon: "fa-mobile-alt", 
    tags: ["React Native", "Node.js", "MongoDB", "Mobile"], 
    category: "mobile" 
  },
  { 
    name: "Corporate Websites Portfolio", 
    desc: "15+ responsive corporate websites for various clients across industries", 
    icon: "fa-globe", 
    tags: ["HTML/CSS", "JavaScript", "Responsive", "SEO"], 
    category: "web" 
  },
  { 
    name: "BizEx ERP Solution", 
    desc: "Business process automation, workflow management, and third-party integrations", 
    icon: "fa-chart-line", 
    tags: ["ERPNext", "Workflow", "Integration"], 
    category: "erp" 
  },
  { 
    name: "Rosslyn House Real Estate", 
    desc: "Real estate operations automation, property management, and tenant portal", 
    icon: "fa-building", 
    tags: ["ERPNext", "Real Estate", "Property Management"], 
    category: "erp" 
  },
  { 
    name: "Sated Skin E-commerce", 
    desc: "Backend systems for customer data management, booking system, and e-commerce features", 
    icon: "fa-spa", 
    tags: ["ERPNext", "E-commerce", "Booking System"], 
    category: "erp" 
  },
  { 
    name: "Yard Management System", 
    desc: "Complete yard tracking and management for freight and logistics operations", 
    icon: "fa-warehouse", 
    tags: ["ERPNext", "Logistics", "Yard Management"], 
    category: "erp" 
  }
];

// Render Projects
const projectsGrid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "all") {
  if (!projectsGrid) return;
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  projectsGrid.innerHTML = filtered.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-icon"><i class="fas ${project.icon}"></i></div>
      <h3>${project.name}</h3>
      <p>${project.desc}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

renderProjects();

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ===== EXPANDED SKILLS =====
const skills = [
  "Python", "JavaScript ES6+", "ERPNext", "Frappe Framework", 
  "HTML5/CSS3", "MySQL", "PostgreSQL", "API Development", 
  "Ubuntu/Linux", "Data Analytics", "React.js", "Node.js", 
  "Git/GitHub", "Docker", "Postman", "REST APIs", 
  "Agile/Scrum", "Mobile Development", "Weighbridge Integration", 
  "Waste Management Systems", "Manufacturing ERP", "Loan Management"
];

const skillsCloud = document.getElementById("skillsCloud");
if (skillsCloud) {
  skillsCloud.innerHTML = skills.map(skill => `<span>${skill}</span>`).join("");
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item, .project-card, .stat-box, .attribute-item, .contact-info-item, .edu-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== CANVAS BACKGROUND (ORBS) =====
const canvas = document.getElementById("orbCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const orbs = [];
  const orbCount = 8;

  for (let i = 0; i < orbCount; i++) {
    orbs.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 150 + 100,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.3 + 0.1
    });
  }

  function animateOrbs() {
    ctx.clearRect(0, 0, width, height);
    orbs.forEach(orb => {
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${orb.opacity})`;
      ctx.fill();
      
      orb.x += orb.speedX;
      orb.y += orb.speedY;
      
      if (orb.x + orb.radius > width) orb.x = -orb.radius;
      if (orb.x - orb.radius < 0) orb.x = width + orb.radius;
      if (orb.y + orb.radius > height) orb.y = -orb.radius;
      if (orb.y - orb.radius < 0) orb.y = height + orb.radius;
    });
    requestAnimationFrame(animateOrbs);
  }

  animateOrbs();

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

// ===== CV DOWNLOAD WITH CONFIRMATION MODAL =====
const cvDownloadBtn = document.getElementById('cvDownloadBtn');
const cvModal = document.getElementById('cvModal');
const cancelBtn = document.getElementById('cancelDownload');
const confirmBtn = document.getElementById('confirmDownload');

// UPDATED PATH - Use your actual CV file name
const cvPath = 'cv/KipronoDerrick_CV.pdf';  // ← Changed to your file name

// Open modal when CV button is clicked
if (cvDownloadBtn) {
  cvDownloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cvModal.classList.add('show');
  });
}

// Cancel download
if (cancelBtn) {
  cancelBtn.addEventListener('click', () => {
    cvModal.classList.remove('show');
  });
}

// Confirm download
if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    // Create download link
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Kiprono_Derrick_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal
    cvModal.classList.remove('show');
  });
}

// Close modal when clicking outside
if (cvModal) {
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      cvModal.classList.remove('show');
    }
  });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cvModal.classList.contains('show')) {
    cvModal.classList.remove('show');
  }
});