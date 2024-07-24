document.addEventListener("DOMContentLoaded", function() {

    const questionItems = document.querySelectorAll(".questionItem");

    questionItems.forEach(item => {
        const chevronRight = item.querySelector('.chevronRight');
        const answer = item.querySelector('.answers');
        const question = item.querySelector('.question')

        chevronRight.addEventListener("click", () => {
            // Cerrar todos los demás items
            questionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherChevron = otherItem.querySelector('.chevronRight');
                    const otherAnswer = otherItem.querySelector('.answers');
                    const otherQuestion = otherItem.querySelector('.question')
                    otherAnswer.classList.remove("active");
                    otherChevron.style.transform = "rotate(0deg)";
                    otherQuestion.style.color = "#fff"
                }
            });

            // Alternar el estado del item actual
            answer.classList.toggle("active");
            if (answer.classList.contains("active")) {
                chevronRight.style.transform = "rotate(90deg)";
                question.style.color = "#FFBD39"
            } else {
                chevronRight.style.transform = "rotate(0deg)";
                   question.style.color = "#fff"
            }
        });
    });
});