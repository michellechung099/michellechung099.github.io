import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export let colors = ["rgb(181, 221, 255)", "rgb(217, 152,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Michelle",
    lastName: "Chung",
    initials: "MC", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '☕',
        //     text: 'fueled by coffee'
        // },
        {
            emoji: '🌎',
            text: 'based in San Francisco'
        },
        {
            emoji: "💼",
            text: "open to new opportunities"
        },
        {
            emoji: "📧",
            text: "mchung099@gmail.com"
        }
    ],
    socials: [
        {
            link: "/resume.pdf",
            icon: AttachFileIcon,
            label: 'resume',
            download: true
        },
        {
            link: "mailto:mchung099@gmail.com",
            icon: MailOutlineIcon,
            label: 'mail'
        },
        {
            link: "https://github.com/michellechung099",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/michelle-chung-3a915a134/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: "Hello! I'm Michelle. I recently finished a software engineering bootcamp at App Academy and studied Consumer Economics and Finance at University of Illinois - Urbana Champaign. I enjoy gaming, doing yoga, and reading philosophy books on my free time. Similar to the view of Heraclitus, I believe my goal in life is to comprehend and understand all that I experience, and never stop learning!",
    skills:
        {
            proficientWith: ['javascript', 'HTML', 'CSS', 'react', 'redux', 'canvas','ruby on rails', 'node', 'express', 'postgreSQL', 'mongoDB', 'mongoose','AWS'],
            exposedTo: ['Heroku', 'Postman','python']
        }
    ,
    hobbies: [
        {
            label: 'yoga',
            emoji: '🧘'
        },
        {
            label: 'gaming',
            emoji: '💻'
        },
        {
            label: 'philosophy',
            emoji: '📚'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Cat Defense",
            live: "https://michellechung099.github.io/CatDefense/",
            source: "https://github.com/michellechung099/CatDefense",
            image: mock1
        },
        {
            title: "Event Me",
            live: "https://eventme.onrender.com/",
            source: "https://github.com/michellechung099/EventMe",
            image: mock2
        },
        {
            title: "Grub Globe",
            live: "http://grubglobe.herokuapp.com/",
            source: "https://github.com/ziqi23/Grub-Globe-2",
            image: mock3
        }
    ]
}
