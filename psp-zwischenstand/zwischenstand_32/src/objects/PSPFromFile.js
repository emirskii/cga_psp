PSPFromFile = function () {

    var psp = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();

    fbxloader.load("src/models/PSP/psp.fbx", function (model) {

        psp.add(model);

        model.traverse(function (child) {

            if (child.isMesh) {
                console.log(child.name);
            }
        });
    });

    return psp;
};