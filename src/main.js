const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language');

const text = {
  'בס״ד ': 'B"H ',
  ' שירותי סת״ם למהדרין לקהילות בארץ ובעולם': ' Premium STAM services for communities in Israel and around the world',
  'כתר הסופר': 'Keter HaSofer', 'סת״ם בכשרות וביראת שמים': 'STAM with integrity and reverence',
  'אודות': 'About', 'שירותים': 'Services', 'המלצות': 'Testimonials', 'שאלות נפוצות': 'FAQ', 'צרו קשר': 'Contact us',
  'מסורת מדויקת. אחריות אישית.': 'Precise tradition. Personal responsibility.', 'קדושה שנכתבת': 'Holiness written', 'בידיים נאמנות.': 'by trusted hands.',
  'שירותי סת״ם מקצועיים ומוקפדים לקהילות, בתי כנסת ובתים יהודיים ברחבי העולם — מתוך יראת שמים, ידע וניסיון.': 'Professional, meticulous STAM services for communities, synagogues, and Jewish homes around the world — grounded in reverence, knowledge, and experience.',
  'לתיאום שיחה ': 'Schedule a conversation ', 'להכיר את הדרך שלנו ': 'Discover our approach ', 'שנות ניסיון': 'Years of experience', 'הקפדה הלכתית': 'Halachic precision', 'מחויבות לאיכות': 'Commitment to quality', 'מלאכת קודש': 'Sacred craft', 'בכל אות ואות': 'in every letter', 'גלו עוד ': 'Discover more ',
  'הסיפור שלנו': 'Our story', 'מלאכה שעוברת מדור לדור': 'A craft passed down through generations', 'מקום שבו מסורת פוגשת אחריות': 'Where tradition meets responsibility', 'לא רק כתיבה.': 'More than writing.', 'שליחות.': 'A calling.',
  'מאחורי כל מזוזה, תפילין או ספר תורה עומדת אחריות עמוקה. כסופר סת״ם ומגיה מוסמך, ואברך כולל, אני מלווה כל עבודה בקפדנות וביראת שמים — מהרגע הראשון ועד למסירה.': 'Behind every mezuzah, tefillin, and Torah scroll is a profound responsibility. As an experienced STAM scribe, certified proofreader, and kollel scholar, I oversee each project with meticulous care and reverence — from the first step through delivery.',
  'יחד עם קבוצת סופרים אברכים יראי שמים, אנו מעניקים לקהילות וליחידים מענה מקצועי, שקוף ואישי, בלי להתפשר על הפרטים הקטנים.': 'Together with a select group of God-fearing kollel scholars and STAM scribes, we offer communities and individuals a professional, transparent, personal service — without compromising on the finest details.', 'הכירו את השירותים שלנו ': 'Explore our services ',
  'יסודות של אמון': 'Foundations of trust', 'דיוק מקצועי.': 'Professional precision.', 'מחויבות של לב.': 'A commitment from the heart.', 'כל פרויקט מקבל את הזמן, הידע והיחס הראויים לו. ההכשרה המקצועית שלנו והחיבור לעולם התורה הם הבסיס לשירות שאפשר לסמוך עליו לאורך שנים.': 'Every project receives the time, expertise, and attention it deserves. Our professional training and connection to the world of Torah are the foundation for service you can trust for years to come.',
  'סופר סת״ם מנוסה': 'Experienced STAM scribe', 'למעלה מעשור של כתיבה, תיקון וליווי עבודות קודש.': 'Over a decade of writing, repair, and stewardship of sacred works.', 'מגיה סת״ם מוסמך': 'Certified STAM proofreader', 'בדיקה שיטתית ומדויקת, בכפוף לכללי ההלכה.': 'Systematic, precise inspection in accordance with halacha.', 'אברך כולל': 'Kollel scholar', 'עבודת קודש הנשענת על לימוד, יראת שמים ואחריות.': 'Sacred work rooted in learning, reverence, and responsibility.',
  'האנשים שמאחורי האותיות': 'The people behind the letters', 'קבוצה אחת.': 'One team.', 'סטנדרט ': 'One uncompromising ', 'בלתי מתפשר.': 'standard.', 'לפי היקף הצורך, אנו עובדים יחד עם רשת נבחרת של סופרי סת״ם — כולם אברכים, יראי שמים ובעלי ניסיון. כך אפשר לתת מענה רחב לקהילות ולפרויקטים מיוחדים, תוך שמירה על איכות אחידה ואחריות אישית.': 'According to each project’s scope, we work with a select network of STAM scribes — all experienced, God-fearing kollel scholars. This lets us serve communities and special projects at scale while maintaining consistent quality and personal accountability.', '✦ סופרים נבחרים': '✦ Selected scribes', '✦ ליווי אישי': '✦ Personal guidance', '✦ בקרת איכות': '✦ Quality control', 'עבודה משותפת': 'Working together', 'לשם שמים': 'For a higher purpose',
  'במה נוכל לסייע': 'How we can help', 'שירותי סת״ם': 'STAM services', 'לכל צורך.': 'for every need.', 'פתרונות מדויקים, מהבדיקה הקטנה ועד לפרויקט קהילתי שלם.': 'Thoughtful solutions, from a single inspection to a complete community project.', 'כתיבת סת״ם': 'STAM writing', 'תפילין, מזוזות ומגילות בכתיבה מהודרת, לפי המסורת והמנהג המתאים.': 'Tefillin, mezuzot, and megillot written with distinction, following the appropriate tradition and custom.', 'הגהה ובדיקה': 'Proofreading & inspection', 'בדיקות מקצועיות לתפילין, מזוזות וספרי תורה — עם דוח ברור ומענה אישי.': 'Professional inspections for tefillin, mezuzot, and Torah scrolls — with a clear report and personal guidance.', 'תיקון ושיקום': 'Repair & restoration', 'תיקונים עדינים ומקצועיים, מתוך כבוד לחפץ הקדוש ולמסורת הכתיבה.': 'Careful, professional repairs with respect for the sacred object and its writing tradition.', 'ליווי קהילתי': 'Community support', 'מענה מסודר לבתי כנסת, גבאים וארגונים: בדיקה, תחזוקה וייעוץ שוטף.': 'Organized support for synagogues, administrators, and organizations: inspection, maintenance, and ongoing advice.',
  'מן הקהילות שעובדות איתנו': 'From the communities we serve', '“העבודה נעשתה ברמה גבוהה מאוד, עם זמינות, שקיפות ותחושת אחריות אמיתית. זכינו לשירות שאפשר להפקיד בידיו את הדברים החשובים ביותר.”': '“The work was completed to an exceptional standard, with availability, transparency, and a genuine sense of responsibility. We received service to which we could entrust what matters most.”', 'הרב [שם מלא]': 'Rabbi [Full Name]', 'רב קהילה, [עיר / מדינה]': 'Community rabbi, [City / Country]', 'יש לכם מילה טובה לשתף?': 'Have a kind word to share?', 'נשמח לשמוע ←': 'We would love to hear it →',
  'הבחירה הנכונה': 'The right choice', 'כי בדברי קדושה,': 'Because with sacred works,', 'אין מקום לפשרות.': 'there is no room for compromise.', 'אחריות ללא קיצורי דרך': 'Accountability without shortcuts', 'כל עבודה נבדקת בקפידה ומלווה בתקשורת ישירה וברורה.': 'Every project is carefully inspected and supported by direct, clear communication.', 'שירות שמבין קהילות': 'Service that understands communities', 'ניסיון בעבודה מול רבנים, גבאים וצרכים מגוונים בארץ ובעולם.': 'Experience working with rabbis, administrators, and diverse needs in Israel and abroad.', 'יחס אישי, גם מרחוק': 'Personal attention, even from afar', 'ליווי נגיש ומסודר, גם עבור קהילות ולקוחות מעבר לים.': 'Accessible, organized guidance for communities and clients across the globe.',
  'מאחורי הקלעים': 'Behind the scenes', 'לראות את המלאכה.': 'See the craft.', 'להרגיש את ההקפדה.': 'Feel the care.', 'בערוץ שלנו תמצאו הצצה לעולם הסת״ם, טיפים חשובים וסיפורים מהדרך.': 'On our channel, discover the world of STAM, valuable tips, and stories from our work.', 'לערוץ YouTube ': 'Visit our YouTube channel ', 'החליפו את הקישור לערוץ ה-YouTube שלכם': 'Replace with your YouTube channel link', 'צפו במלאכה מקרוב': 'See the craft up close',
  'תשובות לשאלות נפוצות': 'Answers to common questions', 'בואו נעשה סדר.': 'Let’s make things clear.', 'לא מצאתם תשובה? ': 'Didn’t find your answer? ', 'דברו איתנו.': 'Talk to us.', 'באילו סוגי עבודות סת״ם אתם מטפלים?': 'What types of STAM work do you handle?', 'אנו מעניקים מענה לכתיבה, הגהה, בדיקה, תיקון וליווי של תפילין, מזוזות, מגילות וספרי תורה, בהתאם לצורך.': 'We offer writing, proofreading, inspection, repair, and ongoing guidance for tefillin, mezuzot, megillot, and Torah scrolls, according to your needs.', 'האם ניתן לקבל שירות גם מחוץ לישראל?': 'Can I receive service outside Israel?', 'בהחלט. אנו עובדים עם קהילות ולקוחות ברחבי העולם, ומתאמים את תהליך המשלוח והליווי בצורה מסודרת.': 'Absolutely. We work with communities and clients worldwide, coordinating shipping and guidance in an orderly, reliable process.', 'איך מתחילים תהליך של בדיקה או תיקון?': 'How do I begin an inspection or repair?', 'פונים אלינו בהודעה קצרה עם פרטי הצורך, ואנו נחזור אליכם כדי להבין את העבודה ולהציע את הדרך הנכונה להתקדם.': 'Send us a short message describing your needs. We will follow up to understand the work and recommend the best way forward.', 'האם אפשר לקבל הצעת מחיר מראש?': 'Can I receive a quote in advance?', 'כן. לאחר הבנת היקף העבודה נשלח הצעה ברורה ומסודרת, ללא הפתעות.': 'Yes. Once we understand the scope of work, we will send a clear, organized quote with no surprises.',
  'בואו נדבר': 'Let’s talk', 'מוכנים להפקיד את': 'Ready to place', 'הקדושה בידיים טובות?': 'your sacred work in good hands?', 'נשמח לשמוע על הצורך שלכם ולחשוב יחד על המענה המדויק ביותר.': 'We would be glad to hear about your needs and find the most suitable solution together.', 'החליפו במספר הטלפון שלכם': 'Replace with your phone number', 'שם מלא': 'Full name', 'טלפון או אימייל': 'Phone or email', 'איך נוכל לסייע?': 'How can we help?', 'שלחו פנייה ': 'Send your inquiry ', '© 2026 כתר הסופר. כל הזכויות שמורות.': '© 2026 Keter HaSofer. All rights reserved.', 'בחזרה למעלה ↑': 'Back to top ↑', 'וואטסאפ': 'WhatsApp'
};

