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
  };
};

class Main{
  images = [
    "../assets/imagens/image-product-1.jpg", 
    "../assets/imagens/image-product-2.jpg", 
    "../assets/imagens/image-product-3.jpg", 
    "../assets/imagens/image-product-4.jpg"
  ];

  imgProd = document.getElementById("img-prod");
  arrowRight = document.getElementById("arrow-right")?.addEventListener("click", this.nextImage.bind(this));
  arrowLeft = document.getElementById("arrow-left")?.addEventListener("click", this.prevImage.bind(this));
  num:number = 0;

  handlerImage(numberImage:number){
    this.imgProd!.style.backgroundImage = `url(${this.images[numberImage]})`;
    this.imgProd!.style.backgroundPosition = "center 0";
  }

  nextImage(){
    if(this.num < 3){
      this.num++;
      this.handlerImage(this.num);
    }
    else{
      this.num = 0;
      this.handlerImage(this.num);
    }
  }
  
  prevImage(){
    if(this.num === 0){
      this.num = 3;
      this.handlerImage(this.num);
    }
    else{
      this.num--;
      this.handlerImage(this.num);
    }
  }
}

class App{
  constructor(){

  };

  static init(){
    const header = new Header();
    const main = new Main();
  };
}

App.init();