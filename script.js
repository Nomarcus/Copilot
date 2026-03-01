const baseSlides = [
  {
    key: "intro-ai",
    app: "AI-grund",
    icon: "🧠",
    title: "1. Vad AI är – och inte är",
    intro:
      "Starta med en enkel bild: AI hjälper oss upptäcka mönster, sammanfatta och skapa utkast. Det ersätter inte expertisen i teamet utan förstärker den.",
    points: [
      { title: "Mönsterigenkänning", text: "AI hittar samband i text, siffror och historik snabbare än manuellt arbete." },
      { title: "Människa i kontroll", text: "Du sätter mål, tone-of-voice och godkänner innan något delas vidare." },
      { title: "Från idé till utkast", text: "Använd AI för första versionen, inte för sista ordet." },
    ],
    examples: [
      ["Exempel", "Sammanfatta ett 60-minuters möte till 5 beslut och 3 actions."],
      ["Prata om", "Skillnaden mellan automatisering och klok assistans."],
    ],
    talkTrack: "Tryck på att Copilot ger tempo i vardagen – men kvalitetssäkring ligger alltid hos oss.",
    metrics: [
      { label: "Tid till utkast", value: "-40%" },
      { label: "Beslutsfokus", value: "+mer" },
    ],
  },
  {
    key: "prompt",
    app: "Promptdesign",
    icon: "✨",
    title: "2. Promptar som ger bra resultat",
    intro:
      "En bra prompt gör Copilot relevant. Ge roll, mål, kontext och format så blir resultatet tydligare direkt.",
    points: [
      { title: "R-A-M-F-modell", text: "Roll, Aktivitet, Målgrupp, Format – en enkel modell som funkar i alla appar." },
      { title: "Förfina i två steg", text: "Börja med ett utkast och be sedan om förbättring: kortare, skarpare, mer konkret." },
      { title: "Kvalitetssäkra", text: "Kontrollera fakta, siffror och känslig information innan publicering." },
    ],
    examples: [
      ["Prompt", "Agera projektledare. Ge status i 6 punkter med risker och nästa steg i tabell."],
      ["Tips", "Lägg till målgrupp, ordgräns och ton: t.ex. professionell och handlingsorienterad."],
    ],
    talkTrack: "Visa gärna samma prompt i två varianter för att illustrera hur kvaliteten lyfter.",
    metrics: [
      { label: "Färre omtag", value: "2x" },
      { label: "Tydlighet", value: "Hög" },
    ],
  },
  {
    key: "overview",
    app: "M365 Copilot",
    icon: "🛰️",
    title: "3. Hur Copilot hänger ihop i M365",
    intro:
      "Copilot jobbar i dina vanliga verktyg och använder behörighetsstyrd data från Microsoft Graph. Det gör att svar blir relevanta för varje roll.",
    points: [
      { title: "I dina dagliga appar", text: "Word, Excel, PowerPoint, Outlook, Teams, OneNote och Loop." },
      { title: "En sammanhängande kontext", text: "Möten, mejl, filer och kalender länkas ihop för att ge bättre svar." },
      { title: "Säkerhetsramar", text: "Copilot respekterar samma rättigheter som användaren redan har." },
    ],
    examples: [["Budskap", "Rätt person får rätt AI-stöd utifrån samma behörigheter som i M365."]],
    talkTrack: "Det här är en bra slide för att skapa trygghet innan du visar skarpa exempel.",
    metrics: [
      { label: "Appar i flöde", value: "7+" },
      { label: "Datakällor", value: "Graph" },
    ],
  },
];

