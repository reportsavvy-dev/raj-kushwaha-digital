"use client";

import { useEffect, useRef, useState } from "react";
import type { Object3D } from "three";

type LayoutMode = "table" | "sphere" | "helix" | "grid";

type PeriodicCard = {
  symbol: string;
  label: string;
  category: "search" | "paid" | "social" | "content" | "brand" | "data" | "development" | "core";
  href: string;
  column: number;
  row: number;
};

const cards: PeriodicCard[] = [
  { symbol: "SEO", label: "Search Engine", category: "search", href: "/services/seo-aeo-geo-sxo", column: 1, row: 0 },
  { symbol: "AEO", label: "Answer Engine", category: "search", href: "/services/seo-aeo-geo-sxo", column: 2, row: 0 },
  { symbol: "GEO", label: "Generative Search", category: "search", href: "/services/seo-aeo-geo-sxo", column: 3, row: 0 },
  { symbol: "AIO", label: "AI Optimization", category: "search", href: "/services/seo-aeo-geo-sxo", column: 4, row: 0 },
  { symbol: "SXO", label: "Search Experience", category: "search", href: "/services/seo-aeo-geo-sxo", column: 5, row: 0 },
  { symbol: "PPC", label: "Paid Search", category: "paid", href: "/services/ppc-ads", column: 0, row: 1 },
  { symbol: "META", label: "Meta Ads", category: "paid", href: "/services/ppc-ads", column: 1, row: 1 },
  { symbol: "SMM", label: "Social Media", category: "social", href: "/services/social-media-management-marketing", column: 4, row: 1 },
  { symbol: "LI", label: "LinkedIn", category: "social", href: "/services/social-media-management-marketing", column: 5, row: 1 },
  { symbol: "IG", label: "Instagram", category: "social", href: "/services/social-media-management-marketing", column: 6, row: 1 },
  { symbol: "EM", label: "Email Marketing", category: "content", href: "/services/email-marketing", column: 0, row: 2 },
  { symbol: "CM", label: "Content Marketing", category: "content", href: "/services/content-marketing", column: 1, row: 2 },
  { symbol: "RKD", label: "Growth Core", category: "core", href: "/expertise", column: 3, row: 2 },
  { symbol: "YT", label: "YouTube", category: "social", href: "/services/social-media-management-marketing", column: 4, row: 2 },
  { symbol: "PR", label: "Public Relations", category: "content", href: "/services/public-relations", column: 5, row: 2 },
  { symbol: "INF", label: "Influencer", category: "content", href: "/services/influencer-marketing", column: 6, row: 2 },
  { symbol: "BR", label: "Branding", category: "brand", href: "/services/branding", column: 0, row: 3 },
  { symbol: "GD", label: "Graphic Design", category: "brand", href: "/services/logo-graphic-design", column: 1, row: 3 },
  { symbol: "HUB", label: "HubSpot", category: "brand", href: "/services/lead-generation", column: 4, row: 3 },
  { symbol: "CAN", label: "Canva", category: "brand", href: "/services/logo-graphic-design", column: 5, row: 3 },
  { symbol: "FGA", label: "Figma", category: "brand", href: "/services/logo-graphic-design", column: 6, row: 3 },
  { symbol: "AUTO", label: "Automation", category: "data", href: "/services/ai-agent-automation", column: 0, row: 4 },
  { symbol: "AGT", label: "AI Agents", category: "data", href: "/services/ai-agent-automation", column: 1, row: 4 },
  { symbol: "CRM", label: "Lead Systems", category: "data", href: "/services/lead-generation", column: 2, row: 4 },
  { symbol: "GA4", label: "Analytics", category: "data", href: "/services/performance-marketing", column: 3, row: 4 },
  { symbol: "GSC", label: "Search Console", category: "data", href: "/services/seo-aeo-geo-sxo", column: 4, row: 4 },
  { symbol: "WEB", label: "Web Development", category: "development", href: "/services/web-development", column: 0, row: 5 },
  { symbol: "APP", label: "App Development", category: "development", href: "/services/app-software-development", column: 1, row: 5 },
  { symbol: "WP", label: "WordPress", category: "development", href: "/services/web-development", column: 2, row: 5 },
  { symbol: "REA", label: "React", category: "development", href: "/services/app-software-development", column: 3, row: 5 },
  { symbol: "API", label: "Integrations", category: "development", href: "/services/app-software-development", column: 4, row: 5 },
];

const modes: LayoutMode[] = ["table", "sphere", "helix", "grid"];

const legend = [
  ["search", "Search"],
  ["paid", "Paid"],
  ["social", "Social"],
  ["content", "Content"],
  ["brand", "Brand"],
  ["data", "Automation & Data"],
  ["development", "Development"],
] as const;

