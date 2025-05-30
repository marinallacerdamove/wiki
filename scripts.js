<script>
    // Atualiza os ícones no favicon e outros links de ícone
    document.querySelectorAll('link[rel=icon], link[rel=apple-touch-icon], link[rel=mask-icon], meta[name=msapplication-TileImage]').forEach(function(node) {
        node.setAttribute(node.hasAttribute("content") ? 'content' : 'href', '/logo_albatross_2.png');
    });
</script>


<script>
    // Atualiza os ícones no favicon e outros links de ícone
    document.querySelectorAll('link[rel=icon], link[rel=apple-touch-icon], link[rel=mask-icon], meta[name=msapplication-TileImage]').forEach(function(node) {
        node.setAttribute(node.hasAttribute("content") ? 'content' : 'href', '/logo_albatross_2.png');
    });
</script>


<script>
  function createLoginBtn() {
    const loginBtn = document.createElement('a');
    loginBtn.href = 'https://wiki.albatroserp.com.br/login';
    loginBtn.target = '_blank';
    loginBtn.classList.add('custom-login-btn');
    loginBtn.innerHTML = `
      <span style="
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        font-size: 0.85rem;
        font-weight: 500;
        color: #666666;
        border: 1px solid transparent;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
        border-radius: 6px;
        background-color: #f2f2f2;
        margin-left: 12px;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#666666">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
        Login Wiki.Albatross
      </span>
    `;

    loginBtn.onmouseenter = () => {
      loginBtn.firstElementChild.style.backgroundColor = '#e0e0e0';
      loginBtn.firstElementChild.style.boxShadow = '0 0 0 1px rgba(0,0,0,0.3)';
      loginBtn.firstElementChild.style.color = '#444444';
      loginBtn.firstElementChild.querySelector('svg').setAttribute('fill', '#444444');
    };

    loginBtn.onmouseleave = () => {
      loginBtn.firstElementChild.style.backgroundColor = '#f2f2f2';
      loginBtn.firstElementChild.style.boxShadow = '0 0 0 1px rgba(0,0,0,0.1)';
      loginBtn.firstElementChild.style.color = '#666666';
      loginBtn.firstElementChild.querySelector('svg').setAttribute('fill', '#666666');
    };

    return loginBtn;
  }

  function waitForToolbarAndInsertBtn() {
    const maxWait = 10000; // 10 segundos no máximo
    const intervalTime = 300;
    let waited = 0;

    const interval = setInterval(() => {
      const toolbar = document.querySelector('.v-toolbar__content');

      if (toolbar) {
        // Garante que não inserimos duas vezes
        if (!toolbar.querySelector('.custom-login-btn')) {
          const btn = createLoginBtn();
          toolbar.appendChild(btn);
        }
        clearInterval(interval); // botão inserido, podemos parar
      }

      waited += intervalTime;
      if (waited >= maxWait) clearInterval(interval); // tempo máximo atingido
    }, intervalTime);
  }

  window.addEventListener('DOMContentLoaded', waitForToolbarAndInsertBtn);
</script>