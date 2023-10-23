import { mount, VueWrapper } from '@vue/test-utils';
import { VDetailView, type VDetailViewProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VDetailViewProps = {};

describe('VDetailView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VDetailView, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
