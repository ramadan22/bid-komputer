'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

import { PropsWithChildren } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import {
  BaseEditor,
  BaseElement,
  Editor,
  Element as SlateElement,
  Transforms,
} from 'slate';
import { useSlate } from 'slate-react';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

export const isBlockActive = (editor: BaseEditor, format: string, blockType: any = 'type') => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n)
        && SlateElement.isElement(n)
        && (n as any)[blockType] === format,
    })
  );

  return !!match;
};

export const toggleBlock = (editor: BaseEditor, format: string) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => {
      const m = n as BaseElement & { type: string };

      return !Editor.isEditor(m)
      && SlateElement.isElement(m)
      && LIST_TYPES.includes(m.type)
      && !TEXT_ALIGN_TYPES.includes(format);
    },
    split: true,
  });

  let newProperties;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    } as { align?: string } | { type?: string };
  } else {
    let type: string;

    if (isActive) {
      type = 'paragraph';
    } else if (isList) {
      type = 'list-item';
    } else {
      type = format;
    }

    newProperties = {
      type,
    };
  }
  Transforms.setNodes(editor, newProperties as Partial<Node>);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isMarkActive = (editor: BaseEditor, format: string) => {
  const marks = Editor.marks(editor) as {
    bold?: boolean,
    italic?: boolean,
  };

  return (marks && Object.keys(marks).includes(format)) || false;
};

export const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const Element = ({
  attributes,
  children,
  element
}: PropsWithChildren<{ attributes: any; element: any, children: React.ReactNode }>) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'quote':
      return (
        <blockquote className="text-xl italic font-semibold text-gray-900">
          <RiDoubleQuotesL size={15} />
          <span>{children}</span>
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes} className="list-disc">
          {children}
        </ul>
      );
    case 'h1':
      return (
        <h1 style={style} {...attributes} className="font-extrabold text-3xl">
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 style={style} {...attributes} className="font-semibold text-xl">
          {children}
        </h2>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

export const Leaf = ({
  attributes,
  children,
  leaf,
}: PropsWithChildren<{ attributes: any; leaf: any, children: React.ReactNode }>) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export const BlockButton = ({ format, icon }: {format: string, icon: React.ReactNode}) => {
  const editor = useSlate();
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
  );

  return (
    <button
      type="button"
      className={`p-1 text-xl rounded mx-1 ${isActive ? 'bg-gray-300' : ''}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

export const MarkButton = ({ format, icon }: { format: string, icon: React.ReactNode }) => {
  const editor = useSlate();
  const isActive = isMarkActive(editor, format);
  return (
    <button
      type="button"
      className={`p-2 text-xl rounded mx-1 ${isActive ? 'bg-gray-300' : ''}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};
