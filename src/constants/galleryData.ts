import { Zap, Droplets, Flame, type LucideIcon } from 'lucide-react';

export interface SubCategory {
 id: string;
 label: string;
 location?: string; // Теперь ТУТ (для домов)
 description?: string; // И тут
}

interface ServiceConfig {
 title: string;
 Icon?: LucideIcon; // Сделали необязательным (?), так как у домов иконок нет
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
 { id: 'rekonstrukce-koupelen', label: 'Rekonstrukce koupelen' },
 { id: 'havarijni-servis', label: 'Havarijní servis' }
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

export const housesConfig: Record<string, ServiceConfig> = {
 'rodinny-dum-1': {
 title: 'Rodinný dům 1',
 subCategories: [
 { id: 'obyvaci-pokoj', label: 'Obývací pokoj' },
 { id: 'kuchyne', label: 'Kuchyně a jídelna' },
 { id: 'loznice', label: 'Ložnice' },
 { id: 'koupelna', label: 'Koupelna' }
 ]
 },
 'rodinny-dum-2': {
 title: 'Rodinný dům 2',
 subCategories: [
 { id: 'exterier', label: 'Exteriér и zahrada' },
 { id: 'obyvaci-pokoj', label: 'Obývací pokoj' },
 { id: 'pracovna', label: 'Pracovna' }
 ]
 },
 'rodinny-dum-3': {
 title: 'Rodinný dům 3',
 subCategories: [
 { id: 'exterier', label: 'Exteriér и zahrada' },
 { id: 'obyvaci-pokoj', label: 'Obývací pokoj' },
 { id: 'pracovna', label: 'Pracovna' }
 ]
 },
 'rodinny-dum-4': {
 title: 'Rodinný dům 4',
 subCategories: [
 { id: 'exterier', label: 'Exteriér и zahrada' },
 { id: 'obyvaci-pokoj', label: 'Obývací pokoj' },
 { id: 'pracovna', label: 'Pracovna' }
 ]
 }
};