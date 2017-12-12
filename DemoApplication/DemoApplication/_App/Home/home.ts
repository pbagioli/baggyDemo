import { inject, autoinject, FrameworkConfiguration } from 'aurelia-framework';
import { RouterConfiguration, RouteConfig, Router, NavigationInstruction, Next } from 'aurelia-router';

@autoinject()
export class Home {
    public cssProperties: CssProperty[];
    public cssRules: string;
    public frogs: Frog[];
    public justifyContent: string = 'flex-start';
    public alignItems: string = 'flex-start';
    public alignOptions: any[];
    constructor(router: Router) {
        this.cssProperties = [];
       
        this.cssProperties.push(new CssProperty('justify-content',
            ['None', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']));
        this.cssProperties.push(new CssProperty('align-content',
            ['None', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']));
        this.cssProperties.push(new CssProperty('align-items',
            ['None','flex-start', 'flex-end', 'center', 'baseline', 'stretch']));
        this.cssProperties.push(new CssProperty('flex-direction',
            ['None','row', 'row-reverse', 'column', 'column-reverse']));
        this.cssProperties.push(new CssProperty('flex-wrap',
            ['None','wrap', 'nowrap', 'wrap-reverse']));
        this.updateCss();
        this.frogs = [];
    }

    public updateCss() {
       
        var temp = this.cssProperties.filter((p) => p.selectedValue !== 'None').map((p) => { return p.name + ':' + p.selectedValue + '; ' });
        this.cssRules = temp.join("");
    }

    public addFrog(src: string) {
        this.frogs.push(new Frog(src));
    }

    public removeFrog(index: number) {
        this.frogs.splice(index, 1);
    }

  
}    

export class CssProperty {
    public selectedValue: string;
    constructor(public name: string, public options: string[]) {
        this.selectedValue = options[0];
    }
  
}

export class Frog {
    constructor(public src: string) {
        
    }
    
}

