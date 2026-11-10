import { useCallback, useEffect, useState } from 'react';
import { character } from '../data/character';

const STORAGE_KEY = 'swv-stats';
const defaults = character.stats.map((s) => s.value);

function load(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const saved = JSON.parse(raw) as Record<string, number>;
    return character.stats.map((s, i) => {
      const v = saved[s.label.en];
      return typeof v === 'number' && v >= 0 && v <= 100 ? v : defaults[i];
    });
  } catch {
    return defaults;
  }
}

/** ค่าพลังที่ปรับได้ จำไว้ในเบราว์เซอร์ของผู้ชม (ไม่แก้ไฟล์ character.ts) */
export function useStats() {
  const [values, setValues] = useState<number[]>(load);

  useEffect(() => {
    try {
      const data = Object.fromEntries(character.stats.map((s, i) => [s.label.en, values[i]]));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage ถูกบล็อก — ค่ายังใช้ได้จนปิดหน้า */
    }
  }, [values]);

  const setValue = useCallback((index: number, value: number) => {
    setValues((prev) => prev.map((v, i) => (i === index ? value : v)));
  }, []);

  const reset = useCallback(() => setValues(defaults), []);

  const isModified = values.some((v, i) => v !== defaults[i]);
  const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length);

  return { values, setValue, reset, isModified, average, defaults };
}

/** สร้างโค้ดสำหรับวางกลับใน character.ts */
export function statsToCode(values: number[]) {
  const rows = character.stats.map(
    (s, i) => `    { label: { th: '${s.label.th}', en: '${s.label.en}' }, value: ${values[i]} },`,
  );
  return `  stats: [\n${rows.join('\n')}\n  ] satisfies Stat[],`;
}
