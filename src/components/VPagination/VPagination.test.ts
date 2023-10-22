import { mount, VueWrapper } from '@vue/test-utils';
import { VPagination, type VPaginationProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VPaginationProps = {};

describe('VPagination', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VPagination, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
