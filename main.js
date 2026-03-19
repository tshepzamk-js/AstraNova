function selectPhase(phaseValue, element) {
    // 1. Remove 'active' class from all items
    document.querySelectorAll('.phase-item').forEach(item => {
        item.classList.remove('active');

    });

    // 2. Add 'active' to clicked item
    element.classList.add('active');

    // 3. Update the hidden input so your existing code still works
    document.getElementById('grade-list').value = phaseValue;
    
    // Optional: Visual feedback
    console.log("Phase Selected: " + phaseValue);
}


const initBtn = document.getElementById('init-btn');
const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*$@+<>[]{}";

// 1. INITIALIZE BUTTON LOGIC
initBtn.onclick = () => {
  const name = document.getElementById('user-name').value;
  const grade = document.getElementById('grade-list').value;

  if (name === "") {
    alert("Please enter your name, Scholar.");
    return;
  }

  // Save to Memory
  localStorage.setItem('studentName', name);
  localStorage.setItem('studentGrade', grade);

  launchAcademy(name, grade);
};

// 2. NAVIGATION LOGIC
function launchAcademy(name, grade) {
  const portal = document.querySelector('portal-container');
  const dashboard = document.getElementById('dashboard-screen');
  const welcome = document.getElementById('welcome-msg');

  // 1. Hide the portal
  portal.style.display = 'none';

  // 2. Show the dashboard and force it to be a flexbox
  dashboard.style.display = 'flex'; 

  // 3. Run the animation
  decryptText(welcome, `Scholar: ${name}`);
  
  // 4. Load the subjects
  renderSubjects(grade);
}


  // Swap Screens
  style.display = 'none';
  dashboard.style.display = 'flex';
  dashboard.style.justifyContent = 'center';

  // Trigger Glitch Effect
  decryptText(welcome, `Scholar: ${name}`);
  
  renderSubjects(grade);

// 3. SUBJECT GENERATOR
function renderSubjects(grade) {
  const grid = document.getElementById('subject-grid');
  grid.innerHTML = ""; 

  let subjects = [];
  if (grade.includes('uni')) {
    subjects = ["Quantum Mechanics", "Data Structures", "Philosophy", "Neuroscience"];
  } else if (grade.includes('grade-10') || grade.includes('grade-12')) {
    subjects = ["Mathematics", "Physics", "History", "Literature"];
  } else {
    subjects = ["Reading", "Counting", "Drawing", "Music"];
  }

  subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.innerText = sub;
    btn.className = "subject-btn";
    btn.onclick = () => alert(`Loading ${sub} module...`);
    grid.appendChild(btn);
  });
}

// 4. THE GLITCH ENGINE
function decryptText(targetElement, finalWord) {
  let iteration = 0;
  const interval = setInterval(() => {
    targetElement.innerText = finalWord
      .split("")
      .map((letter, index) => {
        if (index < iteration) return finalWord[index];
        return symbols[Math.floor(Math.random() * symbols.length)];
      })
      .join("");

    if (iteration >= finalWord.length) clearInterval(interval);
    iteration += 1 / 3;
  }, 30);
}
