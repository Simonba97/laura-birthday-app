import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    size: number;
    opacity: number;
}

const FireworksEffect = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Agrega partículas al array para simular los fuegos artificiales
        const newParticles = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 1,
            opacity: Math.random(),
        }));
        setParticles(newParticles);
    }, []);

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: -1000,
            transition: {
                duration: 1,
                ease: 'linear',
            },
        });
    }, [controls]);

    return (
        <div>
            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    animate={controls}
                    style={{
                        position: 'absolute',
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                        borderRadius: '50%',
                    }}
                />
            ))}
        </div>
    );
};

export default FireworksEffect;
