(function () {
  var script = document.currentScript;
  var endpoint = script && script.getAttribute("data-status-endpoint")
    ? script.getAttribute("data-status-endpoint")
    : "/system-status.json";
  var pollMs = 60000;
  var root;

  function setState(state, message) {
    if (!root) {
      return;
    }
    root.setAttribute("data-state", state);
    root.setAttribute("aria-label", message);
    root.title = message;
  }

  function normalize(payload) {
    var state = payload && payload.overall ? String(payload.overall).toLowerCase() : "yellow";
    if (["green", "yellow", "red"].indexOf(state) === -1) {
      state = "yellow";
    }

    if (payload && payload.updatedAt) {
      var parsed = Date.parse(payload.updatedAt);
      if (!Number.isNaN(parsed)) {
        var ageMs = Date.now() - parsed;
        if (ageMs > 30 * 60 * 1000) {
          state = "red";
        } else if (ageMs > 10 * 60 * 1000 && state === "green") {
          state = "yellow";
        }
      }
    }

    if (state === "green") {
      return { state: "green", message: "Aura.Edmonds: All systems green" };
    }
    if (state === "red") {
      return { state: "red", message: "Aura.Edmonds: Red check detected" };
    }
    return { state: "yellow", message: "Aura.Edmonds: Degraded - check email/details" };
  }

  function refresh() {
    fetch(endpoint, {
      cache: "no-store",
      credentials: "omit",
      mode: "cors"
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Status endpoint returned HTTP " + response.status);
        }
        return response.json();
      })
      .then(function (payload) {
        var status = normalize(payload);
        setState(status.state, status.message);
      })
      .catch(function () {
        setState("yellow", "Aura.Edmonds: Status unknown");
      });
  }

  function init() {
    var style = document.createElement("style");
    style.textContent = [
      ".aura-system-status{position:fixed;right:14px;bottom:14px;z-index:2147483000;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border:0;background:transparent;padding:0;cursor:default}",
      ".aura-system-status__dot{display:block;width:12px;height:12px;border-radius:50%;background:#b7791f;box-shadow:0 0 0 2px rgba(255,255,255,.92),0 1px 4px rgba(0,0,0,.24)}",
      ".aura-system-status[data-state=green] .aura-system-status__dot{background:#16803c}",
      ".aura-system-status[data-state=yellow] .aura-system-status__dot{background:#b7791f}",
      ".aura-system-status[data-state=red] .aura-system-status__dot{background:#c62828}",
      "@media (max-width:520px){.aura-system-status{right:10px;bottom:10px}}"
    ].join("");
    document.head.appendChild(style);

    root = document.createElement("button");
    root.type = "button";
    root.className = "aura-system-status";
    root.setAttribute("data-state", "yellow");
    root.setAttribute("aria-label", "Aura.Edmonds: Status unknown");
    root.title = "Aura.Edmonds: Status unknown";

    var dot = document.createElement("span");
    dot.className = "aura-system-status__dot";
    dot.setAttribute("aria-hidden", "true");
    root.appendChild(dot);

    root.addEventListener("click", function () {
      window.alert(root.title);
    });

    document.body.appendChild(root);
    refresh();
    window.setInterval(refresh, pollMs);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
