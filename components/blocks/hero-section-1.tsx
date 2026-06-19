'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/curtain-theme-toggle'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <main className="overflow-hidden">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <section>
                <div className="relative pt-24 md:pt-36">
                    <Image
                        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=3276&q=80"
                        alt="night background"
                        className="absolute inset-0 -z-20 hidden dark:block object-cover"
                        fill
                        priority
                        unoptimized
                    />
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="/about"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <span className="text-foreground text-sm">Dedicated SEND Transport Specialists</span>
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold tracking-tight">
                                    Home‑to‑School Transport with Care and Consistency
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                                    Green Destinations provides dedicated SEND transport connecting families, schools,
                                    and local authorities with safe, reliable journeys tailored to every child&apos;s needs.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base bg-[#f7d36f] hover:bg-[#e6ad2e] text-[#0b2245] font-bold shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all duration-200">
                                        <Link href="/contact">
                                            <span className="text-nowrap">Book a Journey</span>
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-10.5 rounded-xl px-5 border border-transparent hover:border-border">
                                    <Link href="/about">
                                        <span className="text-nowrap">Learn More</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-[15/8] object-cover relative hidden rounded-2xl dark:block"
                                    src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=2700&q=75"
                                    alt="scenic travel road dark"
                                    width={2700}
                                    height={1440}
                                    unoptimized
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-[15/8] object-cover relative rounded-2xl border dark:hidden"
                                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=2700&q=75"
                                    alt="scenic travel road light"
                                    width={2700}
                                    height={1440}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
            <section className="bg-background pb-16 pt-16 md:pb-32">
                <div className="group relative m-auto max-w-5xl px-6">
                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <Link
                            href="/about"
                            className="block text-sm duration-150 hover:opacity-75">
                            <span>Meet Our Partners</span>
                            <ChevronRight className="ml-1 inline-block size-3" />
                        </Link>
                    </div>
                    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14 items-center justify-items-center">
                        {/* Partner 1: West Midlands LEA */}
                        <div className="flex items-center gap-2.5 text-foreground/60 dark:text-foreground/40 hover:text-foreground dark:hover:text-foreground transition-all duration-300">
                            <svg className="w-7 h-7 shrink-0 text-foreground/60 dark:text-foreground/40 hover:text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-bold tracking-wider uppercase leading-tight text-foreground/80">West Midlands</span>
                                <span className="text-[10px] opacity-75 font-semibold uppercase tracking-widest leading-none">Education Auth.</span>
                            </div>
                        </div>

                        {/* Partner 2: NHS Care Partner */}
                        <div className="flex items-center gap-2.5 text-foreground/60 dark:text-foreground/40 hover:text-foreground dark:hover:text-foreground transition-all duration-300">
                            <svg className="w-7 h-7 shrink-0 text-foreground/60 dark:text-foreground/40 hover:text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-bold tracking-wider uppercase leading-tight text-foreground/80">NHS Trust</span>
                                <span className="text-[10px] opacity-75 font-semibold uppercase tracking-widest leading-none">Care Partner</span>
                            </div>
                        </div>

                        {/* Partner 3: Specialist Schools Alliance */}
                        <div className="flex items-center gap-2.5 text-foreground/60 dark:text-foreground/40 hover:text-foreground dark:hover:text-foreground transition-all duration-300">
                            <svg className="w-7 h-7 shrink-0 text-foreground/60 dark:text-foreground/40 hover:text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-bold tracking-wider uppercase leading-tight text-foreground/80">Specialist Schools</span>
                                <span className="text-[10px] opacity-75 font-semibold uppercase tracking-widest leading-none">SEND Alliance</span>
                            </div>
                        </div>

                        {/* Partner 4: SEND Safety Trust */}
                        <div className="flex items-center gap-2.5 text-foreground/60 dark:text-foreground/40 hover:text-foreground dark:hover:text-foreground transition-all duration-300">
                            <svg className="w-7 h-7 shrink-0 text-foreground/60 dark:text-foreground/40 hover:text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-bold tracking-wider uppercase leading-tight text-foreground/80">SEND Safety</span>
                                <span className="text-[10px] opacity-75 font-semibold uppercase tracking-widest leading-none">Accredited Trust</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
