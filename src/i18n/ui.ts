import type { L } from './LanguageContext';

/** ข้อความของส่วนติดต่อผู้ใช้ (ไม่ใช่ข้อมูลตัวละคร) */
export const ui = {
  pageTitle: { th: 'มอร์วาธ — วาฬสเปิร์มวายร้าย', en: 'Morvath — The Sperm Whale Villain' },
  pageDescription: {
    th: 'แฟ้มออกแบบตัวละครวายร้าย: มอร์วาธ วาฬสเปิร์มราชันแห่งห้วงอนธการ',
    en: 'Villain character design file: Morvath, the sperm whale Abyssal Sovereign',
  },

  nav: {
    profile: { th: 'ประวัติ', en: 'Profile' },
    stats: { th: 'ค่าพลัง', en: 'Stats' },
    abilities: { th: 'พลังพิเศษ', en: 'Abilities' },
    lore: { th: 'ตำนาน', en: 'Lore' },
    design: { th: 'งานออกแบบ', en: 'Design' },
    menu: { th: 'เมนู', en: 'Menu' },
    close: { th: 'ปิด', en: 'Close' },
    language: { th: 'ภาษา', en: 'Language' },
  },

  hero: {
    file: { th: 'แฟ้มตัวละครวายร้าย', en: 'Villain dossier' },
    cta: { th: 'ดำดิ่งลงไป', en: 'Dive deeper' },
  },

  depth: {
    unit: { th: 'ม.', en: 'm' },
    label: { th: 'ความลึกปัจจุบัน', en: 'Current depth' },
    sunlight: { th: 'เขตแสงแดด', en: 'Sunlight zone' },
    twilight: { th: 'เขตสนธยา', en: 'Twilight zone' },
    midnight: { th: 'เขตเที่ยงคืน', en: 'Midnight zone' },
  },

  profile: {
    kicker: { th: '01 · ประวัติ', en: '01 · Profile' },
    title: { th: 'ข้อมูลตัวละคร', en: 'Character Profile' },
    motivation: { th: 'แรงจูงใจ', en: 'Motivation' },
    weaknesses: { th: 'จุดอ่อน', en: 'Weaknesses' },
  },

  stats: {
    kicker: { th: '02 · ค่าพลัง', en: '02 · Stats' },
    title: { th: 'ศักยภาพการต่อสู้', en: 'Combat Potential' },
    average: { th: 'คะแนนภัยคุกคามเฉลี่ย', en: 'Average threat score' },
    edit: { th: 'ปรับค่าพลัง', en: 'Edit stats' },
    done: { th: 'เสร็จสิ้น', en: 'Done' },
    reset: { th: 'คืนค่าเดิม', en: 'Reset' },
    copy: { th: 'คัดลอกเป็นโค้ด', en: 'Copy as code' },
    copied: { th: 'คัดลอกแล้ว ✓', en: 'Copied ✓' },
    modified: { th: 'ปรับแต่งแล้ว', en: 'Customized' },
    hint: {
      th: 'ลากแถบหรือใช้ปุ่มลูกศรเพื่อปรับค่า ค่าจะถูกจำไว้ในเบราว์เซอร์นี้ หากต้องการให้เป็นค่าถาวร กด “คัดลอกเป็นโค้ด” แล้ววางแทนส่วน stats ใน src/data/character.ts',
      en: 'Drag a slider or use the arrow keys. Values are remembered in this browser. To make them permanent, click “Copy as code” and paste over the stats block in src/data/character.ts.',
    },
    rankOmega: { th: 'ระดับหายนะ (Ω)', en: 'Cataclysmic (Ω)' },
    rankHigh: { th: 'อันตรายสูง', en: 'High threat' },
    rankMid: { th: 'คุกคาม', en: 'Menacing' },
    rankLow: { th: 'ภัยต่ำ', en: 'Low threat' },
  },

  abilities: {
    kicker: { th: '03 · พลังพิเศษ', en: '03 · Abilities' },
    title: { th: 'อาวุธแห่งห้วงลึก', en: 'Weapons of the Deep' },
  },

  lore: {
    kicker: { th: '04 · ตำนาน', en: '04 · Lore' },
    title: { th: 'จากลูกวาฬสู่ราชัน', en: 'From Calf to Sovereign' },
  },

  design: {
    kicker: { th: '05 · งานออกแบบ', en: '05 · Design' },
    title: { th: 'แผ่นงานคอนเซ็ปต์', en: 'Concept Sheet' },
    silhouette: { th: 'ภาพเงา (Silhouette)', en: 'Silhouette' },
    silhouetteNote: {
      th: 'ภาพเงาต้องจำได้ทันทีแม้เหลือแค่โครงร่างสีดำ',
      en: 'The silhouette must read instantly, even as a solid black shape.',
    },
    palette: { th: 'ชุดสีประจำตัว', en: 'Signature Palette' },
    paletteHint: { th: 'คลิกที่สีเพื่อคัดลอกรหัส', en: 'Click a swatch to copy its hex code.' },
    copied: { th: 'คัดลอกแล้ว ✓', en: 'Copied ✓' },
    notes: { th: 'บันทึกการออกแบบ', en: 'Design Notes' },
  },

  footer: {
    text: { th: 'แฟ้มออกแบบตัวละคร — แก้ข้อมูลได้ที่', en: 'Character design file — edit the data in' },
  },

  whaleAlt: {
    th: 'ภาพเงาวาฬสเปิร์มวายร้าย มอร์วาธ',
    en: 'Silhouette of Morvath, the sperm whale villain',
  },
} satisfies Record<string, L | Record<string, L>>;
