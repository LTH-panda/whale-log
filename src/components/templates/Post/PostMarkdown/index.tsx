import React from 'react';
import ReactMarkdwon from 'react-markdown';
import 'github-markdown-css';

export type PostMarkdownProps = {
  markdown: string;
};

function PostMarkdown({markdown}: PostMarkdownProps) {
  return (
    <article className="p-8 text-xl font-light bg-white rounded-lg shadow-sm markdown-body">
      <ReactMarkdwon>{markdown}</ReactMarkdwon>
    </article>
  );
}

export default PostMarkdown;
