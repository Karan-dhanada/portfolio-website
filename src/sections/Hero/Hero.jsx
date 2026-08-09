import developerBg from "../../assets/hero/developer-bg.png";
import '../Hero/Hero.css';

function Hero() {
    const stats = [{
        value: "400+",
        label: " Leetcode Problems",
    },
    {
        value: "15+",
        label: "Projects Built",
    },
    {
        value: "1400+",
        label: "Contest Rating",
    },
    ];
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-4rem)] px-6"
        >
            <div className="mx-auto grid h-full max-w-[var(--container-width)] items-center gap-16 py-12 lg:grid-cols-[1fr_0.9fr]">
                <div>
                    <p className="mb-4 text-sm text-[var(--color-primary)]">
                        Hi, I'm
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        <span className="text-[var(--color-primary)]">
                            Karan
                        </span>{" "}
                        Dhanada
                    </h1>

                    <p className="mt-4 text-xl font-medium text-white/80 md:text-2xl">
                        Software Developer
                        <span className="text-[var(--color-primary)]">
                            {" "}
                            | Problem Solver
                        </span>
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">
                        I build scalable web applications and love solving
                        real-world problems with clean and efficient code.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="min-w-[160px] rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-4"
                            >
                                <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                                    {stat.value}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
                        >
                            View My Work →
                        </a>

                        <a
                            href="#"
                            className="rounded-lg border border-[var(--color-border)] px-6 py-3 font-medium text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                        >
                            Download Resume ↓
                        </a>
                    </div>

                </div>
                <div className="relative hidden h-[560px] lg:block">

                    {/* Developer Background */}
                    <img
                        src={developerBg}
                        alt=""
                        className="hero-background-image absolute -right-32 -top-8 z-0 h-[650px] w-[750px] max-w-none object-cover object-center opacity-75"
                    />


                    {/* Code card */}
                    <div className="absolute -right-7 top-85 z-20 w-full max-w-[430px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/90 p-6 shadow-[var(--shadow-glow)]">

                        <div className="mb-5 flex items-center justify-between">
                            <span className="text-sm text-[var(--color-text-muted)]">
                                developer.js
                            </span>

                            <span className="text-[var(--color-primary)]">
                                &lt;/&gt;
                            </span>
                        </div>

                        <pre className="overflow-hidden text-xs leading-6 text-[var(--color-text-secondary)]">
                            <code>
                                {`const Karan = {
  code: ["C++", "Python", "JavaScript"],
  skills: ["MERN", "DSA", "SQL"],
  focus: "Full Stack Development"
};

// Always learning 🚀`}
                            </code>
                        </pre>

                    </div>

                </div>



            </div>
        </section >
    );
}
export default Hero;