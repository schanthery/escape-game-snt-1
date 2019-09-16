var menu = function (game) {
    // les variables globales de menu
    var fond;
    var porte;
    var clavier;
    var clavier_menu;
    var bouton_croix_clavier_menu;
    var bouton_valider_clavier_menu;
    var zone_clavier_menu;
    var texte_clavier_menu;
    var style_bleu;
    var bouton_lecteur;
    var bouton_carte;
    var bouton_croix_lecteur_menu;
    var carte;
    var carte_code;
    var bouton_croix_carte;
    var bt_pc1;
	var ecran_pc1;
    var bouton_croix_ecran_pc1;
    var bt_ok;
    var bt_placard;
    var placard;
    var bt_codex;
    var bt_croix_placard
    var ecran1;
    var bt_download;
    var zone_ecran_pc1;
    var bt_tv;
    var tv;
    var bt_croix_tv;
    var pc2;
    var pc2_on;
    var icon;
    var icon_text;
    var style_blanc;
    var cadre1;
    var bt_cadre1;
    var bt_croix_cadre1;
    var bt_matrix;
    var pc2_python;
    var zone_pc2_python;
    var bt_run;
    var python_bug;
    var python_ok;
    var bt_anneau;
}
menu.prototype = {
    preload: function () {
        //
        this.game.load.image('background', 'img/fond.jpg');
        this.game.load.image('surfond','img/surfond.png');
        this.game.load.image('porte','img/porte.png')
        this.game.load.image('clavier','img/clavier.png')
        this.game.load.image('clavier2','img/clavier2.png')
        this.game.load.image('croix','img/croix.png')
        this.game.load.spritesheet('clavier_sheet', 'img/clavier_sheet150.png', 33, 51);
        this.game.load.image('clavier_menu','img/clavier2.png');
        this.game.load.spritesheet('croix_sheet', 'img/croix_sheet.png', 30, 30);
        this.game.load.spritesheet('bt_valider_clavier_menu', 'img/bouton_valider_petit.png', 100, 35);
        this.style_bleu = { font: "30px Arial", fill: "#01B0FF", align: "Left" };
        this.game.load.spritesheet('bt_lecteur', 'img/lecteur.png', 120, 100);
        this.game.load.image("menu_lecteur","img/menu_lecteur.png");
        this.game.load.image("carte_code","img/carte_code.png");
        this.game.load.spritesheet("bt_carte","img/carte.png",100,100);
        this.game.load.spritesheet("bt_pc1","img/pc1.png",294,205);
        this.game.load.spritesheet("bt_ok","img/bt_ok.png",40,40);
        this.game.load.spritesheet("bt_placard","img/placard.png",81,72);
        this.game.load.image("pc1_ecran","img/pc1_ecran.png");
        this.game.load.image("placard","img/placard_inside.png");
        this.game.load.spritesheet("bt_codex","img/bt_codex.png",259,65);
        this.game.load.image("ecran1","img/ecran1.png");
        this.game.load.spritesheet("bt_download","img/bt_download.png",33,33);
        this.game.load.spritesheet("bt_tv","img/bt_tv.png",316,187);
        this.game.load.image("tv","img/tv.png");
        this.game.load.spritesheet("pc2","img/pc2.png",308,269);
        this.game.load.image("pc2_on","img/pc2_on.png");
        this.game.load.spritesheet("file_icon","img/file_icon.png",140,160);
        this.game.load.image("cadre1","img/cadre1.png");
        this.game.load.spritesheet("bt_cadre1","img/bt_cadre1.png",90,132);
        this.game.load.spritesheet("bt_matrix","img/bt_matrix.png",231,448);
        this.game.load.image("pc2_python","img/pc2_open.png");
        this.game.load.spritesheet("bt_run","img/bt_run.png",29,14);
        this.game.load.image("python_bug","img/python_bug.png");
        this.game.load.image("python_ok","img/python_ok.png");
        this.game.load.spritesheet("bt_anneau","img/bt_anneau.png",155,111);
    },
    create:function() {
        // Center game canvas on page
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.game.stage.scale.setShowAll();
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.fond = this.game.add.tileSprite(0, 0, 1024, 768, 'background');   
        porte=this.add.image(600, 110, 'porte')  
        this.add.image(0, 0, 'surfond') 
        var tween = this.game.add.tween(porte).to( { x: [ 600,492 ]}, 5000, Phaser.Easing.Linear.None, true, false);
        //tv
        this.bt_tv=this.game.add.button(0,285,"bt_tv",this.bt_tv,this,1,0,2,0)
        // placard
        this.bt_placard=this.game.add.button(15,500,"bt_placard",this.bt_placard,this,1,0,2,0);
        // pc2
        this.pc2=this.game.add.button(490,500,"pc2",this.pc2,this,1,0,2,0);
        // bt cadre1
        this.bt_cadre1=this.game.add.button(895,236,"bt_cadre1",this.bt_cadre1,this,1,0,2,0);
        // bt_matrix
        this.bt_matrix=this.game.add.button(635,0,"bt_matrix",this.bt_matrix,this,1,0,2,0);
        // bt_anneau
        this.bt_anneau=this.game.add.button(186,138,"bt_anneau",this.bt_anneau,this,1,0,2,0);
        // création zone clavier porte
        this.bouton_clavier = this.game.add.button(580,345, 'clavier_sheet', this.bouton_clavier,this,1,0,2,0);
        this.clavier_menu=this.game.add.image(350,100,'clavier_menu')
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu=this.game.add.button(705,110,"croix_sheet",this.croix_menu_clavier,this,1,0,2,0)
        this.bouton_croix_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu=this.game.add.button(595,505,"bt_valider_clavier_menu",this.bt_valider_clavier_menu,this,1,0,2,0)
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu=this.game.add.text(385, 550, "Ce n'est pas le bon code", this.style_bleu);
        this.texte_clavier_menu.visible=false
        this.zone_clavier_menu = game.add.inputField(520, 505, {
            font: '18px Arial',
            fill: '#000000',
            fillAlpha: 100,
            fontWeight: 'bold',
            width: 50,
            max: 4,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 6,
            placeHolder: '????',
            textAlign: 'center',
            zoom: true,
        });
        this.zone_clavier_menu.visible=false;
        // zone lecteur de carte
        this.bt_pc1=this.game.add.button(215,565,"bt_pc1",this.bt_pc1,this,1,0,2,0)
        this.bouton_lecteur=this.game.add.button(120,690,"bt_lecteur",this.bt_lecteur,this,1,0,2,0)
        this.menu_lecteur=this.game.add.image(350,100,'menu_lecteur');
        this.bouton_carte=this.game.add.button(490,250,"bt_carte",this.bt_carte,this,1,0,2,0);
        this.bouton_croix_lecteur_menu=this.game.add.button(705,110,"croix_sheet",this.bouton_croix_lecteur_menu,this,1,0,2,0)
        this.menu_lecteur.visible=false;
        this.bouton_croix_lecteur_menu.visible=false;
        this.bouton_carte.visible=false;
        this.carte_code=this.game.add.image(0,100,'carte_code');
        this.carte_code.visible=false;
        this.bouton_croix_carte=this.game.add.button(975,110,"croix_sheet",this.bouton_croix_carte,this,1,0,2,0)
        this.bouton_croix_carte.visible=false;
		// zone écran pc1
		this.ecran_pc1=this.game.add.image(0,0,"pc1_ecran")
		this.bouton_croix_ecran_pc1=this.game.add.button(960,20,"croix_sheet",this.bouton_croix_ecran_pc1,this,1,0,2,0)
		this.zone_ecran_pc1 = game.add.inputField(462, 280, {
            font: '20px Arial',
            fill: '#000000',
            fillAlpha: 0,
            fontWeight: 'bold',
            width: 140,
            max: 14,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 6,
            placeHolder: 'Mot de passe ?',
            textAlign: 'left',
            zoom: true,
        });
        this.bt_ok=this.game.add.button(630,275,"bt_ok",this.bt_ok,this,1,0,2,0)
        this.ecran_pc1.visible=false;
        this.zone_ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.bt_ok.visible=false;
        
        this.placard=this.game.add.image(220,70,"placard")
        this.placard.visible=false;
        this.bt_codex=this.game.add.button(300,320,"bt_codex",this.bt_codex,this,1,0,2,0);
        this.bt_codex.visible=false;
        this.bt_croix_placard=this.game.add.button(750,80,"croix_sheet",this.bt_croix_placard,this,1,0,2,0)
        this.bt_croix_placard.visible=false
        // ecran 1
        this.ecran1=this.game.add.image(0,0,"ecran1");
        this.ecran1.visible=false
        this.bt_download=this.game.add.button(540,73,"bt_download",this.bt_download,this,1,0,2,0)
        this.bt_download.visible=false
        this.bt_croix_ecran1=this.game.add.button(980,5,"croix_sheet",this.bt_croix_ecran1,this,1,0,2,0)
        this.bt_croix_ecran1.visible=false
        //tv
        
        this.tv=this.game.add.image(0,0,"tv");
        this.tv.visible=false;
        this.bt_croix_tv=this.game.add.button(980,5,"croix_sheet",this.bt_croix_tv,this,1,0,2,0);
        this.bt_croix_tv.visible=false;
        // pc2
        this.pc2_on=this.game.add.image(0,0,"pc2_on");
        this.bt_croix_pc2=this.game.add.button(980,15,"croix_sheet",this.bt_croix_pc2,this,1,0,2,0);
        this.bt_croix_pc2.visible=false;
        this.pc2_on.visible=false
        this.style_blanc = { font: "40px Arial", fill: "#FFFFFF", align: "center" };
        this.icon=new Array()
        this.icon_text=new Array()
        var i;
        var j;
        var ext=["XLS","CSV","JPG","XML","JSON","PDF","AVI","DOC","ZIP"]
        var k=0;
        for (i=0;i<3;i++)
        {
            for (j=0;j<3;j++)
            {
            var ico=this.game.add.sprite(300 + 160*i,30+j*180,"file_icon");
            ico.frame=0
            ico.tint=Math.random() * 0xffffff
            ico.inputEnabled=true
            ico.input.useHandCursor = true;
            ico.events.onInputDown.add(this.ico_click, this);
            this.icon.push(ico);
            var texte_ico=this.game.add.text(325 +160*i,100+j*180,ext[k], this.style_blanc);
            this.icon_text.push(texte_ico);
            k=k+1;
            this.texte_clavier_menu.visible=false
            }
        }
        this.bt_ok_pc2=this.game.add.button(900,500,"bt_ok",this.bt_ok_pc2,this,1,0,2,0)
        this.bt_ok_pc2.visible=false;
        for (i=0;i<9;i++){
            this.icon[i].visible=false;
            this.icon_text[i].visible=false;
        }
        // cadre 1
        this.cadre1=this.game.add.image(200,0,"cadre1");
        this.bt_croix_cadre1=this.game.add.button(784,4,"croix_sheet",this.bt_croix_cadre1,this,1,0,2,0);
        this.bt_croix_cadre1.visible=false;
        this.cadre1.visible=false;
        // pc2 open
        this.pc2_python=this.game.add.image(0,0,"pc2_python");
        this.zone_pc2_python = game.add.inputField(535, 145, {
            font: '20px Arial',
            fill: '#000000',
            fillAlpha: 0,
            fontWeight: 'bold',
            width: 10,
            max: 1,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 0,
            placeHolder: ' ',
            placeHolderColor:'#000000',
            textAlign: 'left',
            zoom: true,
            
        });
        this.zone_pc2_python.setText(",");
        this.bt_run=this.game.add.button(105,55,"bt_run",this.bt_run,this,1,0,2,0)
        this.python_bug=this.game.add.image(20,350,"python_bug");
        this.python_ok=this.game.add.image(20,230,"python_ok");
        this.python_ok.visible=false;
        this.python_bug.visible=false;
        this.bt_run.visible=false;
        this.zone_pc2_python.visible=false
        this.pc2_python.visible=false
        this.bt_croix_pc2_python=this.game.add.button(990,4,"croix_sheet",this.bt_croix_pc2_python,this,1,0,2,0);
        this.bt_croix_pc2_python.visible=false;
        

    },
    update:function() {
          
    },

    bouton_clavier:function() {
        console.log(' clavier down');
        this.clavier_menu.visible=true
        this.bouton_croix_clavier_menu.visible=true
        this.zone_clavier_menu.visible=true;
        this.bouton_valider_clavier_menu.visible=true;
    },
    croix_menu_clavier:function() {
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu.visible=false;
        this.zone_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu.visible=false
    },
    bt_valider_clavier_menu:function(){
        if (this.zone_clavier_menu.value=="1234"){
            this.texte_clavier_menu.visible=false
            this.clavier_menu.visible=false;
            this.bouton_croix_clavier_menu.visible=false;
            this.zone_clavier_menu.visible=false;
            this.bouton_valider_clavier_menu.visible=false;
            this.texte_clavier_menu.visible=false
            var tween = this.game.add.tween(porte).to( { x: [492,600 ]}, 5000, "Sine.easeInOut", true, false);

        }else{
            this.texte_clavier_menu.visible=true
        }
    },
    bt_lecteur:function(){
        this.menu_lecteur.visible=true;
       this.bouton_croix_lecteur_menu.visible=true;
       this.bouton_carte.visible=true;
    },
    bt_carte:function(){
        //this.menu_lecteur.visible=false;
        //this.bouton_croix_lecteur_menu.visible=false;
        //this.bouton_carte.visible=false;
        console.log("toto");
        var url="img/carte_code.png"
        var win = window.open(url, '_blank');
        
        
    },
    bouton_croix_lecteur_menu:function(){
       this.menu_lecteur.visible=false;
       this.bouton_croix_lecteur_menu.visible=false;
       this.bouton_carte.visible=false;
      
       

    },
    bouton_croix_carte:function(){
        this.bouton_croix_carte.visible=false;
        this.carte_code.visible=false;
    },
    bt_pc1:function(){
        this.ecran_pc1.visible=true;
        this.bouton_croix_ecran_pc1.visible=true;
        this.ecran_pc1.visible=true;
        this.zone_ecran_pc1.visible=true;
        this.bt_ok.visible=true;
     
    },
	bouton_croix_ecran_pc1:function(){
		this.ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.zone_ecran_pc1.visible=false;
        this.bt_ok.visible=false;
    },
    bt_ok:function(){
        if (this.zone_ecran_pc1.value=="visicalc"){
            this.bt_croix_ecran1.visible=true
            this.bt_download.visible=true
            this.ecran1.visible=true

        }
    },
    bt_placard:function(){
        this.placard.visible=true;
        this.bt_codex.visible=true;
        this.bt_croix_placard.visible=true;
    },
    bt_codex:function(){
        var url="img/codex.png"
        var win = window.open(url, '_blank');
    },
    bt_croix_placard:function(){
        this.placard.visible=false;
        this.bt_codex.visible=false;
        this.bt_croix_placard.visible=false;
    },
    bt_download:function(){
        var url="img/boxoffice.csv"
        var win = window.open(url, '_blank');
    },
    bt_croix_ecran1:function(){
        this.bt_croix_ecran1.visible=false;
        this.bt_download.visible=false;
        this.ecran1.visible=false;
        this.ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.zone_ecran_pc1.visible=false;
        this.bt_ok.visible=false;
    },
    bt_tv:function(){
        this.tv.visible=true;
        this.bt_croix_tv.visible=true;
    },
    bt_croix_tv:function(){
        this.tv.visible=false
        this.bt_croix_tv.visible=false;

    },
    pc2:function(){
        
        this.bt_croix_pc2.visible=true;
        this.pc2_on.visible=true
        this.bt_ok_pc2.visible=true;
        for (i=0;i<9;i++){
            this.icon[i].visible=true;
            this.icon[i].tint=Math.random() * 0xffffff
            this.icon_text[i].visible=true;
        }
    },
    bt_croix_pc2:function(){
        this.bt_croix_pc2.visible=false;
        this.pc2_on.visible=false;
        this.bt_ok_pc2.visible=false;
        this.pc2_on.visible=false
        for (i=0;i<9;i++){
            this.icon[i].visible=false;
            this.icon_text[i].visible=false;
        }
    },
    ico_click:function(sprite, pointer){
        if (sprite.tint==0x00000){
            sprite.tint=Math.random() * 0xffffff
        }else{
            sprite.tint=0x00000
        }
    },
    bt_ok_pc2:function(){
        var i;
        var q=true;
        
        for (i=0;i<9;i++){
            if (i==1 || i==3 || i==4){
                if (this.icon[i].tint==0x00000){
                    q=false;
                }
            }else{
                if(this.icon[i].tint!=0x00000){
                    q=false;
                }     
            }         
        }
        
        if (q==false){
            for (i=0;i<9;i++){
                this.icon[i].tint=Math.random() * 0xffffff
            }
        }else{
            this.bt_ok_pc2.visible=false;
            for (i=0;i<9;i++){
                this.icon[i].visible=false;
                this.icon_text[i].visible=false;
            }
            this.pc2_on.visible=false
            this.bt_croix_pc2.visible=false;
            this.python_bug.visible=false;
            this.bt_run.visible=true;
            this.zone_pc2_python.visible=true;
            this.pc2_python.visible=true
            this.bt_croix_pc2_python.visible=true;
        }
    },
    bt_cadre1:function(){
        this.bt_croix_cadre1.visible=true;
        this.cadre1.visible=true;
    },
    bt_croix_cadre1:function(){
        this.bt_croix_cadre1.visible=false;
        this.cadre1.visible=false;
    },
    bt_matrix:function(){
        var url="https://youtu.be/8xx91zoASLY"
        var win = window.open(url, '_blank');
    },
    bt_run:function(){
        if (this.zone_pc2_python.value==";"){
            this.python_ok.visible=true;
            this.python_bug.visible=false;
        }else{
            console.log("no");
            this.python_ok.visible=false;
            this.python_bug.visible=true;
        }
    },
    bt_croix_pc2_python:function(){
        this.python_ok.visible=false;
        this.python_bug.visible=false;
        this.zone_pc2_python.visible=false;
        this.bt_run.visible=false;
        this.pc2_python.visible=false;
        this.bt_croix_pc2_python.visible=false;
    },
    bt_anneau:function(){

    }
}