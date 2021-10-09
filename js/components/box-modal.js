function Box_modal() {
  const $ = document.querySelector.bind(document);
  $(".navbar-toggler").onclick = function () {
    $(".navbar-mobile").classList.toggle("open");
    $(".backdrop").classList.toggle("toggle");
    $(".navbar-toggler").classList.toggle("open");
    $(".backdrop").onclick = function () {
      $(".navbar-mobile").classList.toggle("open");
      $(".backdrop").classList.toggle("toggle");
      $(".navbar-toggler").classList.toggle("open");
    };
  };
}

export default Box_modal;
