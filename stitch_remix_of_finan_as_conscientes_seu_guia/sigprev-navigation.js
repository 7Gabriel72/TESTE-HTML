(function () {
  const routes = {
    landing: "../sigprev_home/code.html",
    login: "../sigprev_login_e_cadastro/code.html",
    verify: "../sigprev_verifica_o/code.html",
    dashboard: "../sigprev_dashboard/code.html",
    historico: "../sigprev_hist_rico/code.html",
    relatorios: "../sigprev_relat_rios_e_metas/code.html",
    planos: "../sigprev_planos_de_assinatura/code.html",
    configuracoes: "../sigprev_configura_es_1/code.html"
  };

  const pathname = window.location.pathname.replace(/\\/g, "/");
  const isPublicContext = /sigprev_(home|landing_page|login_e_cadastro|entrar|verifica_o)/.test(pathname);

  const normalize = (value) =>
    (value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  const getElementText = (element) => {
    const iconText = Array.from(element.querySelectorAll(".material-symbols-outlined"))
      .map((icon) => icon.dataset.icon || icon.textContent || "")
      .join(" ");
    return normalize(`${element.textContent || ""} ${iconText}`);
  };

  const goToRoute = (routeKey) => {
    const target = routes[routeKey];
    if (target) {
      window.location.href = target;
    }
  };

  const inferAnchorRoute = (label) => {
    if (!label) return null;
    if (label.includes("dashboard")) return "dashboard";
    if (label.includes("historico") || label.includes("receipt_long")) return "historico";
    if (label.includes("meta") || label.includes("relatorio") || label.includes("analytics") || label.includes("description") || label.includes("track_changes")) return "relatorios";
    if (label.includes("plano") || label.includes("assinatura") || label.includes("payments")) return "planos";
    if (label.includes("configurac") || label.includes("settings")) return "configuracoes";
    if (label.includes("sair") || label.includes("logout")) return "landing";
    if (label.includes("esqueceu") || label.includes("esqueci") || label.includes("solicitar acesso")) return "verify";
    if (label.includes("suporte") || label.includes("ajuda") || label.includes("faq") || label.includes("contato") || label.includes("blog") || label.includes("guia") || label.includes("webinar") || label.includes("metodologia") || label.includes("funcionalidade") || label.includes("recurso") || label.includes("seguranca") || label.includes("privacidade") || label.includes("termos") || label.includes("lgpd")) return "landing";
    if (label.includes("consultor")) return "login";
    if (label.includes("criar conta")) return "login";
    if (label.includes("ler artigo") || label.includes("ler guia")) return "landing";
    if (label.includes("home") || label.includes("inicio")) return isPublicContext ? "landing" : "dashboard";
    if (label.includes("mais") || label.includes("menu")) return isPublicContext ? "landing" : "configuracoes";
    return null;
  };

  const inferButtonRoute = (label) => {
    if (!label) return null;
    if (label.includes("notifications")) return "relatorios";
    if (label.includes("account_circle") || label.includes("account_balance_wallet")) return "configuracoes";
    if (label === "menu" || label.includes(" mais ")) return isPublicContext ? "landing" : "configuracoes";
    if (label.includes("comecar agora") || label.includes("criar conta")) return "login";
    if (label.includes("conhecer planos") || label.includes("ver planos")) return "planos";
    if (label.includes("entrar no sistema") || label === "entrar") return "dashboard";
    if (label.includes("verificar e acessar")) return "dashboard";
    if (label.includes("assinar") || label.includes("fale com um consultor")) return "login";
    if (label.includes("google") || label.includes("gov.br")) return "dashboard";
    if (label.includes("ver detalhes")) return "relatorios";
    if (label.includes("revisar agora")) return "relatorios";
    if (label.includes("novo investimento") || label.includes("novo lancamento")) return "historico";
    if (label.includes("agendar agora")) return "configuracoes";
    return null;
  };

  const inferFormRoute = (form) => {
    const submitButton = form.querySelector('[type="submit"]');
    const submitLabel = normalize(submitButton ? submitButton.textContent : "");
    if (submitLabel.includes("verificar e acessar")) return "dashboard";
    if (submitLabel.includes("entrar no sistema") || submitLabel === "entrar") return "dashboard";
    return null;
  };

  document.querySelectorAll('a[href="#"], a[data-route]').forEach((anchor) => {
    const route = anchor.dataset.route || inferAnchorRoute(getElementText(anchor));
    if (route && routes[route]) anchor.href = routes[route];
  });

  document.querySelectorAll("button").forEach((button) => {
    if (button.closest("form")) return;
    const route = button.dataset.route || inferButtonRoute(getElementText(button));
    if (route && routes[route]) {
      button.type = button.type || "button";
      button.addEventListener("click", () => goToRoute(route));
    }
  });

  document.querySelectorAll("form").forEach((form) => {
    const route = form.dataset.submitRoute || inferFormRoute(form);
    if (route && routes[route]) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        goToRoute(route);
      });
    }
  });
})();
