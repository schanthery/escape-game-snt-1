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
    var bt_digicode_gandalf;
    var bt_digicode_gandalf_on;
    var digicode_gandalf;
    var digicode_gandalf_off;
    var bt_gandalf;
    var bt_croix_gandalf;
    var zone_gandalf;
    var bt_ok_gandalf;
    var anneau_dos;
    var bt_croix_anneau;
    var bt_digicode_gandalf_on;
    var accueil;
    var prof;
    var bt_help;
    var alarm;
    var ia;
    var ia2;
    var fin;
    var livre;
    var bt_livre;
    var bt_croix_livre;
    var tab_couleur;
    var flag_pc2;
    var flag_pc1;
    var postit;
    var bt_postit;
    var bt_croix_postit;
    var bt_delimiter;
    var debug;
}
menu.prototype = {
    preload: function () {
        
    },
    create:function() {
        this.debug=false;
        // Center game canvas on page
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.game.stage.scale.setShowAll();
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.fond = this.game.add.tileSprite(0, 0, 1024, 768, 'background');   
        porte=this.add.image(600, 110, 'porte');
        this.add.image(0, 0, 'surfond');
        //tv
        this.bt_tv=this.game.add.button(0,285,"bt_tv",this.bt_tv,this,1,0,2,0);
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
        // bt_digicode_gandalf
        this.bt_digicode_gandalf=this.game.add.button(457,340,"bt_digicode_gandalf",this.bt_digicode_gandalf,this,1,0,2,0);
        // bt_digicode_gandalf_on
        this.bt_digicode_gandalf_on=this.game.add.button(457,340,"bt_digicode_gandalf_on",this.bt_digicode_gandalf_on,this,1,0,2,0);
        this.bt_digicode_gandalf_on.visible=false;
        // création zone clavier porte
        this.bouton_clavier = this.game.add.button(580,345, 'clavier_sheet', this.bouton_clavier,this,1,0,2,0);
        // bt_livre
        this.bt_livre=this.game.add.button(125,607,'bt_livre',this.bt_livre,this,1,0,2,0);
        // bt_postit
        this.bt_postit=this.game.add.button(850,510,'bt_postit',this.bt_postit,this,1,0,2,0);
        // zone lecteur de carte
        this.bt_pc1=this.game.add.button(215,565,"bt_pc1",this.bt_pc1,this,1,0,2,0);
        this.bouton_lecteur=this.game.add.button(120,690,"bt_lecteur",this.bt_lecteur,this,1,0,2,0);
        this.menu_lecteur=this.game.add.image(0,0,'menu_lecteur');
        this.bouton_carte=this.game.add.button(450,340,"bt_carte",this.bt_carte,this,1,0,2,0);
        this.bouton_croix_lecteur_menu=this.game.add.button(660,200,"croix_sheet",this.bouton_croix_lecteur_menu,this,1,0,2,0);
        this.menu_lecteur.visible=false;
        this.bouton_croix_lecteur_menu.visible=false;
        this.bouton_carte.visible=false;
        this.carte_code=this.game.add.image(0,100,'carte_code');
        this.carte_code.visible=false;
        this.bouton_croix_carte=this.game.add.button(975,110,"croix_sheet",this.bouton_croix_carte,this,1,0,2,0);
        this.bouton_croix_carte.visible=false;
        // zone écran pc1
        this.flag_pc1=false;
		this.ecran_pc1=this.game.add.image(0,0,"pc1_ecran");
		this.bouton_croix_ecran_pc1=this.game.add.button(960,20,"croix_sheet",this.bouton_croix_ecran_pc1,this,1,0,2,0);
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
        this.bt_ok=this.game.add.button(630,275,"bt_ok",this.bt_ok,this,1,0,2,0);
        this.ecran_pc1.visible=false;
        this.zone_ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.bt_ok.visible=false;
        
        this.placard=this.game.add.image(220,70,"placard");
        this.placard.visible=false;
        this.bt_codex=this.game.add.button(300,320,"bt_codex",this.bt_codex,this,1,0,2,0);
        this.bt_codex.visible=false;
        this.bt_croix_placard=this.game.add.button(750,80,"croix_sheet",this.bt_croix_placard,this,1,0,2,0);
        this.bt_croix_placard.visible=false;
        // ecran 1
        
        this.ecran1=this.game.add.image(0,0,"ecran1");
        this.ecran1.visible=false;
        this.bt_download=this.game.add.button(520,73,"bt_download",this.bt_download,this,1,0,2,0);
        this.bt_download.alpha=0;
        game.add.tween(this.bt_download).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
        this.bt_download.visible=false;
        this.bt_croix_ecran1=this.game.add.button(980,5,"croix_sheet",this.bt_croix_ecran1,this,1,0,2,0);
        this.bt_croix_ecran1.visible=false;
        //tv
        
        this.tv=this.game.add.image(0,0,"tv");
        this.tv.visible=false;
        this.bt_croix_tv=this.game.add.button(980,5,"croix_sheet",this.bt_croix_tv,this,1,0,2,0);
        this.bt_croix_tv.visible=false;
        this.clavier_menu=this.game.add.image(0,0,'clavier_menu');
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu=this.game.add.button(660,145,"croix_sheet",this.croix_menu_clavier,this,1,0,2,0);
        this.bouton_croix_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu=this.game.add.button(555,535,"bt_valider_clavier_menu",this.bt_valider_clavier_menu,this,1,0,2,0);
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu=this.game.add.text(385, 550, "Ce n'est pas le bon code", this.style_bleu);
        this.texte_clavier_menu.visible=false;
        this.zone_clavier_menu = game.add.inputField(480, 535, {
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
        // pc2
        this.pc2_on=this.game.add.image(0,0,"pc2_on");
        this.bt_croix_pc2=this.game.add.button(980,15,"croix_sheet",this.bt_croix_pc2,this,1,0,2,0);
        this.bt_croix_pc2.visible=false;
        this.pc2_on.visible=false;
        this.style_blanc = { font: "40px Arial", fill: "#FFFFFF", align: "center" };
        this.icon=new Array();
        this.icon_text=new Array();
        var i;
        var j;
        this.flag_pc2=false;
        var ext=["XLS","CSV","JPG","XML","JSON","PDF","AVI","DOC","ZIP"];
        this.tab_couleur=[0xCCFF33,0xCC0000,0x0000FF,0x00FF00,0xFF9900,0x9900CC,0x666633,0x008080,0x800000];
        var k=0;
        for (i=0;i<3;i++)
        {
            for (j=0;j<3;j++)
            {
            var ico=this.game.add.sprite(300 + 160*i,30+j*180,"file_icon");
            ico.frame=0;
            ico.tint=0x00000;
            ico.inputEnabled=true;
            ico.input.useHandCursor = true;
            ico.events.onInputDown.add(this.ico_click, this);
            this.icon.push(ico);
            var texte_ico=this.game.add.text(325 +160*i,100+j*180,ext[k], this.style_blanc);
            this.icon_text.push(texte_ico);
            k=k+1;
            this.texte_clavier_menu.visible=false
            };
        };
        this.bt_ok_pc2=this.game.add.button(900,500,"bt_ok",this.bt_ok_pc2,this,1,0,2,0);
        this.bt_ok_pc2.visible=false;
        for (i=0;i<9;i++){
            this.icon[i].visible=false;
            this.icon_text[i].visible=false;
        };
        this.clavier_menu=this.game.add.image(0,0,'clavier_menu');
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu=this.game.add.button(660,145,"croix_sheet",this.croix_menu_clavier,this,1,0,2,0);
        this.bouton_croix_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu=this.game.add.button(555,535,"bt_valider_clavier_menu",this.bt_valider_clavier_menu,this,1,0,2,0);
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu=this.game.add.text(385, 550, "Ce n'est pas le bon code", this.style_bleu);
        this.texte_clavier_menu.visible=false;
        this.zone_clavier_menu = game.add.inputField(480, 535, {
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
        // cadre 1
        this.cadre1=this.game.add.image(0,0,"cadre1");
        this.bt_croix_cadre1=this.game.add.button(784,4,"croix_sheet",this.bt_croix_cadre1,this,1,0,2,0);
        this.bt_croix_cadre1.visible=false;
        this.cadre1.visible=false;
        // pc2 open
        this.pc2_python=this.game.add.image(0,0,"pc2_python");
        this.bt_delimiter=this.game.add.button(430,156,"bt_delimiter",this.bt_delimiter,this,1,0,2,0);
        this.bt_delimiter.visible=false;
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
        
        this.bt_run=this.game.add.button(105,55,"bt_run",this.bt_run,this,1,0,2,0);
        this.python_bug=this.game.add.image(20,350,"python_bug");
        this.python_ok=this.game.add.image(20,230,"python_ok");
        this.python_ok.visible=false;
        this.python_bug.visible=false;
        this.bt_run.visible=false;
        this.zone_pc2_python.visible=false;
        this.pc2_python.visible=false;
        this.bt_croix_pc2_python=this.game.add.button(990,4,"croix_sheet",this.bt_croix_pc2_python,this,1,0,2,0);
        this.bt_croix_pc2_python.visible=false;
        // gandalf digicode
        this.digicode_gandalf=this.game.add.image(0,0,"digicode_gandalf");
        this.digicode_gandalf.visible=false;
        this.digicode_gandalf_off=this.game.add.image(0,0,"digicode_gandalf_off");
        this.digicode_gandalf_off.visible=false;
        this.bt_gandalf=this.game.add.button(450,180,"bt_gandalf",this.bt_gandalf,this,1,0,2,0);
        this.bt_croix_gandalf=this.game.add.button(990,4,"croix_sheet",this.bt_croix_gandalf,this,1,0,2,0);
        this.zone_gandalf = game.add.inputField(450, 385, {
            font: '20px Arial',
            fill: '#000000',
            fillAlpha: 1,
            fontWeight: 'bold',
            width: 100,
            max: 4,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 0,
            placeHolder: ' ',
            placeHolderColor:'#000000',
            textAlign: 'center',
            zoom: true,
        });
        this.bt_ok_gandalf=this.game.add.button(570,382,"bt_ok",this.bt_ok_gandalf,this,1,0,2,0);
        this.digicode_gandalf.visible=false;
        this.bt_gandalf.visible=false;
        this.bt_croix_gandalf.visible=false;
        this.bt_ok_gandalf.visible=false;
        this.zone_gandalf.visible=false;
        // anneau_dos
        this.anneau_dos=this.game.add.image(0,0,"anneau_dos");
        this.bt_croix_anneau=this.game.add.button(975,15,"croix_sheet",this.bt_croix_anneau,this,1,0,2,0);
        this.anneau_dos.visible=false;
        this.bt_croix_anneau.visible=false;
        // menu clavier
        this.clavier_menu=this.game.add.image(0,0,'clavier_menu');
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu=this.game.add.button(660,145,"croix_sheet",this.croix_menu_clavier,this,1,0,2,0);
        this.bouton_croix_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu=this.game.add.button(555,535,"bt_valider_clavier_menu",this.bt_valider_clavier_menu,this,1,0,2,0);
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu=this.game.add.text(385, 550, "Ce n'est pas le bon code", this.style_bleu);
        this.texte_clavier_menu.visible=false;
        this.zone_clavier_menu = game.add.inputField(430, 535, {
            font: '18px Arial',
            fill: '#000000',
            fillAlpha: 100,
            fontWeight: 'bold',
            width: 100,
            max: 9,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 6,
            placeHolder: '$$$$$$$$$',
            textAlign: 'center',
            zoom: true,
        });
        this.zone_clavier_menu.visible=false;
        // livre
        this.livre=this.game.add.image(0,0,'livre');
        this.livre.visible=false;
        this.bt_croix_livre=this.game.add.button(960,15,"croix_sheet",this.bt_croix_livre,this,1,0,2,0);
        this.bt_croix_livre.visible=false;
        
        // postit
        this.postit=this.game.add.image(0,0,'postit');
        this.postit.visible=false;
        this.bt_croix_postit=this.game.add.button(960,15,"croix_sheet",this.bt_croix_postit,this,1,0,2,0);
        this.bt_croix_postit.visible=false;
        // accueil
        this.accueil=this.game.add.image(0,0,'accueil');
        this.prof=this.game.add.image(0,220,'prof');
        this.bt_help=this.game.add.button(785,650,"bt_help",this.bt_help,this,1,0,2,0);
        this.bt_help.scale.x=0.7;
        this.bt_help.scale.y=0.7;
        this.prof.alpha=1;
        game.add.tween(this.prof).to( { alpha: 0 }, 30000, "Linear", true);
        this.alarm = game.add.audio('alarm');
        this.alarm.onStop.add(this.alarm_complete, this);
        this.ia=game.add.audio('ia');
        this.ia2=game.add.audio('ia2');
        this.ia2.onStop.add(this.ia2_complete, this);
        this.fin=this.game.add.image(0,0,'fin');
        this.fin.visible=false;
        // extinction des boutons
        this.boutons_off();
        if (this.debug==true){
            this.prof.visible=false;
            this.accueil.visible=false;
            var tween = this.game.add.tween(porte).to( { x: [ 600,492 ]}, 5000, Phaser.Easing.Linear.None, true, false);
            this.bt_help.visible=false;
            this.bt_help.inputEnabled=false;
            this.alarm_complete()
        }
        

    },
    update:function() {
          
    },

    bouton_clavier:function() {
        this.boutons_off();
        this.clavier_menu.visible=true;
        this.bouton_croix_clavier_menu.visible=true;
        this.zone_clavier_menu.visible=true;
        this.bouton_valider_clavier_menu.visible=true;
    },
    croix_menu_clavier:function() {
        this.clavier_menu.visible=false;
        this.bouton_croix_clavier_menu.visible=false;
        this.zone_clavier_menu.visible=false;
        this.bouton_valider_clavier_menu.visible=false;
        this.texte_clavier_menu.visible=false;
        this.boutons_on();
    },
    bt_valider_clavier_menu:function(){
        if (this.zone_clavier_menu.value=="171479930"){
            this.texte_clavier_menu.visible=false;
            this.clavier_menu.visible=false;
            this.bouton_croix_clavier_menu.visible=false;
            this.zone_clavier_menu.visible=false;
            this.bouton_valider_clavier_menu.visible=false;
            this.texte_clavier_menu.visible=false;
            this.bt_digicode_gandalf_on.visible=true;
            this.bt_digicode_gandalf.visible=false;
            this.boutons_on();
            

        }else{
            this.texte_clavier_menu.visible=true;
        };
    },
    bt_lecteur:function(){
        this.menu_lecteur.visible=true;
        this.bouton_croix_lecteur_menu.visible=true;
        this.bouton_carte.visible=true;
        this.boutons_off();
    },
    bt_carte:function(){
        var url="img/carte_code.png";
        var win = window.open(url, '_blank');

        
        
    },
    bouton_croix_lecteur_menu:function(){
       this.menu_lecteur.visible=false;
       this.bouton_croix_lecteur_menu.visible=false;
       this.bouton_carte.visible=false;
       this.boutons_on()
      
       

    },
    bouton_croix_carte:function(){
        this.bouton_croix_carte.visible=false;
        this.carte_code.visible=false;
    },
    bt_pc1:function(){
        if (this.flag_pc1==false){
            this.ecran_pc1.visible=true;
            this.bouton_croix_ecran_pc1.visible=true;
            this.ecran_pc1.visible=true;
            this.zone_ecran_pc1.visible=true;
            this.bt_ok.visible=true;
            this.boutons_off();
        }else{
            this.bt_croix_ecran1.visible=true;
            this.bt_download.visible=true;
            this.ecran1.visible=true;
            this.boutons_off();
        };
     
    },
	bouton_croix_ecran_pc1:function(){
		this.ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.bouton_croix_ecran_pc1.visible=false;
        this.zone_ecran_pc1.visible=false;
        this.bt_ok.visible=false;
        this.boutons_on();
    },
    bt_ok:function(){
        if (this.zone_ecran_pc1.value=="VISICALC" || this.zone_ecran_pc1.value=="visicalc"){
            this.flag_pc1=true;
            this.bt_croix_ecran1.visible=true;
            this.bt_download.visible=true;
            this.ecran1.visible=true;
        };
    },
    bt_placard:function(){
        this.placard.visible=true;
        this.bt_codex.visible=true;
        this.bt_croix_placard.visible=true;
        this.boutons_off();
    },
    bt_codex:function(){
        var url="img/codex.png";
        var win = window.open(url, '_blank');
    },
    bt_croix_placard:function(){
        this.placard.visible=false;
        this.bt_codex.visible=false;
        this.bt_croix_placard.visible=false;
        this.boutons_on();
    },
    bt_download:function(){
        var url="img/boxoffice.csv";
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
        this.boutons_on();
    },
    bt_tv:function(){
        this.tv.visible=true;
        this.bt_croix_tv.visible=true;
        this.boutons_off();
    },
    bt_croix_tv:function(){
        this.tv.visible=false;
        this.bt_croix_tv.visible=false;
        this.boutons_on();

    },
    pc2:function(){
        this.boutons_off()
        if (this.flag_pc2==false){
            this.bt_croix_pc2.visible=true;
            this.pc2_on.visible=true;
            this.bt_ok_pc2.visible=true;
            for (i=0;i<9;i++){
                this.icon[i].visible=true;
                this.icon[i].tint=0x00000;
                this.icon_text[i].visible=true;
            };
        }else{
            this.bt_ok_pc2.visible=false;
            for (i=0;i<9;i++){
                this.icon[i].visible=false;
                this.icon_text[i].visible=false;
            };
            this.pc2_on.visible=false;
            this.bt_croix_pc2.visible=false;
            this.python_bug.visible=false;
            this.bt_run.visible=true;
            this.zone_pc2_python.visible=true;
            this.bt_delimiter.visible=true;
            this.pc2_python.visible=true;
            this.bt_croix_pc2_python.visible=true;
            this.boutons_off();

        };
    },
    bt_croix_pc2:function(){
        this.boutons_on();
        this.bt_croix_pc2.visible=false;
        this.pc2_on.visible=false;
        this.bt_ok_pc2.visible=false;
        this.pc2_on.visible=false;
        for (i=0;i<9;i++){
            this.icon[i].visible=false;
            this.icon_text[i].visible=false;
        };
    },
    ico_click:function(sprite, pointer){
        if (sprite.tint==0x00000){
            var k=this.icon.indexOf(sprite);
            sprite.tint=this.tab_couleur[k];
        }else{
            sprite.tint=0x00000;
        };
    },
    bt_ok_pc2:function(){
        var i;
        var q=true;
        
        for (i=0;i<9;i++){
            if (i==1 || i==3 || i==4){
                if (this.icon[i].tint==0x00000){
                    q=false;
                };
            }else{
                if(this.icon[i].tint!=0x00000){
                    q=false;
                };    
            }         
        }
        
        if (q==false){
            for (i=0;i<9;i++){
                this.icon[i].tint=0x00000;
            };
        }else{
            this.flag_pc2=true;
            this.bt_ok_pc2.visible=false;
            for (i=0;i<9;i++){
                this.icon[i].visible=false;
                this.icon_text[i].visible=false;
            };
            this.pc2_on.visible=false;
            this.bt_croix_pc2.visible=false;
            this.python_bug.visible=false;
            this.bt_run.visible=true;
            this.zone_pc2_python.visible=true;
            this.pc2_python.visible=true;
            this.bt_croix_pc2_python.visible=true;
            this.bt_delimiter.visible=true;;
            this.boutons_off();
        };
    },
    bt_cadre1:function(){
        this.bt_croix_cadre1.visible=true;
        this.cadre1.visible=true;
        this.boutons_off();
    },
    bt_croix_cadre1:function(){
        this.bt_croix_cadre1.visible=false;
        this.cadre1.visible=false;
        this.boutons_on();
    },
    bt_matrix:function(){
        var url="https://youtu.be/wW7LbGHE0yQ";
        var win = window.open(url, '_blank');
    },
    bt_run:function(){
        if (this.zone_pc2_python.value==";"){
            this.python_ok.visible=true;
            this.python_bug.visible=false;
        }else{
            
            this.python_ok.visible=false;
            this.python_bug.visible=true;
        };
    },
    bt_croix_pc2_python:function(){
        this.python_ok.visible=false;
        this.python_bug.visible=false;
        this.zone_pc2_python.visible=false;
        this.bt_run.visible=false;
        this.pc2_python.visible=false;
        this.bt_croix_pc2_python.visible=false;
        this.bt_delimiter.visible=false;
        this.boutons_on();
    },
    bt_anneau:function(){
        this.bt_croix_anneau.visible=true;
        this.anneau_dos.visible=true;
        this.boutons_off();
    },
    bt_digicode_gandalf_on:function(){
        this.digicode_gandalf.visible=true;
        this.bt_gandalf.visible=true;
        this.bt_croix_gandalf.visible=true;
        this.bt_ok_gandalf.visible=true;
        this.zone_gandalf.visible=true;
        this.boutons_off();
    },
    bt_digicode_gandalf:function(){
        this.digicode_gandalf_off.visible=true;
        this.digicode_gandalf.visible=false;
        this.bt_croix_gandalf.visible=true;
        this.boutons_off();
    },
    bt_gandalf:function(){
        var url="https://youtu.be/Ygnez_odlNg";
        var win = window.open(url, '_blank');
    },
    bt_croix_gandalf:function(){
        this.digicode_gandalf.visible=false;
        this.bt_gandalf.visible=false;
        this.bt_croix_gandalf.visible=false;
        this.bt_ok_gandalf.visible=false;
        this.zone_gandalf.visible=false;
        this.digicode_gandalf_off.visible=false;
        this.boutons_on();
    },
    bt_ok_gandalf:function(){
        if (this.zone_gandalf.value=="7564"){
            this.digicode_gandalf.visible=false;
            this.bt_gandalf.visible=false;
            this.bt_croix_gandalf.visible=false;
            this.bt_ok_gandalf.visible=false;
            this.zone_gandalf.visible=false;
            var tween = this.game.add.tween(porte).to( { x: [492,600 ]}, 5000, "Sine.easeInOut", true, false);
            this.boutons_off();
            this.ia2.play();

        }

    },
    bt_croix_anneau:function(){
        this.bt_croix_anneau.visible=false;
        this.anneau_dos.visible=false;
        this.boutons_on();
    },
    boutons_off:function(){
        this.bt_tv.inputEnabled=false;
        this.bt_placard.inputEnabled=false;
        this.bt_cadre1.inputEnabled=false;
        this.placard.inputEnabled=false;
        this.bt_anneau.inputEnabled=false;
        this.bt_digicode_gandalf.inputEnabled=false;
        this.bt_digicode_gandalf_on.inputEnabled=false;
        this.bt_pc1.inputEnabled=false;
        this.bt_matrix.inputEnabled=false;
        this.bouton_clavier.inputEnabled=false;
        this.pc2.inputEnabled=false;
        this.bouton_lecteur.inputEnabled=false;
        this.bt_livre.inputEnabled=false;
        this.bt_postit.inputEnabled=false;
    },
    boutons_on:function(){
        this.bt_tv.inputEnabled=true;
        this.bt_placard.inputEnabled=true;
        this.bt_cadre1.inputEnabled=true;
        this.placard.inputEnabled=true;
        this.bt_anneau.inputEnabled=true;
        this.bt_digicode_gandalf.inputEnabled=true;
        this.bt_digicode_gandalf_on.inputEnabled=true;
        this.bt_pc1.inputEnabled=true;
        this.bt_matrix.inputEnabled=true;
        this.bouton_clavier.inputEnabled=true;
        this.pc2.inputEnabled=true;
        this.bouton_lecteur.inputEnabled=true;
        this.bt_livre.inputEnabled=true;
        this.bt_postit.inputEnabled=true;
    },
    bt_help:function(){
        this.alarm.play();
        this.prof.visible=false;
        this.accueil.visible=false;
        var tween = this.game.add.tween(porte).to( { x: [ 600,492 ]}, 5000, Phaser.Easing.Linear.None, true, false);
        this.bt_help.visible=false;
        this.bt_help.inputEnabled=false;
    },
    alarm_complete:function(){
        this.ia.play();
        this.boutons_on();
    },
    ia2_complete:function(){
        this.fin.visible=true;
    },
    bt_livre:function(){
        this.livre.visible=true;
        this.bt_croix_livre.visible=true;
        this.boutons_off();
    },
    bt_croix_livre:function(){
        this.livre.visible=false;
        this.bt_croix_livre.visible=false;
        this.boutons_on();
    },
    bt_postit:function(){
        this.postit.visible=true;
        this.bt_croix_postit.visible=true;
        this.boutons_off();
    },
    bt_croix_postit:function(){
        this.postit.visible=false;
        this.bt_croix_postit.visible=false;
        this.boutons_on();
    },
    bt_delimiter:function(){

    }
    
    
}