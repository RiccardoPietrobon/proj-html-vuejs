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
        }
    },

    methods: {

    },



});

app.mount('#app');