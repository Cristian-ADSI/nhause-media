(function () {
    'use strict';

    function init() {
        const faqBtns = document.querySelectorAll(".faq__btn");
        const answers = document.querySelectorAll(".faq__answer")

        faqBtns.forEach(faqBtn => {
            faqBtn.addEventListener("click", () => {
                const clickAnswer = faqBtn.parentElement.nextElementSibling
                checkAnwers(answers, clickAnswer)
            })
        });

        function checkAnwers(answers, clickAnswer) {


            /*
                Si contiene toggle quiere decir que fue
                la ultima y que no hay otra respuesta visible
                se procede simplementa a ocultarla ya que es
                la unica visible
            */
            if (clickAnswer.classList.contains("toggle")) {
                clickAnswer.classList.remove("toggle")
            } else {
                /*
                Si no tiene  toggle quiere decir que posiblemente
                alguna otra pregunta este abierta procedemos a cerrarla
                */
                answers.forEach(answer => {
                    answer.classList.remove("toggle")
                })
                // Finalmente hacemos visible la pregunta seleccionada
                clickAnswer.classList.add("toggle")

            }





        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
