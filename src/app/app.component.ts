import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from './animations/fade-out.animation';
import { Router, UrlTree } from '@angular/router';
import { DisqusConfig } from './services/blog.service';

declare var M: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOutAnimation]
})
export class AppComponent implements OnInit {

  isLoading: boolean = true;
  isHomePage: boolean = false;
  private route: UrlTree = null;

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.loadScripts();
  }

  initTooltips() {
    const tooltips = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(tooltips);
  }

  disablePreloader(scroll: boolean = false, then: Function = () => {}) {
    //console.log('Disable preloader');
    let _self = this;
    imagesLoaded('.image-bg', { background: true }, function () {
      //console.log('all images are loaded');
      _self.isLoading = false;
      then();
      if (scroll) {
        _self.scrollToRouteFragment();
      }
    });
  }

  private scrollToRouteFragment() {
    //console.log('Scroll to route fragment');
    const element = this.route && this.route.fragment ? document.getElementById(this.route.fragment) : null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // stolen from: https://stackoverflow.com/a/49981918
  private loadScripts() {
    const dynamicScripts = [
      '//' + DisqusConfig.shortname + '.disqus.com/count.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.id = 'dsq-count-scr';
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  onRouteChange() {
    this.isLoading = true;
    this.route = this.router.parseUrl(this.router.url);
    this.isHomePage = !this.route.root.hasChildren() || this.route.root.children.primary.segments[0].path === 'home';
  }
}
