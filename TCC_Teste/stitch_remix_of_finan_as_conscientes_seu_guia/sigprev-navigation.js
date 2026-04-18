document.addEventListener("DOMContentLoaded", function () {
  const pathname = window.location.pathname.replace(/\\/g, "/");
  const isPublicContext = /sigprev_(home_page|landing_page|entrar|verifica_o|cadastro|planos_de_assinatura)/.test(pathname) || pathname === "/";
  const isLoginPage = pathname.includes("sigprev_entrar");

  const routes = {
    landing: "../sigprev_home_page/code.html",
    login: "../sigprev_entrar/sigprev_entrar_fixed.html",
    cadastro: "../sigprev_entrar/code.html",
    verify: "../sigprev_verifica_o/code.html",
    dashboard: "../sigprev_dashboard/sigprev_dashboard_fixed.html",
    historico: "../sigprev_hist_rico/code.html",
    relatorios: "../sigprev_dashboard/sigprev_dashboard_fixed.html",
    planos: isPublicContext ? "../sigprev_planos_de_assinatura/code.html" : "../sigprev_planos/code.html",
    configuracoes: "../sigprev_configura_es_1/code.html"
  };

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

  const bindRouteAction = (element, route) => {
    if (!route || !routes[route]) return;

    if (element.tagName === "A") {
      element.href = routes[route];
      return;
    }

    if (element.tagName === "BUTTON" && !element.hasAttribute("type")) {
      element.type = "button";
    }

    const triggerNavigation = () => goToRoute(route);

    element.addEventListener("click", triggerNavigation);

    if (element.tagName !== "BUTTON") {
      if (!element.hasAttribute("role")) {
        element.setAttribute("role", "button");
      }
      if (!element.hasAttribute("tabindex")) {
        element.tabIndex = 0;
      }
      if (!element.style.cursor) {
        element.style.cursor = "pointer";
      }
      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          triggerNavigation();
        }
      });
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
    if (label.includes("suporte") || label.includes("ajuda") || label.includes("faq") || label.includes("contato") || label.includes("blog") || label.includes("webinar") || label.includes("metodologia") || label.includes("funcionalidade") || label.includes("recurso") || label.includes("seguranca") || label.includes("privacidade") || label.includes("termos") || label.includes("lgpd")) return "landing";
    if (label.includes("consultor")) return "login";
    if (label.includes("criar conta")) return "cadastro";
    if (label.includes("ler artigo") || label.includes("ler guia")) return "landing";
    if (label.includes("home") || label.includes("inicio")) return isPublicContext ? "landing" : "dashboard";
    if (label === "mais" || label === "menu") return isPublicContext ? "landing" : "configuracoes";
    if (label === "entrar") return isLoginPage ? "dashboard" : "login";
    return null;
  };

  const inferButtonRoute = (label) => {
    if (!label) return null;
    if (label.includes("notifications")) return isPublicContext ? null : "relatorios";
    if (label.includes("account_circle") || label.includes("account_balance_wallet")) return isPublicContext ? "login" : "configuracoes";
    if (label === "menu" || label === "mais") return isPublicContext ? "landing" : "configuracoes";
    if (label.includes("comecar agora") || label.includes("criar conta")) return "cadastro";
    if (label.includes("comecar")) return isPublicContext ? "cadastro" : "dashboard";
    if (label.includes("conhecer planos") || label.includes("ver planos")) return "planos";
    if (label.includes("entrar no sistema") || label === "entrar") return isLoginPage ? "dashboard" : "login";
    if (label.includes("verificar e acessar")) return "dashboard";
    if (label.includes("assinar") || label.includes("fale com um consultor")) return "login";
    if (label.includes("google") || label.includes("gov.br")) return "dashboard";
    if (label.includes("ver detalhes")) return "relatorios";
    if (label.includes("revisar agora")) return "relatorios";
    if (label.includes("ver todas") || label.includes("ver tudo")) return "historico";
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
    bindRouteAction(anchor, route);
  });

  document.querySelectorAll("button").forEach((button) => {
    if (button.closest("form")) return;
    const route = button.dataset.route || inferButtonRoute(getElementText(button));
    bindRouteAction(button, route);
  });

  // Some screens use icon spans as actions in the top bar.
  document.querySelectorAll(".material-symbols-outlined.cursor-pointer").forEach((icon) => {
    if (icon.closest("a, button")) return;
    const route = icon.dataset.route || inferButtonRoute(getElementText(icon)) || inferAnchorRoute(getElementText(icon));
    bindRouteAction(icon, route);
  });

  // Some mobile menus were built with divs instead of anchors/buttons.
  document.querySelectorAll("nav .flex.flex-col.items-center.justify-center:not(a):not(button)").forEach((item) => {
    const route = item.dataset.route || inferAnchorRoute(getElementText(item)) || inferButtonRoute(getElementText(item));
    bindRouteAction(item, route);
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
});
