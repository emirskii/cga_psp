TableFromFile = function () {

    var table = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();



    fbxloader.load("src/models/Old_Table/Old_Table.fbx", function (model) {

        table.add(model);

        model.traverse(function (child) {
            if (child.isMesh) {
                child.material.map.anisotropy = 8;
            }
        })
    });

    return table;
};