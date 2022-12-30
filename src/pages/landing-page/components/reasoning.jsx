export function Reasoning() {
  if (window.innerWidth > 420) {
    return (
      <>
        <p className="bg-gray-100 text-[3rem] font-semibold text-[#a17a2d]">
          Why Should You Invest In Gold.
        </p>
        <div className=" bg-gray-100 w-full h-max flex flex-col justify-between mt-22">
          <iframe
            width="800"
            height="494"
            src="https://www.youtube.com/embed/D-rMb9Znfn8"
            title="Why You Should Buy Gold and Silver - Robert Kiyosaki"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-auto mb-10"
          ></iframe>
          <iframe
            width="800"
            height="494"
            src="https://www.youtube.com/embed/GiQu9AilHz4"
            title="The Real Reason the Elite Count Gold as a Real Asset - EB Tucker and Robert Kiyosaki"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-auto mb-10"
          ></iframe>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="text-[1.5rem] font-thin my-5 text-[#a17a2d]">
          Why Should You Invest In Gold.
        </p>
        <div className="w-full h-[450px] flex flex-col mt-22">
          <iframe
            width="350"
            height="216"
            src="https://www.youtube.com/embed/D-rMb9Znfn8"
            title="Why You Should Buy Gold and Silver - Robert Kiyosaki"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="m-auto"
          ></iframe>
          <iframe
            width="350"
            height="216"
            src="https://www.youtube.com/embed/GiQu9AilHz4"
            title="The Real Reason the Elite Count Gold as a Real Asset - EB Tucker and Robert Kiyosaki"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-auto mb-10"
          ></iframe>
        </div>
      </>
    );
  }
}
