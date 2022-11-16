import "../public/styles/style.scss";

class Header{
  private openMenu = document.getElementById("menu-mobile")?.addEventListener("click", this.openMenuMobile.bind(this));
  private closeMenu = document.getElementById("close-menu")?.addEventListener("click", this.closeMenuMobile.bind(this));
  private linksMobile = document.getElementById("wrapper-links");

  openMenuMobile(){
    this.linksMobile!.style.display = "block"
  };

  closeMenuMobile(){
    this.linksMobile!.style.display = "none"
  };
};

class App{
  constructor(){

  };

  static init(){
    const header = new Header();
  };
}

App.init();