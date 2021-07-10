let header = document.getElementById('header');
let links = document.querySelectorAll('.navbar ul li a ');
let logo = document.getElementById('logo');
let socialMedia = document.querySelectorAll('.fa');

let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('javascript');
let java = document.getElementById('java');
let done = 0;


function falseTotrue(boolean) {
    boolean = 1;
}

function getSkills(done) {

    if(done === 1) {
        return;
    }

    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    if (scrollY >= 839.4500122070312 && done === 0) {
        let interval1 = setInterval(function () {
            i += 1;
            html.textContent = i + '%';
            if (i == 80) clearInterval(interval1);          

        }, 10)

        let interval2 = setInterval(function () {
            j += 1;
            css.textContent = j + '%'
           
            if (j == 60) clearInterval(interval2);
            
        }, 10)

        let interval3 = setInterval(function () {
            k += 1;
            js.textContent = k + '%';
            if (k == 70) clearInterval(interval3);
            
        })

        let interval4 = setInterval(function () {
            l += 1;
            java.textContent = l + '%';
            if (l == 60) clearInterval(interval4);
           

        })
    }
    
}

window.addEventListener('scroll', function (e) {
   
    getSkills(done);
    done = 1;

    if (this.scrollY > 0) {
        header.classList.add('header-background');
        logo.classList.add('header-text');

        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('header-text');
        }

        for (let j = 0; j < socialMedia.length; j++) {
            socialMedia[j].classList.add('header-text');
        }

    }
    if (this.scrollY == 0 && header.classList.contains('header-background')) {
        header.classList.remove('header-background');
        logo.classList.remove('header-text');

        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('header-text');
        }

        for (let j = 0; j < socialMedia.length; j++) {
            socialMedia[j].classList.remove('header-text');
        }

    }

});

document.addEventListener("DOMContentLoaded", function() {
    let listLinks = document.querySelectorAll('.navbar li a');
    listLinks.forEach(function(link) {
        link.addEventListener('click', () => {
            let href = link.getAttribute('href');
            if(href === "#home") {
                console.log(href);
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('#home').offsetTop
                })
            }
            if(href === "#about") {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('#home').offsetTop
                })
            }
            if(href === "#skill") {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('#skill').offsetTop
                })
            }
            if(href === "#contact") {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('#contact').offsetTop
                })
            }
        })
    })
});

