function bi(en, ar) {
  return `<span class="bi-en">${en}</span><span class="bi-ar">${ar}</span>`;
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
        desc: { en: 'Connect different apps so they work together automatically.', ar: 'ربط التطبيقات المختلفة لتعمل معاً تلقائياً.' },
        items: [
          { en: 'Website form → CRM → Email → Slack', ar: 'نموذج الموقع ← CRM ← بريد ← Slack' },
          { en: 'Booking → Calendar → Reminder → CRM', ar: 'حجز ← تقويم ← تذكير ← CRM' }
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
          { en: 'Unique selling proposition (USP)', ar: 'العرض البيعي الفريد' },
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
          { en: 'Playful', ar: 'مرح' }
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
        desc: { en: 'Create and manage content on Instagram, TikTok, LinkedIn, and Facebook to grow an audience and generate leads.', ar: 'إنشاء وإدارة المحتوى على Instagram وTikTok وLinkedIn وFacebook لتنمية الجمهور وجذب العملاء.' }
      },
      {
        icon: '📧',
        title: { en: 'Email Marketing', ar: 'التسويق عبر البريد الإلكتروني' },
        desc: { en: 'Newsletters, promotional emails, and automated sequences that turn subscribers into customers.', ar: 'نشرات إخبارية ورسائل ترويجية وسلاسل آلية تحوّل المشتركين إلى عملاء.' }
      },
      {
        icon: '💰',
        title: { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة' },
        desc: { en: 'Run ads on Google, Meta, TikTok, and LinkedIn. The goal is to generate leads or sales.', ar: 'تشغيل إعلانات على Google وMeta وTikTok وLinkedIn لجذب عملاء أو تحقيق مبيعات.' }
      }
    ]
  },
  {
    id: 'web',
    title: { en: 'Web Design', ar: 'تصميم المواقع' },
    offers: [
      {
        icon: '🖥️',
        title: { en: 'Custom Website Design', ar: 'تصميم مواقع مخصصة' },
        desc: { en: 'We design how your website looks — layout, colors, typography, and user experience.', ar: 'نصمم شكل موقعك — التخطيط والألوان والخطوط وتجربة المستخدم.' }
      },
      {
        icon: '⚙️',
        title: { en: 'Website Development', ar: 'تطوير المواقع' },
        desc: { en: 'We build the design so it works in a browser — fast, secure, and ready to scale.', ar: 'نبني التصميم ليعمل في المتصفح — سريع وآمن وجاهز للتوسع.' }
      }
    ]
  }
];

function renderClassicService(offer) {
  let html = `<div class="classic-service">
    <div class="classic-service-head">
      <span class="classic-emoji">${offer.icon}</span>
      <h4 class="classic-service-title">${bi(offer.title.en, offer.title.ar)}</h4>
    </div>`;
  if (offer.desc) {
    html += `<p class="classic-desc">${bi(offer.desc.en, offer.desc.ar)}</p>`;
  }
  if (offer.items?.length) {
    html += `<ul class="classic-list">${offer.items.map(i =>
      `<li><span class="bi-en">${i.en}</span><span class="bi-ar">${i.ar}</span></li>`
    ).join('')}</ul>`;
  }
  if (offer.tools?.length) {
    html += `<div class="classic-tools">${offer.tools.map(t =>
      `<span class="classic-tool">${t}</span>`
    ).join('')}</div>`;
  }
  return html + '</div>';
}

function renderOffers() {
  const root = document.getElementById('offersRoot');
  if (!root) return;
  root.innerHTML = offersData.map(cat => `
    <div class="classic-category" id="offer-${cat.id}">
      <h3 class="classic-cat-title">${bi(cat.title.en, cat.title.ar)}</h3>
      ${cat.intro ? `<p class="classic-cat-intro">${bi(cat.intro.en, cat.intro.ar)}</p>` : ''}
      ${cat.offers.map(renderClassicService).join('')}
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', renderOffers);
if (document.readyState !== 'loading') renderOffers();
