// Canvas Photo Studio Background
const canvas = document.getElementById('studio-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let icons = [];
const iconImages = [];
const iconCount = 50;

// Load camera icon
for(let i=0;i<iconCount;i++){
    let icon = {x:Math.random()*canvas.width, y:Math.random()*canvas.height,
                size:Math.random()*30+20, speedX:(Math.random()-0.5)*0.5, speedY:(Math.random()-0.5)*0.5};
    icons.push(icon);
}

// Draw simple camera shape for floating icons
function drawIcon(icon){
    ctx.fillStyle='rgba(255,255,255,0.3)';
    ctx.beginPath();
    ctx.rect(icon.x,icon.y,icon.size*1.2,icon.size);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(icon.x+icon.size*0.6,icon.y+icon.size*0.5,icon.size*0.3,0,Math.PI*2);
    ctx.fill();
}

function animateBackground(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    icons.forEach(icon=>{
        icon.x+=icon.speedX; icon.y+=icon.speedY;
        if(icon.x>canvas.width) icon.x=0;
        if(icon.x<0) icon.x=canvas.width;
        if(icon.y>canvas.height) icon.y=0;
        if(icon.y<0) icon.y=canvas.height;
        drawIcon(icon);
    });
    requestAnimationFrame(animateBackground);
}
animateBackground();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
filterButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach(item=>{
            if(filter==='all'||item.classList.contains(filter)){
                item.style.display='block';
                setTimeout(()=>{item.style.opacity='1';},50);
            }else{
                item.style.opacity='0';
                setTimeout(()=>{item.style.display='none';},300);
            }
        });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(item=>{
    item.addEventListener('click',()=>{
        lightbox.style.display='flex';
        lightboxImg.src = item.querySelector('img').src;
    });
});
closeBtn.addEventListener('click',()=>{lightbox.style.display='none';});
lightbox.addEventListener('click', e=>{if(e.target===lightbox) lightbox.style.display='none';});

// Staggered entrance for all images
galleryItems.forEach((item,index)=>{
    item.style.animationDelay = `${index*0.05}s`;
});
