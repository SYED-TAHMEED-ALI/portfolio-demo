const data = {
  tahmeed: {
    name: "Syed Tahmeed Ali",
    role: "Flutter Developer | AI Enthusiast",
    about: "Final year Computer Science student graduating Jan 2026. Passionate about AI-based systems, Flutter apps, and UI/UX.",
    skills: ["Flutter & Firebase", "Python", "Machine Learning", "UI/UX Design"],
    projects: ["AI Attendance System", "Face Recognition App", "Flutter Mobile Apps"],
    contact: "Email: tahmeed@email.com"
  },
  sabiha: {
    name: "Sabiha Yaseen",
    role: "UI/UX Designer | Web Developer",
    about: "Creative CS student focused on usability, modern UI design, and web development.",
    skills: ["HTML, CSS, JS", "UI/UX Research", "Figma", "Usability Testing"],
    projects: ["WhatsApp Premium Redesign", "Portfolio Website", "UX Case Studies"],
    contact: "Email: sabiha@email.com"
  }
};

function showProfile(person) {
  const profile = document.getElementById("profile");
  profile.classList.remove("hidden");

  document.getElementById("name").innerText = data[person].name;
  document.getElementById("role").innerText = data[person].role;
  document.getElementById("about").innerText = data[person].about;

  document.getElementById("skills").innerHTML =
    data[person].skills.map(s => `<li>${s}</li>`).join("");

  document.getElementById("projects").innerHTML =
    data[person].projects.map(p => `<li>${p}</li>`).join("");

  document.getElementById("contact").innerText = data[person].contact;
}
