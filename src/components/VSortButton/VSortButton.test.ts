import { mount, VueWrapper } from '@vue/test-utils';
import { VSortButton, type VSortButtonProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VSortButtonProps = {};

describe('VSortButton', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VSortButton, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
