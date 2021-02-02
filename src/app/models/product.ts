export class Product {
    
    id:number;
    name:string;
    discription:string;
    price:number;
    imageurl:any;

    constructor(id, name, discription='',price = 0, imageurl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nuskyfashion.com%2Fproduct%2Fcute-panda-hoodie%2F&psig=AOvVaw1dvPG4EtGhkfUcMdtbB6He&ust=1600061372005000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCixvbb5usCFQAAAAAdAAAAABAT')
    {
            this.id=id
            this.name=name
            this.discription=discription
            this.price=price
            this.imageurl=imageurl
    }
}
