export function Reasoning() {
    if (window.innerWidth > 420) {
      return (
        <>
          <p className="text-[3rem] font-semibold text-[#a17a2d]">
            Why Should You Invest In Gold.
          </p>
          <div className="reasoning w-full h-[700px] flex mt-22">
            <iframe
              width="800"
              height="494"
              src="https://www.youtube.com/embed/D-rMb9Znfn8"
              title="Why You Should Buy Gold and Silver - Robert Kiyosaki"
              frameborder="10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="m-auto"
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
          <div className="reasoning w-full h-[450px] flex mt-22">
            <iframe
              width="350"
              height="216"
              src="https://www.youtube.com/embed/D-rMb9Znfn8"
              title="Why You Should Buy Gold and Silver - Robert Kiyosaki"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="m-auto"
            ></iframe>
          </div>
        </>
      );
    }
  }