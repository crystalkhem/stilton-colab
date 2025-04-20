import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="relative flex items-end bg-blue-300 h-screen bg-cover  bg-center bg-[url(https://images.pexels.com/photos/4321206/pexels-photo-4321206.jpeg)]">
    <div className="absolute inset-0 bg-black/20"> </div>


    <div className="flex flex-col pl-15 pb-15 font-bold text-white z-10">
      <div className="text-9xl">stilton</div> 
      <div className="text-8xl">by the sea</div>
    </div>

</div>

    <div className="flex-col p-10 xl:px-40 gap-5 justify-center flex lg:flex-row bg-neutral-100 flex items-center justify-center ">
      

      <img src='https://images.pexels.com/photos/5006536/pexels-photo-5006536.jpeg' 
      className="lg:my-25 shadow-xl object-cover shadow-xl md:max-w-[400] "></img>
   
    <div className="w-3/4">
    <h2 className="text-7xl font-bold px-7  ">about </h2>
    <div className="text-xl font-bold pb-3 lg:pb-5 pl-10">our story. </div>


      <h2 className="text-xl md:px-7 lg:px-20 pb-10">Welcome to <span className="bg-orange-300 px-1">Stilton by the Sea</span>, where good waves, salty air, and laid-back vibes are always on the itinerary. Tucked just a short walk from the shoreline, our surf hostel is a cozy haven for wave-chasers, wanderers, and ocean-lovers from around the globe.

We believe in shared meals, sunrise sessions, and stories swapped over sandy bonfires. Whether you're here to catch your first wave or just need a breezy spot to unwind, Stilton’s got you covered. Expect warm beds, surfboard racks, local tips, and the kind of community that turns strangers into surf buddies.

Come for the waves. Stay for the vibe. </h2>


</div>
   
    </div>




    <div className="relative bg-[url(https://images.pexels.com/photos/4321072/pexels-photo-4321072.jpeg)]
    backdrop-blur-xl bg-cover flex flex-col items-center">
    <div className="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>

    <h2 className="text-7xl z-10 font-bold px-7 pt-10 ">services </h2>
    <div className="text-xl z-10 font-bold pb-3 lg:pb-5 pl-10">come join us! </div>

    
<div className="z-10 md:grid md:grid-cols-3 text-4xl pb-20 gap-5 text-white italic font-bold p-10">

    <div className="cards bg-[url(https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg)]">
    <div className="hover:text-5xl">rentals</div>
    </div>

    <div className="cards  bg-[url(https://images.pexels.com/photos/5599599/pexels-photo-5599599.jpeg)]">
    <div className="">booking</div>
    </div>

    <div className="cards bg-[url(https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg)]">
    <div className="">tours</div>
    </div>

    </div>

    </div>





    <div className="flex-col p-10 xl:px-40 gap-5 justify-center flex lg:flex-row bg-neutral-100 flex items-center justify-center ">
      

      <img src='https://images.pexels.com/photos/5006536/pexels-photo-5006536.jpeg' 
      className="lg:my-25 shadow-xl object-cover shadow-xl md:max-w-[400] "></img>
   
    <div className="w-3/4">
    <h2 className="text-7xl font-bold px-7  ">about </h2>
    <div className="text-xl font-bold pb-3 lg:pb-5 pl-10">our story. </div>


      <h2 className="text-xl md:px-7 lg:px-20 pb-10">Welcome to <span className="bg-orange-300 px-1">Stilton by the Sea</span>, where good waves, salty air, and laid-back vibes are always on the itinerary. Tucked just a short walk from the shoreline, our surf hostel is a cozy haven for wave-chasers, wanderers, and ocean-lovers from around the globe.

We believe in shared meals, sunrise sessions, and stories swapped over sandy bonfires. Whether you're here to catch your first wave or just need a breezy spot to unwind, Stilton’s got you covered. Expect warm beds, surfboard racks, local tips, and the kind of community that turns strangers into surf buddies.

Come for the waves. Stay for the vibe. </h2>


</div>
   
    </div>



</div>
  );
}


// flip surfer
// font