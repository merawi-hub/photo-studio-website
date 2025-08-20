// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

// Optional JS for background particle effect (unchanged)
const body = document.body;
for(let i=0;i<60;i++){
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random()*100+'%';
    particle.style.top = Math.random()*100+'%';
    particle.style.width = Math.random()*3+1+'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255,255,255,'+Math.random()+')';
    particle.style.position='absolute';
    particle.style.borderRadius='50%';
    particle.style.animation = `float ${(Math.random()*5)+5}s ease-in-out infinite alternate`;
    body.appendChild(particle);
}
