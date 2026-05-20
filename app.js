const videos = [
    {id:1,title:"Hot summer vibes with Layla",desc:"Hot summer vibes - HD quality content",thumb:"https://i.ibb.co/v4mqFx5h/Picsart-26-04-27-18-27-49-646.jpg",video:"https://streamtape.com/v/drRmGWjo7BtGV3/SafeLightseagreenHousefly.mp4",views:"12.5K",likes:"892"},
    {id:2,title:"Sara's exclusive private session",desc:"Sara's exclusive private - 4K resolution",thumb:"https://i.ibb.co/GQkxcWWZ/Picsart-26-04-27-18-31-09-646.jpg",video:"https://streamtape.com/v/dpQYzYBkvxhkYQX/IgnorantLopsidedCony.mp4",views:"8.3K",likes:"567"},
    {id:3,title:"Mariam's late night entertainment",desc:"Mariam's late night - premium content",thumb:"https://i.ibb.co/kgpH5N0k/Picsart-26-04-27-18-24-56-193.jpg",video:"https://streamtape.com/v/Ge8BZ7XWWdT1K8g/GiddyRareKagu.mp4",views:"15.2K",likes:"1.1K"},
    {id:4,title:"Noor's dance special",desc:"Noor's dance special - HD video",thumb:"https://i.ibb.co/zVsrxYv7/Picsart-26-04-27-18-27-06-992.jpg",video:"https://streamtape.com/v/YexxJ1arl2SvApq/BewitchedTealKittiwake.mp4",views:"9.8K",likes:"734"},
    {id:5,title:"Lina's private collection",desc:"Lina's private collection - exclusive release",thumb:"https://i.ibb.co/rffXCFn8/Picsart-26-04-27-18-25-40-109.jpg",video:"https://streamtape.com/v/ygY3bdXzldFkW1/DisastrousFunctionalIriomotecat.mp4",views:"22.1K",likes:"1.8K"},
    {id:6,title:"Ruby UAE premium entertainment",desc:"Ruby UAE premium entertainment",thumb:"https://i.ibb.co/p63sMTy7/Picsart-26-04-27-18-29-33-300.jpg",video:"https://streamtape.com/v/M04Gv0p9j4ImaMO/MoistRosyTsetsefly.mp4",views:"7.4K",likes:"456"},
    {id:7,title:"Mia Qatar luxury content",desc:"Mia Qatar luxury content - HD",thumb:"https://i.ibb.co/NgFsxBmZ/Picsart-26-04-27-18-22-28-561.jpg",video:"https://streamtape.com/v/9lqeQr4qd9u6Od/FirmOutstandingTomtit.mp4",views:"18.9K",likes:"1.3K"},
    {id:8,title:"Zara Kuwait special video",desc:"Zara Kuwait special video",thumb:"https://i.ibb.co/chb07f4y/Picsart-26-04-27-18-29-02-426.jpg",video:"https://streamtape.com/v/Vmvp0k269jHKDOG/EnchantedCurlyVervet.mp4",views:"11.2K",likes:"823"},
    {id:9,title:"Lena Tunis - late night vibes",desc:"Lena Tunis - late night vibes",thumb:"https://i.ibb.co/m5hGHH6R/Picsart-26-04-27-18-23-23-419.jpg",video:"https://streamtape.com/v/OayrWy8JebIZbZm/ImmediateGoodBass.mp4",views:"14.7K",likes:"987"},
    {id:10,title:"Nadia Libya exclusive content",desc:"Nadia Libya exclusive content",thumb:"https://i.ibb.co/v6Gb5F8C/Picsart-26-04-27-18-22-55-661.jpg",video:"https://streamtape.com/v/MokeBkbOQkTG47/AgonizingSweatyGemsbuck.mp4",views:"6.5K",likes:"412"},
    {id:11,title:"Sophia Iraq entertainment HD",desc:"Sophia Iraq entertainment HD",thumb:"https://i.ibb.co/N2f3CJNj/Picsart-26-04-27-18-24-19-644.jpg",video:"https://streamtape.com/v/7mGZM7jwqqiYdr/GummyCornsilkChinchilla.mp4",views:"20.3K",likes:"1.5K"},
    {id:12,title:"Emma Sudan special content",desc:"Emma Sudan special content",thumb:"https://i.ibb.co/sdLq9XSs/Picsart-26-04-27-18-21-24-954.jpg",video:"https://streamtape.com/v/LpY1OAAeVviZ1V/cyberly.mp4",views:"13.8K",likes:"921"},
    {id:13,title:"Aisha Egypt private video",desc:"Aisha Egypt private video",thumb:"https://i.ibb.co/PsHG6RK0/IMG-20260427-181705-741.jpg",video:"https://streamtape.com/v/q7w7BoGzqOiyA0/cyberlycrush.mp4",views:"16.4K",likes:"1.1K"},
    {id:14,title:"Isabella Palestine HD",desc:"Isabella Palestine HD",thumb:"https://i.ibb.co/8LphP7dP/Picsart-26-04-27-18-26-20-441.jpg",video:"https://streamtape.com/v/kw1Xe4w4lXTOOgg/jade.mp4",views:"10.1K",likes:"678"},
    {id:15,title:"Ava Bahrain exclusive",desc:"Ava Bahrain exclusive",thumb:"https://i.ibb.co/3Y1Z4qZr/IMG-20260427-181705-711.jpg",video:"https://streamtape.com/v/kwyYooRBaGtOqBJ/milly.mp4",views:"19.6K",likes:"1.4K"},
    {id:16,title:"Charlotte Oman private",desc:"Charlotte Oman private",thumb:"https://i.ibb.co/RkMQbLmG/IMG-20260427-181705-295.jpg",video:"https://streamtape.com/v/Mk1y7xxPmXhw1D/rub.mp4",views:"8.9K",likes:"534"},
    {id:17,title:"Amelia Mauritania content",desc:"Amelia Mauritania content",thumb:"https://i.ibb.co/NngVMZP9/Picsart-26-04-27-18-20-38-260.jpg",video:"https://streamtape.com/v/jPPaBLj3kghzRAq/rubhup.mp4",views:"12.3K",likes:"845"},
    {id:18,title:"Olivia Sudan entertainment",desc:"Olivia Sudan entertainment",thumb:"https://i.ibb.co/RT6WqpCw/IMG-20260427-181705-269.jpg",video:"https://streamtape.com/v/GKkeL91q89C1XGe/Ruddy.mp4",views:"17.7K",likes:"1.2K"},
    {id:19,title:"Mia2 Qatar premium",desc:"Mia2 Qatar premium",thumb:"https://i.ibb.co/CDJP7wF/IMG-20260427-181705-661.jpg",video:"https://streamtape.com/v/ZwxX0VzQM4sqvLB/susan.mp4",views:"21.5K",likes:"1.6K"},
    {id:20,title:"Zara2 Kuwait HD",desc:"Zara2 Kuwait HD",thumb:"https://i.ibb.co/P08RzSY/Picsart-26-04-27-18-21-56-733.jpg",video:"https://streamtape.com/v/qMm3YmpLmXhzdv6/susanna.mp4",views:"14.9K",likes:"1K"}
];

