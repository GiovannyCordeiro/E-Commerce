import "../public/styles/style.scss";

class Header{
  openMenu = document.getElementById("menu-mobile")?.addEventListener("click", this.openMenuMobile.bind(this));
  closeMenu = document.getElementById("close-menu")?.addEventListener("click", this.closeMenuMobile.bind(this));
  iconCarShop = document.getElementById("icon-car-shop")?.addEventListener("click", this.openShoppingCard.bind(this));
  linksMobile = document.getElementById("wrapper-links");
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

  //mobile handler
  imgProdListener = document.getElementById("img-prod")?.addEventListener("click", this.openMaxProd.bind(this));
  arrowRight = document.getElementById("arrow-right")?.addEventListener("click", this.nextImage.bind(this));
  arrowLeft = document.getElementById("arrow-left")?.addEventListener("click", this.prevImage.bind(this));
  numMobileHandler:number = 0;
  
  //handler product main 
  imgProduct = document.getElementById("img-prod");
  
  numberHandlerMain = 0;

  thumbsMain = [
    document.getElementById("thumb-main-1"),
    document.getElementById("thumb-main-2"),
    document.getElementById("thumb-main-3"),
    document.getElementById("thumb-main-4")
  ];

  thumbsMainListenners = this.thumbsMain.map((element, index) => {
    element?.addEventListener("click", () => {
      this.toggleImgMain(index);
    })
  })
  
  //Maximized Desktop Images
  maximizedProduct = document.getElementById("maximized-product");

  mainImgMax = document.getElementById("main-img-max");
  
  thumbOneMax = document.getElementById("thumb-max-1")?.addEventListener("click", () => {this.modifImgMainMax(0)});
  thumbTwoMax = document.getElementById("thumb-max-2")?.addEventListener("click", () => {this.modifImgMainMax(1)});
  thumbThreeMax = document.getElementById("thumb-max-3")?.addEventListener("click", () => {this.modifImgMainMax(2)});
  thumbFourMax = document.getElementById("thumb-max-4")?.addEventListener("click", () => {this.modifImgMainMax(3)});

  arrowLeftMax = document.getElementById("arrow-left-max")?.addEventListener("click", () => {this.imgMainBaseArrow("Left")});
  arrowRightMax = document.getElementById("arrow-right-max")?.addEventListener("click", () => {this.imgMainBaseArrow("Right")});

  closeMaximizedProduct = document.getElementById("close-window-maxprod")?.addEventListener("click", this.closeMaxProd.bind(this));

  numImgMainMax = 0;
  
  //Counter Items
  counterDOM = document.getElementById("counter");
  iconPlus = document.getElementById("icon-plus")?.addEventListener("click", this.incrementQuantItem.bind(this));
  iconMinus = document.getElementById("icon-minus")?.addEventListener("click", this.decrementQuantItem.bind(this));
  counter:number = 0;

  handlerImage(numberImage:number){
    this.imgProduct!.style.backgroundImage = `url(${this.images[numberImage]})`;
    this.imgProduct!.style.backgroundPosition = "center 0";
  }

  nextImage(){
    if(this.numMobileHandler < 3){
      this.numMobileHandler++;
      this.handlerImage(this.numMobileHandler);
    }
    else{
      this.numMobileHandler = 0;
      this.handlerImage(this.numMobileHandler);
    }
  }
  
  prevImage(){
    if(this.numMobileHandler === 0){
      this.numMobileHandler = 3;
      this.handlerImage(this.numMobileHandler);
    }
    else{
      this.numMobileHandler--;
      this.handlerImage(this.numMobileHandler);
    }
  }

  incrementQuantItem(){
    this.counter++;
    this.counterDOM!.innerText = `${this.counter}`;
  }

  decrementQuantItem(){
    this.counter--;
    if(this.counter < 0){
      this.counter = 0
    }
    this.counterDOM!.innerText = `${this.counter}`;
  }

  openMaxProd(){
    this.maximizedProduct?.classList.add("active");
  }

  closeMaxProd(){
    this.maximizedProduct?.classList.remove("active");
  }

  modifImgMainMax(number: number){
    this.numImgMainMax = number;
    this.mainImgMax!.style.backgroundImage = `url(${this.images[number]})`;
    this.mainImgMax!.style.backgroundSize = "cover";
  }

  imgMainBaseArrow(position:String){
    if(position === "Left"){
      if(this.numImgMainMax === 0){
        this.numImgMainMax = 3;
        this.handlerImageBaseArrow(this.numImgMainMax)
      }
      else{
        this.numImgMainMax--;
        this.handlerImageBaseArrow(this.numImgMainMax);
      }
    }
    else{
      if(this.numImgMainMax >= 3){
        this.handlerImageBaseArrow(this.numImgMainMax = 0)
      }
      else{
        this.numImgMainMax++
        this.handlerImageBaseArrow(this.numImgMainMax);
      }
    }
  }

  handlerImageBaseArrow(num:number){
    this.mainImgMax!.style.backgroundImage = `url(${this.images[num]})`
  }

  toggleImgMain(num:number){
    for(let i = 0; i < this.thumbsMain.length; i++){
      this.thumbsMain[i]?.classList.remove("active");
    }
    this.handlerImage(num);
    this.thumbsMain[num]?.classList.add("active");
  }
}
class App{
  static init(){
    const header = new Header();
    const main = new Main();
  };
}

App.init();