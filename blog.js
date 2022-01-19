class Blog{
    constructor(node, adat){
        this.node=node;
        this.adat= adat;

        this.idElem=this.node.children("#id");
        this.targyElem=this.node.children(".targy");
        this.leirasElem=this.node.children(".leiras");
        this.datumElem=this.node.children ("#datum");
        this.userElem=this.node.children("#user_id");
        this.likeElem=this.node.children("#like");
        console.log(this.datumElem);
        this.setAdat(this.adat);
          
    }

 
    setAdat(adat){
        // console.log(this.adat);
        this.idElem.html(adat.id);
        this.targyElem.html(adat.targy);
        this.leirasElem.html(adat.leiras);
        this.datumElem.html(adat.datum);
        this.userElem.html(adat.user_id);
        this.likeElem.html(adat.like);
        
    }

}
class BlogAdmin extends Blog {
    constructor(node, adat) {
        super(node, adat)
    
        this.blogTorles = this.node.children(".torol").children("button");
        this.blogModosit = this.node.children(".modosit").children("button");
        this.setAdat(this.adat);
        this.blogTorles.on("click ", () => {
            this.torolTrigger("torol");

        });
        this.blogModosit.on("click ", () => {
            this.modositTrigger("modosit");

        });
    }

torolTrigger() {

    let esemeny = new CustomEvent("torol", {

        detail: this.adat, //ezzel adatokat tudok átadni
    });
    window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
    //Az eseményt majd a script.js-ben el tudom kapni.
}
modositTrigger() {

    let esemeny = new CustomEvent("modosit", {

        detail: this.adat, //ezzel adatokat tudok átadni
    });
    window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
    //Az eseményt majd a script.js-ben el tudom kapni.
}
}