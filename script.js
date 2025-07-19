let currentSection = null;

function showSection(section) {
    if(currentSection == section){
        const content = document.getElementById('content');
        content.innerHTML = '<p>Select a section to view content.</p>';
        currentSection = null;
        return;
    }

    currentSection = section;

    if (section === 'experience') {
        loadExperience(content);
    //     content.innerHTML = `
    //   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <!-- Experience Card 1 -->
    //     <div class="bg-gray-50 p-6 rounded-xl shadow">
    //       <h3 class="text-xl font-semibold text-purple-700">Software Engineer</h3>
    //       <p class="text-gray-600">ABC Tech Pvt Ltd</p>
    //       <p class="text-sm text-gray-500 mb-3">Jan 2021 – Dec 2023</p>
    //       <ul class="list-disc list-inside text-left text-gray-700">
    //         <li>Built scalable APIs using .NET Core</li>
    //         <li>Led a team of 3 developers</li>
    //         <li>Integrated SQL Server and Entity Framework</li>
    //       </ul>
    //     </div>

    //     <!-- Experience Card 2 -->
    //     <div class="bg-gray-50 p-6 rounded-xl shadow">
    //       <h3 class="text-xl font-semibold text-purple-700">Backend Developer</h3>
    //       <p class="text-gray-600">XYZ Solutions</p>
    //       <p class="text-sm text-gray-500 mb-3">Aug 2019 – Dec 2020</p>
    //       <ul class="list-disc list-inside text-left text-gray-700">
    //         <li>Designed RESTful APIs</li>
    //         <li>Improved app performance by 40%</li>
    //         <li>Worked with microservice architecture</li>
    //       </ul>
    //     </div>
    //   </div>
    // `;
    }

    else if (section === 'certifications') {
        content.innerHTML = `<div class="relative w-full flex justify-center items-center">
            <div id="certCarousel" class="w-full max-w-md overflow-hidden relative">
                <div id="certSlides" class="flex transition-transform duration-500" style="transform: translateX(0);">
                <!-- Slide 1 -->
                <div class="min-w-full flex justify-center">
                    <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" alt="AWS Certification" class="rounded-xl shadow-xl max-w-[300px] max-h-[250px] object-contain">
                </div>
                </div>
            </div>

            <!-- Navigation (hidden for now since only one slide) -->
            <button id="prevCert" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full hidden">‹</button>
            <button id="nextCert" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full hidden">›</button>
            </div>`;
    }

    else if (section === 'skills') {
        content.innerHTML = `<!-- Skill Tabs -->
        <div class="flex flex-wrap gap-3 justify-center mb-6">
        ${['All', 'Programming', 'Frameworks', 'Cloud', 'Tools', 'Databases']
                    .map(tab => `
            <button onclick="filterSkills('${tab}')" class="tab-button bg-purple-100 hover:bg-purple-200 text-sm px-4 py-2 rounded-full shadow transition">
                ${tab}
            </button>
            `).join('')}
        </div>

        <!-- Skills Grid -->
        <div id="skillsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"></div>`;

        filterSkills('All');

    }
}


async function loadExperience(container) {
    try {
        const response = await fetch('./content.json');

        const data = await response.json();
        container.innerHTML = `
        <h2 class="text-xl font-bold mb-4">Experience</h2>
        <div id="experience-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        </div>
        `;

        const grid = document.getElementById('experience-grid');

        data.experience.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'bg-gray-50 p-6 rounded-xl shadow';

            card.innerHTML = `
            <h3 class="text-xl font-semibold text-purple-700">${exp.position}</h3>
                <p class="text-gray-600">${exp.company}</p>
                <p class="text-sm text-gray-500 mb-3">${exp.from} – ${exp.to}</p>
                <ul class="text-left text-gray-700 space-y-2">
                    ${exp.details.map(item => `
                    <li class="relative pl-6 before:content-['➤'] before:absolute before:left-0 before:text-purple-500">
                        ${item}
                    </li>
                    `).join('')}
                </ul>`;

            grid.appendChild(card);
        });
    } catch (err) {
        console.error('Error loading experience:', err);
    }
}


