import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { SlugifyPipe } from '../pipes/slugify.pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    constructor(private slugifyPipe: SlugifyPipe) {
        this.init();
    }

    private authors: { [key: string]: Author } = {
        'Kratika': {
            name: 'Kratika',
            image: './assets/img/avatar.jpg',
            email: 'maheshwari.kr@northeastern.edu',
            bio: 'A full-stack developer and freelancer with a passion for thoughtful coding, collaboration, and open-source. I spend my days coding, reading mangas, watching animes or playing video games.'
        }
    };

    private posts: Post[] = [
        {
            title: 'Home Automation',
            // date: '2020/06/06',
            author: this.authors['Kratika'],
            image: './assets/img/posts/ionic-vs-native-script.png',
            content: './assets/blog/ionic-vs-native-script.md',
            tags: [
                'Comparison',
                'Javascript',
                'Mobile Apps',
                'Ionic',
                'NativeScript',
                'Angular'
            ]
        },
        {
            title: 'Daycare',
            // date: '2019/11/30',
            author: this.authors['Kratika'],
            image: './assets/img/posts/ant-design.png',
            content: './assets/blog/ant-design.md',
            tags: [
                'Design',
                'Front-end',
                'Angular',
                'React'
            ]
        },
        {
            title: 'E-Commerce',
            // date: '2019/11/29',
            author: this.authors['Kratika'],
            image: './assets/img/posts/R-V-A.jpg',
            content: './assets/blog/react-vue-or-angular.md',
            tags: [
                'Comparison',
                'Javascript',
                'Front-end',
                'Angular',
                'React',
                'Vue'
            ]
        },
        {
            title: 'Private Network',
            // date: '2019/10/25',
            author: this.authors['Kratika'],
            image: './assets/img/posts/javascript.png',
            content: './assets/blog/not-not-operator-in-javascript.md',
            tags: [
                'Javascript',
                'Front-end'
            ]
        },
        {
            title: 'Corporate Organization',
            // date: '2019/09/28',
            author: this.authors['Kratika'],
            image: './assets/img/posts/design-patterns.jpeg',
            content: './assets/blog/some-useful-design-patterns.md',
            tags: [
                'Design patterns',
                'Architecture',
                'Back-end',
                'PHP'
            ]
        }
    ];

    private init() {
        let currentId = this.posts.length;
        this.posts.forEach((post) => {
            // Generate post id
            post.id = currentId--;
            // Generate slug
            if (! post.slug) {
                post.slug = this.slugifyPipe.transform(post.title);
            }
        });
    }

    getPosts() {
        return this.posts.slice();
    }

    getPostBySlug(slug: string) {
        return this.posts.find(p => p.slug == slug);
    }

    getPostById(id: number) {
        return this.posts.find(p => p.id == id);
    }

}

export const DisqusConfig = {
    shortname: 'Kratika'
};
