export function Dollars() {
    if (window.innerWidth > 420) {
      return (
        <div className="flex flex-col w-full dollars h-[100vh] justify-center">
          <h1 className="font-bold text-[3rem] text-white mb-5">
            Weakness of the U.S. Dollar
          </h1>
          <div className="bg-white w-1/2 self-center h-[1px]"></div>
          <p className="text-white self-center w-1/2 text-[1.5rem] ">
            Although the U.S. dollar is one of the world’s most important reserve
            currencies, when the value of the dollar falls against other
            currencies as it did between 1998 and 2008, this often prompts people
            to flock to the security of gold, which raises gold prices . The price
            of gold nearly tripled between 1998 and 2008, reaching the
            $1,000-an-ounce milestone in early 2008 and nearly doubling between
            2008 and 2012, hitting above the $2,000 mark.1 The decline in the U.S.
            dollar occurred for a number of reasons, including the country’s large
            budget and trade deficits and a large increase in the money supply.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col w-full dollars justify-center">
          <h1 className="font-bold text-[2rem] text-white mb-5  break-words w-[220px] self-center">
            Weakness of the U.S. Dollar
          </h1>
          <div className="bg-white w-1/2 self-center h-[1px]"></div>
          <p className="text-white self-center w-1/2 text-[1rem] break-words text-left px-2 mb-5 mt-3 ">
            Although the U.S. dollar is one of the world’s most important reserve
            currencies, when the value of the dollar falls against other
            currencies as it did between 1998 and 2008, this often prompts people
            to flock to the security of gold, which raises gold prices . The price
            of gold nearly tripled between 1998 and 2008, reaching the
            $1,000-an-ounce milestone in early 2008 and nearly doubling between
            2008 and 2012, hitting above the $2,000 mark.1 The decline in the U.S.
            dollar occurred for a number of reasons, including the country’s large
            budget and trade deficits and a large increase in the money supply.
          </p>
        </div>
      );
    }
  }