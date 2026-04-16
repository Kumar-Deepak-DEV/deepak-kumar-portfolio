import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // Particles loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="fixed inset-0 -z-20"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repel",
                        },
                        resize: true,
                    },
                    modes: {
                        repel: {
                            distance: 150,
                            duration: 0.4,
                            factor: 60,
                            speed: 1,
                            maxSpeed: 10,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#7b42f6", "#00d2ff", "#ffffff"],
                    },
                    links: {
                        enable: false, // Dust shouldn't have connective lines
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 0.8, // Slow fluid moving
                        straight: false,
                        warp: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 200, // Very dense nebula dust
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.8 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 2.5 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
