class Radio extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {



        //Bildschirm
        var korpusGeometry = new THREE.BoxGeometry(20, 10, 0.5);
        var korpusMaterial = new THREE.MeshLambertMaterial({
            color: 0xE77C3E
        });
        var korpus = new THREE.Mesh(korpusGeometry, korpusMaterial);
        this.add(korpus);



        //Rechter Controller CSG
        var korpus2Geometry = new THREE.BoxGeometry(10, 10, 0.5);
        var korpus2Material = new THREE.MeshLambertMaterial({
            color: 0xE77C3E
        });

        var korpus2 = new THREE.Mesh(korpus2Geometry, korpus2Material);
        korpus2.position.x = 15;
        korpus2.position.y = 0;
        korpus2.position.z = 0;
        //this.add(korpus2);

        //Zylinder
        var zylinderGeometry = new THREE.CylinderGeometry(5, 5, 0.5, 20, 1, false);

        var zylinder = new THREE.Mesh(zylinderGeometry);
        zylinder.position.x = 10;
        zylinder.position.y = 0;
        zylinder.position.z = 0;
        zylinder.rotation.x = 90 * DEG_TO_RAD;
        //this.add(zylinder);

        //Rechter Controller CSG
        var intersect = threecsg.intersect(korpus2, zylinder, korpus2Material);
        this.add(intersect);


        //Linker Controller CSG
        var korpus3Geometry = new THREE.BoxGeometry(10, 10, 0.5);
        var korpus3Material = new THREE.MeshLambertMaterial({
            color: 0xE77C3E
        });

        var korpus3 = new THREE.Mesh(korpus3Geometry, korpus3Material);
        korpus3.position.x = -15;
        korpus3.position.y = 0;
        korpus3.position.z = 0;
        //this.add(korpus3);

        //Zylinder2
        var zylinder2Geometry = new THREE.CylinderGeometry(5, 5, 0.5, 20, 1, false);

        var zylinder2 = new THREE.Mesh(zylinderGeometry);
        zylinder2.position.x = -10;
        zylinder2.position.y = 0;
        zylinder2.position.z = 0;
        zylinder2.rotation.x = 90 * DEG_TO_RAD;
        //this.add(zylinder2);

        //Linker Controller CSG
        var intersect = threecsg.intersect(korpus3, zylinder2, korpus3Material);
        this.add(intersect);

    }
}