// Define o foco na janela atual
window.focus();

// Declaração de variáveis globais
let camera, scene, renderer;
let world;
let lastTime;
let stack;
let overhangs;
const boxHeight = 1;
const originalBoxSize = 3;
let autopilot;
let gameEnded;
let robotPrecision;

// Obtém referências aos elementos HTML
const scoreElement = document.getElementById("score");
const instructionsElement = document.getElementById("instructions");
const resultsElement = document.getElementById("results");

// Define a precisão do robô
function setRobotPrecision() {
  robotPrecision = Math.random() * 1 - 0.5;
}

// Função de inicialização
init();

function init() {
  autopilot = true; // Define o modo autopilot como true
  gameEnded = false; // Define o jogo como não finalizado
  lastTime = 0;
  stack = [];
  overhangs = [];
  setRobotPrecision();

  // Configuração do mundo de física
  world = new CANNON.World();
  world.gravity.set(0, -10, 0); // Define a gravidade
  world.broadphase = new CANNON.NaiveBroadphase();
  world.solver.iterations = 40;

  // Configuração da câmera
  const aspect = window.innerWidth / window.innerHeight;
  const width = 10;
  const height = width / aspect;

  camera = new THREE.OrthographicCamera(
    width / -2, // left
    width / 2, // right
    height / 2, // top
    height / -2, // bottom
    0, // near plane
    100 // far plane
  );

  camera.position.set(4, 4, 4); // Define a posição da câmera
  camera.lookAt(0, 0, 0); // Define o ponto para onde a câmera está olhando

  scene = new THREE.Scene(); // Cria a cena

  // Adiciona a primeira camada de blocos
  addLayer(0, 0, originalBoxSize, originalBoxSize);
  // Adiciona uma camada sobreposta para criar uma saliência inicial
  addLayer(-10, 0, originalBoxSize, originalBoxSize, "x");

  // Adiciona luzes à cena
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(10, 20, 0);
  scene.add(dirLight);

  // Configura o renderizador WebGL
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

// Função para iniciar o jogo
function startGame() {
  autopilot = false; // Desativa o modo autopilot
  gameEnded = false; // Define o jogo como não finalizado
  lastTime = 0;
  stack = [];
  overhangs = [];

  // Oculta os elementos de instruções e resultados
  if (instructionsElement) instructionsElement.style.display = "none";
  if (resultsElement) resultsElement.style.display = "none";
  if (scoreElement) scoreElement.innerText = 0;

  // Remove os corpos físicos do mundo
  if (world) {
    while (world.bodies.length > 0) {
      world.remove(world.bodies[0]);
    }
  }

  // Remove os blocos da cena
  if (scene) {
    while (scene.children.find((c) => c.type == "Mesh")) {
      const mesh = scene.children.find((c) => c.type == "Mesh");
      scene.remove(mesh);
    }

    // Adiciona a primeira camada de blocos
    addLayer(0, 0, originalBoxSize, originalBoxSize);

    // Adiciona uma camada sobreposta para criar uma saliência inicial
    addLayer(-10, 0, originalBoxSize, originalBoxSize, "x");
  }

  // Reposiciona a câmera
  if (camera) {
    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);
  }
}

// Função para adicionar uma nova camada de blocos
function addLayer(x, z, width, depth, direction) {
  const y = boxHeight * stack.length;
  const layer = generateBox(x, y, z, width, depth, false);
  layer.direction = direction;
  stack.push(layer);
}

// Função para adicionar uma saliência
function addOverhang(x, z, width, depth) {
  const y = boxHeight * (stack.length - 1);
  const overhang = generateBox(x, y, z, width, depth, true);
  overhangs.push(overhang);
}

// Função para gerar um bloco
function generateBox(x, y, z, width, depth, falls) {
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth);
  const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
  const material = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);

  const shape = new CANNON.Box(
    new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2)
  );
  let mass = falls ? 5 : 0;
  mass *= width / originalBoxSize;
  mass *= depth / originalBoxSize;
  const body = new CANNON.Body({ mass, shape });
  body.position.set(x, y, z);
  world.addBody(body);

  return {
    threejs: mesh,
    cannonjs: body,
    width,
    depth,
  };
}

// Função para cortar um bloco
function cutBox(topLayer, overlap, size, delta) {
  const direction = topLayer.direction;
  const newWidth = direction == "x" ? overlap : topLayer.width;
  const newDepth = direction == "z" ? overlap : topLayer.depth;

  topLayer.width = newWidth;
  topLayer.depth = newDepth;

  topLayer.threejs.scale[direction] = overlap / size;
  topLayer.threejs.position[direction] -= delta / 2;
  topLayer.cannonjs.position[direction] -= delta / 2;

  const shape = new CANNON.Box(
    new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2)
  );

  topLayer.cannonjs.shapes = [];
  topLayer.cannonjs.addShape(shape);
}