export function HeroPeriodicSystem() {
  const rootRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<((mode: LayoutMode, manual?: boolean) => void) | null>(null);
  const [activeMode, setActiveMode] = useState<LayoutMode>("table");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    if (!root || !host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMotion = window.matchMedia("(min-width: 821px) and (hover: hover) and (pointer: fine)");
    if (reducedMotion.matches || !desktopMotion.matches) return;

    let disposed = false;
    let visible = true;
    let hovering = false;
    let autoTimer = 0;
    let animationFrame = 0;
    let interactionFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    const cleanup: Array<() => void> = [];

    const initialise = async () => {
      const THREE = await import("three");
      const [{ CSS3DObject, CSS3DRenderer }, { TrackballControls }] = await Promise.all([
        import("three/examples/jsm/renderers/CSS3DRenderer.js"),
        import("three/examples/jsm/controls/TrackballControls.js"),
      ]);
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 1, 5000);
      camera.position.z = 950;

      const world = new THREE.Group();
      scene.add(world);

      const renderer = new CSS3DRenderer();
      renderer.domElement.className = "periodic-renderer";
      renderer.domElement.setAttribute("aria-label", "Interactive digital marketing capability system");
      host.replaceChildren(renderer.domElement);

      const controls = new TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.72;
      controls.zoomSpeed = 0.82;
      controls.noPan = true;
      controls.staticMoving = false;
      controls.dynamicDampingFactor = 0.13;
      controls.minDistance = 720;
      controls.maxDistance = 1500;
      controls.enabled = false;

      const objects: InstanceType<typeof CSS3DObject>[] = [];
      const targets: Record<LayoutMode, Object3D[]> = {
        table: [],
        sphere: [],
        helix: [],
        grid: [],
      };
      const lookVector = new THREE.Vector3();
      let suppressNavigationUntil = 0;

      cards.forEach((card, index) => {
        const element = document.createElement("a");
        element.className = `periodic-card periodic-card--${card.category}`;
        element.href = card.href;
        element.setAttribute("aria-label", `${card.label}. View related expertise.`);
        element.innerHTML = `<span class="periodic-card__index">${String(index + 1).padStart(2, "0")}</span><strong>${card.symbol}</strong><small>${card.label}</small><i aria-hidden="true"></i>`;
        element.addEventListener("click", (event) => {
          if (performance.now() < suppressNavigationUntil) event.preventDefault();
        });

        const object = new CSS3DObject(element);
        object.position.set((Math.random() - 0.5) * 1400, (Math.random() - 0.5) * 900, (Math.random() - 0.5) * 1200);
        world.add(object);
        objects.push(object);

        const tableTarget = new THREE.Object3D();
        tableTarget.position.set(
          (card.column - 3) * 106,
          card.category === "core" ? 0 : (2.5 - card.row) * 111,
          card.category === "core" ? 35 : 0,
        );
        targets.table.push(tableTarget);

        const sphereTarget = new THREE.Object3D();
        const phi = Math.acos(-1 + (2 * index) / cards.length);
        const theta = Math.sqrt(cards.length * Math.PI) * phi;
        sphereTarget.position.setFromSphericalCoords(285, phi, theta);
        lookVector.copy(sphereTarget.position).multiplyScalar(2);
        sphereTarget.lookAt(lookVector);
        targets.sphere.push(sphereTarget);

        const helixTarget = new THREE.Object3D();
        const helixAngle = index * 0.46 + Math.PI;
        helixTarget.position.setFromCylindricalCoords(245, helixAngle, -(index * 17) + 255);
        lookVector.set(helixTarget.position.x * 2, helixTarget.position.y, helixTarget.position.z * 2);
        helixTarget.lookAt(lookVector);
        targets.helix.push(helixTarget);

        const gridTarget = new THREE.Object3D();
        const gridLayer = Math.floor(index / 12);
        const gridSlot = index % 12;
        gridTarget.position.set(
          (gridSlot % 4) * 145 - 217.5,
          (1 - Math.floor(gridSlot / 4)) * 145,
          (1 - gridLayer) * 220,
        );
        targets.grid.push(gridTarget);
      });

      const render = () => {
        if (!disposed && visible) renderer.render(scene, camera);
      };

      controls.addEventListener("change", render);

      let controlsUntil = 0;
      const updateControls = (time: number) => {
        interactionFrame = 0;
        if (disposed || !visible) return;
        controls.update();
        render();
        if (time < controlsUntil) interactionFrame = requestAnimationFrame(updateControls);
      };

      const keepControlsAlive = (duration = 760) => {
        controlsUntil = performance.now() + duration;
        if (!interactionFrame) interactionFrame = requestAnimationFrame(updateControls);
      };

      let dragging = false;
      let pointerStartX = 0;
      let pointerStartY = 0;
      const onControlPointerDown = (event: PointerEvent) => {
        if (!controls.enabled) return;
        dragging = false;
        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
        root.classList.add("is-dragging");
        window.clearTimeout(autoTimer);
        keepControlsAlive(1100);
      };

      const onControlPointerMove = (event: PointerEvent) => {
        if (!root.classList.contains("is-dragging")) return;
        if (Math.hypot(event.clientX - pointerStartX, event.clientY - pointerStartY) > 6) dragging = true;
        keepControlsAlive(480);
      };

      const onControlPointerUp = () => {
        if (!root.classList.contains("is-dragging")) return;
        root.classList.remove("is-dragging");
        if (dragging) suppressNavigationUntil = performance.now() + 220;
        keepControlsAlive(900);
      };

      const onControlWheel = () => keepControlsAlive(900);

      renderer.domElement.addEventListener("pointerdown", onControlPointerDown);
      renderer.domElement.addEventListener("wheel", onControlWheel, { passive: true });
      window.addEventListener("pointermove", onControlPointerMove, { passive: true });
      window.addEventListener("pointerup", onControlPointerUp, { passive: true });
      cleanup.push(() => renderer.domElement.removeEventListener("pointerdown", onControlPointerDown));
      cleanup.push(() => renderer.domElement.removeEventListener("wheel", onControlWheel));
      cleanup.push(() => window.removeEventListener("pointermove", onControlPointerMove));
      cleanup.push(() => window.removeEventListener("pointerup", onControlPointerUp));
      cleanup.push(() => controls.removeEventListener("change", render));
      cleanup.push(() => controls.dispose());

      let fitDistance = 950;
      const sizeRenderer = () => {
        const rect = host.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        fitDistance = rect.width < 600 ? 1120 : rect.width < 780 ? 1030 : rect.width < 980 ? 950 : 900;
        const cameraDirection = camera.position.clone().sub(controls.target).normalize();
        camera.position.copy(cameraDirection.multiplyScalar(fitDistance));
        controls.minDistance = fitDistance * 0.76;
        controls.maxDistance = fitDistance * 1.62;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.update();
        renderer.setSize(rect.width, rect.height);
        render();
      };

      const onPointerEnter = () => {
        hovering = true;
        window.clearTimeout(autoTimer);
      };

      const onPointerLeave = () => {
        hovering = false;
        scheduleAuto();
      };

      const easeInOutQuint = (value: number) => value < 0.5
        ? 16 * value * value * value * value * value
        : 1 - Math.pow(-2 * value + 2, 5) / 2;

      const modeRotation: Record<LayoutMode, { x: number; y: number; z: number }> = {
        table: { x: 0, y: 0, z: 0 },
        sphere: { x: 0.03, y: -0.18, z: 0 },
        helix: { x: 0.02, y: -0.28, z: 0 },
        grid: { x: 0.16, y: -0.42, z: 0.02 },
      };

      const transformTo = (mode: LayoutMode, manual = false) => {
        if (disposed || !visible) return;
        cancelAnimationFrame(animationFrame);
        window.clearTimeout(autoTimer);
        controls.enabled = false;
        const starts = objects.map((object) => ({
          position: object.position.clone(),
          rotation: object.rotation.clone(),
        }));
        const worldRotationStart = world.rotation.clone();
        const cameraPositionStart = camera.position.clone();
        const cameraUpStart = camera.up.clone();
        const cameraPositionTarget = new THREE.Vector3(0, 0, fitDistance);
        const cameraUpTarget = new THREE.Vector3(0, 1, 0);
        const rotationTarget = modeRotation[mode];
        const startTime = performance.now();
        const duration = manual ? 1050 : 1380;
        setActiveMode(mode);

        const animate = (time: number) => {
          if (disposed || !visible) return;
          const progress = Math.min(1, (time - startTime) / duration);
          objects.forEach((object, index) => {
            const delay = (index % 7) * 12;
            const localProgress = Math.min(1, Math.max(0, (time - startTime - delay) / (duration - delay)));
            const eased = easeInOutQuint(localProgress);
            const target = targets[mode][index];
            object.position.lerpVectors(starts[index].position, target.position, eased);
            object.rotation.x = THREE.MathUtils.lerp(starts[index].rotation.x, target.rotation.x, eased);
            object.rotation.y = THREE.MathUtils.lerp(starts[index].rotation.y, target.rotation.y, eased);
            object.rotation.z = THREE.MathUtils.lerp(starts[index].rotation.z, target.rotation.z, eased);
          });
          const cameraEase = easeInOutQuint(progress);
          world.rotation.set(
            THREE.MathUtils.lerp(worldRotationStart.x, rotationTarget.x, cameraEase),
            THREE.MathUtils.lerp(worldRotationStart.y, rotationTarget.y, cameraEase),
            THREE.MathUtils.lerp(worldRotationStart.z, rotationTarget.z, cameraEase),
          );
          camera.position.lerpVectors(cameraPositionStart, cameraPositionTarget, cameraEase);
          camera.up.lerpVectors(cameraUpStart, cameraUpTarget, cameraEase).normalize();
          camera.lookAt(controls.target);
          render();
          if (progress < 1) animationFrame = requestAnimationFrame(animate);
          else {
            controls.target.set(0, 0, 0);
            controls.enabled = mode !== "table";
            controls.update();
            scheduleAuto();
          }
        };
        animationFrame = requestAnimationFrame(animate);
      };

      const scheduleAuto = () => {
        window.clearTimeout(autoTimer);
        if (disposed || !visible || hovering || document.hidden) return;
        autoTimer = window.setTimeout(() => {
          const current = modes.indexOf(root.dataset.mode as LayoutMode);
          const next = modes[(current + 1 + modes.length) % modes.length];
          root.dataset.mode = next;
          transformTo(next);
        }, 5200);
      };

      transitionRef.current = (mode, manual = true) => {
        root.dataset.mode = mode;
        transformTo(mode, manual);
      };

      root.addEventListener("pointerenter", onPointerEnter);
      root.addEventListener("pointerleave", onPointerLeave);
      cleanup.push(() => root.removeEventListener("pointerenter", onPointerEnter));
      cleanup.push(() => root.removeEventListener("pointerleave", onPointerLeave));

      resizeObserver = new ResizeObserver(sizeRenderer);
      resizeObserver.observe(host);

      intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) {
          window.clearTimeout(autoTimer);
          cancelAnimationFrame(animationFrame);
          cancelAnimationFrame(interactionFrame);
          interactionFrame = 0;
        } else {
          controls.update();
          render();
          scheduleAuto();
        }
      }, { rootMargin: "120px 0px" });
      intersectionObserver.observe(root);

      const onVisibilityChange = () => document.hidden ? window.clearTimeout(autoTimer) : scheduleAuto();
      document.addEventListener("visibilitychange", onVisibilityChange);
      cleanup.push(() => document.removeEventListener("visibilitychange", onVisibilityChange));

      sizeRenderer();
      root.dataset.mode = "table";
      transformTo("table");
      setReady(true);
    };

    const idleWindow = window as typeof window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number };
    const usesIdleCallback = typeof idleWindow.requestIdleCallback === "function";
    const idleId = usesIdleCallback
      ? idleWindow.requestIdleCallback(initialise, { timeout: 900 })
      : window.setTimeout(initialise, 180);

    return () => {
      disposed = true;
      window.clearTimeout(autoTimer);
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(interactionFrame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      transitionRef.current = null;
      cleanup.forEach((fn) => fn());
      if (usesIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      host.replaceChildren();
    };
  }, []);

  const selectMode = (mode: LayoutMode) => {
    setActiveMode(mode);
    transitionRef.current?.(mode, true);
  };

  const interactionHint = activeMode === "table"
    ? "Select a card to open its service."
    : "Drag to rotate. Scroll to zoom. Select a card to open it.";

  return <section
    className={`hero-periodic-system${ready ? " is-ready" : ""}`}
    ref={rootRef}
    data-mode={activeMode}
    aria-labelledby="periodic-system-title"
  >
    <header className="periodic-system__title" id="periodic-system-title">
      <span>DIGITAL MARKETING</span>
      <strong>PERIODIC SYSTEM</strong>
    </header>

    <div className="periodic-system__host" ref={hostRef}/>

    <div className="periodic-system__fallback" aria-hidden={ready}>
      {cards.map((card, index) => <a
        className={`periodic-card periodic-card--${card.category}`}
        href={card.href}
        style={{ "--table-column": card.column, "--table-row": card.row } as React.CSSProperties}
        key={`${card.symbol}-${card.label}`}
      >
        <span className="periodic-card__index">{String(index + 1).padStart(2, "0")}</span>
        <strong>{card.symbol}</strong>
        <small>{card.label}</small>
        <i aria-hidden="true" />
      </a>)}
    </div>

    <div className="periodic-system__legend" aria-label="Capability colour key">
      {legend.map(([category, label]) => <span className={`legend-${category}`} key={category}><i/>{label}</span>)}
    </div>

    <div className="periodic-system__modes" aria-label="Choose 3D card arrangement">
      {modes.map((mode) => <button
        type="button"
        aria-pressed={activeMode === mode}
        className={activeMode === mode ? "is-active" : ""}
        onClick={() => selectMode(mode)}
        key={mode}
      >{mode}</button>)}
    </div>
    <p className="periodic-system__hint"><span aria-hidden="true" /> {interactionHint}</p>
  </section>;
}
