import { VButton } from '@/components/VButton';
import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect } from 'vitest';

describe('VButton', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(VButton, {
      shallow: true,
      props: {},
    });
  });
  test('button visual can be link: ', () => {
    wrapper = mount(VButton, {
      shallow: true,
      props: {
        appearance: 'link',
      },
    });
    expect(wrapper.classes('link').toBe(true));
  });
});
