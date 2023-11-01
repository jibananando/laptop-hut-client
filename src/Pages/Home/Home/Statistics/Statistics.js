import CountUp from "react-countup";
export default function Statistics() {
    const stats = [
        {
            data: <CountUp enableScrollSpy end={1200} duration={4} />,
            title: "Customers",
        },
        {
            data: (
                <CountUp
                    enableScrollSpy
                    end={5000000}
                    duration={9}
                    prefix="$"
                    separator=","
                />
            ),
            title: "Sales",
        },
        {
            data: <CountUp enableScrollSpy end={12} duration={2} />,
            title: "Countries",
        },
        {
            data: (
                <CountUp
                    enableScrollSpy
                    end={200000}
                    duration={4}
                    prefix="$"
                    separator=","
                />
            ),
            title: "Total revenue",
        },
    ];
    return (
        <section className="container mx-auto py-16">
            <div className="max-w-screen-xl  text-gray-600 gap-x-12 hero-content flex-col lg:flex-row-reverse mx-10">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img
                        src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="rounded-lg"
                        alt=""
                    />
                </div>
                <div className="lg:mt-0 gap-12 mt-6 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 dark:text-gray-300 text-lg text-center font-semibold lg:text-start lg:text-2xl">
                            We do our best to make customers always happy
                        </h3>
                        <p className="mt-3 max-w-xl dark:text-gray-400">
                            E-commerce is one of the most popular website types, and according
                            to Kommando Tech, there are currently over 20 million e-commerce
                            stores in total.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {stats.map((item, idx) => (
                                <li key={idx} className="">
                                    <h4 className="text-4xl text-orange-600 dark:text-indigo-500 font-semibold">
                                        {item.data}
                                    </h4>
                                    <p className="mt-3 font-medium dark:text-gray-300">
                                        {item.title}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}