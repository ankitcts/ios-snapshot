import { action, computed, makeObservable, observable } from "mobx";
import { createURL } from "./helper";
import { v4 as uuidv4 } from 'uuid';


export class Store{

    constructor(){
        makeObservable(this,{
            userInstanceValue: observable,
            userEnteredValue: observable,
            generated: observable,
            onQRChange: action,
            value: computed,
            createUUID: action,
            QRCodeURL: computed
        });

        this.createUUID();
    }

    createUUID = ()=>{
        this.userInstanceValue = uuidv4();
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