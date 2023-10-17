import { mount, VueWrapper } from '@vue/test-utils';
import { VHomeView, type VHomeViewProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VHomeViewProps = {};

describe('VHomeView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VHomeView, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

