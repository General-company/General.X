/*=========================================
    General X
    script.js
=========================================*/


// تغيير لون شريط التنقل عند التمرير

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#050505";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        header.style.background = "rgba(0,0,0,.8)";
        header.style.boxShadow = "none";

    }

});



// ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



// التمرير السلس

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});



// تأثير بسيط عند مرور المؤشر على البطاقات

const cards = document.querySelectorAll(".card,.project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});



// تأثير الكتابة على عنوان الصفحة

const title = document.querySelector(".hero h1");

const text = title.innerText;

title.innerText = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 120);

    }

}

window.onload = typeWriter;



// تأثير زر العودة للأعلى

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#D4AF37";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



// رسالة عند إرسال النموذج

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("شكراً لتواصلك معنا، تم استلام رسالتك بنجاح.");

form.reset();

});

}
