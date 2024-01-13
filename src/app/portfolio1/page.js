// Credit: - **Original Website:** (https://www.cynthiaugwu.com/)

"use client";
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import "./style.css"
import Image from 'next/image'
import PlugImage from "../../../public/images/portfolio1/plug.png"
import ExperienceImage from "../../../public/images/portfolio1/ixperience.png"
import HuduImage from "../../../public/images/portfolio1/hudu.png"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Portfolio1 = () => {
    const projects = [
        {
            id: 1,
            image: PlugImage,
            title: "The Plug",
            date: "2022"
        },
        {
            id: 2,
            image: ExperienceImage,
            title: "Experience",
            date: "2022"
        },
        {
            id: 3,
            image: HuduImage,
            title: "Hudu",
            date: "2022"
        },
    ]

    const mainRef = useRef();

    const { contextSafe } = useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            defaults: {
                duration: 1
            }
        })

        tl.from("nav a", {
            y: -10,
            opacity: 0,
            ease: 'power3.inOut'
        })

        tl.from(".top-section__title h1 span", {
            y: 140,
            ease: 'power3.inOut',
            stagger: 0.1,
        }, "<30%");

        tl.from(".top-section__title p span", {
            x: -10,
            opacity: 0,
            ease: 'power3.inOut',
            stagger: 0.1
        }, "<50%");

        tl.from(".top-section__tag p span", {
            y: 30,
            ease: 'power3.inOut',
            stagger: 0.1
        }, "<30%");

        tl.from(".top-section__footer div span", {
            y: 10,
            opacity: 0,
            ease: 'power3.inOut',
            stagger: 0.1
        }, "<30%");


        gsap.from(".project-list", {
            y: 100,
            opacity: 0.1,
            ease: 'power3.inOut',
            stagger: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: ".project-section__container",
                start: "top 100%",
                scrub: .5,
            }
        })
    }, { scope: mainRef });

    useEffect(() => {
        const projectList = document.querySelectorAll(".project-list");

        projectList?.forEach((project) => {
            let rotate = 0;
            let rotateDiff = 0;

            // On mouse leave
            project.addEventListener("mouseleave", (e) => {
                (contextSafe(() => {
                    gsap.to(project.querySelector(".project-list__image"), {
                        opacity: 0,
                        ease: "power3",
                        duration: .5
                    })
                }))()
            })

            // On mouse enter
            project.addEventListener("mousemove", (e) => {
                const diff = e.clientY - project.getBoundingClientRect().top;

                rotateDiff = e.clientX - rotate;
                rotate = e.clientX;

                (contextSafe(() => {
                    gsap.to(project.querySelector(".project-list__image"), {
                        opacity: 1,
                        ease: "power3",
                        top: diff,
                        left: e.clientX,
                        rotate: gsap.utils.clamp(-20, 20, rotateDiff * 0.5),
                    })
                }))()
            })
        });
    }, [])


    return (
        <main ref={mainRef} className='relative w-full h-screen bg-black'>
            <header className='relative pt-8 pb-8 mx-auto px-[40px]'>
                <nav>
                    <Link
                        href={"/portfolio1"}
                        className='text-base font-light underline-link inline-flex opacity-90'
                    >
                        Abayomi Portfolio
                    </Link>
                </nav>
            </header>

            {/* Top section */}
            <section className='top-section relative mx-auto px-[40px] h-full'>
                <div className='top-section__container pt-20 pb-32'>
                    <div className='top-section__title'>
                        <div className=''>
                            <h1 className='text-[10vw] font-bold text-[#a3a3a3] opacity-90 leading-[.9] inline-flex overflow-hidden'>
                                <span>CODING</span>
                            </h1>
                        </div>
                        <div className='pl-[130px] w-fit'>
                            <h1 className='text-[10vw] font-bold text-[#a3a3a3] opacity-90 leading-[.9] inline-flex overflow-hidden'>
                                <span>ADMIRER</span>
                            </h1>
                            <p className='text-right font-medium flex justify-end overflow-hidden'>
                                <span>BASED IN NIGERIA</span>
                            </p>
                        </div>
                    </div>

                    <div className='top-section__tag mt-28 text-right font-medium'>
                        <p className='leading-[2] text-[1.15vw] inline-flex overflow-hidden'>
                            <span>AVAILABLE FOR FREELANCE</span>
                        </p>
                        <br />
                        <p className='leading-[2] text-[1.15vw] inline-flex overflow-hidden'>
                            <span>WORK FROM MAY 23&apos;</span>
                        </p>
                    </div>

                    <div className='top-section__footer absolute w-full left-0 bottom-[10%] pb-[2vw] px-[40px]'>
                        <div className='relative w-full flex flex-row items-center justify-between text-[15px] tracking-wide'>
                            <div className='flex items-center underline-link'>
                                <span>CURRENTLY WORKING AT ITANA</span>
                                <span>
                                    <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                    </svg>
                                </span>
                            </div>

                            <div className='flex items-center underline-link'>
                                <span>PASSION & INTERESTS</span>
                                <span>
                                    <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                    </svg>
                                </span>
                            </div>

                            <div className='flex items-center text-[#a3a3a3] underline-link opacity-50'>
                                <span>
                                    <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Section */}
            <section className='project-section relative mx-auto px-[40px] pt-20'>
                <div className='project-section__container'>
                    {projects?.map(project => {
                        return <div key={project.id} className='project-list relative w-full border-t border-white group cursor-pointer'>
                            <Image src={project?.image} alt="" className='project-list__image absolute pointer-events-none z-10 h-[140%] object-contain opacity-0' />
                            <div className='flex items-center justify-between py-[3.5vw]'>
                                <h2 className='text-[7.5vw] opacity-60 group-hover:opacity-70 transition-opacity ease-out duration-200 uppercase font-bold'>
                                    {project?.title}
                                </h2>
                                <p className='text-base font-medium'>
                                    {project?.date}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </section>

            {/* Footer */}
            <footer className='footer-section relative mx-auto px-[40px] pt-[12rem] pb-12'>
                <p className='text-base font-medium text-white opacity-50 text-center'>&copy;{new Date().getFullYear()} All right reserved. Made with ❤️ by Abayomi</p>
            </footer>
        </main>
    )
}

export default Portfolio1