const projectList = document.getElementById("projectList");
const projects = [
  { category: "graphic", title: "南臺灣®- 品牌視覺識別設計", img: "images/nantaiwan.png" , link: "https://www.behance.net/gallery/213101557/_" },
  { category: "ui", title: "摳以購物品牌ui設計", img: "images/coin.png" , link: "https://www.behance.net/gallery/211713543/ui" },
  { category: "graphic", title: "芒果農創玫瑰綠柏園觀光工廠｜展區大圖、菜單及攝影｜", img: "images/greenpark.png" , link: "https://www.behance.net/gallery/213366925/_" },
    { category: "graphic", title: "六一睡眠館｜品牌估價單封套與名片", img: "images/61.png" , link: "https://www.behance.net/gallery/213268163/_" },
        { category: "graphic", title: "不只是沙拉｜店面大型圖像與菜單設計", img: "images/salad.png" , link: "https://www.behance.net/gallery/213279815/_" },
          { category: "graphic", title: "南台灣網路電商廣告素材圖", img: "images/ecommerce.png" , link: "https://www.behance.net/gallery/213449961/_" }
  
];

function renderProjects(filter) {
  projectList.innerHTML = "";
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  filtered.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    const cardContent = `
      <div class="card h-100">
        <img src="${project.img}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
        </div>
      </div>
    `;

    col.innerHTML = project.link
      ? `<a href="${project.link}" target="_blank" class="text-decoration-none text-dark">${cardContent}</a>`
      : cardContent;

    projectList.appendChild(col);
  });
}


function filterProjects(type) {
  document.querySelectorAll('.filter-btns button').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.filter-btns button')).find(b => b.textContent.includes(type === 'all' ? '全部' : type === 'graphic' ? '平面' : 'UI'));
  if (activeBtn) activeBtn.classList.add('active');
  renderProjects(type);
}

window.onload = () => {
  renderProjects('all');
};


// 按鈕顯示與隱藏
window.addEventListener('scroll', function() {
  const button = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// 按下後平滑滾動回頂部
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
