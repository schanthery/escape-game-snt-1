var preload= function (game) {
}
preload.prototype = {
 
    preload : function(){
     // aucune ressource à précharger pour cet état
    },
   
    create : function(){
     //nous ajoutons au départ le texte "chargement", à la position x 10 et y 100, et de couleur #fff i.e blanc
     this.loadText = this.add.text(10, 100, 'Chargement', { fill: '#ffffff' });
     //A chaque chargement de fichier nous appelons la fonction fileComplete que nous allons définir plus loin
     this.load.onFileComplete.add(this.fileComplete, this);
     //lorsque toutes les fichiers seront chargés, nous appelons la fonction loadComplete
     this.load.onLoadComplete.add(this.loadComplete, this);
   
     //on appelle la fonction qui va définir le chargement des fichiers
     this.startLoad();
   
    },
   
   startLoad: function(){
    //ici nous indiquons tous les fichiers que nous souhaitons charger pour notre jeu
    //et leur assignons à chacun un nom unique par lequel nous allons les référencer pour les utiliser
    //
    this.game.load.image('background', 'img/fond.jpg');
    this.game.load.image('surfond','img/surfond.png');
    this.game.load.image('porte','img/porte.png');
    this.game.load.image('clavier','img/clavier.png');
    this.game.load.image('clavier2','img/clavier2.png');
    this.game.load.image('croix','img/croix.png');
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
    this.game.load.spritesheet("bt_digicode_gandalf","img/bt_digicode_gandalf.png",40,50);
    this.game.load.spritesheet("bt_digicode_gandalf_on","img/bt_digicode_gandalf_on.png",40,50);
    this.game.load.image("digicode_gandalf","img/digicode_gandalf.png");
    this.game.load.image("digicode_gandalf_off","img/digicode_gandalf_off.png");
    this.game.load.spritesheet("bt_gandalf","img/bt_gandalf.png",130,130);
    this.game.load.image("anneau_dos","img/anneau_dos.png");
    this.game.load.image("accueil","img/accueil.png");
    this.game.load.image("prof","img/prof.png");
    this.game.load.spritesheet("bt_help","img/bt_help.png",200,121);
    this.game.load.audio('alarm', 'audio/alarm.mp3');
    this.game.load.audio('ia', 'audio/ia.mp3');
    this.game.load.audio('ia2', 'audio/ia2.mp3');
    this.game.load.image("fin","img/fin.png");
    this.game.load.image('livre','img/livre.png');
    this.game.load.spritesheet('bt_livre','img/bt_livre.png',60,37);
    this.game.load.image('postit','img/postit.png');
    this.game.load.spritesheet('bt_postit','img/bt_postit.png',50,48);
    this.game.load.spritesheet('bt_delimiter',"img/delimiter.png",132,20);
    //on lance le chargement
    this.load.start();
   
   },
   
   update : function(){
     
      //n'est pas utile pour cet état, nous la definissons à titre didactique mais elle n'est pas nécessaire
   
   },
   
   
    //Maintenant, définissons nos fonctions!
    
    fileComplete: function ( progress, cacheKey, success, totalLoaded, totalFiles) {
    
       //à chaque nouveau fichier chargé nous mettons à jour notre variable loadText
       this.loadText.setText("Fichiers chargés : " + progress + "% - " + totalLoaded + " sur " + totalFiles);
   
    },
   
    loadComplete : function(){
       // tous les fichiers sont chargés, on peut donc lancer l'état suivant : le jeu!
       this.state.start('menu');
    }
  }