const appSlides = [
  {
    key: "word",
    app: "Word",
    icon: "📝",
    title: "4. Word – från blankt dokument till beslut",
    intro: "Word med Copilot är perfekt för policyer, beslutsunderlag och intern kommunikation.",
    points: [
      { title: "Starta snabbt", text: "Skapa utkast med rubriker, syfte och rekommendation på sekunder." },
      { title: "Förbättra språk", text: "Gör text kortare, tydligare eller mer målgruppsanpassad." },
      { title: "Sammanfatta långt", text: "Plocka ut huvudbudskap och åtgärder ur stora dokument." },
    ],
    examples: [["Exempel", "Skriv om denna policy till en lättläst version för hela organisationen, max 250 ord."]],
    talkTrack: "Betona att Copilot gör första 70 %, men människa säkrar de viktiga 30 %.",
    metrics: [
      { label: "Dokumenttempo", value: "Snabbt" },
      { label: "Klarhet", value: "+" },
    ],
  },
  {
    key: "ppt",
    app: "PowerPoint",
    icon: "🎯",
    title: "5. PowerPoint – bygg en berättelse snabbare",
    intro: "Skapa en tydlig presentation från dokument, agenda eller några rader text.",
    points: [
      { title: "Slide-utkast", text: "Generera en första storyline med logisk struktur." },
      { title: "Förfina budskap", text: "Kortare bullets, tydligare rubriker och bättre övergångar." },
      { title: "Presenterstöd", text: "Få förslag på speaker notes när du övar inför mötet." },
    ],
    examples: [["Exempel", "Skapa 8 slides för onboarding med mål, risker och nästa steg."]],
    talkTrack: "Perfekt när du snabbt behöver gå från rådata till något som går att presentera.",
    metrics: [
      { label: "Tid till deck", value: "-50%" },
      { label: "Flöde", value: "Tydligt" },
    ],
  },
  {
    key: "excel",
    app: "Excel",
    icon: "📊",
    title: "6. Excel – snabb analys utan komplexa formler",
    intro: "Ställ frågor i naturligt språk och få analys, trender och visualiseringar.",
    points: [
      { title: "Fråga direkt", text: "Visa trender per månad, region eller kundsegment." },
      { title: "Hitta avvikelser", text: "Identifiera toppar och bottnar med möjliga orsaker." },
      { title: "Formelassistans", text: "Få förslag på formler och struktur när datan växer." },
    ],
    examples: [["Exempel", "Vilka tre kundsegment växte mest senaste kvartalet och varför?"]],
    talkTrack: "Bra för ledningsdialog: från tabell till insikt på några sekunder.",
    metrics: [
      { label: "Analystid", value: "-35%" },
      { label: "Insikter", value: "+snabbt" },
    ],
  },
  {
    key: "outlook",
    app: "Outlook",
    icon: "📬",
    title: "7. Outlook – få kontroll på mejlflödet",
    intro: "Copilot hjälper dig sammanfatta trådar, prioritera och skriva svar med rätt ton.",
    points: [
      { title: "Lägesbild på sekunder", text: "Få beslut, frågor och nästa steg från långa trådar." },
      { title: "Svara smartare", text: "Skapa svar med rätt tonalitet beroende på mottagare." },
      { title: "Prioritera rätt", text: "Lägg fokus på mejl som kräver handling först." },
    ],
    examples: [["Exempel", "Skriv svar som bekräftar leveransplan och efterfrågar saknade underlag."]],
    talkTrack: "Detta är ofta den snabbaste wow-demonstrationen i vardagsarbete.",
    metrics: [
      { label: "Svarstid", value: "-30%" },
      { label: "Fokus", value: "Bättre" },
    ],
  },
  {
    key: "teams",
    app: "Teams",
    icon: "🎙️",
    title: "8. Teams – bättre möten före, under och efter",
    intro: "Copilot fångar beslut, action points och hjälper teamet att hålla riktning.",
    points: [
      { title: "Inför mötet", text: "Skapa agenda och syfte utifrån tidigare trådar." },
      { title: "Under mötet", text: "Ställ frågor om vad som beslutats utan att tappa tempo." },
      { title: "Efter mötet", text: "Generera uppföljning med ansvar och deadlines." },
    ],
    examples: [["Exempel", "Lista öppna frågor och föreslå ansvarig person per punkt."]],
    talkTrack: "Framhäv hur möten blir kortare men mer beslutstunga.",
    metrics: [
      { label: "Mötestid", value: "-20%" },
      { label: "Uppföljning", value: "Klar" },
    ],
  },
  {
    key: "notes-loop",
    app: "OneNote & Loop",
    icon: "🔄",
    title: "9. OneNote & Loop – från idé till gemensam handling",
    intro: "Strukturera anteckningar och bygg en levande arbetsyta där teamet jobbar vidare.",
    points: [
      { title: "OneNote", text: "Förvandla långa anteckningar till tydliga actions." },
      { title: "Loop", text: "Skapa delade komponenter som uppdateras i realtid." },
      { title: "Kunskap som lever", text: "Gör teamets lärdomar återanvändbara över tid." },
    ],
    examples: [["Exempel", "Gör om workshopanteckningar till en prioriterad handlingsplan för nästa sprint."]],
    talkTrack: "En bra avslutning: visa att Copilot hjälper både individ och team i samma flöde.",
    metrics: [
      { label: "Samarbete", value: "Smidigt" },
      { label: "Idé→Plan", value: "Snabb" },
    ],
  },
];

