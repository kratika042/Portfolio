import { Author } from '../models/author.model';
import { SocialLink } from '../models/social-link.model';
import { Service } from '../models/service.model';
import { Skill } from '../models/skill.model';
import { Technology } from '../models/technology.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Reference } from '../models/reference.model';
import { Tool } from '../models/tool.model';

export class HomeService {

    author: Author = {
        name: 'Kratika Maheshwari',
        image: './assets/img/img2.png',
        job: 'Full Stack Developer',
        bio: 'I am Kratika Maheshwari.I am currently pursuing my masters from Northeastern University in computer systems engineering. I have a work experience of 3 years as a software developer where I developed my skillset by working on various development projects in Python, Python Flask and gained in-depth knowledge of various databases. I also worked on Splunk tool for data vizualization and analysis of indexed log data. I have explored plethora of technologies to append to my skillset while pursuing masters, major additions are JAVA, IoT, JavaScript, ReactJS, NodeJS, Angular by working on various challenging projects.',
        // age: this.calculateAge('1995-02-25'),
        location: 'Boston, Massachusetts',
        email: 'maheshwari.kr@northeastern.edu',
        website: 'https://github.com/kratika042'
    };

    services: Service[] = [
        { title: 'Front End Development', icon: 'desktop', description: 'Angular, Vue.js, Jquery, VanillaJS, HTML5, CSS / SASS, JavaScript / ES6, TypeScript, SPA, PWA, Web Sockets' },
        { title: 'Back End Development', icon: 'cubes', description: 'PHP (CodeIgniter, Symfony), MySQL / SQL Server / MongoDB, CMS (Wordpress, Drupal), Python, Node.js, C#, ASP.NET, Rest API, OOP' },
        { title: 'Mobile Development', icon: 'mobile', description: 'Ionic, PhoneGap, Android SDK' },
        { title: 'Web Hosting', icon: 'server', description: 'FTP, SSH, cPanel, Linux shell' },
        { title: 'Data Mining', icon: 'search-plus', description: 'CasperJS, PhantomJS, Puppeteer, Web Scraper' },
        { title: 'DevOps', icon: 'code-fork', description: 'Git / Github / Gitlab, CI / CD, Gulp, Webpack, npm' }
    ];

    skills: Skill[] = [
        
        { name: 'Python', progress: 80 },
        { name: 'JAVA', progress: 70},
        { name: 'Javascript / ES6', progress: 80 },
        { name: 'Node.js', progress: 70, position: 'right' },
        { name: 'C/C++', progress: 60, position: 'right' },
        { name: 'SQL / NoSQL', progress: 85, position: 'right' }
        
    ];

    tools: Tool[] = [
        { name: 'Visual Studio Code', image: './assets/img/tools/vs-code.png' },
        { name: 'Splunk', image: './assets/img/tools/splunk.jpg' },
        { name: 'Kibana', image: './assets/img/tools/kibana.png' },
        { name: 'Wireshark', image: './assets/img/tools/wireshark.png' },
        { name: 'Cisco Packet Tracer', image: './assets/img/tools/cpt.png' },
        { name: 'Git', image: './assets/img/tools/git.png' },
        { name: 'NPM', image: './assets/img/tools/npm.png' },
    ];

