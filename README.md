# Morvath — วาฬสเปิร์มวายร้าย

เว็บไซต์แฟ้มออกแบบตัวละคร ธีมมหาสมุทรมืด (Vite + React + TypeScript)

## เริ่มใช้งาน

```bash
npm install
npm run dev      # เปิดเซิร์ฟเวอร์พัฒนา http://localhost:5173
npm run build    # ตรวจ type + build ไปที่ dist/
npm run preview  # ดูผลลัพธ์จาก build
```

## โครงสร้าง

```
src/
  data/character.ts      ← ข้อมูลตัวละครทั้งหมด (ชื่อ ค่าพลัง พลังพิเศษ ตำนาน ชุดสี)
  styles/theme.css       ← ตัวแปรสีและสไตล์ทั้งหมด
  components/
    Hero.tsx             หน้าแรก + ภาพวาฬ
    WhaleSvg.tsx         ภาพเงาวาฬสเปิร์ม (SVG)
    Profile.tsx          ข้อมูลทั่วไป แรงจูงใจ จุดอ่อน
    Stats.tsx            แถบค่าพลัง
    Abilities.tsx        การ์ดพลังพิเศษ
    Lore.tsx             ไทม์ไลน์ตำนาน
    DesignSheet.tsx      ภาพเงา ชุดสี บันทึกการออกแบบ
    DepthMeter.tsx       มาตรวัดความลึกตามการเลื่อน
    OceanBackground.tsx  ฟองอากาศและอนุภาคเรืองแสง
    Section.tsx, Nav.tsx
```

แก้ไขตัวละครได้ที่ `src/data/character.ts` ไฟล์เดียว

## เพิ่มภาพคอนเซ็ปต์

1. วางไฟล์ภาพ (`.png` `.jpg` `.webp` หรือ `.svg`) ไว้ใน `public/concept/`
2. เพิ่มรายการใน `concepts` ของ `src/data/character.ts`:
   ```ts
   { file: 'my-sketch.png', title: { th: '...', en: '...' }, caption: { th: '...', en: '...' } },
   ```
ภาพย่อในแกลเลอรีครอปเป็นสัดส่วน 12:7 ส่วนกล่องดูภาพขยายจะแสดงภาพเต็มโดยไม่ครอป

## สองภาษา (ไทย / English)

- ข้อความทุกช่องเขียนเป็น `{ th: '...', en: '...' }`
- ข้อมูลตัวละครอยู่ใน `src/data/character.ts` ข้อความเมนูและหัวข้ออยู่ใน `src/i18n/ui.ts`
- ปุ่ม TH / EN บนแถบนำทางจะจำภาษาที่เลือกไว้ ครั้งแรกจะเลือกตามภาษาของเบราว์เซอร์ ถ้าไม่ใช่ภาษาอังกฤษจะเป็นไทย
- ถ้าลืมใส่คำแปลภาษาใดภาษาหนึ่ง TypeScript จะแจ้ง error ตอน `npm run build`
