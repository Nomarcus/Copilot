const baseSlides = [
  {
    title: "Vad är AI – enkelt förklarat",
    intro:
      "AI (artificiell intelligens) är system som kan känna igen mönster, sammanfatta information och föreslå nästa steg. Copilot i M365 använder AI för att hjälpa dig direkt i de verktyg du redan använder på jobbet.",
    points: [
      { title: "Inte magi", text: "AI gissar nästa bästa svar baserat på data och språkmodeller." },
      { title: "Människa + AI", text: "Du styr målet, AI hjälper med fart, struktur och idéer." },
      { title: "Trygg användning", text: "Datahantering följer Microsoft 365:s säkerhetsramar i organisationen." },
    ],
    examples: [
      ["Exempel", "Sammanfatta 20 sidor mötesanteckningar till 5 beslutspunkter."],
      ["Exempel", "Skapa första utkast till veckobrev utifrån senaste Teams-mötet."],
    ],
  },
  {
    title: "Promptar som fungerar",
    intro:
      "En prompt är en tydlig instruktion till Copilot. Ju mer tydlighet om mål, målgrupp och format, desto bättre resultat.",
    points: [
      { title: "Bra struktur", text: "Roll + uppgift + kontext + format + ton." },
      { title: "Iterera", text: "Be om förbättringar: kortare, mer konkret, med exempel." },
      { title: "Kvalitetssäkra", text: "Kontrollera fakta och anpassa innan du skickar vidare." },
    ],
    examples: [
      [
        "Promptmall",
        "Agera projektledare. Sammanfatta tråden i 6 punkter, markera risker och föreslå nästa steg i tabellformat.",
      ],
      ["Tips", "Lägg till: målgrupp, längd (t.ex. max 150 ord), språk och tonalitet."],
    ],
  },
  {
    title: "Vad är Copilot i Microsoft 365?",
    intro:
      "Copilot är en AI-assistent integrerad i M365-appar. Den kombinerar språkmodell + arbetsdata (behörighetsstyrt) för att hjälpa dig skriva, analysera och kommunicera snabbare.",
    points: [
      { title: "Jobbar i dina appar", text: "Word, PowerPoint, Excel, Outlook, Teams och fler." },
      { title: "Bygger på Microsoft Graph", text: "Kopplar samman möten, mejl, filer och kalender (enligt behörighet)." },
      { title: "Ökar produktivitet", text: "Mindre tid på första utkast, mer tid på kvalitet och beslut." },
    ],
    examples: [["Mål", "Använd Copilot som stöd för första versionen – du gör sista redigeringen."]],
  },
];

const appSlides = [
  {
    title: "Copilot i Word",
    intro: "Skapa, förbättra och sammanfatta dokument med tydlig struktur.",
    points: [
      { title: "Starta från idé", text: "Be om ett utkast med rubriker, syfte och rekommendation." },
      { title: "Förbättra text", text: "Skriv om för kortare språk, bättre ton eller tydligare budskap." },
      { title: "Snabb sammanfattning", text: "Hämta huvudbudskap och åtgärdspunkter ur långa dokument." },
    ],
    examples: [["Exempel", "Gör om denna policytext till en version för medarbetare på max 250 ord."]],
  },
  {
    title: "Copilot i PowerPoint",
    intro: "Bygg presentationer snabbare från dokument, punkter eller agenda.",
    points: [
      { title: "Skapa slide-utkast", text: "Generera en första presentation med logisk berättelse." },
      { title: "Förfina innehåll", text: "Kortare bullets, tydligare rubriker, bättre flöde mellan sidor." },
      { title: "Talarstöd", text: "Få förslag på speaker notes och övergångar." },
    ],
    examples: [["Exempel", "Skapa en 8-slides onboardingpresentation för nya medarbetare."]],
  },
  {
    title: "Copilot i Excel",
    intro: "Analysera data, hitta avvikelser och skapa enkla visualiseringar.",
    points: [
      { title: "Ställ frågor i naturligt språk", text: "Be om trender per månad, region eller team." },
      { title: "Snabb analys", text: "Identifiera toppar, bottnar och möjliga orsaker." },
      { title: "Formelförslag", text: "Få hjälp med relevanta formler och tabellstruktur." },
    ],
    examples: [["Exempel", "Visa vilka tre kundsegment som vuxit mest senaste kvartalet."]],
  },
  {
    title: "Copilot i Outlook",
    intro: "Hantera mejlflödet snabbare med sammanfattningar och svarsförslag.",
    points: [
      { title: "Sammanfatta trådar", text: "Få lägesbild: beslut, frågor och nästa steg." },
      { title: "Skriv svar", text: "Välj ton: vänlig, direkt, formell eller handlingsorienterad." },
      { title: "Prioritera", text: "Fokusera på meddelanden som kräver agerande först." },
    ],
    examples: [["Exempel", "Skriv ett svar som bekräftar leveransplan och ber om saknade underlag."]],
  },
  {
    title: "Copilot i Teams",
    intro: "Få stöd före, under och efter möten.",
    points: [
      { title: "Mötesöversikt", text: "Sammanfattning av vad som beslutats och av vem." },
      { title: "Fråga under mötet", text: "Be om förtydliganden utan att avbryta flödet." },
      { title: "Efterarbete", text: "Generera uppföljningsmeddelande och ansvarsfördelning." },
    ],
    examples: [["Exempel", "Lista öppna frågor från mötet och föreslå ansvarig person."]],
  },
  {
    title: "Copilot i OneNote och Loop",
    intro: "Samla idéer, strukturera anteckningar och samarbeta i realtid.",
    points: [
      { title: "OneNote", text: "Sammanfatta långa anteckningar till konkreta åtgärder." },
      { title: "Loop", text: "Skapa delade arbetsytor med förslag på nästa aktiviteter." },
      { title: "Kunskapsdelning", text: "Gör teamets kunskap lättare att återanvända." },
    ],
    examples: [["Exempel", "Förvandla workshopanteckningar till en tydlig handlingsplan."]],
  },
];

const teamCustomizations = {
  general: {
    heading: "Generell introduktion",
    tags: ["Alla team", "Grundnivå", "Produktivitet"],
    note: "Bra start för hela organisationen."
  },
  sales: {
    heading: "Anpassning för säljteam",
    tags: ["Prospektering", "Kundmejl", "Offertunderlag"],
    note: "Fokusera på snabbare kundkommunikation och bättre pipeline-översikt."
  },
  hr: {
    heading: "Anpassning för HR-team",
    tags: ["Policyutkast", "Intervjuer", "Intern kommunikation"],
    note: "Fokusera på tydlig kommunikation, onboarding och medarbetarstöd."
  },
  leadership: {
    heading: "Anpassning för ledningsgrupp",
    tags: ["Beslutsunderlag", "Statusrapporter", "Strategi"],
    note: "Fokusera på snabba sammanfattningar och beslutsförberedelser."
  },
  it: {
    heading: "Anpassning för IT och support",
    tags: ["Incidentrapporter", "Kunskapsartiklar", "Supportsvar"],
    note: "Fokusera på standardiserade svar och tydliga felsökningsflöden."
  }
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
    li.textContent = slide.title;
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
    <p class="tag">${team.heading}</p>
    <h2>${slide.title}</h2>
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
          <h3>${point.title}</h3>
          <p>${point.text}</p>
        </article>
      `
        )
        .join("")}
    </div>

    <h3>Praktiska exempel</h3>
    <ul class="examples">
      ${slide.examples
        .map(
          (example) => `<li><strong>${example[0]}:</strong> ${example[1]}</li>`
        )
        .join("")}
    </ul>
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
