// Initialize EmailJS
(function () {
    // THAY THẾ 'YOUR_PUBLIC_KEY' BẰNG PUBLIC KEY CỦA BẠN TỪ EMAILJS
    emailjs.init("EoCgcMU5fenXntzBeY");
})();

// i18n Dictionary
const translations = {
    vn: {
        "nav.home": "Trang chủ",
        "nav.about": "Giới thiệu",
        "nav.metrics": "Chỉ số",
        "nav.services": "Dịch vụ",
        "nav.blog": "Blog",
        "nav.contact": "Liên hệ",
        "hero.quote": "Chuyên gia Performance Marketing với tư duy dữ liệu sắc bén, kết hợp nền tảng kỹ thuật để tối ưu hóa chiến dịch đa kênh và thúc đẩy tăng trưởng doanh thu thực chiến.",
        "hero.btn1": "NHẬN TƯ VẤN",
        "hero.btn2": "XEM DỊCH VỤ",
        "hero.role": "Chuyên gia Digital Marketing",
        "about.title1": "Về",
        "about.title2": "Tôi",
        "about.bio": "Là một chuyên gia Digital Marketing kiêm Full Stack Developer (ReactJS, .NET Core), tôi mang tư duy kỹ thuật vào việc tối ưu hóa quảng cáo đa nền tảng và xây dựng hệ thống website hiệu suất cao, giúp doanh nghiệp đạt lợi thế cạnh tranh vượt trội.",
        "about.skillsTitle": "Kỹ năng chuyên môn",
        "about.timelineTitle": "Hành trình phát triển",
        "about.job1Date": "Tháng 3/2025 - Nay",
        "about.job1Title": "Marketing Executive tại FLG Company",
        "about.job1Desc": "Quản lý chiến dịch quảng cáo Facebook & TikTok Ads. Tập trung phát triển content, A/B testing, phân tích dữ liệu và tối ưu ngân sách.",
        "about.job2Date": "Tháng 2/2023 - Nay",
        "about.job2Title": "Freelancer Marketing & Developer",
        "about.job2Desc": "Quản lý quảng cáo (FB, IG, TikTok), SEO và lập trình Website/Landing Page. Ứng dụng AI và chiến lược marketing thực chiến cho khách hàng.",
        "about.job3Date": "2018 - 2025",
        "about.job3Title": "Cử nhân Đại học HUTECH",
        "about.job3Desc": "Tốt nghiệp với GPA 2.52/4.0. Nền tảng vững chắc về Khoa học dữ liệu (Machine Learning, Big Data), Kiểm thử tự động và lập trình Full Stack.",
        "about.portfolioNote": "* Chi tiết hồ sơ đầy đủ tại",
        "metrics.title1": "Con số",
        "metrics.title2": "Ấn tượng",
        "metrics.subtitle": "Những kết quả biết nói chứng minh năng lực thực chiến",
        "metrics.item1": "Ngân Sách Tối Ưu",
        "metrics.item2": "Chiến Dịch Hiệu Quả",
        "metrics.item3": "Hỗ Trợ Miễn Phí",
        "metrics.item4": "Tăng Trưởng ROAS",
        "services.title1": "Dịch vụ",
        "services.title2": "Chuyên sâu",
        "services.subtitle": "Giải pháp toàn diện cho sự phát triển thương hiệu của bạn",
        "services.item1Title": "Tăng tương tác MXH",
        "services.item1Desc": "Xây dựng cộng đồng, tăng cường tương tác thật trên các nền tảng Facebook, Instagram, TikTok.",
        "services.item2Title": "Tài khoản AI Premium",
        "services.item2Desc": "Cung cấp các công cụ AI cao cấp giúp tự động hóa và tối ưu quy trình làm việc.",
        "services.item3Title": "Quảng cáo & Build Page",
        "services.item3Desc": "Setup chiến dịch quảng cáo chuyển đổi cao và xây dựng landing page/fanpage chuẩn SEO.",
        "services.item4Title": "Gói VIP Tương tác",
        "services.item4Desc": "Giải pháp đặc quyền đảm bảo lượng tương tác ổn định và chất lượng cao cho thương hiệu.",
        "services.item5Title": "Đánh giá & Map",
        "services.item5Desc": "Tối ưu hóa Google Maps, tăng cường đánh giá tích cực để nâng cao uy tín doanh nghiệp.",
        "services.item6Title": "Tích xanh nền tảng",
        "services.item6Desc": "Hỗ trợ quy trình lên tích xanh chính chủ trên các mạng xã hội phổ biến một cách nhanh chóng.",
        "blog.titleHighlight": "Kiến Thức",
        "blog.subtitle": "Những bài viết chia sẻ kinh nghiệm thực chiến mới nhất 2026",
        "blog.readMore": "Đọc tiếp",
        "contact.title1": "Hãy bắt đầu",
        "contact.title2": "Dự án mới",
        "contact.subtitle": "Sẵn sàng đưa doanh nghiệp của bạn lên một tầm cao mới? Hãy liên hệ ngay hôm nay.",
        "contact.email": "Email",
        "contact.phone": "Điện thoại",
        "contact.formName": "Họ và tên",
        "contact.formEmail": "Email của bạn",
        "contact.formMessage": "Nội dung tin nhắn..."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.metrics": "Metrics",
        "nav.services": "Services",
        "nav.blog": "Blog",
        "nav.contact": "Contact",
        "hero.quote": "Performance Marketing expert leveraging data-driven insights and technical foundations to optimize multichannel campaigns and drive measurable business growth.",
        "hero.btn1": "GET CONSULTATION",
        "hero.btn2": "VIEW SERVICES",
        "hero.role": "Digital Marketing Expert",
        "about.title1": "About",
        "about.title2": "Me",
        "about.bio": "As a Digital Marketing expert and Full Stack Developer (ReactJS, .NET Core), I bring technical mindset into optimizing multi-platform ads and building high-performance websites, giving businesses a competitive edge.",
        "about.skillsTitle": "Professional Skills",
        "about.timelineTitle": "My Journey",
        "about.job1Date": "Mar 2025 - Present",
        "about.job1Title": "Marketing Executive at FLG Company",
        "about.job1Desc": "Manage Facebook & TikTok Ads campaigns. Focus on content development, A/B testing, data analysis and budget optimization.",
        "about.job2Date": "Feb 2023 - Present",
        "about.job2Title": "Freelance Marketer & Developer",
        "about.job2Desc": "Manage ads (FB, IG, TikTok), SEO and Website/Landing Page development. Apply AI and practical marketing strategies for clients.",
        "about.job3Date": "2018 - 2025",
        "about.job3Title": "Bachelor at HUTECH University",
        "about.job3Desc": "Graduated with 2.52/4.0 GPA. Solid foundation in Data Science (Machine Learning, Big Data), Automation Testing and Full Stack development.",
        "about.portfolioNote": "* Full profile available at",
        "metrics.title1": "Impressive",
        "metrics.title2": "Numbers",
        "metrics.subtitle": "Results that speak for practical capabilities",
        "metrics.item1": "Budget Optimized",
        "metrics.item2": "Effective Campaigns",
        "metrics.item3": "Free Support",
        "metrics.item4": "ROAS Growth",
        "services.title1": "Specialized",
        "services.title2": "Services",
        "services.subtitle": "Comprehensive solutions for your brand development",
        "services.item1Title": "Social Media Engagement",
        "services.item1Desc": "Build communities, increase real engagement on Facebook, Instagram, TikTok platforms.",
        "services.item2Title": "Premium AI Accounts",
        "services.item2Desc": "Provide premium AI tools to automate and optimize workflows.",
        "services.item3Title": "Ads & Page Building",
        "services.item3Desc": "Setup high-conversion ad campaigns and build SEO-standard landing pages/fanpages.",
        "services.item4Title": "VIP Engagement Package",
        "services.item4Desc": "Exclusive solutions ensuring stable and high-quality engagement for the brand.",
        "services.item5Title": "Reviews & Maps",
        "services.item5Desc": "Optimize Google Maps, enhance positive reviews to boost business reputation.",
        "services.item6Title": "Platform Verification",
        "services.item6Desc": "Support the process of getting official verified badges on popular social networks quickly.",
        "blog.titleHighlight": "Knowledge",
        "blog.subtitle": "Latest practical experience sharing articles in 2026",
        "blog.readMore": "Read more",
        "contact.title1": "Start a",
        "contact.title2": "New Project",
        "contact.subtitle": "Ready to take your business to the next level? Contact me today.",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.formName": "Full Name",
        "contact.formEmail": "Your Email",
        "contact.formMessage": "Message content..."
    }
};