let currentSkillTab = 'All';
function filterSkills(category) {
    const grid = document.getElementById('skillsGrid');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Handle deselect if same tab is clicked again
    if (currentSkillTab === category) {
        category = 'All';
        currentSkillTab = 'All';
    } else {
        currentSkillTab = category;
    }

    // Highlight the active tab
    tabButtons.forEach(btn => {
        const text = btn.textContent.trim();
        if (text === category) {
            btn.classList.add('bg-purple-300', 'text-white');
        } else {
            btn.classList.remove('bg-purple-300', 'text-white');
        }
    });

    const skills = [
        {
            name: "C#",
            icon: "fa-solid fa-code",
            desc: "Used in backend APIs, microservices, and enterprise systems.",
            category: ["All", "Programming"]
        },
        {
            name: "Java",
            icon: "fa-brands fa-java",
            desc: "Built OOP projects and practiced in DSA and backend systems.",
            category: ["All", "Programming"]
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js",
            desc: "Used in frontend React apps and backend services.",
            category: ["All", "Programming", "Tools"]
        },
        {
            name: "ASP.NET Core",
            icon: "fa-solid fa-cubes",
            desc: "Developed high-performance REST APIs using Clean Architecture.",
            category: ["All", "Frameworks"]
        },
        {
            name: "Entity Framework",
            icon: "fa-solid fa-database",
            desc: "Handled DB context, migrations, and LINQ queries.",
            category: ["All", "Frameworks", "Databases"]
        },
        {
            name: "gRPC",
            icon: "fa-solid fa-link",
            desc: "Built contract-first services for internal microservice communication.",
            category: ["All", "Frameworks"]
        },
        {
            name: "AWS (Lambda, S3, DynamoDB)",
            icon: "fa-brands fa-aws",
            desc: "Serverless services, event-driven apps, data storage & queues.",
            category: ["All", "Cloud"]
        },
        {
            name: "Azure",
            icon: "fa-brands fa-microsoft",
            desc: "Used App Services, Functions, and SQL databases.",
            category: ["All", "Cloud"]
        },
        {
            name: "React.js",
            icon: "fa-brands fa-react",
            desc: "Frontend SPA development with hooks, state, and routing.",
            category: ["All", "Tools"]
        },
        {
            name: "Node.js",
            icon: "fa-brands fa-node-js",
            desc: "Backend services, CLI tools, and AWS integrations.",
            category: ["All", "Tools"]
        },
        {
            name: "MySQL",
            icon: "fa-solid fa-database",
            desc: "Structured relational database with stored procedures.",
            category: ["All", "Databases"]
        },
        {
            name: "DynamoDB",
            icon: "fa-solid fa-database",
            desc: "Scalable NoSQL used in AWS Lambda-based apps.",
            category: ["All", "Databases", "Cloud"]
        }
    ];

    grid.innerHTML = skills
        .filter(skill => skill.category.includes(category))
        .map(skill => `
      <div class="group bg-white/30 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div class="flex flex-col items-center text-center">
          <div class="text-white w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl mb-4 shadow-inner">
            <i class="${skill.icon}"></i>
          </div>
          <h3 class="text-lg font-semibold text-purple-800">${skill.name}</h3>
          <p class="text-gray-700 text-sm mt-2">${skill.desc}</p>
        </div>
      </div>
    `).join('');
}
const techQuotes = [
    "Ctrl+C, Ctrl+V — kidding. I swear I build things from scratch.",
    "Turning music into commits and bugs into features.",
    "Built to last. Not to impress.",
    "Design it once. Get it right.",
    "One function at a time, one bug less.",
    "No shortcuts. Just clean paths.",
    "Readable code outlives clever tricks.",
    "Think deep. Build simple.",
    "If it scales, it wins.",
    "The best UI is the one that disappears.",
    "Details aren’t extras. They’re everything.",
    "Fast is fine. Stable is better.",
    "Good architecture means fewer emergencies.",
    "Code less. Deliver more.",
    "The user never needs to know — that’s the goal.",
    "Maintainable code is future-proof code.",
    "Good systems don't scream; they just work.",
    "Simplicity isn't basic. It's deliberate.",
    "I don’t just write features. I engineer clarity.",
    "What’s not written is just as important.",
    "Less magic. More logic.",
    "Style is silent when structure is solid.",
    "Debugging is my second language.",
    "Logic before layers.",
    "Don’t just ship. Stabilize.",
    "Plan. Build. Rethink. Repeat.",
    "Solid code is silent.",
    "Tech changes. Principles don't.",
    "If it’s not testable, it’s not done.",
    "Ship fast. But don’t rush.",
    "Architecture is product thinking in disguise.",
    "Elegance = Simplicity × Clarity.",
    "I write for humans, not just machines."
];

let currentTagline = 0;
const taglineEl = document.getElementById('tagline');

setInterval(() => {
    // Fade out
    taglineEl.classList.add('opacity-0');

    setTimeout(() => {
        // Update quote
        currentTagline = (currentTagline + 1) % techQuotes.length;
        taglineEl.textContent = techQuotes[currentTagline];
        // Fade in
        taglineEl.classList.remove('opacity-0');
    }, 500); // match transition duration
}, 3000); // change every 4s