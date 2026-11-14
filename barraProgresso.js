(() => {
    const barraProgresso = document.getElementById("barraProg");
    let aguardando = false;

    function atualizaProg(){
        const comeco = document.documentElement;
        const tudo = comeco.scrollHeight - comeco.clientHeight;
        const proporcao = tudo > 0 ? window.scrollY / tudo : 0;

        barraProgresso.style.transform = `scaleX(${Math.min(Math.max(proporcao, 0), 1)})`;
        aguardando = false;
    }

    function qndRola(){
        if (!aguardando){
            aguardando = true;

            requestAnimationFrame(atualizaProg);
        }
    }

    window.addEventListener("scroll", qndRola, { passive: true });
    window.addEventListener("resize", qndRola);
    
    atualizaProg();
})();