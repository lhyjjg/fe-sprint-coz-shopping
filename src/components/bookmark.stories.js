import { useState } from 'react';
import { Bookmark as Template, BookmarkContainer } from './bookmark';

export default {
  title: 'Basic/Bookmark',
  component: Template,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};


export const Bookmark = (args) => <Template {...args} />;

// 스토리: 레이블과 아이콘이 있는 버튼