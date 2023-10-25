import { mount, VueWrapper } from '@vue/test-utils';
import { VRating, type VRatingProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VRatingProps = {};

describe('VRating', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VRating, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});

