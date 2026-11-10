import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}

/** ส่วนเนื้อหาที่ค่อยๆ ปรากฏเมื่อเลื่อนมาถึง */
export function Section({ id, kicker, title, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={visible ? 'section is-visible' : 'section'}>
      <p className="eyebrow">{kicker}</p>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}
