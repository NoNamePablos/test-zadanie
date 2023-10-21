import { mount, VueWrapper } from '@vue/test-utils';
import { VDataColumn, type VDataColumnProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VDataColumnProps = {};

describe('VDataColumn', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VDataColumn, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
