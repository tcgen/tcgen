/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'introduction',
    'installation',
    'getting-started',
    {
      type: 'category',
      label: 'Topic Guides',
      link: {
        type: 'generated-index',
        slug: '/topic-guides',
        description: 'In this guide, we will learn each aspect of TCFrame more thoroughly. Each section may have notes at the end, explaining the current limitations and future plans of the corresponding aspect.',
      },
      items: [
        'topic-guides/problem-package',
        'topic-guides/spec',
        'topic-guides/io-variables',
        'topic-guides/io-formats',
        'topic-guides/styles',
        'topic-guides/constraints',
        'topic-guides/subtasks',
        'topic-guides/test-cases',
        'topic-guides/test-groups',
        'topic-guides/multi-case',
        'topic-guides/grading',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'generated-index',
        slug: '/tutorials',
        description: 'Here, you can find case studies and best practices on how to write your spec files. It is expected that you have already read the getting started guide before reading through the tutorials.',
      },
      items: [
        'tutorials/tutorial-1',
        'tutorials/tutorial-2',
      ]
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/1_6_0',
        'release-notes/1_5_0',
        'release-notes/1_4_0',
        'release-notes/1_3_0',
        'release-notes/1_2_1',
        'release-notes/1_2_0',
        'release-notes/1_1_0',
        'release-notes/1_0_1',
        'release-notes/1_0_0',
        'release-notes/0_7_0',
        'release-notes/0_6_0',
        'release-notes/0_5_0',
        'release-notes/0_4_0',
        'release-notes/0_3_0',
        'release-notes/0_2_0',
        'release-notes/0_1_0',
      ]
    },
  ],
  apiSidebar: [{type: 'autogenerated', dirName: 'api'}],
};

export default sidebars;
