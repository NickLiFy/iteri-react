export const tokens = {
 colors: {
 bg: '#2C2C2C',
 bgLighter: '#3C3C3C',
 white: '#F4F4F4',
 muted: '#D8D8D8',
 orange: '#FF8D12',

 //Градиенты для карточек

 services: {
 heating: {
 bg: 'linear-gradient(180deg, #E97900 0%, #763D00 100%)',
 icon: 'linear-gradient(180deg, #FFAF59 0%, #FF8400 100%)',
 },
 plumbing: {
 bg: 'linear-gradient(180deg, #0F7DB2 0%, #07374E 100%)',
 icon: 'linear-gradient(180deg, #3CC0FF 0%, #B2E6FF 100%)',
 },
 electrical: {
 bg: 'linear-gradient(180deg, #20722D 0%, #0D2911 100%)',
 icon: 'linear-gradient(180deg, #1FDB3D 0%, #9FFFAE 100%)',
 }
 }
 },

 shadows: {
 orangeGlow: '0 0 20px 0 rgba(255, 141, 18, 0.5)',
 }
} as const;