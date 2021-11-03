const btn = document.querySelectorAll('.btn');

btn.forEach(function(el){
    el.addEventListener('click', () => alert("Hello World"));
});

// hello.addEventListener('click', () =>  alert("Hello World"));