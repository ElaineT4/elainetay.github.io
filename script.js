const modal = document.getElementById("project-modal");
const video = document.getElementById("project-video");
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const duration = document.getElementById("project-duration");
const tagsContainer = document.getElementById("project-tags");
const closeBtn = document.querySelector(".close-btn");

const modalContent = document.querySelector(".modal-content");
const imageSliderId = "image-slider";

const projectsData = {
  "PlantCare Monitoring System": {
    type: "video",
    videoSrc: "Website/Video/PlantCare System.mp4",
    description: "PlantCare System is a A smart system to monitor plant health using IoT sensors. The system that integrates Arduino hardware to monitor and provide real-time feedback on indoor plant environment. The readings collected from the hardware will be analyzed and stored in the database and users will be alerted when the readings are out of normal range.",
    duration: "2 months",
    tools: ["Arduino IDE", "JavaScript", "PHP", "MySQL", "HTML/CSS"]
  },
  "PediaSure": {
    type: "video",
    videoSrc: "Website/Video/PediaSure.mkv",
    description: "The Pediasure microsite is a dynamic and user-friendly platform designed to introduce the new Strawberry flavor in the Pediasure Gold series. It features a promotional video that highlights the new flavor's key benefits, providing an engaging and informative experience for users. The site was built with a focus on creating a seamless and interactive experience for parents and caregivers, making it easy to explore the product's information and appeal",
    duration: "2 months",
    tools: ["HTML/CSS", "JavaScript"]
  },
  "Instagraham": {
    type: "video",
    videoSrc: "Website/Video/Instagraham.mkv",
    description: "Instagraham is a website that aim to provide a platform where users can create an account to upload pictures. Users can add title and comments to image uploaded. Users can also express their personality through user profile that will be generated for every account registered. The user profile will include a username, email address, gender and also a bio for users to introduce and describe themselves. Users can view and edit their personal information on the profile page. Users can also delete their accounts through this page.",
    duration: "1 months",
    tools: ["PHP", "MySQL", "HTML/CSS"]
  },
  "Foodies.MY": {
    type: "image",
    imageSrc: "Website/Foodies.MY/Foodies.MY.png",
    description: "Foodies.MY is a website that work as a guide for Malaysian food lovers. Users can search best food or restaurants and cafes around their preferred areas.  Users can also find more information by searching dish name, select their preferred area, and also through articles, food attractions as well as top ranking dishes features in the website.  ",
    duration: "1 months",
    tools: ["HTML/CSS"]
  },
  "YPC AI Chatbot": {
    type: "image",
    imageSrc: "Website/YPC AI Chatbot/Screenshot 2025-03-23 203547.png",
    description: "YPC AI Chatbot is a virtual assistant designed for YPC students, that integrates with Google Classroom to provide academic-related responses based on available course information.",
    duration: "6 months",
    tools: ["Python", "Flask", "MySQL", "HTML/CSS"]
  },
  "Aries": {
    type: "video",
    videoSrc: "Animation/Aries.mp4",
    description: "Aries is a short animation that introduces a horoscope-themed character inspired by the Aries zodiac sign. The animation showcases the character’s different expressions and movements such as eating grass, moving head and jumping that highlights its personality.",
    duration: "2 weeks",
    tools: ["Illustrator", "Animate"]
  },
  "An Unlucky Day": {
    type: "video",
    videoSrc: "Animation/An Unlucky Day.mp4",
    description: "This animation follows a boy who wakes up early in a good mood, ready for his usual school day. He goes through his morning routine—brushing his teeth, eating breakfast, and heading out. However, upon arriving at school, he discovers that it's a public holiday and the school is closed. Shocked and disappointed, he heads back home, realizing his day isn't going as planned.",
    duration: "3 weeks",
    tools: ["Photoshop", "Illustrator"]
  },
  "BasketShot": {
    type: "slider",
    images: [
      "Game/BasketShot/BasketShot-1.png",
      "Game/BasketShot/BasketShot-2.png",
      "Game/BasketShot/BasketShot-3.png",
      "Game/BasketShot/BasketShot-4.png"
    ],
    description: "Basketshot is a 3D game created with Unreal Engine. The game simulates the real-world basketball motion such as accurate ball trajectories, bounces and interactions with various surfaces that enhance the realism of player movements and ball interactions.",
    duration: "1 months",
    tools: ["Unreal Engine"]
  },
  "Tetris": {
    type: "image",
    imageSrc: "Game/Moonlight_Tetris.png",
    description: "Tetris is an interactive web game featured on Moonlight, a portfolio website that blends astrology with creativity to showcase the talents of each team member.",
    duration: "1 week",
    tools: ["HTML/CSS", "JavaScript"]
  },
  "Hustle& Bustle": {
    type: "image",
    imageSrc: "Typography/Typography-1.PNG",
    duration: "1 day",
    tools: ["Photoshop"]
  },
  "Escape": {
    type: "image",
    imageSrc: "Typography/Typography-2.PNG",
    duration: "1 day",
    tools: ["Illustrator"]
  },
  "Dancing": {
    type: "image",
    imageSrc: "Typography/Typography-3.PNG",
    duration: "1 day",
    tools: ["Illustrator"]
  },
  "Stay cool": {
    type: "image",
    imageSrc: "Typography/Typography-4.PNG",
    duration: "1 day",
    tools: ["Illustrator"]
  },
  "Fire": {
    type: "image",
    imageSrc: "Typography/Typography-5.PNG",
    duration: "1 day",
    tools: ["Illustrator"]
  }
  
};



