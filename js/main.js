window.onload = function () {


    // document.querySelector('.btn-close').addEventListener('click', function () {
    //     this.closest('.menu_mobile').classList.remove('active');
    //     document.querySelector('body').style.overflow = 'initial';
    // })

    // document.querySelector('.btn-open').addEventListener('click', function () {
    //     document.querySelector('.menu_mobile').classList.add('active');
    //     document.querySelector('body').style.overflow = 'hidden';

    // })

    // for (const item of document.querySelectorAll('.menu_mobile .menu_link')) {
    //     item.addEventListener('click', function () {
    //         this.closest('.menu_mobile').classList.remove('active');
    //         document.querySelector('body').style.overflow = 'initial';
    //     })
    // }

    // for (const item of document.querySelectorAll('.video_block')) {

    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         Fancybox.show(
    //             [
    //                 {
    //                     src: this.getAttribute("href"),
    //                     type: "iframe",
    //                 },
    //             ],
    //         );
    //     })
    // }

    // for (const item of document.querySelectorAll('a.modal')) {

    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         Fancybox.show(
    //             [
    //                 {
    //                     src: '#modal',
    //                     type: "inline",
    //                 },
    //             ],
    //         );
    //     })
    // }

    // for (const item of document.querySelectorAll('.btn-toggle')) {

    //     item.addEventListener('click', function () {
    //         let container = this.closest('.row').querySelector('.answer');

    //         if (container.classList.contains('active')) {
    //             container.classList.remove('active');
    //             this.classList.remove('active');
    //             container.style.maxHeight = 0;
    //         } else {
    //             container.classList.add('active');
    //             this.classList.add('active');
    //             container.style.maxHeight = container.scrollHeight + 'px';
    //         }

    //     })
    // }

    MenuScrollAnchors('.anchor', '.menu_link')

}
window.addEventListener('scroll', function () {
    window.pageYOffset > 10 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});


