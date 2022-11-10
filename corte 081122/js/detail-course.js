$(document).ready(function () {

    const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });

    console.log(params.course);
    var idParam = params.course;
    initLayout();
    function initLayout(){
        var courseDetailHtml = "";
        var courseAccordionHtml = "";
        var courseTabsHtml = "";
        var rAside = "";
        
        $.getJSON('./js/ficha-curso.json',function(jn){

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

            //document.getElementById('course-image-detail').innerHTML = courseDetailHtml;
            //document.getElementById('accordion').innerHTML = courseAccordionHtml;
           // document.getElementById('tabsContent').innerHTML = courseTabsHtml;
            document.getElementById('faqaside').innerHTML = rAside;
        });    
    }


    function buildCourseDetail(jn){
        //en id course-detail

        var courseDetail = `<div class="col-12">
                <div id="ficha-curso">
                    <div class="row mb-4 mt-5 pt-2">
                        <div class="col-12">
                            <h2>${jn.nombre}</h2>
                        </div>
                    </div>
                    <div class="row" id="course-detail">
                        <div class="col-sm-3">
                           
                            <p class="font-weight-light">Instructor</p>
                            <p class="font-weight-bold">${jn.instructor}</p>
                        </div>
                        <div class="col-sm-3">
                            <p class="font-weight-light">Categoria</p>
                            <p class="font-weight-bold">${jn.categoria}</p>
                        </div>
                        <div class="col-sm-3">
                            <p class="font-weight-light">Area</p>
                            <p class="font-weight-bold">${jn.area}</p>
                        </div>
                        <div class="col-sm-3">
                            <p class="font-weight-light">Programa</p>
                            <p class="font-weight-bold">${jn.calificacion}</p>
                            
                        </div>
                    </div>

                </div>

                <img src="./resources/prueba.png" id="course-detail-img" class="img-fluid" alt="Responsive image">
                <a class="btn btn-gold" href="#" role="button">Empieza ahora</a>
            </div>`;

        return courseDetail;
    }

    function buildAcordion(jn){
        //en id accordion

        var accordion = `<div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">VISIÓN GENERAL</a>
                        </div>

                        <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                                ${jn.requisitos}
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">TEMARIO</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                                ${jn.caracterizticas}
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead3">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                            aria-expanded="true" aria-controls="faq3">INSTRUCTOR</a>
                        </div>

                        <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div class="card-body">
                               ${jn.audencia}
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">REQUISITOS</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                                ${jn.caracterizticas}
                            </div>
                        </div>
                    </div>                    `;

        return accordion;
    }

    function buildTabs(jn){
        //en id tabsContent
        var tabs = `<div id="home1" class="tab-pane fade">${jn.vision} </div>
                    <div id="profile1" class="tab-pane fade active show">${jn.temario}</div>
                    <div id="messages1" class="tab-pane fade">${jn.instructorDetalle}</div>`;
        return tabs;

    }

    function buildRAside(jn){

        var rAside = `<div class="card">
                        <div class="card-header" id="faqhead4">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                            aria-expanded="true" aria-controls="faq3">Proceso de registro</a>
                        </div>

                        <div id="faq4"  aria-labelledby="faqhead4" data-parent="#faqaside">
                            <div class="card-body">
                                ${jn.registro}
                            </div>
                            
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="faqhead6">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq6"
                            aria-expanded="true" aria-controls="faq6">Quizas te interese</a>
                        </div>

                        <div id="faq6"  aria-labelledby="faqhead6" data-parent="#faqaside">
                            <div class="card-body">
                                <div class="miniature">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/buro-de-credito.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Buró de crédito</p>
                                        <p class="text-green">4 horas</p>
                                    </div>
                                </div>
                                <div class="miniature mt-3 mb-2">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/finanzas-personales.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Finanzas Personales</p>
                                        <p class="text-green">8 horas</p>
                                    </div>
                                </div>
                                <div class="miniature mt-3 mb-2">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/inversion-de-ahorro.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Cetesdirecto, mecanimos de ahorro y alternativas de inversion</p>
                                        <p class="text-green">4 horas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

        return rAside;
    }

     function buildDetail(item){

        var detail = `<div class="card">
                        <div class="card-header" id="faqhead4">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                            aria-expanded="true" aria-controls="faq3">Proceso de registro</a>
                        </div>

                        <div id="faq4" class="collapse" aria-labelledby="faqhead4" data-parent="#faqaside">
                            <div class="card-body">
                                Proceso de registro
                            </div>
                            
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="faqhead5">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5"
                            aria-expanded="true" aria-controls="faq5">Nuestros Cursos</a>
                        </div>

                        <div id="faq5" class="collapse" aria-labelledby="faqhead5" data-parent="#faqaside">
                            <div class="card-body">
                                <div>
                                    <ul>
                                        <li class="font-weight-bold">Social</li>
                                        <li>Educacion Financiera</li>
                                        <li class="font-weight-bold">Empresarial</li>
                                        <li>Creación de negocios</li>
                                        <li>Fortalecimiento empresarial</li>
                                        <li>Consolidación Empresarial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="faqhead6">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq6"
                            aria-expanded="true" aria-controls="faq6">Quizas te interese</a>
                        </div>

                        <div id="faq6" class="collapse" aria-labelledby="faqhead6" data-parent="#faqaside">
                            <div class="card-body">
                                <div class="miniature">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/buro-de-credito.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Buró de crédito</p>
                                        <p class="text-green">4 horas</p>
                                    </div>
                                </div>
                                <div class="miniature mt-3 mb-2">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/finanzas-personales.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Finanzas Personales</p>
                                        <p class="text-green">8 horas</p>
                                    </div>
                                </div>
                                <div class="miniature mt-3 mb-2">
                                    <img style="margin-right:5px" class="float-left" src="./resources/miniatura/inversion-de-ahorro.png" onerror="this.onerror=null; this.src='./resources/maps/iconostablaestados/70.png'" alt="" width="100" height="100">
                                    <div>
                                        <p>Cetesdirecto, mecanimos de ahorro y alternativas de inversion</p>
                                        <p class="text-green">4 horas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

        return detail;
    }


});