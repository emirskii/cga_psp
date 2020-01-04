class PSP extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {


        var metallMaterial = new THREE.MeshStandardMaterial({color: 0x8a8a8a, roughness: 0.2, metalness: 0.4});



        //Bildschirm CSG
        var korpusGeometry = new THREE.BoxGeometry(20, 10, 1);
        var korpusMaterial = new THREE.MeshLambertMaterial({
            color:   0x383838               //0x212121
        });
        var korpus = new THREE.Mesh(korpusGeometry, korpusMaterial);
        //this.add(korpus);

        //Display
        var displayGeometry = new THREE.BoxGeometry(14, 7.5, 1);
        var display = new THREE.Mesh(displayGeometry);
        display.position.x = -0.25;
        display.position.y = 0.30;
        display.position.z = 0.80;


        //Display CSG
        var subtract = threecsg.subtract(korpus, display, korpusMaterial);
        this.add(subtract);






        //Rechter Controller CSG
        var korpus2Geometry = new THREE.BoxGeometry(10, 10, 1);
        var korpus2Material = new THREE.MeshLambertMaterial({
            color: 0x212121
        });

        var korpus2 = new THREE.Mesh(korpus2Geometry, korpus2Material);
        korpus2.position.x = 15;
        korpus2.position.y = 0;
        korpus2.position.z = 0;
        //this.add(korpus2);

        //Zylinder
        var zylinderGeometry = new THREE.CylinderGeometry(5, 5, 1, 20, 1, false);

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
        var korpus3Geometry = new THREE.BoxGeometry(10, 10, 1);
        var korpus3Material = new THREE.MeshLambertMaterial({
            color: 0x212121
        });

        var korpus3 = new THREE.Mesh(korpus3Geometry, korpus3Material);
        korpus3.position.x = -15;
        korpus3.position.y = 0;
        korpus3.position.z = 0;
        //this.add(korpus3);

        //Zylinder2
        var zylinder2Geometry = new THREE.CylinderGeometry(5, 5, 1, 20, 1, false);

        var zylinder2 = new THREE.Mesh(zylinder2Geometry);
        zylinder2.position.x = -10;
        zylinder2.position.y = 0;
        zylinder2.position.z = 0;
        zylinder2.rotation.x = 90 * DEG_TO_RAD;
        //this.add(zylinder2);

        //Linker Controller CSG
        var intersect = threecsg.intersect(korpus3, zylinder2, korpus3Material);
        this.add(intersect);


        //4 Eingabetasten
        var eingabetasten = new THREE.Group();
        eingabetasten.position.x = 11;
        eingabetasten.position.y = 1.75;
        eingabetasten.position.z = 0;


        //Quadrat Taste
        var quadrattasteGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 32, 1, false);
        var quadrattasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var quadrattaste = new THREE.Mesh(quadrattasteGeometry, quadrattasteMaterial);
        quadrattaste.position.x = -2.5;
        quadrattaste.position.y = -1;
        quadrattaste.position.z = 0.5;
        quadrattaste.rotation.x = 90 * DEG_TO_RAD;
        quadrattaste.name = "Quadrat";
        eingabetasten.add(quadrattaste);


        //Dreieck Taste
        var dreiecktasteGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 32, 1, false);

        var dreiecktaste = new THREE.Mesh(dreiecktasteGeometry, metallMaterial);
        dreiecktaste.position.x = -0.5;
        dreiecktaste.position.y = 1;
        dreiecktaste.position.z = 0.5;
        dreiecktaste.rotation.x = 90 * DEG_TO_RAD;
        dreiecktaste.name = "Dreieck";
        eingabetasten.add(dreiecktaste);


        //Kreis Taste
        var kreistasteGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 32, 1, false);
        var kreistasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var kreistaste = new THREE.Mesh(kreistasteGeometry, kreistasteMaterial);
        kreistaste.position.x = 1.5;
        kreistaste.position.y = -1;
        kreistaste.position.z = 0.5;
        kreistaste.rotation.x = 90 * DEG_TO_RAD;
        kreistaste.name = "Kreis";
        eingabetasten.add(kreistaste);


        //Kreuz Taste
        var kreuztasteGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 32, 1, false);
        var kreuztasteTexture = new THREE.TextureLoader().load('src/images/xbutton.png');
        var kreuztasteMaterial = new THREE.MeshLambertMaterial({
            map: kreuztasteTexture,
            side: THREE.FrontSide
        });
        var kreuztaste = new THREE.Mesh(kreuztasteGeometry, kreuztasteMaterial);

        kreuztaste.position.x = -0.5;
        kreuztaste.position.y = -3;
        kreuztaste.position.z = 0.5;
        kreuztaste.rotation.x = 90 * DEG_TO_RAD;
        kreuztaste.name = "Kreuz";
        eingabetasten.add(kreuztaste);

        this.add(eingabetasten);

        //4 Richtungstasten
        var richtungstasten = new THREE.Group();
        richtungstasten.position.x = -11;
        richtungstasten.position.y = 1.75;
        richtungstasten.position.z = 0;


        //Links
        var linkstasteGeometry = new THREE.BoxGeometry(1.25, 1.25, 0.25);
        var linkstasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var linkstaste = new THREE.Mesh(linkstasteGeometry, linkstasteMaterial);
        linkstaste.position.x = -1.5;
        linkstaste.position.y = -1;
        linkstaste.position.z = 0.5;
        linkstaste.name = "Links";
        richtungstasten.add(linkstaste);


        //Rects
        var rechtstasteGeometry = new THREE.BoxGeometry(1.25, 1.25, 0.25);
        var rechtstasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var rechtstaste = new THREE.Mesh(rechtstasteGeometry, rechtstasteMaterial);
        rechtstaste.position.x = 2;
        rechtstaste.position.y = -1;
        rechtstaste.position.z = 0.5;
        rechtstaste.name = "Rechts";
        richtungstasten.add(rechtstaste);

        //Hoch
        var hochtasteGeometry = new THREE.BoxGeometry(1.25, 1.25, 0.25);
        var hochtasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var hochtaste = new THREE.Mesh(hochtasteGeometry, hochtasteMaterial);
        hochtaste.position.x = 0.25;
        hochtaste.position.y = 0.75;
        hochtaste.position.z = 0.5;
        hochtaste.name = "Hoch";
        richtungstasten.add(hochtaste);


        //Runter
        var runtertasteGeometry = new THREE.BoxGeometry(1.25, 1.25, 0.25);
        var runtertasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var runtertaste = new THREE.Mesh(runtertasteGeometry, runtertasteMaterial);
        runtertaste.position.x = 0.25;
        runtertaste.position.y = -2.75;
        runtertaste.position.z = 0.5;
        runtertaste.name = "Runter";
        richtungstasten.add(runtertaste);


        //Analog-Stick
        var analogstickGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 32, 1, false);
        var analogstickMaterial = new THREE.MeshLambertMaterial({
            color: 0x666666
        });
        var analogstick = new THREE.Mesh(analogstickGeometry, analogstickMaterial);
        analogstick.position.x = 0.25;
        analogstick.position.y = -4.75;
        analogstick.position.z = 0.5;
        analogstick.rotation.x = 90 * DEG_TO_RAD;
        analogstick.name = "Analogstick";
        richtungstasten.add(analogstick);

        this.add(richtungstasten);


        //Mittlerer Ring
        var mittelschichtGeometry = new THREE.BoxGeometry(20, 10, 1);


        var mittelschicht = new THREE.Mesh(mittelschichtGeometry, metallMaterial);
        mittelschicht.position.x = 0;
        mittelschicht.position.y = 0;
        mittelschicht.position.z = -1;
        this.add(mittelschicht);



        //Linke Seite vom Ring CSG
        var lringGeometry = new THREE.BoxGeometry(10, 10, 1);


        var lring = new THREE.Mesh(lringGeometry, metallMaterial);
        lring.position.x = -15;
        lring.position.y = 0;
        lring.position.z = -1;


        //Zylinder für linke Seite vom Ring
        var zylinderringGeometry = new THREE.CylinderGeometry(5, 5, 1, 20, 1, false);

        var zylinderring = new THREE.Mesh(zylinderringGeometry);
        zylinderring.position.x = -10;
        zylinderring.position.y = 0;
        zylinderring.position.z = -1;
        zylinderring.rotation.x = 90 * DEG_TO_RAD;


        //Linke Seite vom Ring CSG
        var intersect = threecsg.intersect(lring, zylinderring, metallMaterial);
        this.add(intersect);


        //Rechte Seite vom Ring CSG
        var rringGeometry = new THREE.BoxGeometry(10,10,1);

        var rring = new THREE.Mesh(rringGeometry, metallMaterial);
        rring.position.x = 15;
        rring.position.y = 0;
        rring.position.z = -1;

        //Zylinder für rechte Seite vom Ring
        var zylinderrechtsGeometry = new THREE.CylinderGeometry(5,5,1,20,1,false);

        var zylinderrechts = new THREE.Mesh(zylinderrechtsGeometry);
        zylinderrechts.position.x = 10;
        zylinderrechts.position.y = 0;
        zylinderrechts.position.z = -1;
        zylinderrechts.rotation.x = 90 * DEG_TO_RAD;


        //Rechte Seite vom Ring CSG
        var intersect = threecsg.intersect(rring,zylinderrechts, metallMaterial);
        this.add(intersect);


        //Abdeckung
        var abdeckungGeometry = new THREE.BoxGeometry(20,10,1);
        var abdeckungMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var abdeckung = new THREE.Mesh(abdeckungGeometry, abdeckungMaterial);
        abdeckung.position.x = 0;
        abdeckung.position.y = 0;
        abdeckung.position.z = -2;
        this.add(abdeckung);


        //Abdeckungsseiten CSG
        var abdeckunglGeometry = new THREE.BoxGeometry(10,10,1);
        var abdeckunglMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var abdeckungl = new THREE.Mesh(abdeckunglGeometry,abdeckunglMaterial);
        abdeckungl.position.x = -15;
        abdeckungl.position.y = 0;
        abdeckungl.position.z = -2;

        //Linke Seite vom Abdeckungsring
        var labdeckungsringGeometry = new THREE.CylinderGeometry(5, 5, 1, 20, 1, false);

        var labdeckungsring = new THREE.Mesh(labdeckungsringGeometry);
        labdeckungsring.position.x = -10;
        labdeckungsring.position.y = 0;
        labdeckungsring.position.z = -2;
        labdeckungsring.rotation.x = 90 * DEG_TO_RAD;

        //Linke Seite vom Abdeckungsring CSG
        var intersect = threecsg.intersect(abdeckungl, labdeckungsring, abdeckunglMaterial);
        this.add(intersect);

        //Rechte Seite vom Abdeckungsring CSG
        var abdeckungrGeometry = new THREE.BoxGeometry(10,10,1);
        var abdeckungrMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var abdeckungr = new THREE.Mesh(abdeckungrGeometry, abdeckungrMaterial);
        abdeckungr.position.x = 15;
        abdeckungr.position.y = 0;
        abdeckungr.position.z = -2;

        //Zylinder für rechte Seite vom Abdeckungsring
        var rabdeckungsringGeometry = new THREE.CylinderGeometry(5,5,1,20,1,false);

        var rabdeckungsring = new THREE.Mesh(rabdeckungsringGeometry);
        rabdeckungsring.position.x = 10;
        rabdeckungsring.position.y = 0;
        rabdeckungsring.position.z = -2;
        rabdeckungsring.rotation.x = 90 * DEG_TO_RAD;


        //Rechte Seite vom Abdeckungsring CSG
        var intersect = threecsg.intersect(abdeckungr,rabdeckungsring, abdeckungrMaterial);
        this.add(intersect);


        //Knöpfe wie START und SELECT
        var knoepfe = new THREE.Group();
        knoepfe.position.x = 0;
        knoepfe.position.y = -4.20;
        knoepfe.position.z = 0.5;


        //Lautstärke +/-

        //Lauter-Taste
        var lautertasteGeometry = new THREE.CylinderGeometry(0.4,0.4,0.25,12,1,false);
        var lautertasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var lautertaste = new THREE.Mesh(lautertasteGeometry, lautertasteMaterial);
        lautertaste.position.x = -3.25;
        lautertaste.position.y = 0;
        lautertaste.position.z = 0;
        lautertaste.rotation.x = 90 * DEG_TO_RAD;
        lautertaste.name = "Lauter-Taste";
        knoepfe.add(lautertaste);


        //Leiser-Taste
        var leisertasteGeometry = new THREE.CylinderGeometry(0.4,0.4,0.25,12,1,false);
        var leisertasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var leisertaste = new THREE.Mesh(leisertasteGeometry, leisertasteMaterial);
        leisertaste.position.x = -5;
        leisertaste.position.y = 0;
        leisertaste.position.z = 0;
        leisertaste.rotation.x = 90 * DEG_TO_RAD;
        leisertaste.name = "Leiser-Taste";
        knoepfe.add(leisertaste);



        //Helligkeitsregler
        var helligkeitsreglerGeometry = new THREE.CylinderGeometry(0.4,0.4,0.25,12,1,false);
        var helligkeitsreglerMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var helligkeitsregler = new THREE.Mesh(helligkeitsreglerGeometry, helligkeitsreglerMaterial);
        helligkeitsregler.position.x = 1.9;
        helligkeitsregler.position.y = 0;
        helligkeitsregler.position.z = 0;
        helligkeitsregler.rotation.x = 90 * DEG_TO_RAD;
        helligkeitsregler.name = "Helligkeitsregler";
        knoepfe.add(helligkeitsregler);



        //Stummtaste
        var stummtasteGeometry = new THREE.CylinderGeometry(0.4,0.4,0.25,12,1,false);
        var stummtasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var stummtaste = new THREE.Mesh(stummtasteGeometry, stummtasteMaterial);
        stummtaste.position.x = 3;
        stummtaste.position.y = 0;
        stummtaste.position.z = 0;
        stummtaste.rotation.x = 90 * DEG_TO_RAD;
        stummtaste.name = "Stummtaste";
        knoepfe.add(stummtaste);


        this.add(knoepfe);



        //Home-Taste CSG
        var hometasteGeometry = new THREE.CylinderGeometry(0.8,0.8,0.25,20,1,false);

        var hometasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var hometaste = new THREE.Mesh(hometasteGeometry, hometasteMaterial);
        hometaste.position.x = -7.25;
        hometaste.position.y = -3.80;
        hometaste.position.z = 0.5;
        hometaste.rotation.x = 90 * DEG_TO_RAD;
        //this.add(hometaste);


        //Für Home Taste
        var boxfuerhometasteGeometry = new THREE.BoxGeometry(6,1,0.25);

        var boxfuerhometaste = new THREE.Mesh(boxfuerhometasteGeometry);
        boxfuerhometaste.position.x = -7.25;
        boxfuerhometaste.position.y = -3.30;
        boxfuerhometaste.position.z = 0.5;
        //this.add(boxfuerhometaste);

        //CSG
        var subtract = threecsg.subtract(hometaste, boxfuerhometaste, hometasteMaterial);
        this.add(subtract);
        subtract.name = "HOME-Taste";



        //Start-Taste CSG
        var starttasteGeometry = new THREE.CylinderGeometry(0.8,0.8,0.25,20,1,false);

        var starttasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var starttaste = new THREE.Mesh(starttasteGeometry, starttasteMaterial);
        starttaste.position.x = 7;
        starttaste.position.y = -3.80;
        starttaste.position.z = 0.5;
        starttaste.rotation.x = 90 * DEG_TO_RAD;



        //Für Start Taste
        var boxfuerstarttasteGeometry = new THREE.BoxGeometry(6,1,0.25);

        var boxfuerstarttaste = new THREE.Mesh(boxfuerstarttasteGeometry);
        boxfuerstarttaste.position.x = 7;
        boxfuerstarttaste.position.y = -3.30;
        boxfuerstarttaste.position.z = 0.5;


        //Start-Taste CSG
        var subtract = threecsg.subtract(starttaste, boxfuerstarttaste, starttasteMaterial);
        this.add(subtract);
        subtract.name = "START-Taste";




        //Select-Taste CSG
        var selecttasteGeometry = new THREE.CylinderGeometry(0.8,0.8,0.25,20,1,false);

        var selecttasteMaterial = new THREE.MeshLambertMaterial({
            color: 0x212121
        });
        var selecttaste = new THREE.Mesh(selecttasteGeometry, selecttasteMaterial);
        selecttaste.position.x = 5;
        selecttaste.position.y = -3.80;
        selecttaste.position.z = 0.5;
        selecttaste.rotation.x = 90 * DEG_TO_RAD;


        //Für Select Taste
        var boxfuerselecttasteGeometry = new THREE.BoxGeometry(6,1,0.25);

        var boxfuerselecttaste = new THREE.Mesh(boxfuerselecttasteGeometry);
        boxfuerselecttaste.position.x = 5.5;
        boxfuerselecttaste.position.y = -3.30;
        boxfuerselecttaste.position.z = 0.5;


        //CSG
        var subtract = threecsg.subtract(selecttaste, boxfuerselecttaste, selecttasteMaterial);
        this.add(subtract);
        subtract.name = "SELECT-Taste";



        var cylinderGeometry = new THREE.CylinderGeometry(10,10,5,14,1, false);
        var basisMaterial = new THREE.MeshLambertMaterial({
            color: 0xAAAAAA
        });
        var texturMaterial = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF
        });



    }
}




/*var CupGeometry = new THREE.CylinderGeometry(10,10,5,14,1, false);
var CupTexture = new THREE.TextureLoader().load('src/images/checker.png');
var CupMaterial = new THREE.MeshBasicMaterial({
    map: CupTexture,
    side:THREE.DoubleSide
});



var CupMesh = new THREE.Mesh(CupGeometry, CupMaterial);

this.add(CupMesh);
 */