import * as THREE from "three";

function main(){
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov=75;
    const aspect =2;
    const near = 0.1;
    const far = 5;

    // 카메라
    const camera = new THREE.PerspectiveCamera(fov, aspect,near,far);

    // 축
    camera.position.z = 2;

    //장면
    const scene = new THREE.Scene();

    // 도형생성
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshBasicMaterial({color : 0x44aa88})

    // 메쉬(화면에서 해당 오브젝트의 위치, 방향, 및 배울 재질들 조합)
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube);
    renderer.render(scene, camera);
}

main();

//console.log(THREE);
