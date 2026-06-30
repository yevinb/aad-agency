function bi(en, ar) {
  return `<span class="bi-en">${en}</span><span class="bi-ar">${ar}</span>`;
}
function biLi(en, ar) {
  return `<li class="bi-block">${bi(en, ar)}</li>`;
}

const offersData = [
  {
    id: 'automation',
    title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    intro: { en: 'What we build for your business:', ar: 'ما نبنيه لعملك:' },
    offers: [
      {
        icon: '🤖',
        title: { en: 'Customer Support', ar: 'دعم العملاء' },
        items: [
          { en: 'AI chatbot that answers FAQs 24/7', ar: 'روبوت ذكي يجيب على الأسئلة الشائعة ٢٤/٧' },
          { en: 'Books appointments automatically', ar: 'يحجز المواعيد تلقائياً' },
          { en: 'Qualifies leads before a human steps in', ar: 'يُصنّف العملاء المحتملين قبل تدخل الموظف' }
        ]
      },
      {
        icon: '📧',
        title: { en: 'Email Automation', ar: 'أتمتة البريد الإلكتروني' },
        items: [
          { en: 'Welcome email sequences', ar: 'سلسلة رسائل ترحيبية' },
          { en: 'Abandoned cart reminders', ar: 'تذكيرات السلة المتروكة' },
          { en: 'Follow-up emails after someone submits a form', ar: 'رسائل متابعة بعد تعبئة النموذج' },
          { en: 'Personalized email campaigns', ar: 'حملات بريد إلكتروني مخصصة' }
        ]
      },
      {
        icon: '📅',
        title: { en: 'Appointment Booking', ar: 'حجز المواعيد' },
        items: [
          { en: 'AI schedules meetings', ar: 'الذكاء الاصطناعي يجدول الاجتماعات' },
          { en: 'Sends reminders', ar: 'يرسل التذكيرات' },
          { en: 'Reschedules appointments automatically', ar: 'يعيد جدولة المواعيد تلقائياً' }
        ]
      },
      {
        icon: '📝',
        title: { en: 'Content Creation', ar: 'إنشاء المحتوى' },
        items: [
          { en: 'Generate blog posts', ar: 'إنشاء مقالات المدونة' },
          { en: 'Create social media captions', ar: 'كتابة تعليقات لوسائل التواصل' },
          { en: 'Write product descriptions', ar: 'كتابة أوصاف المنتجات' },
          { en: 'Repurpose long videos into short clips', ar: 'تحويل الفيديوهات الطويلة إلى مقاطع قصيرة' }
        ]
      },
      {
        icon: '💼',
        title: { en: 'Sales Automation', ar: 'أتمتة المبيعات' },
        items: [
          { en: 'AI responds to new leads', ar: 'الذكاء الاصطناعي يرد على العملاء الجدد' },
          { en: 'Scores leads based on interest', ar: 'تقييم العملاء المحتملين حسب الاهتمام' },
          { en: 'Sends proposals automatically', ar: 'إرسال العروض تلقائياً' },
          { en: 'Follows up until a lead replies', ar: 'متابعة حتى يرد العميل المحتمل' }
        ]
      },
      {
        icon: '📊',
        title: { en: 'CRM Automation', ar: 'أتمتة CRM' },
        items: [
          { en: 'Update customer records', ar: 'تحديث سجلات العملاء' },
          { en: 'Move leads through the sales pipeline', ar: 'نقل العملاء عبر مسار المبيعات' },
          { en: 'Trigger tasks for the sales team', ar: 'تفعيل مهام لفريق المبيعات' }
        ]
      },
      {
        icon: '⚡',
        title: { en: 'Workflow Automation', ar: 'أتمتة سير العمل' },
        desc: { en: 'Connect different apps so they work together automatically. For example:', ar: 'ربط التطبيقات المختلفة لتعمل معاً تلقائياً. على سبيل المثال:' },
        items: [
          { en: 'Website form → CRM → Email → Slack notification', ar: 'نموذج الموقع ← CRM ← بريد ← إشعار Slack' },
          { en: 'Customer books a call → Calendar invite → Reminder email → CRM update', ar: 'حجز مكالمة ← دعوة تقويم ← تذكير ← تحديث CRM' }
        ],
        tools: ['Make', 'Zapier', 'n8n', 'OpenAI', 'Claude', 'HubSpot', 'GoHighLevel']
      }
    ]
  },
  {
    id: 'branding',
    title: { en: 'Branding', ar: 'العلامة التجارية' },
    offers: [
      {
        icon: '🎨',
        title: { en: 'Visual Identity', ar: 'الهوية البصرية' },
        items: [
          { en: 'Logo', ar: 'الشعار' },
          { en: 'Color palette', ar: 'لوحة الألوان' },
          { en: 'Typography (fonts)', ar: 'الخطوط' },
          { en: 'Icons and graphics', ar: 'الأيقونات والرسومات' },
          { en: 'Business cards', ar: 'بطاقات العمل' },
          { en: 'Social media templates', ar: 'قوالب وسائل التواصل' },
          { en: 'Website design style', ar: 'أسلوب تصميم الموقع' }
        ]
      },
      {
        icon: '🔮',
        title: { en: 'Brand Strategy', ar: 'استراتيجية العلامة' },
        items: [
          { en: 'Mission and vision', ar: 'الرسالة والرؤية' },
          { en: 'Target audience', ar: 'الجمهور المستهدف' },
          { en: 'Brand positioning', ar: 'تحديد موقع العلامة' },
          { en: 'Unique selling proposition (USP)', ar: 'العرض البيعي الفريد (USP)' },
          { en: 'Core values', ar: 'القيم الأساسية' }
        ]
      },
      {
        icon: '✍️',
        title: { en: 'Brand Voice', ar: 'صوت العلامة' },
        desc: { en: 'How the business communicates:', ar: 'كيف تتواصل الشركة:' },
        items: [
          { en: 'Professional', ar: 'احترافي' },
          { en: 'Friendly', ar: 'ودود' },
          { en: 'Luxury', ar: 'فاخر' },
          { en: 'Modern', ar: 'عصري' },
          { en: 'Playful', ar: 'مرح' },
          { en: 'Minimalist', ar: 'بسيط' }
        ]
      }
    ]
  },
  {
    id: 'marketing',
    title: { en: 'Marketing', ar: 'التسويق' },
    offers: [
      {
        icon: '📱',
        title: { en: 'Social Media Marketing', ar: 'التسويق عبر وسائل التواصل' },
        desc: { en: 'Create and manage content on platforms like Instagram, TikTok, LinkedIn, and Facebook to grow an audience and generate leads.', ar: 'إنشاء وإدارة المحتوى على Instagram وTikTok وLinkedIn وFacebook لتنمية الجمهور وجذب العملاء المحتملين.' }
      },
      {
        icon: '📧',
        title: { en: 'Email Marketing', ar: 'التسويق عبر البريد الإلكتروني' },
        desc: { en: 'Send newsletters, promotions, welcome sequences, and follow-up emails to turn subscribers into customers.', ar: 'إرسال نشرات إخبارية وعروض وسلاسل ترحيب ومتابعة لتحويل المشتركين إلى عملاء.' }
      },
      {
        icon: '💰',
        title: { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة' },
        desc: { en: 'Run ads on platforms such as Google Ads, Meta (Facebook & Instagram), TikTok Ads, and LinkedIn Ads. The goal is to generate leads or sales.', ar: 'تشغيل إعلانات على Google وMeta وTikTok وLinkedIn. الهدف هو جذب عملاء محتملين أو تحقيق مبيعات.' },
        items: [
          { en: 'Google Ads', ar: 'Google Ads' },
          { en: 'Meta (Facebook & Instagram)', ar: 'Meta (Facebook و Instagram)' },
          { en: 'TikTok Ads', ar: 'TikTok Ads' },
          { en: 'LinkedIn Ads', ar: 'LinkedIn Ads' }
        ]
      },
      {
        icon: '✍️',
        title: { en: 'Content Marketing', ar: 'تسويق المحتوى' },
        desc: { en: 'Create valuable content that attracts potential customers, such as:', ar: 'إنشاء محتوى قيّم يجذب العملاء المحتملين، مثل:' },
        items: [
          { en: 'Blog posts', ar: 'مقالات المدونة' },
          { en: 'Videos', ar: 'فيديوهات' },
          { en: 'Reels', ar: 'Reels' },
          { en: 'Case studies', ar: 'دراسات حالة' },
          { en: 'Guides', ar: 'أدلة' }
        ]
      },
      {
        icon: '📈',
        title: { en: 'Conversion Rate Optimization (CRO)', ar: 'تحسين معدل التحويل (CRO)' },
        desc: { en: 'Improve a website so more visitors become customers by:', ar: 'تحسين الموقع ليتحول المزيد من الزوار إلى عملاء عبر:' },
        items: [
          { en: 'Better layouts', ar: 'تصاميم أفضل' },
          { en: 'Clearer calls to action', ar: 'دعوات لاتخاذ إجراء أوضح' },
          { en: 'Faster loading speeds', ar: 'سرعات تحميل أسرع' },
          { en: 'A/B testing', ar: 'اختبار A/B' }
        ]
      },
      {
        icon: '🤖',
        title: { en: 'Marketing Automation', ar: 'أتمتة التسويق' },
        desc: { en: 'Automate marketing tasks, including:', ar: 'أتمتة مهام التسويق، بما في ذلك:' },
        items: [
          { en: 'Welcome email sequences', ar: 'سلاسل رسائل ترحيبية' },
          { en: 'Lead nurturing', ar: 'رعاية العملاء المحتملين' },
          { en: 'CRM workflows', ar: 'سير عمل CRM' },
          { en: 'AI chatbots', ar: 'روبوتات ذكية' },
          { en: 'Follow-up reminders', ar: 'تذكيرات المتابعة' }
        ]
      }
    ]
  },
  {
    id: 'web',
    title: { en: 'Web Design & Development', ar: 'تصميم وتطوير المواقع' },
    intro: { en: 'Full-stack web design & development:', ar: 'تصميم وتطوير مواقع متكامل:' },
    offers: [
      {
        icon: '🎨',
        title: { en: 'Visual Design', ar: 'التصميم البصري' },
        items: [
          { en: 'Colors', ar: 'الألوان' },
          { en: 'Fonts', ar: 'الخطوط' },
          { en: 'Images', ar: 'الصور' },
          { en: 'Icons', ar: 'الأيقونات' },
          { en: 'Layout', ar: 'التخطيط' },
          { en: 'Buttons', ar: 'الأزرار' }
        ]
      },
      {
        icon: '📱',
        title: { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
        desc: { en: 'Making sure the website looks great on:', ar: 'ضمان أن الموقع يبدو رائعاً على:' },
        items: [
          { en: 'Desktop', ar: 'الكمبيوتر' },
          { en: 'Tablet', ar: 'التابلت' },
          { en: 'Mobile', ar: 'الجوال' }
        ]
      },
      {
        icon: '🧭',
        title: { en: 'User Experience (UX)', ar: 'تجربة المستخدم (UX)' },
        desc: { en: 'Making the site easy to use:', ar: 'جعل الموقع سهل الاستخدام:' },
        items: [
          { en: 'Clear navigation', ar: 'تنقل واضح' },
          { en: 'Fast loading', ar: 'تحميل سريع' },
          { en: 'Logical page structure', ar: 'هيكل صفحات منطقي' },
          { en: 'Easy-to-find information', ar: 'معلومات سهلة الوصول' }
        ]
      },
      {
        icon: '🖱️',
        title: { en: 'User Interface (UI)', ar: 'واجهة المستخدم (UI)' },
        desc: { en: 'The interactive parts people use:', ar: 'الأجزاء التفاعلية التي يستخدمها الناس:' },
        items: [
          { en: 'Buttons', ar: 'الأزرار' },
          { en: 'Forms', ar: 'النماذج' },
          { en: 'Menus', ar: 'القوائم' },
          { en: 'Animations', ar: 'الحركات والتأثيرات' }
        ]
      },
      {
        icon: '🎯',
        title: { en: 'Conversion-Focused Design', ar: 'تصميم يركز على التحويل' },
        desc: { en: 'Designing pages that encourage visitors to take action, such as:', ar: 'تصميم صفحات تشجع الزوار على اتخاذ إجراء، مثل:' },
        items: [
          { en: 'Book a call', ar: 'حجز مكالمة' },
          { en: 'Buy a product', ar: 'شراء منتج' },
          { en: 'Fill out a contact form', ar: 'تعبئة نموذج تواصل' },
          { en: 'Subscribe to a newsletter', ar: 'الاشتراك في النشرة البريدية' }
        ]
      },
      {
        icon: '🔧',
        title: { en: 'Example: Plumber Website', ar: 'مثال: موقع سباك' },
        desc: { en: 'A plumber needs a website. A good web design would include:', ar: 'يحتاج السباك موقعاً. تصميم جيد يشمل:' },
        items: [
          { en: 'A professional homepage', ar: 'صفحة رئيسية احترافية' },
          { en: 'Clear "Call Now" and "Get a Quote" buttons', ar: 'أزرار "اتصل الآن" و"احصل على عرض سعر" واضحة' },
          { en: 'Service pages', ar: 'صفحات الخدمات' },
          { en: 'Customer reviews', ar: 'آراء العملاء' },
          { en: 'Contact form', ar: 'نموذج تواصل' },
          { en: 'Mobile-friendly layout', ar: 'تصميم متوافق مع الجوال' },
          { en: 'Fast loading speed', ar: 'سرعة تحميل عالية' }
        ],
        footer: { en: 'The developer then builds that design so it works in a browser.', ar: 'ثم يبني المطور التصميم ليعمل في المتصفح.' }
      },
      {
        icon: '💻',
        title: { en: 'Custom Website Design', ar: 'تصميم مواقع مخصصة' },
        desc: { en: 'Professional, mobile-friendly websites built to convert — from homepage to contact form.', ar: 'مواقع احترافية متجاوبة مُصممة للتحويل — من الصفحة الرئيسية إلى نموذج التواصل.' }
      },
      {
        icon: '⚙️',
        title: { en: 'Website Development', ar: 'تطوير المواقع' },
        desc: { en: 'We build the design so it works in a browser — fast, secure, and ready to scale.', ar: 'نبني التصميم ليعمل في المتصفح — سريع وآمن وجاهز للتوسع.' }
      }
    ]
  }
];

const MONSTER_COLORS = ['green', 'cyan', 'magenta', 'orange', 'lime', 'purple', 'blue', 'white'];

let cardColorIndex = 0;

function renderServiceCan(offer, delay) {
  const color = MONSTER_COLORS[cardColorIndex++ % MONSTER_COLORS.length];
  let html = `<article class="monster-can monster-service-can bi-block" data-color="${color}" style="animation-delay:${delay}s">
    <div class="monster-can-glow"></div>
    <div class="monster-can-body monster-service-body">
      <div class="monster-can-icon monster-emoji-icon">${offer.icon}</div>
      <h4 class="monster-service-title bi-block">${bi(offer.title.en, offer.title.ar)}</h4>`;
  if (offer.desc) html += `<p class="monster-service-desc bi-block">${bi(offer.desc.en, offer.desc.ar)}</p>`;
  if (offer.items?.length) html += `<ul class="monster-service-list">${offer.items.map(i => biLi(i.en, i.ar)).join('')}</ul>`;
  if (offer.footer) html += `<p class="monster-service-desc bi-block" style="margin-top:10px;font-style:italic">${bi(offer.footer.en, offer.footer.ar)}</p>`;
  if (offer.tools?.length) {
    html += `<div class="tools-row" style="margin-top:12px">${offer.tools.map(t => `<span class="tool-pill">${t}</span>`).join('')}</div>`;
  }
  return html + '</div></article>';
}

function renderOffers() {
  const root = document.getElementById('offersRoot');
  if (!root) return;
  cardColorIndex = 0;
  let delay = 0;
  root.innerHTML = offersData.map(cat => {
    const cards = cat.offers.map(o => renderServiceCan(o, (delay += 0.06).toFixed(2))).join('');
    return `
    <div class="offer-category monster-subzone" id="offer-${cat.id}">
      <h3 class="offer-category-title monster-headline bi-block">${bi(cat.title.en, cat.title.ar)}</h3>
      ${cat.intro ? `<p class="offer-cat-intro bi-block monster-sub">${bi(cat.intro.en, cat.intro.ar)}</p>` : ''}
      <div class="monster-carousel-wrap monster-service-wrap">
        <div class="monster-carousel monster-service-carousel">${cards}</div>
      </div>
    </div>`;
  }).join('');
  if (window.initMonsterZones) window.initMonsterZones(root);
  if (window.initAllMonsterCarousels) window.initAllMonsterCarousels(root);
}

document.addEventListener('DOMContentLoaded', renderOffers);
if (document.readyState !== 'loading') renderOffers();
