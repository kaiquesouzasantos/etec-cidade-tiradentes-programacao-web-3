$(function () {

    var canvasEl = document.createElement('canvas');
    if (!canvasEl.getContext || $(window).width() < 479) {
        $("#cubo-canvas").append('<img src="assets/img/cubo.png" alt="Cubo 3D" />');
        return;
    }

    var camera, scene, renderer, cubo;

    var targetRotationX = 0;
    var targetRotationY = 0;

    var targetRotationOnMouseDownX = 0;
    var targetRotationOnMouseDownY = 0;

    var mouseX = 0;
    var mouseY = 0;

    var mouseXOnMouseDown = 0;
    var mouseYOnMouseDown = 0;

    var canvasWidth = 390;
    var canvasHeight = 390;

    var canvasHalfX = canvasWidth / 2;
    var canvasHalfY = canvasHeight / 2;

    window.requestAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    } ();    

    init();
    animate();


    function init() {
        var container = document.getElementById("cubo-canvas");

        camera = new THREE.Camera(53, canvasWidth / canvasHeight, 1, 1000);
        camera.position.y = 150;
        camera.position.z = 500;
        camera.target.position.y = 150;

        scene = new THREE.Scene();

        var materiais = [
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }), // Left side
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }), // Right side
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }), // Top side
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }), // Bottom side
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }), // Front side
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("assets/img/cubo.jpg") }) // Back side
        ];


        cubo = new THREE.Mesh(new THREE.Cube(260, 260, 260, 4, 4, 4, materiais), new THREE.MeshFaceMaterial());
        cubo.position.y = 150;

        scene.addObject(cubo);

        renderer = new THREE.CanvasRenderer();

        renderer.setSize(canvasWidth, canvasHeight);
        container.appendChild(renderer.domElement);

        container.addEventListener('mousemove', onMouseMove, false);
    }

    function onMouseMove(event) {
        mouseX = event.clientX - canvasHalfX;
        mouseY = event.clientY - canvasHalfY;
        targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.02;
        targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.002;
    }

    function animate() {
        requestAF(animate);
        render();
    }

    function render() {
        cubo.rotation.x += (targetRotationY - cubo.rotation.x) * 0.05;
        cubo.rotation.y += (targetRotationX - cubo.rotation.y) * 0.05;

        renderer.render(scene, camera);
    }
});