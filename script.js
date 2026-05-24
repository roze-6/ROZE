const videos = [
    { thumb: "https://i.ibb.co/v4mqFx5h/Picsart-26-04-27-18-27-49-646.jpg", embed: "https://streamtape.com/v/drRmGWjo7BtGV3/SafeLightseagreenHousefly.mp4", title: "Hot summer vibes with Layla - HD quality content" },
    { thumb: "https://i.ibb.co/GQkxcWWZ/Picsart-26-04-27-18-31-09-646.jpg", embed: "https://streamtape.com/v/dpQYzYBkvxhkYQX/IgnorantLopsidedCony.mp4", title: "Sara's exclusive private session - 4K resolution" },
    { thumb: "https://i.ibb.co/kgpH5N0k/Picsart-26-04-27-18-24-56-193.jpg", embed: "https://streamtape.com/v/Ge8BZ7XWWdT1K8g/GiddyRareKagu.mp4", title: "Mariam's late night entertainment - premium content" },
    { thumb: "https://i.ibb.co/zVsrxYv7/Picsart-26-04-27-18-27-06-992.jpg", embed: "https://streamtape.com/v/YexxJ1arl2SvApq/BewitchedTealKittiwake.mp4", title: "Noor's dance special - HD video" },
    { thumb: "https://i.ibb.co/rffXCFn8/Picsart-26-04-27-18-25-40-109.jpg", embed: "https://streamtape.com/v/ygY3bdXzldFkW1/DisastrousFunctionalIriomotecat.mp4", title: "Lina's private collection - exclusive release" },
    { thumb: "https://i.ibb.co/p63sMTy7/Picsart-26-04-27-18-29-33-300.jpg", embed: "https://streamtape.com/v/M04Gv0p9j4ImaMO/MoistRosyTsetsefly.mp4", title: "Ruby UAE premium entertainment" },
    { thumb: "https://i.ibb.co/NgFsxBmZ/Picsart-26-04-27-18-22-28-561.jpg", embed: "https://streamtape.com/v/9lqeQr4qd9u6Od/FirmOutstandingTomtit.mp4", title: "Mia Qatar luxury content - HD" },
    { thumb: "https://i.ibb.co/chb07f4y/Picsart-26-04-27-18-29-02-426.jpg", embed: "https://streamtape.com/v/Vmvp0k269jHKDOG/EnchantedCurlyVervet.mp4", title: "Zara Kuwait special video" },
    { thumb: "https://i.ibb.co/m5hGHH6R/Picsart-26-04-27-18-23-23-419.jpg", embed: "https://streamtape.com/v/OayrWy8JebIZbZm/ImmediateGoodBass.mp4", title: "Lena Tunis - late night vibes" },
    { thumb: "https://i.ibb.co/v6Gb5F8C/Picsart-26-04-27-18-22-55-661.jpg", embed: "https://streamtape.com/v/MokeBkbOQkTG47/AgonizingSweatyGemsbuck.mp4", title: "Nadia Libya exclusive content" },
    { thumb: "https://i.ibb.co/N2f3CJNj/Picsart-26-04-27-18-24-19-644.jpg", embed: "https://streamtape.com/v/7mGZM7jwqqiYdr/GummyCornsilkChinchilla.mp4", title: "Sophia Iraq entertainment HD" },
    { thumb: "https://i.ibb.co/sdLq9XSs/Picsart-26-04-27-18-21-24-954.jpg", embed: "https://streamtape.com/v/LpY1OAAeVviZ1V/cyberly.mp4", title: "Emma Sudan special content" },
    { thumb: "https://i.ibb.co/PsHG6RK0/IMG-20260427-181705-741.jpg", embed: "https://streamtape.com/v/q7w7BoGzqOiyA0/cyberlycrush.mp4", title: "Aisha Egypt private video" },
    { thumb: "https://i.ibb.co/8LphP7dP/Picsart-26-04-27-18-26-20-441.jpg", embed: "https://streamtape.com/v/kw1Xe4w4lXTOOgg/jade.mp4", title: "Isabella Palestine HD" },
    { thumb: "https://i.ibb.co/3Y1Z4qZr/IMG-20260427-181705-711.jpg", embed: "https://streamtape.com/v/kwyYooRBaGtOqBJ/milly.mp4", title: "Ava Bahrain exclusive" },
    { thumb: "https://i.ibb.co/RkMQbLmG/IMG-20260427-181705-295.jpg", embed: "https://streamtape.com/v/M04Gv0p9j4ImaMO/MoistRosyTsetsefly.mp4", title: "Charlotte Oman private" },
    { thumb: "https://i.ibb.co/NngVMZP9/Picsart-26-04-27-18-20-38-260.jpg", embed: "https://streamtape.com/v/Mk1y7xxPmXhw1D/rub.mp4", title: "Amelia Mauritania content" },
    { thumb: "https://i.ibb.co/RT6WqpCw/IMG-20260427-181705-269.jpg", embed: "https://streamtape.com/v/jPPaBLj3kghzRAq/rubhup.mp4", title: "Olivia Sudan entertainment" },
    { thumb: "https://i.ibb.co/CDJP7wF/IMG-20260427-181705-661.jpg", embed: "https://streamtape.com/v/GKkeL91q89C1XGe/Ruddy.mp4", title: "Mia2 Qatar premium" },
    { thumb: "https://i.ibb.co/P08RzSY/Picsart-26-04-27-18-21-56-733.jpg", embed: "https://streamtape.com/v/ZwxX0VzQM4sqvLB/susan.mp4", title: "Zara2 Kuwait HD" }
];

function renderVideos(data) {
    const container = document.getElementById('videoGrid');
    container.innerHTML = '';data.forEach(function(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        card.innerHTML = 
            '<div class="thumbnail-container">' +
                '<img src="' + video.thumb + '" alt="' + video.title + '">' +
                '<div class="play-button"><i class="fas fa-play"></i></div>' +
            '</div>' +
            '<div class="video-info">' +
                '<h3>' + video.title + '</h3>' +
            '</div>';
        
        card.addEventListener('click', function() {
            window.open(video.embed, '_blank');
        });
        
        container.appendChild(card);
    });
}

// Search
document.getElementById('searchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    
    if (term === '') {
        renderVideos(videos);
    } else {
        const filtered = videos.filter(function(video) {
            return video.title.toLowerCase().includes(term);
        });
        renderVideos(filtered);
    }
});

// Initial Load
renderVideos(videos);