function scrollToBottom() {
    // Select the body or HTML element.
    $('html, body').animate({
        scrollTop: $(document).height() - $(window).height()
    }, 1000);
}
