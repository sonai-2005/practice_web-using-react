import React from 'react'
import oldmonk from "/images/oldmonk.png" ;
import { ToastMsg } from './toastMsg';
import { Toast } from "bootstrap";
import BatmanI from './batman_images';
import  Load from './load'
import img1 from "/images/batman/batman1.jpg" 
import img2 from "/images/batman/batman2.jpg" 
import img3 from "/images/batman/batman3.jpg" 
import img4 from "/images/batman/batman4.jpg" 
import img5 from "/images/batman/batman5.jpg" 
export const BatmanUni = () => {
  return (
    <>
    <ToastMsg/>
    <BatmanI Image = {img1} title = "MEN ARE BRAVE" desc ="This line from Batman Begins highlights Bruce Wayne's belief that true courage isn't about physical strength but about standing up for what's right despite fear. Real bravery comes from facing challenges head-on, making sacrifices, and pushing forward even when the odds are against you."/>
     <BatmanI Image ={img2} title ="I am vengeance. I am the night. I am Batman" desc ="This iconic line represents Batman's relentless pursuit of justice. He sees himself as more than just a man—he is a force of vengeance against criminals, embodying the darkness that fights against evil."/>
     <BatmanI Image={img3} title="It's not who I am underneath, but what I do that defines me" desc = " Actions speak louder than words. Bruce Wayne reminds us that a person's true character is not about their intentions or identity, but about their deeds and impact on the world."/>
     <BatmanI Image={img4} title="You either die a hero, or you live long enough to see yourself become the villain" desc = " This quote, spoken by Harvey Dent and later echoed by Batman, highlights the fine line between heroism and corruption. If someone stays in power too long, they may become the very thing they once fought against.."/>
     <BatmanI Image={img5} title="Fear is a tool. When that light hits the sky, it's not just a call. It's a warning" desc = " Batman uses fear as a weapon against criminals. The Bat-Signal is not just a way to summon him—it instills terror in the hearts of those who break the law."/>
     <Load/>
    </>
  )
};
