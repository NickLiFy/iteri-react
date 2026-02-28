import logoWilo from '../assets/references/wilo_logo.png';
import logoKuka from '../assets/references/kuka_logo.png';
import logoAbb from '../assets/references/abb_logo.png';
import logoSiemens from '../assets/references/siemens_logo.png';
import logoSchneiderElectric from '../assets/references/SchneiderElectric_logo.png';
import logoBoschRexroth from '../assets/references/BoschRexroth_logo.png';
import logoMitsubishiElectric from '../assets/references/MitsubishiElectric_logo.png';
import logoEmerson from '../assets/references/emerson_logo.png';

const partners = [
    { name: 'Wilo', img: logoWilo },
    { name: 'Kuka', img: logoKuka },
    { name: 'ABB', img: logoAbb },
    { name: 'Siemens', img: logoSiemens },
    { name: 'Schneider Electric', img: logoSchneiderElectric },
    { name: 'Bosch Rexroth', img: logoBoschRexroth },
    { name: 'Mitsubishi Electric', img: logoMitsubishiElectric },
    { name: 'Emerson', img: logoEmerson },
];

export const References = () => {
    return (
        <section id="reference" className="py-20 bg-brand-bg border-y border-white/5" style={{
            // Радиальный градиент: в центре светлее (#3c3c3c), по краям наш базовый (#2C2C2C)
            background: 'radial-gradient(circle at center, #3C3C3C 10%, #2C2C2C 90%)'
        }}>
            <div className="container mx-auto px-6">
                <h1 className="hidden font-black text-brand-white uppercase mb-10 tracking-tight">
                    Reference
                </h1>


                {/* Сетка логотипов */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex justify-center items-center h-24 px-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="lg:max-w-[150px] sm:max-w-[100px] max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};