import { useState } from 'react';
import { character } from '../data/character';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

/**
 * ส่งออกแฟ้มตัวละครเป็น PDF ผ่านหน้าต่างพิมพ์ของเบราว์เซอร์ (เลือก "Save as PDF")
 * รูปแบบหน้ากระดาษกำหนดไว้ใน @media print ของ theme.css
 */
export function ExportPdfButton() {
  const { lang, t } = useLang();
  const [busy, setBusy] = useState(false);

  const exportPdf = async () => {
    setBusy(true);
    try {
      // ภาพที่ตั้ง loading="lazy" อาจยังไม่โหลด → บังคับโหลดให้ครบก่อนพิมพ์
      const imgs = Array.from(document.images);
      imgs.forEach((img) => (img.loading = 'eager'));
      await Promise.all(imgs.map((img) => img.decode().catch(() => undefined)));
      await document.fonts?.ready;

      // ชื่อเอกสารจะกลายเป็นชื่อไฟล์ PDF ตั้งต้น
      const prevTitle = document.title;
      document.title = `${character.name.en}-character-dossier-${lang}`;
      const restore = () => {
        document.title = prevTitle;
        window.removeEventListener('afterprint', restore);
      };
      window.addEventListener('afterprint', restore);

      window.print();
    } finally {
      setBusy(false);
    }
  };

  return (
    <button className="btn btn--small" onClick={exportPdf} disabled={busy} title={t(ui.pdf.tooltip)}>
      ⤓ {busy ? t(ui.pdf.preparing) : 'PDF'}
    </button>
  );
}
