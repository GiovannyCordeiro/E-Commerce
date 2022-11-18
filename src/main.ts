import "../public/styles/style.scss";

class Header{
  openMenu = document.getElementById("menu-mobile")?.addEventListener("click", this.openMenuMobile.bind(this));
  closeMenu = document.getElementById("close-menu")?.addEventListener("click", this.closeMenuMobile.bind(this));
  linksMobile = document.getElementById("wrapper-links");
  iconCarShop = document.getElementById("icon-car-shop")?.addEventListener("click", this.openShoppingCard.bind(this));
  shoppingCard = document.getElementById("shopping-card");

  openMenuMobile(){
    this.linksMobile!.classList.add("active");
  };

  closeMenuMobile(){
    this.linksMobile!.classList.remove("active");
  };

  openShoppingCard(){
    const stateShoppingCard = this.shoppingCard?.classList;
    stateShoppingCard?.toggle("active")
  }
};

class App{
  constructor(){

  };

  static init(){
    const header = new Header();
  };
}

App.init();