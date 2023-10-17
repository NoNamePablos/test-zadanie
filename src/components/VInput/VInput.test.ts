import { mount, VueWrapper } from '@vue/test-utils';
import { VInput, type VInputProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VInputProps = {};

describe('VInput', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VInput, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

