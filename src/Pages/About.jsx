
const About = () => {
    return (
        <div>
            <section className="bg-[#37475aff] rounded-xl rounded-b-none mt-24 text-white">
                <div className="flex flex-col mx-auto lg:flex-row">
                    <div className="w-full lg:p-5 lg:w-2/3">
                        <img className="bg-cover relative :top-20 shadow-2xl rounded-xl lg:left-20 w-3/5" src="https://i.ibb.co/YfMTT9W/bbb2.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-end flex-col w-full lg:w-[70%] pb-0 lg:p-5 ">
                        <div className="relative lg:-left-24">
                            <h2 className="text-5xl font-semibold ">About Us</h2>
                            <p className="mt-12 p-2 text-justify">
                                Welcome to our About section, where we delve into the enchanting world of books and literature. Here, we aim to provide you with insights, recommendations, and a deeper understanding of the literary landscape. Whether you're a seasoned bibliophile or a newcomer to the realm of reading, our About section serves as a gateway to discovering new authors, exploring diverse genres, and uncovering the magic of storytelling. Join us on a journey of exploration and appreciation as we celebrate the timeless beauty and boundless possibilities found within the pages of a book.
                                Step into our About section, where we unravel the mysteries and wonders hidden within the world of books. Here, we invite you to explore the rich tapestry of literature, from timeless classics to contemporary masterpieces. Whether you're seeking literary insights, author profiles, or book recommendations, our About section is your companion on the journey of literary discovery. Join us as we embark on a voyage through the realms of imagination, where every page holds a new adventure waiting to be uncovered.

                            </p>
                        </div>
                    </div>
                </div>
                <p className="w-[92%] lg:px-4 text-justify">
                    As we conclude our exploration of the About section, we hope to have ignited your curiosity and passion for books. Within these virtual pages, you've glimpsed into the vast and captivating world of literature, where stories have the power to inspire, provoke thought, and transport us to new realms. Whether you're seeking refuge in the pages of a beloved classic or venturing into uncharted literary territory, our About section serves as a beacon, guiding you on your literary journey. So, as you continue to delve deeper into the enchanting world of books, remember that the adventure never truly ends—there's always another story waiting to be discovered, another author waiting to captivate your imagination. Happy reading!
                </p>
            </section>

            <section className="bg-[#727d8d]">
                <div className="container  flex flex-col justify-center items-center lg:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center lg:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/sCRytXK/b4.png" alt="" className="relative lg:left-40 rounded-xl bg-slate-600 shadow-2xl object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Our Goals</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">At [Organization Name], our mission is clear: to shape the future of literature. We aim to promote literacy, empower authors, foster community, and uphold sustainability. Join us in building a world where books educate, inspire, and unite us all.</p>
                        <div>
                            <h1 className="text-2xl">QUALITY</h1>
                            <p>At [Organization Name], quality is our cornerstone. From carefully curated books to impeccable service, we prioritize excellence in everything we do.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">RESULTS</h1>
                            <p>At [Organization Name], we prioritize outcomes. Through strategic planning and relentless effort, we consistently deliver impactful results that drive our mission forward. With a focus on innovation and collaboration, we strive to exceed expectations and make a meaningful difference in the world.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" lg:p-6 bg-[#37475aff]">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <span className="block mb-2 dark:text-violet-600">Mamba design system</span>
                        <h1 className="text-5xl font-extrabold dark:text-gray-900">Build it with Mamba</h1>
                        <p className="my-8">
                            <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
                        </p>
                        <form novalidate="" action="" className="self-stretch space-y-3">
                            <div>
                                <label for="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div>
                                <label for="lastname" className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Join the waitlist</button>
                        </form>
                    </div>
                    <img src="https://i.ibb.co/KFs0ykY/bbbb.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>

        </div>
    );
};

export default About;