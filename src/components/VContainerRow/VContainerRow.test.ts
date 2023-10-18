import { mount, VueWrapper } from '@vue/test-utils';
import { VContainerRow, type VContainerRowProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VContainerRowProps = {};

describe('VContainerRow', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VContainerRow, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