// Blog Posts Content
const blogPosts = {
    vn: {
        "capi": `
            <p>Trong kỷ nguyên hậu-cookie (Post-Cookie Era), việc theo dõi dữ liệu người dùng trở nên khó khăn hơn bao giờ hết. Khi iOS 14.5+ và các trình duyệt lớn chặn Third-party Cookies, các Marketer đang đối mặt với bài toán hao hụt dữ liệu lên đến 40%. <strong>Meta Conversions API (CAPI)</strong> không chỉ là một công cụ bổ trợ, mà là xương sống của mọi chiến dịch quảng cáo hiệu quả trong năm 2026.</p>
            <h3>Tại sao trình duyệt không còn đủ tin cậy?</h3>
            <p>Theo dõi dựa trên trình duyệt (Browser-side tracking) dễ bị ảnh hưởng bởi Ad-blockers, lỗi tải script và chính sách quyền riêng tư của thiết bị. CAPI giải quyết vấn đề này bằng cách thiết lập một "đường ống dẫn dữ liệu" trực tiếp từ Server của bạn đến Meta.</p>
            <h3>Lợi ích cốt lõi từ giải pháp Server-Side Tracking:</h3>
            <ul>
                <li><strong>Ghi nhận chuyển đổi chính xác:</strong> Giảm thiểu tối đa tình trạng "mất đơn" trong báo cáo quảng cáo.</li>
                <li><strong>Điểm chất lượng sự kiện (EMQ):</strong> Gửi dữ liệu khách hàng (Email, SĐT đã băm) giúp Meta khớp đối tượng nhanh hơn, từ đó máy học (Machine Learning) tối ưu tệp khách hàng tiềm năng chính xác hơn.</li>
                <li><strong>Cá nhân hóa quảng cáo:</strong> Hiểu rõ hành trình khách hàng để triển khai Retargeting đúng thời điểm.</li>
            </ul>
            <p>Tôi chuyên triển khai CAPI thông qua <strong>Google Tag Manager Server-Side</strong>, kết hợp với các nền tảng như Stape hoặc Google Cloud để đảm bảo hệ thống vận hành ổn định với chi phí thấp nhất.</p>
        `,
        "ai-creative": `
            <p>Trong quảng cáo Facebook & TikTok hiện đại, thuật toán đã quá thông minh để tự tìm kiếm khách hàng, nhưng nó cần "nhiên liệu" – đó chính là <strong>Creative (Nội dung sáng tạo)</strong>. Một chiến dịch không thể scale nếu bạn chỉ có 1-2 mẫu quảng cáo. Quy trình tôi xây dựng không chỉ là dùng AI để viết chữ, mà là một <strong>hệ thống sản xuất nội dung quy mô lớn</strong> giúp bứt phá giới hạn sáng tạo.</p>
            <h3>Tại sao 200 mẫu mới là con số đủ?</h3>
            <p>Khán giả ngày nay mắc chứng "mỏi mắt quảng cáo" (Ad Fatigue) rất nhanh. Để duy trì ROAS ổn định, bạn cần liên tục đổi mới góc tiếp cận (Angles). 200 mẫu content variants bao gồm sự kết hợp của: 10 hooks khác nhau, 5 tệp hình ảnh/video nền và 4 thông điệp kêu gọi hành động (CTA).</p>
            <h3>Quy trình thực chiến 4 giai đoạn:</h3>
            <ul>
                <li><strong>Giai đoạn 1: Data-Driven Insight (GPT-4o/Gemini):</strong> Tôi sử dụng AI để phân tích 500+ bình luận của khách hàng đối thủ, trích xuất ra những "nỗi đau" thầm kín nhất mà họ chưa được giải quyết.</li>
                <li><strong>Giai đoạn 2: Visual Concept (Midjourney V6):</strong> Thay vì chụp ảnh sản phẩm thông thường, tôi tạo ra các concept hình ảnh siêu thực, kích thích thị giác mạnh mẽ để dừng ngón tay người dùng (Thumb-stop).</li>
                <li><strong>Giai đoạn 3: Batch Video Production (CapCut AI/Gen-3):</strong> Tự động hóa việc ghép voiceover AI đa giọng điệu, chèn phụ đề động và hiệu ứng chuyển cảnh dựa trên kịch bản đã tối ưu.</li>
                <li><strong>Giai đoạn 4: A/B Testing & Win-Rate Analysis:</strong> Đưa 200 mẫu vào chiến dịch thử nghiệm ngân sách thấp để tìm ra "Big Win" và scale ngân sách cho mẫu đó.</li>
            </ul>
            <p>Kết quả thực tế: Giảm 45% chi phí sản xuất, tăng 2.5 lần tỷ lệ click (CTR) và quan trọng nhất là giải phóng sức lao động để tập trung vào chiến lược tổng thể.</p>
        `,
        "seo-perf": `
            <p>Một Landing Page đẹp nhưng tải chậm cũng giống như một cửa hàng sang trọng nhưng luôn đóng cửa. Nghiên cứu chỉ ra rằng, <strong>chỉ cần chậm 1 giây, tỷ lệ chuyển đổi của bạn sẽ giảm 7%</strong>. Tốc độ trang không chỉ là vấn đề kỹ thuật, nó là vấn đề về tiền bạc.</p>
            <h3>Tiêu chuẩn "Vàng" cho Landing Page 2026:</h3>
            <ul>
                <li><strong>Core Web Vitals:</strong> LCP dưới 2.5s, FID dưới 100ms và CLS dưới 0.1. Đây là những chỉ số Google dùng để xếp hạng trang web của bạn.</li>
                <li><strong>Mobile First:</strong> 90% traffic đến từ điện thoại. Landing Page phải được tối ưu hiển thị và tốc độ trên các thiết bị di động tầm trung.</li>
                <li><strong>Điểm chất lượng (Quality Score):</strong> Trang tải nhanh và nội dung phù hợp giúp điểm chất lượng quảng cáo cao hơn, từ đó giá thầu (CPC) rẻ hơn.</li>
            </ul>
            <h3>Kỹ thuật tối ưu hóa tôi thực hiện:</h3>
            <p>Tôi không chỉ dùng các plugin có sẵn. Tôi tối ưu sâu vào mã nguồn: Loại bỏ CSS/JS dư thừa, sử dụng định dạng ảnh thế hệ mới (WebP/Avif), triển khai CDN và tối ưu hóa phản hồi từ máy chủ (Server Response Time). Mục tiêu cuối cùng là mang lại trải nghiệm mượt mà nhất, khiến khách hàng không thể rời đi trước khi nhấn nút mua hàng.</p>
        `,
        "omnichannel": `
            <p>Trong năm 2026, hành trình mua hàng của khách hàng không còn là một đường thẳng. Họ có thể thấy quảng cáo trên TikTok, tìm kiếm thông tin trên Google và cuối cùng ra quyết định mua hàng sau khi thấy một mẩu Retargeting trên Facebook. Chiến lược <strong>Omnichannel (Đa kênh)</strong> là cách chúng ta bao vây tâm trí khách hàng.</p>
            <h3>Sự phối hợp hoàn hảo giữa các nền tảng:</h3>
            <ul>
                <li><strong>TikTok Ads:</strong> Đóng vai trò "mồi lửa" tạo sự chú ý (Awareness) và khơi gợi nhu cầu bằng các video ngắn sáng tạo.</li>
                <li><strong>Meta Ads (FB/IG):</strong> Giữ vai trò nuôi dưỡng (Nurturing) và thúc đẩy chuyển đổi thông qua các định dạng quảng cáo Carousel và Collection.</li>
                <li><strong>Google Ads (Search/Shopping):</strong> Đón đầu những khách hàng đã có ý định mua hàng rõ rệt, đảm bảo thương hiệu của bạn xuất hiện ngay khi họ tìm kiếm.</li>
            </ul>
            <p>Bằng cách kết nối dữ liệu từ tất cả các kênh này vào một hệ thống đo lường tập trung, tôi giúp doanh nghiệp tối ưu hóa ngân sách dựa trên hiệu quả thực tế của cả phễu bán hàng, thay vì chỉ nhìn vào con số của từng kênh riêng lẻ.</p>
        `,
        "pmax": `
            <p><strong>Performance Max (PMax)</strong> là tương lai của Google Ads, nơi AI nắm quyền điều khiển. Tuy nhiên, để AI làm việc hiệu quả, nó cần một người "huấn luyện" thông minh. Thay vì để Google tự chạy, tôi áp dụng các kỹ thuật tối ưu hóa nâng cao để kiểm soát AI.</p>
            <h3>3 Trụ cột để làm chủ PMax 2026:</h3>
            <ol>
                <li><strong>Asset Groups chất lượng cao:</strong> AI chỉ mạnh khi nội dung đầu vào (Hình ảnh, Video, Headline) xuất sắc. Tôi cung cấp các bộ Asset đa dạng để AI có thể A/B testing liên tục.</li>
                <li><strong>Audience Signals (Tín hiệu đối tượng):</strong> Thay vì để AI tìm kiếm mù quáng, tôi cung cấp danh sách khách hàng cũ và tệp đối tượng tùy chỉnh để AI có "điểm tựa" ban đầu chính xác nhất.</li>
                <li><strong>Negative Keywords & Placement Exclusion:</strong> Kiểm soát chặt chẽ vị trí hiển thị để tránh lãng phí ngân sách vào các web rác hoặc ứng dụng không liên quan.</li>
            </ol>
            <p>Làm chủ PMax là sự kết hợp giữa sức mạnh thuật toán của Google và chiến lược điều hướng của con người. Đó là cách tôi đạt được ROAS đột phá cho các dự án thương mại điện tử.</p>
        `
    },
    en: {
        "capi": `
            <p>In the post-cookie era, tracking user data has become more challenging than ever. With iOS 14.5+ and major browsers blocking third-party cookies, marketers are facing up to 40% data loss. <strong>Meta Conversions API (CAPI)</strong> is no longer just an optional tool; it is the backbone of every effective advertising campaign in 2026.</p>
            <h3>Why is the browser no longer reliable?</h3>
            <p>Browser-side tracking is easily affected by ad-blockers, script loading errors, and device privacy policies. CAPI solves this by establishing a direct "data pipeline" from your server to Meta.</p>
            <h3>Core benefits of Server-Side Tracking:</h3>
            <ul>
                <li><strong>Accurate Conversion Attribution:</strong> Minimize "lost orders" in your ad reports.</li>
                <li><strong>Event Match Quality (EMQ):</strong> Sending hashed customer data (Email, Phone) helps Meta match audiences faster, allowing Machine Learning to optimize target segments more accurately.</li>
                <li><strong>Ad Personalization:</strong> Understand the customer journey to deploy Retargeting at the right time.</li>
            </ul>
            <p>I specialize in implementing CAPI via <strong>Google Tag Manager Server-Side</strong>, combined with platforms like Stape or Google Cloud to ensure stable system operation at the lowest cost.</p>
        `,
        "ai-creative": `
            <p>In modern Facebook & TikTok advertising, algorithms are smart enough to find customers, but they need "fuel" – which is <strong>Creative content</strong>. A campaign cannot scale with just 1-2 ads. The workflow I built is not just using AI to write text; it's a <strong>high-scale content production system</strong> that breaks creative boundaries.</p>
            <h3>Why is 200 variants the magic number?</h3>
            <p>Today's audience develops "Ad Fatigue" very quickly. To maintain a stable ROAS, you need to constantly renew your marketing angles. 200 variants include combinations of: 10 different hooks, 5 background image/video sets, and 4 call-to-action (CTA) messages.</p>
            <h3>The 4-Stage Practical Workflow:</h3>
            <ul>
                <li><strong>Stage 1: Data-Driven Insight (GPT-4o/Gemini):</strong> I use AI to analyze 500+ competitor customer comments, extracting the deepest pain points that haven't been addressed.</li>
                <li><strong>Stage 2: Visual Concept (Midjourney V6):</strong> Instead of standard product photography, I create surreal visual concepts that stimulate strong visual impact to stop the scroll (Thumb-stop).</li>
                <li><strong>Stage 3: Batch Video Production (CapCut AI/Gen-3):</strong> Automating the integration of multi-tonal AI voiceovers, dynamic subtitles, and transition effects based on optimized scripts.</li>
                <li><strong>Stage 4: A/B Testing & Win-Rate Analysis:</strong> Deploying 200 variants into low-budget test campaigns to find the "Big Win" and scale the budget for that specific winner.</li>
            </ul>
            <p>Actual results: 45% reduction in production costs, 2.5x increase in Click-Through Rate (CTR), and most importantly, freeing up human labor to focus on overall strategy.</p>
        `,
        "seo-perf": `
            <p>A beautiful but slow-loading Landing Page is like a luxury store that is always closed. Research shows that <strong>just a 1-second delay reduces your conversion rate by 7%</strong>. Page speed is not just a technical issue; it's a financial one.</p>
            <h3>"Gold" Standards for Landing Pages in 2026:</h3>
            <ul>
                <li><strong>Core Web Vitals:</strong> LCP under 2.5s, FID under 100ms, and CLS under 0.1. These are the metrics Google uses to rank your website.</li>
                <li><strong>Mobile First:</strong> 90% of traffic comes from phones. Landing pages must be optimized for display and speed on mid-range mobile devices.</li>
                <li><strong>Quality Score:</strong> Fast loading and relevant content lead to higher ad quality scores, resulting in lower bidding costs (CPC).</li>
            </ul>
            <h3>Optimization techniques I implement:</h3>
            <p>I don't just use standard plugins. I optimize deep into the source code: removing redundant CSS/JS, using next-gen image formats (WebP/Avif), implementing CDN, and optimizing server response time. The ultimate goal is to provide the smoothest experience, ensuring customers don't leave before clicking the buy button.</p>
        `,
        "omnichannel": `
            <p>In 2026, the customer's buying journey is no longer a straight line. They might see an ad on TikTok, search for info on Google, and finally decide to buy after seeing a Retargeting ad on Facebook. <strong>Omnichannel Strategy</strong> is how we surround the customer's mind.</p>
            <h3>Perfect synergy between platforms:</h3>
            <ul>
                <li><strong>TikTok Ads:</strong> Acts as the "spark" to create Awareness and spark demand with creative short videos.</li>
                <li><strong>Meta Ads (FB/IG):</strong> Plays the Nurturing role and drives conversions through Carousel and Collection ad formats.</li>
                <li><strong>Google Ads (Search/Shopping):</strong> Captures customers who already have clear buying intent, ensuring your brand appears exactly when they search.</li>
            </ul>
            <p>By connecting data from all these channels into a centralized measurement system, I help businesses optimize budgets based on the actual performance of the entire sales funnel, rather than just looking at individual channel metrics.</p>
        `,
        "pmax": `
            <p><strong>Performance Max (PMax)</strong> is the future of Google Ads, where AI takes the wheel. However, for AI to work effectively, it needs a smart "trainer." Instead of letting Google run wild, I apply advanced optimization techniques to control the AI.</p>
            <h3>3 Pillars to Master PMax in 2026:</h3>
            <ol>
                <li><strong>High-Quality Asset Groups:</strong> AI is only as strong as the input content (Images, Videos, Headlines). I provide diverse Asset sets so the AI can perform continuous A/B testing.</li>
                <li><strong>Audience Signals:</strong> Instead of letting AI search blindly, I provide lists of past customers and custom audience segments to give the AI the most accurate starting point.</li>
                <li><strong>Negative Keywords & Placement Exclusion:</strong> Strictly control display locations to avoid wasting budget on junk websites or irrelevant apps.</li>
            </ol>
            <p>Mastering PMax is a combination of Google's algorithmic power and human strategic navigation. That is how I achieve breakthrough ROAS for e-commerce projects.</p>
        `
    }
};

