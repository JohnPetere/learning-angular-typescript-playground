import { Component } from "@angular/core";

@Component({
 selector: 'app-hello-world',
 // I think this is also supposed to be link to a html file
 template: '<h1> {{title}} </h1>',
 // Styles is supposed to be linked to a URL file
 styles: ['h1{backgroud-color: blue;}']
})

export class HelloWorld {
    title = 'hello World JOHN'
}