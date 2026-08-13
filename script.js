import * as THREE from "./scripts/vendor/three.module.js";
import { GLTFLoader } from "./scripts/vendor/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.getElementById("sky");
  const starsEl = document.getElementById("stars");
  const airplaneWrap = document.getElementById("airplaneWrap");
  const contrail = document.getElementById("contrail");
  const hudTop = document.getElementById("hudTop");
  const hudCenter = document.getElementById("hudCenter");
  const hudBottom = document.getElementById("hudBottom");
  const heroTitle = document.getElementById("heroTitle");
  const altValue = document.getElementById("altValue");
  const speedLines = document.getElementById("speedLines");
  const horizonGlow = document.getElementById("horizonGlow");
  const ground = document.getElementById("ground");
  const planeScene = document.getElementById("planeScene");
  const scrollContainer = document.querySelector(".scroll-container");

  if (!planeScene || !airplaneWrap || !scrollContainer) return;

  const three = {
    renderer: null,
    scene: null,
    camera: null,
    modelGroup: null,
    animationFrameId: 0
  };

  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2.2 + 0.5;
    star.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 75}%;
      --d:${2 + Math.random() * 4}s;
      --delay:${Math.random() * 4}s;
      --max-op:${0.4 + Math.random() * 0.6};
    `;
    starsEl.appendChild(star);
  }

  for (let i = 0; i < 30; i++) {
    const line = document.createElement("div");
    line.className = "speed-line";
    line.style.cssText = `
      top:${10 + Math.random() * 80}%;
      left:0; right:0;
      opacity:${0.3 + Math.random() * 0.5};
      height:${Math.random() < 0.5 ? 1 : 0.5}px;
    `;
    speedLines.appendChild(line);
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      hudTop.classList.add("visible");
      hudCenter.classList.add("visible");
      hudBottom.classList.add("visible");
    }, 300);
  });

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
  function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
  function easeIn(t) { return t * t * t; }

  function setupThreeScene() {
    const width = Math.max(1, planeScene.clientWidth);
    const height = Math.max(1, planeScene.clientHeight);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    planeScene.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, width / height, 0.1, 200);
    camera.position.set(0, 0.2, 9);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0xe6f1ff, 0x1f2a3b, 1.0));
    scene.add(new THREE.AmbientLight(0xffffff, 0.42));

    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(5, 4, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x92c0ff, 0.5);
    fill.position.set(-4, 2, -3);
    scene.add(fill);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const loader = new GLTFLoader();
    loader.load("./low_poly_airplane.glb", (gltf) => {
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      model.position.sub(center);
      model.scale.setScalar(6.2 / Math.max(size.x, size.y, size.z));
      model.rotation.y = Math.PI / 2;

      model.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.side = THREE.DoubleSide;
          child.material.needsUpdate = true;
        }
      });

      modelGroup.add(model);
    });

    three.renderer = renderer;
    three.scene = scene;
    three.camera = camera;
    three.modelGroup = modelGroup;
  }

  function handleResize() {
    if (!three.renderer || !three.camera) return;
    const width = Math.max(1, planeScene.clientWidth);
    const height = Math.max(1, planeScene.clientHeight);
    three.renderer.setSize(width, height);
    three.camera.aspect = width / height;
    three.camera.updateProjectionMatrix();
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });

  function update() {
    ticking = false;

    const scrollY = window.scrollY;
    const maxScroll = scrollContainer.offsetHeight - window.innerHeight;
    const progress = clamp(scrollY / maxScroll, 0, 1);
    const p1 = clamp(progress / 0.35, 0, 1);
    const p2 = clamp((progress - 0.35) / 0.35, 0, 1);
    const p3 = clamp((progress - 0.7) / 0.3, 0, 1);

    const xOffset = lerp(-700, 0, easeInOut(p1)) * (1 - p2);
    const scale = lerp(0.08, 0.16, easeInOut(p1)) + lerp(0, 2.7, easeIn(p2));
    const yOffset = lerp(60, -40, p1) + lerp(0, 120, easeIn(p3));
    const tilt = lerp(6, -2, p1) + lerp(0, 4, p3);

    airplaneWrap.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) scale(${scale}) rotate(${tilt}deg)`;

    const contrailWidth = lerp(0, 260, p1) * (1 - p2 * 0.8);
    contrail.style.width = `${contrailWidth}px`;
    contrail.style.opacity = p1 > 0.05 ? lerp(0.7, 0.1, p2) : 0;

    const skyHue1b = Math.round(lerp(8, 13, p1));
    const skyHue2b = Math.round(lerp(31, 58, p1 + p2 * 0.5));
    const horizonAlpha = lerp(0, 0.65, p2 + p3 * 0.5);
    sky.style.background = `
      radial-gradient(ellipse at 50% 100%, rgba(196,122,53,${horizonAlpha}) 0%, transparent 55%),
      linear-gradient(to bottom, #020${skyHue1b.toString(16).padStart(2, "0")} 0%, #0d1f${skyHue2b.toString(16).padStart(2, "0")} 60%, #1a3a6b 85%, #c47a35 100%)
    `;

    starsEl.style.opacity = lerp(1, 0, easeInOut(p2));
    const glowStrength = lerp(0, 0.8, p2);
    horizonGlow.style.background = `radial-gradient(ellipse at center bottom, rgba(232,137,26,${glowStrength}) 0%, transparent 65%)`;
    speedLines.style.opacity = lerp(0, 0.9, easeInOut(p2)) * (1 - p3);

    const glowAmount = lerp(0, 40, p2);
    heroTitle.style.textShadow = `0 0 ${glowAmount}px rgba(240,168,48,${lerp(0, 0.5, p2)})`;

    const alt = Math.round(lerp(0, 35000, easeInOut(progress)));
    altValue.textContent = alt.toLocaleString();

    hudCenter.style.opacity = lerp(1, 0, clamp(p2 * 2 - 0.5, 0, 1));
    ground.style.opacity = lerp(0, 1, p3);
    ground.style.transform = `translateY(${lerp(100, 0, easeInOut(p3))}%)`;
  }

  function renderLoop() {
    if (three.renderer && three.scene && three.camera) {
      three.renderer.render(three.scene, three.camera);
    }
    three.animationFrameId = window.requestAnimationFrame(renderLoop);
  }

  setupThreeScene();
  window.addEventListener("resize", handleResize);
  handleResize();
  update();
  renderLoop();

  window.addEventListener("beforeunload", () => {
    if (three.animationFrameId) window.cancelAnimationFrame(three.animationFrameId);
    if (three.renderer) three.renderer.dispose();
  });
});