const textsVN = ["Digital Marketing", "Full Stack Developer", "Chuyên gia Quảng Cáo"];
const textsEN = ["Digital Marketing", "Full Stack Developer", "Ads Expert"];
let texts = textsVN;
let currentLang = localStorage.getItem('lang') || 'vn';

// Typing Animation
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
        typingSpeed = 50;
    } else {
        letter = currentText.slice(0, ++index);
        typingSpeed = 100;
    }

    typingElement.textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause before deleting
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
}

// Navbar Scroll Effect
function handleNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile Menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Particles JS Config
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 40,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#06b6d4"
                    },
                    "shape": {
                        "type": "circle",
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#06b6d4",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });
    }
}

// Active Nav Link on Scroll
function activeNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Reveal on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".metric-card, .service-card, .section-header, .about-content, .about-timeline, .blog-card");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        // Add a simple fade up class dynamically
        if (!reveals[i].classList.contains('fade-up-added')) {
            reveals[i].style.opacity = '0';
            reveals[i].style.transform = 'translateY(30px)';
            reveals[i].style.transition = 'all 0.6s ease';
            reveals[i].classList.add('fade-up-added');
        }

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = '1';
            reveals[i].style.transform = 'translateY(0)';

            // Trigger skill progress bars when about-content is revealed
            if (reveals[i].classList.contains('about-content')) {
                const progressBars = document.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }

            // Trigger counter animation
            if (reveals[i].classList.contains('metric-card') && !reveals[i].classList.contains('counted')) {
                reveals[i].classList.add('counted');
                const numberElement = reveals[i].querySelector('.metric-number');
                if (numberElement) {
                    animateValue(numberElement);
                }
            }
        }
    }
}

