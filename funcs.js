 const fadeTarget = document.querySelectorAll('.fadeTarget');

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.classList.add('fadeAnim');
                }
                else {
                    entry.target.classList.add('none');
                }
            })
        })
        fadeTarget.forEach(image => {
            observer.observe(image)
        })
