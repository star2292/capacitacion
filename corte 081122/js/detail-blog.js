$(document).ready(function () {

    const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });

    console.log(params.articulo);
    var idParam = params.articulo;
    initLayout();
    function initLayout(){
        
        $.getJSON('./js/blog.json',function(jn){

            $.each(jn, function(i, item) {
                if(item.id === idParam){
                    console.log("en loop");
                    console.log(idParam);
                    courseDetailHtml = buildCourseDetail(item);
                    courseAccordionHtml = buildAcordion(item);
                    courseTabsHtml = buildTabs(item);
                    rAside = buildRAside(item);
                }
            });
        });    
    }


});