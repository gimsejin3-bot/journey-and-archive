(() => {
  "use strict";

  const data = window.JOURNEY_ARCHIVE_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const safeURL = (value) => /^https:\/\//i.test(value || "") ? escapeHTML(value) : "#";

  const countryList = $("#country-list");
  const routeGrid = $("#route-grid");
  const spotTitle = $("#spot-title");
  const spotCount = $("#spot-count");
  const mapStatus = $("#map-status");
  const mapCoordinates = $("#map-coordinates");
  const mapReset = $("#map-reset");
  const routeTotal = $("#route-total");
  const archiveList = $("#archive-list");

  const countryById = new Map(data.countries.map((country) => [country.id, country]));
  let selectedCountry = null;
  let selectedRoute = null;
  let map = null;
  let routeLines = [];
  let routePins = [];

  function renderCountryPills() {
    countryList.innerHTML = data.countries.map((country) => `
      <button class="country-pill" type="button" data-country="${escapeHTML(country.id)}" aria-pressed="false">
        <span>${escapeHTML(country.localName)}</span><span class="country-qty">${String(country.count).padStart(2, "0")}</span>
      </button>`).join("");
    routeTotal.textContent = String(data.routes.length);
  }

  function setupMap() {
    if (!window.L || !$("#travel-map")) {
      mapStatus.textContent = "MAP UNAVAILABLE";
      return;
    }

    map = L.map("travel-map", {
      zoomControl: false,
      scrollWheelZoom: false,
      worldCopyJump: true,
      minZoom: 2,
      maxZoom: 13
    }).setView([25, 15], 2.05);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);

    data.countries.forEach((country) => {
      const icon = L.divIcon({
        className: "country-marker-wrap",
        html: `<div class="country-marker" data-marker-country="${escapeHTML(country.id)}">${escapeHTML(country.localName)}</div>`,
        iconSize: [104, 40],
        iconAnchor: [52, 20]
      });
      const marker = L.marker(country.coordinates, {
        icon,
        keyboard: true,
        title: `${country.localName} 여행 루트 보기`
      }).addTo(map);
      marker.on("click", () => selectCountry(country.id));
    });
  }

  function clearRouteLayers() {
    routeLines.forEach((layer) => map && map.removeLayer(layer));
    routePins.forEach((pin) => map && map.removeLayer(pin));
    routeLines = [];
    routePins = [];
  }

  function setCountryState() {
    countryList.querySelectorAll("[data-country]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.country === selectedCountry));
    });
    document.querySelectorAll("[data-marker-country]").forEach((marker) => {
      marker.classList.toggle("is-active", marker.dataset.markerCountry === selectedCountry);
    });
  }

  function selectCountry(countryId, { moveMap = true } = {}) {
    const country = countryById.get(countryId);
    if (!country) return;
    selectedCountry = countryId;
    selectedRoute = null;
    $("#route-detail").hidden = true;
    const routes = data.routes.filter((route) => route.countryId === countryId);

    mapStatus.textContent = `${country.region} · ${country.name.toUpperCase()}`;
    mapCoordinates.textContent = `${country.coordinates[0].toFixed(2)}° N · ${country.coordinates[1].toFixed(2)}° E`;
    mapReset.hidden = false;
    spotTitle.textContent = `${country.localName} · 여행 루트`;
    spotCount.textContent = `${String(routes.length).padStart(2, "0")} PHOTO ROUTES`;
    setCountryState();
    renderRoutes(routes);

    if (map) {
      clearRouteLayers();
      if (moveMap) map.flyTo(country.coordinates, country.zoom, { duration: 1.2, easeLinearity: 0.25 });
      routes.forEach((route) => {
        const line = L.polyline(route.coordinates, {
          color: "#0666ff",
          weight: 3,
          opacity: 0.82,
          lineCap: "round",
          lineJoin: "round"
        }).addTo(map);
        line.on("click", () => selectRoute(route.id));
        routeLines.push(line);

        const icon = L.divIcon({
          className: "route-pin-wrap",
          html: `<span class="route-pin" data-route-pin="${escapeHTML(route.id)}">${escapeHTML(route.number)}</span>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        const pin = L.marker(route.coordinates[0], { icon, title: route.title, keyboard: true }).addTo(map);
        pin.on("click", () => selectRoute(route.id));
        routePins.push(pin);
      });
    }
    if (!routes.length) renderEmptyRoutes();
  }

  function renderRoutes(routes) {
    if (!routes.length) {
      renderEmptyRoutes();
      return;
    }
    routeGrid.innerHTML = routes.map((route) => `
      <article class="route-card" data-route-card="${escapeHTML(route.id)}">
        <button class="route-card-button" type="button" data-route="${escapeHTML(route.id)}" aria-pressed="false">
          <div class="route-photo">
            <img src="${safeURL(route.image)}" alt="${escapeHTML(route.imageAlt)}" loading="lazy">
            <span class="photo-number">ROUTE ${escapeHTML(route.number)}</span>
          </div>
          <div class="route-card-copy">
            <div class="route-card-meta"><span>${escapeHTML(route.location)}</span><span>${escapeHTML(route.duration)} · ${escapeHTML(route.distance)}</span></div>
            <h4>${escapeHTML(route.title)}</h4>
            <p class="route-stops">${route.stops.map(escapeHTML).join(" · ")}</p>
            <div class="transit-callout"><span class="transit-callout-icon" aria-hidden="true">🚆</span><span class="transit-callout-text">${escapeHTML(route.transit)}</span></div>
          </div>
        </button>
      </article>`).join("");
  }

  function renderEmptyRoutes() {
    routeGrid.innerHTML = '<div class="journey-empty"><span class="empty-sticker" aria-hidden="true">✳</span><p>새로운 경로를 준비하고 있어요.</p></div>';
  }

  function selectRoute(routeId) {
    const route = data.routes.find((item) => item.id === routeId);
    if (!route) return;
    if (selectedCountry !== route.countryId) selectCountry(route.countryId, { moveMap: false });
    selectedRoute = routeId;
    const country = countryById.get(route.countryId);
    mapStatus.textContent = `${country.name.toUpperCase()} · ROUTE ${route.number}`;
    mapCoordinates.textContent = `${route.title} · ${route.distance}`;
    routeGrid.querySelectorAll("[data-route-card]").forEach((card) => {
      const active = card.dataset.routeCard === routeId;
      card.classList.toggle("is-active", active);
      card.querySelector("[data-route]").setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-route-pin]").forEach((pin) => {
      pin.classList.toggle("is-active", pin.dataset.routePin === routeId);
    });
    const routes = data.routes.filter((item) => item.countryId === selectedCountry);
    routeLines.forEach((line, index) => {
      const active = routes[index]?.id === routeId;
      line.setStyle({ color: active ? "#ff385c" : "#0666ff", weight: active ? 5 : 3, opacity: active ? 1 : .66 });
      if (active) line.bringToFront();
    });
    if (map) {
      map.flyToBounds(L.latLngBounds(route.coordinates), {
        padding: [72, 72],
        maxZoom: 14.5,
        duration: 1.1,
        easeLinearity: 0.25
      });
    }
    renderRouteDetail(route);
    $("#route-detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderRouteDetail(route) {
    const detail = $("#route-detail");
    $("#detail-meta").textContent = `${route.location.toUpperCase()} · ROUTE ${route.number}`;
    $("#detail-title").textContent = route.title;
    $("#detail-description").textContent = route.description || route.note || "";
    $("#detail-places").innerHTML = (route.highlights || []).map((place, index) => `
      <article class="place-note">
        <span class="place-index">0${index + 1}</span>
        <div><h5>${escapeHTML(place.name)}</h5><p>${escapeHTML(place.detail)}</p></div>
      </article>`).join("");

    const food = route.food || { name: "현지 음식", detail: "주변 식당과 현지 추천 메뉴를 살펴보세요." };
    $("#detail-food").innerHTML = `
      <div class="detail-card-heading"><span class="detail-sticker sticker-orange" aria-hidden="true">✳</span><div><p class="detail-overline">LOCAL TABLE</p><h4>먹거리 추천</h4></div></div>
      <h5>${escapeHTML(food.name)}</h5><p>${escapeHTML(food.detail)}</p>`;

    $("#detail-transit").innerHTML = `
      <div class="detail-card-heading"><span class="detail-sticker sticker-sky" aria-hidden="true">↗</span><div><p class="detail-overline">GETTING AROUND</p><h4>대중교통 팁</h4></div></div>
      <p>${escapeHTML(route.transit || "현지 교통편과 운행 시간을 출발 전에 확인하세요.")}</p>`;

    const swim = route.swim || { name: "수영 정보 없음", detail: "현지의 공식 수영 시설과 당일 안전 안내를 확인하세요.", safety: "지정된 수영 구역만 이용" };
    $("#detail-swim").innerHTML = `
      <div class="detail-card-heading"><span class="detail-sticker sticker-purple" aria-hidden="true">≈</span><div><p class="detail-overline">WATER & REST</p><h4>물가에서 쉬어가기</h4></div></div>
      <h5>${escapeHTML(swim.name)}</h5><p>${escapeHTML(swim.detail)}</p>
      ${swim.safety ? `<div class="swim-safety"><span aria-hidden="true">ⓘ</span>${escapeHTML(swim.safety)}</div>` : ""}`;

    detail.hidden = false;
  }

  function renderArchive() {
    $("#archive-total").textContent = String(data.archive.length).padStart(2, "0");
    archiveList.innerHTML = data.archive.map((item) => {
      const center = item.mindmap[0];
      const branches = item.mindmap.slice(1);
      return `
        <article class="archive-card" data-archive-card="${escapeHTML(item.id)}">
          <button class="archive-trigger" type="button" id="trigger-${escapeHTML(item.id)}" aria-expanded="false" aria-controls="archive-body-${escapeHTML(item.id)}">
            <span class="archive-category">${escapeHTML(item.category)}</span>
            <span class="archive-title-wrap"><span class="archive-title">${escapeHTML(item.title)}</span></span>
            <span class="archive-chevron" aria-hidden="true">⌄</span>
          </button>
          <div class="archive-body" id="archive-body-${escapeHTML(item.id)}" role="region" aria-labelledby="trigger-${escapeHTML(item.id)}" aria-hidden="true" inert>
            <div class="archive-body-clip">
              <div class="archive-inner">
                <div class="mindmap">
                  <section class="mind-node mind-center">
                    <div class="mind-node-kicker"><span class="mind-node-step">01</span>${escapeHTML(center.label)}</div>
                    <h4>${escapeHTML(center.title)}</h4>
                    <p>${escapeHTML(center.detail)}</p>
                  </section>
                  <div class="mind-branches">
                    ${branches.map((node, index) => `
                      <section class="mind-node mind-branch">
                        <div class="mind-node-kicker"><span class="mind-node-step">0${index + 2}</span>${escapeHTML(node.label)}</div>
                        ${index === 1 ? `
                          <div class="legal-callout">
                            <div class="legal-callout-label">${escapeHTML(node.title)}</div>
                            <p>${escapeHTML(node.detail)}</p>
                          </div>` : `
                          <h4>${escapeHTML(node.title)}</h4>
                          <p>${escapeHTML(node.detail)}</p>`}
                      </section>`).join("")}
                  </div>
                </div>
                <p class="bookmark-heading">북마크 · 더 읽어보기</p>
                <div class="bookmark-list">
                  ${item.sources.map((source) => {
                    const sourceParts = source.label.split(" — ");
                    const publisher = sourceParts.shift();
                    const title = sourceParts.join(" — ") || "참고 자료 보기";
                    return `
                      <a class="bookmark-link" href="${safeURL(source.url)}" target="_blank" rel="noopener noreferrer">
                        <span class="bookmark-icon" aria-hidden="true">▤</span>
                        <span class="bookmark-copy"><small>${escapeHTML(publisher)}</small><strong>${escapeHTML(title)}</strong></span>
                        <span class="bookmark-external" aria-hidden="true">↗</span>
                      </a>`;
                  }).join("")}
                </div>
              </div>
            </div>
          </div>
        </article>`;
    }).join("");

    archiveList.addEventListener("click", (event) => {
      const trigger = event.target.closest(".archive-trigger");
      if (!trigger) return;
      const card = trigger.closest(".archive-card");
      const open = trigger.getAttribute("aria-expanded") !== "true";
      archiveList.querySelectorAll(".archive-card.is-open").forEach((other) => {
        if (other === card) return;
        other.classList.remove("is-open");
        other.querySelector(".archive-trigger").setAttribute("aria-expanded", "false");
        const body = other.querySelector(".archive-body");
        body.setAttribute("aria-hidden", "true");
        body.setAttribute("inert", "");
      });
      card.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      const body = card.querySelector(".archive-body");
      body.setAttribute("aria-hidden", String(!open));
      if (open) body.removeAttribute("inert");
      else body.setAttribute("inert", "");
    });
  }

  function resetMap() {
    selectedCountry = null;
    selectedRoute = null;
    $("#route-detail").hidden = true;
    clearRouteLayers();
    setCountryState();
    mapStatus.textContent = "WORLD VIEW";
    mapCoordinates.textContent = `${data.countries.length} COUNTRIES · ${data.routes.length} ROUTES`;
    mapReset.hidden = true;
    spotTitle.textContent = "여행 루트";
    spotCount.textContent = `${String(data.routes.length).padStart(2, "0")} ROUTES`;
    renderRoutes(data.routes);
    if (map) map.flyTo([25, 15], 2.05, { duration: 1, easeLinearity: 0.25 });
  }

  function setupNavigation() {
    const menuToggle = $(".menu-toggle");
    const mainNav = $(".main-nav");
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
      mainNav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    mainNav.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "메뉴 열기");
      mainNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });

    const links = [...document.querySelectorAll("[data-nav]")];
    const updateActive = (name) => links.forEach((link) => {
      const active = link.dataset.nav === name;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    links.forEach((link) => link.addEventListener("click", () => updateActive(link.dataset.nav)));

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) updateActive(current.target.id === "journey" ? "journey" : current.target.id === "archive" ? "archive" : "all");
      }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .1, .25, .5] });
      [$("#top"), $("#journey"), $("#archive")].forEach((section) => observer.observe(section));
    }
  }

  countryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-country]");
    if (button) selectCountry(button.dataset.country);
  });
  routeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-route]");
    if (button) selectRoute(button.dataset.route);
  });
  mapReset.addEventListener("click", resetMap);

  renderCountryPills();
  setupMap();
  renderRoutes(data.routes);
  renderArchive();
  setupNavigation();
})();
