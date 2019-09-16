var conjugaison = function(game){
    // les variables globales de conjugaison
    var titre;
    var titre2;
    var consigne;
    var consigne2;
    var consigne3;
    var consigne4;
    var score;
    var liste_verbe;
    var liste_temps;
    var liste_selecteurXML;
    var liste_personne;
    var liste_personne_consigne;
    var i_verbe;
    var i_temps;
    var i_personne;
    var zone;
    var bouton_valider;
    var triche;
    var bonne_reponse;
    var xml;
    var xml2;
    var dico_verbe;
    var dico_modele;
    var i_dico;
    var parser;
    var parser2;
    var debug;
    var verdict;
    var style;
    var style_bleu;
    var style_orange;
    var style_noir;
    var style_vert ;
    var style_prenom;
    var style_verdict_vert;
    var style_verdict_rouge;
    var styke_score;
    var n_question;
    var question;
    var score;
    var correction_en_cours
    var zone_score;
    var score_a_la_suite;
    var zone_score_a_la_suite;
    var attendre;
    var checkbox1;
    var tous_les_verbes;
    var bonus;
    var zone_bonus;
}
conjugaison.prototype = {
    preload:function(){
        this.debug=false; // False en mode normal , true en mode triche
        this.bonus=5
        tous_les_verbes=false;
        this.attendre=false;
        this.n_question=0;
        this.score=0;
        this.correction_en_cours=false;
        this.score_a_la_suite=0
        // lsite des verbes disponibles Attention : les verbes commençant par h posent problème à la première personne pour le pronom
        this.liste_verbe = ["être","avoir","aller","faire","dire","voir"] //,"venir","partir","prendre","mettre","pouvoir","vouloir"];
        // orthographe à respecter : "présent de l'indicatif", "futur de l'indicatif","passé simple de l'indicatif"
        this.liste_temps= ["futur de l'indicatif"];
        this.liste_selecteurXML=['indicative>future>p>i','indicative>present>p>i','indicative>imperfect>p>i','indicative>simple-past>p>i'] // doit être dans le même ordre que liste_temps
        /* <!ELEMENT infinitive (infinitive-present)>
	<!ELEMENT indicative (present, imperfect, future, simple-past)>
	<!ELEMENT conditional (present)>
	<!ELEMENT subjunctive (present, imperfect)>
	<!ELEMENT imperative (imperative-present)>
	<!ELEMENT participle (present-participle, past-participle)> */
        
        this.liste_personne= ["je ", "tu ", "il ", "nous ", "vous ", "ils "];
        this.liste_personne_consigne=["à la 1ère personne du singulier", "à la 2ème personne du singulier", "à la 3ème personne du singulier", "à la 1ère personne du pluriel", "à la 2ème personne du pluriel", "à la 3ème personne du pluriel"];
        this.game.load.spritesheet('bouton_valider_sheet', 'img/bouton_valider_petit.png', 143, 50);
        this.game.load.text ('xml', 'xml/verbs-fr.xml');
        this.game.load.text ('xml2', 'xml/conjugation-fr.xml');
        // styles ######################################
        this.style_bleu = { font: "40px Arial", fill: "#01B0FF", align: "Left" };
        this.style_orange = { font: "60px Arial", fill: "#E64D01", align: "Left" };
        this.style_noir = { font: "30px Arial", fill: "#010101", align: "Left" };
        this.style_score = { font: "15px Arial", fill: "#000000", align: "Left" };
        this.style_vert = { font: "30px Arial", fill: "#A2C82B", align: "Left" };
        this.style = { font: "40px Arial", fill: "#ff33fc", align: "Center" };
        this.style_triche = { font: "15px Arial", fill: "#0fa832", align: "Left" };
        this.style_verdict_vert={ font: "50px Arial", fill: "#60fa5a", align: "Left"};
        this.style_verdict_rouge={ font: "50px Arial", fill: "#f7002f", align: "Left"};
        game.load.spritesheet( 'sprite_checkbox', '/img/checkbox.png', 12, 12 );
    },
    
    create:function() {
        // Center game canvas on page
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.game.stage.scale.setShowAll();
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
		// couleur de fond        
        this.game.stage.backgroundColor = '#ffffff';
        //Creation d'une zone de titre
        this.titre = this.game.add.text(this.game.world.width/2, 20, "La conjugaison de Mme Chanthery", this.style);
        this.titre.anchor.set(0.5);
        this.titre2 = this.game.add.text(this.game.world.width/2, 60, "Défi de la semaine du 16 mai", this.style_vert);
        this.titre2.anchor.set(0.5);
        // creation consigne
        this.consigne= this.game.add.text(10,100,"Conjugue :",this.style_bleu);
        this.consigne2= this.game.add.text(40,140,"Verbe",this.style_orange);
        this.consigne3= this.game.add.text(40,200,"Personne",this.style_noir)
        this.consigne4= this.game.add.text(40,230,"Temps" ,this.style_vert);
        // création de la zone de saisie
        this.zone = game.add.inputField(40, 300, {
                font: '40px Arial',
                fill: '#000000',
                fillAlpha: 100,
                fontWeight: 'bold',
                width: 500,
                max: 50,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000000',
                borderRadius: 6,
                placeHolder: '0',
                textAlign: 'left',
                zoom: true
            });
        // création du bouton valider
        this.bouton_valider = this.game.add.button (this.zone.x+this.zone.width+30, this.zone.y+3, 'bouton_valider_sheet', this.bouton_valider_clic, this,1,0,2,0);
        // creation de la zone de triche
        this.triche= game.add.text(40, 360, "", this.style_triche);
        // creation de la zone de vertdict
        this.verdict= this.game.add.text(130, 350, "", this.style_verdict_vert);
        // creation de zone de score
        this.zone_score=this.game.add.text(170,420,"Score: 0",this.style_score)
        this.question=this.game.add.text(10,420,"Question n°"+this.n_question,this.style_score)
        this.zone_score_a_la_suite= this.game.add.text(300,420,"Sans faute à la suite: 0",this.style_score)
        // creation de la zone de texte pour le bonus
        this.zone_bonus=this.game.add.text(500,420,"Chaque bonne réponse vaut 5 points",this.style_score)
        // gestion du xml ##############################
	   this.xml = this.game.cache.getText('xml');
	   this.parser = new DOMParser();
	   this.xml = this.parser.parseFromString (this.xml, "application/xml");
	   // gestion du xml2 
	   this.xml2 = this.game.cache.getText ('xml2');
	   this.parser2 = new DOMParser();
	   this.xml2 = this.parser2.parseFromString(this.xml2, "application/xml");
        this.dico_verbe = this.xml.querySelectorAll("i");
	   this.dico_modele = this.xml.querySelectorAll("t");
        // creation de la check box pour travailler avec tous les verbes
        checkbox1 = game.add.checkbox( 0, 500, { text: 'avec 7015 verbes disponibles', style: {font: "12px Arial", fill: '#000000',align: "Left" } }, 'sprite_checkbox' );
        checkbox1.events.onInputUp.add( function( elm, pointer ){
            tous_les_verbes=checkbox1.state ;
            if (tous_les_verbes==true){
                alert("Les 7015 verbes du dictionnaire sont utilisés");
                this.creation_consigne();
            }else{
                alert("Seuls les verbes choisis par Mme Chanthery sont utilisés");
                this.creation_consigne();
            }
        }, this );
        // Démarrage du jeu
        // création de la consigne
        this.creation_consigne();
        
    },
    
    update:function() {
        
   
        
    },
    
    creation_consigne: function() {
        
        var liste_voyelles=["a","e","u","o","i","y"]
        this.n_question=this.n_question+1;
        this.question.text="Question n°"+this.n_question;
        // tirage de la personne
        this.i_personne =game.rnd.integerInRange(0, this.liste_personne.length-1);
        //this.i_personne=0
        // tirage du temps
        this.i_temps= game.rnd.integerInRange(0, this.liste_temps.length-1);
        // ecriture de la consigne
        this.consigne.text="Conjugue :";
        this.consigne3.text= this.liste_personne_consigne[this.i_personne]
        this.consigne4.text= this.liste_temps[this.i_temps];
        // tirage du verbe
        if (tous_les_verbes==false){
            this.i_verbe = game.rnd.integerInRange(0, this.liste_verbe.length-1);
            // Ecriture du verbe dans la consigne
            this.consigne2.text= this.liste_verbe[this.i_verbe]
            // recherche de l'index du verbe dans le dico
            this.i_dico=0;
            var q=false;
            while (q==false){
            if (this.dico_verbe[this.i_dico].textContent == this.liste_verbe[this.i_verbe]){
                q=true;
                }else{
                this.i_dico=this.i_dico+1
                }
            }
        }else{
            this.i_dico=game.rnd.integerInRange(0, this.dico_verbe.length-1);
            this.consigne2.text= this.dico_verbe[this.i_dico].textContent;
            if (this.dico_verbe[this.i_dico].textContent[0]=="h"){
                 this.creation_consigne();
            }
        }
        // on recherche le xml modele= template
        var template= this.xml2.querySelector('[name="'+this.dico_modele[this.i_dico].textContent+'"]');
        
        // on recherche la terminaison de l'infinif à enlever pour obtenir le radical
        var terminaison= template.querySelector('infinitive>infinitive-present>p>i')
        // on enlève la terminaison pour obtenir le radical
        terminaison=terminaison.textContent;
        var radical=this.dico_verbe[this.i_dico].textContent;
        radical=radical.substr(0,radical.length-terminaison.length);
        // On cherche la terminaison conjuguée avec un sélecteur CSS
        var terminaison_conj=template.querySelectorAll(this.liste_selecteurXML[this.i_temps]);
        // on commence à construire la bonne réponse sans le pronom
        this.bonne_reponse=radical+terminaison_conj[this.i_personne].textContent;
        // on détermine le  pronom personnel  
        var pronom=this.liste_personne[this.i_personne];
        if (pronom=="je "){
           for(var i=0;i<liste_voyelles.length;i=i+1){
               if (this.bonne_reponse[0]==liste_voyelles[i]){
                   pronom="j'"
               }
           }
        }
        this.bonne_reponse=pronom+this.bonne_reponse;
        // vidage de la zone de saisie
        this.zone.setText (pronom); // pronom !!!!!!!!!!
        
        if (this.debug==1){
            this.triche.text= this.bonne_reponse;
            this.zone.setText (this.bonne_reponse);
        }
        
        

    },
    bouton_valider_clic:function() {
        if (this.attendre==false){
            if (this.zone.value==this.bonne_reponse){
                this.verdict.fill="#00ff3a";
                this.verdict.text="Bonne réponse !";
                game.time.events.add(1500, this.remove_verdict_bonne_reponse, this);
                this.attendre=true;
                if (this.correction_en_cours==false){
                    this.score=this.score+this.bonus
                    this.zone_score.text="Score: "+this.score
                    this.score_a_la_suite= this.score_a_la_suite+1
                    this.bonus=this.score_a_la_suite-this.score_a_la_suite%5+5;
                    this.zone_bonus.text="Chaque bonne réponse vaut "+this.bonus+" points"
                    this.zone_score_a_la_suite.text="Sans faute à la suite: "+this.score_a_la_suite
                    // lancement du jeu
                    if(this.score_a_la_suite==contrat){
                        var monPacman=window.open( "/pacman/popup.html", "monPacman", "menubar=no, directories=no, location=no, status=no, scrollbars=no, menubar=no, width=342, height=450");
                        console.log("duree "+contrat/5*60*1000)
                        setTimeout( function(){ monPacman.close() },contrat/5*60*1000 ); //
                        this.score_a_la_suite=0;
                    }
                }
                this.correction_en_cours=false;
            }
            else{
                this.correction_en_cours=true;
                this.score_a_la_suite=0
                this.zone_score_a_la_suite.text="Sans faute à la suite: "+this.score_a_la_suite
                this.verdict.fill="#f80013";
                this.verdict.text="Mauvaise réponse !";
                game.time.events.add(1500, this.remove_verdict_mauvaise_reponse, this);
                this.attendre=true;
            }
        }
        
    },
    remove_verdict_bonne_reponse:function(){
        this.attendre=false;
        this.verdict.text="";
        this.creation_consigne();
        
        
    },
    remove_verdict_mauvaise_reponse:function(){
        this.attendre=false;
        this.verdict.text="";
        this.consigne.text="Corrige ta réponse"
        
    }
    
};