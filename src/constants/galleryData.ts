import { Zap, Droplets, Flame, type LucideIcon } from 'lucide-react';

interface SubCategory {
    id: string;
    label: string;
}

interface ServiceConfig {
    title: string;
    Icon: LucideIcon;
    subCategories: SubCategory[];
}

export const servicesConfig: Record<string, ServiceConfig> = {
    'elektrikarse-prace': {
        title: 'Elektrikářské práce',
        Icon: Zap,
        subCategories: [
            { id: 'nove-elektroinstalace', label: 'Nové elektroinstalace' },
            { id: 'revize', label: 'Revize' },
            { id: 'inteligentni-domacnost', label: 'Inteligentní domácnost' },
            { id: 'hromosvody', label: 'Hromosvody' }
        ]
    },
    'instalaterske-prace': {
        title: 'Vodoinstalace',
        Icon: Droplets,
        subCategories: [
            { id: 'rozvody-vody', label: 'Rozvody vody' },
            { id: 'kanalizace', label: 'Kanalizace' },
            { id: 'rekonstrukce-koupelen', label: 'Rekonstrukce koupelen' }
        ]
    },
    'topenarske-prace': {
        title: 'Topenářské práce',
        Icon: Flame,
        subCategories: [
            { id: 'montaz-kotlu', label: 'Montáž kotlů' },
            { id: 'podlahove-vytapeni', label: 'Podlahové vytápění' },
            { id: 'tepelna-cerpadla', label: 'Tepelná čerpadla' },
            { id: 'servis-a-revize', label: 'Servis a revize' }
        ]
    }
};