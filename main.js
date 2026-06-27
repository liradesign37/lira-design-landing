// Animação de revelar ao rolar
const revealEls = document.querySelectorAll(
  ".step, .showcase-copy, .mentor-copy, .mentor-photo, .phone-mock, .section h2.center, .final-cta h2, .form"
);
revealEls.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Formulário → envia o briefing direto para o WhatsApp da Lira Design
const WHATSAPP = "5562992353580";
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.querySelector('[name="nome"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const whats = form.querySelector('[name="whatsapp"]').value.trim();
  const servico = form.querySelector('[name="servico"]').value;

  const texto =
    `Olá Abilio! Quero um projeto 3D com a Lira Design.%0A%0A` +
    `*Nome:* ${encodeURIComponent(nome)}%0A` +
    `*E-mail:* ${encodeURIComponent(email)}%0A` +
    (whats ? `*WhatsApp:* ${encodeURIComponent(whats)}%0A` : "") +
    `*Tipo de projeto:* ${encodeURIComponent(servico)}`;

  msg.textContent = `Perfeito, ${nome || "tudo certo"}! Abrindo o WhatsApp... ◆`;
  window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, "_blank");
  form.reset();
});
