import type { Dictionary } from "./id";

// English dictionary. Slugs, icons, colors, and href anchors are kept identical
// to id.ts so routing & styling stay in sync; only human-readable text is translated.
export const en: Dictionary = {
  meta: {
    title: "Kreativita Sinergi — Website & App Development for Your Business",
    description:
      "Kreativita Sinergi builds websites, mobile apps (Android & iOS), and custom IT solutions for SMEs and enterprises — affordable, professional quality. Maker of Loka Kasir, a POS app for small businesses.",
  },
  nav: {
    items: [
      { href: "/#tentang", label: "About" },
      { href: "/#layanan", label: "Services" },
      { href: "/#produk", label: "Loka Kasir" },
      { href: "/#harga", label: "Pricing" },
      { href: "/blog", label: "Blog" },
      { href: "/#kontak", label: "Contact" },
    ],
    cta: "Free Consultation",
  },
  hero: {
    badge: "Ready to bring your digital ideas to life",
    titlePre: "Build the ",
    titleHighlight: "Website & App",
    titlePost: " Your Business Dreams Of",
    desc1:
      "Kreativita Sinergi is a technology partner that helps SMEs and enterprises build websites, mobile apps, and all their IT needs — at an ",
    descEmphasis: "affordable",
    desc2: " price with professional quality.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Explore Loka Kasir",
    stats: [
      { value: "50+", label: "Projects Delivered" },
      { value: "100%", label: "Happy Clients" },
      { value: "24/7", label: "Support" },
    ],
    launchTitle: "Launch Success",
    launchSub: "On time",
  },
  techStack: {
    label: "Technologies we use",
    items: ["Flutter", "React", "Next.js", "Golang", "Node.js", "PostgreSQL", "Figma"],
  },
  about: {
    eyebrow: "ABOUT US",
    title: "A Technology Partner That Grows With Your Business",
    paragraphs: [
      "Kreativita was born from one belief: quality technology shouldn't have to be expensive. We help SMEs, startups, and enterprises turn ideas into real digital products — from websites and mobile apps to custom systems.",
      "Our experience building Loka Kasir, a point-of-sale app used by business owners every day, gives us a deep understanding of real-world business needs — we don't just build apps, we build solutions people actually use.",
    ],
    points: [
      "Clear & transparent communication from start to finish",
      "Honest pricing, no hidden fees",
      "Guidance & support after your app goes live",
    ],
    highlights: [
      { value: "2024", label: "Founded & growing steadily", color: "bg-brand-50 text-brand-600" },
      { value: "Team", label: "Experienced developers & designers", color: "bg-indigo-50 text-indigo-600" },
      { value: "Affordable", label: "SME-friendly pricing", color: "bg-sky-50 text-sky-600" },
      { value: "Loka Kasir", label: "Our own POS product", color: "bg-slate-100 text-slate-600" },
    ],
  },
  services: {
    eyebrow: "OUR SERVICES",
    title: "All Your IT Needs in One Team",
    desc: "From idea to launch, we handle every aspect of your business technology.",
    more: "Learn more",
    items: [
      {
        slug: "pembuatan-website",
        title: "Website Development",
        description:
          "Company profiles, landing pages, online stores, and custom web apps that are fast, responsive, and SEO-friendly.",
        icon: "globe",
        color: "bg-brand-50 text-brand-600",
        seoTitle: "Professional & SEO-Friendly Website Development",
        seoDescription:
          "Website development for SMEs and enterprises — company profiles, landing pages, online stores, and custom web apps. Fast, responsive, SEO-friendly, affordable.",
        keywords: ["website development", "web development service", "business website"],
        hero: "Your website is your digital storefront, open 24 hours a day. We build websites that are fast, look great on every device, and are optimized to be found on Google.",
        includes: [
          "Modern & responsive design (mobile, tablet, desktop)",
          "Speed optimization & on-page SEO",
          "Domain, hosting, and SSL setup",
          "WhatsApp, contact form & Google Maps integration",
          "Easy content management panel",
          "Guidance & maintenance after launch",
        ],
        benefits: [
          { title: "Credibility", desc: "Look professional and trustworthy to potential customers." },
          { title: "Found on Google", desc: "SEO-friendly structure so your business shows up in search." },
          { title: "Your own asset", desc: "Unlike social media, your website is entirely yours." },
        ],
      },
      {
        slug: "aplikasi-mobile",
        title: "Mobile App Development",
        description:
          "Android & iOS apps with Flutter — one codebase, two platforms. Native performance, lower cost.",
        icon: "phone",
        color: "bg-indigo-50 text-indigo-600",
        seoTitle: "Android & iOS Mobile App Development",
        seoDescription:
          "Mobile app development for Android & iOS with Flutter — one codebase for both platforms, native performance, lower cost. From MVP to full-scale apps.",
        keywords: ["mobile app development", "Android app development", "Flutter app developer"],
        hero: "Reach customers right from the palm of their hand. We build Android & iOS apps with Flutter — one codebase for both platforms, making it faster and more cost-effective.",
        includes: [
          "Android & iOS apps at once (Flutter)",
          "Smooth, intuitive UI/UX design",
          "Backend, payment & notification integration",
          "Offline mode & data synchronization",
          "Publishing to Play Store / App Store",
          "Ongoing maintenance & updates",
        ],
        benefits: [
          { title: "Cost-Effective", desc: "One codebase for two platforms cuts time & cost." },
          { title: "Start from MVP", desc: "Launch core features first, then expand gradually." },
          { title: "High Engagement", desc: "Push notifications keep customers coming back." },
        ],
      },
      {
        slug: "sistem-custom-api",
        title: "Custom Systems & API",
        description:
          "Backends, admin dashboards, payment integrations, and internal systems tailored to your business flow.",
        icon: "code",
        color: "bg-sky-50 text-sky-600",
        seoTitle: "Custom System Development & API Integration",
        seoDescription:
          "Custom system development: backends, admin dashboards, payment gateway and third-party API integration, tailored to your business flow. Scalable, secure, reliable.",
        keywords: ["custom system development", "custom information system", "API integration service"],
        hero: "Every business has a unique workflow. We build custom systems — backends, dashboards, and integrations — designed exactly around your operational needs.",
        includes: [
          "Scalable and secure backend & API",
          "Admin dashboard tailored to your team",
          "Payment gateway & third-party service integration",
          "Workflow automation & reporting",
          "Role-based user access management",
          "Documentation & technical support",
        ],
        benefits: [
          { title: "Fits Your Process", desc: "The system follows your business flow, not the other way around." },
          { title: "Efficiency", desc: "Automate time-consuming manual tasks." },
          { title: "Ready to Grow", desc: "Architecture built to scale as your business grows." },
        ],
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Attractive, easy-to-use interface design, crafted from user research to prototype.",
        icon: "shield",
        color: "bg-slate-100 text-slate-600",
        seoTitle: "UI/UX Design — Interface Design & Prototyping",
        seoDescription:
          "UI/UX design for websites and apps — from user research and wireframes to interactive prototypes. Attractive, consistent, and easy-to-use design.",
        keywords: ["UI UX design service", "app design service", "Figma prototype"],
        hero: "A beautiful look alone isn't enough — a product must be easy to use. We design interfaces that are both attractive and intuitive, from user research to interactive prototypes.",
        includes: [
          "User research & needs analysis",
          "Wireframes & user flows",
          "Visual design & design system",
          "Interactive prototype (Figma)",
          "Usability testing",
          "Developer-ready hand-off",
        ],
        benefits: [
          { title: "Higher Conversion", desc: "A clear flow encourages users to take action." },
          { title: "Consistent", desc: "A design system keeps every page clean and cohesive." },
          { title: "Fewer Revisions", desc: "Validate via prototype before development begins." },
        ],
      },
      {
        slug: "hosting-maintenance",
        title: "Hosting & Maintenance",
        description:
          "Deployment, domain, security, and routine upkeep so your app stays online and up-to-date.",
        icon: "server",
        color: "bg-brand-50 text-brand-600",
        seoTitle: "Website/App Hosting & Maintenance Services",
        seoDescription:
          "Hosting, deployment, and maintenance for websites and apps — security, backups, updates, and monitoring so your service stays online and optimal.",
        keywords: ["website hosting service", "website maintenance service", "app maintenance"],
        hero: "Building an app is just the beginning — keeping it online and secure is ongoing work. We handle hosting, security, and upkeep so you can focus on your business.",
        includes: [
          "Domain, hosting & SSL setup",
          "Deployment & server configuration",
          "Regular backups & data recovery",
          "Security updates & routine patches",
          "Uptime & performance monitoring",
          "Responsive technical support",
        ],
        benefits: [
          { title: "Always Online", desc: "Monitoring keeps your service accessible." },
          { title: "Secure", desc: "Regular updates & backups protect your data." },
          { title: "Hassle-Free", desc: "We handle the technical side so you can keep selling." },
        ],
      },
      {
        slug: "konsultasi-digital",
        title: "Digital Consulting",
        description:
          "Not sure where to start? We help map out your technology needs and your business's digital strategy.",
        icon: "bolt",
        color: "bg-indigo-50 text-indigo-600",
        seoTitle: "Digital Consulting & Business Technology Strategy",
        seoDescription:
          "Digital consulting to help map your technology needs and shape your business's digital transformation strategy — focused, realistic, and on budget.",
        keywords: ["digital consulting", "IT consultant", "digital transformation strategy"],
        hero: "Not sure what technology you need? We help map out the problems, opportunities, and the most fitting digitalization steps for your business — without over-engineering.",
        includes: [
          "Needs & business process audit",
          "Solution & technology recommendations",
          "Feature planning & prioritization (roadmap)",
          "Realistic cost & timeline estimates",
          "Gradual digitalization strategy",
          "Execution guidance",
        ],
        benefits: [
          { title: "Clear Direction", desc: "Know exactly the first step through to the last." },
          { title: "Budget-Friendly", desc: "Avoid investing in features you don't need." },
          { title: "Right Decisions", desc: "Choices based on real needs, not guesswork." },
        ],
      },
    ],
  },
  lokaKasir: {
    eyebrow: "⭐ Kreativita's Flagship Product",
    title: "Loka Kasir — A POS App for Small Businesses",
    description:
      "Loka Kasir is a Point of Sale (POS) app made by Kreativita that helps business owners record sales, manage stock, and monitor financial reports — right from a phone or tablet. It works offline, and it's simple and affordable.",
    features: [
      "Fast transactions with QRIS support & receipt printing",
      "Product, stock, and multi-outlet management",
      "Real-time sales & financial reports",
      "Works offline, syncs automatically when online",
    ],
    ctaTry: "Try Loka Kasir",
    ctaAsk: "Ask the Team",
    online: "● Online",
    total: "Total",
    pay: "Pay",
    products: ["Coffee", "Bread", "Tea"],
  },
  pricing: {
    eyebrow: "AFFORDABLE PRICING",
    title: "Packages to Fit Your Needs & Budget",
    desc: "Transparent pricing with no hidden fees. Custom options are also available.",
    popular: "MOST POPULAR",
    note: "💡 Prices above are initial estimates — contact us for a quote tailored to your specific needs.",
    plans: [
      {
        name: "Starter",
        subtitle: "For SMEs & individuals",
        price: "From IDR 500K",
        priceNote: "/project",
        popular: false,
        features: ["1-page landing page", "Responsive design (mobile & desktop)", "Contact form & WhatsApp", "2 free revisions"],
        cta: "Choose Starter",
      },
      {
        name: "Business",
        subtitle: "Full website / web app",
        price: "IDR 5M",
        priceNote: "/project",
        popular: true,
        features: ["Multi-page / admin dashboard", "Database & API integration", "Content management panel (CMS)", "SEO & speed optimization", "1 month free maintenance"],
        cta: "Choose Business",
      },
      {
        name: "Custom",
        subtitle: "Mobile apps & large systems",
        price: "Custom",
        priceNote: "",
        popular: false,
        features: ["Android & iOS apps", "Custom ERP / POS system", "Payment & third-party integration", "Priority support & SLA"],
        cta: "Request a Quote",
      },
    ],
  },
  process: {
    eyebrow: "HOW IT WORKS",
    title: "4 Easy Steps to Bring Your Project to Life",
    steps: [
      { step: "1", title: "Consultation", description: "Tell us your idea & needs via WhatsApp or email. It's free!", color: "bg-brand-600" },
      { step: "2", title: "Proposal", description: "We put together a clear plan, features, timeline, and pricing.", color: "bg-indigo-600" },
      { step: "3", title: "Development", description: "Our team starts building with regular progress updates.", color: "bg-sky-600" },
      { step: "4", title: "Launch", description: "Your app goes live + support & maintenance afterward.", color: "bg-brand-700" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    desc: "Still have questions? Reach our team directly via WhatsApp or email.",
    items: [
      { q: "How long does a project take?", a: "It depends on complexity. A simple landing page usually takes 3–7 days, a website/web app with a dashboard 2–4 weeks, and a custom mobile app 1–3 months. We provide an exact estimate with the proposal." },
      { q: "Can payment be made in installments / stages?", a: "Yes. Payment is usually split into an upfront deposit and a final payment upon completion. For larger projects it can be arranged in milestones based on progress. We'll discuss the details during consultation." },
      { q: "Do I get the source code?", a: "Yes. After final payment, all source code, accounts, and project assets become entirely yours. No lock-in — you're free to develop it further anytime." },
      { q: "Is there warranty & support after completion?", a: "Yes. We provide a warranty period for bug fixes after launch, and offer optional monthly maintenance if you'd like your website/app continuously maintained and updated." },
      { q: "I don't have a clear concept yet — is that okay?", a: "Absolutely. That's exactly our job. Just tell us your business problem or goal, and our team will help map out the needs, features, and the most fitting, cost-effective solution." },
    ],
  },
  contact: {
    title: "Have an Idea? Let's Build It Together!",
    desc: "Contact the Kreativita team now. Free consultation, fast replies via WhatsApp or email.",
    whatsapp: "Chat via WhatsApp",
    email: "Send Email",
    waMessage: "Hello Kreativita, I'd like to consult about building an app/website.",
  },
  footer: {
    tagline:
      "A technology partner for your business — building websites, apps, and IT solutions at affordable prices. Loka Kasir is one of our products.",
    navTitle: "Navigation",
    navLinks: [
      { href: "/#layanan", label: "Services" },
      { href: "/#produk", label: "Loka Kasir" },
      { href: "/#harga", label: "Pricing" },
      { href: "/#kontak", label: "Contact" },
    ],
    contactTitle: "Contact Us",
    whatsapp: "WhatsApp",
    rights: "Synergizing to build digital innovation.",
  },
  servicePage: {
    backToAll: "← All Services",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    whatYouGet: "What You Get",
    whyImportant: "Why It Matters",
    ctaConsult: "Free Consultation",
    seePricing: "See Pricing",
    readyPrefix: "Ready to start ",
    readyDesc: "Tell us your needs — free consultation, no cost, and we'll help map out the best solution.",
    startNow: "Start Now",
    otherServices: "Other Services",
    waService: (t: string) => `Hello Kreativita Sinergi, I'm interested in your ${t} service.`,
  },
};
