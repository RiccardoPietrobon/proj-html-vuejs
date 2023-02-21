const app = Vue.createApp({

    data() {
        return {
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
        }
    },

    methods: {

    },



});

app.mount('#app');