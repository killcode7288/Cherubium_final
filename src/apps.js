const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('shows');
        }else {
            entry.target.classList.remove('shows');
        }

    });
});

const hiddenElementss =  document.querySelectorAll('.hidee');
hiddenElementss.forEach((el) => observers.observe(el));


//fegg
const observerss = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showss');
        }else {
            entry.target.classList.remove('showss');
        }

    });
});

const hiddenElementsss =  document.querySelectorAll('.hideee');
hiddenElementsss.forEach((el) => observerss.observe(el));

//wefwefwefw
const observersss = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showsss');
        }else {
            entry.target.classList.remove('showsss');
        }

    });
});

const hiddenElementssss =  document.querySelectorAll('.hideeee');
hiddenElementssss.forEach((el) => observersss.observe(el));