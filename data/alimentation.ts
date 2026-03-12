import { Meal } from '@/types'

export const meals: Meal[] = [
  {
    time: '07:30',
    label: 'Repas 1 — Le carburant du matin',
    name: 'Flocons + Œufs + Banane',
    kcal: 480,
    foods: [
      {
        emoji: '🥣',
        name: 'Flocons d\'avoine',
        prep: '70g dans du lait ou de l\'eau, micro-ondes 2 min',
        macros: { prot: 9, gluc: 42, lip: 5 },
      },
      {
        emoji: '🥚',
        name: '3 œufs entiers',
        prep: 'Brouillés ou au plat, cuisson douce',
        macros: { prot: 21, gluc: 1, lip: 15 },
      },
      {
        emoji: '🍌',
        name: 'Banane',
        prep: '1 banane moyenne (~120g)',
        macros: { prot: 1, gluc: 27, lip: 0 },
      },
    ],
  },
  {
    time: '10:30',
    label: 'Repas 2 — La collation',
    name: 'Fromage blanc + Fruits rouges',
    kcal: 200,
    foods: [
      {
        emoji: '🥛',
        name: 'Fromage blanc 0%',
        prep: '200g, nature sans sucre ajouté',
        macros: { prot: 16, gluc: 8, lip: 0 },
      },
      {
        emoji: '🫐',
        name: 'Fruits rouges',
        prep: '100g (frais ou surgelés)',
        macros: { prot: 1, gluc: 10, lip: 0 },
      },
    ],
  },
  {
    time: '12:30',
    label: 'Repas 3 — Le principal',
    name: 'Pâtes + Escalope + Légumes',
    kcal: 720,
    foods: [
      {
        emoji: '🍝',
        name: 'Pâtes complètes',
        prep: '90g pesées À SEC avant cuisson',
        macros: { prot: 12, gluc: 65, lip: 2 },
        highlight: true,
      },
      {
        emoji: '🍗',
        name: 'Escalope de poulet',
        prep: '180g pesée CRU, grillée ou poêlée sans matière grasse',
        macros: { prot: 45, gluc: 0, lip: 3 },
        highlight: true,
      },
      {
        emoji: '🥦',
        name: 'Légumes verts',
        prep: 'Brocoli, haricots ou courgettes — 200g cuits',
        macros: { prot: 4, gluc: 8, lip: 0 },
      },
      {
        emoji: '🫒',
        name: 'Huile d\'olive',
        prep: '1 cuillère à café (5ml) pour la cuisson',
        macros: { prot: 0, gluc: 0, lip: 5 },
      },
    ],
  },
  {
    time: '19:30',
    label: 'Repas 4 — Le dîner',
    name: 'Pâtes + Escalope + Salade',
    kcal: 580,
    foods: [
      {
        emoji: '🍝',
        name: 'Pâtes complètes',
        prep: '70g pesées À SEC avant cuisson',
        macros: { prot: 9, gluc: 50, lip: 2 },
        highlight: true,
      },
      {
        emoji: '🍗',
        name: 'Escalope de poulet',
        prep: '200g pesée CRU, grillée',
        macros: { prot: 50, gluc: 0, lip: 3 },
        highlight: true,
      },
      {
        emoji: '🥗',
        name: 'Salade verte',
        prep: 'Laitue, tomate, concombre — assaisonnement léger',
        macros: { prot: 2, gluc: 5, lip: 0 },
      },
      {
        emoji: '🫒',
        name: 'Vinaigrette maison',
        prep: '1 cuillère à café d\'huile + vinaigre balsamique',
        macros: { prot: 0, gluc: 1, lip: 5 },
      },
    ],
  },
]

export const totalMacros = {
  kcal: 2150,
  prot: 153,
  gluc: 207,
  lip: 36,
}
