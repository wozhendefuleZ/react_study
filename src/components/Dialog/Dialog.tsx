import { motion, AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from '@iconify/react';

const Dialog = ({
  onDestroy,
  node,
  title,
}: {
  onDestroy: () => void;
  node?: React.ReactNode;
  title?: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const index = useRef(-1);

  const close = useCallback(() => {
    hooks.splice(index.current, 1);
    removeEventListener();
    setShow(false);
    setTimeout(onDestroy, 200);
  }, [onDestroy]);

  useEffect(() => {
    setShow(true);
    index.current = hooks.push(close) - 1;
  }, [close]);

  const baseTitle = (
    <>
      <div className="flex gap-[5px] items-center">
        <span className="text-[18px]">🧀</span>
      </div>
      <div className="ml-auto">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={close}
        >
          <Icon
            icon="heroicons:x-circle-20-solid"
            className="text-[25px] text-red-500"
          />
        </motion.button>
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 h-full w-full bg-white bg-opacity-20 grid place-content-center"
          onClick={close}
        >
          <motion.div
            className="min-w-[500px] min-h-[400px] bg-white rounded-md flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-b-solid border-b-gray-300 p-[8px_16px] flex">
              {title ? title : baseTitle}
            </div>
            {/* 内容区域 */}
            {node}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

let hooks: (() => void)[] = [];
const closeHandle = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    hooks[hooks.length - 1]?.();
  }
  removeEventListener();
};

const removeEventListener = () => {
  hooks.length < 1 && document.removeEventListener('keydown', closeHandle);
};

const closeDialog = () => {
  hooks[hooks.length - 1]?.();
};

const show = (component?: React.ReactNode, title?: React.ReactNode) => {
  const dialog = document.createElement('div');
  createRoot(dialog).render(
    <Dialog
      onDestroy={() => {
        dialog.remove();
      }}
      node={component}
      title={title}
    />
  );
  document.body.appendChild(dialog);
  document.addEventListener('keydown', closeHandle);
};

export default { show, closeDialog };
