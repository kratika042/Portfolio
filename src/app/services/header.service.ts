import { Menu } from '../models/menu.model';

export class HeaderService {

    title: string = 'Portfolio';

    repositoryLink: string = 'https://github.com/kratika042';

    menu: Menu[] = [
        { name: 'Home', id: '', link: '/' },
        { name: 'Skills', id: 'skill-section', link: '/' },
        { name: 'Tools', id: 'tools-section', link: '/' },
        { name: 'Technologies', id: 'technologies-section', link: '/' },
        { name: 'Education', id: 'education-section', link: '/' },
        { name: 'Experience', id: 'experience-section', link: '/' },
        { name: 'Academic Projects', id: 'blog-section', link: '/' }
    ];
}