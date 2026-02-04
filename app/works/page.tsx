"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Image from "next/image";

export default function WorksPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    gsap.fromTo(pageRef.current,{opacity:0},{opacity:1,duration:1});

    gsap.utils.toArray<HTMLElement>(".work-anim").forEach((el)=>{
      gsap.fromTo(el,{y:80,opacity:0},{
        y:0,opacity:1,duration:1.2,
        scrollTrigger:{trigger:el,start:"top 88%"}
      });
    });
  }, []);

  const projects = [
    {id:"01",title:"GEN",img:"gen.png",desc:"Building a Cohesive Identity for Global Engineers"},
    {id:"02",title:"Berrics",img:"berrics.png",desc:"A Revitalized Brand for a Connected Skateboarding Community"},
    {id:"03",title:"Cariuma",img:"cariuma.png",desc:"A Blend of Sustainability, Urban Style, and Brazilian Identity"},
    {id:"04",title:"Zuso",img:"zuso.png",desc:"Reinventing Culinary Experience"},
    {id:"05",title:"Superela",img:"superela.png",desc:"Where busy women find their way back to wellness"},
    {id:"06",title:"Waypoint Group",img:"waypoint.png",desc:"Built to grow with clarity and strength"},
    {id:"07",title:"Fapes",img:"fapes.png",desc:"Take care of your patients anywhere"},
    {id:"08",title:"Go HQ",img:"gohq.png",desc:"A strategic rebrand for a leader on the move"},
    {id:"09",title:"Sextante",img:"sextante.png",desc:"A universe of stories ready to be explored"},
    {id:"10",title:"Grasshopper",img:"grasshopper.png",desc:"Where all climbing athletes meet"},
    {id:"11",title:"Opplio",img:"opplio.png",desc:"Everything you need to management"},
    {id:"12",title:"CEO",img:"ceo.png",desc:"Empowering Leaders through a Digital Platform"},
    {id:"13",title:"Ecological Footprint",img:"ecological.png",desc:"How your lifestyle impacts the planet"},
    {id:"14",title:"Little Black Book",img:"little-black-book.png",desc:"A visual identity for digital empowerment"},
  ];

  return (
<main ref={pageRef} className="w-full overflow-x-hidden bg-white">

{/* HERO */}
<section className="min-h-screen flex items-center px-5 sm:px-8 lg:px-[8vw] pt-[18vh]">
  <h1 className="text-black font-semibold leading-[1] text-[clamp(3rem,8vw,8rem)]">
    We embark on <br/> creative journeys.
  </h1>
</section>

{/* PROJECT LOOP */}
{projects.map((p,i)=>(
<section key={p.id} className="relative py-[16vh] lg:py-[22vh] overflow-hidden">

{/* BIG NUMBER */}
<div className={`hidden md:block absolute ${i%2?"left-[4vw]":"right-[4vw]"} top-[6vh] text-[22vw] font-semibold text-[#1F6677]/12 select-none`}>
  {p.id}
</div>

<div className="px-5 sm:px-8 lg:px-[8vw] max-w-[1900px] mx-auto">

{/* TITLE */}
<h3 className={`work-anim text-black text-3xl sm:text-4xl font-semibold mb-[6vh] ${i%2?"text-right":""}`}>
  {p.title}
</h3>

{/* ROW */}
<div className={`flex flex-col lg:flex-row gap-[6vh] items-center ${i%2?"lg:flex-row-reverse":""}`}>

{/* IMAGE */}
<div className="w-full lg:w-[60%]">
  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden hover:scale-[1.03] transition duration-700">
    <Image
      src={`/images/works/${p.img}`}
      alt={p.title}
      fill
      className="object-cover"
    />

    {/* Soft teal overlay */}
    <div className="absolute inset-0 bg-[#1F6677]/10 hover:bg-[#1F6677]/5 transition"/>
  </div>

  <h2 className={`work-anim text-black mt-[4vh] text-[clamp(1.8rem,3.5vw,3.2rem)] font-semibold leading-tight ${i%2?"text-right":""}`}>
    {p.desc}
  </h2>
</div>

</div>
</div>
</section>
))}

</main>
  );
}
