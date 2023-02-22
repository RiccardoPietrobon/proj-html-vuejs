const app = Vue.createApp({

    data() {
        return {

            /* array navbar */
            listNav: [
                {
                    title: "Home",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },
                {
                    title: "Pages",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },
                {
                    title: "Courses",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },
                {
                    title: "Features",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },
                {
                    title: "Blog",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },
                {
                    title: "Shop",
                    listTitles: [
                        "Start Here",
                        "Succes Story",
                        "About me",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                },

            ],
            /* array listCourses */
            listCourses: [
                {
                    price: "$40.00",
                    image: "course-02-480x298.jpg",
                    title: "Learning to Write as a Professional Author",
                    numbers: [20, 50],
                },
                {
                    price: "Free",
                    image: "stock-full-hd-03-480x298.jpg",
                    title: "Customer-centric Info-Tech Strategies",
                    numbers: [24, 769],
                },
                {
                    price: "$19.00",
                    image: "stock-full-hd-04-480x298.jpg",
                    title: "Open Programming Courses for Everyone: Phyton",
                    numbers: [17, 62],
                },
                {
                    price: "$26.00",
                    image: "stock-full-hd-06-480x298.jpg",
                    title: "Academic Listening and Note-taking",
                    numbers: [14, 67],
                },
                {
                    price: "$39.00",
                    image: "course-featured-image-01-480x298.jpg",
                    title: "Master jQuery in a Short Period of Time",
                    numbers: [6, 51],
                },
                {
                    price: "$59.00",
                    image: "stock-full-hd-05-480x298.jpg",
                    title: "Introduction to Javascript for Beginners",
                    numbers: [14, 76],
                },
            ],
            /* array listBenefits */
            listBenefits: [
                {
                    image: "home-2-image-box-01.png",
                    title: "Customize Preferences",
                    text: "Learnes are given the right to arrange and customize their study schedule and timetable based on preferences.",
                    link: "Start here",
                },
                {
                    image: "about-us-02-image-box-02.png",
                    title: "Cloud Storage",
                    text: "You can store online lessons via online cloud or download to your device and revise lessons on the way",
                    link: "Get free Quote",
                },
                {
                    image: "home-2-image-box-03.png",
                    title: "Multimedia Channels",
                    text: "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
                    link: "Start now",
                },
            ],
            /* array listCarousel */
            listCarousel: [
                {
                    title: "It's a choiche of a quality for people with special needs",
                    text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
                    img: "testimonial-avata-03.jpg",
                    name: "FLORENCE THEMES",
                    job: "/Multimedia Admin",
                },
                {
                    title: "High level of efficiency and scientific teaching methods",
                    text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
                    img: "testimonial-avata-02.jpg",
                    name: "MINA HOLLACE",
                    job: "/Freelancer",
                },
                {
                    title: "Professional team of specialist and passionate mentors at reach",
                    text: "I need to get a certification for English proficiency and MaxCoach is my best choiche. Their tutors are smart and professional when dealing with students.",
                    img: "testimonial-avata-04.jpg",
                    name: "MADLEY PONDOR",
                    job: "/IT Specialist",
                },
                // {
                //     title: "High level of efficiency and scientific teaching methods",
                //     text: "I need to get a certification for Informatic proficiency and MaxCoach is my best choiche. Their tutors are smart and professional when dealing with students.",
                //     img: "testimonial-avata-01.jpg",
                //     name: "HOMER SIMPSON",
                //     job: "/Technician",
                // },

            ],
            /* array listNumbers */
            listNumbers: [
                {
                    title: "Sucessfully trained",
                    number: "1790",
                    description: "ENROLLED LEARNERS",
                },
                {
                    title: "Proudly Received",
                    number: "19",
                    description: "COUNTRYWIDE AWARDS",
                },
                {
                    title: "Firmly Established",
                    number: "24",
                    description: "LOCAL BRANCHES",
                },
                {
                    title: "Getting Featured on",
                    number: "1090",
                    description: "BLOG POSTS",
                },
            ],
            /* array listBlog */
            listBlog: [
                "Become a Better Blogger: Content Planning",
                "Promoting Your Online Business on Pinterest",
                "Gramifications and Game-Based Learning",
                "Designing an Online Course from Expert's Perspective",
                "Why Online Courses Are the Future of Education",
            ],
            /* array footer */
            listFooter: [
                {
                    what: "Adress",
                    listElements: [
                        "382 NE 191st St # 87394 Miami, FL 33179-3899",
                        "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
                        "support@maxcoach.com",
                    ],
                },
                {
                    what: "Explore",
                    listElements: [
                        "Start here",
                        "Blog",
                        "About us",
                    ],
                },
                {
                    listElements: [
                        "Success story",
                        "Courses",
                        "Contact us",
                    ],
                },

                {
                    what: "Information",
                    listElements: [
                        "Membership",
                        "Purchase guide",
                        "Privacy policy",
                        "Terms of services",
                    ],
                },
            ],
            /* navbar */
            activeMenu: {
                index: 0,
                open: false,
            },
            /* carosel */
            activeElement: 1
        }
    },

    methods: {
        /* navbar */
        itemMenu(clickedItemIndex) {
            if (clickedItemIndex == this.activeMenu.index) {
                this.activeMenu.open = !this.activeMenu.open;
            } else {
                this.activeMenu.index = clickedItemIndex;
                this.activeMenu.open = true;
            }
        },
        /* carosel */
        switchButton(index) {
            this.activeElement = index;
        },

        switchBox(index) {
            this.activeElement = index;
        },


    },



});

app.mount('#app');