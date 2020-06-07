import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as $ from 'jquery';
// import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-header-component',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    public pageName = 'Job';
    constructor(public router: Router) {
    }

    redirectToHome() {
        this.router.navigateByUrl('dashboard/home');
    }
    redirectToAbout() {
        this.router.navigateByUrl('dashboard/about');
    }
    reditectToGraph(){
        this.router.navigateByUrl('dashboard/graph1')
    }
    reditectToGraph8(){
        this.router.navigateByUrl('dashboard/graph2')
    }
    redirectToDevicelist(){
        this.router.navigateByUrl('dashboard/devicelists')
    }
    logMeOut(){
        this.router.navigateByUrl('login');
    }

}