const attributes = {
  'פתיחת תפריט': 'Open menu', 'כתר הסופר - דף הבית': 'Keter HaSofer - Home', 'English version coming soon': 'Switch to English',
  'ספר תורה פתוח': 'Open Torah scroll', 'בית כנסת מסורתי': 'Traditional synagogue', 'פנים בית כנסת': 'Synagogue interior', 'נוף הרים אור בוקר': 'Morning mountain landscape', 'ספרים עתיקים': 'Ancient books', 'פתיחת ערוץ YouTube': 'Open YouTube channel', 'פנייה ב-WhatsApp': 'Contact via WhatsApp',
  'בירור על כתיבת סתם': 'Ask about STAM writing', 'בירור על הגהה': 'Ask about proofreading', 'בירור על תיקון': 'Ask about repair', 'בירור על ליווי קהילתי': 'Ask about community support',
  'איך נוכל לפנות אליכם?': 'How can we address you?', 'פרטי התקשרות': 'Your contact details', 'ספרו לנו בקצרה': 'Tell us briefly'
};

function translateTextNodes(dictionary) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { if (dictionary[node.nodeValue]) node.nodeValue = dictionary[node.nodeValue]; });
}

function switchLanguage() {
  const english = document.documentElement.lang === 'he';
  const dictionary = english ? text : Object.fromEntries(Object.entries(text).map(([hebrew, englishText]) => [englishText, hebrew]));
  const attributeDictionary = english ? attributes : Object.fromEntries(Object.entries(attributes).map(([hebrew, englishText]) => [englishText, hebrew]));
  translateTextNodes(dictionary);
  document.querySelectorAll('*').forEach((element) => ['aria-label', 'title', 'placeholder'].forEach((name) => {
    if (attributeDictionary[element.getAttribute(name)]) element.setAttribute(name, attributeDictionary[element.getAttribute(name)]);
  }));
  document.documentElement.lang = english ? 'en' : 'he';
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  document.title = english ? 'Keter HaSofer | STAM with integrity and reverence' : 'כתר הסופר | סת״ם בכשרות וביראת שמים';
  document.querySelector('meta[name="description"]').content = english ? 'Professional STAM services for communities, synagogues, and Jewish homes around the world.' : 'שירותי סת״ם מקצועיים לקהילות, בתי כנסת ולקוחות ברחבי העולם.';
  languageButton.innerHTML = `${english ? 'עברית' : 'EN'} <span>↗</span>`;
  languageButton.title = english ? 'Switch to Hebrew' : 'Switch to English';
  languageButton.setAttribute('aria-label', languageButton.title);
}

languageButton.addEventListener('click', switchLanguage);
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = document.documentElement.lang === 'en'
    ? 'Thank you! Your details were received. We will be in touch shortly.'
    : 'תודה! הפרטים התקבלו. נחזור אליכם בהקדם.';
  event.currentTarget.reset();
});
