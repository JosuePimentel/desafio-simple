import Header from "../../components/header/header";
import Button from "../../components/button/button";

function Home() {
  return (
    <>
      <div className="w-screen bg-(--color-secondary-950) relative overflow-x-hidden max-md:h-fit min-md:min-h-dvh">
        <Header />
        <main className="min-lg:px-32 min-lg:pt-36 min-lg:pb-16 mt-20 w-full text-white relative flex flex-col max-md:h-[500px] max-lg:h-[calc(100dvh-80px)] max-lg:bg-[url('https://frontierharvesters.com/wp-content/uploads/2024/06/Frontier-Harvesters-home-1-scaled.webp')] bg-cover bg-center bg-no-repeat min-lg:flex-row min-lg:gap-10 min-lg:justify-between">
          <div className="w-full h-full bg-black absolute top-0 left-0 opacity-40 min-lg:hidden"></div>

          <div className="flex flex-col items-center justify-center h-[-webkit-fill-available] w-full px-10 gap-10 z-[5] min-lg:w-[550px] min-lg:px-0 min-lg:items-start">
            <h1 className="font-bold text-3xl text-center min-lg:text-6xl min-lg:text-start">
              Welcome to Frotier Harvesters
            </h1>
            <p className="font-normal text-sm text-center min-lg:text-start min-lg:text-lg">
              Cultivating dreams, harvesting sucess; Your partner for a green
              tomorrow!
            </p>
            <Button text="Get Started" class="w-[200px]" />
          </div>

          <div className="h-full hidden min-lg:flex w-fit items-center justify-center relative">
            <img
              src="https://frontierharvesters.com/wp-content/uploads/2024/06/Frontier-Harvesters-home-1-scaled.webp"
              alt="image"
              className="object-cover max-w-[600px] w-full h-[400px] rounded-2xl"  
            />

            <div className="absolute w-48 rounded-2xl bg-white flex flex-col gap-4 p-5 -left-20">
              <span className="material-symbols-outlined p-3 bg-(--color-primary-500) text-white text-base w-fit h-fit rounded-2xl"> park </span>
              <p className="text-gray-500 font-medium text-lg">Eco-friendly solutions</p>
            </div>

            <div className="absolute w-48 rounded-2xl bg-white flex flex-col gap-4 p-5 -top-10 -right-10">
              <span className="material-symbols-outlined p-3 bg-(--color-primary-500) text-white text-base w-fit h-fit rounded-2xl"> compost </span>
              <p className="text-gray-500 font-medium text-lg">Sustainable Farming</p>
            </div>

            <div className=" absolute bg-linear-to-r from-(--color-secondary-950) to-(--color-primary-500) rounded-lg p-5 flex gap-4 items-center bottom-10 -right-18">
              <div className="size-14 rounded-full overflow-hidden"><img src="https://frontierharvesters.com/wp-content/uploads/2024/06/Bisi.webp" alt="" className="w-full h-full" /></div>
              <div className="flex flex-col gap-3">
                <p className="text-xs">The farmer has to be an optimist or he wouldn't still be a farmer.</p>
                <p className="flex flex-col text-[10px]">
                  <span className="font-bold">Olabisi Sarah,</span>
                  Head of Programs, Research, and Vocational Development
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
