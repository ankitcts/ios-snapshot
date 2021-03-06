import { action, computed, makeObservable, observable } from "mobx";
import { createURL, connectToServer } from "./helper";
import { v4 as uuidv4 } from 'uuid';


export class Store{

    userInstanceValue = "";
    userEnteredValue = "test";
    generated = false;
    notificationReceived = '';
    webSocketConnected =  false;

    constructor(){
        makeObservable(this,{
            userInstanceValue: observable,
            userEnteredValue: observable,
            notificationReceived: observable,
            webSocketConnected: observable,
            generated: observable,
            onQRChange: action,
            value: computed,
            createUUID: action,
            QRCodeURL: computed,
            showNotification: computed,
            onPostMessageUpdate: action,
            isEnabled: computed
        });

        this.createUUID();
    }

    createUUID = ()=>{
        this.userInstanceValue = uuidv4();
    }


    get value (){
        return this.userEnteredValue;
        
    }

    get QRCodeURL(){
        return createURL({
            instance : this.userInstanceValue, 
            userValue :  this.userEnteredValue
        }); 
    }

    get showNotification() {
        if (this.notificationReceived) {
            if(!this.interval) {
                this.interval = setTimeout(() => {
                    this.notificationReceived = ''
                }, 2000)
            } else {
                clearTimeout(this.interval);
                this.interval = null;
            }
            
            return true;
        }

        return false;
    }

    get isEnabled() {
        return this.webSocketConnected;
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

    onPostMessageUpdate = (message) => {
        this.notificationReceived = JSON.parse(message.data)
    }
    
    onSubscription = async() => {
        const socket = await connectToServer();
        this.webSocketConnected = true;
        socket.onmessage = this.onPostMessageUpdate
    }

}