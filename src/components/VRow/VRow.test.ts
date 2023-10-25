import { mount, VueWrapper } from '@vue/test-utils';
import { VRow, type VRowProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VRowProps = {};

describe('VRow', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VRow, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

