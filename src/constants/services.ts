import { Flame, Droplets, Zap } from 'lucide-react';

export const specializations = [
    {
        id: 'heating',
        title: 'Topenářské práce',
        items: ['Montáž kotlů', 'Podlahové vytápění', 'Tepelná čerpadla', 'Servis a revize'],
        Icon: Flame,
        variant: 'heating' as const,
        categoryPath: 'topenarske-prace'
    },
    {
        id: 'plumbing',
        title: 'Instalatérské práce',
        items: ['Rozvody vody', 'Kanalizace', 'Rekonstrukce koupelen', 'Havarijní servis'],
        Icon: Droplets,
        variant: 'plumbing' as const,
        categoryPath: 'instalaterske-prace'
    },
    {
        id: 'electrical',
        title: 'Elektrikářské práce',
        items: ['Nové elektroinstalace', 'Revize', 'Inteligentní domácnost', 'Hromosvody'],
        Icon: Zap,
        variant: 'electrical' as const,
        categoryPath: 'elektrikarse-prace'
    }
];