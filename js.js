window.onload = function(){
    const parallax = document.querySelector('.parralax'); 
    
    if(parallax){
        const content = document.querySelector('.parralax__container'); 
        const clouds = document.querySelector('.images-parralax__clouds'); 
        const mountains = document.querySelector('.images-parralax__mountains'); 
        const humans = document.querySelector('.images-parralax__human');  

        //Коэффицэнты 
        const forClouds = 40; 
        const forMountains = 20; 
        const forHuman = 10;   

        //Скорость анимации 
        const speed = 0.05;  

        //Обьявление переменных 
        let positionX = 0, positionY = 0; 
        let coordXprocent = 0, coordYprocent = 0; 
         
        function setMouseParalaxStyle(params){
            const distX = coordXprocent - positionX; 
            const distY = coordYprocent - positionY; 

            positionX = positionX + (distX * speed); 
            positionY = positionX + (distY * speed); 

            // Передаем стили 
            clouds.style.cssText = `transform : translate(${positionX / forClouds}%, ${positionY / forClouds}%)`; 
            mountains.style.cssText = `transform : translate(${positionX / forMountains}%, ${positionY / forMountains}%)`;  
            humans.style.cssText = `transform : translate(${positionX / forHuman}%, ${positionY / forHuman}%)`;   

            requestAnimationFrame(setMouseParalaxStyle); 

        } 
        setMouseParalaxStyle(); 

        parallax.addEventListener("mousemove", function(e){
            // Получение ширины и высоты блока 
            const parallaxWidth = parallax.offsetWidth; 
            const parallaxHeight = parallax.offsetWidth; 

            // Ноль по середине 
            const coordX = e.pageX - parallaxWidth / 2 ; 
            const coordY = e.pageY - parallaxHeight / 2 ; 

            // Получаем проценты 
            coordXprocent = coordX / parallaxWidth * 100;  
            coordYprocent = coordY / parallaxHeight * 100; 
        });
    }

} 