const Shimmer = () => {
    return (
        <div className="px-52 grid grid-cols-4 gap-4 my-9">
            {Array(20)
                .fill("")
                .map((item, index) => {
                    return (
                        <div className="my-8" key={index}>
                            <div className="bg-slate-200 w-full h-44"></div>
                            <p className="bg-slate-200 w-full h-6 mt-2"></p>
                            <p className="bg-slate-200 w-1/2 h-6 mt-2"></p>
                        </div>
                    );
                })}
        </div>
    );
};

export default Shimmer;