const clicks = {};

function getTime() {
    const m = Math.floor(Math.random() * 18) + 3;
    const s = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return m + ':' + s;
}

function createCard(v) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = '<div class="video-thumb"><img src="' + v.thumb + '" alt="' + v.title + '" loading="lazy"><div class="blur-overlay"><div class="play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div><span class="badge badge-hd">HD</span><span class="badge badge-time">' + getTime() + '</span></div><div class="video-info"><h3 class="video-title">' + v.title + '</h3><div class="video-stats"><span>' + v.views + ' مشاهدة</span><span>' + v.likes + ' اعجاب</span></div></div>';
    card.addEventListener('click', function() { handleClick(v); });
    return card;
}

function handleClick(v) {
    if (!clicks[v.id]) clicks[v.id] = 0;
    clicks[v.id]++;
    if (clicks[v.id] === 1) { showAd(); }
    else if (clicks[v.id] === 2) { playVideo(v); setTimeout(function() { clicks[v.id] = 0; }, 500); }
}

function showAd() { document.getElementById('adPopup').classList.add('active'); }
function closeAdPopup() { document.getElementById('adPopup').classList.remove('active'); }

function playVideo(v) {
    closeAdPopup();
    document.getElementById('modalTitle').textContent = v.title;
    document.getElementById('modalViews').textContent = v.views + ' مشاهدة';
    document.getElementById('modalLikes').textContent = v.likes + ' اعجاب';
    document.getElementById('modalDesc').textContent = v.desc;
    const blur = document.getElementById('blurPreview');
    const iframe = document.getElementById('videoIframe');
    blur.style.backgroundImage = 'url(' + v.thumb + ')';
    blur.classList.remove('hidden');
    document.getElementById('videoModal').classList.add('active');
    setTimeout(function() { iframe.src = v.video; blur.classList.add('hidden'); }, 600);
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('active');
    document.getElementById('videoIframe').src = '';
    document.getElementById('blurPreview').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('videoGrid');
    videos.forEach(function(v) { grid.appendChild(createCard(v)); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { closeVideoModal(); closeAdPopup(); } });
});