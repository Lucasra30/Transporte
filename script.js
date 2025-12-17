// ✅ CONFIG: coloque seu número aqui (com DDI). Ex.: 55 + DDD + número
// Exemplo: "5511999999999"
const WHATSAPP_NUMBER = "55SEU_DDD_SEU_NUMERO_AQUI";

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function setZapLinks() {
  const baseMsg =
    "Olá, Lukas Barbosa! Gostaria de solicitar um orçamento de transporte com a Fiorino.";

  const ids = ["topZap", "heroZap", "cardZap", "floatZap"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = buildWhatsAppLink(baseMsg);
  });
}

function setupMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const origem = document.getElementById("origem").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const carga = document.getElementById("carga").value.trim();
    const data = document.getElementById("data").value.trim();
    const obs = document.getElementById("obs").value.trim();

    const msg =
`Olá, Lukas Barbosa! Quero um orçamento de transporte com a Fiorino.

• Nome: ${nome}
• WhatsApp: ${telefone || "não informado"}
• Origem: ${origem}
• Destino: ${destino}
• Carga: ${carga}
• Data/horário: ${data || "a combinar"}
• Observações: ${obs || "sem observações"}

Obrigado!`;

    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  });
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

setZapLinks();
setupMenu();
setupQuoteForm();
setYear();


function openGallery(img){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeGallery(){
  document.getElementById("lightbox").style.display = "none";
}

