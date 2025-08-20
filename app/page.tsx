'use client';
import React, { useEffect, useState } from "react";

/**
 * Dimas Prayoga — Data Analyst Portfolio (Bilingual)
 * Next.js (App Router) + Tailwind
 * - Sticky navbar, hero, about, skills, projects, contact, footer
 * - Bilingual toggle (EN/ID) persisted in localStorage
 * - SEO meta tags + JSON-LD (Person + ItemList)
 * - Accessible form (Name, Email, Inquiry) with mailto fallback
 * - Clean 12-col grid, neutral palette with electric blue accents
 * - Emoji icons for portability (swap to SVG if desired)
 */

const LINKS = {
  github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio",
  drive: "https://drive.google.com/drive/folders/11JSbstzBHzbrPFZpwvtDlIJlxQj0WjxF?usp=sharing",
  cv: "https://drive.google.com/file/d/1BU1pQ0rJmbzDE5tw-mrPsX6UeJCDEMR9/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/dimas-prayogaa/",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=dimassprayoga08@gmail.com",

  // New links
  tableau: "https://public.tableau.com/app/profile/dimas.prayoga7117/vizzes",
  kaggle: "https://www.kaggle.com/dimasprayoga",
  instagram: "https://www.instagram.com/bedahd4ta/",
};

const PROFILE = {
  name: "Dimas Prayoga",
  titleEN: "Data Analyst",
  titleID: "Data Analyst",
  location: "Medan, Indonesia",
  // Use local public image for reliability. Replace the file in /public if needed.
  imageSrc: "/dimas.png",
  imageAltEN: "Professional headshot of Dimas Prayoga, Data Analyst based in Medan",
  imageAltID: "Foto profil profesional Dimas Prayoga, Data Analyst berbasis di Medan",
};

