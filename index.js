angular
    .module('backToTop', [])
    .directive('backToTop', () => {
        return {
            restrict: 'E',
            replace: true,
            link: (scope, element, attrs) => {
                $(window).scroll(() => {
                    $(window).scrollTop() <= 0
                        ? $(element).fadeOut()
                        : $(element).fadeIn();
                });

                $(element).on('click', () => $('html, body').animate({ scrollTop: 0 }, 'slow'));

            },
            template: `
            <style>
                .back-to-top {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1;
                    width: 50px;
                    height: 50px;
                    background: #DDD;
                    opacity: 0.5;
                    display: none;
                }
                .back-to-top:hover {
                    opacity: 1;
                    cursor: pointer;
                }

                .back-to-top i {
                    font-size: 25px;
                    padding: 12px;
                    color: #FFF;
                }
            </style>
            <div class="back-to-top">
                <i class="fa fa-chevron-up"></i>
            </div>`,
        }
    });
