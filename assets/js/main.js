const menuTabs = document.querySelectorAll('.menu-tab');

menuTabs.forEach(link => {
  link.addEventListener('click', () => {
    menuTabs.forEach(tab => tab.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 200;
  let activeId = 'inicio';

  document.querySelectorAll('section').forEach(section => {
    const id = section.getAttribute('id');
    if (id && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      activeId = id;
    }
  });

  if (window.scrollY < 100) activeId = 'inicio';

  const targetTab = document.querySelector(`.menu-tab[href="#${activeId}"]`);
  if (targetTab) {
    menuTabs.forEach(tab => tab.classList.remove('active'));
    targetTab.classList.add('active');
  }
});

// Efeito Typewriter para o Hero
const typewriterContainer = document.getElementById('typewriter-container');
if (typewriterContainer) {
  const line1Text = "Aprendendo melhor sobre:";
  const line2TextPart1 = "Interação Humano ";
  const line2TextPart2 = "Computador.";

  function getHtmlForLength(len) {
    let html = "";
    const cursorHtml = '<span class="typewriter-cursor">|</span>';

    if (len <= 24) {
      html = `<span>${line1Text.substring(0, len)}</span>`;
      return html + cursorHtml;
    }

    html = `<span>${line1Text}</span><br>`;
    let rem = len - 24;

    if (rem <= 17) {
      html += `<span>${line2TextPart1.substring(0, rem)}</span>`;
      return html + cursorHtml;
    }

    html += `<span>${line2TextPart1}</span>`;
    let rem2 = rem - 17;

    html += `<span class="pixel-font">${line2TextPart2.substring(0, rem2)}</span>`;
    return html + cursorHtml;
  }

  let charIndex = 52;
  let isDeleting = true;
  let typingDelay = 100;
  let erasingDelay = 40;
  let pauseDelay = 3000;

  function type() {
    let currentHtml = getHtmlForLength(charIndex);
    typewriterContainer.innerHTML = currentHtml;

    if (isDeleting) {
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === 52) {
      isDeleting = true;
      typingDelay = pauseDelay;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingDelay = 500;
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 1500);
}
