import TextOpacity from '@src/components/animationComponents/textOpacity/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/quote/styles/quote.module.scss';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Quote() {
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const textRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <h3 ref={textRef} className={clsx(styles.text, 'h3')}>
        {!isLoading && (
       <TextOpacity textRef={textRef.current} trigger={rootRef.current}>
  Every project starts with choosing the right stack. With hands-on
  experience in full-stack development, AI, and automation, I know
  how to select the tools that ensure performance, scalability,
  and real business impact.
</TextOpacity>

        )}
      </h3>
    </section>
  );
}

export default Quote;
