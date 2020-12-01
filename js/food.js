class Food{
    constructor(){
        this.foodStock = 0
        this.lastFed = null
        this.money = 0;
        this.feed = createButton("Feed Dog")
        this.refill = createButton("Refill food")
        this.play = createButton("Play")
        this.buy = createButton("Buy food")
        this.bed = createButton("Bed")
        this.bath = createButton("Bath")
    this.ml = loadImage("images/Milk.png")
    this.feed.position(10,20)
        this.refill.position(100,20)
        this.play.position(190,20)
        this.buy.position(300,20)
        this.bed.position(350,20)
        this.bath.position(400,20);
    

    }        
    
    readMoney(){
      var mRef = db.ref('Money')
      mRef.on("value",(data)=>{
        this.money = data.val();
        console.log(this.money);
      })
    }
    writeMoney(m){
      if(m<=0){
        m=0;
      }else{
        m=m-1;
      }
      db.ref('/').update({
        Money : m
      })
     
    }
    readStock(){
        var stockRef = db.ref('Food')
        stockRef.on("value",(data)=>{
            this.foodStock = data.val();
        })
      
      }

    writeStock(x){
      
      if(x<=0){
        x=0;
      }else{
        x=x-1;
      }
      
        db.ref('/').update({
          Food : x 
        })
      }

      refillStock(){
          db.ref('/').update({
              Food : 30
          })
      }

}