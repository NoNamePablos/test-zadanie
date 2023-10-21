import { mount, VueWrapper } from '@vue/test-utils';
import { VSortList, type VSortListProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VSortListProps = {};

describe('VSortList', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VSortList, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
