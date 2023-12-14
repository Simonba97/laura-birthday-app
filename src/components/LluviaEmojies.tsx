import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LluviaEmojiesProps {
    emojis: string[];
}

const LluviaEmojies: React.FC<LluviaEmojiesProps> = ({ emojis }) => {
    // Configuración de la animación
    const animationControl = useAnimation();

    const createAnimation = () => {
        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = Math.random() * window.innerHeight;

        return {
            x: `${startPositionX}px`,
            y: `${startPositionY}px`,
            opacity: 1,
            transition: {
                duration: 3,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop' as const,
            },
        };
    };



    // Función para iniciar la animación
    const startAnimation = async () => {
        await animationControl.start(createAnimation()); // Iniciar la animación
    };

    // Iniciar la animación cuando el componente se monta
    React.useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', overflow: 'hidden', fontSize: '60px' }}>
            {/* Renderizar emojis animados */}
            {emojis.map((emoji, index) => (
                <motion.div key={index} animate={animationControl} initial={false} variants={{ open: createAnimation() }}>
                    {emoji}
                </motion.div>
            ))}
        </div>
    );
};

export default LluviaEmojies;
