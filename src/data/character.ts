// ข้อมูลตัวละครทั้งหมดอยู่ที่ไฟล์นี้ — ข้อความทุกช่องมีสองภาษา { th, en }
import type { L } from '../i18n/LanguageContext';

export interface Stat {
  label: L;
  value: number; // 0–100
}

export interface Ability {
  name: L;
  tag: string;
  icon: string;
  description: L;
}

export interface LoreEvent {
  era: L;
  title: L;
  text: L;
}

export interface Swatch {
  name: string;
  hex: string;
  role: L;
}

export const character = {
  name: { th: 'มอร์วาธ', en: 'Morvath' },
  title: { th: 'ราชันแห่งห้วงอนธการ', en: 'The Abyssal Sovereign' },
  quote: {
    th: 'พวกเจ้าล่าเราด้วยฉมวก… ข้าจะล่าพวกเจ้าด้วยความเงียบ',
    en: 'You hunted us with harpoons… I will hunt you with silence.',
  },
  threatLevel: { th: 'ระดับหายนะ (Class-Ω)', en: 'Cataclysmic (Class-Ω)' },

  profile: [
    {
      label: { th: 'สายพันธุ์', en: 'Species' },
      value: { th: 'วาฬสเปิร์ม (Physeter macrocephalus)', en: 'Sperm whale (Physeter macrocephalus)' },
    },
    { label: { th: 'อายุ', en: 'Age' }, value: { th: 'ประมาณ 214 ปี', en: 'About 214 years' } },
    { label: { th: 'ความยาว', en: 'Length' }, value: { th: '24 เมตร', en: '24 meters' } },
    { label: { th: 'น้ำหนัก', en: 'Weight' }, value: { th: '65 ตัน', en: '65 tonnes' } },
    {
      label: { th: 'ถิ่นที่อยู่', en: 'Lair' },
      value: { th: 'ร่องลึกนอร์ธฟอลล์ ความลึก 3,000 เมตร', en: 'Northfall Trench, 3,000 m deep' },
    },
    {
      label: { th: 'ลักษณะเด่น', en: 'Distinguishing marks' },
      value: {
        th: 'แผลฉมวก 7 รอย, รอยดูดหมึกยักษ์ทั่วหัว, ดวงตาเรืองแสงสีแดง',
        en: 'Seven harpoon scars, giant-squid sucker marks across the head, glowing red eye',
      },
    },
  ] satisfies { label: L; value: L }[],

  motivation: {
    th: 'ทวงคืนมหาสมุทรจากมนุษย์ผิวน้ำ และล้างแค้นให้ฝูงที่ถูกล่าจนสิ้นในยุคการล่าวาฬ',
    en: 'Reclaim the ocean from the surface-dwellers and avenge the pod wiped out in the whaling era.',
  },
  weaknesses: [
    { th: 'ต้องขึ้นมาหายใจที่ผิวน้ำทุก 90 นาที', en: 'Must surface to breathe every 90 minutes' },
    {
      th: 'เสียงเพลงของวาฬหลังค่อมทำให้ระลึกถึงแม่และลังเล',
      en: 'Humpback whale song reminds him of his mother and makes him hesitate',
    },
    {
      th: 'โซนาร์ใช้การไม่ได้ในน้ำที่ปั่นป่วนรุนแรง',
      en: 'His sonar fails in violently turbulent water',
    },
  ] satisfies L[],

  stats: [
    { label: { th: 'พละกำลัง', en: 'Strength' }, value: 96 },
    { label: { th: 'โซนาร์', en: 'Sonar' }, value: 99 },
    { label: { th: 'ดำน้ำลึก', en: 'Deep diving' }, value: 94 },
    { label: { th: 'ความเจ้าเล่ห์', en: 'Cunning' }, value: 88 },
    { label: { th: 'ความอดทน', en: 'Endurance' }, value: 90 },
    { label: { th: 'ความเร็ว', en: 'Speed' }, value: 62 },
  ] satisfies Stat[],

  abilities: [
    {
      name: { th: 'คลิกมรณะ', en: 'Death Click' },
      tag: 'Death Click',
      icon: '◉',
      description: {
        th: 'ปล่อยเสียงคลิกดัง 230 เดซิเบล ซึ่งเป็นเสียงที่ดังที่สุดในอาณาจักรสัตว์ ทำให้ตัวเรือสั่นจนร้าวและเรดาร์ใช้การไม่ได้',
        en: 'Unleashes a 230-decibel click, the loudest sound in the animal kingdom, cracking hulls and blinding radar.',
      },
    },
    {
      name: { th: 'ดิ่งสู่อนธการ', en: 'Abyss Dive' },
      tag: 'Abyss Dive',
      icon: '▼',
      description: {
        th: 'หายวับลงสู่ความลึก 3,000 เมตรในพริบตา ซึ่งไม่มีเรือดำน้ำใดตามไปถึง แล้วโผล่กลับขึ้นมาจากจุดที่ไม่มีใครคาดคิด',
        en: 'Vanishes to 3,000 meters where no submarine can follow, then resurfaces where no one expects.',
      },
    },
    {
      name: { th: 'พุ่งชนทลายเรือ', en: 'Spermaceti Ram' },
      tag: 'Spermaceti Ram',
      icon: '⬢',
      description: {
        th: 'อัดน้ำมันสเปอร์มาเซติในหัวให้แข็งดังเหล็ก แล้วพุ่งชนด้วยมวล 65 ตัน แรงพอจะผ่ากระดูกงูเรือเป็นสองท่อน',
        en: 'Hardens the spermaceti in his head like iron and rams with 65 tonnes of mass, enough to snap a keel in two.',
      },
    },
    {
      name: { th: 'บัญชาห้วงลึก', en: 'Abyssal Command' },
      tag: 'Abyssal Command',
      icon: '✦',
      description: {
        th: 'ใช้คลื่นโซนาร์ความถี่ต่ำครอบงำสิ่งมีชีวิตใต้ทะเลลึก ตั้งแต่ฝูงปลาเรืองแสงไปจนถึงหมึกยักษ์ที่เคยเป็นศัตรู',
        en: 'Low-frequency sonar bends deep-sea creatures to his will, from glowing fish swarms to the giant squid he once fought.',
      },
    },
  ] satisfies Ability[],

  lore: [
    {
      era: { th: 'ยุคการล่าวาฬ', en: 'The Whaling Era' },
      title: { th: 'ลูกวาฬผู้รอดชีวิต', en: 'The Surviving Calf' },
      text: {
        th: 'ลูกวาฬตัวน้อยเห็นแม่และฝูงถูกฉมวกลากขึ้นเรือทีละตัว มันซ่อนตัวอยู่ใต้ซากเรืออับปางจนเสียงสุดท้ายเงียบลง',
        en: 'A young calf watched his mother and pod hauled aboard one by one. He hid beneath a shipwreck until the last cry fell silent.',
      },
    },
    {
      era: { th: '100 ปีต่อมา', en: '100 Years Later' },
      title: { th: 'เจ็ดฉมวก', en: 'Seven Harpoons' },
      text: {
        th: 'นักล่ายิงฉมวกโดนมันถึงเจ็ดครั้ง แต่ไม่มีครั้งไหนสังหารได้ ชาวเรือเริ่มเรียกมันว่า “เงาที่ไม่ยอมตาย”',
        en: 'Hunters struck him with seven harpoons, yet none could kill him. Sailors began calling him “the shadow that will not die.”',
      },
    },
    {
      era: { th: 'สงครามห้วงลึก', en: 'War of the Deep' },
      title: { th: 'ชัยชนะเหนือคราเคน', en: 'Victory over the Kraken' },
      text: {
        th: 'มันดิ่งลงไปสู้กับหมึกยักษ์ที่ครองห้วงลึก และกลับขึ้นมาพร้อมรอยดูดทั่วหัวและบัลลังก์ใหม่',
        en: 'He dove to battle the giant squid that ruled the abyss, and returned with sucker scars across his head and a new throne.',
      },
    },
    {
      era: { th: 'ปัจจุบัน', en: 'Present Day' },
      title: { th: 'คำประกาศสงคราม', en: 'A Declaration of War' },
      text: {
        th: 'เรือขนส่งหายไปทีละลำ เหลือเพียงเสียงคลิกจังหวะเดียวกันบนเครื่องโซนาร์ ราชันตื่นแล้ว',
        en: 'Cargo ships vanish one after another, leaving only the same rhythmic click on sonar. The Sovereign has awakened.',
      },
    },
  ] satisfies LoreEvent[],

  palette: [
    { name: 'Abyss Black', hex: '#02060D', role: { th: 'ผิวลำตัว / เงา', en: 'Skin / shadow' } },
    { name: 'Trench Blue', hex: '#0B2238', role: { th: 'แสงสะท้อนบนผิว', en: 'Skin highlights' } },
    { name: 'Biolume Cyan', hex: '#5FE3D0', role: { th: 'แสงเรืองรอบตัว', en: 'Bioluminescent rim' } },
    { name: 'Blood Eye', hex: '#FF2E4D', role: { th: 'ดวงตา / จุดอันตราย', en: 'Eye / danger accent' } },
    { name: 'Scar Bone', hex: '#D9D2C3', role: { th: 'แผลเป็น / ฟัน', en: 'Scars / teeth' } },
  ] satisfies Swatch[],

  designNotes: [
    {
      th: 'ศีรษะทรงกล่องใหญ่ราว 1 ใน 3 ของลำตัว สื่อถึงพลังและสติปัญญา',
      en: 'A massive box-shaped head, about a third of the body, signals power and intellect.',
    },
    {
      th: 'กรามล่างแคบ ฟันซี่ใหญ่สีกระดูก เผยให้เห็นเฉพาะตอนโจมตี',
      en: 'A narrow lower jaw with large bone-colored teeth, revealed only when attacking.',
    },
    {
      th: 'แผลเป็นเป็นเส้นสีจางตัดกับผิวดำ เล่าประวัติโดยไม่ต้องใช้คำพูด',
      en: 'Pale scar lines against black skin tell his history without words.',
    },
    {
      th: 'แสงสีแดงที่ดวงตาเป็นจุดเดียวที่อบอุ่นบนตัว และชวนให้รู้สึกไม่ปลอดภัย',
      en: 'The red eye is the only warm color on him, and it feels unsafe.',
    },
  ] satisfies L[],
};