// Number Counter Animation
function animateValue(obj) {
    const text = obj.innerText;
    const match = text.match(/^([a-zA-Z]*)?(\d+)(.*)?$/);
    if (!match) return;

    const prefix = match[1] || '';
    const end = parseInt(match[2]);
    const suffix = match[3] || '';

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Ease out quad
        const easeOut = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeOut * end);

        obj.innerHTML = `${prefix}${current}${suffix}`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = text;
        }
    };
    window.requestAnimationFrame(step);
}

// Custom Cursor
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactables = document.querySelectorAll('a, button, input, textarea, .service-card, .blog-card, .metric-card');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
            cursorOutline.classList.add('hover-active');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.classList.remove('hover-active');
        });
    });
}

// Scroll Progress Bar
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("scrollProgress");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}

// Back to top button
function handleBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 1000); // Give it 1 second to show the cool line animation
    }
});

// Theme Toggle Logic
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light' && icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            }
        });
    }

    const langToggleBtn = document.querySelector('.lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'vn' ? 'en' : 'vn';
            setLanguage(newLang);
        });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update typing animation text
    texts = lang === 'vn' ? textsVN : textsEN;

    // Update button text to show target toggle option
    const langToggleBtn = document.querySelector('.lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'vn' ? 'EN' : 'VN';
    }
}