const teamCustomizations = {
  general: {
    heading: "Generell introduktion",
    tags: ["Alla team", "Grundnivå", "Produktivitet"],
    note: "En enkel berättelse från AI-grund till praktisk nytta i varje app.",
  },
  sales: {
    heading: "Anpassning för säljteam",
    tags: ["Prospektering", "Kundmejl", "Offertunderlag"],
    note: "Lyft Outlook, Teams och PowerPoint extra för snabbare kunddialog och skarpare erbjudanden.",
  },
  hr: {
    heading: "Anpassning för HR-team",
    tags: ["Policyutkast", "Intervjuer", "Intern kommunikation"],
    note: "Fokusera på Word, Teams och OneNote för tydlig kommunikation och bättre medarbetarstöd.",
  },
  leadership: {
    heading: "Anpassning för ledningsgrupp",
    tags: ["Beslutsunderlag", "Statusrapporter", "Strategi"],
    note: "Fokusera på sammanfattningar, riskbild och beslutspunkter i varje del.",
  },
  it: {
    heading: "Anpassning för IT och support",
    tags: ["Incidentrapporter", "Kunskapsartiklar", "Supportsvar"],
    note: "Lägg tyngd på Excel, Outlook och Loop för snabbare analys och mer konsekvent supportflöde.",
  },
};

const slideList = document.querySelector("#slideList");
const slideCard = document.querySelector("#slide");
const slideCounter = document.querySelector("#slideCounter");
const teamSelect = document.querySelector("#teamSelect");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentIndex = 0;
const slides = [...baseSlides, ...appSlides];

function renderMenu() {
  slideList.innerHTML = "";
  slides.forEach((slide, index) => {
    const li = document.createElement("li");
    li.textContent = `${slide.icon} ${slide.title}`;
    li.className = index === currentIndex ? "active" : "";
    li.addEventListener("click", () => {
      currentIndex = index;
      renderSlide();
      renderMenu();
    });
    slideList.appendChild(li);
  });
}

function renderSlide() {
  const team = teamCustomizations[teamSelect.value];
  const slide = slides[currentIndex];

  slideCard.innerHTML = `
    <div class="slide-hero">
      <div>
        <p class="app-badge">${slide.icon} ${slide.app}</p>
        <h2>${slide.title}</h2>
      </div>
      <div class="hero-metrics">
        ${slide.metrics
          .map(
            (metric) => `
          <div class="metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <p class="tag">${team.heading}</p>
    <p>${slide.intro}</p>

    <div>
      ${team.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <p class="success">${team.note}</p>

    <div class="fact-grid">
      ${slide.points
        .map(
          (point) => `
        <article class="fact">
          <h3><span>${slide.icon}</span>${point.title}</h3>
          <p>${point.text}</p>
        </article>
      `
        )
        .join("")}
    </div>

    <h3>Praktiska exempel</h3>
    <ul class="examples">
      ${slide.examples
        .map((example) => `<li><strong>${example[0]}:</strong> ${example[1]}</li>`)
        .join("")}
    </ul>

    <p class="presenter-tip"><strong>Presentatörstips:</strong> ${slide.talkTrack}</p>
  `;

  slideCounter.textContent = `Sida ${currentIndex + 1} av ${slides.length}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderSlide();
    renderMenu();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    renderSlide();
    renderMenu();
  }
});

teamSelect.addEventListener("change", renderSlide);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextBtn.click();
  }
  if (event.key === "ArrowLeft") {
    prevBtn.click();
  }
});

renderMenu();
renderSlide();