// Evento de clique do mouse ou toque na tela
window.addEventListener("mousedown", eventHandler);
window.addEventListener("touchstart", eventHandler);

// Evento de pressionar tecla
window.addEventListener("keydown", function (event) {
  if (event.key == " ") {
    event.preventDefault();
    eventHandler();
    return;
  }
  if (event.key == "R" || event.key == "r") {
    event.preventDefault();
    startGame();
    return;
  }
});

// Manipulador de eventos
function eventHandler() {
  if (autopilot) {
    startGame();
  } else {
    splitBlockAndAddNextOneIfOverlaps();
  }
}

// Dividir o bloco e adicionar um novo se houver sobreposição
function splitBlockAndAddNextOneIfOverlaps() {
  if (gameEnded) return;

  const topLayer = stack[stack.length - 1];
  const previousLayer = stack[stack.length - 2];
  const direction = topLayer.direction;
  const size = direction == "x" ? topLayer.width : topLayer.depth;
  const delta =
    topLayer.threejs.position[direction] -
    previousLayer.threejs.position[direction];
  const overhangSize = Math.abs(delta);
  const overlap = size - overhangSize;

  if (overlap > 0) {
    cutBox(topLayer, overlap, size, delta);

    const overhangShift = (overlap / 2 + overhangSize / 2) * Math.sign(delta);
    const overhangX =
      direction == "x"
        ? topLayer.threejs.position.x + overhangShift
        : topLayer.threejs.position.x;
    const overhangZ =
      direction == "z"
        ? topLayer.threejs.position.z + overhangShift
        : topLayer.threejs.position.z;
    const overhangWidth = direction == "x" ? overhangSize : topLayer.width;
    const overhangDepth = direction == "z" ? overhangSize : topLayer.depth;

    addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth);

    const nextX = direction == "x" ? topLayer.threejs.position.x : -10;
    const nextZ = direction == "z" ? topLayer.threejs.position.z : -10;
    const newWidth = topLayer.width;
    const newDepth = topLayer.depth;
    const nextDirection = direction == "x" ? "z" : "x";

    if (scoreElement) scoreElement.innerText = stack.length - 1;

    addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
  } else {
    missedTheSpot();
  }
}

// Função chamada quando o bloco não se encaixa corretamente
function missedTheSpot() {
  const topLayer = stack[stack.length - 1];

  addOverhang(
    topLayer.threejs.position.x,
    topLayer.threejs.position.z,
    topLayer.width,
    topLayer.depth
  );

  world.remove(topLayer.cannonjs);
  scene.remove(topLayer.threejs);

  gameEnded = true;
  if (resultsElement && !autopilot) resultsElement.style.display = "flex";
}

// Função de animação
function animation(time) {
  if (lastTime) {
    const timePassed = time - lastTime;
    const speed = 0.008;
    const topLayer = stack[stack.length - 1];
    const previousLayer = stack[stack.length - 2];

    const boxShouldMove =
      !gameEnded &&
      (!autopilot ||
        (autopilot &&
          topLayer.threejs.position[topLayer.direction] <
            previousLayer.threejs.position[topLayer.direction] +
              robotPrecision));

    if (boxShouldMove) {
      topLayer.threejs.position[topLayer.direction] += speed * timePassed;
      topLayer.cannonjs.position[topLayer.direction] += speed * timePassed;
    }

    // Atualiza a câmera
    camera.position[topLayer.direction] =
      topLayer.threejs.position[topLayer.direction] + 4;

    lastTime = time;

    // Atualiza a renderização da física do mundo
    world.step(1 / 60);

    // Atualiza a renderização da cena
    renderer.render(scene, camera);

    // Verifica se o topo da pilha caiu fora dos limites
    if (
      Math.abs(topLayer.threejs.position[topLayer.direction]) >=
      originalBoxSize
    ) {
      missedTheSpot();
    }
  } else {
    lastTime = time;
  }
}

// Redimensiona o renderizador quando a janela é redimensionada
window.addEventListener("resize", function () {
  const aspect = window.innerWidth / window.innerHeight;
  const width = 10;
  const height = width / aspect;

  camera.left = -width / 2;
  camera.right = width / 2;
  camera.top = height / 2;
  camera.bottom = -height / 2;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});