// Blog Modal Logic
function openModal(id, title) {
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = title;
        // Use the ID to get content from blogPosts dictionary based on current language
        const content = blogPosts[currentLang][id] || "<p>Content is being updated...</p>";
        modalBody.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function initModal() {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
    setupMobileMenu();
    initParticles();
    reveal();
    initCustomCursor();
    initTheme();
    setLanguage(currentLang);
    initModal();

    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        backToTopBtn.addEventListener('mouseenter', () => {
            const cursorOutline = document.querySelector('.cursor-outline');
            if (cursorOutline) {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
                cursorOutline.classList.add('hover-active');
            }
        });
        backToTopBtn.addEventListener('mouseleave', () => {
            const cursorOutline = document.querySelector('.cursor-outline');
            if (cursorOutline) {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.classList.remove('hover-active');
            }
        });
    }
});

// Event Listeners for scroll
window.addEventListener('scroll', () => {
    handleNavbar();
    activeNavLink();
    reveal();
    updateScrollProgress();
    handleBackToTop();
});

// Email Sending Logic
function sendEmail(e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const spinner = submitBtn.querySelector('.loader-spinner');

    // Show loading state
    submitBtn.classList.add('loading');
    spinner.style.display = 'block';

    // THAY THẾ 'YOUR_SERVICE_ID' VÀ 'YOUR_TEMPLATE_ID' BẰNG MÃ CỦA BẠN
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            // Success
            showToast(currentLang === 'vn' ? 'Đã gửi tin nhắn thành công!' : 'Message sent successfully!', 'success');
            form.reset();
        })
        .catch((err) => {
            // Error
            console.error('EmailJS Error:', err);
            showToast(currentLang === 'vn' ? 'Gửi thất bại. Vui lòng thử lại sau!' : 'Failed to send. Please try again!', 'error');
        })
        .finally(() => {
            // Reset button state
            submitBtn.classList.remove('loading');
            spinner.style.display = 'none';
        });
}

// Toast Notification Logic
function showToast(message, type = 'success') {
    // Create container if it doesn't exist
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? 'fa-check' : 'fa-exclamation-triangle';

    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icon}"></i>
        </div>
        <div class="toast-message">${message}</div>
    `;

    container.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

