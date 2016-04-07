(function( $ ) {

    /**
     * Modal functions, you can change options when you call modawow
     * ex : $('.modal').modawow( { overlay: $('#other_overlay') } )
     * @param options
     */
    $.fn.modawow = function(options) {

        /* Default setting */
        var defaultSettings = {
            metas :{
                target    : 'data-modalTarget',
                modalName : 'data-modalName'
            },
            overlay       : $('#modawow_overlay'),
            closeModal    : $('.close_modawow'),
            activeModal   : $('.modawow_active'),
            target        : this
        };

        /* Final settings */
        var _State =
            $.extend( {}, defaultSettings, options );

        /* Overlay click */
        _State.overlay
            .on('click', closeModal);

        /* ActiveDom click */
        _State.activeModal
            .on('click', openModal);

        /* closeModal click */
        _State.closeModal
            .on('click', closeModal);

        /**
         * Open target modal
         */
        function openModal(){

            var targetModalName =
                $(this).attr(_State.metas.target);

            _State.target.each(function(){

                if( $(this).attr(_State.metas.modalName) === targetModalName ){
                    $(this).addClass('active');
                    _State.overlay.addClass('active');
                }

            });

            muteBody('INACTIVE');

        }

        /**
         * Close all modal
         */
        function closeModal(){

            _State.overlay.removeClass('active');

            _State.target.each(function(){
                $(this).removeClass('active');
            });

            muteBody('ACTIVE');
        }

        /**
         * Mute Body, disabled scroll
         * @param action
         */
        function muteBody(action){

            typeof action !== 'string'
                ? console.error('Action must be String')
                : null;

            var $body = $('body');

            switch (action){

                case 'ACTIVE' :
                    $body.css({
                        "width" : "auto",
                        "overflow" : ""
                    });
                    break;

                case 'INACTIVE' :

                    $body.css({
                        "width" : $body.outerWidth() + 'px',
                        "overflow" : "hidden"
                    });

                    break;

            }

        }

    };

}( jQuery ));