    technologies: Technology[] = [
        // ,
         { name: 'Flask', image: './assets/img/tech/f2.png' },
         { name: 'Hibernate', image: './assets/img/tech/hibernate.jpg' },
        { name: 'Bootstrap', image: './assets/img/tech/bootstrap.png' },
        // { name: '', image: './assets/img/tech/semantic-ui.png' },
        { name: 'Materialize', image: './assets/img/tech/materialize-css.png' },
        { name: 'mongoDB', image: './assets/img/tech/mongodb.png' },
        { name: 'Javascript', image: './assets/img/tech/js.png' },
        { name: 'jQuery', image: './assets/img/tech/jquery.png' },
         { name: 'Ajax', image: './assets/img/tech/ajax.png' },
        { name: 'TypeScript', image: './assets/img/tech/ts.png' },
        // { name: 'Sass', image: './assets/img/tech/sass.png' },
        { name: 'Angular', image: './assets/img/tech/angular.png' },
        // { name: 'Firebase', image: './assets/img/tech/firebase.png' },
        // { name: 'Ionic', image: './assets/img/tech/ionic.png' },
        // { name: 'Vue.js', image: './assets/img/tech/vue.png' },
        { name: 'React', image: './assets/img/tech/react.png' },
        // { name: 'Riot JS', image: './assets/img/tech/riot.png' },
        { name: 'Node.js', image: './assets/img/tech/nodejs.png' },
        // { name: '.Net', image: './assets/img/tech/dotnet.png' },
        { name: 'SQL Server', image: './assets/img/tech/sql-server.png' },
        // { name: 'Flask', image: './assets/img/tech/jekyll.png' },
        // { name: 'PHP', image: './assets/img/tech/php.png' },
        // { name: 'Symfony', image: './assets/img/tech/symfony.png' },
        // { name: 'CodeIgniter', image: './assets/img/tech/codeigniter.png' },
        // { name: 'Wordpress', image: './assets/img/tech/wordpress.png' },
        // { name: 'Drupal', image: './assets/img/tech/drupal.png' },
        // { name: 'MySQL', image: './assets/img/tech/mysql.png' },
       
        // { name: 'Gulp', image: './assets/img/tech/gulp.png' },
        
        // { name: 'Docker', image: './assets/img/tech/docker.png' },
        // { name: 'Qt Framework', image: './assets/img/tech/qt.png' },
        // { name: 'GTK', image: './assets/img/tech/gtk.png' },
        // { name: 'Android', image: './assets/img/tech/android.png' },
        // { name: 'Electron', image: './assets/img/tech/electron.png' },
    ];
// EDIT HERE
    education: Education[] = [
        {
            tag: 'Northeastern University',
            title: 'Computer Systems Engineering',
            period: '2019 - Present'
        },
        {
            tag: 'Rajasthan Technical University',
            title: 'Computer Science',
            period: '2012 - 2016',
            position: 'right'
        }
        
    ];

    experience: Experience[] = [
        {
            tag: 'Infosys Limited',
            title: 'Senior Systems Engineer',
            description: [
                '➺ Managed Splunk tool for indexing, designing reports, dashboards and visualizations, Python Flask is used in backend for making API calls for fetching big data to Splunk, thus resulting in resource utilization and time saving .',
                '➺ Performed Analysis and data monitoring for databases such as <b>Cassandra</b>, <b>MongoDB</b> and <b>Oracle</b>.'
            ],
            period: 'May 2018 - June 2019'
        },
        {
            tag: 'Infosys Limited',
            title: 'Systems Engineer',
            description: [
                '➺ Led team of 6 as a Python developer for maintaining ad-hoc and periodic backup using Scripting and Cronjob',
                '➺ Transferred compressed files over network for one or more clusters Flask RESTful is used for building Flask REST API, resulted in data flexibility and improved backup efficiency ',
                '➺ Collaborated with 2 developers in building a bot for automating IBM DataStage tool using python with functionalities such as creating/deleting projects on client machine deploying bot agent.'
            ],
            period: 'January 2017 - April 2018',
            position: 'right'
        },
        {
            tag: 'Infosys Limited',
            title: 'Systems Engineer Trainee',
            description: [
                '➺ Developed online examination system using <b>Python</b>, <b>JavaScript</b>, <b>Oracle</b>.' ,
                '➺ Spearheaded a multiuser chat application utilizing socket programming and other web technologies namely <b>AngularJS</b> '
            ],
            period: 'July 2016 - December 2016'
        }
        
    ];

    funFact: Reference[] = [
        {
            title: 'Baka.. 🙄',
            content: 'In my childhood, i often mixed ⬅️ directions ➡️'
        },
        {
            title: 'Nerd or Geek? 🤓',
            content: 'I spent too much time coding in <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a> (2012 to 2018). It was my first-class meths.. 💊'
        },
        {
            title: 'Lazy 🤫',
            content: 'Failed my 1st year of University because of laziness 👀'
        }
    ];

    private calculateAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}