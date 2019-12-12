class Radio extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {

        var korpusGeometry = new THREE.BoxGeometry(20, 10, 0.5);
        var korpusMaterial = new THREE.MeshLambertMaterial({
            color: 0xE77C3E
        });
        var korpus = new THREE.Mesh(korpusGeometry, korpusMaterial);
        this.add(korpus);



        //Ecke 1______CSG
        var korpus2Geometry = new THREE.BoxGeometry(10, 10, 0.5);
        var korpus2Material = new THREE.MeshLambertMaterial({
            color: 0x0000FF
        });

        var korpus2 = new THREE.Mesh(korpus2Geometry, korpus2Material);
        korpus2.position.x = 20;
        korpus2.position.y = 0;
        korpus2.position.z = 0;
        //this.add(korpus2);

        //Zylinder
        var eckenGeometry = new THREE.CylinderGeometry(5, 5, 0.5, 20, 1, false);
        //var eckenMaterial = new THREE.MeshLambertMaterial({color: 0xE77C3E});

        var ecken = new THREE.Mesh(eckenGeometry);
        ecken.position.x = 15;
        ecken.position.y = 0;
        ecken.position.z = 0;
        ecken.rotation.x = 90 * DEG_TO_RAD;
        //this.add(ecken);

        var subtract = threecsg.subtract(korpus2, ecken, korpus2Material);
        this.add(subtract);



    }
}