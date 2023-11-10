import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Tag from './Tag';
import LabelSolid from '@igloo-ui/icons/dist/LabelSolid';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  },
  argTypes: {
    size: {
      options: ['medium', 'small', 'xsmall', 'micro'],
    },
    icon: { control: { type: null } },
    appearance: {
      table: {
        type: {
          summary:
            'default | primary | progress | positive | caution | negative | neutral',
        },
      },
      options: [
        'default',
        'primary',
        'progress',
        'positive',
        'caution',
        'negative',
        'neutral',
      ],
    },
  },
} as Meta<typeof Tag>;

export const Overview = {
  args: {
    children: 'Tag content',
    dismissible: true,
    color: '#FCD35A',
    appearance: 'default',
  },
};

export const Appearances = () => (
  <Section style={{ flexWrap: 'wrap', gap: 'var(--space-3) 0' }}>
    <Tag appearance="default">Default Tag</Tag>
    <Tag appearance="progress">Progress Tag</Tag>
    <Tag appearance="positive">Positive Tag</Tag>
    <Tag appearance="caution">Caution Tag</Tag>
    <Tag appearance="negative">Negative Tag</Tag>
    <Tag appearance="primary">Primary Tag</Tag>
    <Tag appearance="neutral">Neutral Tag</Tag>
  </Section>
);

export const Dismissible = () => (
  <Section>
    <Tag dismissible>
      Dismissible Tag
    </Tag>
  </Section>
);

export const Icons = () => (
  <Section
    style={{ alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3) 0' }}
  >
    <Tag icon={<LabelSolid size="small" />}>Tag with Icon</Tag>
    <Tag color="#9A3842">
      Tag with a color icon from color
    </Tag>
    <Tag
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3tCC4oJsa4ZZsiEDIhWi06EyN3iHYMoOg&usqp=CAU"
    >
      Tag with an image icon
    </Tag>
  </Section>
);

export const Rounded = () => (
  <Section style={{ alignItems: 'center' }}>
    <Tag rounded>Rounded Tag</Tag>
    <Tag rounded size="small">
      Rounded Small Tag
    </Tag>
  </Section>
);

export const Sizes = () => (
  <Section style={{ alignItems: 'center' }}>
    <Tag size="medium">Medium Tag</Tag>
    <Tag size="small">Small Tag</Tag>
    <Tag size="xsmall">Xsmall Tag</Tag>
    <Tag size="micro">Micro Tag</Tag>
  </Section>
);

export const Ellipsis = () => (
  <Section>
    <Tag color="#00A587" appearance="neutral">
      Really long text so that the ellipsis will show
    </Tag>
  </Section>
);

export const Error = () => (
  <Section>
    <Tag color="#00A587" hasError>
      Really long text so that the ellipsis will show
    </Tag>
  </Section>
);
