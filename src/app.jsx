import React from 'react';
import {SignIn} from "./qr-code/index.jsx";
import {Store} from "./qr-code/store/index.js";
import { observer } from "mobx-react" 
import { configure } from "mobx"

configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true
})


@observer
export class App extends React.Component{
    constructor(props){
        super(props);
        console.log('Reinitiagting ')
        this.instance = new Store();
    }

    render(){
        return(
            <section>
                <SignIn value={this.instance.value}
                 onSet={this.instance.onGenerate}
                 onChange={this.instance.onQRChange}
                 onReset={this.instance.onReset}
                 qrCode={this.instance.QRCodeURL}
                 available={this.instance.generated}/>
            </section>
        )
    }
}