// i18n copy
const i18n = {
  en: {
    langLabel: "EN",
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      kicker: "Data-Driven Insights for Smarter Decisions",
      headline: "Turning Data into Actionable Insights",
      sub: `I'm ${PROFILE.name}, a Data Analyst based in Medan. I turn raw data into clear stories — from SQL queries and Python pipelines to BI dashboards. I work with SQL, Python (Pandas, scikit-learn), BigQuery, and build analytical dashboards in Tableau/Power BI/Looker Studio. Open to full-time roles and freelance collaborations.`,
      ctaPortfolio: "View Portfolio",
      ctaCV: "Download CV",
    },
    about: {
      title: "About Me",
      body:
        `I hold a Bachelor's degree in Information Systems (GPA 3.69) and specialize in designing end-to-end data solutions — sourcing data with SQL/BigQuery, transforming it with Python, and delivering decision-ready dashboards in Tableau or Power BI.\n\nI’ve shipped projects ranging from social media sentiment analysis to marketing uplift modeling and large-scale reporting (9M+ impressions / 1.7M+ clicks). My approach blends analytical rigor with practical business context: define the question, validate the data, choose the right method, then present findings with clarity.\n\nIf you need someone who can translate business problems into measurable, data-driven actions — let’s connect. I’m keen to help teams and clients turn data into growth.`,
    },
    skills: {
      title: "Skills & Tools",
      categories: [
        {
          group: "Data Query & Database",
          items: [
            { label: "SQL", icon: "🗄️" },
            { label: "MySQL", icon: "🐬" },
            { label: "PostgreSQL", icon: "🐘" },
            { label: "SQLite", icon: "💾" },
            { label: "BigQuery", icon: "🌐" }
          ],
        },
        {
          group: "Data Processing",
          items: [
            { label: "Python", icon: "🐍" },
            { label: "Pandas", icon: "🧪" },
            { label: "NumPy", icon: "🧮" },
            { label: "scikit-learn", icon: "🤖" },
          ],
        },
        {
          group: "Visualization & BI",
          items: [
            { label: "Tableau", icon: "📊" },
            { label: "Power BI", icon: "⚡" },
            { label: "Looker Studio", icon: "📈" },
          ],
        },
        {
          group: "Spreadsheets",
          items: [
            { label: "Excel", icon: "📗" },
            { label: "Google Sheets", icon: "📘" },
          ],
        },
        {
          group: "Soft Skills",
          items: [
            { label: "Problem-solving", icon: "🧩" },
            { label: "Analytical Thinking", icon: "🧠" },
            { label: "Communication", icon: "💬" },
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      list: [
        {
          name: "Sentiment Analysis on Instagram Comments (Indodax)",
          context: "Financial brands receive huge volumes of comments that are hard to triage manually.",
          data: "~10k+ Instagram comments scraped for analysis.",
          approach: "Text preprocessing (tokenization, stopword removal), TF-IDF features, Naïve Bayes baseline with scikit-learn.",
          tools: "Python, scikit-learn, Pandas, Matplotlib",
          findings: "Model achieved >80% accuracy with clear separation between positive/negative terms; top tokens revealed pain points and trust drivers.",
          impact: "Helped prioritize community responses and guided content strategy for higher engagement.",
          links: {  drive: "https://drive.google.com/drive/folders/13HVz83dKj_pl2ahf8sKrCe0w8hjmTpSL?usp=sharing" },
        },

        {
          name: "E-Commerce Data Analytics Dashboard",
          context:
            "E-Commerce business performance analytics to track revenue drivers, customer behavior, and campaign impact.",
          data:
            "Transactions & customer records (~100k rows).",
          approach:
            "Data cleaning in Python (Pandas), SQL modeling, and interactive visualization in Streamlit.",
          tools: "Python, Pandas, SQL, Streamlit",
          findings:
            "• Top 3 product categories generated >40% of total revenue.\n" +
            "• Repeat customers contributed ~65% of total sales.\n" +
            "• Conversion rate improved by 15% after targeted campaigns.",
          impact:
            "Helped stakeholders quickly identify profitable segments, optimize retention strategy, and support inventory/campaign decisions.",
          links: {
            github: "https://github.com/xxvlrapss/E-Commerce-DataAnalytics",
            website: "https://e-commerce-dataanalytics-hcwukyginay6qplqd3yu84.streamlit.app/",
          },
        },

        {
          name: "E-Commerce Marketing Dashboard",
          context: "Marketing team needed a live view of funnel performance from impression to purchase across channels.",
          data: ">9M impressions and 1.7M clicks integrated from ads & analytics platforms.",
          approach: "Ingest with BigQuery, model metrics, and build a KPI dashboard with Power BI/Looker Studio for daily monitoring.",
          tools: "BigQuery, Power BI / Looker Studio, SQL",
          findings: "Identified underperforming campaigns by device & time window; discovered high-ROI segments.",
          impact: "Enabled budget reallocation and weekly optimizations, increasing CTR and ROI.",
          links: { 
            website: "https://xxvlrapss.github.io/Marketing-Analytics/",
            drive: "https://drive.google.com/drive/folders/18qJWBT6lzDWKXnGmy4vRIB7PzihSSpA6?usp=sharing"
          }
        },

        {
          name: "Bank Marketing Campaign Prediction",
          context: "A Portuguese bank needed to target customers with a higher probability of subscribing to term deposits.",
          data: "41,188 rows, 20 features (demographic + campaign + macro).",
          approach: "Baseline Logistic Regression with balanced evaluation (ROC-AUC), followed by feature insights on call duration & contact history.",
          tools: "Python, scikit-learn, Pandas",
          findings: "Call duration and recent contact history were strong predictors; simple model delivered actionable targeting cues.",
          impact: "Improved call efficiency and increased conversion through better customer selection.",
          links: { github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/portuguese-bank-marketing-campaigns.ipynb",
          },
        },
       
        {
          name: "Crime Data Mapping & Insight (Exploratory)",
          context: "A public-safety analysis project required spatial patterns from large geospatial points.",
          data: ">8M geospatial records with timestamps and categories.",
          approach: "Data cleaning, geohash binning, and heatmaps; trend analysis by hour/day and category.",
          tools: "Python, Pandas, Geo tools, Visualization",
          findings: "Temporal-spatial hotspots surfaced; distinct night vs day patterns per category.",
          impact: "Informed resource allocation recommendations for patrol planning.",
          links: { drive: "https://drive.google.com/drive/folders/1l2R9Xvy2MQ8PJ-yK5dQ17DaGmvJX89dh?usp=sharing" },
        },
        {
          name: "Women’s E-Commerce Clothing Reviews — Sentiment & Insights",
          context:
            "An online women’s clothing retailer uses customer reviews as key signals of product quality, satisfaction, and market preference.",
          data:
            "Dataset includes ~23,000 reviews with star ratings, product IDs, text comments, and customer demographics (age group, etc.).",
          approach:
            "Text cleaning & exploratory sentiment analysis; distribution of ratings; demographic profiling; top-product review analysis.",
          tools: "Python, Pandas, Matplotlib, NLP preprocessing",
          findings:
            "• Positive reviews dominate — ~12,000 more 5-star reviews compared to 1-star.\n" +
            "• Only ~800 1-star reviews → low dissatisfaction overall.\n" +
            "• Top product: Clothing ID 1078 with ~987 five-star reviews, making it one of the 10 most reviewed products.\n" +
            "• Largest age group: 36–45 (31.1%), followed by 26–35 → women aged 26–45 form the core customer base.",
          impact:
            "• Marketing: focus on ages 26–45 using Instagram/Facebook/Pinterest campaigns.\n" +
            "• Product management: maintain stock & variations of bestsellers like Clothing ID 1078.\n" +
            "• Service: address 1–2 star products with quality improvements; encourage positive reviews via loyalty programs.\n" +
            "• Experiment: test bundles/discounts for favorites tailored to the 26–45 segment.",
          links: {
            github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/women-s-e-commerce-clothing-reviews.ipynb",
          },
        },
        {
          name: "North Sumatra Air Quality — Exploratory Analysis",
          context:
            "Focuses on the 2022 Air Quality Index (IKU) across 20+ regencies/cities in North Sumatra, comparing targets vs. achievements (gaps).",
          data:
            "Air quality indicators per district/city with yearly targets and realized outcomes; computed gaps (achievement − target).",
          approach:
            "Exploratory data analysis on regional performance; gap distribution analysis; identification of top/bottom performers; urban vs. rural comparison.",
          tools: "Python, Pandas, Matplotlib/Seaborn",
          findings:
            "• Provincial average target achieved → overall gap ~0.\n" +
            "• Best performers: Toba (+9.9), Tapanuli Tengah, Dairi.\n" +
            "• Underperformers: Medan (−8.0), Deli Serdang, Serdang Bedagai.\n" +
            "• Trend: large urban areas underperforming → likely due to urbanization, transport, industrial emissions.\n" +
            "• Most other regions hover around target (±2).",
          impact:
            "• Benchmarking: study factors behind Toba/Tapanuli/Dairi’s success and replicate elsewhere.\n" +
            "• Priority: intervene in Medan/Deli Serdang with stronger urban air management.\n" +
            "• Strategy: reduce disparities via continuous monitoring & interactive dashboards.",
          links: {
            github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/kualitas-udara-sumatera-utara.ipynb",
          },
        },
      ],
    },
    contact: {
      title: "Contact",
      desc:
        "Have a role, project, or question? Send a message. I usually reply within 24 hours.",
      name: "Name",
      email: "Email",
      inquiry: "Inquiry",
      submit: "Send Message",
      directLinks: "Direct links",
      replySLA: "Reply within 24 hours",
    },
    footer: {
      copyright: `© 2025 ${PROFILE.name} | Data Analyst Portfolio`,
      links: "Links",
    },
    meta: {
      title: "Dimas Prayoga – Data Analyst Portfolio (SQL, Python, BI)",
      description:
        "Professional Data Analyst based in Medan. Portfolio showcasing SQL, Python, Tableau/Power BI, BigQuery projects. Available for work & freelance.",
      keywords:
        "data analyst Indonesia, SQL, Python, Tableau, Power BI, BigQuery, Excel, Medan, portfolio",
    },
  },
  id: {
    langLabel: "ID",
    nav: { about: "Tentang", skills: "Keahlian", projects: "Proyek", contact: "Kontak" },
    hero: {
      kicker: "Insight Berbasis Data untuk Keputusan Lebih Cerdas",
      headline: "Mengubah Data Menjadi Insight yang Bernilai",
      sub: `${PROFILE.name} adalah Data Analyst asal Medan. Saya mengolah data mentah menjadi cerita yang jelas — dari query SQL, pipeline Python, hingga dashboard BI. Mahir menggunakan SQL, Python (Pandas, scikit-learn), BigQuery, serta membangun dashboard di Tableau/Power BI/Looker Studio. Terbuka untuk kerja full-time dan proyek freelance.`,
      ctaPortfolio: "Lihat Portofolio",
      ctaCV: "Unduh CV",
    },
    about: {
      title: "Tentang Saya",
      body:
        `Saya lulusan S1 Sistem Informasi (IPK 3,69) dengan fokus membangun solusi data end-to-end — mulai dari ekstraksi data via SQL/BigQuery, transformasi dengan Python, hingga penyajian insight melalui dashboard Tableau/Power BI.\n\nProyek yang pernah saya tangani meliputi analisis sentimen media sosial, prediksi performa kampanye, hingga pelaporan skala besar (9 juta+ impresi / 1,7 juta+ klik). Pendekatan saya menggabungkan ketelitian analitis dengan konteks bisnis: merumuskan pertanyaan, memvalidasi data, memilih metode yang tepat, lalu menyajikan temuan secara ringkas dan berdampak.\n\nJika Anda butuh analis yang mampu menerjemahkan masalah bisnis menjadi aksi terukur berbasis data — mari berkolaborasi. Saya siap membantu tim dan klien mengubah data menjadi pertumbuhan.`,
    },
    skills: {
      title: "Keahlian & Tools",
      categories: [
        {
          group: "Data Query & Database",
          items: [
            { label: "SQL", icon: "🗄️" },
            { label: "MySQL", icon: "🐬" },
            { label: "PostgreSQL", icon: "🐘" },
            { label: "SQLite", icon: "💾" },
            { label: "BigQuery", icon: "🌐" }
          ],
        },
        {
          group: "Pemrosesan Data",
          items: [
            { label: "Python", icon: "🐍" },
            { label: "Pandas", icon: "🧪" },
            { label: "NumPy", icon: "🧮" },
            { label: "scikit-learn", icon: "🤖" },
          ],
        },
        {
          group: "Visualisasi & BI",
          items: [
            { label: "Tableau", icon: "📊" },
            { label: "Power BI", icon: "⚡" },
            { label: "Looker Studio", icon: "📈" },
          ],
        },
        {
          group: "Spreadsheet",
          items: [
            { label: "Excel", icon: "📗" },
            { label: "Google Sheets", icon: "📘" },
          ],
        },
        {
          group: "Soft Skills",
          items: [
            { label: "Problem-solving", icon: "🧩" },
            { label: "Analytical Thinking", icon: "🧠" },
            { label: "Komunikasi", icon: "💬" },
          ],
        },
      ],
    },
    projects: { // ID projects (same list translated)
      title: "Proyek Unggulan",
      list: [
        {
          name: "Analisis Sentimen Komentar Instagram (Indodax)",
          context: "Merek finansial menerima komentar dalam jumlah besar yang sulit dipilah secara manual.",
          data: "~10k+ komentar Instagram untuk analisis.",
          approach: "Pra-pemrosesan teks (tokenisasi, stopword), fitur TF-IDF, Naïve Bayes baseline dengan scikit-learn.",
          tools: "Python, scikit-learn, Pandas, Matplotlib",
          findings: "Model mencapai akurasi >80% dan memetakan token kunci; mengungkap pain point dan faktor kepercayaan.",
          impact: "Membantu prioritas respons komunitas dan mengarahkan strategi konten untuk keterlibatan yang lebih tinggi.",
          links: { drive: "https://drive.google.com/drive/folders/13HVz83dKj_pl2ahf8sKrCe0w8hjmTpSL?usp=sharing" },
        },

        {
          name: "E-Commerce Data Analytics Dashboard",
          context:
            "Analitik performa bisnis e-commerce untuk memantau pendorong pendapatan, perilaku pelanggan, dan dampak kampanye.",
          data:
            "Transaksi & data pelanggan (~100k baris).",
          approach:
            "Pembersihan data dengan Python (Pandas), pemodelan SQL, dan visualisasi interaktif di Streamlit.",
          tools: "Python, Pandas, SQL, Streamlit",
          findings:
            "• 3 kategori produk teratas menyumbang >40% dari total pendapatan.\n" +
            "• Pelanggan repeat berkontribusi ~65% dari total penjualan.\n" +
            "• Conversion rate naik 15% setelah kampanye tertarget.",
          impact:
            "Membantu stakeholder cepat mengidentifikasi segmen menguntungkan, mengoptimalkan strategi retensi, serta mendukung keputusan stok & kampanye.",
          links: {
            github: "https://github.com/xxvlrapss/E-Commerce-DataAnalytics",
            website: "https://e-commerce-dataanalytics-hcwukyginay6qplqd3yu84.streamlit.app/",
          },
        },
        
        {
          name: "Dashboard Pemasaran E-Commerce",
          context: "Tim marketing membutuhkan tampilan funnel real-time dari impresi hingga pembelian lintas kanal.",
          data: ">9 juta impresi dan 1,7 juta klik dari platform iklan & analytics.",
          approach: "Ingest di BigQuery, pemodelan metrik, dan build dashboard KPI di Power BI/Looker Studio untuk monitoring harian.",
          tools: "BigQuery, Power BI / Looker Studio, SQL",
          findings: "Mengidentifikasi kampanye underperforming berdasarkan perangkat & time window; menemukan segmen dengan ROI tinggi.",
          impact: "Memungkinkan realokasi anggaran dan optimasi mingguan, meningkatkan CTR dan ROI.",
          links: { 
            website: "https://xxvlrapss.github.io/Marketing-Analytics/",
            drive: "https://drive.google.com/drive/folders/18qJWBT6lzDWKXnGmy4vRIB7PzihSSpA6?usp=sharing" },
        },
      
        {
          name: "Prediksi Kampanye Pemasaran Bank",
          context: "Sebuah bank di Portugal ingin menargetkan nasabah dengan peluang berlangganan deposito yang lebih tinggi.",
          data: "41.188 baris, 20 fitur (demografi + kampanye + makro).",
          approach: "Logistic Regression baseline dengan evaluasi berimbang (ROC-AUC), diikuti insight fitur durasi panggilan & riwayat kontak.",
          tools: "Python, scikit-learn, Pandas",
          findings: "Durasi panggilan dan riwayat kontak terbaru menjadi prediktor kuat; model sederhana memberi arahan targeting yang jelas.",
          impact: "Meningkatkan efisiensi panggilan dan konversi melalui seleksi pelanggan yang lebih baik.",
          links: { github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/portuguese-bank-marketing-campaigns.ipynb" },
        },
        
        {
          name: "Pemetaan Data Kejahatan & Insight (Eksplorasi)",
          context: "Proyek analisis keselamatan publik membutuhkan pola spasial dari titik geospasial besar.",
          data: ">8 juta rekaman geospasial dengan timestamp & kategori.",
          approach: "Pembersihan data, geohash binning, dan heatmap; analisis tren per jam/hari dan kategori.",
          tools: "Python, Pandas, Geo tools, Visualisasi",
          findings: "Hotspot temporal-spasial muncul; pola malam vs siang berbeda per kategori.",
          impact: "Memberi rekomendasi alokasi sumber daya untuk perencanaan patroli.",
          links: { drive: "https://drive.google.com/drive/folders/1l2R9Xvy2MQ8PJ-yK5dQ17DaGmvJX89dh?usp=sharing" },
        },
        {
          name: "Ulasan E-Commerce Pakaian Wanita — Sentimen & Insight",
          context:
            "Platform e-commerce pakaian wanita memanfaatkan ulasan pelanggan sebagai indikator kualitas produk, kepuasan, dan preferensi pasar.",
          data:
            "Dataset berisi ~23.000 ulasan dengan rating bintang, ID produk, teks ulasan, dan demografi pelanggan (usia, dll.).",
          approach:
            "Pembersihan teks & analisis sentimen eksploratif; distribusi rating; profil demografi; analisis produk terpopuler.",
          tools: "Python, Pandas, Matplotlib, preprocessing NLP",
          findings:
            "• Mayoritas ulasan positif — ~12.000 ulasan bintang 5 lebih banyak dibanding bintang 1.\n" +
            "• Hanya ~800 ulasan bintang 1 → tingkat ketidakpuasan rendah.\n" +
            "• Produk terbaik: Clothing ID 1078 dengan ~987 ulasan bintang 5 → termasuk 10 produk dengan ulasan terbanyak.\n" +
            "• Kelompok usia dominan: 36–45 tahun (31,1%), disusul 26–35 → segmen utama adalah perempuan usia 26–45 tahun.",
          impact:
            "• Pemasaran: fokus pada segmen usia 26–45 melalui kampanye media sosial (Instagram, Facebook, Pinterest).\n" +
            "• Manajemen produk: pertahankan stok & variasi produk populer seperti Clothing ID 1078.\n" +
            "• Layanan: tingkatkan kualitas produk dengan rating rendah; dorong ulasan positif lewat program loyalitas.\n" +
            "• Penjualan: uji bundling/diskon khusus untuk produk favorit di segmen 26–45 tahun.",
          links: {
            github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/women-s-e-commerce-clothing-reviews.ipynb",
          },
        },
        {
          name: "Kualitas Udara Sumatera Utara — Analisis Eksploratif",
          context:
            "Analisis Indeks Kualitas Udara (IKU) tahun 2022 di 20+ kabupaten/kota di Sumatera Utara dengan membandingkan target dan capaian.",
          data:
            "Indikator kualitas udara per wilayah dengan target tahunan dan realisasi capaian; dihitung gap (capaian − target).",
          approach:
            "EDA performa daerah; analisis distribusi gap; identifikasi wilayah terbaik/terburuk; perbandingan perkotaan vs. pedesaan.",
          tools: "Python, Pandas, Matplotlib/Seaborn",
          findings:
            "• Rata-rata provinsi tercapai → gap keseluruhan ~0.\n" +
            "• Best performer: Toba (+9,9), Tapanuli Tengah, Dairi.\n" +
            "• Underperformer: Medan (−8,0), Deli Serdang, Serdang Bedagai.\n" +
            "• Tren: kota besar cenderung underperform akibat urbanisasi, transportasi, industri.\n" +
            "• Sebagian besar daerah lain relatif stabil di sekitar target (±2).",
          impact:
            "• Benchmarking: identifikasi faktor keberhasilan Toba/Tapanuli/Dairi dan terapkan ke wilayah lain.\n" +
            "• Intervensi prioritas: fokus Medan/Deli Serdang dengan kebijakan transportasi & pengelolaan emisi.\n" +
            "• Strategi provinsi: kurangi disparitas dengan monitoring tahunan & dashboard interaktif.",
          links: {
            github: "https://github.com/xxvlrapss/Data-Analyst-Portofolio/blob/main/kualitas-udara-sumatera-utara.ipynb",
          },
        },
      ],
    },
    contact: {
      title: "Kontak",
      desc:
        "Punya lowongan, proyek, atau pertanyaan? Kirim pesan. Biasanya saya balas dalam 24 jam.",
      name: "Nama",
      email: "Email",
      inquiry: "Kebutuhan",
      submit: "Kirim Pesan",
      directLinks: "Tautan langsung",
      replySLA: "Balas dalam 24 jam",
    },
    footer: {
      copyright: `© 2025 ${PROFILE.name} | Data Analyst Portfolio`,
      links: "Tautan",
    },
    meta: {
      title: "Dimas Prayoga – Portofolio Data Analyst (SQL, Python, BI)",
      description:
        "Data Analyst profesional berbasis di Medan. Portofolio proyek SQL, Python, Tableau/Power BI, BigQuery. Siap kerja & freelance.",
      keywords:
        "data analyst Indonesia, SQL, Python, Tableau, Power BI, BigQuery, Excel, Medan, portofolio",
    },
  },
} as const;

// Helper: convert a Google Drive "file/d/<id>/view" into a direct viewable link (not used for local /dimas.png, but kept for flexibility)
function resolveDriveImage(url: string): string {
  try {
    if (!url) return "/dimas.png";
    const m = url.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view/);
    if (m && m[1]) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
    return url; // already a normal URL or local path
  } catch {
    return "/dimas.png";
  }
}

// Pick a primary URL for a project (for JSON-LD ItemList)
// Order: website > github > drive > fallback ke repo portfolio
function getProjectPrimaryUrl(p: any): string {
  try {
    return (
      p?.links?.website ||
      p?.links?.github ||
      p?.links?.drive ||
      LINKS.github
    );
  } catch {
    return LINKS.github;
  }
}

export default function PortfolioDimasPrayoga() {
  const [lang, setLang] = useState("en");
  const t = i18n[lang as keyof typeof i18n];

  // Persist language & set <html lang>
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Inject SEO tags + JSON-LD into <head>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const head = document.head;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      // valid selector for meta by attribute
      let el = head.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    document.title = t.meta.title;
    // Basic SEO
    setMeta("description", t.meta.description);
    setMeta("keywords", i18n.en.meta.keywords);
    // Open Graph
    setMeta("og:title", t.meta.title, "property");
    setMeta("og:description", t.meta.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", typeof window !== "undefined" ? window.location.href : "", "property");
    setMeta("og:image", "/og-image.webp", "property");

    // Canonical
    let linkCanonical = head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      head.appendChild(linkCanonical);
    }
    linkCanonical.href = typeof window !== "undefined" ? window.location.href : "";

    // --- JSON-LD Person + ItemList ---
    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.name,
      jobTitle: "Data Analyst",
      address: { "@type": "PostalAddress", addressLocality: "Medan", addressCountry: "ID" },
      url: typeof window !== "undefined" ? window.location.href : "",
      image: resolveDriveImage(PROFILE.imageSrc),
      sameAs: [LINKS.github, LINKS.linkedin, LINKS.tableau, LINKS.kaggle, LINKS.instagram],
    };

    const projectItems = (i18n.en.projects.list || []).map((p: any, idx: number) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: getProjectPrimaryUrl(p),
      name: p.name,
      description: p.context,
    }));

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projectItems,
    };

    const ensureScript = (id: string, json: object) => {
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement("script");
        s.type = "application/ld+json";
        s.id = id;
        head.appendChild(s);
      }
      s.text = JSON.stringify(json);
    };

    ensureScript("jsonld-person", person);
    ensureScript("jsonld-itemlist", itemList);

    // Dev-only smoke tests
    try {
      console.assert(!!head.querySelector("meta[name='description']"), "[SEO] Missing meta description");
      console.assert(!!head.querySelector("meta[name='keywords']"), "[SEO] Missing meta keywords");
      console.assert(!!head.querySelector("meta[property='og:title']"), "[SEO] Missing og:title");
      console.assert(!!head.querySelector("link[rel='canonical']"), "[SEO] Missing canonical link");
    } catch (e) {
      console.warn("[SEO] Self-test skipped:", e);
    }
  }, [lang]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const inquiry = String(fd.get("inquiry") || "").trim();
    const subject = encodeURIComponent(`Portfolio Inquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${inquiry}`);
    const mailto = `${LINKS.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  const Section: React.FC<{ id?: string; title?: string; children: React.ReactNode }>
    = ({ id, title, children }) => (
      <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">
            {title}
          </h2>
        )}
        {children}
      </section>
    );

  const ProjectCard: React.FC<{ p: any }> = ({ p }) => (
    <article className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow md:transition-shadow">
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><span className="font-semibold">Context:</span> {p.context}</li>
            <li><span className="font-semibold">Data:</span> {p.data}</li>
            <li><span className="font-semibold">Approach:</span> {p.approach}</li>
            <li><span className="font-semibold">Tools:</span> {p.tools}</li>
            <li><span className="font-semibold">Key Findings:</span> {p.findings}</li>
            <li><span className="font-semibold">Impact:</span> {p.impact}</li>
          </ul>

          <div className="flex gap-3 pt-2">
            {p?.links?.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                aria-label="Open GitHub project"
              >
                GitHub
              </a>
            )}
            {p?.links?.drive && (
              <a
                href={p.links.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                aria-label="Open Drive link"
              >
                Drive
              </a>
            )}
            {p?.links?.website && (
              <a
                href={p.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                aria-label="Open Website link"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Skip link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border px-3 py-2 rounded">Skip to content</a>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center font-bold">DP</div>
            <div className="leading-tight">
              <span className="block text-sm text-gray-500">{PROFILE.location}</span>
              <span className="block font-semibold">{PROFILE.name} — {lang === "en" ? PROFILE.titleEN : PROFILE.titleID}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600" aria-label={i18n.en.nav.about}>{i18n.en.nav.about}</a>
            <a href="#skills" className="hover:text-blue-600" aria-label={i18n.en.nav.skills}>{i18n.en.nav.skills}</a>
            <a href="#projects" className="hover:text-blue-600" aria-label={i18n.en.nav.projects}>{i18n.en.nav.projects}</a>
            <a href="#contact" className="hover:text-blue-600" aria-label={i18n.en.nav.contact}>{i18n.en.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50" aria-label="Open GitHub portfolio">GitHub</a>
            <button aria-label="Toggle language" onClick={() => setLang((prev) => (prev === "en" ? "id" : "en"))} className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              {t.langLabel}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section aria-label="Hero" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">{t.hero.kicker}</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">{t.hero.headline}</h1>
              <p className="mt-5 text-lg text-gray-700 leading-relaxed">{t.hero.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" aria-label={t.hero.ctaPortfolio}>{t.hero.ctaPortfolio}</a>
                <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" aria-label={t.hero.ctaCV}>{t.hero.ctaCV}</a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <img
                  src={resolveDriveImage(PROFILE.imageSrc)}
                  alt={lang === "en" ? PROFILE.imageAltEN : PROFILE.imageAltID}
                  className="w-full h-auto rounded-3xl border border-gray-200 shadow-lg object-cover"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src.indexOf("/dimas.png") === -1) target.src = "/dimas.png";
                  }}
                />
                <div className="absolute -z-10 -inset-6 bg-blue-100/40 blur-2xl rounded-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content anchor */}
      <div id="main" />

      {/* About */}
      <Section id="about" title={t.about.title}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 text-gray-800 leading-relaxed text-lg">
            {t.about.body.split("\n\n").map((para: string, i: number) => (
              <p key={i} className="mb-5">{para}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills & Tools */}
      <Section id="skills" title={t.skills.title}>
        <div className="grid grid-cols-12 gap-6">
          {t.skills.categories.map((cat, idx) => (
            <div key={idx} className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">{cat.group}</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {cat.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span aria-hidden className="text-xl" role="img">{it.icon}</span>
                      <span className="text-gray-800">{it.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.projects.title}>
        <div className="grid grid-cols-12 gap-6">
          {t.projects.list.map((p, i) => (
            <ProjectCard p={p} key={i} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.contact.title}>
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-gray-700 mb-6">{t.contact.desc}</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4" aria-label="Contact form">
              <div className="col-span-12 sm:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contact.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2"
                  aria-required="true"
                />
              </div>
              <div className="col-span-12 sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contact.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2"
                  aria-required="true"
                />
              </div>
              <div className="col-span-12">
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">{t.contact.inquiry}</label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  rows={6}
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2"
                  aria-required="true"
                />
              </div>
              <div className="col-span-12 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  {t.contact.submit}
                </button>
                <span className="text-sm text-gray-600" aria-live="polite">{t.contact.replySLA}</span>
              </div>
            </form>
          </div>

          {/* Direct Links */}
          <aside className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">{t.contact.directLinks}</h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                </li>
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                </li>
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.tableau} target="_blank" rel="noopener noreferrer" aria-label="Tableau Public">Tableau Public</a>
                </li>
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle">Kaggle</a>
                </li>
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                </li>
                <li>
                  <a className="hover:text-blue-600 underline-offset-4 hover:underline" href={LINKS.email} aria-label="Email">Email</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6 text-sm text-gray-600">{t.footer.copyright}</div>
          <div className="col-span-12 md:col-span-6 md:text-right text-sm text-gray-600">
           
            <a href={LINKS.cv} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">CV</a>
            <span className="mx-2">•</span>
            <a href={LINKS.linkedin} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="mx-2">•</span>
            <a href={LINKS.github} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="mx-2">•</span>
            <a href={LINKS.tableau} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Tableau</a>
            <span className="mx-2">•</span>
            <a href={LINKS.kaggle} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Kaggle</a>
            <span className="mx-2">•</span>
            <a href={LINKS.instagram} className="hover:text-blue-600 hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
