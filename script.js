$(function () {
    const adatok = [];
    let apivegpont = ' http://localhost:3000/post';
    const ajax = new MyAjax();
    ajax.getAjax(apivegpont, adatok, kiir)

$("#blogkereso").on("keyup", function(){
    let blog= $(this).val();
    let blogtalalat= apivegpont + "?q=" + blog;
    console.log(blogtalalat);
    ajax.getAjax(blogtalalat, adatok, kiir)
});
$(window).on('torol', (event) => {
    
    //aktuális termék adatait
    console.log(event.detail);
    MyAjax.deleteAjax(apivegpont, event.detail.id)
  })
  $(window).on('modosit', (event) => {
    //itt hívjuk meg a kosarat és belepakoljuk a kosár tömbbe az
    //aktuális termék adatait
    console.log(event.detail);
    console.log("Módosítás");
  })


    function kiir(adatok) {
        // console.log(adatok);
        const szuloElem = $(".adatok");
        const sablonElem = $(".sablonhoz .post");
        szuloElem.empty();
        sablonElem.show();
        adatok.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new Blog(node, elem);
        });

        sablonElem.hide();
    }
    });

