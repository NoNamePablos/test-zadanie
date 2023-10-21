import { mount, VueWrapper } from '@vue/test-utils';
import { VDataTable, type VDataTableProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VDataTableProps = {};

describe('VDataTable', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VDataTable, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
