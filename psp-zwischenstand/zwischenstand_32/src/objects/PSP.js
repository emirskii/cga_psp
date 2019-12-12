class PSP extends THREE.Group {

    constructor() {
        super();

        this.animations = new Array();
        this.addParts();
    }

    addParts() {
        var korpusGeometry = new THREE.BoxGeometry(30, 20, 8);
        var korpusMaterial = new THREE.MeshLambertMaterial({
            color: 0xE86F23
        });
    }}