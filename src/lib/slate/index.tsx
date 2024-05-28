'use client';

/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { slateToHtml } from '@slate-serializers/html';
import { useCallback, useMemo } from 'react';
import { LuHeading1, LuHeading2 } from 'react-icons/lu';

import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold, MdFormatItalic,
  MdFormatListBulleted,
  MdFormatQuote,
  MdFormatUnderlined
} from 'react-icons/md';
import { createEditor } from 'slate';
import {
  Editable,
  Slate,
  withReact
} from 'slate-react';
import {
  BlockButton,
  Element,
  Leaf,
  MarkButton
} from './components';

const RichEditor = () => {
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  const initialValue = [
    {
      type: 'empty',
      children: [
        { text: '' },
      ],
    },
  ];

  return (
    <div className="border">
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={() => {
          // console.log(editor.children[0].children[0].text === '');
          // console.log(value);
        }}
      >
        <div className="flex gap-x-2 flex-wrap border-b">
          <BlockButton format="h1" icon={<LuHeading1 size={15} />} />
          <BlockButton format="h2" icon={<LuHeading2 size={15} />} />
          <MarkButton format="bold" icon={<MdFormatBold size={15} />} />
          <MarkButton format="italic" icon={<MdFormatItalic size={15} />} />
          <MarkButton format="underline" icon={<MdFormatUnderlined size={15} />} />
          <BlockButton format="quote" icon={<MdFormatQuote size={15} />} />
          <BlockButton format="bulleted-list" icon={<MdFormatListBulleted size={15} />} />
          <BlockButton format="left" icon={<MdFormatAlignLeft size={15} />} />
          <BlockButton format="center" icon={<MdFormatAlignCenter size={15} />} />
          <BlockButton format="right" icon={<MdFormatAlignRight size={15} />} />
          <BlockButton format="justify" icon={<MdFormatAlignJustify size={15} />} />
        </div>
        <div className="h-32 py-4 px-2.5">
          <Editable
            className="outline-none h-full"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            renderPlaceholder={({ attributes, children }) => (
              <span {...attributes} className="text-base font-normal text-left">
                {children}
              </span>
            )}
            spellCheck
            autoFocus
            onKeyDown={() => {
              // console.log(event.target);
            }}
          />
        </div>
      </Slate>
    </div>
  );
};

export default RichEditor;
