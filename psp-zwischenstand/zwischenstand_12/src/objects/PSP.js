class PSP extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {

        var korpusGeometry = new THREE.BoxGeometry(20, 2, 8);
        var korpusMaterial = new THREE.MeshLambertMaterial({
            color: 0xE77C3E
        });
        var korpus = new THREE.Mesh(korpusGeometry, korpusMaterial);
        this.add(korpus);
    }
}