document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectName = card.querySelector("h3").textContent;
    const data = projectsData[projectName];

    if (!data) return;

    // Reset
    video.style.display = "none";
    const existingSlider = document.getElementById(imageSliderId);
    if (existingSlider) existingSlider.remove();

    title.textContent = projectName;
    description.textContent = data.description || "";
    duration.textContent = data.duration || "";

    tagsContainer.innerHTML = "";
    (data.tools || []).forEach(tool => {
      const span = document.createElement("span");
      span.textContent = tool;
      tagsContainer.appendChild(span);
    });

    if (data.type === "video") {
      video.src = data.videoSrc;
      video.style.display = "block";
    } else if (data.type === "image") {
      const img = document.createElement("img");
      img.src = data.imageSrc;
      img.alt = projectName;
      img.style.maxWidth = "100%";
      img.style.marginTop = "20px";
      modalContent.insertBefore(img, tagsContainer);
    } else if (data.type === "slider") {
      const slider = document.createElement("div");
      slider.id = imageSliderId;
      slider.classList.add("slider");

      let current = 0;

      const img = document.createElement("img");
      img.src = data.images[current];
      slider.appendChild(img);

      const prevBtn = document.createElement("button");
      prevBtn.textContent = "‹";
      prevBtn.classList.add("slider-btn", "prev");

      const nextBtn = document.createElement("button");
      nextBtn.textContent = "›";
      nextBtn.classList.add("slider-btn", "next");

      prevBtn.addEventListener("click", () => {
        current = (current - 1 + data.images.length) % data.images.length;
        img.src = data.images[current];
      });

      nextBtn.addEventListener("click", () => {
        current = (current + 1) % data.images.length;
        img.src = data.images[current];
      });

      slider.appendChild(prevBtn);
      slider.appendChild(nextBtn);

      modalContent.insertBefore(slider, tagsContainer);
    }

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();

  // Remove any added image or slider
  const existingImg = modalContent.querySelector("img:not(.icon)");
  const slider = document.getElementById(imageSliderId);
  if (existingImg) existingImg.remove();
  if (slider) slider.remove();
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    video.pause();
    const img = modalContent.querySelector("img:not(.icon)");
    const slider = document.getElementById(imageSliderId);
    if (img) img.remove();
    if (slider) slider.remove();
  }
});
