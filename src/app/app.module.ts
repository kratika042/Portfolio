import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutSectionComponent } from './components/shared/sections/about-section/about-section.component';
import { HeaderService } from './services/header.service';
import { HomeService } from './services/home.service';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { TopSectionComponent } from './components/shared/sections/top-section/top-section.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SkillSectionComponent } from './components/shared/sections/skill-section/skill-section.component';
import { CarouselSectionComponent } from './components/shared/sections/carousel-section/carousel-section.component';
import { TimelineSectionComponent } from './components/shared/sections/timeline-section/timeline-section.component';
import { ErrorSectionComponent } from './components/shared/sections/error-section/error-section.component';
import { BlogSectionComponent } from './components/shared/sections/blog-section/blog-section.component';
import { PostComponent } from './components/post/post.component';
import { PostSectionComponent } from './components/shared/sections/post-section/post-section.component';
import { DisqusModule } from 'ngx-disqus';
import { DisqusConfig } from './services/blog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SlugifyPipe } from './pipes/slugify.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PageNotFoundComponent,
    AboutSectionComponent,
    HeaderComponent,
    TopSectionComponent,
    FooterComponent,
    SkillSectionComponent,
    CarouselSectionComponent,
    TimelineSectionComponent,
    ErrorSectionComponent,
    BlogSectionComponent,
    PostComponent,
    PostSectionComponent,
    SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot(DisqusConfig.shortname),
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
    HeaderService,
    HomeService,
    BlogService,
    SlugifyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
