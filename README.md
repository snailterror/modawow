# jQuery Modawow
### Super simple modal 

## Use it !

    $('.modawow').modawow();

#### With HTML 

    <!-- Your overlay -->
    <div id="modawow_overlay"></div>
    
    <!-- Your modal -->
    <div class="modawow" data-modalName="simpleModal">
        <div class="close_modawow">X</div>
        <h3>Modawow #1</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>

    <!-- Your button -->
    <button data-modalTarget="simpleModal" class="modawow_active">simpleModal</button>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script>$('.modawow').modawow();</script>

### Options

    {
        metas :{
            target    : 'data-modalTarget',
            modalName : 'data-modalName'
        },
        overlay       : $('#modawow_overlay'),
        closeModal    : $('.close_modawow'),
        activeModal   : $('.modawow_active'),
        target        : this
    }
    
#### You can pass your options 

    $('.modawow').modawow({
        metas :{
            target    : 'data-modalTarget',
            modalName : 'data-modalName'
        },
        overlay       : $('#modawow_overlay'),
        closeModal    : $('.close_modawow'),
        activeModal   : $('.modawow_active'),
        target        : this
    });