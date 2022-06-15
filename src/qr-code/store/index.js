import { action, computed, makeObservable, observable } from "mobx";
import { createURL } from "./helper";


export class Store{

    constructor(){
        makeObservable(this,{
            userInstanceValue: observable,
            userEnteredValue: observable,
            generated: observable,
            onQRChange: action,
            value: computed,
            QRCodeURL: computed
        })
    }

    userInstanceValue = "";
    userEnteredValue = "test";
    generated = false;


    get value (){
        return this.userEnteredValue;
        
    }

    get QRCodeURL(){
        return createURL({
            instance : this.userInstanceValue, 
            userValue :  this.userEnteredValue
        }); 
    }

    onQRChange = (value) => {
        this.userEnteredValue = value;
    }

    onGenerate = () => {
        this.generated =  true;
    }

    onReset(){
        this.generated =  false;
    }

}