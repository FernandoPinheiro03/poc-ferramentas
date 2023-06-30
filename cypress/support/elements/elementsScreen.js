class elementsScreen {

    BTN_ENTER = () => { return '.show-icon-tablet > .header > .authorization-link > a' }
    BTN_ALLOW_COOKIE = () => { return '#btn-cookie-allow' }
    FIELD_EMAIL = () => { return '.row > .block > .block-content > #login-form > .fieldset > .email > .control > #email' }
    FIELD_PASSWORD = () => { return '.row > .block > .block-content > #login-form > .fieldset > .password > .control > #pass' }
    BTN_ENTER_ON_LOGIN = () => { return 'fieldset > .actions-toolbar > div.primary > #send2' }
    PRINCIPAL_BANNER = () => { return '.owl-carousel-custom-1 > .owl-stage-outer > .owl-stage > .active > .banner-item > a > .banner-image > .owl-lazy' }
    FIRST_PRODUCT = () => { return ':nth-child(1) > .product-item-info > div.photo > .product > .product-image-container > .product-image-wrapper > .product-image-photo' }
    BTN_BUY = () => { return '#product-addtocart-button' }
    DROPDOWN_VOLTAGE = () => { return '#attribute632' }
    BTN_SEE_CARD = () => { return '#top-cart-btn-checkout' }
    BTN_FINISH_BUY = () => { return '.checkout-methods-items > .item > .action > span' }
    OPTION_PIX = () => { return '#pagarme_pix' }
    INPUT_SEARCH = () => { return '#search' }
    SOME_PRODUCT_ON_HOME = () => { return '.owl-carousel-products-category_products > .owl-stage-outer > .owl-stage > :nth-child(20) > .product-item > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo' }
    BTN_CATEGORY_PAGE= () => { return 'div > ul > :nth-child(4) > .level-top' }
    

}

export default elementsScreen